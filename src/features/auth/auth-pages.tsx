import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/app/providers/auth-provider'
import { useLocale } from '@/app/providers/locale-provider'
import { Button } from '@/components/ui/button'
import { Input, Label } from '@/components/ui/input'
import { Alert } from '@/components/ui/primitives'
import { AuthCard } from './auth-card'

export function SignInPage() {
  const { signIn, isConfigured } = useAuth()
  const { t } = useLocale()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setPending(true)
    setError(null)
    const { error: authError } = await signIn({ email, password })
    if (authError) {
      setError(authError)
      setPending(false)
      return
    }
    const from = (location.state as { from?: string } | null)?.from
    navigate(from ?? '/app', { replace: true })
  }

  return (
    <AuthCard title={t('auth.signInTitle')} subtitle={t('auth.signInSubtitle')}>
      {!isConfigured && <Alert variant="warning">{t('setup.title')}</Alert>}

      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && <Alert variant="danger">{error}</Alert>}

        <div className="space-y-1.5">
          <Label htmlFor="signin-email">{t('auth.email')}</Label>
          <Input
            id="signin-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="signin-password">{t('auth.password')}</Label>
          <Input
            id="signin-password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full" disabled={pending || !isConfigured}>
          {pending ? t('common.loading') : t('auth.signIn')}
        </Button>

        <p className="text-center text-sm text-muted">
          {t('auth.noAccount')}{' '}
          <Link to="/sign-up" className="font-medium text-accent hover:underline">
            {t('auth.signUp')}
          </Link>
        </p>
      </form>
    </AuthCard>
  )
}

export function SignUpPage() {
  const { signUp, isConfigured } = useAuth()
  const { t } = useLocale()
  const navigate = useNavigate()

  const [form, setForm] = useState({ displayName: '', username: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [message, setMessage] = useState<{ tone: 'success' | 'danger'; text: string } | null>(null)
  const [pending, setPending] = useState(false)

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!form.displayName.trim()) next.displayName = t('common.required')
    if (!/^[a-zA-Z0-9_]{3,30}$/.test(form.username)) next.username = '3–30 letters, numbers or underscore'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (form.password.length < 8) next.password = t('auth.passwordTooShort')
    if (form.confirm !== form.password) next.confirm = t('auth.passwordsDontMatch')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!validate()) return

    setPending(true)
    setMessage(null)
    const { error, needsEmailConfirmation } = await signUp({
      email: form.email,
      password: form.password,
      displayName: form.displayName.trim(),
      username: form.username.trim(),
    })
    setPending(false)

    if (error) {
      setMessage({ tone: 'danger', text: error })
      return
    }
    if (needsEmailConfirmation) {
      setMessage({ tone: 'success', text: t('auth.checkEmail') })
    } else {
      navigate('/app', { replace: true })
    }
  }

  return (
    <AuthCard title={t('auth.signUpTitle')} subtitle={t('auth.signUpSubtitle')}>
      {!isConfigured && <Alert variant="warning">{t('setup.title')}</Alert>}

      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {message && <Alert variant={message.tone}>{message.text}</Alert>}

        <div className="space-y-1.5">
          <Label htmlFor="signup-name">{t('auth.displayName')}</Label>
          <Input
            id="signup-name"
            autoComplete="name"
            required
            value={form.displayName}
            onChange={update('displayName')}
            aria-invalid={Boolean(errors.displayName)}
          />
          {errors.displayName && <p className="text-xs text-danger">{errors.displayName}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="signup-username">{t('auth.username')}</Label>
          <Input
            id="signup-username"
            required
            dir="ltr"
            value={form.username}
            onChange={update('username')}
            aria-invalid={Boolean(errors.username)}
          />
          {errors.username && <p className="text-xs text-danger">{errors.username}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="signup-email">{t('auth.email')}</Label>
          <Input
            id="signup-email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="text-xs text-danger">{errors.email}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="signup-password">{t('auth.password')}</Label>
          <Input
            id="signup-password"
            type="password"
            autoComplete="new-password"
            required
            value={form.password}
            onChange={update('password')}
            aria-invalid={Boolean(errors.password)}
          />
          {errors.password && <p className="text-xs text-danger">{errors.password}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="signup-confirm">{t('auth.confirmPassword')}</Label>
          <Input
            id="signup-confirm"
            type="password"
            autoComplete="new-password"
            required
            value={form.confirm}
            onChange={update('confirm')}
            aria-invalid={Boolean(errors.confirm)}
          />
          {errors.confirm && <p className="text-xs text-danger">{errors.confirm}</p>}
        </div>

        <Button type="submit" className="w-full" disabled={pending || !isConfigured}>
          {pending ? t('common.loading') : t('auth.signUp')}
        </Button>

        <p className="text-center text-sm text-muted">
          {t('auth.haveAccount')}{' '}
          <Link to="/sign-in" className="font-medium text-accent hover:underline">
            {t('auth.signIn')}
          </Link>
        </p>
      </form>
    </AuthCard>
  )
}