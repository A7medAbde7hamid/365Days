import type { ReactNode } from 'react'
import { LanguageToggle } from '@/components/layout/theme-language-controls'
import { ThemeToggle } from '@/components/layout/theme-language-controls'

/** Shared chrome for the signed-out auth screens. */
export function AuthCard({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-bg">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-md bg-accent-gradient text-xs font-bold text-white">
            365
          </span>
          <span className="font-semibold tracking-tight">DevJourney 365</span>
        </div>
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}