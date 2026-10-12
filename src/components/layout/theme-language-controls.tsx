import { Monitor, Moon, Sun } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { useTheme } from '@/app/providers/theme-provider'
import { Button } from '@/components/ui/button'

/** Cycles system -> light -> dark. Icon shows the *resolved* appearance. */
export function ThemeToggle() {
  const { mode, resolvedTheme, setMode } = useTheme()
  const { t } = useLocale()

  const next = mode === 'system' ? 'light' : mode === 'light' ? 'dark' : 'system'
  const Icon = resolvedTheme === 'dark' ? Moon : mode === 'system' ? Monitor : Sun
  const labels = { system: t('theme.system'), light: t('theme.light'), dark: t('theme.dark') }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setMode(next)}
      aria-label={`${t('theme.label')}: ${labels[mode]}`}
      title={`${t('theme.label')}: ${labels[mode]}`}
    >
      <Icon />
    </Button>
  )
}

export function LanguageToggle() {
  const { locale, setLocale } = useLocale()
  const { t } = useLocale()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
      aria-label={t('language.label')}
      title={t('language.label')}
      className="font-semibold"
    >
      {/* Forced LTR: the short label must not reorder inside the RTL chrome. */}
      <span dir="ltr">{locale === 'ar' ? 'EN' : 'ع'}</span>
    </Button>
  )
}