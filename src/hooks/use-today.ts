import { useEffect, useState } from 'react'

/**
 * The current date, captured once per mount.
 *
 * Reading `new Date()` during render is impure — it changes between renders and
 * defeats memoisation. This also re-rolls at local midnight so a tab left open
 * overnight shows the right "today" without a reload.
 */
export function useToday() {
  const [today, setToday] = useState(() => new Date())

  useEffect(() => {
    const now = new Date()
    // Next local midnight.
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    const timer = window.setTimeout(
      () => setToday(new Date()),
      midnight.getTime() - now.getTime(),
    )
    return () => window.clearTimeout(timer)
  }, [])

  return today
}

/** YYYY-MM-DD in the user's local timezone (not UTC). */
export function toLocalDateKey(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}