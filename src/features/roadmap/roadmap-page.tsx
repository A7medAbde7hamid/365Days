import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Circle } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { Badge, Progress } from '@/components/ui/primitives'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  CURRICULUM_GAPS,
  TOTAL_DAYS,
  getAuthoredDaysByPhase,
  localizeDay,
} from '@/features/curriculum'
import type { DayProgress } from '@/types'

export function RoadmapPage({
  progress = new Map<number, DayProgress>(),
}: {
  /** Passed in by the caller; empty until Supabase progress is wired up. */
  progress?: Map<number, DayProgress>
}) {
  const { t, locale } = useLocale()
  const [query, setQuery] = useState('')

  const groups = useMemo(() => getAuthoredDaysByPhase(), [])
  const authored = useMemo(() => groups.flatMap((g) => g.days), [groups])
  const completed = authored.filter((day) => progress.get(day.dayNumber)?.status === 'completed')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return groups
    return groups
      .map((group) => ({
        ...group,
        days: group.days.filter((day) => {
          const l = localizeDay(day, locale)
          return (
            l.title.toLowerCase().includes(q) ||
            l.objective.toLowerCase().includes(q) ||
            String(day.dayNumber) === q
          )
        }),
      }))
      .filter((group) => group.days.length > 0)
  }, [groups, query, locale])

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t('roadmap.title')}</h1>
          <p className="mt-1 text-sm text-muted">{t('roadmap.subtitle')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('common.search')}
            aria-label={t('common.search')}
            className="w-full sm:w-56"
          />
        </div>
      </header>

      <Card>
        <CardContent className="pt-5">
          <div className="mb-2 flex items-baseline justify-between gap-2">
            <span className="text-sm font-medium">
              {completed.length} / {TOTAL_DAYS} {t('roadmap.of365')}
            </span>
            <span className="tabular text-xs text-muted">
              {Math.round((completed.length / TOTAL_DAYS) * 100)}%
            </span>
          </div>
          <Progress value={completed.length} max={TOTAL_DAYS} label={t('dashboard.dailyProgress')} />
        </CardContent>
      </Card>

      {CURRICULUM_GAPS.length > 0 && (
        <p className="rounded-md border border-warning/30 bg-warning-soft px-3 py-2 text-sm text-warning">
          {authored.length} of {TOTAL_DAYS} days authored. Days{' '}
          {CURRICULUM_GAPS[0]}–{CURRICULUM_GAPS[CURRICULUM_GAPS.length - 1]} are not written yet.
        </p>
      )}

      {filtered.map(({ phase, days }) => (
        <section key={phase.slug} className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-semibold">
              {locale === 'ar' ? `المرحلة ${phase.position}: ${phase.titleAr}` : `${phase.titleEn}`}
            </h2>
            <Badge variant="outline">
              {days.length} / {phase.endDay - phase.startDay + 1}
            </Badge>
          </div>
          <p className="text-sm text-muted">
            {locale === 'ar' ? phase.summaryAr : phase.summaryEn}
          </p>

          <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {days.map((day) => {
              const l = localizeDay(day, locale)
              const done = progress.get(day.dayNumber)?.status === 'completed'
              return (
                <li key={day.dayNumber}>
                  <Link
                    to={`/app/roadmap/${day.dayNumber}`}
                    className="flex h-full items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent/50 hover:bg-surface-2"
                  >
                    {done ? (
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                    ) : (
                      <Circle className="mt-0.5 size-4 shrink-0 text-subtle" />
                    )}
                    <span className="min-w-0">
                      <span className="block text-xs text-subtle tabular">
                        {t('roadmap.day')} {day.dayNumber}
                      </span>
                      <span className="block font-medium">{l.title}</span>
                      <span className="mt-1 block line-clamp-2 text-xs text-muted">{l.objective}</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm text-muted">
          {t('common.noResults')}
          <div className="mt-3">
            <Button variant="outline" size="sm" onClick={() => setQuery('')}>
              {t('common.retry')}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}