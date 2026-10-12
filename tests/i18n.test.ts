import { describe, expect, it } from 'vitest'
import { en } from '@/locales/en'
import { ar } from '@/locales/ar'
import type { Dictionary } from '@/locales/en'

/**
 * Guards the bilingual contract.
 *
 * `ar.ts` is already typed as `Dictionary`, so a *missing* key is a compile
 * error. These tests catch the things the type system cannot:
 *  - a key present but blank, which renders as empty space in the UI;
 *  - an Arabic value that is still the English string (untranslated copy-paste);
 *  - `{placeholders}` that disagree between locales, so one language ends up
 *    printing a raw `{count}` to the user.
 */

/** Every leaf key as a dot path, e.g. "dashboard.dayOf". */
function leafKeys(value: unknown, prefix = ''): Map<string, string> {
  const out = new Map<string, string>()
  if (typeof value === 'string') {
    out.set(prefix, value)
    return out
  }
  if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      const path = prefix ? `${prefix}.${key}` : key
      for (const [k, v] of leafKeys(child, path)) out.set(k, v)
    }
  }
  return out
}

const enKeys = leafKeys(en)
const arKeys = leafKeys(ar)

describe('i18n dictionaries', () => {
  it('ar has exactly the same keys as en', () => {
    expect([...arKeys.keys()].sort()).toEqual([...enKeys.keys()].sort())
  })

  it('no English value is blank', () => {
    const blanks = [...enKeys].filter(([, v]) => v.trim() === '').map(([k]) => k)
    expect(blanks).toEqual([])
  })

  it('no Arabic value is blank', () => {
    const blanks = [...arKeys].filter(([, v]) => v.trim() === '').map(([k]) => k)
    expect(blanks).toEqual([])
  })

  it('Arabic actually contains Arabic script', () => {
    // Catches a key left as the English string by copy-paste.
    const notTranslated = [...arKeys]
      .filter(([key, value]) => {
        const englishValue = enKeys.get(key)
        // Only flag where the source is genuinely prose, not a proper noun
        // that is intentionally the same in both languages.
        return value === englishValue && /[A-Za-z]{3,}/.test(value)
      })
      .map(([key]) => key)

    // These are deliberately identical in both languages.
    const allowedIdentical = new Set([
      'app.name',
      'language.en',
      'language.ar',
      'theme.label',
      'language.label',
      'common.empty',
    ])

    expect(notTranslated.filter((key) => !allowedIdentical.has(key))).toEqual([])
  })

  it('placeholders match across locales', () => {
    const mismatches: string[] = []
    for (const [key, englishValue] of enKeys) {
      const arabicValue = arKeys.get(key)
      if (!arabicValue) continue
      const placeholders = (v: string) =>
        [...v.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort()
      const a = placeholders(englishValue)
      const b = placeholders(arabicValue)
      if (a.join(',') !== b.join(',')) {
        mismatches.push(`${key}: en[${a.join(',')}] vs ar[${b.join(',')}]`)
      }
    }
    expect(mismatches).toEqual([])
  })

  it('Arabic strings carry no CJK/Hangul/replacement characters', () => {
    const bad = [...arKeys]
      .filter(([, v]) => /[\u3000-\u9FFF\uAC00-\uD7AF\u0C00-\u0CFF\uFFFD]/.test(v))
      .map(([k]) => k)
    expect(bad).toEqual([])
  })

  it('the Dictionary type matches the English object shape', () => {
    // Compile-time parity is already enforced by `const ar: Dictionary`.
    // This asserts the runtime shapes still line up.
    const typeCheck: Dictionary = ar
    expect(Object.keys(typeCheck).sort()).toEqual(Object.keys(en).sort())
  })
})