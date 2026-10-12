/**
 * URL helpers shared by the project form and the seed generator.
 *
 * The database enforces the same https-only rule with a CHECK constraint, but
 * validating here too means the user gets an inline error instead of a failed
 * request, and we never send a value the server will reject.
 */

export function isHttpsUrl(value: string | null | undefined): boolean {
  const trimmed = (value ?? '').trim()
  if (!trimmed) return true // Empty means "not provided", which is allowed.
  try {
    return new URL(trimmed).protocol === 'https:'
  } catch {
    return false
  }
}

/** Returns a clean https URL, or null when absent/invalid. */
export function normaliseUrl(value: string | null | undefined): string | null {
  const trimmed = (value ?? '').trim()
  if (!trimmed) return null
  return isHttpsUrl(trimmed) ? trimmed : null
}