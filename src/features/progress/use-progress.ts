import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useAuth } from '@/app/providers/auth-provider'
import type { DayProgress, StudySession } from '@/types'
import { computeStreaks, toLocalDateKey } from '@/lib/streaks'

/** A progress row plus the embedded curriculum relation we key on. */
type ProgressRow = DayProgress & {
  curriculum_days: { day_number: number } | null
}

type ProgressData = {
  byDay: Map<number, DayProgress>
  sessions: StudySession[]
  /** Total focused seconds, from persisted sessions only. */
  totalFocusSeconds: number
  completedDays: number[]
  currentStreak: number
  longestStreak: number
}

const EMPTY: ProgressData = {
  byDay: new Map(),
  sessions: [],
  totalFocusSeconds: 0,
  completedDays: [],
  currentStreak: 0,
  longestStreak: 0,
}

/**
 * Loads this user's private learning progress for the dashboard.
 *
 * Everything is scoped to the caller by RLS; the client never decides what the
 * user may read. When Supabase is unconfigured or the user is signed out there
 * is nothing to fetch, so this returns an empty result and the dashboard shows
 * honest empty states rather than sample numbers that look earned but are not.
 */
export function useProgress() {
  const { user, isConfigured, status } = useAuth()

  const [data, setData] = useState<ProgressData>(EMPTY)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const requestId = useRef(0)
  const shouldLoad = isConfigured && status === 'authenticated' && Boolean(user)

  // Derived rather than toggled, so no state is written during the
  // synchronous part of the effect below.
  const loading = shouldLoad && !loaded

  const load = useCallback(async () => {
    if (!supabase || !user) return
    const id = ++requestId.current

    const [progressRes, sessionsRes] = await Promise.all([
      // Embed the curriculum day number: user_day_progress stores a UUID
      // (day_id), but every UI surface is keyed by day_number. Without this
      // join the progress map would always be empty.
      supabase
        .from('user_day_progress')
        .select('*, curriculum_days(day_number)')
        .eq('user_id', user.id),
      supabase.from('study_sessions').select('*').eq('user_id', user.id).limit(2000),
    ])

    if (id !== requestId.current) return

    const failure = progressRes.error ?? sessionsRes.error
    if (failure) {
      setError(failure.message)
      setLoaded(true)
      return
    }

    const rows = (progressRes.data ?? []) as ProgressRow[]
    const sessions = (sessionsRes.data ?? []) as StudySession[]

    const byDay = new Map<number, DayProgress>()
    for (const row of rows) {
      const dayNumber = row.curriculum_days?.day_number
      if (typeof dayNumber !== 'number') continue
      // Strip the embedded relation before storing.
      const { curriculum_days: _embedded, ...progress } = row
      byDay.set(dayNumber, progress as DayProgress)
    }

    const completedDates = rows
      .filter((row) => row.status === 'completed' && row.completed_at)
      .map((row) => toLocalDateKey(new Date(row.completed_at as string)))
      .sort()

    setError(null)
    setData({
      byDay,
      sessions,
      totalFocusSeconds: sessions.reduce((sum, s) => sum + (s.duration_seconds ?? 0), 0),
      completedDays: Array.from(byDay.entries())
        .filter(([, p]) => p.status === 'completed')
        .map(([dayNumber]) => dayNumber)
        .sort((a, b) => a - b),
      ...computeStreaks(completedDates, new Date()),
    })
    setLoaded(true)
  }, [user])

  useEffect(() => {
    if (!shouldLoad) return
    void load()
  }, [shouldLoad, load])

  return useMemo(
    () => ({ ...data, loading, error, refresh: load }),
    [data, loading, error, load],
  )
}