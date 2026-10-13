import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Flame, Gauge, ListTodo, PlayCircle, Timer, TrendingUp } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { useProgress } from '@/features/progress/use-progress'
import { ALL_DAYS, getPhase, getPhaseForDay, TOTAL_DAYS } from '@/features/curriculum'
import { Badge, Progress, Skeleton } from '@/components/ui/primitives'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { toLocalDateKey, useToday } from '@/hooks/use-today'

export function DashboardPage() {
  const { t, locale, formatNumber, formatDuration, formatDate } = useLocale()
  const { profile, user } = useAuth()
  const today = useToday()
  const { byDay, totalFocusSeconds, completedDays, currentStreak, longestStreak, loading } =
    useProgress()

  /**
   * The "current" roadmap day is the first day not yet completed, so a missed
   * week never rewinds or resets progress — the learner resumes where they left
   * off rather than being punished with day 1 again.
   */
  const currentDay = useMemo(() => {
    if (completedDays.length === 0) return ALL_DAYS[0]?.dayNumber ?? 1
    const last = completedDays[completedDays.length - 1]
    return Math.min(TOTAL_DAYS, last + 1)
  }, [completedDays])

  const currentDayRecord = ALL_DAYS.find((d) => d.dayNumber === currentDay)
  const currentPhase = getPhaseForDay(currentDay)

  const todayProgress = currentDayRecord ? byDay.get(currentDayRecord.dayNumber) : undefined

  const phaseChart = useMemo(() => {
    const groups = new Map<string, { name: string; done: number; total: number }>()
    for (const day of ALL_DAYS) {
      const phase = getPhase(day.phaseSlug)
      if (!phase) continue
      const key = String(phase.position)
      const entry = groups.get(key) ?? {
        name: locale === 'ar' ? phase.titleAr : phase.titleEn,
        done: 0,
        total: 0,
      }
      entry.total += 1
      if (byDay.get(day.dayNumber)?.status === 'completed') entry.done += 1
      groups.set(key, entry)
    }
    return Array.from(groups.entries()).map(([key, value]) => ({ key, ...value }))
  }, [byDay, locale])

  const weeklyChart = useMemo(() => {
    // Last 7 calendar days of completions, from real session records.
    const byDate = new Map<string, number>()
    for (const dayNumber of completedDays) {
      const row = byDay.get(dayNumber)
      if (!row?.completed_at) continue
      const key = row.completed_at.slice(0, 10)
      byDate.set(key, (byDate.get(key) ?? 0) + 1)
    }
    const out: { date: string; count: number }[] = []
    for (let i = 6; i >= 0; i -= 1) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      const key = toLocalDateKey(d)
      out.push({ date: key, count: byDate.get(key) ?? 0 })
    }
    return out
  }, [completedDays, byDay, today])

  const firstName = profile?.display_name?.split(' ')[0] ?? user?.email?.split('@')[0] ?? ''

  return (
    <div className="space-y-6">
      {/* Vibrant hero banner — consistent in both themes via an explicit gradient. */}
      <section className="overflow-hidden rounded-lg shadow-md">
        <div className="bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_55%,#db2777_120%)] p-5 text-white sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                {formatDate(today)}
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                {t('dashboard.greeting')}
                {firstName ? `, ${firstName}` : ''}
              </h1>
              {currentPhase && (
                <p className="mt-1 text-sm text-white/80">
                  {t('roadmap.phase')} {currentPhase.position} —{' '}
                  {locale === 'ar' ? currentPhase.titleAr : currentPhase.titleEn}
                </p>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-4">
              <div className="text-start">
                <p className="text-xs text-white/70">{t('dashboard.currentDay')}</p>
                <p className="tabular text-3xl font-extrabold leading-none">
                  {formatNumber(currentDay)}
                  <span className="ms-1 text-base font-medium text-white/70">
                    / {formatNumber(TOTAL_DAYS)}
                  </span>
                </p>
              </div>
              <Link
                to={`/app/roadmap/${currentDayRecord?.dayNumber ?? currentDay}`}
                className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-white/90"
              >
                <PlayCircle className="size-4" />
                {t('dashboard.startLesson')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">{t('dashboard.currentDay')}</span>
              <span className="grid size-9 place-items-center rounded-md bg-accent-soft text-accent">
                <ListTodo className="size-4" />
              </span>
            </div>
            <p className="tabular mt-1 text-2xl font-bold">
              {t('dashboard.dayOf', { n: formatNumber(currentDay) })}
            </p>
            {currentPhase && (
              <p className="mt-1 text-xs text-muted">
                {t('roadmap.phase')} {currentPhase.position} —{' '}
                {locale === 'ar' ? currentPhase.titleAr : currentPhase.titleEn}
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">{t('dashboard.currentStreak')}</span>
              <span className="grid size-9 place-items-center rounded-md bg-warning-soft text-warning">
                <Flame className="size-4" />
              </span>
            </div>
            {loading ? (
              <Skeleton className="mt-2 h-8 w-16" />
            ) : (
              <p className="tabular mt-1 text-2xl font-bold">
                {formatNumber(currentStreak)}{' '}
                <span className="text-sm font-normal text-muted">{t('dashboard.days')}</span>
              </p>
            )}
            <p className="mt-1 text-xs text-muted">
              {t('dashboard.longestStreak')}: {formatNumber(longestStreak)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">{t('dashboard.tasksDone')}</span>
              <span className="grid size-9 place-items-center rounded-md bg-success-soft text-success">
                <Gauge className="size-4" />
              </span>
            </div>
            {loading ? (
              <Skeleton className="mt-2 h-8 w-16" />
            ) : (
              <p className="tabular mt-1 text-2xl font-bold">{formatNumber(completedDays.length)}</p>
            )}
            <p className="mt-1 text-xs text-muted">
              {t('roadmap.of365')} {TOTAL_DAYS}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">{t('dashboard.studyTime')}</span>
              <span className="grid size-9 place-items-center rounded-md bg-info-soft text-info">
                <Timer className="size-4" />
              </span>
            </div>
            {loading ? (
              <Skeleton className="mt-2 h-8 w-24" />
            ) : (
              <p className="tabular mt-1 text-2xl font-bold">
                {formatDuration(Math.round(totalFocusSeconds / 60))}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium">{t('dashboard.dailyProgress')}</span>
            <span className="tabular text-muted">
              {completedDays.length} / {TOTAL_DAYS}
            </span>
          </div>
          <Progress value={completedDays.length} max={TOTAL_DAYS} label={t('dashboard.dailyProgress')} />
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.consistency')}</CardTitle>
          </CardHeader>
          <CardContent>
            {completedDays.length === 0 ? (
              <EmptyState message={t('common.noResults')} />
            ) : (
              <div className="h-56" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyChart}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                    <XAxis dataKey="date" tickFormatter={(v: string) => v.slice(5)} stroke="var(--text-muted)" fontSize={11} />
                    <YAxis allowDecimals={false} stroke="var(--text-muted)" fontSize={11} width={24} />
                    <Tooltip
                      contentStyle={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                    <Bar dataKey="count" fill="var(--accent)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.phaseProgress')}</CardTitle>
          </CardHeader>
          <CardContent>
            {phaseChart.length === 0 ? (
              <EmptyState message={t('common.noResults')} />
            ) : (
              <div className="h-56" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={phaseChart} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                    <XAxis type="number" domain={[0, 'dataMax']} stroke="var(--text-muted)" fontSize={11} />
                    <YAxis type="category" dataKey="name" width={90} stroke="var(--text-muted)" fontSize={11} />
                    <Tooltip
                      contentStyle={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                    <Bar dataKey="done" radius={[0, 4, 4, 0]}>
                      {phaseChart.map((entry) => (
                        <Cell key={entry.key} fill="var(--accent)" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.todaysPlan')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentDayRecord ? (
            <>
              <div>
                <Badge variant="outline">{t('roadmap.day')} {currentDayRecord.dayNumber}</Badge>
                <p className="mt-2 font-medium">
                  {locale === 'ar' ? currentDayRecord.titleAr : currentDayRecord.titleEn}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {locale === 'ar' ? currentDayRecord.objectiveAr : currentDayRecord.objectiveEn}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link to={`/app/roadmap/${currentDayRecord.dayNumber}`} className={buttonVariants()}>
                  <PlayCircle />
                  {t('dashboard.startLesson')}
                </Link>
                <Link to="/app/calendar" className={buttonVariants({ variant: 'outline' })}>
                  <Timer />
                  {t('dashboard.startFocus')}
                </Link>
                <Link to="/app/projects" className={buttonVariants({ variant: 'ghost' })}>
                  <TrendingUp />
                  {t('dashboard.openProjects')}
                </Link>
              </div>
              {todayProgress?.status === 'in_progress' && (
                <p className="text-sm text-muted">
                  {t('common.saving')} — {formatDate(todayProgress.started_at ?? today)}
                </p>
              )}
            </>
          ) : (
            <EmptyState message={t('common.comingSoon')} />
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex h-40 flex-col items-center justify-center gap-2 text-center">
      <p className="text-sm text-muted">{message}</p>
    </div>
  )
}