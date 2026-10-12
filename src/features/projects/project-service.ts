import { requireSupabase } from '@/lib/supabase/client'
import { normaliseUrl } from '@/lib/urls'
import type { Project, ProjectStatus } from '@/types'

/**
 * Project and portfolio data access.
 *
 * Read access is governed by the `user_projects` RLS policy: the owner sees
 * everything, other users see only rows whose visibility allows it (public, or
 * group where the viewer shares a group). Nothing is filtered here on the
 * client — hiding rows client-side would be cosmetic, not authorization.
 */

export class ProjectError extends Error {
  readonly cause?: unknown
  constructor(message: string, cause?: unknown) {
    super(message)
    this.name = 'ProjectError'
    this.cause = cause
  }
}

export type Milestone = {
  id: string
  project_id: string
  title: string
  completed: boolean
  due_date: string | null
  position: number
}

export type ProjectInput = {
  name: string
  description?: string | null
  problem?: string | null
  stack: string[]
  status: ProjectStatus
  startDate?: string | null
  targetDate?: string | null
  repoUrl?: string | null
  liveUrl?: string | null
  lessonsLearned?: string | null
  challengesFaced?: string | null
  visibility: 'private' | 'group' | 'public'
  phaseId?: string | null
}

export async function fetchProjects(): Promise<Project[]> {
  const sb = requireSupabase()
  const { data, error } = await sb
    .from('user_projects')
    .select('*')
    .order('updated_at', { ascending: false })
  if (error) throw new ProjectError(error.message, error)
  return (data ?? []) as Project[]
}

export async function createProject(input: ProjectInput): Promise<Project> {
  const sb = requireSupabase()
  const { data, error } = await sb
    .from('user_projects')
    .insert({
      name: input.name.trim(),
      description: input.description?.trim() || null,
      problem: input.problem?.trim() || null,
      stack: input.stack,
      status: input.status,
      start_date: input.startDate || null,
      target_date: input.targetDate || null,
      repo_url: normaliseUrl(input.repoUrl),
      live_url: normaliseUrl(input.liveUrl),
      lessons_learned: input.lessonsLearned?.trim() || null,
      challenges_faced: input.challengesFaced?.trim() || null,
      visibility: input.visibility,
      phase_id: input.phaseId || null,
    })
    .select()
    .single()

  if (error) throw new ProjectError(error.message, error)
  return data as Project
}

export async function updateProject(id: string, input: ProjectInput): Promise<Project> {
  const sb = requireSupabase()
  const { data, error } = await sb
    .from('user_projects')
    .update({
      name: input.name.trim(),
      description: input.description?.trim() || null,
      problem: input.problem?.trim() || null,
      stack: input.stack,
      status: input.status,
      start_date: input.startDate || null,
      target_date: input.targetDate || null,
      repo_url: normaliseUrl(input.repoUrl),
      live_url: normaliseUrl(input.liveUrl),
      lessons_learned: input.lessonsLearned?.trim() || null,
      challenges_faced: input.challengesFaced?.trim() || null,
      visibility: input.visibility,
      phase_id: input.phaseId || null,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw new ProjectError(error.message, error)
  return data as Project
}

export async function deleteProject(id: string): Promise<void> {
  const sb = requireSupabase()
  const { error } = await sb.from('user_projects').delete().eq('id', id)
  if (error) throw new ProjectError(error.message, error)
}

// ---------------------------------------------------------------------------
// Milestones
// ---------------------------------------------------------------------------

export async function fetchMilestones(projectId: string): Promise<Milestone[]> {
  const sb = requireSupabase()
  const { data, error } = await sb
    .from('project_milestones')
    .select('*')
    .eq('project_id', projectId)
    .order('position')
  if (error) throw new ProjectError(error.message, error)
  return (data ?? []) as Milestone[]
}

export async function createMilestone(projectId: string, title: string): Promise<Milestone> {
  const sb = requireSupabase()
  const { data: existing } = await sb
    .from('project_milestones')
    .select('position')
    .eq('project_id', projectId)
    .order('position', { ascending: false })
    .limit(1)

  const nextPosition = (existing?.[0]?.position ?? 0) + 1

  const { data, error } = await sb
    .from('project_milestones')
    .insert({ project_id: projectId, title: title.trim(), position: nextPosition })
    .select()
    .single()

  if (error) throw new ProjectError(error.message, error)
  return data as Milestone
}

export async function toggleMilestone(id: string, completed: boolean): Promise<void> {
  const sb = requireSupabase()
  const { error } = await sb.from('project_milestones').update({ completed }).eq('id', id)
  if (error) throw new ProjectError(error.message, error)
}

export async function deleteMilestone(id: string): Promise<void> {
  const sb = requireSupabase()
  const { error } = await sb.from('project_milestones').delete().eq('id', id)
  if (error) throw new ProjectError(error.message, error)
}

/** Public portfolio for a profile the viewer is allowed to see. */
export async function fetchPublicProjects(userId: string): Promise<Project[]> {
  const sb = requireSupabase()
  const { data, error } = await sb
    .from('user_projects')
    .select('*')
    .eq('user_id', userId)
    .eq('visibility', 'public')
    .order('completed', { ascending: false })
  if (error) throw new ProjectError(error.message, error)
  return (data ?? []) as Project[]
}