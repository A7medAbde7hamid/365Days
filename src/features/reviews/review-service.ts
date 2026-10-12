import { requireSupabase } from '@/lib/supabase/client'

/**
 * Weekly and monthly reviews.
 *
 * Submissions go through SECURITY DEFINER functions so the 5-point award for a
 * weekly review happens once, atomically, keyed on the review row id. The
 * ledger's unique index is the backstop: re-submitting the same week updates
 * the review but cannot award twice.
 */

export class ReviewError extends Error {
  readonly cause?: unknown
  constructor(message: string, cause?: unknown) {
    super(message)
    this.name = 'ReviewError'
    this.cause = cause
  }
}

export type WeeklyReview = {
  id: string
  iso_year: number
  iso_week: number
  strongest_topics: string
  revision_topics: string
  blockers: string
  next_week_goal: string
  planned_tasks: number
  completed_tasks: number
  self_assessment: string
  submitted_at: string | null
}

export type MonthlyReview = {
  id: string
  year: number
  month: number
  skills_practised: string
  revision_topics: string
  self_assessment: string
  biggest_win: string
  main_difficulty: string
  next_priorities: string
  projects_completed: number
  study_minutes: number
  submitted_at: string | null
}

function describe(message: string): string {
  if (/cannot exceed/i.test(message)) return 'Completed tasks cannot exceed planned tasks.'
  if (/invalid iso/i.test(message)) return 'That week is not a valid week.'
  return message
}

async function rpc<T>(name: string, args: Record<string, unknown>): Promise<T> {
  const sb = requireSupabase()
  const { data, error } = await sb.rpc(name, args)
  if (error) throw new ReviewError(describe(error.message), error)
  return data as T
}

/** ISO year + week for a date, matching the database's EXTRACT(ISOWEEK). */
export function isoWeek(date: Date): { year: number; week: number } {
  // ISO weekday: Monday = 1 … Sunday = 7.
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNumber = target.getUTCDay() === 0 ? 7 : target.getUTCDay()
  target.setUTCDate(target.getUTCDate() + 4 - dayNumber)
  const year = target.getUTCFullYear()
  const yearStart = new Date(Date.UTC(year, 0, 1))
  const week = Math.ceil(((target.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7)
  return { year, week }
}

export async function fetchWeeklyReviews(): Promise<WeeklyReview[]> {
  return rpc<WeeklyReview[]>('my_weekly_reviews', { p_limit: 12 })
}

export async function fetchMonthlyReviews(): Promise<MonthlyReview[]> {
  return rpc<MonthlyReview[]>('my_monthly_reviews', { p_limit: 12 })
}

export async function submitWeeklyReview(input: {
  isoYear: number
  isoWeek: number
  strongest: string
  revision: string
  blockers: string
  nextGoal: string
  plannedTasks: number
  completedTasks: number
  selfAssessment: string
}): Promise<WeeklyReview> {
  return rpc<WeeklyReview>('submit_weekly_review', {
    p_iso_year: input.isoYear,
    p_iso_week: input.isoWeek,
    p_strongest: input.strongest,
    p_revision: input.revision,
    p_blockers: input.blockers,
    p_next_goal: input.nextGoal,
    p_planned_tasks: input.plannedTasks,
    p_completed_tasks: input.completedTasks,
    p_self_assessment: input.selfAssessment,
  })
}

export async function submitMonthlyReview(input: {
  year: number
  month: number
  skills: string
  revision: string
  selfAssessment: string
  biggestWin: string
  mainDifficulty: string
  nextPriorities: string
  projectsCompleted: number
  studyMinutes: number
}): Promise<MonthlyReview> {
  return rpc<MonthlyReview>('submit_monthly_review', {
    p_year: input.year,
    p_month: input.month,
    p_skills: input.skills,
    p_revision: input.revision,
    p_self_assessment: input.selfAssessment,
    p_biggest_win: input.biggestWin,
    p_main_difficulty: input.mainDifficulty,
    p_next_priorities: input.nextPriorities,
    p_projects_completed: input.projectsCompleted,
    p_study_minutes: input.studyMinutes,
  })
}