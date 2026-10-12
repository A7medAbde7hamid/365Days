import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  Award,
  CalendarDays,
  FolderGit2,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Menu,
  NotebookPen,
  Settings as SettingsIcon,
  Trophy,
  Users,
  X,
} from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { LanguageToggle, ThemeToggle } from '@/components/layout/theme-language-controls'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const NAV_ITEMS = [
  { to: '/app', labelKey: 'nav.dashboard', icon: LayoutDashboard, end: true },
  { to: '/app/roadmap', labelKey: 'nav.roadmap', icon: ListChecks, end: false },
  { to: '/app/projects', labelKey: 'nav.projects', icon: FolderGit2, end: false },
  { to: '/app/calendar', labelKey: 'nav.calendar', icon: CalendarDays, end: false },
  { to: '/app/reviews', labelKey: 'nav.reviews', icon: NotebookPen, end: false },
  { to: '/app/groups', labelKey: 'nav.groups', icon: Users, end: false },
  { to: '/app/challenges', labelKey: 'nav.challenges', icon: Trophy, end: false },
  { to: '/app/leaderboard', labelKey: 'nav.leaderboard', icon: Trophy, end: false },
  { to: '/app/achievements', labelKey: 'nav.achievements', icon: Award, end: false },
  { to: '/app/settings', labelKey: 'nav.settings', icon: SettingsIcon, end: false },
] as const

export function AppShell() {
  const { t, locale } = useLocale()
  const { signOut, profile, user } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  const displayName = profile?.display_name ?? user?.email?.split('@')[0] ?? ''

  const nav = (
    <nav className="flex flex-col gap-1" aria-label={t('nav.menu')}>
      {NAV_ITEMS.map(({ to, labelKey, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          // Close the mobile drawer from the event that navigated, rather than
          // syncing it from a location effect.
          onClick={() => setMobileOpen(false)}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-accent-soft text-accent'
                : 'text-muted hover:bg-surface-2 hover:text-text',
            )
          }
        >
          <Icon className="size-4 shrink-0" />
          {t(labelKey)}
        </NavLink>
      ))}
    </nav>
  )

  const account = (
    <div className="flex items-center justify-between gap-2 border-t border-border pt-3">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{displayName}</p>
        {profile?.username && (
          <p className="truncate text-xs text-subtle" dir="ltr">
            @{profile.username}
          </p>
        )}
      </div>
      <Button variant="ghost" size="icon" onClick={() => void signOut()} aria-label={t('common.signOut')} title={t('common.signOut')}>
        <LogOut />
      </Button>
    </div>
  )

  return (
    <div className="min-h-svh bg-bg">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-2 border-b border-border bg-surface/90 px-4 py-3 backdrop-blur lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.menu')}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
        <span className="font-semibold">{t('app.name')}</span>
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {mobileOpen && (
        <div id="mobile-nav" className="border-b border-border bg-surface p-4 lg:hidden">
          {nav}
          <div className="mt-4">{account}</div>
        </div>
      )}

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-svh w-64 shrink-0 flex-col justify-between border-e border-border bg-surface p-4 lg:flex">
          <div>
            <div className="mb-6 px-3">
              <p className="text-lg font-bold tracking-tight">{t('app.name')}</p>
            </div>
            {nav}
          </div>
          <div>
            <div className="mb-3 flex items-center justify-end gap-1">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            {account}
          </div>
        </aside>

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {/* Announce route changes to screen readers on navigation. */}
          <div className="sr-only" aria-live="polite">
            {document.title}
          </div>
          <Outlet key={locale} />
        </main>
      </div>
    </div>
  )
}