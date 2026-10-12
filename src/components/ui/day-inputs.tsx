import { useEffect, useRef, useState } from 'react'
import { Check, CloudOff, Loader2, TriangleAlert } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import type { SyncState } from '@/features/progress/progress-service'
import { cn } from '@/lib/utils'

/**
 * Textarea that saves on a pause in typing rather than on every keystroke.
 *
 * The parent keeps the authoritative value; this component keeps a local draft
 * so typing is never interrupted, and pushes upward only after `delay` ms of
 * quiet — or on blur, which flushes any pending edit immediately.
 */
export function DebouncedTextarea({
  value,
  onSave,
  placeholder,
  rows = 4,
  ariaLabel,
  disabled,
  id,
}: {
  value: string
  onSave: (value: string) => void
  placeholder?: string
  rows?: number
  ariaLabel: string
  disabled?: boolean
  id?: string
}) {
  const [draft, setDraft] = useState(value)
  const timer = useRef<number | undefined>(undefined)
  // Track the last value we pushed upward, so a parent refresh does not
  // clobber what the user is currently typing.
  const committed = useRef(value)

  useEffect(() => {
    if (value !== committed.current) {
      committed.current = value
      setDraft(value)
    }
  }, [value])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function push(next: string) {
    if (next === committed.current) return
    committed.current = next
    onSave(next)
  }

  function handleChange(next: string) {
    setDraft(next)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => push(next), 700)
  }

  function handleBlur() {
    window.clearTimeout(timer.current)
    push(draft)
  }

  return (
    <textarea
      id={id}
      aria-label={ariaLabel}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      value={draft}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={handleBlur}
      className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-subtle focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-50"
    />
  )
}

/**
 * Reports the real state of the last write.
 *
 * It never says "saved" unless the server confirmed it — an unsynced edit must
 * be visible as such rather than implied to be persisted.
 */
export function SyncIndicator({ sync, error }: { sync: SyncState; error: string | null }) {
  const { t } = useLocale()

  if (error) {
    return (
      <p
        role="status"
        className="inline-flex items-center gap-1.5 text-xs text-danger"
      >
        <TriangleAlert className="size-3.5" />
        {error}
      </p>
    )
  }

  if (sync === 'saving') {
    return (
      <p role="status" className="inline-flex items-center gap-1.5 text-xs text-muted">
        <Loader2 className="size-3.5 animate-spin" />
        {t('common.saving')}
      </p>
    )
  }

  if (sync === 'saved') {
    return (
      <p role="status" className="inline-flex items-center gap-1.5 text-xs text-success">
        <Check className="size-3.5" />
        {t('common.saved')}
      </p>
    )
  }

  return null
}

/** Banner shown when the browser reports no connectivity. */
export function OfflineBanner() {
  const { t } = useLocale()
  const [offline, setOffline] = useState(!navigator.onLine)

  useEffect(() => {
    const goOffline = () => setOffline(true)
    const goOnline = () => setOffline(false)
    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [])

  if (!offline) return null

  return (
    <div
      role="alert"
      className={cn(
        'mb-4 flex items-center gap-2 rounded-md border border-warning/30',
        'bg-warning-soft px-3 py-2 text-sm text-warning',
      )}
    >
      <CloudOff className="size-4" />
      {t('offline.banner')}
    </div>
  )
}