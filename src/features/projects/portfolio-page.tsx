import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ExternalLink, FolderGit2 } from 'lucide-react'
import { useLocale } from '@/app/providers/locale-provider'
import { supabase } from '@/lib/supabase/client'
import { Skeleton } from '@/components/ui/primitives'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/app/providers/auth-provider'
import { fetchPublicProjects } from './project-service'
import type { Project } from '@/types'

/**
 * Public portfolio for a profile.
 *
 * The list comes back already filtered to `visibility = 'public'` by the
 * `user_projects` RLS policy — if the owner set everything to private, this
 * returns nothing even though the query succeeded. It never fetches private
 * data and filters client-side, because that would leak it into the network
 * response and the React tree.
 */
export function PortfolioPage() {
  const { userId = '' } = useParams()
  const { t } = useLocale()
  const { status: authStatus, isConfigured } = useAuth()

  const [projects, setProjects] = useState<Project[]>([])
  const [profile, setProfile] = useState<{ display_name: string | null; username: string | null; bio: string | null } | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Derived rather than toggled, so nothing is written during the synchronous
  // part of the effect below.
  const loading = isConfigured && Boolean(userId) && !loaded && error === null

  useEffect(() => {
    if (!isConfigured || !userId) return

    let active = true

    async function load() {
      if (!supabase) return

      // profiles_public is the projection that omits bio/learning_goals for
      // users you are not authorised to see them from.
      const [profileRes, projectsRes] = await Promise.all([
        supabase
          .from('profiles_public')
          .select('display_name, username, bio')
          .eq('id', userId)
          .maybeSingle(),
        fetchPublicProjects(userId).catch(() => [] as Project[]),
      ])

      if (!active) return
      if (profileRes.error) {
        setError(profileRes.error.message)
      } else {
        setProfile(profileRes.data ?? null)
      }
      setProjects(projectsRes)
      setLoaded(true)
    }

    void load()
    return () => {
      active = false
    }
  }, [userId, isConfigured])

  if (!isConfigured) {
    return (
      <div className="mx-auto max-w-lg p-6 text-center text-sm text-muted">{t('setup.title')}</div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <section className="overflow-hidden rounded-lg shadow-md">
        <div className="bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_55%,#db2777_120%)] p-5 text-white sm:p-6">
          <div className="flex items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white/15 text-xl font-bold uppercase">
              {(profile?.display_name ?? profile?.username ?? '?').slice(0, 1)}
            </span>
            <div className="min-w-0">
              <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">
                {profile?.display_name ?? profile?.username ?? t('projects.portfolio')}
              </h1>
              {profile?.username && (
                <p className="mt-0.5 text-sm text-white/80" dir="ltr">
                  @{profile.username}
                </p>
              )}
            </div>
          </div>
          {profile?.bio && <p className="mt-4 max-w-2xl text-white/90">{profile.bio}</p>}
        </div>
      </section>

      {error && (
        <p role="alert" className="rounded-md border border-danger/30 bg-danger-soft px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-44 w-full" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border py-16 text-center text-sm text-muted">
          {t('projects.noPublicProjects')}
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.description && (
                    <p className="line-clamp-3 text-sm text-muted">{project.description}</p>
                  )}
                  {project.stack.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <li key={tech}>
                          <span className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex items-center gap-3">
                    {project.repo_url && (
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                      >
                        <FolderGit2 className="size-4" />
                        {t('projects.openRepo')}
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                      >
                        <ExternalLink className="size-4" />
                        {t('projects.viewLive')}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}

      {authStatus === 'authenticated' && (
        <div className="pt-4">
          <Button variant="outline" onClick={() => history.back()}>
            {t('common.close')}
          </Button>
        </div>
      )}
    </div>
  )
}