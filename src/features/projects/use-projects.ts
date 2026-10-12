import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/app/providers/auth-provider'
import {
  ProjectError,
  createProject,
  deleteProject,
  fetchProjects,
  updateProject,
  type ProjectInput,
} from './project-service'
import type { Project, ProjectStatus } from '@/types'

export type ProjectFilters = {
  status: ProjectStatus | 'all'
  tech: string | 'all'
  phaseSlug: string | 'all'
  search: string
}

const EMPTY_FILTERS: ProjectFilters = {
  status: 'all',
  tech: 'all',
  phaseSlug: 'all',
  search: '',
}

export function useProjects() {
  const { user, isConfigured, status: authStatus } = useAuth()

  const [projects, setProjects] = useState<Project[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<ProjectFilters>(EMPTY_FILTERS)
  const [mutating, setMutating] = useState(false)

  const shouldLoad = isConfigured && authStatus === 'authenticated'
  const loading = shouldLoad && !loaded && error === null

  const load = useCallback(async () => {
    if (!shouldLoad) return
    try {
      const rows = await fetchProjects()
      setError(null)
      setProjects(rows)
    } catch (err) {
      setError(
        err instanceof ProjectError ? err.message : 'Could not load your projects.',
      )
    } finally {
      setLoaded(true)
    }
  }, [shouldLoad])

  useEffect(() => {
    if (!shouldLoad) return
    void load()
  }, [shouldLoad, load])

  /** Optimistic write wrapper: apply locally, roll back if the server refuses. */
  const runMutation = useCallback(
    async (optimistic: () => Project[], work: () => Promise<Project[]>) => {
      const snapshot = projects
      setMutating(true)
      setError(null)
      try {
        setProjects(optimistic())
        const confirmed = await work()
        setProjects(confirmed)
        return true
      } catch (err) {
        setProjects(snapshot)
        setError(
          err instanceof ProjectError ? err.message : 'The change could not be saved.',
        )
        return false
      } finally {
        setMutating(false)
      }
    },
    [projects],
  )

  const add = useCallback(
    async (input: ProjectInput) =>
      runMutation(
        () => projects,
        async () => [...(await fetchProjects()), await createProject(input)],
      ),
    [projects, runMutation],
  )

  const edit = useCallback(
    async (id: string, input: ProjectInput) =>
      runMutation(
        () => projects.map((p) => (p.id === id ? ({ ...p, ...input } as Project) : p)),
        async () => {
          await updateProject(id, input)
          return fetchProjects()
        },
      ),
    [projects, runMutation],
  )

  const remove = useCallback(
    async (id: string) =>
      runMutation(
        () => projects.filter((p) => p.id !== id),
        async () => {
          await deleteProject(id)
          return fetchProjects()
        },
      ),
    [projects, runMutation],
  )

  /** Every technology used across the user's projects, for the filter control. */
  const technologies = useMemo(() => {
    const set = new Set<string>()
    for (const project of projects) for (const tech of project.stack ?? []) set.add(tech)
    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [projects])

  const filtered = useMemo(() => {
    const search = filters.search.trim().toLowerCase()
    return projects.filter((project) => {
      if (filters.status !== 'all' && project.status !== filters.status) return false
      if (filters.tech !== 'all' && !(project.stack ?? []).includes(filters.tech)) return false
      if (filters.phaseSlug !== 'all' && project.phase_id !== filters.phaseSlug) return false
      if (search) {
        const haystack = [project.name, project.description, project.problem]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(search)) return false
      }
      return true
    })
  }, [projects, filters])

  const hasActiveFilters =
    filters.status !== 'all' ||
    filters.tech !== 'all' ||
    filters.phaseSlug !== 'all' ||
    filters.search.trim() !== ''

  return {
    projects: filtered,
    allProjects: projects,
    technologies,
    filters,
    setFilters,
    clearFilters: () => setFilters(EMPTY_FILTERS),
    hasActiveFilters,
    loading,
    mutating,
    error,
    configured: isConfigured,
    ownerId: user?.id ?? null,
    refresh: load,
    actions: { add, edit, remove },
  }
}