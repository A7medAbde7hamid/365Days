import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Supabase client (browser / anon key only).
 *
 * The service-role key must never be referenced here or anywhere else in the
 * frontend bundle: Vite inlines every `VITE_*` variable into client code.
 *
 * When the project is not configured we deliberately do NOT throw at import
 * time (that would blank the whole app). We return a null client and expose
 * `isSupabaseConfigured` so the UI can show an honest setup notice instead of
 * pretending authenticated features work.
 */
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        // Keep the session in localStorage so a refresh does not sign the user out.
        storageKey: 'devjourney.auth',
      },
    })
  : null

/**
 * Narrowing helper for call sites that have already checked configuration.
 * Throwing here is safe: it means a feature was rendered while unconfigured.
 */
export function requireSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local',
    )
  }
  return supabase
}