import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Check, Copy, LogOut, Plus, ShieldOff, UserMinus } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, Badge, Skeleton } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useToday } from '@/hooks/use-today'
import {
  GroupError,
  changeMemberRole,
  createInvitation,
  fetchInvitations,
  fetchMembers,
  leaveGroup,
  removeMember,
  revokeInvitation,
  type GroupMember,
  type Invitation,
} from './group-service'
import type { GroupRole } from '@/types'

const ROLE_BADGE: Record<GroupRole, 'warning' | 'info' | 'default'> = {
  owner: 'warning',
  admin: 'info',
  member: 'default',
}

type GroupInfo = { id: string; name: string; description: string | null; share_progress: boolean }

export function GroupDetailPage() {
  const { groupId = '' } = useParams()
  const { t, formatDate } = useLocale()
  const { isConfigured, user } = useAuth()
  const navigate = useNavigate()

  // A stable "now" for expiry maths. Reading the clock during render would be
  // impure; useToday re-rolls at local midnight, which is accurate enough for
  // day-granular expiry and keeps renders deterministic.
  const now = useToday()

  const [group, setGroup] = useState<GroupInfo | null>(null)
  const [myRole, setMyRole] = useState<GroupRole>('member')
  const [members, setMembers] = useState<GroupMember[]>([])
  const [invitations, setInvitations] = useState<Invitation[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  const isAdmin = myRole === 'owner' || myRole === 'admin'
  const isOwner = myRole === 'owner'
  const loading = isConfigured && !loaded && error === null

  const load = useCallback(async () => {
    if (!isConfigured || !groupId || !user) return
    try {
      const roster = await fetchMembers(groupId)
      setMembers(roster)
      setLoaded(true)
      setError(null)

      const me = roster.find((m) => m.user_id === user.id)
      setMyRole(me?.role ?? 'member')

      // Group header: the groups select policy already limits this to members.
      const sb = (await import('@/lib/supabase/client')).supabase
      if (sb) {
        const { data } = await sb
          .from('study_groups')
          .select('id, name, description, share_progress')
          .eq('id', groupId)
          .maybeSingle()
        setGroup(data ?? null)

        // Invitations have no select policy for plain members, so this simply
        // comes back empty for them rather than erroring.
        if (me && me.role !== 'member') {
          try {
            setInvitations(await fetchInvitations(groupId))
          } catch {
            setInvitations([])
          }
        }
      }
    } catch (err) {
      setError(err instanceof GroupError ? err.message : 'Could not load this group.')
      setLoaded(true)
    }
  }, [groupId, isConfigured, user])

  useEffect(() => {
    if (!isConfigured) return
    void load()
  }, [isConfigured, load])

  async function act<T>(work: () => Promise<T>, successMessage: string): Promise<T | undefined> {
    setPending(true)
    setError(null)
    setNotice(null)
    try {
      const result = await work()
      setNotice(successMessage)
      await load()
      return result
    } catch (err) {
      setError(err instanceof GroupError ? err.message : 'That action could not be completed.')
      return undefined
    } finally {
      setPending(false)
    }
  }

  async function handleLeave() {
    const ok = await act(() => leaveGroup(groupId), t('groups.leftGroup'))
    if (ok !== undefined) navigate('/app/groups', { replace: true })
  }

  async function handleCreateInvitation() {
    await act(() => createInvitation(groupId, { expiresDays: 7 }), t('groups.invitationCreated'))
  }

  async function handleRevoke(id: string) {
    await act(() => revokeInvitation(id), t('groups.invitationRevoked'))
  }

  async function handleRemove(member: GroupMember) {
    await act(() => removeMember(groupId, member.user_id), t('groups.memberRemoved'))
  }

  async function handleRoleChange(member: GroupMember, role: GroupRole) {
    await act(() => changeMemberRole(groupId, member.user_id, role), t('groups.roleChanged'))
  }

  if (!isConfigured) {
    return <Alert variant="warning">{t('setup.title')}</Alert>
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-40 w-full" />
      </div>
    )
  }

  if (!group) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-muted">{t('groups.empty')}</p>
        <div className="mt-4">
          <Link to="/app/groups">
            <Button variant="outline">{t('groups.title')}</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-gradient text-lg font-bold uppercase text-white shadow-sm">
            {group.name.slice(0, 1)}
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{group.name}</h1>
            {group.description && <p className="mt-0.5 text-sm text-muted">{group.description}</p>}
            <p className="mt-1 text-xs text-subtle">
              {t('groups.yourRole', { role: t(`groups.${myRole}`) })} ·{' '}
              {t('groups.memberCount', { count: String(members.length) })}
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={() => void handleLeave()}
          disabled={pending}
          className="w-full sm:w-auto"
        >
          <LogOut />
          {t('groups.leave')}
        </Button>
      </header>

      {notice && <Alert variant="success">{notice}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Members */}
      <Card>
        <CardHeader>
          <CardTitle>{t('groups.members')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-border">
            {members.map((member) => {
              const isSelf = member.user_id === user?.id
              return (
                <li
                  key={member.user_id}
                  className="flex flex-wrap items-center justify-between gap-2 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {member.display_name ?? member.username ?? t('groups.member')}
                      {isSelf && <span className="ms-2 text-xs text-subtle">({t('leaderboard.you')})</span>}
                    </p>
                    {member.username && (
                      <p className="truncate text-xs text-subtle" dir="ltr">
                        @{member.username}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={ROLE_BADGE[member.role]}>{t(`groups.${member.role}`)}</Badge>

                    {/* Role changes: owner only, and never on yourself. */}
                    {isOwner && !isSelf && member.role !== 'owner' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={pending}
                        onClick={() =>
                          void handleRoleChange(
                            member,
                            member.role === 'admin' ? 'member' : 'admin',
                          )
                        }
                      >
                        {member.role === 'admin' ? t('groups.makeMember') : t('groups.makeAdmin')}
                      </Button>
                    )}

                    {/* Removal: admins may remove non-owners; owners may remove
                        anyone except themselves. The database refuses the rest,
                        including any attempt to orphan the group. */}
                    {isAdmin && !isSelf && !(member.role === 'owner' && !isOwner) && (
                      <Button
                        variant="ghost"
                        size="icon"
                        disabled={pending}
                        onClick={() => void handleRemove(member)}
                        aria-label={t('groups.removeMember')}
                        title={t('groups.removeMember')}
                        className="hover:text-danger"
                      >
                        <UserMinus />
                      </Button>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
          {isOwner && (
            <p className="mt-3 text-xs text-muted">{t('groups.onlyOwners')}</p>
          )}
        </CardContent>
      </Card>

      {/* Invitations — owners and admins only */}
      {isAdmin && (
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle>{t('groups.invitations')}</CardTitle>
              <Button size="sm" onClick={() => void handleCreateInvitation()} disabled={pending}>
                <Plus />
                {t('groups.createInvitation')}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs text-muted">{t('groups.invitationsHint')}</p>

            {invitations.length === 0 ? (
              <p className="py-4 text-center text-sm text-subtle">{t('groups.noInvitations')}</p>
            ) : (
              <ul className="divide-y divide-border">
                {invitations.map((invitation) => {
                  const expired = invitation.expires_at
                    ? new Date(invitation.expires_at) < now
                    : false
                  const exhausted =
                    invitation.max_uses !== null && invitation.uses >= invitation.max_uses
                  const inactive = Boolean(invitation.revoked_at) || expired || exhausted

                  return (
                    <li
                      key={invitation.id}
                      className="flex flex-wrap items-center justify-between gap-2 py-3"
                    >
                      <div className="min-w-0">
                        <code
                          dir="ltr"
                          className={cn(
                            'rounded bg-surface-2 px-2 py-1 text-sm',
                            inactive && 'text-subtle line-through',
                          )}
                        >
                          {invitation.code}
                        </code>
                        <p className="mt-1 text-xs text-muted">
                          {invitation.revoked_at
                            ? t('groups.revoked')
                            : expired
                              ? t('groups.expired')
                              : t('groups.active')}
                          {' · '}
                          {invitation.expires_at
                            ? t('groups.expiresIn', {
                                days: String(
Math.max(
                                      0,
                                      Math.ceil(
                                        (new Date(invitation.expires_at).getTime() -
                                          now.getTime()) /
                                          86_400_000,
                                      ),
                                    ),
                                ),
                              })
                            : t('groups.neverExpires')}
                          {invitation.max_uses !== null &&
                            ` · ${t('groups.usesRemaining', {
                              uses: String(invitation.max_uses - invitation.uses),
                            })}`}
                          {` · ${formatDate(invitation.created_at)}`}
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <CopyButton code={invitation.code} />
                        {!invitation.revoked_at && (
                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={pending}
                            onClick={() => void handleRevoke(invitation.id)}
                            aria-label={t('groups.revoke')}
                            title={t('groups.revoke')}
                            className="hover:text-danger"
                          >
                            <ShieldOff />
                          </Button>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function CopyButton({ code }: { code: string }) {
  const { t } = useLocale()
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard access can be denied; the code is visible on screen anyway.
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => void copy()}
      aria-label={t('groups.copyCode')}
      title={t('groups.copyCode')}
    >
      {copied ? <Check className="text-success" /> : <Copy />}
    </Button>
  )
}