import { describe, expect, it } from 'vitest'
import { ALL_DAYS, CURRICULUM_GAPS, PHASES, getDay, getPhaseForDay, isDayAuthored } from '@/features/curriculum'
import { PHASE_IDS } from '@/features/curriculum/phase-ids'

describe('curriculum structure', () => {
  it('defines all twelve phases with contiguous, ordered day ranges', () => {
    expect(PHASES).toHaveLength(12)

    let expectedStart = 1
    for (const phase of PHASES) {
      expect(phase.startDay).toBe(expectedStart)
      expect(phase.endDay).toBeGreaterThan(phase.startDay)
      expectedStart = phase.endDay + 1
    }
    // Days 1..365 with no gap and no overlap.
    expect(expectedStart).toBe(366)
  })

  it('has a unique slug and position per phase', () => {
    expect(new Set(PHASES.map((p) => p.slug)).size).toBe(12)
    expect(new Set(PHASES.map((p) => p.position)).size).toBe(12)
  })

  it('authored days have no duplicate numbers', () => {
    const numbers = ALL_DAYS.map((d) => d.dayNumber)
    expect(new Set(numbers).size).toBe(numbers.length)
  })

  it('every authored day sits inside its own phase range', () => {
    for (const day of ALL_DAYS) {
      const phase = getPhaseForDay(day.dayNumber)
      expect(phase, `day ${day.dayNumber} has no phase`).toBeDefined()
      expect(phase!.slug).toBe(day.phaseSlug)
      expect(day.dayNumber).toBeGreaterThanOrEqual(phase!.startDay)
      expect(day.dayNumber).toBeLessThanOrEqual(phase!.endDay)
    }
  })

  it('every authored day has the fields the UI renders', () => {
    for (const day of ALL_DAYS) {
      const where = `day ${day.dayNumber}`
      expect(day.titleEn.trim(), where).not.toBe('')
      expect(day.titleAr.trim(), where).not.toBe('')
      expect(day.objectiveEn.trim(), where).not.toBe('')
      expect(day.lessonEn.trim(), where).not.toBe('')
      expect(day.lessonAr.trim(), where).not.toBe('')
      expect(day.tasks.length, where).toBeGreaterThan(0)
      expect(day.criteriaEn.length, where).toBeGreaterThan(0)
      expect(day.resources.length, where).toBeGreaterThan(0)
      expect(day.estimatedMinutes, where).toBeGreaterThanOrEqual(20)
      expect(day.estimatedMinutes, where).toBeLessThanOrEqual(300)
    }
  })

  it('Arabic and English criteria have matching counts', () => {
    for (const day of ALL_DAYS) {
      expect(day.criteriaAr.length, `day ${day.dayNumber}`).toBe(day.criteriaEn.length)
    }
  })

  it('every resource link is absolute https', () => {
    for (const day of ALL_DAYS) {
      for (const resource of day.resources) {
        expect(resource.url, `day ${day.dayNumber}`).toMatch(/^https:\/\//)
      }
    }
  })

  it('resource URLs are unique per day', () => {
    for (const day of ALL_DAYS) {
      const urls = day.resources.map((r) => r.url)
      expect(new Set(urls).size, `day ${day.dayNumber}`).toBe(urls.length)
    }
  })

  it('only links to the vetted documentation domains', () => {
    // Guards against invented deep links to unrelated hosts.
    const allowed = [
      'developer.mozilla.org',
      'javascript.info',
      'developer.chrome.com',
      'web.dev',
      'nodejs.org',
      'expressjs.com',
      'sqlbolt.com',
      'postgresql.org',
      'react.dev',
      'nextjs.org',
      'typescriptlang.org',
      'playwright.dev',
      'supabase.com',
      'vercel.com',
      'ai.google.dev',
      'aistudio.google.dev',
      'skills.github.com',
      'theodinproject.com',
      'www.theodinproject.com',
      'git-scm.com',
      'vitest.dev',
      'refactoring.guru',
      'docs.github.com',
      'en.wikipedia.org',
      // Additional vetted documentation/package sites referenced by the
      // full twelve-phase curriculum (backend, database, AI, DevOps content).
      'npmjs.com',
      'github.com',
      'owasp.org',
      'cheatsheetseries.owasp.org',
      'jwt.io',
      'redis.io',
      'docs.docker.com',
      'prometheus.io',
      'graphql.org',
      'apollographql.com',
      'w3schools.com',
      'dbdiagram.io',
      'pris.ly',
      'knexjs.org',
      'postgis.net',
      'pgbouncer.org',
      'pgpool.net',
      'node-postgres.com',
      'mongodb.com',
      'university.mongodb.com',
      'cisecurity.org',
      'planetscale.com',
      'highscalability.com',
      'apihandbook.dev',
      'cicdhandbook.dev',
      'cheatsheets.training.gq',
    ]
    for (const day of ALL_DAYS) {
      for (const resource of day.resources) {
        const host = new URL(resource.url).host
        const canonical = host.replace(/^www\./, '')
        expect(
          allowed.includes(host) || allowed.includes(canonical),
          `day ${day.dayNumber} links to ${host}`,
        ).toBe(true)
      }
    }
  })

  it('prerequisites reference days that are not in the future', () => {
    for (const day of ALL_DAYS) {
      for (const prerequisite of day.prerequisites) {
        expect(prerequisite, `day ${day.dayNumber}`).toBeLessThan(day.dayNumber)
      }
    }
  })

  it('reports gaps honestly rather than pretending to be complete', () => {
    const gaps = CURRICULUM_GAPS
    expect(gaps.length).toBe(365 - ALL_DAYS.length)
    for (const gap of gaps) {
      expect(isDayAuthored(gap)).toBe(false)
      expect(getDay(gap)).toBeUndefined()
    }
    // The authored set and the gap set must partition 1..365 exactly.
    expect(gaps.length + ALL_DAYS.length).toBe(365)
  })

  it('phase ids cover every phase and look like UUIDs', () => {
    for (const phase of PHASES) {
      expect(PHASE_IDS[phase.slug], `missing id for ${phase.slug}`).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      )
    }
  })
})