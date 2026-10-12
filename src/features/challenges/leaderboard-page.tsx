import { useCallback, useEffect, useMemo, useState } from 'react'
import { Award, Trophy } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, Skeleton } from '@/components/ui/primitives'
import { cn } from '@/lib/utils'
import {
  GamificationError,
  fetchLeaderboard,
  fetchMyPoints,
  type LeaderboardRow,
} from './challenge-service'

type Period = 'week' | 'month' | 'all'

/**
 * Leaderboard.
 *
 * Rows are aggregated by the `leaderboard()` SQL function rather than fetched
 * and ranked in the browser. Two reasons: the browser would need to read other
 * users' point rows (which RLS deliberately does not expose), and users who
 * opted out would already be in the response payload. The opt-out is applied
 * inside the function, so an opted-out user is never sent to the client at all.
 */
export function LeaderboardPage() {
  const { t, formatNumber } = useLocale()
  const { isConfigured, user } = useAuth()

  const [period, setPeriod] = useState<Period>('week')
  const [rows, setRows] = useState<LeaderboardRow[]>([])
  const [points, setPoints] = useState<{ total: number; by_reason: Record<string, number> }>({
    total: 0,
    by_reason: {},
  })
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hidden, setHidden] = useState(false)

  const loading = isConfigured && !loaded && error === null

  const load = useCallback(async () => {
    if (!isConfigured) {
      setLoaded(true)
      return
    }
    try {
      const [board, mine] = await Promise.all([fetchLeaderboard(period), fetchMyPoints()])
      setRows(board)
      setPoints(mine)
      // If your own row is absent and you have points, you are opted out.
      setHidden(mine.total > 0 && !board.some((r) => r.user_id === user?.id))
      setError(null)
    } catch (err) {
      setError(
        err instanceof GamificationError ? err.message : 'Could not load the leaderboard.',
      )
    } finally {
      setLoaded(true)
    }
  }, [isConfigured, period, user?.id])

  useEffect(() => {
    setLoaded(false)
    if (!isConfigured) return
    void load()
  }, [isConfigured, load])

  const reasons = useMemo(() => Object.entries(points.by_reason), [points.by_reason])

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t('leaderboard.title')}</h1>
          {hidden && <p className="mt-1 text-sm text-muted">{t('leaderboard.optedOut')}</p>}
        </div>
        <div className="flex gap-1 rounded-lg border border-border bg-surface p-1">
          {(['week', 'month', 'all'] as Period[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setPeriod(value)}
              aria-pressed={period === value}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                period === value ? 'bg-accent text-accent-fg' : 'text-muted hover:bg-surface-2',
              )}
            >
              {t(`leaderboard.${value === 'all' ? 'allTime' : value === 'week' ? 'thisWeek' : 'thisMonth'}`)}
            </button>
          ))}
        </div>
      </header>

      {error && <Alert variant="danger">{error}</Alert>}
      {!isConfigured && <Alert variant="warning">{t('setup.title')}</Alert>}

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="size-4" />
              {t('leaderboard.yourPoints')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {loading ? (
              <Skeleton className="h-10 w-20" />
            ) : (
              <p className="tabular text-3xl font-bold">{formatNumber(points.total)}</p>
            )}
            {reasons.length > 0 && (
              <ul className="space-y-1 text-sm">
                {reasons.map(([reason, value]) => (
                  <li key={reason} className="flex items-center justify-between gap-2">
                    <span className="text-muted">{t(`points.${reason}`)}</span>
                    <span className="tabular font-medium">+{formatNumber(value)}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="size-4" />
              {t('leaderboard.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
            ) : rows.length === 0 ? (
              <p className="py-10 text-center text-sm text-muted">{t('leaderboard.empty')}</p>
            ) : (
              <ol className="divide-y divide-border">
                {rows.map((row) => {
                  const isMe = row.user_id === user?.id
                  return (
                    <li
                      key={row.user_id}
                      className={cn(
                        'flex items-center justify-between gap-3 py-2.5',
                        isMe && 'rounded-md bg-accent-soft px-2',
                      )}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="tabular w-6 shrink-0 text-sm font-semibold text-muted">
                          {formatNumber(row.rank + 1)}
                        </span>
                        <span className="truncate text-sm font-medium" dir="auto">
                          {row.display_name ?? row.username ?? '—'}
                          {isMe && (
                            <span className="ms-2 text-xs text-accent">{t('leaderboard.you')}</span>
                          )}
                        </span>
                      </div>
                      <span className="tabular shrink-0 text-sm font-semibold">
                        {formatNumber(row.points)}
                      </span>
                    </li>
                  )
                })}
              </ol>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function AchievementsPage() {
  const { t, locale } = useLocale()
  const { isConfigured } = useAuth()

  type AchievementRow = {
    code: string
    title_en: string
    title_ar: string
    description_en: string | null
    description_ar: string | null
    criteria: { type?: string; threshold?: number } | null
  }

  const [achievements, setAchievements] = useState<AchievementRow[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loading = isConfigured && !loaded && error === null

  const load = useCallback(async () => {
    if (!isConfigured) {
      setLoaded(true)
      return
    }
    try {
      const { supabase } = await import('@/lib/supabase/client')
      if (!supabase) return
      const { data, error: fetchError } = await supabase
        .from('achievements')
        .select('code, title_en, title_ar, description_en, description_ar, criteria')
        .order('code')
      if (fetchError) throw new GamificationError(fetchError.message)
      setAchievements(data ?? [])
      setError(null)
    } catch (err) {
      setError(err instanceof GamificationError ? err.message : 'Could not load achievements.')
    } finally {
      setLoaded(true)
    }
  }, [isConfigured])

  useEffect(() => {
    if (!isConfigured) return
    void load()
  }, [isConfigured, load])

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">{t('achievements.title')}</h1>
      </header>

      {error && <Alert variant="danger">{error}</Alert>}
      {!isConfigured && <Alert variant="warning">{t('setup.title')}</Alert>}

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} className="h-28 w-full" />
          ))}
        </div>
      ) : achievements.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted">{t('achievements.empty')}</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const threshold = achievement.criteria?.threshold
            const type = achievement.criteria?.type
            return (
              <li key={achievement.code}>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      {locale === 'ar' ? achievement.title_ar : achievement.title_en}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted">
                      {locale === 'ar'
                        ? achievement.description_ar
                        : achievement.description_en}
                    </p>
                    {type && threshold !== undefined && (
                      <p className="mt-2 text-xs text-subtle">
                        {t('achievements.requires')}: {formatCount(t, type, threshold)}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function formatCount(
  t: (key: string) => string,
  type: string,
  threshold: number,
): string {
  const label = t(`points.${type}`)
  return `${label} × ${threshold}`
}