import { describe, expect, it } from 'vitest'
import { computeStreaks, toLocalDateKey } from '@/lib/streaks'

/** A fixed "today" so the tests never depend on the wall clock. */
const TODAY = new Date(2026, 0, 15) // 15 Jan 2026, local time

const d = (day: number) => toLocalDateKey(new Date(2026, 0, day))

describe('toLocalDateKey', () => {
  it('formats as YYYY-MM-DD with zero padding', () => {
    expect(toLocalDateKey(new Date(2026, 0, 5))).toBe('2026-01-05')
    expect(toLocalDateKey(new Date(2026, 11, 31))).toBe('2026-12-31')
  })

  it('uses local time, not UTC', () => {
    // 23:30 local on 1 Jan is still 1 Jan locally even where UTC has rolled over.
    const lateEvening = new Date(2026, 0, 1, 23, 30)
    expect(toLocalDateKey(lateEvening)).toBe('2026-01-01')
  })
})

describe('computeStreaks', () => {
  it('returns zero for no activity', () => {
    expect(computeStreaks([], TODAY)).toEqual({ currentStreak: 0, longestStreak: 0 })
  })

  it('counts a run ending today', () => {
    const dates = [d(13), d(14), d(15)]
    expect(computeStreaks(dates, TODAY)).toEqual({ currentStreak: 3, longestStreak: 3 })
  })

  it('counts a run ending yesterday (today not started yet)', () => {
    const dates = [d(13), d(14)]
    expect(computeStreaks(dates, TODAY)).toEqual({ currentStreak: 2, longestStreak: 2 })
  })

  it('breaks the current streak after a missed day', () => {
    // 12, 13 then a gap at 14 — today is the 15th and nothing was done.
    const dates = [d(12), d(13)]
    const result = computeStreaks(dates, TODAY)
    expect(result.currentStreak).toBe(0)
    expect(result.longestStreak).toBe(2)
  })

  it('finds the longest run even when it is in the past', () => {
    const dates = [d(1), d(2), d(3), d(4), d(5), d(10), d(11), d(15)]
    const result = computeStreaks(dates, TODAY)
    expect(result.longestStreak).toBe(5)
    expect(result.currentStreak).toBe(1)
  })

  it('treats several completions on one day as one', () => {
    // Completing three roadmap days on the same calendar day must not inflate.
    const dates = [d(15), d(15), d(15), d(14)]
    expect(computeStreaks(dates, TODAY)).toEqual({ currentStreak: 2, longestStreak: 2 })
  })

  it('is insensitive to input order', () => {
    const ordered = [d(10), d(11), d(12), d(13), d(14), d(15)]
    const shuffled = [d(13), d(15), d(11), d(14), d(10), d(12)]
    expect(computeStreaks(shuffled, TODAY)).toEqual(computeStreaks(ordered, TODAY))
  })

  it('counts a single day as a streak of one', () => {
    expect(computeStreaks([d(15)], TODAY)).toEqual({ currentStreak: 1, longestStreak: 1 })
  })

  it('does not treat a long gap as continuous', () => {
    const dates = [d(1), d(15)]
    const result = computeStreaks(dates, TODAY)
    expect(result.longestStreak).toBe(1)
    expect(result.currentStreak).toBe(1)
  })

  it('does not treat a gap across a month boundary as continuous', () => {
    // 31 Jan, 1 Feb, 3 Feb — 2 Feb is missing, so this is a run of 2 plus a
    // separate single day, not one run of 3.
    const dates = [
      toLocalDateKey(new Date(2026, 0, 31)),
      toLocalDateKey(new Date(2026, 1, 1)),
      toLocalDateKey(new Date(2026, 1, 3)),
    ]
    expect(computeStreaks(dates, new Date(2026, 1, 3))).toEqual({
      currentStreak: 1,
      longestStreak: 2,
    })
  })

  it('crosses a month boundary contiguously', () => {
    const dates = [
      toLocalDateKey(new Date(2026, 0, 30)),
      toLocalDateKey(new Date(2026, 0, 31)),
      toLocalDateKey(new Date(2026, 1, 1)),
    ]
    expect(computeStreaks(dates, new Date(2026, 1, 1))).toEqual({
      currentStreak: 3,
      longestStreak: 3,
    })
  })
})