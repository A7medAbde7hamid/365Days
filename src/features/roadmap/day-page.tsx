import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, ExternalLink, Star } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { Badge, Skeleton } from '@/components/ui/primitives'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DebouncedTextarea, OfflineBanner, SyncIndicator } from '@/components/ui/day-inputs'
import { Label } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'
import { getDay, getPhaseForDay, localizeDay } from '@/features/curriculum'
import { useDayWorkspace } from '@/features/progress/use-day-workspace'
import { FocusTimer } from '@/features/progress/focus-timer'
import { cn } from '@/lib/utils'

export function DayPage() {
  const { dayNumber } = useParams()
  const { t, locale, formatNumber, isRtl } = useLocale()

  const n = Number(dayNumber)
  const day = Number.isFinite(n) ? getDay(n) : undefined
  const phase = Number.isFinite(n) ? getPhaseForDay(n) : undefined

  // Hooks must run unconditionally, so guard on a placeholder when the day is
  // missing and render the "not written" view below.
  const workspace = useDayWorkspace(Number.isFinite(n) ? n : 1, day?.tasks.length ?? 0)

  if (!day) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-xl font-semibold">{t('common.noResults')}</h1>
        <p className="mt-2 text-sm text-muted">
          {t('roadmap.day')} {n} — {t('common.comingSoon')}
        </p>
        <div className="mt-4">
          <Link to="/app/roadmap">
            <Button variant="outline">{t('nav.roadmap')}</Button>
          </Link>
        </div>
      </div>
    )
  }

  const l = localizeDay(day, locale)
  const prev = day.dayNumber > 1 ? day.dayNumber - 1 : null
  const next = day.dayNumber < 365 ? day.dayNumber + 1 : null

  const ArrowPrev = isRtl ? ArrowRight : ArrowLeft
  const ArrowNext = isRtl ? ArrowLeft : ArrowRight

  const { criteria, completed, sync, error, loading, actions, configured } = workspace

  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <OfflineBanner />

      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>
            {t('roadmap.day')} {day.dayNumber} {t('roadmap.of365')}
          </Badge>
          {phase && (
            <Badge variant="outline">
              {t('roadmap.phase')} {phase.position} —{' '}
              {locale === 'ar' ? phase.titleAr : phase.titleEn}
            </Badge>
          )}
          <Badge variant="outline">
            {formatNumber(day.estimatedMinutes)} {locale === 'ar' ? 'دقيقة' : 'min'}
          </Badge>
          {completed && <Badge variant="success">{t('roadmap.completed')}</Badge>}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{l.title}</h1>
        <p className="text-sm text-muted">{day.topic}</p>
      </header>

      {/* ---------------- Learning content ---------------- */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted">{t('roadmap.objective')}</CardTitle>
        </CardHeader>
        <CardContent>{l.objective}</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted">{t('roadmap.lesson')}</CardTitle>
        </CardHeader>
        <CardContent className="leading-relaxed">{l.lesson}</CardContent>
      </Card>

      {/* ---------------- Tasks with checkboxes ---------------- */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-sm text-muted">{t('roadmap.tasks')}</CardTitle>
            {configured && !loading && (
              <span className="tabular text-xs text-muted">
                {criteria.tasksDone}/{day.tasks.length}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-4/5" />
              <Skeleton className="h-6 w-2/3" />
            </div>
          ) : (
            <ul className="space-y-3">
              {l.tasks.map((task, i) => (
                <li key={i}>
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={workspace.tasksDone[i] ?? false}
                      onChange={(e) => actions.toggleTask(i, e.target.checked)}
                      disabled={!configured}
                      className="mt-0.5 size-4 shrink-0 accent-[var(--accent)] disabled:opacity-50"
                    />
                    <span className={cn(workspace.tasksDone[i] && 'text-muted line-through')}>
                      {task}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted">{t('roadmap.exercise')}</CardTitle>
          </CardHeader>
          <CardContent>{l.exercise}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted">{t('roadmap.deliverable')}</CardTitle>
          </CardHeader>
          <CardContent>{l.deliverable}</CardContent>
        </Card>
      </div>

      {/* ---------------- Notes and reflection ---------------- */}
      <Card>
        <CardHeader>
          <CardTitle>{t('roadmap.notes')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="day-notes">{t('roadmap.notes')}</Label>
            <DebouncedTextarea
              id="day-notes"
              ariaLabel={t('roadmap.notes')}
              value={workspace.notes}
              onSave={actions.saveNotes}
              disabled={!configured}
              placeholder={locale === 'ar' ? 'ما الذي لاحظته اليوم؟' : 'What did you notice today?'}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="day-learned">{t('roadmap.learned')}</Label>
            <DebouncedTextarea
              id="day-learned"
              ariaLabel={t('roadmap.learned')}
              value={workspace.learned}
              onSave={actions.saveWhatILearned}
              disabled={!configured}
              placeholder={
                locale === 'ar'
                  ? 'اكتب ملخصًا لما فهمته بكلماتك'
                  : 'Summarise what you understood in your own words'
              }
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="day-proof">{t('roadmap.proofUrl')}</Label>
            <DebouncedTextarea
              id="day-proof"
              ariaLabel={t('roadmap.proofUrl')}
              rows={2}
              value={workspace.proofUrl}
              onSave={actions.saveProofUrl}
              disabled={!configured}
              placeholder="https://github.com/…"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <SyncIndicator sync={sync} error={error} />
            {!configured && (
              <span className="text-xs text-subtle" dir="ltr">
                {t('setup.title')}
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* ---------------- Focus timer ---------------- */}
      <section aria-labelledby="timer-heading">
        <h2 id="timer-heading" className="sr-only">
          {t('timer.title')}
        </h2>
        <FocusTimer dayNumber={day.dayNumber} />
      </section>

      {/* ---------------- Completion criteria + mark complete ---------------- */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted">{t('roadmap.criteria')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-1.5">
            {l.criteria.map((criterion, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                <span>{criterion}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-2 rounded-md border border-border bg-surface-2 p-3 text-sm">
            <p className="font-medium">{t('roadmap.markComplete')}</p>
            <ul className="space-y-1 text-muted">
              <li className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-block size-3.5 rounded-full',
                    criteria.allTasksDone ? 'bg-success' : 'bg-border',
                  )}
                  aria-hidden
                />
                {locale === 'ar' ? 'إنهاء كل المهام' : 'Finish every task'}
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-block size-3.5 rounded-full',
                    criteria.hasEvidence ? 'bg-success' : 'bg-border',
                  )}
                  aria-hidden
                />
                {locale === 'ar'
                  ? 'تسجيل ما تعلّمته أو رابط إثبات'
                  : 'Record what you learned, or add a proof link'}
              </li>
            </ul>

            {completed ? (
              <p className="text-xs text-success">{t('roadmap.completed')}</p>
            ) : (
              <Button
                onClick={() => void actions.markComplete()}
                disabled={!criteria.met || !configured || sync === 'saving'}
              >
                {t('roadmap.markComplete')}
              </Button>
            )}
          </div>

          {!completed && (
            <div>
              <p className="mb-1.5 text-sm font-medium">{t('roadmap.feedbackPrompt')}</p>
              <div className="flex items-center gap-1" role="group" aria-label={t('roadmap.feedbackPrompt')}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => actions.rate(value)}
                    disabled={!configured}
                    aria-label={`${value} / 5`}
                    aria-pressed={workspace.rating === value}
                    className={cn(
                      'rounded p-1 transition-colors disabled:opacity-50',
                      workspace.rating !== null && value <= workspace.rating
                        ? 'text-warning'
                        : 'text-subtle hover:text-warning',
                    )}
                  >
                    <Star className="size-4" fill="currentColor" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ---------------- Resources ---------------- */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm text-muted">{t('roadmap.resources')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {day.resources.map((resource) => (
              <li key={resource.url} className="flex flex-col">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                >
                  {resource.title}
                  <ExternalLink className="size-3" />
                </a>
                <span className="text-xs text-muted">
                  {resource.note ?? resource.kind}
                  {resource.kind === 'paid' && (locale === 'ar' ? ' · قد يتطلب دفعًا' : ' · may require payment')}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* ---------------- Navigation ---------------- */}
      <Card>
        <CardContent>
          <div className="flex items-center justify-between gap-3">
            {prev ? (
              <Link to={`/app/roadmap/${prev}`} className={buttonVariants({ variant: 'outline', size: 'sm' })}>
                <ArrowPrev />
                {t('roadmap.previous')} ({prev})
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={`/app/roadmap/${next}`} className={buttonVariants({ size: 'sm' })}>
                {t('roadmap.next')} ({next})
                <ArrowNext />
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </article>
  )
}