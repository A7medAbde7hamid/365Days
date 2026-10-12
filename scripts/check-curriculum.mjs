/**
 * Curriculum integrity check.
 *
 * Run with: npm run check:curriculum
 *
 * This is a real gate, not a lint suggestion. Because it imports the actual
 * TypeScript modules (via Node's native type stripping) it validates the real
 * exported data rather than a regex approximation of it.
 *
 * It catches the defect classes that keep appearing when authoring bilingual
 * content by hand: missing or duplicate days, days outside their phase range,
 * empty required fields, non-https resource URLs, CJK/Hangul/replacement
 * characters inside Arabic text, and English words wedged mid-sentence.
 */
import { fileURLToPath } from 'node:url'
import { globSync } from 'node:fs'

const base = new URL('../src/features/curriculum/', import.meta.url)

// Discover every authored phase file rather than hard-coding a list, so
// adding phase-4.ts is picked up without editing this script.
const dayFiles = globSync('days/phase-*.ts', { cwd: fileURLToPath(base) }).sort((a, b) =>
  a.localeCompare(b, 'en', { numeric: true }),
)

const { PHASES } = await import(new URL('phases.ts', base).href)

const DAY_SETS = []
for (const file of dayFiles) {
  const mod = await import(new URL(file, base).href)
  const exported = Object.entries(mod).filter(([name]) => /^PHASE_\d+_DAYS$/.test(name))
  for (const [name, days] of exported) DAY_SETS.push([`${file}:${name}`, days])
}

const TOTAL_DAYS = 365
const errors = []

function checkDaySet(label, days) {
  const seen = new Set()
  for (const day of days) {
    const where = `${label} day ${day.dayNumber}`

    if (seen.has(day.dayNumber)) errors.push(`${where}: duplicate day number`)
    seen.add(day.dayNumber)

    if (!Number.isInteger(day.dayNumber) || day.dayNumber < 1 || day.dayNumber > TOTAL_DAYS) {
      errors.push(`${where}: day number out of range 1-${TOTAL_DAYS}`)
    }

    const phase = PHASES.find((p) => p.slug === day.phaseSlug)
    if (!phase) {
      errors.push(`${where}: unknown phaseSlug "${day.phaseSlug}"`)
    } else if (day.dayNumber < phase.startDay || day.dayNumber > phase.endDay) {
      errors.push(
        `${where}: outside phase "${phase.slug}" range ${phase.startDay}-${phase.endDay}`,
      )
    }

    for (const field of [
      'titleEn', 'titleAr', 'topic', 'objectiveEn', 'objectiveAr',
      'lessonEn', 'lessonAr', 'exerciseEn', 'exerciseAr',
      'deliverableEn', 'deliverableAr', 'kind',
    ]) {
      const value = day[field]
      if (typeof value !== 'string' || value.trim().length === 0) {
        errors.push(`${where}: ${field} is empty or not a string`)
      }
    }

    if (!Number.isInteger(day.estimatedMinutes) || day.estimatedMinutes < 20 || day.estimatedMinutes > 300) {
      errors.push(`${where}: estimatedMinutes must be an integer 20-300`)
    }

    if (!Array.isArray(day.tasks) || day.tasks.length === 0) {
      errors.push(`${where}: tasks is empty`)
    } else {
      day.tasks.forEach((task, i) => {
        if (!task?.en?.trim() || !task?.ar?.trim()) {
          errors.push(`${where}: task ${i + 1} is missing en or ar text`)
        }
      })
    }

    if (!Array.isArray(day.criteriaEn) || day.criteriaEn.length === 0) {
      errors.push(`${where}: criteriaEn is empty`)
    }
    if (!Array.isArray(day.criteriaAr) || day.criteriaAr.length !== day.criteriaEn.length) {
      errors.push(`${where}: criteriaAr must have the same length as criteriaEn`)
    }

    if (!Array.isArray(day.resources) || day.resources.length === 0) {
      errors.push(`${where}: no learning resources`)
    } else {
      day.resources.forEach((r) => {
        if (!r.url?.startsWith('https://')) {
          errors.push(`${where}: resource URL is not https — "${r.url}"`)
        }
        if (!r.title?.trim()) errors.push(`${where}: a resource has no title`)
      })
    }

    // Latin letters fused directly to an ARABIC LETTER indicate corruption.
    //
    // Punctuation must be excluded: "JavaScript،" and "الـ Grid" are correct
    // Arabic, whereas "قبلUnary" is a defect. So the Arabic side is restricted
    // to letters/digits (U+0621–U+064A, U+0660–U+0669, U+066E–U+06D3),
    // which excludes ، ؛ ؟ ٪ and Arabic diacritics.
    const AR_LETTER = '\\u0621-\\u064A\\u0660-\\u0669\\u066E-\\u06D3'
    const GLUED = new RegExp(
      `[${AR_LETTER}][_A-Za-z]{2,}|[_A-Za-z]{2,}[${AR_LETTER}]`,
    )
    for (const field of ['titleAr', 'objectiveAr', 'lessonAr', 'exerciseAr', 'deliverableAr']) {
      if (typeof day[field] === 'string' && GLUED.test(day[field])) {
        const hit = day[field].match(GLUED)[0]
        errors.push(`${where}: ${field} has a fused Latin/Arabic fragment "${hit}"`)
      }
    }

    // Broader non-Latin, non-Arabic scripts anywhere in the Arabic fields
    // (Hangul, CJK, Telugu, replacement characters).
    const BAD_SCRIPT = /[\u3000-\u9FFF\uAC00-\uD7AF\u0C00-\u0CFF\uFFFD]/
    for (const field of ['titleAr', 'objectiveAr', 'lessonAr', 'exerciseAr', 'deliverableAr']) {
      const value = day[field]
      if (typeof value === 'string' && BAD_SCRIPT.test(value)) {
        const bad = [...value].find((ch) => BAD_SCRIPT.test(ch))
        errors.push(
          `${where}: ${field} contains U+${bad.codePointAt(0).toString(16).toUpperCase()}`,
        )
      }
    }
  }
}

for (const [label, days] of DAY_SETS) checkDaySet(label, days)

const authored = DAY_SETS.flatMap(([, days]) => days)
const seenNumbers = new Set(authored.map((d) => d.dayNumber))
const missing = []
for (let n = 1; n <= TOTAL_DAYS; n += 1) if (!seenNumbers.has(n)) missing.push(n)

function compress(nums) {
  if (nums.length === 0) return 'none'
  const out = []
  let start = nums[0]
  let prev = nums[0]
  for (const n of nums.slice(1)) {
    if (n === prev + 1) prev = n
    else {
      out.push(start === prev ? `${start}` : `${start}-${prev}`)
      start = n
      prev = n
    }
  }
  out.push(start === prev ? `${start}` : `${start}-${prev}`)
  return out.join(', ')
}

console.log(`Curriculum: ${authored.length}/${TOTAL_DAYS} days authored (${dayFiles.length} file(s))`)

if (missing.length) {
  console.log(`Not yet written: ${compress(missing)}`)
}

if (errors.length) {
  console.log(`\n${errors.length} integrity error(s):`)
  for (const e of errors.slice(0, 40)) console.log(`  x ${e}`)
  if (errors.length > 40) console.log(`  ... and ${errors.length - 40} more`)
  process.exit(1)
}

console.log('OK - no integrity errors in the authored days.')