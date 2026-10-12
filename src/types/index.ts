export type Profile = {
  id: string
  username: string
  display_name: string | null
  avatar_url: string | null
  bio: string | null
  learning_goals: string | null
  preferred_language: 'en' | 'ar' | null
  created_at: string
  updated_at: string
}

export type Phase = {
  id: string
  slug: string
  position: number
  title_en: string
  title_ar: string | null
  summary_en: string
  summary_ar: string | null
  start_day: number
  end_day: number
}

export type CurriculumResource = {
  id: string
  title: string
  url: string
  kind: 'official' | 'article' | 'video' | 'arabic' | 'paid'
  note_en: string | null
  note_ar: string | null
}

export type CurriculumTask = {
  id: string
  day_id: string
  position: number
  title_en: string
  title_ar: string | null
}

export type CurriculumDay = {
  id: string
  day_number: number
  phase_id: string
  title_en: string
  title_ar: string | null
  topic: string
  objective_en: string
  objective_ar: string | null
  lesson_en: string
  lesson_ar: string | null
  estimated_minutes: number
  exercise_en: string
  exercise_ar: string | null
  deliverable_en: string
  deliverable_ar: string | null
  criteria_en: string[]
  criteria_ar: string[] | null
  challenge_en: string | null
  challenge_ar: string | null
  prerequisites: number[]
}

export type DayProgress = {
  id: string
  user_id: string
  day_id: string
  status: 'not_started' | 'in_progress' | 'completed'
  started_at: string | null
  completed_at: string | null
  notes: string | null
  learned: string | null
  proof_url: string | null
  rating: number | null
  updated_at: string
}

export type StudySession = {
  id: string
  user_id: string
  day_id: string | null
  started_at: string
  ended_at: string | null
  duration_seconds: number
  session_date: string
}

export type ProjectStatus = 'planned' | 'in_progress' | 'paused' | 'completed'

export type Project = {
  id: string
  user_id: string
  name: string
  description: string | null
  problem: string | null
  stack: string[]
  status: ProjectStatus
  start_date: string | null
  target_date: string | null
  repo_url: string | null
  live_url: string | null
  lessons_learned: string | null
  challenges_faced: string | null
  visibility: 'private' | 'group' | 'public'
  phase_id: string | null
  created_at: string
  updated_at: string
}

export type GroupRole = 'owner' | 'admin' | 'member'

export type StudyGroup = {
  id: string
  name: string
  description: string | null
  visibility: 'private' | 'group'
  share_progress: boolean
  created_by: string
  created_at: string
}

export type GroupMember = {
  group_id: string
  user_id: string
  role: GroupRole
  joined_at: string
  profile: Pick<Profile, 'id' | 'username' | 'display_name' | 'avatar_url'> | null
}

export type GroupChallenge = {
  id: string
  group_id: string
  created_by: string
  title: string
  description: string | null
  rules: string | null
  challenge_type: string
  target_count: number
  starts_at: string
  ends_at: string
  bonus_points: number
  created_at: string
}

export type Achievement = {
  id: string
  code: string
  title_en: string
  title_ar: string | null
  description_en: string
  description_ar: string | null
  icon: string | null
  criteria: { type: string; threshold: number }
}

export type PointEntry = {
  id: string
  user_id: string
  reason: string
  points: number
  ref_type: string | null
  ref_id: string | null
  created_at: string
}