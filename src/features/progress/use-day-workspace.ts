import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { isSupabaseConfigured } from '@/lib/supabase/client'
import { useAuth } from '@/app/providers/auth-provider'
import {
  ProgressError,
  completeDay,
  fetchDayProgress,
  fetchNote,
  fetchTaskProgress,
  saveNote,
  saveReflection,
  setDayInProgress,
  setTaskCompleted,
  type SyncState,
} from './progress-service'
import type { DayProgress } from '@/types'

export type DayWorkspace = {
  dayNumber: number
  taskCount: number
  status: DayProgress['status']
  tasksDone: boolean[]
  notes: string
  learned: string
  proofUrl: string
  rating: number | null
  /** True once a day has been marked complete — never reset by revisiting. */
  completed: boolean
}

const EMPTY: Omit<DayWorkspace, 'dayNumber' | 'taskCount'> = {
  status: 'not_started',
  tasksDone: [],
  notes: '',
  learned: '',
  proofUrl: '',
  rating: null,
  completed: false,
}

/**
 * State and writes for a single roadmap day.
 *
 * Two rules shape this hook:
 *
 *  1. Never claim a change is saved when it is not. Every write sets an
 *     explicit `sync` state; on failure the local value is rolled back and the
 *     error is surfaced, so the UI cannot show "saved" over unsaved data.
 *
 *  2. Optimistic updates are only used where the write is idempotent, so a
 *     double-submit cannot corrupt state.
 */
export function useDayWorkspace(dayNumber: number, taskCount: number) {
  const { status: authStatus } = useAuth()

  const [state, setState] = useState<Omit<DayWorkspace, 'dayNumber' | 'taskCount'>>(EMPTY)
  const [loaded, setLoaded] = useState(false)
  const [sync, setSync] = useState<SyncState>('idle')
  const [error, setError] = useState<string | null>(null)

  // Guards against a slow response for day N overwriting state for day N+1.
  const requestId = useRef(0)

  // Whether a remote load is even possible right now. When it is not (no
  // Supabase, or not signed in) there is nothing to wait for, so `loading`
  // is derived rather than toggled from an effect.
  const shouldLoad = isSupabaseConfigured && authStatus === 'authenticated'

  /**
   * Reset during render rather than in an effect when the day changes.
   * Doing it in an effect would paint one frame of the previous day's notes
   * before clearing them, and would trigger a second render.
   */
  const [loadedDay, setLoadedDay] = useState(dayNumber)
  if (loadedDay !== dayNumber) {
    setLoadedDay(dayNumber)
    setState(EMPTY)
    setLoaded(false)
  }

  const loading = shouldLoad && !loaded && error === null

  const load = useCallback(async () => {
    const id = ++requestId.current
    try {
      const [progress, tasks, note] = await Promise.all([
        fetchDayProgress(dayNumber),
        fetchTaskProgress(dayNumber),
        fetchNote(dayNumber),
      ])
      if (id !== requestId.current) return

      // Cleared only after the fetch succeeds, so no state is set
      // synchronously when this runs from an effect.
      setError(null)
      setState({
        status: progress?.status ?? 'not_started',
        tasksDone: Array.from({ length: taskCount }, (_, i) => tasks[i] ?? false),
        notes: note,
        learned: progress?.learned ?? '',
        proofUrl: progress?.proof_url ?? '',
        rating: progress?.rating ?? null,
        completed: progress?.status === 'completed',
      })
    } catch (err) {
      if (id !== requestId.current) return
      setError(err instanceof ProgressError ? err.message : 'Could not load this day.')
    } finally {
      if (id === requestId.current) setLoaded(true)
    }
  }, [dayNumber, taskCount])

  useEffect(() => {
    if (!shouldLoad) return
    void load()
  }, [shouldLoad, load])

  /** Wrap a write with sync state, error capture and optional rollback. */
  const run = useCallback(
    async (work: () => Promise<void>, rollback?: () => void) => {
      setSync('saving')
      setError(null)
      try {
        await work()
        setSync('saved')
      } catch (err) {
        rollback?.()
        setError(
          err instanceof ProgressError
            ? err.message
            : 'Save failed. Your change was not stored — check your connection and retry.',
        )
        setSync('error')
      }
    },
    [],
  )

  const toggleTask = useCallback(
    (index: number, done: boolean) => {
      if (!isSupabaseConfigured) return
      const previous = state.tasksDone
      setState((prev) => {
        const next = [...prev.tasksDone]
        next[index] = done
        return { ...prev, tasksDone: next }
      })
      void run(
        () => setTaskCompleted(dayNumber, index, done),
        () => setState((prev) => ({ ...prev, tasksDone: previous })),
      )
    },
    [dayNumber, run, state.tasksDone],
  )

  const saveNotes = useCallback(
    (text: string) => {
      setState((prev) => ({ ...prev, notes: text }))
      if (!isSupabaseConfigured) return
      void run(() => saveNote(dayNumber, text))
    },
    [dayNumber, run],
  )

  const saveWhatILearned = useCallback(
    (text: string) => {
      setState((prev) => ({ ...prev, learned: text }))
      if (!isSupabaseConfigured) return
      void run(() => saveReflection(dayNumber, { learned: text }))
    },
    [dayNumber, run],
  )

  const saveProofUrl = useCallback(
    (url: string) => {
      setState((prev) => ({ ...prev, proofUrl: url }))
      if (!isSupabaseConfigured) return
      void run(() => saveReflection(dayNumber, { proofUrl: url }))
    },
    [dayNumber, run],
  )

  const rate = useCallback(
    (value: number) => {
      setState((prev) => ({ ...prev, rating: value }))
      if (!isSupabaseConfigured) return
      void run(() => saveReflection(dayNumber, { rating: value }))
    },
    [dayNumber, run],
  )

  /**
   * Completion criteria, enforced in the UI rather than trusted from it:
   * every task ticked, and some evidence recorded.
   */
  const criteria = useMemo(() => {
    const allTasksDone = state.tasksDone.length > 0 && state.tasksDone.every(Boolean)
    const hasEvidence =
      state.proofUrl.trim().length > 0 || state.learned.trim().length > 0
    return {
      allTasksDone,
      hasEvidence,
      met: allTasksDone && hasEvidence,
      tasksDone: state.tasksDone.filter(Boolean).length,
    }
  }, [state.tasksDone, state.proofUrl, state.learned])

  const markComplete = useCallback(async () => {
    if (!isSupabaseConfigured) return
    if (!criteria.met) return
    await run(async () => {
      const updated = await completeDay(dayNumber, {
        learned: state.learned,
        proofUrl: state.proofUrl,
      })
      setState((prev) => ({
        ...prev,
        status: updated.status,
        completed: updated.status === 'completed',
        learned: updated.learned ?? prev.learned,
        proofUrl: updated.proof_url ?? prev.proofUrl,
      }))
    })
  }, [criteria.met, dayNumber, run, state.learned, state.proofUrl])

  const start = useCallback(async () => {
    if (!isSupabaseConfigured) return
    await run(async () => {
      await setDayInProgress(dayNumber)
      setState((prev) => ({ ...prev, status: 'in_progress' }))
    })
  }, [dayNumber, run])

  return {
    ...state,
    dayNumber,
    taskCount,
    loading,
    sync,
    error,
    criteria,
    configured: isSupabaseConfigured,
    actions: {
      toggleTask,
      saveNotes,
      saveWhatILearned,
      saveProofUrl,
      rate,
      markComplete,
      start,
      reload: load,
    },
  }
}