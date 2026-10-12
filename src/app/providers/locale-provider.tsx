import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en, type Dictionary } from '@/locales/en'
import { ar } from '@/locales/ar'

export type Locale = 'en' | 'ar'

const STORAGE_KEY = 'devjourney.locale'

const dictionaries: Record<Locale, Dictionary> = { en, ar }

/** BCP-47 tags used for Intl formatting (ar-EG gives Arabic-Indic-free digits). */
const intlLocale: Record<Locale, string> = { en: 'en-GB', ar: 'ar-EG' }

/** Dot-path lookup with a visible fallback so missing keys are obvious in dev. */
function resolve(dictionary: Dictionary, path: string): string | undefined {
  const value = path
    .split('.')
    .reduce<unknown>(
      (acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined),
      dictionary,
    )
  return typeof value === 'string' ? value : undefined
}

type LocaleContextValue = {
  locale: Locale
  dir: 'ltr' | 'rtl'
  isRtl: boolean
  setLocale: (locale: Locale) => void
  /** Translate a dot-path key, with {placeholders} interpolation. */
  t: (path: string, vars?: Record<string, string | number>) => string
  /** Locale-aware number formatting. */
  formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string
  /** Locale-aware date formatting. */
  formatDate: (value: Date | string | number, options?: Intl.DateTimeFormatOptions) => string
  formatDuration: (minutes: number) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'ar') return stored
  return navigator.language?.startsWith('ar') ? 'ar' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)
  const dir: 'ltr' | 'rtl' = locale === 'ar' ? 'rtl' : 'ltr'

  // A single source of truth for direction: CSS logical properties + Recharts
  // both read this from <html>.
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('lang', locale)
    root.setAttribute('dir', dir)
  }, [locale, dir])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo<LocaleContextValue>(() => {
    const dictionary = dictionaries[locale]

    return {
      locale,
      dir,
      isRtl: dir === 'rtl',
      setLocale,
      t: (path, vars) => {
        const template = resolve(dictionary, path)
        if (template === undefined) {
          if (import.meta.env.DEV) console.warn(`[i18n] Missing translation key: "${path}"`)
          return path
        }
        if (!vars) return template
        return template.replace(/\{(\w+)\}/g, (match, key: string) =>
          key in vars ? String(vars[key]) : match,
        )
      },
      formatNumber: (n, options) => new Intl.NumberFormat(intlLocale[locale], options).format(n),
      formatDate: (value, options) => {
        const date = value instanceof Date ? value : new Date(value)
        if (Number.isNaN(date.getTime())) return '—'
        return new Intl.DateTimeFormat(intlLocale[locale], {
          dateStyle: 'medium',
          ...options,
        }).format(date)
      },
      formatDuration: (minutes) => {
        const h = Math.floor(minutes / 60)
        const m = minutes % 60
        if (h === 0) return `${m}m`
        if (m === 0) return `${h}h`
        return `${h}h ${m}m`
      },
    }
  }, [locale, dir, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}