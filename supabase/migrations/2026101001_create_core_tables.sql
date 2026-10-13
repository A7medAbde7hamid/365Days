-- =============================================================================
-- Migration: 20261010_01_create_core_tables
--
-- Authoritative schema for DevJourney 365.
--
-- Conventions:
--   * UUID primary keys everywhere.
--   * Timestamps are TIMESTAMPTZ and stored in UTC; formatting to the user's
--     timezone happens in the client (see locale-provider).
--   * Personal tables reference profiles(id), which references auth.users(id),
--     so deleting the auth user cascades through everything.
--   * Ownership is always expressed by an explicit `user_id` column so RLS can
--     be written as `user_id = auth.uid()` without joins.
--   * Uniqueness constraints exist wherever double-submission would corrupt
--     state (progress rows, points, achievements).
--
-- Row Level Security is enabled in migration 02. Do not skip it.
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- updated_at maintenance ------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- =============================================================================
-- Identity
-- =============================================================================

CREATE TABLE public.profiles (
  id                 uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username           text NOT NULL UNIQUE
                     CHECK (username ~ '^[a-zA-Z0-9_-]{3,30}$'),
  display_name       text,
  avatar_url         text,
  bio                text CHECK (char_length(bio) <= 500),
  learning_goals     text,
  preferred_language text CHECK (preferred_language IN ('en', 'ar')),
  -- Controls who can read this profile. 'private' = only the owner.
  profile_visibility text NOT NULL DEFAULT 'private'
                     CHECK (profile_visibility IN ('private', 'public', 'group')),
  created_at         timestamptz NOT NULL DEFAULT now(),
  updated_at         timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =============================================================================
-- Curriculum (shared content — never per-user)
-- =============================================================================

CREATE TABLE public.curriculum_phases (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          text NOT NULL UNIQUE,
  position      integer NOT NULL UNIQUE CHECK (position BETWEEN 1 AND 12),
  title_en      text NOT NULL,
  title_ar      text NOT NULL,
  summary_en    text NOT NULL,
  summary_ar    text NOT NULL,
  start_day     integer NOT NULL CHECK (start_day BETWEEN 1 AND 365),
  end_day       integer NOT NULL CHECK (end_day BETWEEN 1 AND 365),
  deliverable_en text NOT NULL,
  deliverable_ar text NOT NULL,
  CHECK (end_day >= start_day)
);

CREATE TABLE public.curriculum_days (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day_number         integer NOT NULL UNIQUE CHECK (day_number BETWEEN 1 AND 365),
  phase_id           uuid NOT NULL REFERENCES public.curriculum_phases(id) ON DELETE RESTRICT,
  title_en           text NOT NULL,
  title_ar           text NOT NULL,
  topic              text NOT NULL,
  objective_en       text NOT NULL,
  objective_ar       text NOT NULL,
  lesson_en          text NOT NULL,
  lesson_ar          text NOT NULL,
  estimated_minutes  integer NOT NULL DEFAULT 90
                     CHECK (estimated_minutes BETWEEN 20 AND 300),
  exercise_en        text NOT NULL,
  exercise_ar        text NOT NULL,
  deliverable_en     text NOT NULL,
  deliverable_ar     text NOT NULL,
  criteria_en        text[] NOT NULL DEFAULT '{}',
  criteria_ar        text[] NOT NULL DEFAULT '{}',
  challenge_en       text,
  challenge_ar       text,
  prerequisites      integer[] NOT NULL DEFAULT '{}',
  kind               text NOT NULL DEFAULT 'lesson'
                     CHECK (kind IN ('lesson', 'practice', 'project', 'review', 'recovery')),
  created_at         timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT day_criteria_not_empty CHECK (array_length(criteria_en, 1) >= 1)
);

-- The roadmap day must fall inside its phase's range.
CREATE OR REPLACE FUNCTION public.curriculum_day_phase_range_check()
RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE
  v_start integer;
  v_end   integer;
BEGIN
  SELECT start_day, end_day INTO v_start, v_end
  FROM public.curriculum_phases WHERE id = NEW.phase_id;

  IF NEW.day_number < v_start OR NEW.day_number > v_end THEN
    RAISE EXCEPTION 'Day % is outside phase range %-%', NEW.day_number, v_start, v_end;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER curriculum_day_phase_range
  BEFORE INSERT OR UPDATE ON public.curriculum_days
  FOR EACH ROW EXECUTE FUNCTION public.curriculum_day_phase_range_check();

CREATE TABLE public.curriculum_tasks (
  id        uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day_id    uuid NOT NULL REFERENCES public.curriculum_days(id) ON DELETE CASCADE,
  position  integer NOT NULL CHECK (position > 0),
  title_en  text NOT NULL,
  title_ar  text NOT NULL,
  UNIQUE (day_id, position)
);

CREATE TABLE public.learning_resources (
  id        uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day_id    uuid REFERENCES public.curriculum_days(id) ON DELETE CASCADE,
  phase_id  uuid REFERENCES public.curriculum_phases(id) ON DELETE CASCADE,
  title     text NOT NULL,
  url       text NOT NULL CHECK (url ~ '^https://'),
  kind      text NOT NULL DEFAULT 'reference'
            CHECK (kind IN ('official', 'reference', 'arabic', 'paid', 'video')),
  note_en   text,
  note_ar   text,
  position  integer NOT NULL DEFAULT 0,
  -- A resource belongs to a day or a phase, never both or neither.
  CONSTRAINT resource_owner CHECK (num_nonnulls(day_id, phase_id) = 1)
);

-- =============================================================================
-- Personal learning
-- =============================================================================

CREATE TABLE public.user_day_progress (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  day_id       uuid NOT NULL REFERENCES public.curriculum_days(id) ON DELETE CASCADE,
  status       text NOT NULL DEFAULT 'not_started'
               CHECK (status IN ('not_started', 'in_progress', 'completed')),
  started_at   timestamptz,
  completed_at timestamptz,
  notes        text,
  learned      text,
  proof_url    text,
  rating       smallint CHECK (rating BETWEEN 1 AND 5),
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now(),
  -- One row per user per day: the structural guarantee against duplicate
  -- progress records and double point awards.
  UNIQUE (user_id, day_id),
  -- completed_at must be set iff status is completed.
  CONSTRAINT completion_timestamp_consistent CHECK (
    (status = 'completed' AND completed_at IS NOT NULL)
    OR (status <> 'completed')
  )
);

CREATE TRIGGER day_progress_updated_at BEFORE UPDATE ON public.user_day_progress
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.user_task_progress (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  task_id      uuid NOT NULL REFERENCES public.curriculum_tasks(id) ON DELETE CASCADE,
  completed    boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  updated_at   timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, task_id),
  CONSTRAINT task_completion_timestamp CHECK (
    (completed AND completed_at IS NOT NULL) OR (NOT completed)
  )
);

CREATE TRIGGER task_progress_updated_at BEFORE UPDATE ON public.user_task_progress
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Notes are private by default and are never shared, even between group members.
CREATE TABLE public.user_notes (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  day_id     uuid REFERENCES public.curriculum_days(id) ON DELETE CASCADE,
  note_text  text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX user_notes_per_day ON public.user_notes (user_id, day_id)
  WHERE day_id IS NOT NULL;

CREATE TRIGGER user_notes_updated_at BEFORE UPDATE ON public.user_notes
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.study_sessions (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  day_id           uuid REFERENCES public.curriculum_days(id) ON DELETE SET NULL,
  started_at       timestamptz NOT NULL,
  ended_at         timestamptz,
  -- Computed server-side by log_study_session(); never trusted from the client.
  duration_seconds integer NOT NULL DEFAULT 0 CHECK (duration_seconds >= 0),
  session_date     date NOT NULL DEFAULT (now() AT TIME ZONE 'UTC')::date,
  created_at       timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT session_end_after_start CHECK (ended_at IS NULL OR ended_at >= started_at)
);

CREATE TABLE public.weekly_reviews (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  iso_year       integer NOT NULL CHECK (iso_year BETWEEN 2020 AND 2100),
  iso_week       integer NOT NULL CHECK (iso_week BETWEEN 1 AND 53),
  strongest_topics  text NOT NULL DEFAULT '',
  revision_topics   text NOT NULL DEFAULT '',
  blockers           text NOT NULL DEFAULT '',
  next_week_goal     text NOT NULL DEFAULT '',
  planned_tasks      integer NOT NULL DEFAULT 0 CHECK (planned_tasks >= 0),
  completed_tasks    integer NOT NULL DEFAULT 0 CHECK (completed_tasks >= 0),
  self_assessment    text NOT NULL DEFAULT '',
  submitted_at    timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, iso_year, iso_week)
);

CREATE TRIGGER weekly_reviews_updated_at BEFORE UPDATE ON public.weekly_reviews
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.monthly_reviews (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id            uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  year               integer NOT NULL CHECK (year BETWEEN 2020 AND 2100),
  month              integer NOT NULL CHECK (month BETWEEN 1 AND 12),
  projects_completed integer NOT NULL DEFAULT 0,
  study_minutes      integer NOT NULL DEFAULT 0,
  skills_practised   text NOT NULL DEFAULT '',
  revision_topics    text NOT NULL DEFAULT '',
  self_assessment    text NOT NULL DEFAULT '',
  biggest_win        text NOT NULL DEFAULT '',
  main_difficulty    text NOT NULL DEFAULT '',
  next_priorities    text NOT NULL DEFAULT '',
  submitted_at       timestamptz,
  created_at         timestamptz NOT NULL DEFAULT now(),
  updated_at         timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, year, month)
);

CREATE TRIGGER monthly_reviews_updated_at BEFORE UPDATE ON public.monthly_reviews
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- =============================================================================
-- Projects
-- =============================================================================

CREATE TABLE public.user_projects (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name             text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  description      text,
  problem          text,
  stack            text[] NOT NULL DEFAULT '{}',
  status           text NOT NULL DEFAULT 'planned'
                   CHECK (status IN ('planned', 'in_progress', 'paused', 'completed')),
  start_date       date,
  target_date      date,
  repo_url         text CHECK (repo_url IS NULL OR repo_url ~ '^https://'),
  live_url         text CHECK (live_url IS NULL OR live_url ~ '^https://'),
  lessons_learned  text,
  challenges_faced text,
  -- Which roadmap phase this project came from, if any.
  phase_id         uuid REFERENCES public.curriculum_phases(id) ON DELETE SET NULL,
  visibility       text NOT NULL DEFAULT 'private'
                   CHECK (visibility IN ('private', 'group', 'public')),
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT target_after_start CHECK (target_date IS NULL OR start_date IS NULL OR target_date >= start_date)
);

CREATE TRIGGER user_projects_updated_at BEFORE UPDATE ON public.user_projects
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.project_milestones (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id  uuid NOT NULL REFERENCES public.user_projects(id) ON DELETE CASCADE,
  title       text NOT NULL,
  completed   boolean NOT NULL DEFAULT false,
  due_date    date,
  position    integer NOT NULL DEFAULT 0,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- =============================================================================
-- Groups
-- =============================================================================

CREATE TABLE public.study_groups (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name           text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 80),
  description    text,
  avatar_url     text,
  created_by     uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  visibility     text NOT NULL DEFAULT 'private'
                 CHECK (visibility IN ('private', 'group')),
  -- Master switch for whether members can see each other's progress at all.
  share_progress boolean NOT NULL DEFAULT true,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER study_groups_updated_at BEFORE UPDATE ON public.study_groups
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.study_group_members (
  id        uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id  uuid NOT NULL REFERENCES public.study_groups(id) ON DELETE CASCADE,
  user_id   uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  role      text NOT NULL DEFAULT 'member'
            CHECK (role IN ('owner', 'admin', 'member')),
  joined_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (group_id, user_id)
);

CREATE TABLE public.group_invitations (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id   uuid NOT NULL REFERENCES public.study_groups(id) ON DELETE CASCADE,
  created_by uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  -- Random, unguessable code. The table is never readable by clients; codes
  -- are only ever redeemed through redeem_group_invitation().
  code       text NOT NULL UNIQUE,
  expires_at timestamptz,
  max_uses   integer CHECK (max_uses IS NULL OR max_uses > 0),
  uses       integer NOT NULL DEFAULT 0,
  used_at    timestamptz,
  revoked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.group_challenges (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id       uuid NOT NULL REFERENCES public.study_groups(id) ON DELETE CASCADE,
  created_by     uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title          text NOT NULL CHECK (char_length(title) BETWEEN 1 AND 120),
  description    text,
  rules          text,
  challenge_type text NOT NULL
                 CHECK (challenge_type IN (
                   'sessions',      -- N study sessions
                   'phase',         -- finish a curriculum phase
                   'project',       -- build and deploy something
                   'revision',      -- N revision sessions
                   'consistency'    -- N consecutive days
                 )),
  target_count   integer NOT NULL DEFAULT 7 CHECK (target_count > 0),
  starts_at      timestamptz NOT NULL DEFAULT now(),
  ends_at        timestamptz NOT NULL,
  bonus_points   integer NOT NULL DEFAULT 25 CHECK (bonus_points >= 0),
  created_at     timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT challenge_window_valid CHECK (ends_at > starts_at)
);

CREATE TABLE public.challenge_participants (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_id  uuid NOT NULL REFERENCES public.group_challenges(id) ON DELETE CASCADE,
  user_id       uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  progress      integer NOT NULL DEFAULT 0 CHECK (progress >= 0),
  -- Set only by validate_challenge_progress(); clients cannot write it.
  completed     boolean NOT NULL DEFAULT false,
  completed_at  timestamptz,
  joined_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (challenge_id, user_id)
);

-- =============================================================================
-- Achievements and points
-- =============================================================================

CREATE TABLE public.achievements (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code           text NOT NULL UNIQUE,
  title_en       text NOT NULL,
  title_ar       text NOT NULL,
  description_en text NOT NULL,
  description_ar text NOT NULL,
  icon           text,
  -- Verifiable condition, e.g. {"type": "days_completed", "threshold": 1}.
  criteria       jsonb NOT NULL,
  -- Optional: which roadmap phase this achievement belongs to.
  phase_position integer,
  created_at     timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT achievement_criteria_valid CHECK (
    criteria ? 'type' AND criteria ? 'threshold'
  )
);

CREATE TABLE public.user_achievements (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  achievement_id uuid NOT NULL REFERENCES public.achievements(id) ON DELETE CASCADE,
  earned_at      timestamptz NOT NULL DEFAULT now(),
  -- Prevents the same achievement being awarded twice.
  UNIQUE (user_id, achievement_id)
);

-- Append-only ledger. No UPDATE/DELETE policy is ever granted: points are
-- immutable facts, not editable state.
CREATE TABLE public.point_ledger (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  reason     text NOT NULL
             CHECK (reason IN (
               'day_completed', 'exercise_completed', 'weekly_review',
               'challenge_completed', 'project_completed', 'bonus'
             )),
  points     integer NOT NULL CHECK (points <> 0),
  ref_type   text,
  ref_id     uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- The anti-double-award guarantee.
--
-- A plain UNIQUE(user_id, reason, ref_type, ref_id) would NOT work here: in
-- Postgres NULLs are distinct from each other, so a ledger row with a NULL
-- ref_id could be inserted any number of times. COALESCE gives NULL a single
-- sentinel value so the constraint actually bites.
CREATE UNIQUE INDEX point_ledger_no_double_award ON public.point_ledger (
  user_id,
  reason,
  coalesce(ref_type, ''),
  coalesce(ref_id, '00000000-0000-0000-0000-000000000000'::uuid)
);

CREATE INDEX point_ledger_user_created ON public.point_ledger (user_id, created_at DESC);

-- =============================================================================
-- Privacy, notifications, activity
-- =============================================================================

CREATE TABLE public.user_privacy_settings (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                uuid NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  share_progress         boolean NOT NULL DEFAULT true,
  share_streak           boolean NOT NULL DEFAULT true,
  share_achievements     boolean NOT NULL DEFAULT true,
  -- Off by default and, regardless of this flag, notes are never readable by
  -- other members under the current RLS policies. Kept for a future explicit
  -- "share this note" feature.
  share_notes            boolean NOT NULL DEFAULT false,
  hidden_from_leaderboard boolean NOT NULL DEFAULT false,
  created_at             timestamptz NOT NULL DEFAULT now(),
  updated_at             timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER privacy_settings_updated_at BEFORE UPDATE ON public.user_privacy_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.notification_preferences (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          uuid NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  daily_reminders  boolean NOT NULL DEFAULT false,
  reminder_time    time,
  group_activity   boolean NOT NULL DEFAULT true,
  challenge_updates boolean NOT NULL DEFAULT true,
  timezone         text NOT NULL DEFAULT 'UTC',
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER notification_preferences_updated_at
  BEFORE UPDATE ON public.notification_preferences
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.activity_events (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  group_id   uuid REFERENCES public.study_groups(id) ON DELETE SET NULL,
  type       text NOT NULL
             CHECK (type IN (
               'progress_update', 'achievement_earned', 'challenge_completed',
               'challenge_joined', 'project_completed', 'group_joined',
               'group_left', 'encouragement'
             )),
  related_id uuid,
  message    text CHECK (char_length(message) <= 280),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- =============================================================================
-- Indexes for the query patterns the app actually uses
-- =============================================================================
CREATE INDEX curriculum_days_phase      ON public.curriculum_days (phase_id, day_number);
CREATE INDEX curriculum_tasks_day       ON public.curriculum_tasks (day_id, position);
CREATE INDEX learning_resources_day    ON public.learning_resources (day_id);

CREATE INDEX user_day_progress_user    ON public.user_day_progress (user_id, day_id);
CREATE INDEX user_day_progress_status  ON public.user_day_progress (user_id, status);
CREATE INDEX user_task_progress_user   ON public.user_task_progress (user_id);
CREATE INDEX user_notes_user          ON public.user_notes (user_id);
CREATE INDEX study_sessions_user_date  ON public.study_sessions (user_id, session_date DESC);
CREATE INDEX weekly_reviews_user       ON public.weekly_reviews (user_id, iso_year DESC, iso_week DESC);
CREATE INDEX monthly_reviews_user      ON public.monthly_reviews (user_id, year DESC, month DESC);

CREATE INDEX user_projects_user        ON public.user_projects (user_id, status);
CREATE INDEX user_projects_visibility  ON public.user_projects (visibility)
  WHERE visibility = 'public';
CREATE INDEX project_milestones_project ON public.project_milestones (project_id);

CREATE INDEX group_members_group       ON public.study_group_members (group_id);
CREATE INDEX group_members_user        ON public.study_group_members (user_id);
CREATE INDEX invitations_group         ON public.group_invitations (group_id);
CREATE INDEX invitations_active_code   ON public.group_invitations (code)
  WHERE revoked_at IS NULL;
CREATE INDEX challenges_group          ON public.group_challenges (group_id, ends_at);
CREATE INDEX challenge_participants_user ON public.challenge_participants (user_id);

CREATE INDEX user_achievements_user    ON public.user_achievements (user_id, earned_at DESC);
CREATE INDEX activity_events_user      ON public.activity_events (user_id, created_at DESC);
CREATE INDEX activity_events_group     ON public.activity_events (group_id, created_at DESC);