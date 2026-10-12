/**
 * Client-side curriculum shape.
 *
 * Mirrors the `curriculum_phases` / `curriculum_days` / `curriculum_tasks` /
 * `learning_resources` tables so the same content can be seeded into Postgres
 * without a translation layer. The bundled TypeScript module is the source of
 * truth for the seed script; the app reads it locally for instant rendering and
 * falls back to the database once it is seeded.
 */

export type ResourceKind = 'official' | 'reference' | 'arabic' | 'paid' | 'video'

export type Resource = {
  title: string
  /** Only real, verified documentation URLs — never invented deep links. */
  url: string
  kind: ResourceKind
  /** Short note on why this resource, and whether it is free. */
  note?: string
}

export type CurriculumPhase = {
  slug: string
  position: number
  titleEn: string
  titleAr: string
  summaryEn: string
  summaryAr: string
  startDay: number
  endDay: number
  /** Deliverable for the whole phase. */
  deliverableEn: string
  deliverableAr: string
}

export type CurriculumDay = {
  dayNumber: number
  phaseSlug: string
  titleEn: string
  titleAr: string
  topic: string
  objectiveEn: string
  objectiveAr: string
  lessonEn: string
  lessonAr: string
  estimatedMinutes: number
  tasks: { en: string; ar: string }[]
  exerciseEn: string
  exerciseAr: string
  deliverableEn: string
  deliverableAr: string
  resources: Resource[]
  challengeEn?: string
  challengeAr?: string
  prerequisites: number[]
  criteriaEn: string[]
  criteriaAr: string[]
  /** Review / practice / project / recovery days get lighter workloads. */
  kind: 'lesson' | 'practice' | 'project' | 'review' | 'recovery'
}

/** Narrow a day to the user's active language. */
export function localizeDay(day: CurriculumDay, locale: 'en' | 'ar') {
  const ar = locale === 'ar'
  return {
    title: ar ? day.titleAr : day.titleEn,
    objective: ar ? day.objectiveAr : day.objectiveEn,
    lesson: ar ? day.lessonAr : day.lessonEn,
    tasks: day.tasks.map((task) => (ar ? task.ar : task.en)),
    exercise: ar ? day.exerciseAr : day.exerciseEn,
    deliverable: ar ? day.deliverableAr : day.deliverableEn,
    criteria: ar ? day.criteriaAr : day.criteriaEn,
    challenge: ar ? (day.challengeAr ?? day.challengeEn) : day.challengeEn,
  }
}