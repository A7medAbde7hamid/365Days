import { useEffect, useId, useState } from 'react'
import { X, Plus } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { PHASES } from '@/features/curriculum'
import { PHASE_IDS } from '@/features/curriculum/phase-ids'
import { Input, Label, Textarea } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/primitives'
import { cn } from '@/lib/utils'
import type { Project, ProjectStatus } from '@/types'
import type { ProjectInput } from './project-service'

const STATUSES: ProjectStatus[] = ['planned', 'in_progress', 'paused', 'completed']
const VISIBILITIES = ['private', 'group', 'public'] as const

type Visibility = (typeof VISIBILITIES)[number]

function emptyInput(): ProjectInput {
  return {
    name: '',
    description: '',
    problem: '',
    stack: [],
    status: 'planned',
    startDate: '',
    targetDate: '',
    repoUrl: '',
    liveUrl: '',
    lessonsLearned: '',
    challengesFaced: '',
    visibility: 'private',
    phaseId: null,
  }
}

function toInput(project: Project): ProjectInput {
  return {
    name: project.name,
    description: project.description,
    problem: project.problem,
    stack: project.stack ?? [],
    status: project.status,
    startDate: project.start_date,
    targetDate: project.target_date,
    repoUrl: project.repo_url,
    liveUrl: project.live_url,
    lessonsLearned: project.lessons_learned,
    challengesFaced: project.challenges_faced,
    visibility: project.visibility,
    phaseId: project.phase_id,
  }
}

export function ProjectDialog({
  open,
  project,
  onClose,
  onSubmit,
  pending,
}: {
  open: boolean
  /** null = creating, otherwise editing this project. */
  project: Project | null
  onClose: () => void
  onSubmit: (input: ProjectInput) => Promise<boolean>
  pending: boolean
}) {
  const { t, locale } = useLocale()
  const formId = useId()

  // Initialised from props on mount. The parent renders this component only
  // while the dialog is open (and keys it by project id), so remounting is how
  // the form gets fresh values — resetting from an effect would paint one stale
  // frame and trigger a second render.
  const [input, setInput] = useState<ProjectInput>(() =>
    project ? toInput(project) : emptyInput(),
  )
  const [techInput, setTechInput] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  function update<K extends keyof ProjectInput>(key: K, value: ProjectInput[K]) {
    setInput((prev) => ({ ...prev, [key]: value }))
  }

  function addTech() {
    const value = techInput.trim()
    if (!value) return
    if (input.stack.includes(value)) {
      setTechInput('')
      return
    }
    setInput((prev) => ({ ...prev, stack: [...prev.stack, value] }))
    setTechInput('')
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!input.name.trim()) next.name = t('common.required')
    if (input.startDate && input.targetDate && input.targetDate < input.startDate) {
      next.targetDate = t('common.error')
    }
    for (const key of ['repoUrl', 'liveUrl'] as const) {
      const value = (input[key] ?? '').trim()
      if (value && !value.startsWith('https://')) next[key] = t('projects.urlInvalid')
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!validate()) return
    const ok = await onSubmit(input)
    if (ok) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${formId}-title`}
    >
      <form
        onSubmit={handleSubmit}
        className="my-8 w-full max-w-2xl rounded-lg border border-border bg-surface shadow-lg"
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 id={`${formId}-title`} className="font-semibold">
            {project ? t('projects.editProject') : t('projects.new')}
          </h2>
          <Button type="button" variant="ghost" size="icon" onClick={onClose} aria-label={t('common.close')}>
            <X />
          </Button>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor={`${formId}-name`}>{t('projects.name')}</Label>
            <Input
              id={`${formId}-name`}
              value={input.name}
              onChange={(e) => update('name', e.target.value)}
              aria-invalid={Boolean(errors.name)}
              required
            />
            {errors.name && <p className="text-xs text-danger">{errors.name}</p>}
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor={`${formId}-problem`}>{t('projects.problem')}</Label>
            <Textarea
              id={`${formId}-problem`}
              rows={2}
              value={input.problem ?? ''}
              onChange={(e) => update('problem', e.target.value)}
            />
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor={`${formId}-description`}>{t('projects.description')}</Label>
            <Textarea
              id={`${formId}-description`}
              rows={3}
              value={input.description ?? ''}
              onChange={(e) => update('description', e.target.value)}
            />
          </div>

          {/* Technology stack as removable chips */}
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor={`${formId}-tech`}>{t('projects.stack')}</Label>
            <div className="flex gap-2">
              <Input
                id={`${formId}-tech`}
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    addTech()
                  }
                }}
                placeholder={t('projects.addTech')}
              />
              <Button type="button" variant="secondary" onClick={addTech}>
                <Plus />
                {t('common.create')}
              </Button>
            </div>
            {input.stack.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {input.stack.map((tech) => (
                  <li key={tech}>
                    <button
                      type="button"
                      onClick={() => update('stack', input.stack.filter((x) => x !== tech))}
                      className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 text-xs hover:border-danger hover:text-danger"
                      aria-label={`${tech} — ${t('common.delete')}`}
                    >
                      {tech} ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${formId}-status`}>{t('projects.status')}</Label>
            <select
              id={`${formId}-status`}
              value={input.status}
              onChange={(e) => update('status', e.target.value as ProjectStatus)}
              className="h-9 w-full rounded-md border border-border bg-surface px-3 text-sm"
            >
              {STATUSES.map((status) => (
                <option key={status} value={status}>
                  {t(`projects.${status === 'in_progress' ? 'inProgress' : status}`)}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${formId}-visibility`}>{t('projects.visibility')}</Label>
            <select
              id={`${formId}-visibility`}
              value={input.visibility}
              onChange={(e) => update('visibility', e.target.value as Visibility)}
              className="h-9 w-full rounded-md border border-border bg-surface px-3 text-sm"
            >
              {VISIBILITIES.map((visibility) => (
                <option key={visibility} value={visibility}>
                  {t(`projects.${visibility}`)}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted">{t(`projects.${input.visibility}Hint`)}</p>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${formId}-start`}>{t('projects.startDate')}</Label>
            <Input
              id={`${formId}-start`}
              type="date"
              value={input.startDate ?? ''}
              onChange={(e) => update('startDate', e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${formId}-target`}>{t('projects.targetDate')}</Label>
            <Input
              id={`${formId}-target`}
              type="date"
              value={input.targetDate ?? ''}
              onChange={(e) => update('targetDate', e.target.value)}
              aria-invalid={Boolean(errors.targetDate)}
            />
            {errors.targetDate && <p className="text-xs text-danger">{errors.targetDate}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${formId}-repo`}>{t('projects.repoUrl')}</Label>
            <Input
              id={`${formId}-repo`}
              dir="ltr"
              placeholder="https://github.com/…"
              value={input.repoUrl ?? ''}
              onChange={(e) => update('repoUrl', e.target.value)}
              aria-invalid={Boolean(errors.repoUrl)}
            />
            {errors.repoUrl && <p className="text-xs text-danger">{errors.repoUrl}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${formId}-live`}>{t('projects.liveUrl')}</Label>
            <Input
              id={`${formId}-live`}
              dir="ltr"
              placeholder="https://…"
              value={input.liveUrl ?? ''}
              onChange={(e) => update('liveUrl', e.target.value)}
              aria-invalid={Boolean(errors.liveUrl)}
            />
            {errors.liveUrl && <p className="text-xs text-danger">{errors.liveUrl}</p>}
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor={`${formId}-lessons`}>{t('projects.lessonsLearned')}</Label>
            <Textarea
              id={`${formId}-lessons`}
              rows={3}
              value={input.lessonsLearned ?? ''}
              onChange={(e) => update('lessonsLearned', e.target.value)}
            />
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor={`${formId}-challenges`}>{t('projects.challenges')}</Label>
            <Textarea
              id={`${formId}-challenges`}
              rows={3}
              value={input.challengesFaced ?? ''}
              onChange={(e) => update('challengesFaced', e.target.value)}
            />
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor={`${formId}-phase`}>{t('projects.filterPhase')}</Label>
            <select
              id={`${formId}-phase`}
              value={input.phaseId ?? ''}
              onChange={(e) => update('phaseId', e.target.value || null)}
              className="h-9 w-full rounded-md border border-border bg-surface px-3 text-sm"
            >
              <option value="">{t('common.none')}</option>
              {PHASES.map((phase) => (
                <option key={phase.slug} value={PHASE_IDS[phase.slug]}>
                  {locale === 'ar'
                    ? `المرحلة ${phase.position} — ${phase.titleAr}`
                    : `Phase ${phase.position} — ${phase.titleEn}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-border p-4">
          <Button type="button" variant="ghost" onClick={onClose}>
            {t('common.cancel')}
          </Button>
          <Button type="submit" disabled={pending}>
            {pending ? t('common.saving') : t('common.save')}
          </Button>
        </div>
      </form>
    </div>
  )
}

/** Confirmation dialog for destructive actions. */
export function ConfirmDialog({
  open,
  title,
  body,
  confirmLabel,
  onConfirm,
  onClose,
  pending,
}: {
  open: boolean
  title: string
  body: string
  confirmLabel: string
  onConfirm: () => void
  onClose: () => void
  pending?: boolean
}) {
  const { t } = useLocale()
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-md rounded-lg border border-border bg-surface p-6 shadow-lg">
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-muted">{body}</p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            {t('common.cancel')}
          </Button>
          <Button variant="destructive" onClick={onConfirm} disabled={pending}>
            {pending ? t('common.saving') : confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}

/** Shared select styling used by the filter bar. */
export const selectClass = cn(
  'h-9 rounded-md border border-border bg-surface px-3 text-sm',
  'focus-visible:border-accent focus-visible:outline-none',
)

export { Alert }