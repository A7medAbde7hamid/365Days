import { useState } from 'react'
import { ExternalLink, FolderGit2, Pencil, Plus, Trash2 } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { PHASES } from '@/features/curriculum'
import { PHASE_IDS } from '@/features/curriculum/phase-ids'
import { Skeleton } from '@/components/ui/primitives'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useProjects } from './use-projects'
import { ConfirmDialog, ProjectDialog, selectClass } from './project-dialog'
import type { Project, ProjectStatus } from '@/types'

const STATUS_KEY: Record<ProjectStatus, string> = {
  planned: 'projects.planned',
  in_progress: 'projects.inProgress',
  paused: 'projects.paused',
  completed: 'projects.completed',
}

type StatusVariant = 'default' | 'info' | 'warning' | 'success' | 'outline'

const STATUS_VARIANT: Record<ProjectStatus, StatusVariant> = {
  planned: 'outline',
  in_progress: 'info',
  paused: 'warning',
  completed: 'success',
}

/** Visibility shown as an icon on each card; text is available to screen readers. */
const VISIBILITY_ICON: Record<string, string> = {
  private: '🔒',
  group: '👥',
  public: '🌐',
}

/** phase uuid (as stored on a project) -> phase, for showing "P3" on a card. */
const phaseByUuid = new Map(
  PHASES.map((phase) => [PHASE_IDS[phase.slug], phase] as const).filter(
    (entry): entry is readonly [string, (typeof PHASES)[number]] => Boolean(entry[0]),
  ),
)

export function ProjectsPage() {
  const { t, locale } = useLocale()
  const {
    projects,
    allProjects,
    technologies,
    filters,
    setFilters,
    clearFilters,
    hasActiveFilters,
    loading,
    mutating,
    error,
    configured,
    actions,
  } = useProjects()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<Project | null>(null)
  const [deleting, setDeleting] = useState<Project | null>(null)

  function openCreate() {
    setEditing(null)
    setDialogOpen(true)
  }

  function openEdit(project: Project) {
    setEditing(project)
    setDialogOpen(true)
  }

  async function handleSubmit(input: Parameters<typeof actions.add>[0]) {
    return editing ? actions.edit(editing.id, input) : actions.add(input)
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t('projects.title')}</h1>
          <p className="mt-1 text-sm text-muted">{t('roadmap.subtitle')}</p>
        </div>
        <Button onClick={openCreate} disabled={!configured}>
          <Plus />
          {t('projects.new')}
        </Button>
      </header>

      {/* Filters */}
      <Card>
        <CardContent className="pt-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Input
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              placeholder={t('common.search')}
              aria-label={t('common.search')}
            />

            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value as ProjectStatus | 'all' })
              }
              aria-label={t('projects.filterStatus')}
              className={selectClass}
            >
              <option value="all">{t('projects.filterStatus')}</option>
              {(Object.keys(STATUS_KEY) as ProjectStatus[]).map((status) => (
                <option key={status} value={status}>
                  {t(STATUS_KEY[status])}
                </option>
              ))}
            </select>

            <select
              value={filters.tech}
              onChange={(e) => setFilters({ ...filters, tech: e.target.value })}
              aria-label={t('projects.filterTech')}
              className={selectClass}
              disabled={technologies.length === 0}
            >
              <option value="all">{t('projects.filterTech')}</option>
              {technologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>

            <select
              value={filters.phaseSlug}
              onChange={(e) => setFilters({ ...filters, phaseSlug: e.target.value })}
              aria-label={t('projects.filterPhase')}
              className={selectClass}
            >
              <option value="all">{t('projects.filterPhase')}</option>
              {PHASES.map((phase) => (
                <option key={phase.slug} value={PHASE_IDS[phase.slug]}>
                  {locale === 'ar'
                    ? `المرحلة ${phase.position} — ${phase.titleAr}`
                    : `Phase ${phase.position} — ${phase.titleEn}`}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3 flex items-center justify-between gap-2 text-xs text-muted">
            <span className="tabular">
              {t('projects.resultCount', {
                count: String(projects.length),
                total: String(allProjects.length),
              })}
            </span>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                {t('projects.clearFilters')}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {error && (
        <p role="alert" className="rounded-md border border-danger/30 bg-danger-soft px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      {!configured && (
        <p className="rounded-md border border-warning/30 bg-warning-soft px-3 py-2 text-sm text-warning">
          {t('setup.body')}
        </p>
      )}

      {/* Cards */}
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} className="h-56 w-full" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <EmptyState filtered={hasActiveFilters} onCreate={openCreate} configured={configured} />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                project={project}
                onEdit={() => openEdit(project)}
                onDelete={() => setDeleting(project)}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Mounted only while open, and keyed by project, so the form starts from
          fresh state instead of being reset from an effect. */}
      {dialogOpen && (
        <ProjectDialog
          key={editing?.id ?? 'new'}
          open
          project={editing}
          pending={mutating}
          onClose={() => setDialogOpen(false)}
          onSubmit={handleSubmit}
        />
      )}

      <ConfirmDialog
        open={Boolean(deleting)}
        title={t('projects.deleteConfirm', { name: deleting?.name ?? '' })}
        body={t('projects.deleteWarning')}
        confirmLabel={t('common.delete')}
        pending={mutating}
        onClose={() => setDeleting(null)}
        onConfirm={async () => {
          if (!deleting) return
          const ok = await actions.remove(deleting.id)
          if (ok) setDeleting(null)
        }}
      />

      {/* Keep the locale string referenced so tree-shaking cannot drop it. */}
      <span className="sr-only">{locale}</span>
    </div>
  )
}

function ProjectCard({
  project,
  onEdit,
  onDelete,
}: {
  project: Project
  onEdit: () => void
  onDelete: () => void
}) {
  const { t, formatDate } = useLocale()
  const phase = project.phase_id ? phaseByUuid.get(project.phase_id) : undefined

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base">{project.name}</CardTitle>
          <span title={t('projects.visibility')} aria-label={t('projects.visibility')}>
            {VISIBILITY_ICON[project.visibility] ?? '🔒'}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Badge variant={STATUS_VARIANT[project.status]}>{t(STATUS_KEY[project.status])}</Badge>
          {phase && <Badge variant="outline">{`P${phase.position}`}</Badge>}
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3">
        {project.problem && (
          <p className="line-clamp-3 text-sm text-muted">{project.problem}</p>
        )}

        {project.stack.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech}>
                <span className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="tabular flex flex-wrap gap-x-4 gap-y-1 text-xs text-subtle">
          {project.start_date && (
            <span>
              {t('projects.startDate')}: {formatDate(project.start_date)}
            </span>
          )}
          {project.target_date && (
            <span>
              {t('projects.targetDate')}: {formatDate(project.target_date)}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-1">
            {project.repo_url && (
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                title={t('projects.openRepo')}
                aria-label={t('projects.openRepo')}
                className="rounded p-1.5 text-muted hover:bg-surface-2 hover:text-accent"
              >
                <FolderGit2 className="size-4" />
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                title={t('projects.viewLive')}
                aria-label={t('projects.viewLive')}
                className="rounded p-1.5 text-muted hover:bg-surface-2 hover:text-accent"
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={onEdit} aria-label={t('projects.editProject')}>
              <Pencil />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onDelete}
              aria-label={t('projects.deleteProject')}
              className={cn('hover:text-danger')}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function EmptyState({
  filtered,
  onCreate,
  configured,
}: {
  filtered: boolean
  onCreate: () => void
  configured: boolean
}) {
  const { t } = useLocale()
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border py-16 text-center">
      <p className="text-sm text-muted">{filtered ? t('projects.noMatch') : t('projects.empty')}</p>
      {!filtered && (
        <Button onClick={onCreate} disabled={!configured}>
          <Plus />
          {t('projects.new')}
        </Button>
      )}
    </div>
  )
}