import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarClock, Plus, Trophy } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, Badge, Progress, Skeleton } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { Input, Label, Textarea } from '@/components/ui/input'
import { toLocalDateKey, useToday } from '@/hooks/use-today'
import {
  GamificationError,
  awardChallengePoints,
  createChallenge,
  fetchChallenges,
  fetchParticipations,
  joinChallenge,
  leaveChallenge,
  refreshMyChallengeProgress,
  type Challenge,
  type ChallengeType,
  type Participation,
} from './challenge-service'

const TYPE_LABEL: Record<ChallengeType, string> = {
  sessions: 'challenges.sessions',
  phase: 'challenges.phase',
  project: 'challenges.project',
  revision: 'challenges.revision',
  consistency: 'challenges.consistency',
}

type Props = { groupId?: string }

export function ChallengesPage({ groupId }: Props) {
  const { t } = useLocale()
  const { isConfigured } = useAuth()
  const now = useToday()

  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [participations, setParticipations] = useState<Participation[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [pending, setPending] = useState(false)
  const [creating, setCreating] = useState(false)

  const [form, setForm] = useState({
    title: '',
    description: '',
    rules: '',
    type: 'sessions' as ChallengeType,
    targetCount: 5,
    days: 7,
    bonusPoints: 25,
  })

  const loading = isConfigured && !loaded && error === null

  const load = useCallback(async () => {
    if (!isConfigured || !groupId) {
      setLoaded(true)
      return
    }
    try {
      const [rows, mine] = await Promise.all([
        fetchChallenges(groupId),
        fetchParticipations(groupId),
      ])
      setChallenges(rows)
      setParticipations(mine)
      setError(null)
    } catch (err) {
      setError(err instanceof GamificationError ? err.message : 'Could not load challenges.')
    } finally {
      setLoaded(true)
    }
  }, [groupId, isConfigured])

  useEffect(() => {
    if (!isConfigured) return
    void load()
  }, [isConfigured, load])

  /**
   * Progress is recomputed server-side from real activity. Calling this is what
   * moves the numbers — the client never sends progress values.
   */
  const refreshProgress = useCallback(async () => {
    if (!isConfigured) return
    try {
      const results = await refreshMyChallengeProgress()
      const completedNow = results.filter((r) => r.just_completed)

      // Awarding is idempotent server-side, so calling per completion is safe.
      await Promise.all(
        completedNow.map((r) => awardChallengePoints(r.challenge_id).catch(() => 0)),
      )

      if (completedNow.length > 0) {
        setNotice(t('challenges.completed'))
      }
      await load()
    } catch (err) {
      setError(err instanceof GamificationError ? err.message : 'Could not refresh progress.')
    }
  }, [isConfigured, load, t])

  useEffect(() => {
    if (!loaded || !isConfigured) return
    void refreshProgress()
  }, [loaded, isConfigured, refreshProgress])

  async function act(work: () => Promise<unknown>, message: string) {
    setPending(true)
    setError(null)
    setNotice(null)
    try {
      await work()
      setNotice(message)
      await load()
    } catch (err) {
      setError(err instanceof GamificationError ? err.message : 'That action could not be completed.')
    } finally {
      setPending(false)
    }
  }

  async function handleCreate(event: React.FormEvent) {
    event.preventDefault()
    if (!groupId || !form.title.trim()) return
    const endsAt = new Date(now)
    endsAt.setDate(endsAt.getDate() + form.days)

    await act(
      () =>
        createChallenge({
          groupId,
          title: form.title,
          description: form.description || null,
          rules: form.rules || null,
          type: form.type,
          targetCount: form.targetCount,
          endsAt: endsAt.toISOString(),
          bonusPoints: form.bonusPoints,
        }),
      t('challenges.created'),
    )
    setCreating(false)
    setForm({ ...form, title: '', description: '', rules: '' })
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-gradient text-white shadow-sm">
            <Trophy className="size-5" />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{t('challenges.title')}</h1>
            {groupId && (
              <Link to="/app/groups" className="text-sm text-accent hover:underline">
                {t('groups.title')}
              </Link>
            )}
          </div>
        </div>
        {groupId && (
          <Button
            onClick={() => setCreating((v) => !v)}
            disabled={pending || !isConfigured}
            className="w-full sm:w-auto"
          >
            <Plus />
            {t('challenges.create')}
          </Button>
        )}
      </header>

      {notice && <Alert variant="success">{notice}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      {!isConfigured && <Alert variant="warning">{t('setup.title')}</Alert>}

      {creating && groupId && (
        <Card>
          <CardHeader>
            <CardTitle>{t('challenges.create')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="ch-title">{t('challenges.title')}</Label>
                <Input
                  id="ch-title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  maxLength={120}
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="ch-desc">{t('challenges.description')}</Label>
                <Textarea
                  id="ch-desc"
                  rows={2}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="ch-rules">{t('challenges.rules')}</Label>
                <Textarea
                  id="ch-rules"
                  rows={2}
                  value={form.rules}
                  onChange={(e) => setForm({ ...form, rules: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="ch-type">{t('challenges.type')}</Label>
                <select
                  id="ch-type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value as ChallengeType })}
                  className="h-9 w-full rounded-md border border-border bg-surface px-3 text-sm"
                >
                  {(Object.keys(TYPE_LABEL) as ChallengeType[]).map((type) => (
                    <option key={type} value={type}>
                      {t(TYPE_LABEL[type])}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="ch-target">
                  {form.type === 'phase'
                    ? t('challenges.phaseNumber')
                    : t('challenges.targetCount')}
                </Label>
                <Input
                  id="ch-target"
                  type="number"
                  min={1}
                  max={form.type === 'phase' ? 12 : 365}
                  value={form.targetCount}
                  onChange={(e) => setForm({ ...form, targetCount: Number(e.target.value) })}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="ch-days">{t('challenges.durationDays')}</Label>
                <Input
                  id="ch-days"
                  type="number"
                  min={1}
                  max={365}
                  value={form.days}
                  onChange={(e) => setForm({ ...form, days: Number(e.target.value) })}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="ch-bonus">{t('challenges.bonusPoints')}</Label>
                <Input
                  id="ch-bonus"
                  type="number"
                  min={0}
                  max={1000}
                  value={form.bonusPoints}
                  onChange={(e) => setForm({ ...form, bonusPoints: Number(e.target.value) })}
                />
              </div>

              <div className="flex gap-2 sm:col-span-2">
                <Button type="submit" disabled={pending}>
                  {pending ? t('common.saving') : t('common.create')}
                </Button>
                <Button type="button" variant="ghost" onClick={() => setCreating(false)}>
                  {t('common.cancel')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {!groupId && !loading && (
        <p className="text-sm text-muted">{t('challenges.pickGroup')}</p>
      )}

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-40 w-full" />
          ))}
        </div>
      ) : challenges.length === 0 ? (
        groupId && (
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border py-16 text-center">
            <Trophy className="size-6 text-subtle" />
            <p className="text-sm text-muted">{t('challenges.empty')}</p>
          </div>
        )
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {challenges.map((challenge) => {
            const mine = participations.find((p) => p.challenge_id === challenge.id)
            const ended = new Date(challenge.ends_at) < now
            const notStarted = new Date(challenge.starts_at) > now

            return (
              <li key={challenge.id}>
                <Card className="flex h-full flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base">{challenge.title}</CardTitle>
                      {mine?.completed && <Badge variant="success">{t('challenges.completed')}</Badge>}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <Badge variant="outline">{t(TYPE_LABEL[challenge.challenge_type])}</Badge>
                      <Badge variant="default">
                        +{challenge.bonus_points} {t('challenges.points')}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col gap-3">
                    {challenge.description && (
                      <p className="text-sm text-muted">{challenge.description}</p>
                    )}
                    {challenge.rules && (
                      <p className="rounded-md border border-border bg-surface-2 p-2 text-xs text-muted">
                        {challenge.rules}
                      </p>
                    )}

                    <div className="flex items-center gap-1.5 text-xs text-subtle">
                      <CalendarClock className="size-3.5" />
                      {t('challenges.ends')}: {toLocalDateKey(new Date(challenge.ends_at))}
                    </div>

                    {mine ? (
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="tabular">
                            {mine.progress} / {challenge.target_count}
                          </span>
                          <span className="text-muted">
                            {challenge.challenge_type === 'phase'
                              ? t('challenges.phaseNumber')
                              : t('challenges.targetCount')}
                          </span>
                        </div>
                        <Progress
                          value={mine.progress}
                          max={challenge.target_count}
                          label={challenge.title}
                        />
                        {!mine.completed && !ended && (
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled={pending}
                            onClick={() => void act(() => leaveChallenge(challenge.id), t('challenges.left'))}
                          >
                            {t('challenges.leave')}
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <Button
                          size="sm"
                          disabled={pending || ended || notStarted || !isConfigured}
                          onClick={() => void act(() => joinChallenge(challenge.id), t('challenges.joined'))}
                        >
                          {ended
                            ? t('challenges.finished')
                            : notStarted
                              ? t('challenges.upcoming')
                              : t('challenges.join')}
                        </Button>
                      </div>
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