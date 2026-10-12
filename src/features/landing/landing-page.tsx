import { Link } from 'react-router-dom'
import { useLocale } from '@/app/providers/locale-provider'
import { useAuth } from '@/app/providers/auth-provider'
import { LanguageToggle, ThemeToggle } from '@/components/layout/theme-language-controls'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function LandingPage() {
  const { t } = useLocale()
  const { isConfigured, status } = useAuth()

  return (
    <div className="flex min-h-svh flex-col bg-bg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-4">
          <span className="font-bold tracking-tight">{t('app.name')}</span>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            {status === 'authenticated' ? (
              <Link className={buttonVariants({ size: 'sm' })} to="/app">
                {t('nav.dashboard')}
              </Link>
            ) : (
              <>
                <Link className={buttonVariants({ variant: 'ghost', size: 'sm' })} to="/sign-in">
                  {t('auth.signIn')}
                </Link>
                <Link
                  className={cn(buttonVariants({ size: 'sm' }), !isConfigured && 'pointer-events-none opacity-50')}
                  to="/sign-up"
                  aria-disabled={!isConfigured}
                >
                  {t('auth.signUp')}
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">{t('app.name')}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{t('app.tagline')}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            className={cn(buttonVariants({ size: 'lg' }), !isConfigured && 'pointer-events-none opacity-50')}
            to="/sign-up"
            aria-disabled={!isConfigured}
          >
            {t('auth.signUp')}
          </Link>
          <Link className={buttonVariants({ size: 'lg', variant: 'outline' })} to="/sign-in">
            {t('auth.signIn')}
          </Link>
        </div>

        {!isConfigured && (
          <p className="mt-8 max-w-md rounded-md border border-warning/30 bg-warning-soft px-4 py-3 text-sm text-warning">
            {t('setup.body')}
          </p>
        )}
      </main>
    </div>
  )
}