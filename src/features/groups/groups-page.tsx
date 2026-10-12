import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, Plus, Users } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge, Skeleton, Alert as AlertBox } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { Input, Label, Textarea } from '@/components/ui/input'
import {
  GroupError,
  createGroup,
  fetchMyGroups,
  joinWithCode,
  type GroupWithRole,
} from './group-service'

const ROLE_BADGE: Record<string, 'default' | 'info' | 'warning'> = {
  owner: 'warning',
  admin: 'info',
  member: 'default',
}

export function GroupsPage() {
  const { t } = useLocale()
  const { isConfigured } = useAuth()

  const [groups, setGroups] = useState<GroupWithRole[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  const [mode, setMode] = useState<'none' | 'create' | 'join'>('none')

  const [createName, setCreateName] = useState('')
  const [createDescription, setCreateDescription] = useState('')
  const [joinCode, setJoinCode] = useState('')

  const loading = isConfigured && !loaded && error === null

  const load = useCallback(async () => {
    if (!isConfigured) return
    try {
      setGroups(await fetchMyGroups())
      setError(null)
    } catch (err) {
      setError(err instanceof GroupError ? err.message : 'Could not load your groups.')
    } finally {
      setLoaded(true)
    }
  }, [isConfigured])

  useEffect(() => {
    if (!isConfigured) return
    void load()
  }, [isConfigured, load])

  async function handleCreate(event: React.FormEvent) {
    event.preventDefault()
    if (!createName.trim()) return
    setPending(true)
    setError(null)
    try {
      await createGroup({
        name: createName.trim(),
        description: createDescription.trim() || null,
        visibility: 'private',
      })
      setNotice(t('groups.created'))
      setMode('none')
      setCreateName('')
      setCreateDescription('')
      await load()
    } catch (err) {
      setError(err instanceof GroupError ? err.message : 'Could not create the group.')
    } finally {
      setPending(false)
    }
  }

  async function handleJoin(event: React.FormEvent) {
    event.preventDefault()
    const code = joinCode.trim()
    if (!code) return
    setPending(true)
    setError(null)
    try {
      await joinWithCode(code)
      setNotice(t('groups.joined'))
      setMode('none')
      setJoinCode('')
      await load()
    } catch (err) {
      setError(err instanceof GroupError ? err.message : 'Could not join that group.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{t('groups.title')}</h1>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setMode(mode === 'join' ? 'none' : 'join')}>
            <LogIn />
            {t('groups.join')}
          </Button>
          <Button onClick={() => setMode(mode === 'create' ? 'none' : 'create')}>
            <Plus />
            {t('groups.create')}
          </Button>
        </div>
      </header>

      {notice && (
        <p role="status" className="rounded-md border border-success/30 bg-success-soft px-3 py-2 text-sm text-success">
          {notice}
        </p>
      )}
      {error && <AlertBox variant="danger">{error}</AlertBox>}
      {!isConfigured && <AlertBox variant="warning">{t('setup.title')}</AlertBox>}

      {mode === 'create' && (
        <Card>
          <CardHeader>
            <CardTitle>{t('groups.create')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="group-name">{t('groups.groupName')}</Label>
                <Input
                  id="group-name"
                  value={createName}
                  onChange={(e) => setCreateName(e.target.value)}
                  required
                  maxLength={80}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="group-desc">{t('groups.groupDescription')}</Label>
                <Textarea
                  id="group-desc"
                  rows={2}
                  value={createDescription}
                  onChange={(e) => setCreateDescription(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={pending}>
                  {pending ? t('common.saving') : t('common.create')}
                </Button>
                <Button type="button" variant="ghost" onClick={() => setMode('none')}>
                  {t('common.cancel')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {mode === 'join' && (
        <Card>
          <CardHeader>
            <CardTitle>{t('groups.join')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleJoin} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="join-code">{t('groups.inviteCode')}</Label>
                <Input
                  id="join-code"
                  dir="ltr"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                  placeholder="0123456789abcdef01234567"
                  autoComplete="off"
                  spellCheck={false}
                  required
                />
                <p className="text-xs text-muted">{t('groups.inviteCodeHint')}</p>
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={pending}>
                  {pending ? t('groups.joining') : t('groups.joinGroup')}
                </Button>
                <Button type="button" variant="ghost" onClick={() => setMode('none')}>
                  {t('common.cancel')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton key={i} className="h-32 w-full" />
          ))}
        </div>
      ) : groups.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border py-16 text-center">
          <Users className="size-6 text-subtle" />
          <p className="text-sm text-muted">{t('groups.empty')}</p>
          <p className="text-xs text-subtle">{t('groups.createFirst')}</p>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <li key={group.id}>
              <Link
                to={`/app/groups/${group.id}`}
                className="block h-full rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent/50 hover:bg-surface-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{group.name}</CardTitle>
                  <Badge variant={ROLE_BADGE[group.role]}>{t(`groups.${group.role}`)}</Badge>
                </div>
                {group.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{group.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}