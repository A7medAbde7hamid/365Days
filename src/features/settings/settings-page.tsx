import { useCallback, useEffect, useState } from 'react'
import { Settings as SettingsIcon } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Alert } from '@/components/ui/primitives'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/input'
import { requireSupabase } from '@/lib/supabase/client'

export function SettingsPage() {
  const { t } = useLocale()
  const { user, isConfigured } = useAuth()
  const sb = requireSupabase()

  const [shareProgress, setShareProgress] = useState(false)
  const [shareStreak, setShareStreak] = useState(false)
  const [shareAchievements, setShareAchievements] = useState(false)
  const [shareNotes, setShareNotes] = useState(false)
  const [hiddenFromLeaderboard, setHiddenFromLeaderboard] = useState(false)
  const [notifyReminders, setNotifyReminders] = useState(false)

  const [saving, setSaving] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!isConfigured || !user) return
    const { data, error: e } = await sb
      .from('profiles')
      .select('share_progress, share_streak, share_achievements, share_notes, hidden_from_leaderboard, notify_reminders')
      .eq('user_id', user.id)
      .single()
    if (e) {
      setError(e.message)
      return
    }
    setShareProgress(data.share_progress ?? false)
    setShareStreak(data.share_streak ?? false)
    setShareAchievements(data.share_achievements ?? false)
    setShareNotes(data.share_notes ?? false)
    setHiddenFromLeaderboard(data.hidden_from_leaderboard ?? false)
    setNotifyReminders(data.notify_reminders ?? false)
  }, [isConfigured, user, sb])

  const save = useCallback(async () => {
    setSaving(true)
    setNotice(null)
    setError(null)
    try {
      await sb.rpc('update_user_profile', {
        p_share_progress: shareProgress,
        p_share_streak: shareStreak,
        p_share_achievements: shareAchievements,
        p_share_notes: shareNotes,
        p_hidden_from_leaderboard: hiddenFromLeaderboard,
        p_notify_reminders: notifyReminders,
      })
      setNotice(t('profile.saved'))
      await load()
    } catch (e: any) {
      setError(e?.message ?? 'Could not save settings.')
    } finally {
      setSaving(false)
    }
  }, [sb, shareProgress, shareStreak, shareAchievements, shareNotes, hiddenFromLeaderboard, notifyReminders, t, load])

  useEffect(() => {
    if (isConfigured) void load()
  }, [isConfigured, load])

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-gradient text-white shadow-sm">
          <SettingsIcon className="size-5" />
        </span>
        <h1 className="text-2xl font-bold tracking-tight">{t('profile.settings')}</h1>
      </header>

      {!isConfigured && (
        <Alert variant="warning">
          {t('setup.title')}
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>{t('profile.settings')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={e => {
              e.preventDefault()
              void save()
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Share progress */}
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={shareProgress}
                  onChange={e => setShareProgress(e.target.checked)}
                  className="rounded border border-border bg-transparent py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
                {t('profile.privacyProgress')}
              </Label>

              {/* Share streak */}
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={shareStreak}
                  onChange={e => setShareStreak(e.target.checked)}
                  className="rounded border border-border bg-transparent py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
                {t('profile.privacyStreak')}
              </Label>

              {/* Share achievements */}
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={shareAchievements}
                  onChange={e => setShareAchievements(e.target.checked)}
                  className="rounded border border-border bg-transparent py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
                {t('profile.privacyAchievements')}
              </Label>

              {/* Share notes */}
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={shareNotes}
                  onChange={e => setShareNotes(e.target.checked)}
                  className="rounded border border-border bg-transparent py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
                {t('profile.privacyNotes')}
              </Label>

              {/* Hide from leaderboard */}
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={hiddenFromLeaderboard}
                  onChange={e => setHiddenFromLeaderboard(e.target.checked)}
                  className="rounded border border-border bg-transparent py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
                {t('profile.leaderboardOptOut')}
              </Label>

              {/* Notify reminders */}
              <Label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={notifyReminders}
                  onChange={e => setNotifyReminders(e.target.checked)}
                  className="rounded border border-border bg-transparent py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                />
                {t('profile.notifyReminders')}
              </Label>
            </div>

            <Button type="submit" disabled={saving || !isConfigured}>
              {saving ? t('common.saving') : t('profile.save')}
            </Button>
          </form>

          {notice && <Alert variant="success">{notice}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
        </CardContent>
      </Card>

      {/* Delete account */}
      <Card>
        <CardHeader>
          <CardTitle>{t('profile.deleteAccount')}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p>{t('profile.deleteWarning')}</p>
          <Button
            variant="destructive"
            onClick={() => {
              if (window.confirm(t('profile.deleteWarning'))) {
                // TODO: call supabase auth.admin.delete-user(user.id)
                // For now just sign out locally
                sb.auth.signOut()
                window.location.href = '/sign-in'
              }
            }}
          >
            {t('profile.deleteAccount')}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}