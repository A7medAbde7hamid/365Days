import { lazy, Suspense, type ComponentType } from 'react'
import { createBrowserRouter, Navigate, useParams } from 'react-router-dom'
import { AppShell } from '@/components/layout/app-shell'
import { RedirectIfAuthed, RequireAuth } from '@/features/auth/require-auth'
import { SignInPage, SignUpPage } from '@/features/auth/auth-pages'
import { LandingPage } from '@/features/landing/landing-page'
import { useLocale } from '@/app/providers/locale-provider'
import type { FeatureKey } from '@/features/placeholder-page'

function RouteFallback() {
  const { t } = useLocale()
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm text-muted">
      {t('common.loading')}
    </div>
  )
}

/**
 * Wrap a lazy page component in its own Suspense boundary, forwarding props.
 *
 * The loader prop types are intentionally `any`: React 19's `lazy()` infers the
 * dynamic-import type in a way that makes a generic wrapper fight the checker
 * (it collapses to `never`). The looseness is confined to this one function —
 * every call site below declares its own component, and the router table is the
 * only consumer.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = ComponentType<any>

function lazyRoute(load: () => Promise<{ default: AnyComponent }>): AnyComponent {
  const Loaded = lazy(load)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function LazyRoute(props: any) {
    return (
      <Suspense fallback={<RouteFallback />}>
        <Loaded {...props} />
      </Suspense>
    )
  }
  return LazyRoute
}

/** One lazy chunk per unbuilt module, each with its own feature key baked in. */
function lazyPlaceholder(featureKey: FeatureKey) {
  return lazyRoute(() =>
    import('@/features/placeholder-page').then((m) => ({
      default: () => <m.PlaceholderPage featureKey={featureKey} />,
    })),
  )
}

/**
 * Route-level code splitting.
 *
 * Recharts is a large share of the bundle and is only needed on the dashboard.
 * Everything past the landing page is loaded on demand, so a first-time visitor
 * never downloads the charting library.
 */
const DashboardPage = lazyRoute(() =>
  import('@/features/dashboard/dashboard-page').then((m) => ({ default: m.DashboardPage })),
)
const RoadmapPage = lazyRoute(() =>
  import('@/features/roadmap/roadmap-page').then((m) => ({ default: m.RoadmapPage })),
)
const DayPage = lazyRoute(() =>
  import('@/features/roadmap/day-page').then((m) => ({ default: m.DayPage })),
)

const ProjectsPage = lazyRoute(() =>
  import('@/features/projects/projects-page').then((m) => ({ default: m.ProjectsPage })),
)
const PortfolioPage = lazyRoute(() =>
  import('@/features/projects/portfolio-page').then((m) => ({ default: m.PortfolioPage })),
)

const GroupsPage = lazyRoute(() =>
  import('@/features/groups/groups-page').then((m) => ({ default: m.GroupsPage })),
)
const GroupDetailPage = lazyRoute(() =>
  import('@/features/groups/group-detail-page').then((m) => ({ default: m.GroupDetailPage })),
)

const ChallengesPage = lazyRoute(() =>
  import('@/features/challenges/challenges-page').then((m) => ({ default: m.ChallengesPage })),
)
const LeaderboardPage = lazyRoute(() =>
  import('@/features/challenges/leaderboard-page').then((m) => ({ default: m.LeaderboardPage })),
)
const AchievementsPage = lazyRoute(() =>
  import('@/features/challenges/leaderboard-page').then((m) => ({ default: m.AchievementsPage })),
)

const CalendarPage = lazyPlaceholder('calendar')
const ReviewsPage = lazyRoute(() =>
  import('@/features/reviews/reviews-page').then((m) => ({ default: m.ReviewsPage })),
)
const SettingsPage = lazyRoute(() =>
  import('@/features/settings/settings-page').then((m) => ({ default: m.SettingsPage })),
)

/** Scopes the challenges view to one group's challenges. */
function ChallengesPageWrapper() {
  const { groupId = '' } = useParams()
  return <ChallengesPage groupId={groupId} />
}

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  {
    element: <RedirectIfAuthed />,
    children: [
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
    ],
  },
  {
    path: '/app',
    element: (
      <RequireAuth>
        <AppShell />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'roadmap', element: <RoadmapPage /> },
      { path: 'roadmap/:dayNumber', element: <DayPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'portfolio/:userId', element: <PortfolioPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'groups', element: <GroupsPage /> },
      { path: 'groups/:groupId', element: <GroupDetailPage /> },
      { path: 'challenges', element: <ChallengesPage /> },
      { path: 'challenges/:groupId', element: <ChallengesPageWrapper /> },
      { path: 'leaderboard', element: <LeaderboardPage /> },
      { path: 'achievements', element: <AchievementsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])