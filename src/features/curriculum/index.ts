import type { CurriculumDay } from './types'
import { PHASES } from './phases'
import { PHASE_1_DAYS } from './days/phase-1'
import { PHASE_2_DAYS } from './days/phase-2'
import { PHASE_3_DAYS } from './days/phase-3'
import { PHASE_4_DAYS } from './days/phase-4'
import { PHASE_5_DAYS } from './days/phase-5'
import { PHASE_6_DAYS } from './days/phase-6'
import { PHASE_7_DAYS } from './days/phase-7'
import { PHASE_8_DAYS } from './days/phase-8'
import { PHASE_9_DAYS } from './days/phase-9'
import { PHASE_10_DAYS } from './days/phase-10'
import { PHASE_11_DAYS } from './days/phase-11'
import { PHASE_12_DAYS } from './days/phase-12'

export * from './types'
export { PHASES, getPhase, getPhaseByPosition, getPhaseForDay } from './phases'

/**
 * All 365 authored curriculum days across the twelve phases.
 *
 * `CURRICULUM_GAPS` reports any day numbers still missing so the UI and the
 * seed script state the real state rather than silently rendering a partial
 * roadmap. The curriculum is complete, so `isCurriculumComplete` is true.
 */
export const ALL_DAYS: CurriculumDay[] = [
  ...PHASE_1_DAYS,
  ...PHASE_2_DAYS,
  ...PHASE_3_DAYS,
  ...PHASE_4_DAYS,
  ...PHASE_5_DAYS,
  ...PHASE_6_DAYS,
  ...PHASE_7_DAYS,
  ...PHASE_8_DAYS,
  ...PHASE_9_DAYS,
  ...PHASE_10_DAYS,
  ...PHASE_11_DAYS,
  ...PHASE_12_DAYS,
]

export const TOTAL_DAYS = 365

const byDayNumber = new Map(ALL_DAYS.map((day) => [day.dayNumber, day]))

export function getDay(dayNumber: number): CurriculumDay | undefined {
  return byDayNumber.get(dayNumber)
}

export function isDayAuthored(dayNumber: number) {
  return byDayNumber.has(dayNumber)
}

/** Every day number in 1..365 with no authored content. */
export const CURRICULUM_GAPS: number[] = Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).filter(
  (n) => !byDayNumber.has(n),
)

export const isCurriculumComplete = CURRICULUM_GAPS.length === 0

/**
 * Day numbers that actually have content, grouped by phase position.
 * The roadmap renders these rather than 30 hard-coded days.
 */
export function getAuthoredDaysByPhase() {
  return PHASES.map((phase) => ({
    phase,
    days: ALL_DAYS.filter((day) => day.dayNumber >= phase.startDay && day.dayNumber <= phase.endDay),
  })).filter((group) => group.days.length > 0)
}

if (import.meta.env.DEV && !isCurriculumComplete) {
  console.warn(
    `[curriculum] ${ALL_DAYS.length}/${TOTAL_DAYS} days authored. ` +
      `Missing: ${CURRICULUM_GAPS[0]}–${CURRICULUM_GAPS[CURRICULUM_GAPS.length - 1]}.`,
  )
}