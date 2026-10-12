import { useCallback, useEffect, useRef, useState } from 'react'
import { CalendarDays, CheckCircle2, TrendingUp } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { useProgress } from '@/features/progress/use-progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, Badge, Progress, Skeleton } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { Input, Label, Textarea } from '@/components/ui/input'
import { toLocalDateKey, useToday } from '@/hooks/use-today'
import {
  ReviewError,
  fetchMonthlyReviews,
  fetchWeeklyReviews,
  isoWeek,
  submitMonthlyReview,
  submitWeeklyReview,
  type MonthlyReview,
  type WeeklyReview,
} from './review-service'

type Tab = 'weekly' | 'monthly'

export function ReviewsPage() {
  const { t, formatDate, formatDuration } = useLocale()
  const { isConfigured } = useAuth()
  const { byDay, sessions } = useProgress()
  const now = useToday()

  const [tab, setTab] = useState<Tab>('weekly')
  const [weekly, setWeekly] = useState<WeeklyReview[]>([])
  const [monthly, setMonthly] = useState<MonthlyReview[]>([])
  const [loaded, setLoaded] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  const period = isoWeek(now)

  const [weeklyForm, setWeeklyForm] = useState({
    strongest: '',
    revision: '',
    blockers: '',
    nextGoal: '',
    plannedTasks: 0,
    completedTasks: 0,
    selfAssessment: '',
  })

  const [monthlyForm, setMonthlyForm] = useState({
    skills: '',
    revision: '',
    selfAssessment: '',
    biggestWin: '',
    mainDifficulty: '',
    nextPriorities: '',
    projectsCompleted: 0,
    studyMinutes: 0,
  })

  const loading = isConfigured && !loaded && error === null

  const load = useCallback(async () => {
    if (!isConfigured) {
      setLoaded(true)
      return
    }
    try {
      const [w, m] = await Promise.all([fetchWeeklyReviews(), fetchMonthlyReviews()])
      setWeekly(w)
      setMonthly(m)
      setError(null)
    } catch (err) {
      setError(err instanceof ReviewError ? err.message : 'Could not load your reviews.')
    } finally {
      setLoaded(true)
    }
  }, [isConfigured])

  useEffect(() => {
    if (!isConfigured) return
    void load()
  }, [isConfigured, load])

  /**
   * Pre-fill from real activity rather than asking the learner to count their own
   * week from memory. They can still correct the numbers.
   *
   * Runs exactly once per mount: a "helpful" prefill that keeps overwriting the
   * field while someone is typing into it is worse than no prefill at all.
   */
  const prefilled = useRef(false)
  useEffect(() => {
    if (!loaded || prefilled.current) return
    prefilled.current = true

    const days = Array.from(byDay.values()).filter((p) => p.status === 'completed').length
    setWeeklyForm((f) => ({
      ...f,
      plannedTasks: f.plannedTasks || days,
      completedTasks: f.completedTasks || days,
    }))

    // Scope to the current month. totalFocusSeconds is a lifetime figure, and
    // putting that into "study time this month" would overstate the month by
    // however long the account has existed.
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
    const monthSeconds = sessions
      .filter((s) => {
        if (!s.started_at) return false
        return new Date(s.started_at) >= monthStart
      })
      .reduce((sum, s) => sum + (s.duration_seconds ?? 0), 0)
    setMonthlyForm((f) => ({
      ...f,
      studyMinutes: f.studyMinutes || Math.round(monthSeconds / 60),
    }))
  }, [loaded, byDay, sessions, now])

  async function saveWeekly(event: React.FormEvent) {
    event.preventDefault()
    setPending(true)
    setError(null)
    setNotice(null)
    try {
      await submitWeeklyReview({
        isoYear: period.year,
        isoWeek: period.week,
        ...weeklyForm,
      })
      setNotice(t('reviews.saved'))
      await load()
    } catch (err) {
      setError(err instanceof ReviewError ? err.message : 'Could not save the review.')
    } finally {
      setPending(false)
    }
  }

  async function saveMonthly(event: React.FormEvent) {
    event.preventDefault()
    setPending(true)
    setError(null)
    setNotice(null)
    try {
      await submitMonthlyReview({
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        ...monthlyForm,
      })
      setNotice(t('reviews.saved'))
      await load()
    } catch (err) {
      setError(err instanceof ReviewError ? err.message : 'Could not save the review.')
    } finally {
      setPending(false)
    }
  }

  const thisWeek = weekly.find((r) => r.iso_year === period.year && r.iso_week === period.week)
  const thisMonth = monthly.find(
    (r) => r.year === now.getFullYear() && r.month === now.getMonth() + 1,
  )

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">{t('reviews.weekly')}</h1>
      </header>

      <div className="flex gap-1 rounded-lg border border-border bg-surface p-1 sm:w-fit">
        {(['weekly', 'monthly'] as Tab[]).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setTab(value)}
            aria-pressed={tab === value}
            className={
              tab === value
                ? 'flex-1 rounded-md bg-accent px-4 py-1.5 text-sm font-medium text-accent-fg'
                : 'flex-1 rounded-md px-4 py-1.5 text-sm font-medium text-muted hover:bg-surface-2'
            }
          >
            {t(value === 'weekly' ? 'reviews.weekly' : 'reviews.monthly')}
          </button>
        ))}
      </div>

      {notice && <Alert variant="success">{notice}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      {!isConfigured && <Alert variant="warning">{t('setup.title')}</Alert>}

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>
              {tab === 'weekly'
                ? `${t('reviews.weekly')} — ${period.year}-W${String(period.week).padStart(2, '0')}`
                : `${t('reviews.monthly')} — ${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {tab === 'weekly' ? (
              <form onSubmit={saveWeekly} className="space-y-4">
                <Field label={t('reviews.strongest')}>
                  <Textarea
                    rows={2}
                    value={weeklyForm.strongest}
                    onChange={(e) => setWeeklyForm({ ...weeklyForm, strongest: e.target.value })}
                  />
                </Field>
                <Field label={t('reviews.needsRevision')}>
                  <Textarea
                    rows={2}
                    value={weeklyForm.revision}
                    onChange={(e) => setWeeklyForm({ ...weeklyForm, revision: e.target.value })}
                  />
                </Field>
                <Field label={t('reviews.blockers')}>
                  <Textarea
                    rows={2}
                    value={weeklyForm.blockers}
                    onChange={(e) => setWeeklyForm({ ...weeklyForm, blockers: e.target.value })}
                  />
                </Field>
                <Field label={t('reviews.nextWeekGoal')}>
                  <Textarea
                    rows={2}
                    value={weeklyForm.nextGoal}
                    onChange={(e) => setWeeklyForm({ ...weeklyForm, nextGoal: e.target.value })}
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t('reviews.plannedTasks')}>
                    <Input
                      type="number"
                      min={0}
                      max={365}
                      value={weeklyForm.plannedTasks}
                      onChange={(e) =>
                        setWeeklyForm({ ...weeklyForm, plannedTasks: Number(e.target.value) })
                      }
                    />
                  </Field>
                  <Field label={t('reviews.completedTasks')}>
                    <Input
                      type="number"
                      min={0}
                      max={365}
                      value={weeklyForm.completedTasks}
                      onChange={(e) =>
                        setWeeklyForm({ ...weeklyForm, completedTasks: Number(e.target.value) })
                      }
                    />
                  </Field>
                </div>

                {/* Live planned-vs-completed comparison */}
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-muted">{t('reviews.plannedVsCompleted')}</span>
                    <span className="tabular">
                      {weeklyForm.completedTasks} / {weeklyForm.plannedTasks}
                    </span>
                  </div>
                  <Progress
                    value={weeklyForm.completedTasks}
                    max={Math.max(1, weeklyForm.plannedTasks)}
                    label={t('reviews.plannedVsCompleted')}
                  />
                </div>

                <Field label={t('reviews.selfAssessment')}>
                  <Textarea
                    rows={3}
                    value={weeklyForm.selfAssessment}
                    onChange={(e) => setWeeklyForm({ ...weeklyForm, selfAssessment: e.target.value })}
                  />
                </Field>

                <Button type="submit" disabled={pending || !isConfigured}>
                  {pending ? t('common.saving') : t('reviews.saveReview')}
                </Button>
              </form>
            ) : (
              <form onSubmit={saveMonthly} className="space-y-4">
                <Field label={t('reviews.skills')}>
                  <Textarea
                    rows={2}
                    value={monthlyForm.skills}
                    onChange={(e) => setMonthlyForm({ ...monthlyForm, skills: e.target.value })}
                  />
                </Field>
                <Field label={t('reviews.needsRevision')}>
                  <Textarea
                    rows={2}
                    value={monthlyForm.revision}
                    onChange={(e) => setMonthlyForm({ ...monthlyForm, revision: e.target.value })}
                  />
                </Field>
                <Field label={t('reviews.biggestWin')}>
                  <Textarea
                    rows={2}
                    value={monthlyForm.biggestWin}
                    onChange={(e) => setMonthlyForm({ ...monthlyForm, biggestWin: e.target.value })}
                  />
                </Field>
                <Field label={t('reviews.mainDifficulty')}>
                  <Textarea
                    rows={2}
                    value={monthlyForm.mainDifficulty}
                    onChange={(e) => setMonthlyForm({ ...monthlyForm, mainDifficulty: e.target.value })}
                  />
                </Field>
                <Field label={t('reviews.nextMonthPriorities')}>
                  <Textarea
                    rows={2}
                    value={monthlyForm.nextPriorities}
                    onChange={(e) => setMonthlyForm({ ...monthlyForm, nextPriorities: e.target.value })}
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t('reviews.projectsCompleted')}>
                    <Input
                      type="number"
                      min={0}
                      value={monthlyForm.projectsCompleted}
                      onChange={(e) =>
                        setMonthlyForm({ ...monthlyForm, projectsCompleted: Number(e.target.value) })
                      }
                    />
                  </Field>
                  <Field label={t('reviews.studyTime')}>
                    <Input
                      type="number"
                      min={0}
                      value={monthlyForm.studyMinutes}
                      onChange={(e) =>
                        setMonthlyForm({ ...monthlyForm, studyMinutes: Number(e.target.value) })
                      }
                    />
                  </Field>
                </div>

                <Field label={t('reviews.selfAssessment')}>
                  <Textarea
                    rows={3}
                    value={monthlyForm.selfAssessment}
                    onChange={(e) => setMonthlyForm({ ...monthlyForm, selfAssessment: e.target.value })}
                  />
                </Field>

                <Button type="submit" disabled={pending || !isConfigured}>
                  {pending ? t('common.saving') : t('reviews.saveReview')}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* History */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="size-4" />
                {tab === 'weekly' ? `${period.year}-W${period.week}` : toLocalDateKey(now).slice(0, 7)}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              {tab === 'weekly' ? (
                thisWeek ? (
                  <div className="space-y-2">
                    <Badge variant="success" className="gap-1">
                      <CheckCircle2 className="size-3" />
                      {t('reviews.submitted')}
                    </Badge>
                    <p className="text-muted">
                      {thisWeek.completed_tasks} / {thisWeek.planned_tasks}{' '}
                      {t('reviews.plannedVsCompleted')}
                    </p>
                    {thisWeek.next_week_goal && (
                      <p className="text-sm">
                        <span className="text-muted">{t('reviews.nextWeekGoal')}: </span>
                        {thisWeek.next_week_goal}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-muted">{t('reviews.notSubmitted')}</p>
                )
              ) : thisMonth ? (
                <div className="space-y-2">
                  <Badge variant="success" className="gap-1">
                    <CheckCircle2 className="size-3" />
                    {t('reviews.submitted')}
                  </Badge>
                  <p className="text-muted">{formatDuration(thisMonth.study_minutes)}</p>
                  {thisMonth.biggest_win && (
                    <p className="text-sm">
                      <span className="text-muted">{t('reviews.biggestWin')}: </span>
                      {thisMonth.biggest_win}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-muted">{t('reviews.notSubmitted')}</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CalendarDays className="size-4" />
                {t('reviews.history')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-2">
                  {Array.from({ length: 4 }, (_, i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : tab === 'weekly' ? (
                weekly.length === 0 ? (
                  <p className="py-4 text-center text-sm text-muted">{t('reviews.noHistory')}</p>
                ) : (
                  <ul className="divide-y divide-border">
                    {weekly.map((review) => (
                      <li key={review.id} className="py-2 text-sm">
                        <div className="flex items-center justify-between gap-2">
                          <span className="tabular font-medium">
                            {review.iso_year}-W{String(review.iso_week).padStart(2, '0')}
                          </span>
                          <span className="tabular text-xs text-muted">
                            {review.completed_tasks}/{review.planned_tasks}
                          </span>
                        </div>
                        {review.strongest_topics && (
                          <p className="mt-0.5 truncate text-xs text-muted">{review.strongest_topics}</p>
                        )}
                        <p className="text-xs text-subtle">{formatDate(review.submitted_at ?? new Date())}</p>
                      </li>
                    ))}
                  </ul>
                )
              ) : monthly.length === 0 ? (
                <p className="py-4 text-center text-sm text-muted">{t('reviews.noHistory')}</p>
              ) : (
                <ul className="divide-y divide-border">
                  {monthly.map((review) => (
                    <li key={review.id} className="py-2 text-sm">
                      <div className="flex items-center justify-between gap-2">
                        <span className="tabular font-medium">
                          {review.year}-{String(review.month).padStart(2, '0')}
                        </span>
                        <span className="text-xs text-muted">
                          {review.projects_completed} {t('reviews.projects')}
                        </span>
                      </div>
                      {review.biggest_win && (
                        <p className="mt-0.5 truncate text-xs text-muted">{review.biggest_win}</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  )
}