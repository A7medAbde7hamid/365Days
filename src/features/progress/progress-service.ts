import { requireSupabase } from '@/lib/supabase/client'
import type { DayProgress } from '@/types'

/**
 * Writes the user's own learning progress.
 *
 * Design notes:
 *
 *  * Every call is scoped to the caller. Row Level Security is what actually
 *    enforces that — there is no `.eq('user_id', ...)` here on purpose, because
 *    filtering in the client is not authorization. A malicious client could
 *    simply omit it.
 *
 *  * Completing a day goes through the `complete_curriculum_day` RPC rather than
 *    a plain UPDATE, because the RPC is what awards the 10 points and it
 *    guarantees the award happens at most once.
 *
 *  * The curriculum is authored in TypeScript but stored in Postgres, so we need
 *    the database UUID for a day number. That lookup is cached for the session.
 */

export type SyncState = 'idle' | 'saving' | 'saved' | 'error'

export class ProgressError extends Error {
  // Declared explicitly rather than as a constructor parameter property,
  // because this project enables `erasableSyntaxOnly`.
  readonly cause?: unknown

  constructor(message: string, cause?: unknown) {
    super(message)
    this.name = 'ProgressError'
    this.cause = cause
  }
}

// ---------------------------------------------------------------------------
// day number -> uuid, and day number -> task ids
// ---------------------------------------------------------------------------

let dayIdCache: Map<number, string> | null = null
const taskIdCache = new Map<string, string[]>()

async function loadDayIds(): Promise<Map<number, string>> {
  if (dayIdCache) return dayIdCache
  const sb = requireSupabase()
  const { data, error } = await sb
    .from('curriculum_days')
    .select('id, day_number')
    .order('day_number')
  if (error) throw new ProgressError(error.message, error)
  dayIdCache = new Map<number, string>(
    (data ?? []).map((row) => [row.day_number as number, row.id as string]),
  )
  return dayIdCache
}

export async function getDayId(dayNumber: number): Promise<string> {
  const map = await loadDayIds()
  const id = map.get(dayNumber)
  if (!id) {
    throw new ProgressError(
      `Curriculum day ${dayNumber} is not in the database. Run "npm run seed:curriculum" and apply the SQL.`,
    )
  }
  return id
}

/** Task ids for a day, indexed by their `position` (1-based). */
async function getTaskIds(dayId: string): Promise<string[]> {
  const cached = taskIdCache.get(dayId)
  if (cached) return cached

  const sb = requireSupabase()
  const { data, error } = await sb
    .from('curriculum_tasks')
    .select('id, position')
    .eq('day_id', dayId)
    .order('position')
  if (error) throw new ProgressError(error.message, error)

  const ids = (data ?? []).map((row) => row.id as string)
  taskIdCache.set(dayId, ids)
  return ids
}

// ---------------------------------------------------------------------------
// Reads
// ---------------------------------------------------------------------------

export async function fetchDayProgress(dayNumber: number): Promise<DayProgress | null> {
  const sb = requireSupabase()
  const dayId = await getDayId(dayNumber)
  const { data, error } = await sb
    .from('user_day_progress')
    .select('*')
    .eq('day_id', dayId)
    .maybeSingle()
  if (error) throw new ProgressError(error.message, error)
  return (data as DayProgress | null) ?? null
}

export async function fetchTaskProgress(
  dayNumber: number,
): Promise<Record<string, boolean>> {
  const sb = requireSupabase()
  const dayId = await getDayId(dayNumber)
  const taskIds = await getTaskIds(dayId)
  if (taskIds.length === 0) return {}

  const { data, error } = await sb
    .from('user_task_progress')
    .select('task_id, completed')
    .in('task_id', taskIds)
  if (error) throw new ProgressError(error.message, error)

  const done: Record<string, boolean> = {}
  for (const row of data ?? []) {
    done[row.task_id as string] = row.completed as boolean
  }
  return done
}

export async function fetchNote(dayNumber: number): Promise<string> {
  const sb = requireSupabase()
  const dayId = await getDayId(dayNumber)
  const { data, error } = await sb
    .from('user_notes')
    .select('note_text')
    .eq('day_id', dayId)
    .maybeSingle()
  if (error) throw new ProgressError(error.message, error)
  return (data?.note_text as string | undefined) ?? ''
}

// ---------------------------------------------------------------------------
// Writes
// ---------------------------------------------------------------------------

/**
 * Mark a curriculum day complete.
 *
 * Delegates to the SECURITY DEFINER RPC so the point award and the
 * "already completed" check happen atomically server-side. Repeating this call
 * is safe: the RPC is idempotent and the ledger's unique index prevents a
 * second award.
 */
export async function completeDay(
  dayNumber: number,
  reflection: { learned?: string | null; proofUrl?: string | null } = {},
): Promise<DayProgress> {
  const sb = requireSupabase()
  const dayId = await getDayId(dayNumber)

  const { data, error } = await sb.rpc('complete_curriculum_day', {
    p_day_id: dayId,
    p_learned: reflection.learned ?? null,
    p_proof_url: reflection.proofUrl || null,
  })
  if (error) throw new ProgressError(error.message, error)
  return data as DayProgress
}

/** Start (or reset) a day. Idempotent on the (user_id, day_id) unique key. */
export async function setDayInProgress(dayNumber: number): Promise<void> {
  const sb = requireSupabase()
  const dayId = await getDayId(dayNumber)

  const { error } = await sb.from('user_day_progress').upsert(
    {
      day_id: dayId,
      status: 'in_progress',
      started_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,day_id', ignoreDuplicates: false },
  )
  if (error) throw new ProgressError(error.message, error)
}

/** Save the free-text notes for a day. Private to the owner, always. */
export async function saveNote(dayNumber: number, text: string): Promise<void> {
  const sb = requireSupabase()
  const dayId = await getDayId(dayNumber)

  // Delete-then-insert rather than upsert: the partial unique index on
  // (user_id, day_id) WHERE day_id IS NOT NULL means an upsert would need the
  // same conflict target, and deleting first keeps the partial index simple.
  const { error: delError } = await sb.from('user_notes').delete().eq('day_id', dayId)
  if (delError) throw new ProgressError(delError.message, delError)

  if (text.trim() === '') return

  const { error } = await sb.from('user_notes').insert({ day_id: dayId, note_text: text })
  if (error) throw new ProgressError(error.message, error)
}

/**
 * Save what the learner wrote they learned, plus a proof URL and a rating.
 *
 * This never changes `status` — completion goes through completeDay() so the
 * points award stays in one audited place.
 */
export async function saveReflection(
  dayNumber: number,
  patch: { learned?: string | null; proofUrl?: string | null; rating?: number | null },
): Promise<void> {
  const sb = requireSupabase()
  const dayId = await getDayId(dayNumber)

  const payload: Record<string, unknown> = {}
  if (patch.learned !== undefined) payload.learned = patch.learned || null
  if (patch.proofUrl !== undefined) payload.proof_url = patch.proofUrl || null
  if (patch.rating !== undefined) payload.rating = patch.rating
  if (Object.keys(payload).length === 0) return

  const { data: updated, error: updateError } = await sb
    .from('user_day_progress')
    .update(payload)
    .eq('day_id', dayId)
    .select('id')

  if (updateError) throw new ProgressError(updateError.message, updateError)

  // An UPDATE matching no rows means the progress row does not exist yet, so
  // create one in the "in progress" state.
  if (!updated || updated.length === 0) {
    const { error: insertError } = await sb.from('user_day_progress').insert({
      day_id: dayId,
      status: 'in_progress',
      started_at: new Date().toISOString(),
      ...payload,
    })
    if (insertError) throw new ProgressError(insertError.message, insertError)
  }
}

/** Tick or untick one task. */
export async function setTaskCompleted(
  dayNumber: number,
  taskIndex: number,
  completed: boolean,
): Promise<void> {
  const sb = requireSupabase()
  const dayId = await getDayId(dayNumber)
  const taskIds = await getTaskIds(dayId)
  const taskId = taskIds[taskIndex]
  if (!taskId) {
    throw new ProgressError(`Task ${taskIndex + 1} does not exist for day ${dayNumber}.`)
  }

  const { error } = await sb.from('user_task_progress').upsert(
    {
      task_id: taskId,
      completed,
      // completed_at must be set iff completed (table CHECK constraint).
      completed_at: completed ? new Date().toISOString() : null,
    },
    { onConflict: 'user_id,task_id' },
  )
  if (error) throw new ProgressError(error.message, error)
}

/**
 * Record a focus session.
 *
 * The client sends only the timestamps; the server computes the duration and
 * rejects implausible values. That is deliberate — a client that could assert
 * its own duration could assert its own points.
 */
export async function logStudySession(
  startedAt: string,
  endedAt: string,
  dayNumber?: number,
): Promise<void> {
  const sb = requireSupabase()
  let dayId: string | null = null
  if (dayNumber) {
    dayId = await getDayId(dayNumber).catch(() => null)
  }

  const { error } = await sb.rpc('log_study_session', {
    p_started_at: startedAt,
    p_ended_at: endedAt,
    p_day_id: dayId,
  })
  if (error) throw new ProgressError(error.message, error)
}

/** Test helper: forget cached lookups (used after seeding). */
export function clearProgressCaches() {
  dayIdCache = null
  taskIdCache.clear()
}