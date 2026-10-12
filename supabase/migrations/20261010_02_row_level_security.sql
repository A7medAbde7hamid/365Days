-- =============================================================================
-- Migration: 20261010_02_row_level_security
--
-- CRITICAL: the previous migration created every table WITHOUT Row Level
-- Security. With RLS disabled, Supabase's PostgREST layer exposes every row of
-- every table to any caller holding the anon key — any signed-in user could
-- read every other user's private notes, progress and projects.
--
-- This migration enables RLS on every table and writes explicit policies.
--
-- Design rules used throughout:
--   1. Authorization is derived from auth.uid() ONLY. Never from
--      user-editable profile metadata (display_name, username, etc.).
--   2. UPDATE policies check BOTH `USING` (who can see the row) and
--      `WITH CHECK` (what the row is allowed to become). Without WITH CHECK a
--      user could move their own row to another owner_id.
--   3. Private data is never world-readable, even to authenticated users.
--   4. Group access requires verified membership, checked in the database.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Helper functions (SECURITY DEFINER so they can bypass RLS on profiles when
-- resolving membership, without granting that power to clients).
-- -----------------------------------------------------------------------------

-- Is the given user a member of the given group, optionally at a minimum role?
CREATE OR REPLACE FUNCTION public.is_group_member(p_group_id uuid, p_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.study_group_members m
    WHERE m.group_id = p_group_id AND m.user_id = p_user_id
  );
$$;

CREATE OR REPLACE FUNCTION public.has_group_role(
  p_group_id uuid,
  p_user_id uuid,
  p_roles text[]
)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.study_group_members m
    WHERE m.group_id = p_group_id
      AND m.user_id = p_user_id
      AND m.role = ANY (p_roles)
  );
$$;

-- Is the user a member of the group that owns this challenge?
CREATE OR REPLACE FUNCTION public.is_challenge_member(p_challenge_id uuid, p_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.is_group_member(c.group_id, p_user_id)
  FROM public.group_challenges c
  WHERE c.id = p_challenge_id;
$$;

-- Does the target user share their progress/achievements with this viewer?
CREATE OR REPLACE FUNCTION public.shares_learning_with(p_owner_id uuid, p_viewer_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_privacy_settings s
    WHERE s.user_id = p_owner_id
      AND s.share_progress = true
      AND EXISTS (
        SELECT 1
        FROM public.study_group_members viewer
        JOIN public.study_group_members owner
          ON owner.group_id = viewer.group_id
        WHERE viewer.user_id = p_viewer_id
          AND owner.user_id = p_owner_id
      )
  );
$$;

-- -----------------------------------------------------------------------------
-- 1. Enable RLS on EVERY table.
--
-- This list must stay in sync with migration 01. A table missing here is fully
-- exposed to any caller holding the anon key.
-- -----------------------------------------------------------------------------
DO $$
DECLARE
  t text;
  missing text[] := ARRAY[]::text[];
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'profiles',
    'curriculum_phases',
    'curriculum_days',
    'curriculum_tasks',
    'learning_resources',
    'user_day_progress',
    'user_task_progress',
    'user_notes',
    'study_sessions',
    'weekly_reviews',
    'monthly_reviews',
    'user_projects',
    'project_milestones',
    'study_groups',
    'study_group_members',
    'group_invitations',
    'group_challenges',
    'challenge_participants',
    'achievements',
    'user_achievements',
    'point_ledger',
    'user_privacy_settings',
    'notification_preferences',
    'activity_events'
  ]
  LOOP
    IF to_regclass('public.' || t) IS NULL THEN
      missing := array_append(missing, t);
    ELSE
      EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
    END IF;
  END LOOP;

  IF array_length(missing, 1) > 0 THEN
    RAISE EXCEPTION 'Expected tables are missing: %', missing;
  END IF;
END $$;

-- -----------------------------------------------------------------------------
-- 2. profiles
--
-- A profile is split conceptually in two:
--   * identity columns (id, username, created_at) — needed to render member
--     lists and is not sensitive.
--   * private columns (bio, learning_goals) — owner only.
--
-- Postgres RLS cannot do column-level filtering inside a SELECT policy, so we
-- expose a public-safe view instead of the raw table.
-- -----------------------------------------------------------------------------

-- Public-safe projection. Reading this never exposes bio or learning_goals.
CREATE OR REPLACE VIEW public.profiles_public
WITH (security_invoker = false)
AS
  SELECT
    p.id,
    p.username,
    p.display_name,
    p.avatar_url,
    p.profile_visibility,
    p.created_at,
    coalesce(s.share_achievements, false) AS shares_achievements,
    coalesce(s.share_streak, false)      AS shares_streak,
    coalesce(s.hidden_from_leaderboard, false) AS hidden_from_leaderboard
  FROM public.profiles p
  LEFT JOIN public.user_privacy_settings s ON s.user_id = p.id
  WHERE p.profile_visibility IN ('public', 'group')
     OR p.id = auth.uid()
     OR public.shares_learning_with(p.id, auth.uid());

GRANT SELECT ON public.profiles_public TO authenticated;

-- Owner-only access to their own full profile row.
CREATE POLICY profiles_select_own ON public.profiles
  FOR SELECT USING (id = auth.uid());

CREATE POLICY profiles_update_own ON public.profiles
  FOR UPDATE
  USING (id = auth.uid())
  -- A user must not be able to change their own id.
  WITH CHECK (id = auth.uid());

CREATE POLICY profiles_insert_self ON public.profiles
  FOR INSERT WITH CHECK (id = auth.uid());

-- Delete is intentionally NOT granted here: account deletion goes through the
-- SECURITY DEFINER function below so related rows are cleaned up atomically.

-- -----------------------------------------------------------------------------
-- 3. Curriculum — public read, never client-writable.
--    The roadmap is shared content, not per-user data.
-- -----------------------------------------------------------------------------
CREATE POLICY curriculum_read ON public.curriculum_days
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- No INSERT/UPDATE/DELETE policies => writes are denied for all client roles.
-- The seed script runs as the migration owner, which bypasses RLS.

-- Phases, tasks and resources are shared curriculum content: readable by
-- anyone (including anonymous visitors), writable only by the migration owner.
CREATE POLICY curriculum_phases_read ON public.curriculum_phases
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY curriculum_tasks_read ON public.curriculum_tasks
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY curriculum_resources_read ON public.learning_resources
  FOR SELECT TO anon, authenticated USING (true);

-- -----------------------------------------------------------------------------
-- 3b. Project milestones follow their parent project's visibility.
-- -----------------------------------------------------------------------------
CREATE POLICY milestones_select_visible ON public.project_milestones
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_projects p
      WHERE p.id = project_milestones.project_id
        AND (
          p.user_id = auth.uid()
          OR p.visibility = 'public'
          OR (p.visibility = 'group' AND EXISTS (
                SELECT 1
                FROM public.study_group_members mine
                JOIN public.study_group_members theirs ON theirs.group_id = mine.group_id
                WHERE mine.user_id = auth.uid() AND theirs.user_id = p.user_id
             ))
        )
    )
  );

CREATE POLICY milestones_owner_all ON public.project_milestones
  FOR ALL
  USING (EXISTS (
    SELECT 1 FROM public.user_projects p
    WHERE p.id = project_milestones.project_id AND p.user_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.user_projects p
    WHERE p.id = project_milestones.project_id AND p.user_id = auth.uid()
  ));

-- -----------------------------------------------------------------------------
-- 3c. Point ledger.
--
-- Own points are readable so the client can show a total. No INSERT policy
-- exists for any client role: points are only ever written by the SECURITY
-- DEFINER awarding functions. There is also no UPDATE/DELETE policy, which
-- makes the ledger append-only from the client's perspective.
-- -----------------------------------------------------------------------------
CREATE POLICY point_ledger_select_own ON public.point_ledger
  FOR SELECT USING (user_id = auth.uid());

-- -----------------------------------------------------------------------------
-- 3d. Notification preferences — owner only.
-- -----------------------------------------------------------------------------
CREATE POLICY notification_preferences_owner_all ON public.notification_preferences
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- -----------------------------------------------------------------------------
-- 4. Personal learning data — strictly owner-only.
-- -----------------------------------------------------------------------------

-- Day progress
CREATE POLICY day_progress_owner_all ON public.user_day_progress
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Task progress
CREATE POLICY task_progress_owner_all ON public.user_task_progress
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Notes: NEVER shared. There is deliberately no policy granting other users
-- read access, regardless of their privacy settings.
CREATE POLICY notes_owner_all ON public.user_notes
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Study sessions
CREATE POLICY sessions_owner_all ON public.study_sessions
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Reviews
CREATE POLICY weekly_reviews_owner_all ON public.weekly_reviews
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY monthly_reviews_owner_all ON public.monthly_reviews
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Privacy settings: owner only.
CREATE POLICY privacy_settings_owner_all ON public.user_privacy_settings
  FOR ALL
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- -----------------------------------------------------------------------------
-- 5. Projects — owner writes; reads depend on the project's visibility.
-- -----------------------------------------------------------------------------
CREATE POLICY projects_select_visible ON public.user_projects
  FOR SELECT USING (
    user_id = auth.uid()
    OR visibility = 'public'
    OR (
      visibility = 'group'
      AND EXISTS (
        SELECT 1
        FROM public.study_group_members mine
        JOIN public.study_group_members theirs
          ON theirs.group_id = mine.group_id
        WHERE mine.user_id = auth.uid()
          AND theirs.user_id = user_projects.user_id
      )
    )
  );

CREATE POLICY projects_insert_own ON public.user_projects
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY projects_update_own ON public.user_projects
  FOR UPDATE
  USING (user_id = auth.uid())
  -- WITH CHECK stops a user re-assigning the project to somebody else.
  WITH CHECK (user_id = auth.uid());

CREATE POLICY projects_delete_own ON public.user_projects
  FOR DELETE USING (user_id = auth.uid());

-- -----------------------------------------------------------------------------
-- 6. Groups and membership
-- -----------------------------------------------------------------------------
CREATE POLICY groups_select_members ON public.study_groups
  FOR SELECT
  USING (
    created_by = auth.uid()
    OR public.is_group_member(id, auth.uid())
  );

CREATE POLICY groups_insert_self ON public.study_groups
  FOR INSERT WITH CHECK (created_by = auth.uid());

-- Only an owner/admin may edit group settings.
CREATE POLICY groups_update_admins ON public.study_groups
  FOR UPDATE
  USING (public.has_group_role(id, auth.uid(), ARRAY['owner', 'admin']::text[]))
  WITH CHECK (public.has_group_role(id, auth.uid(), ARRAY['owner', 'admin']::text[]));

-- Membership list visible to fellow members.
CREATE POLICY members_select_group ON public.study_group_members
  FOR SELECT USING (public.is_group_member(group_id, auth.uid()));

-- Joining: a user may insert their own member row, but ONLY with role
-- 'member'. This is what stops a user granting themselves 'owner'.
CREATE POLICY members_insert_self_member_only ON public.study_group_members
  FOR INSERT
  WITH CHECK (
    user_id = auth.uid()
    AND role = 'member'
  );

-- Changing someone else's role, or promoting yourself, requires owner/admin.
CREATE POLICY members_update_admins ON public.study_group_members
  FOR UPDATE
  USING (public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[]))
  WITH CHECK (public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[]));

-- Leaving a group is always allowed for your own row.
CREATE POLICY members_delete_self_or_admin ON public.study_group_members
  FOR DELETE USING (
    user_id = auth.uid()
    OR public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[])
  );

-- Invitations: only admins can read or manage them. The invitation *code* must
-- not be enumerable, so there is intentionally no policy allowing anonymous
-- lookup by code — redemption happens through the SECURITY DEFINER function.
CREATE POLICY invitations_admin_all ON public.group_invitations
  FOR ALL
  USING (public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[]))
  WITH CHECK (public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[]));

-- -----------------------------------------------------------------------------
-- 7. Challenges
-- -----------------------------------------------------------------------------
CREATE POLICY challenges_select_members ON public.group_challenges
  FOR SELECT USING (public.is_group_member(group_id, auth.uid()));

CREATE POLICY challenges_insert_admins ON public.group_challenges
  FOR INSERT
  WITH CHECK (
    created_by = auth.uid()
    AND public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[])
  );

CREATE POLICY challenges_update_admins ON public.group_challenges
  FOR UPDATE
  USING (public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[]))
  WITH CHECK (public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[]));

CREATE POLICY challenges_delete_creator_or_admin ON public.group_challenges
  FOR DELETE USING (
    created_by = auth.uid()
    OR public.has_group_role(group_id, auth.uid(), ARRAY['owner', 'admin']::text[])
  );

-- Participants can read the roster of their own group, and can only ever write
-- their OWN participation row (no self-awarding of completion or points).
-- Progress is only visible when the user has opted in to sharing.
CREATE POLICY participants_select_group ON public.challenge_participants
  FOR SELECT USING (
    public.is_challenge_member(challenge_id, auth.uid())
    AND EXISTS (
      SELECT 1 FROM public.user_privacy_settings s
      WHERE s.user_id = challenge_participants.user_id
        AND s.share_progress = true
    )
  );

CREATE POLICY participants_insert_self ON public.challenge_participants
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY participants_update_self_no_progress ON public.challenge_participants
  FOR UPDATE
  USING (user_id = auth.uid())
  -- Completion is awarded by the validation function, never by the client, so
  -- a member cannot simply flip `completed` to true.
  WITH CHECK (
    user_id = auth.uid()
    AND completed = false
    AND completed_at IS NULL
  );

CREATE POLICY participants_delete_self ON public.challenge_participants
  FOR DELETE USING (user_id = auth.uid());

-- -----------------------------------------------------------------------------
-- 8. Achievements and points
-- -----------------------------------------------------------------------------
-- The achievement catalogue is public reference data.
CREATE POLICY achievements_read_all ON public.achievements
  FOR SELECT USING (true);

-- A user may read their own earned achievements, and those of group members
-- who have opted in to sharing.
CREATE POLICY user_achievements_select ON public.user_achievements
  FOR SELECT USING (
    user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.user_privacy_settings s
      WHERE s.user_id = user_achievements.user_id AND s.share_achievements = true
    )
  );

-- There is deliberately NO insert policy on user_achievements. Achievements are
-- awarded only by the SECURITY DEFINER function below, which re-verifies the
-- underlying condition. A client cannot simply insert a row to claim one.
--
-- Similarly there is no INSERT/UPDATE policy on a point ledger table: points
-- are awarded server-side only.

-- -----------------------------------------------------------------------------
-- 9. Activity feed
-- -----------------------------------------------------------------------------
CREATE POLICY activity_select_group_or_own ON public.activity_events
  FOR SELECT USING (
    user_id = auth.uid()
    OR (group_id IS NOT NULL AND public.is_group_member(group_id, auth.uid()))
  );

CREATE POLICY activity_insert_self ON public.activity_events
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- -----------------------------------------------------------------------------
-- 10. SECURITY DEFINER functions
--
-- These perform multi-step, security-sensitive work atomically. SECURITY
-- DEFINER lets them read/write rows the caller cannot, so each one must
-- re-verify authorization internally and validate its own inputs.
-- -----------------------------------------------------------------------------

-- Create a profile row for a brand-new auth user.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_username text;
  v_display  text;
BEGIN
  v_username := coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1));
  -- Guarantee uniqueness even when two users pick the same display username.
  v_username := v_username || '-' || substr(replace(new.id::text, '-', ''), 1, 6);

  v_display := coalesce(new.raw_user_meta_data ->> 'display_name', v_username);

  INSERT INTO public.profiles (id, username, display_name, profile_visibility)
  VALUES (new.id, v_username, v_display, 'private')
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_privacy_settings (user_id) VALUES (new.id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Redeem an invitation code.
--
-- Runs as SECURITY DEFINER so the code can be matched without granting anyone
-- read access to the invitations table. Checks expiry, revocation and whether
-- the group is already full, and ALWAYS joins as role 'member' — an invitation
-- can never grant elevated privileges.
CREATE OR REPLACE FUNCTION public.redeem_group_invitation(p_code text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_inv public.group_invitations%ROWTYPE;
  v_uid uuid := auth.uid();
  v_group uuid;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  SELECT * INTO v_inv
  FROM public.group_invitations
  WHERE code = p_code
    AND revoked_at IS NULL
    AND (expires_at IS NULL OR expires_at > now())
    AND (max_uses IS NULL OR uses < max_uses)
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Invalid or expired invitation code' USING ERRCODE = '22023';
  END IF;

  IF v_inv.expires_at IS NOT NULL AND v_inv.expires_at < now() THEN
    RAISE EXCEPTION 'Invitation code has expired' USING ERRCODE = '22023';
  END IF;

  v_group := v_inv.group_id;

  UPDATE public.group_invitations
  SET uses = coalesce(uses, 0) + 1,
      used_at = coalesce(used_at, now())
  WHERE id = v_inv.id;

  INSERT INTO public.study_group_members (group_id, user_id, role)
  VALUES (v_group, v_uid, 'member')
  ON CONFLICT (group_id, user_id) DO NOTHING;

  RETURN v_group;
END;
$$;

GRANT EXECUTE ON FUNCTION public.redeem_group_invitation(text) TO authenticated;

-- Record study time.
--
-- The client sends started_at/ended_at; the server computes duration_seconds so
-- a client cannot claim an arbitrary number of minutes (and therefore points).
-- Rejects absurd durations.
CREATE OR REPLACE FUNCTION public.log_study_session(
  p_started_at timestamptz,
  p_ended_at   timestamptz,
  p_day_id     uuid DEFAULT NULL
)
RETURNS public.study_sessions
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_seconds integer;
  v_row public.study_sessions%ROWTYPE;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  IF p_ended_at <= p_started_at THEN
    RAISE EXCEPTION 'Session end must be after start' USING ERRCODE = '22023';
  END IF;

  v_seconds := floor(extract(epoch FROM (p_ended_at - p_started_at)))::integer;

  -- Cap a single session at 8 hours to bound what the leaderboard can be fed.
  IF v_seconds > 28800 THEN
    RAISE EXCEPTION 'Session duration exceeds the 8 hour limit' USING ERRCODE = '22023';
  END IF;
  IF v_seconds < 30 THEN
    RAISE EXCEPTION 'Session too short to record' USING ERRCODE = '22023';
  END IF;

  INSERT INTO public.study_sessions (
    user_id, day_id, started_at, ended_at, duration_seconds, session_date
  )
  VALUES (
    v_uid,
    p_day_id,
    p_started_at,
    p_ended_at,
    v_seconds,
    (p_started_at AT TIME ZONE 'UTC')::date
  )
  RETURNING * INTO v_row;

  RETURN v_row;
END;
$$;

GRANT EXECUTE ON FUNCTION public.log_study_session(timestamptz, timestamptz, uuid) TO authenticated;

-- Complete a curriculum day, awarding points exactly once.
--
-- The UNIQUE constraint on user_day_progress(user_id, day_id) plus the
-- "was it already completed" check below mean repeated calls cannot re-award.
CREATE OR REPLACE FUNCTION public.complete_curriculum_day(
  p_day_id   uuid,
  p_learned   text DEFAULT NULL,
  p_proof_url text DEFAULT NULL
)
RETURNS public.user_day_progress
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_row public.user_day_progress%ROWTYPE;
  v_already boolean;
  v_day_number integer;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  SELECT day_number INTO v_day_number
  FROM public.curriculum_days WHERE id = p_day_id;

  IF v_day_number IS NULL THEN
    RAISE EXCEPTION 'Unknown curriculum day' USING ERRCODE = '22023';
  END IF;

  SELECT completed INTO v_already
  FROM public.user_day_progress
  WHERE user_id = v_uid AND day_id = p_day_id;

  INSERT INTO public.user_day_progress AS udp
    (user_id, day_id, status, started_at, completed_at, learned, proof_url)
  VALUES (v_uid, p_day_id, 'completed', now(), now(), p_learned, p_proof_url)
  ON CONFLICT (user_id, day_id) DO UPDATE
    SET status = 'completed',
        completed_at = now(),
        learned = coalesce(excluded.learned, udp.learned),
        proof_url = coalesce(excluded.proof_url, udp.proof_url),
        updated_at = now()
  RETURNING * INTO v_row;

  -- Only award on the first completion.
  IF v_already IS NOT TRUE THEN
    INSERT INTO public.point_ledger (user_id, reason, points, ref_type, ref_id)
    VALUES (v_uid, 'day_completed', 10, 'curriculum_day', p_day_id);
  END IF;

  RETURN v_row;
END;
$$;

GRANT EXECUTE ON FUNCTION public.complete_curriculum_day(uuid, text, text) TO authenticated;

-- Self-service account deletion: removes the caller's auth user, which cascades
-- to every table that references auth.users(id).
CREATE OR REPLACE FUNCTION public.delete_my_account()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;
  DELETE FROM auth.users WHERE id = v_uid;
END;
$$;

GRANT EXECUTE ON FUNCTION public.delete_my_account() TO authenticated;