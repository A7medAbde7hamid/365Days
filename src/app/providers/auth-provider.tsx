import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { isSupabaseConfigured, supabase } from '@/lib/supabase/client'
import type { Profile } from '@/types'

type AuthStatus = 'loading' | 'authenticated' | 'anonymous' | 'unconfigured'

type AuthContextValue = {
  status: AuthStatus
  session: Session | null
  user: User | null
  profile: Profile | null
  isConfigured: boolean
  signUp: (input: {
    email: string
    password: string
    displayName: string
    username: string
  }) => Promise<{ error: string | null; needsEmailConfirmation: boolean }>
  signIn: (input: { email: string; password: string }) => Promise<{ error: string | null }>
  signOut: () => Promise<{ error: string | null }>
  requestPasswordReset: (email: string) => Promise<{ error: string | null }>
  updatePassword: (password: string) => Promise<{ error: string | null }>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

/** Map Supabase auth errors to messages that are actually actionable. */
function describeAuthError(message: string): string {
  const lower = message.toLowerCase()
  if (lower.includes('invalid login credentials')) return 'Incorrect email or password.'
  if (lower.includes('email not confirmed')) return 'Please confirm your email address first.'
  if (lower.includes('user already registered')) return 'An account with this email already exists.'
  if (lower.includes('password should be at least')) return 'Password must be at least 8 characters.'
  if (lower.includes('rate limit') || lower.includes('too many')) return 'Too many attempts. Please wait a moment.'
  return message
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [status, setStatus] = useState<AuthStatus>(() =>
    isSupabaseConfigured ? 'loading' : 'unconfigured',
  )

  const fetchProfile = useCallback(async (userId: string) => {
    if (!supabase) return
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle()

    // A missing profile row is recoverable (the signup trigger may not have run
    // yet); surface the error rather than silently pretending we have one.
    if (error) {
      console.error('[auth] failed to load profile:', error.message)
      return
    }
    setProfile(data as Profile | null)
  }, [])

  useEffect(() => {
    if (!supabase) return

    let active = true

    supabase.auth
      .getSession()
      .then(async ({ data }) => {
        if (!active) return
        setSession(data.session)
        if (data.session) await fetchProfile(data.session.user.id)
        if (active) setStatus(data.session ? 'authenticated' : 'anonymous')
      })
      .catch((err) => {
        console.error('[auth] getSession failed:', err)
        if (active) setStatus('anonymous')
      })

    const { data: sub } = supabase.auth.onAuthStateChange((event, nextSession) => {
      // Skip TOKEN_REFRESHED: it fires constantly and changes no user-facing state.
      if (event === 'TOKEN_REFRESHED') return
      setSession(nextSession)
      setStatus(nextSession ? 'authenticated' : 'anonymous')
      if (nextSession) {
        void fetchProfile(nextSession.user.id)
      } else {
        setProfile(null)
      }
    })

    return () => {
      active = false
      sub.subscription.unsubscribe()
    }
  }, [fetchProfile])

  const value = useMemo<AuthContextValue>(
    () => ({
      status,
      session,
      user: session?.user ?? null,
      profile,
      isConfigured: isSupabaseConfigured,

      async signUp({ email, password, displayName, username }) {
        if (!supabase) return { error: 'Supabase is not configured.', needsEmailConfirmation: false }
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            // Read by the `handle_new_user` trigger to create the profile row.
            data: { display_name: displayName, username },
          },
        })
        if (error) return { error: describeAuthError(error.message), needsEmailConfirmation: false }
        // With email confirmation on there is no session yet.
        return { error: null, needsEmailConfirmation: !data.session }
      },

      async signIn({ email, password }) {
        if (!supabase) return { error: 'Supabase is not configured.' }
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        return { error: error ? describeAuthError(error.message) : null }
      },

      async signOut() {
        if (!supabase) return { error: null }
        const { error } = await supabase.auth.signOut()
        return { error: error ? error.message : null }
      },

      async requestPasswordReset(email) {
        if (!supabase) return { error: 'Supabase is not configured.' }
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        })
        return { error: error ? error.message : null }
      },

      async updatePassword(password) {
        if (!supabase) return { error: 'Supabase is not configured.' }
        const { error } = await supabase.auth.updateUser({ password })
        return { error: error ? error.message : null }
      },

      refreshProfile: async () => {
        if (session) await fetchProfile(session.user.id)
      },
    }),
    [status, session, profile, fetchProfile],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}