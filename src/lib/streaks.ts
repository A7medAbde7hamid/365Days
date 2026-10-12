/**
 * Pure streak arithmetic.
 *
 * Extracted from the dashboard hook so it can be unit-tested without React,
 * a browser, or a database — these rules are easy to get subtly wrong and
 * impossible to eyeball.
 *
 * Definition used here: a streak is a run of *consecutive calendar days* on
 * which the user completed at least one curriculum day. Consecutive means
 * consecutive calendar days, not consecutive roadmap days, so genuinely missing
 * a day breaks the streak.
 */

export type Streaks = { currentStreak: number; longestStreak: number }

/** YYYY-MM-DD in local time, matching how session_date is bucketed server-side. */
export function toLocalDateKey(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

const MS_PER_DAY = 86_400_000

/** Epoch-day index for a YYYY-MM-DD key. */
function toEpochDay(key: string): number {
  return Math.floor(new Date(`${key}T00:00:00`).getTime() / MS_PER_DAY)
}

export function computeStreaks(completedDates: string[], today: Date): Streaks {
  if (completedDates.length === 0) return { currentStreak: 0, longestStreak: 0 }

  // De-duplicate: several days completed on one calendar day count once.
  const days = Array.from(new Set(completedDates)).map(toEpochDay).sort((a, b) => a - b)

  let longest = 1
  let run = 1
  for (let i = 1; i < days.length; i += 1) {
    run = days[i] === days[i - 1] + 1 ? run + 1 : 1
    if (run > longest) longest = run
  }

  // The current streak walks backwards from today, or from yesterday if the
  // user has not studied yet today — so an unfinished day does not read as a
  // broken streak the moment it begins.
  const currentDayIndex = Math.floor(
    new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / MS_PER_DAY,
  )
  const present = new Set(days)
  let current = 0
  let cursor = present.has(currentDayIndex) ? currentDayIndex : currentDayIndex - 1
  while (present.has(cursor)) {
    current += 1
    cursor -= 1
  }

  return { currentStreak: current, longestStreak: longest }
}