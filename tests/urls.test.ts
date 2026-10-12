import { describe, expect, it } from 'vitest'
import { isHttpsUrl, normaliseUrl } from '@/lib/urls'

describe('isHttpsUrl', () => {
  it('accepts https URLs', () => {
    expect(isHttpsUrl('https://github.com/user/repo')).toBe(true)
    expect(isHttpsUrl('https://example.com')).toBe(true)
  })

  it('treats an empty value as "not provided" rather than invalid', () => {
    expect(isHttpsUrl('')).toBe(true)
    expect(isHttpsUrl('   ')).toBe(true)
    expect(isHttpsUrl(null)).toBe(true)
    expect(isHttpsUrl(undefined)).toBe(true)
  })

  it('rejects http and other protocols', () => {
    expect(isHttpsUrl('http://example.com')).toBe(false)
    expect(isHttpsUrl('javascript:alert(1)')).toBe(false)
    expect(isHttpsUrl('ftp://example.com')).toBe(false)
  })

  it('rejects strings that are not URLs at all', () => {
    expect(isHttpsUrl('example.com')).toBe(false)
    expect(isHttpsUrl('just some text')).toBe(false)
  })

  it('rejects an https prefix glued onto something else', () => {
    expect(isHttpsUrl('https://')).toBe(false)
  })
})

describe('normaliseUrl', () => {
  it('trims surrounding whitespace', () => {
    expect(normaliseUrl('  https://example.com  ')).toBe('https://example.com')
  })

  it('returns null for empty input', () => {
    expect(normaliseUrl('')).toBeNull()
    expect(normaliseUrl(null)).toBeNull()
    expect(normaliseUrl(undefined)).toBeNull()
  })

  it('returns null rather than storing an invalid URL', () => {
    // The project form validates first; this is the second line of defence
    // so a bad value can never reach the database CHECK constraint as truthy.
    expect(normaliseUrl('http://example.com')).toBeNull()
    expect(normaliseUrl('javascript:alert(1)')).toBeNull()
  })

  it('preserves a valid URL unchanged', () => {
    const url = 'https://vercel.com/my-project'
    expect(normaliseUrl(url)).toBe(url)
  })
})