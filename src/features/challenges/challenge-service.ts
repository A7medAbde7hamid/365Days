import { requireSupabase } from '@/lib/supabase/client'

/**
 * Group challenges, points, achievements and the leaderboard.
 *
 * Every write here passes only ids — never a number the client chose. The
 * server re-derives progress from the caller's own rows (study sessions,
 * completed days, completed projects, submitted reviews) and awards points only
 * after verifying the condition. That is what stops "open the page and claim a
 * win" from working.
 */

export class GamificationError extends Error {
  readonly cause?: unknown
  constructor(message: string, cause?: unknown) {
    super(message)
    this.name = 'GamificationError'
    this.cause = cause
  }
}

export type ChallengeType = 'sessions' | 'phase' | 'project' | 'revision' | 'consistency'

export type Challenge = {
  id: string
  group_id: string
  created_by: string
  title: string
  description: string | null
  rules: string | null
  challenge_type: ChallengeType
  target_count: number
  starts_at: string
  ends_at: string
  bonus_points: number
}

export type Participation = {
  challenge_id: string
  user_id: string
  progress: number
  completed: boolean
  completed_at: string | null
  joined_at: string
}

export type LeaderboardRow = {
  rank: number
  user_id: string
  username: string | null
  display_name: string | null
  points: number
}

export type AchievementRow = {
  code: string
  title_en: string
  title_ar: string
}

function describe(message: string): string {
  if (/owner or admin/i.test(message)) return 'Only an owner or admin can do that.'
  if (/not complete/i.test(message)) return 'That challenge is not complete yet.'
  if (/already completed/i.test(message)) return 'You already completed that challenge.'
  if (/already ended/i.test(message)) return 'This challenge has already ended.'
  if (/member of this group/i.test(message)) return 'Join the group before its challenges.'
  if (/invalid period/i.test(message)) return 'Unknown leaderboard period.'
  return message
}

async function rpc<T>(name: string, args: Record<string, unknown>): Promise<T> {
  const sb = requireSupabase()
  const { data, error } = await sb.rpc(name, args)
  if (error) throw new GamificationError(describe(error.message), error)
  return data as T
}

// ---------------------------------------------------------------------------
// Reads
// ---------------------------------------------------------------------------

export async function fetchChallenges(groupId: string): Promise<Challenge[]> {
  const sb = requireSupabase()
  const { data, error } = await sb
    .from('group_challenges')
    .select('*')
    .eq('group_id', groupId)
    .order('created_at', { ascending: false })
  if (error) throw new GamificationError(error.message, error)
  return (data ?? []) as Challenge[]
}

export async function fetchParticipations(groupId: string): Promise<Participation[]> {
  const sb = requireSupabase()
  // RLS limits this to participants of challenges in groups you belong to.
  const { data, error } = await sb
    .from('challenge_participants')
    .select('*')
    .in(
      'challenge_id',
      // Resolve through the challenges the member is allowed to see.
      (await sb.from('group_challenges').select('id').eq('group_id', groupId)).data?.map((c: any) => c.id) ?? [],
    )
  if (error) throw new GamificationError(error.message, error)
  return (data ?? []) as Participation[]
}

// ---------------------------------------------------------------------------
// Writes
// ---------------------------------------------------------------------------

export async function createChallenge(input: {
  groupId: string
  title: string
  description?: string | null
  rules?: string | null
  type: ChallengeType
  targetCount: number
  endsAt: string
  bonusPoints: number
}): Promise<string> {
  return rpc<string>('create_group_challenge', {
    p_group_id: input.groupId,
    p_title: input.title,
    p_description: input.description ?? null,
    p_rules: input.rules ?? null,
    p_challenge_type: input.type,
    p_target_count: input.targetCount,
    p_ends_at: input.endsAt,
    p_bonus_points: input.bonusPoints,
  })
}

export async function joinChallenge(challengeId: string): Promise<void> {
  await rpc<void>('join_challenge', { p_challenge_id: challengeId })
}

export async function leaveChallenge(challengeId: string): Promise<void> {
  await rpc<void>('leave_challenge', { p_challenge_id: challengeId })
}

/**
 * Recompute progress from real data. Returns the transitions so the caller can
 * call awardChallengePoints for anything that just completed.
 */
export async function refreshMyChallengeProgress(): Promise<
  { challenge_id: string; progress: number; completed: boolean; just_completed: boolean }[]
> {
  return rpc('refresh_my_challenge_progress', {})
}

export async function awardChallengePoints(challengeId: string): Promise<number> {
  return rpc<number>('award_challenge_points', { p_challenge_id: challengeId })
}

export async function syncMyAchievements(): Promise<AchievementRow[]> {
  return rpc<AchievementRow[]>('sync_my_achievements', {})
}

export async function fetchLeaderboard(
  period: 'week' | 'month' | 'all',
  groupId?: string | null,
): Promise<LeaderboardRow[]> {
  return rpc<LeaderboardRow[]>('leaderboard', {
    p_period: period,
    p_group_id: groupId ?? null,
  })
}

export async function fetchMyPoints(): Promise<{ total: number; by_reason: Record<string, number> }> {
  const rows = await rpc<{ total: number; by_reason: Record<string, number> }[]>('my_points', {})
  return rows[0] ?? { total: 0, by_reason: {} }
}