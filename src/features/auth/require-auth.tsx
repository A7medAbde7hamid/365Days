import type { ReactNode } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/app/providers/auth-provider'
import { useLocale } from '@/app/providers/locale-provider'
import { Alert } from '@/components/ui/primitives'

/**
 * Gate for authenticated routes.
 *
 * While Supabase is unconfigured we render an explanation instead of bouncing
 * to /sign-in, so the failure is legible rather than a silent redirect loop.
 */
export function RequireAuth({ children }: { children: ReactNode }) {
  const { status, isConfigured } = useAuth()
  const { t } = useLocale()
  const location = useLocation()

  if (!isConfigured) {
    return (
      <div className="mx-auto max-w-lg p-6">
        <Alert variant="warning">
          <p className="font-medium">{t('setup.title')}</p>
          <p className="mt-1 text-sm">{t('setup.body')}</p>
          <ul className="mt-2 list-disc space-y-0.5 ps-5 font-mono text-xs" dir="ltr">
            <li>VITE_SUPABASE_URL</li>
            <li>VITE_SUPABASE_ANON_KEY</li>
          </ul>
        </Alert>
      </div>
    )
  }

  if (status === 'loading') {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-muted">
        {t('common.loading')}
      </div>
    )
  }

  if (status === 'anonymous') {
    // Remember where they were headed so sign-in can return them there.
    return <Navigate to="/sign-in" replace state={{ from: location.pathname }} />
  }

  return <>{children}</>
}

/** Keep signed-in users away from the auth screens. Used as a layout route. */
export function RedirectIfAuthed() {
  const { status, isConfigured } = useAuth()

  if (isConfigured && status === 'authenticated') {
    return <Navigate to="/app" replace />
  }

  return <Outlet />
}