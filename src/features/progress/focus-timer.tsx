import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play, Square } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { isSupabaseConfigured } from '@/lib/supabase/client'
import { logStudySession, ProgressError } from '@/features/progress/progress-service'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Phase = 'idle' | 'running' | 'paused' | 'stopped'

const MIN_SESSION_SECONDS = 30 // Matches the server-side minimum.

function formatElapsed(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  const mm = String(m).padStart(2, '0')
  const ss = String(s).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

/**
 * Focus timer.
 *
 * The client never sends a duration — only the started/ended instants — because
 * `log_study_session()` computes the duration server-side and rejects sessions
 * that are too short or implausibly long. A client that could assert its own
 * duration could assert its own points.
 *
 * Elapsed time is derived from wall-clock timestamps rather than a counter of
 * interval ticks, so a backgrounded tab or a throttled timer cannot inflate
 * the recorded session.
 */
export function FocusTimer({ dayNumber }: { dayNumber?: number }) {
  const { t } = useLocale()
  const [phase, setPhase] = useState<Phase>('idle')
  const [elapsed, setElapsed] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  // Wall-clock instants, in milliseconds.
  const startedAt = useRef<number | null>(null)
  const accumulated = useRef(0)
  const lastResumeAt = useRef<number | null>(null)

  const tick = useCallback(() => {
    if (lastResumeAt.current === null) return
    setElapsed(Math.floor((accumulated.current + (Date.now() - lastResumeAt.current)) / 1000))
  }, [])

  useEffect(() => {
    if (phase !== 'running') return
    const id = window.setInterval(tick, 250)
    return () => window.clearInterval(id)
  }, [phase, tick])

  function start() {
    const now = Date.now()
    startedAt.current = now
    accumulated.current = 0
    lastResumeAt.current = now
    setElapsed(0)
    setSaved(false)
    setError(null)
    setPhase('running')
  }

  function pause() {
    if (lastResumeAt.current !== null) {
      accumulated.current += Date.now() - lastResumeAt.current
    }
    lastResumeAt.current = null
    setPhase('paused')
  }

  function resume() {
    lastResumeAt.current = Date.now()
    setPhase('running')
  }

  async function stop() {
    const finalSeconds = elapsed

    if (phase === 'paused' && lastResumeAt.current !== null) {
      accumulated.current += Date.now() - lastResumeAt.current
      lastResumeAt.current = null
    }

    const startIso = startedAt.current ? new Date(startedAt.current).toISOString() : null
    const endIso = new Date().toISOString()

    setPhase('stopped')
    setSaved(false)
    setError(null)

    if (!isSupabaseConfigured) {
      setError(t('setup.title'))
      return
    }

    if (!startIso || finalSeconds < MIN_SESSION_SECONDS) {
      // Below the server's own minimum: tell the user rather than pretending
      // it was recorded.
      setError(`Session too short to record (minimum ${MIN_SESSION_SECONDS}s).`)
      return
    }

    try {
      await logStudySession(startIso, endIso, dayNumber)
      setSaved(true)
      accumulated.current = 0
      startedAt.current = null
    } catch (err) {
      setError(err instanceof ProgressError ? err.message : 'Could not save the session.')
    }
  }

  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium">{t('timer.title')}</p>
          <p
            className={cn(
              'tabular mt-1 text-3xl font-bold',
              phase === 'running' && 'text-accent',
            )}
            aria-live="off"
          >
            {formatElapsed(elapsed)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {phase === 'idle' || phase === 'stopped' ? (
            <Button onClick={start} size="sm">
              <Play />
              {t('timer.start')}
            </Button>
          ) : null}

          {phase === 'running' ? (
            <Button onClick={pause} variant="secondary" size="sm">
              <Pause />
              {t('timer.pause')}
            </Button>
          ) : null}

          {phase === 'paused' ? (
            <Button onClick={resume} variant="secondary" size="sm">
              <Play />
              {t('timer.resume')}
            </Button>
          ) : null}

          {phase === 'running' || phase === 'paused' ? (
            <Button onClick={() => void stop()} variant="outline" size="sm">
              <Square />
              {t('timer.stop')}
            </Button>
          ) : null}
        </div>
      </div>

      {error && (
        <p role="status" className="mt-2 text-xs text-danger">
          {error}
        </p>
      )}
      {saved && !error && (
        <p role="status" className="mt-2 text-xs text-success">
          {t('timer.sessionSaved')}
        </p>
      )}
    </div>
  )
}