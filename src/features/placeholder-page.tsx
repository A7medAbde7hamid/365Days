import { useLocale } from '@/app/providers/locale-provider'

/**
 * Honest "not built yet" screen.
 *
 * The router already exposes these routes so navigation stays stable, but the
 * page says plainly that the module is unimplemented rather than shipping a
 * button that does nothing.
 */
export type FeatureKey =
  | 'calendar'
  | 'reviews'
  | 'groups'
  | 'challenges'
  | 'leaderboard'
  | 'achievements'
  | 'settings'

const TITLE_KEY: Record<FeatureKey, string> = {
  calendar: 'calendar.title',
  reviews: 'reviews.weekly',
  groups: 'groups.title',
  challenges: 'challenges.title',
  leaderboard: 'leaderboard.title',
  achievements: 'achievements.title',
  settings: 'settings.title',
}

export function PlaceholderPage({ featureKey }: { featureKey: FeatureKey }) {
  const { t } = useLocale()

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-2xl font-bold tracking-tight">{t(TITLE_KEY[featureKey])}</h1>
      <p className="text-sm text-muted">{t('common.comingSoon')}</p>
      <p className="text-xs text-subtle" dir="ltr">
        Not implemented yet — see README for roadmap.
      </p>
    </div>
  )
}