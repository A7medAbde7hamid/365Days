import { describe, expect, it } from 'vitest'
import { isoWeek } from '@/features/reviews/review-service'

/**
 * The database computes the period with EXTRACT(ISOYEAR)/EXTRACT(WEEK); this
 * function reimplements that in TypeScript to label the form. If the two ever
 * disagree, every review the user submits is filed under a period the UI did not
 * show them — a silent data-quality bug with no error anywhere.
 *
 * The reference cases below are the well-known ISO-8601 edge cases, which is
 * exactly where a hand-rolled implementation goes wrong.
 */
describe('isoWeek', () => {
  it('handles ordinary mid-year dates', () => {
    expect(isoWeek(new Date(2026, 0, 1))).toEqual({ year: 2026, week: 1 })
    expect(isoWeek(new Date(2026, 5, 15))).toEqual({ year: 2026, week: 25 })
    expect(isoWeek(new Date(2026, 11, 31))).toEqual({ year: 2026, week: 53 })
  })

  it('assigns early January to the previous ISO year when it falls in week 52/53', () => {
    // 1 Jan 2027 is a Friday, so it belongs to ISO week 53 of 2026.
    expect(isoWeek(new Date(2027, 0, 1))).toEqual({ year: 2026, week: 53 })
    // 1 Jan 2024 is a Monday: genuinely week 1 of 2024.
    expect(isoWeek(new Date(2024, 0, 1))).toEqual({ year: 2024, week: 1 })
  })

  it('assigns late December to the next ISO year when it falls in week 1', () => {
    // 31 Dec 2024 is a Tuesday, so it is ISO week 1 of 2025.
    expect(isoWeek(new Date(2024, 11, 31))).toEqual({ year: 2025, week: 1 })
    // 30 Dec 2019 is a Monday, so it is week 1 of 2020.
    expect(isoWeek(new Date(2019, 11, 30))).toEqual({ year: 2020, week: 1 })
  })

  it('always starts weeks on Monday', () => {
    // Sunday 4 Jan 2026 is still week 1; Monday 5 Jan 2026 starts week 2.
    expect(isoWeek(new Date(2026, 0, 4))).toEqual({ year: 2026, week: 1 })
    expect(isoWeek(new Date(2026, 0, 5))).toEqual({ year: 2026, week: 2 })
  })

  it('is unaffected by the time of day', () => {
    // Built in local time; the function must work from the date alone.
    expect(isoWeek(new Date(2026, 5, 15, 0, 0, 0))).toEqual(
      isoWeek(new Date(2026, 5, 15, 23, 59, 59)),
    )
  })

  it('never returns an out-of-range week', () => {
    for (let month = 0; month < 12; month += 1) {
      for (const day of [1, 15, 28]) {
        const { year, week } = isoWeek(new Date(2026, month, day))
        expect(week).toBeGreaterThanOrEqual(1)
        expect(week).toBeLessThanOrEqual(53)
        expect(year).toBeGreaterThanOrEqual(2026)
      }
    }
  })
})