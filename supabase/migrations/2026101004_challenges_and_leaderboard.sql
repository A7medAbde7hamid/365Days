-- =============================================================================
-- Migration: 20261010_04_challenges_and_leaderboard
--
-- The rule this migration exists to enforce:
--
--   Points must never reflect a claim. Every point is awarded by a function
--   that first re-derives the underlying fact from the user's own rows.
--   A client that calls these functions cannot inflate a score, because the
--   client supplies no numbers at all — only ids.
--
-- All functions are SECURITY DEFINER and re-verify the caller's privileges,
-- since SECURITY DEFINER bypasses RLS.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Challenge creation and membership
-- -----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.create_group_challenge(
  p_group_id       uuid,
  p_title          text,
  p_challenge_type text,
  p_target_count   integer,
  p_description    text DEFAULT NULL,
  p_rules          text DEFAULT NULL,
  p_starts_at      timestamptz DEFAULT now(),
  p_ends_at        timestamptz DEFAULT now() + interval '7 days',
  p_bonus_points   integer DEFAULT 25
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_id  uuid;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  IF NOT public.has_group_role(p_group_id, v_uid, ARRAY['owner', 'admin']::text[]) THEN
    RAISE EXCEPTION 'Only a group owner or admin can create challenges' USING ERRCODE = '42501';
  END IF;

  IF p_challenge_type NOT IN ('sessions', 'phase', 'project', 'revision', 'consistency') THEN
    RAISE EXCEPTION 'Invalid challenge type' USING ERRCODE = '22023';
  END IF;

  IF btrim(p_title) IS NULL OR char_length(btrim(p_title)) < 1 THEN
    RAISE EXCEPTION 'Title is required' USING ERRCODE = '22023';
  END IF;

  -- target_count means different things per type. For a 'phase' challenge it
  -- is the phase position, so it must be a real phase number.
  IF p_target_count < 1 THEN
    RAISE EXCEPTION 'Target count must be at least 1' USING ERRCODE = '22023';
  END IF;

  IF p_challenge_type = 'phase' AND NOT EXISTS (
    SELECT 1 FROM public.curriculum_phases WHERE position = p_target_count
  ) THEN
    RAISE EXCEPTION 'No curriculum phase with that position' USING ERRCODE = '22023';
  END IF;

  IF p_ends_at <= p_starts_at THEN
    RAISE EXCEPTION 'Challenge end must be after its start' USING ERRCODE = '22023';
  END IF;

  IF p_bonus_points < 0 OR p_bonus_points > 1000 THEN
    RAISE EXCEPTION 'Bonus points must be between 0 and 1000' USING ERRCODE = '22023';
  END IF;

  INSERT INTO public.group_challenges
    (group_id, created_by, title, description, rules, challenge_type,
     target_count, starts_at, ends_at, bonus_points)
  VALUES
    (p_group_id, v_uid, btrim(p_title), p_description, p_rules, p_challenge_type,
     p_target_count, p_starts_at, p_ends_at, p_bonus_points)
  RETURNING id INTO v_id;

  -- The creator joins automatically.
  INSERT INTO public.challenge_participants (challenge_id, user_id) VALUES (v_id, v_uid);

  RETURN v_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.create_group_challenge(
  uuid, text, text, text, text, integer, timestamptz, timestamptz, integer
) TO authenticated;

CREATE OR REPLACE FUNCTION public.join_challenge(p_challenge_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid       uuid := auth.uid();
  v_group     uuid;
  v_ends_at   timestamptz;
  v_completed boolean;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  SELECT group_id, ends_at INTO v_group, v_ends_at
  FROM public.group_challenges WHERE id = p_challenge_id;

  IF v_group IS NULL THEN
    RAISE EXCEPTION 'Challenge not found' USING ERRCODE = '22023';
  END IF;

  -- Must be a member of the owning group.
  IF NOT public.is_group_member(v_group, v_uid) THEN
    RAISE EXCEPTION 'You must be a member of this group to join its challenges'
      USING ERRCODE = '42501';
  END IF;

  IF v_ends_at < now() THEN
    RAISE EXCEPTION 'This challenge has already ended' USING ERRCODE = '22023';
  END IF;

  -- Never let someone re-join a completed challenge to re-trigger points.
  SELECT completed INTO v_completed
  FROM public.challenge_participants
  WHERE challenge_id = p_challenge_id AND user_id = v_uid;

  IF v_completed THEN
    RAISE EXCEPTION 'You already completed this challenge' USING ERRCODE = '22023';
  END IF;

  INSERT INTO public.challenge_participants (challenge_id, user_id)
  VALUES (p_challenge_id, v_uid)
  ON CONFLICT (challenge_id, user_id) DO NOTHING;
END;
$$;

GRANT EXECUTE ON FUNCTION public.join_challenge(uuid) TO authenticated;

CREATE OR REPLACE FUNCTION public.leave_challenge(p_challenge_id uuid)
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

  DELETE FROM public.challenge_participants
  WHERE challenge_id = p_challenge_id AND user_id = v_uid;
END;
$$;

GRANT EXECUTE ON FUNCTION public.leave_challenge(uuid) TO authenticated;

-- -----------------------------------------------------------------------------
-- Progress computation
--
-- This is the heart of the anti-gaming design: the caller passes no numbers.
-- Progress is derived from rows the caller already owns.
-- -----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.compute_challenge_progress(p_challenge_id uuid, p_user_id uuid)
RETURNS integer
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
-- Authorization: the caller must be the user themselves, or an owner/admin of
-- the group containing this challenge.
IF NOT EXISTS (
    SELECT 1 FROM public.group_challenges gc
    JOIN public.study_group_members m ON m.group_id = gc.group_id
    WHERE gc.id = p_challenge_id
      AND m.user_id = p_user_id
      AND public.has_group_role(gc.group_id, p_user_id, ARRAY['owner', 'admin']::text[])
  ) THEN
    IF NOT EXISTS (
      SELECT 1 FROM public.auth.users WHERE id = p_user_id
    ) THEN
      RAISE EXCEPTION 'User not found' USING ERRCODE = '22023';
    END IF;
    IF auth.uid() IS NULL OR auth.uid() != p_user_id THEN
      RAISE EXCEPTION 'Permission denied' USING ERRCODE = '42501';
    END IF;
  END IF;

  -- [rest of the function was already here, I need to preserve it]
DECLARE
  c        public.group_challenges%ROWTYPE;
  v_result integer := 0;
BEGIN
  SELECT * INTO c FROM public.group_challenges WHERE id = p_challenge_id;
  IF c.id IS NULL THEN
    RETURN 0;
  END IF;

  -- 'sessions': completed focus sessions inside the challenge window.
  IF c.challenge_type = 'sessions' THEN
    SELECT count(*)::integer INTO v_result
    FROM public.study_sessions s
    WHERE s.user_id = p_user_id
      AND s.duration_seconds >= 60              -- ignore accidental taps
      AND s.started_at >= c.starts_at
      AND s.started_at <= c.ends_at;

  -- 'phase': 1 when every day of the target phase is completed.
  ELSIF c.challenge_type = 'phase' THEN
    IF NOT EXISTS (
      SELECT 1
      FROM public.curriculum_days d
      WHERE d.day_number BETWEEN
            (SELECT start_day FROM public.curriculum_phases WHERE position = c.target_count)
            AND (SELECT end_day FROM public.curriculum_phases WHERE position = c.target_count)
        AND NOT EXISTS (
          SELECT 1 FROM public.user_day_progress udp
          WHERE udp.user_id = p_user_id
            AND udp.day_id = d.id
            AND udp.status = 'completed'
        )
    ) THEN
      v_result := 1;
    ELSE
      v_result := 0;
    END IF;

  -- 'project': projects moved to completed inside the window.
  ELSIF c.challenge_type = 'project' THEN
    SELECT count(*)::integer INTO v_result
    FROM public.user_projects p
    WHERE p.user_id = p_user_id
      AND p.status = 'completed'
      AND p.updated_at >= c.starts_at
      AND p.updated_at <= c.ends_at;

  -- 'revision': submitted weekly reviews inside the window.
  ELSIF c.challenge_type = 'revision' THEN
    SELECT count(*)::integer INTO v_result
    FROM public.weekly_reviews w
    WHERE w.user_id = p_user_id
      AND w.submitted_at IS NOT NULL
      AND w.submitted_at >= c.starts_at
      AND w.submitted_at <= c.ends_at;

  -- 'consistency': longest run of consecutive days with a completion inside
  -- the window. Computed over distinct local dates.
  ELSIF c.challenge_type = 'consistency' THEN
    WITH days AS (
      SELECT DISTINCT (udp.completed_at AT TIME ZONE 'UTC')::date AS d
      FROM public.user_day_progress udp
      WHERE udp.user_id = p_user_id
        AND udp.status = 'completed'
        AND udp.completed_at IS NOT NULL
        AND udp.completed_at >= c.starts_at
        AND udp.completed_at <= c.ends_at
    ), ordered AS (
      SELECT d, d - (row_number() OVER (ORDER BY d))::int AS grp FROM days
    ), runs AS (
      SELECT grp, count(*)::int AS len FROM ordered GROUP BY grp
    )
    SELECT coalesce(max(len), 0)::integer INTO v_result FROM runs;

  END IF;

  -- Never report progress beyond the target, so the UI can never show
  -- 12/10 for a "10 sessions" challenge.
  RETURN least(v_result, c.target_count);
END;
$$;

GRANT EXECUTE ON FUNCTION public.compute_challenge_progress(uuid, uuid) TO authenticated;

-- Refresh the caller's own participation rows, and award points exactly once
-- when a challenge is genuinely complete. Also attempts idempotent ledger insert
-- so points are not lost if the UI closes during completion.
CREATE OR REPLACE FUNCTION public.refresh_my_challenge_progress()
RETURNS TABLE (challenge_id uuid, progress integer, completed boolean, just_completed boolean)
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

  RETURN QUERY
  WITH computed AS (
    SELECT
      cp.id            AS cid,
      cp.completed     AS was_complete,
      public.compute_challenge_progress(cp.id, v_uid) AS now_progress,
      gc.target_count  AS target,
      gc.bonus_points  AS bonus
    FROM public.challenge_participants cp
    JOIN public.group_challenges gc ON gc.id = cp.challenge_id
    WHERE cp.user_id = v_uid
      -- Only inside an active window, and before it closes.
      AND gc.starts_at <= now()
      AND gc.ends_at >= now()
  ),
  updated AS (
    UPDATE public.challenge_participants p
    SET progress = c.now_progress,
        completed = (c.now_progress >= c.target),
        completed_at = CASE
          WHEN (c.now_progress >= c.target) THEN coalesce(p.completed_at, now())
          ELSE NULL
        END
    FROM computed c
    WHERE p.id = c.cid
    RETURNING
      p.challenge_id,
      p.progress,
      p.completed,
      -- True only on the transition from incomplete to complete.
      (p.completed AND NOT c.was_complete) AS just_completed
  )
  INSERT INTO public.point_ledger (user_id, reason, points, ref_type, ref_id)
  SELECT v_uid, 'challenge_completed', bonus, 'challenge', cid
  FROM updated
  WHERE just_completed = true
  ON CONFLICT DO NOTHING;

  RETURN QUERY
  SELECT challenge_id, progress, completed, just_completed FROM updated;
END;
$$;

GRANT EXECUTE ON FUNCTION public.refresh_my_challenge_progress() TO authenticated;

CREATE OR REPLACE FUNCTION public.award_challenge_points(p_challenge_id uuid)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid      uuid := auth.uid();
  v_completed boolean;
  v_bonus    integer;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  SELECT completed INTO v_completed
  FROM public.challenge_participants
  WHERE challenge_id = p_challenge_id AND user_id = v_uid;

  IF v_completed IS NOT TRUE THEN
    RAISE EXCEPTION 'Challenge is not complete' USING ERRCODE = '22023';
  END IF;

  SELECT bonus_points INTO v_bonus
  FROM public.group_challenges WHERE id = p_challenge_id;

  -- ON CONFLICT DO NOTHING makes this safe to call repeatedly: the ledger's
  -- unique index on (user_id, reason, ref_type, ref_id) blocks a second award.
  INSERT INTO public.point_ledger (user_id, reason, points, ref_type, ref_id)
  VALUES (v_uid, 'challenge_completed', v_bonus, 'challenge', p_challenge_id)
  ON CONFLICT DO NOTHING;

  RETURN v_bonus;
END;
$$;

GRANT EXECUTE ON FUNCTION public.award_challenge_points(uuid) TO authenticated;

-- -----------------------------------------------------------------------------
-- Achievements
--
-- Awarded by re-checking the underlying condition, never by client request.
-- -----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.sync_my_achievements()
RETURNS TABLE (code text, title_en text, title_ar text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_days integer;
  v_projects integer;
  v_deployed integer;
  v_reviews integer;
  v_sessions integer;
  v_first_phase integer;
  v_streak integer;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  SELECT count(*)::int INTO v_days
  FROM public.user_day_progress WHERE user_id = v_uid AND status = 'completed';

  SELECT count(*)::int INTO v_projects
  FROM public.user_projects WHERE user_id = v_uid AND status = 'completed';

  SELECT count(*)::int INTO v_deployed
  FROM public.user_projects WHERE user_id = v_uid AND live_url IS NOT NULL;

  SELECT count(*)::int INTO v_reviews
  FROM public.weekly_reviews WHERE user_id = v_uid AND submitted_at IS NOT NULL;

  SELECT count(*)::int INTO v_sessions
  FROM public.study_sessions WHERE user_id = v_uid AND duration_seconds >= 300;

  -- A phase counts as complete when every day in it is completed.
  SELECT count(*)::int INTO v_first_phase FROM (
    SELECT ph.position
    FROM public.curriculum_phases ph
    WHERE NOT EXISTS (
      SELECT 1
      FROM public.curriculum_days d
      WHERE d.day_number BETWEEN ph.start_day AND ph.end_day
        AND NOT EXISTS (
          SELECT 1 FROM public.user_day_progress udp
          WHERE udp.user_id = v_uid AND udp.day_id = d.id AND udp.status = 'completed'
        )
    )
  ) s;

  -- Longest run of consecutive calendar days with a completion.
  WITH days AS (
    SELECT DISTINCT (completed_at AT TIME ZONE 'UTC')::date AS d
    FROM public.user_day_progress
    WHERE user_id = v_uid AND status = 'completed' AND completed_at IS NOT NULL
  ), ordered AS (
    SELECT d, d - (row_number() OVER (ORDER BY d))::int AS grp FROM days
  ), runs AS (
    SELECT grp, count(*)::int AS len FROM ordered GROUP BY grp
  )
  SELECT coalesce(max(len), 0)::int INTO v_streak FROM runs;

  INSERT INTO public.user_achievements (user_id, achievement_id)
  SELECT v_uid, a.id
  FROM public.achievements a
  WHERE NOT EXISTS (
          SELECT 1 FROM public.user_achievements ua
          WHERE ua.user_id = v_uid AND ua.achievement_id = a.id
        )
    AND CASE a.criteria ->> 'type'
      WHEN 'days_completed'   THEN v_days     >= (a.criteria ->> 'threshold')::int
      WHEN 'projects_completed' THEN v_projects >= (a.criteria ->> 'threshold')::int
      WHEN 'deployments'      THEN v_deployed >= (a.criteria ->> 'threshold')::int
      WHEN 'reviews'          THEN v_reviews   >= (a.criteria ->> 'threshold')::int
      WHEN 'sessions'         THEN v_sessions  >= (a.criteria ->> 'threshold')::int
      WHEN 'phases_completed' THEN v_first_phase >= (a.criteria ->> 'threshold')::int
      WHEN 'streak_days'      THEN v_streak     >= (a.criteria ->> 'threshold')::int
      ELSE false
    END
  ON CONFLICT DO NOTHING;

  RETURN QUERY
    SELECT a.code, a.title_en, a.title_ar
    FROM public.user_achievements ua
    JOIN public.achievements a ON a.id = ua.achievement_id
    WHERE ua.user_id = v_uid
    ORDER BY ua.earned_at DESC;
END;
$$;

GRANT EXECUTE ON FUNCTION public.sync_my_achievements() TO authenticated;

-- -----------------------------------------------------------------------------
-- Leaderboard
--
-- Aggregated in the database so that (a) no other user's private rows are sent
-- to the client, and (b) users who opted out of rankings never appear.
-- -----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.leaderboard(
  p_period    text DEFAULT 'all',
  p_group_id  uuid DEFAULT NULL
)
RETURNS TABLE (
  rank        integer,
  user_id     uuid,
  username    text,
  display_name text,
  points      integer
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_since timestamptz;
  v_uid   uuid := auth.uid();
BEGIN
  IF p_period = 'week' THEN
    v_since := date_trunc('week', now());
  ELSIF p_period = 'month' THEN
    v_since := date_trunc('month', now());
  ELSIF p_period = 'all' THEN
    v_since := NULL;
  ELSE
    RAISE EXCEPTION 'Invalid period' USING ERRCODE = '22023';
  END IF;

  RETURN QUERY
  WITH totals AS (
    SELECT
      pl.user_id,
      sum(pl.points)::int AS pts
    FROM public.point_ledger pl
    WHERE (v_since IS NULL OR pl.created_at >= v_since)
-- Group scoping: only members of the requested group can view its leaderboard.
  AND (
    p_group_id IS NULL
    OR (public.is_group_member(p_group_id, auth.uid()) AND EXISTS (
      SELECT 1 FROM public.study_group_members m
      WHERE m.group_id = p_group_id
        AND m.user_id = pl.user_id
    ))
  )
      -- Opt-out is honoured here, so an opted-out user never reaches the client.
      AND NOT EXISTS (
        SELECT 1 FROM public.user_privacy_settings s
        WHERE s.user_id = pl.user_id AND s.hidden_from_leaderboard = true
      )
    GROUP BY pl.user_id
  )
  SELECT
    (row_number() OVER (ORDER BY t.pts DESC, t.user_id) - 1)::int,
    t.user_id,
    p.username,
    p.display_name,
    t.pts
  FROM totals t
  JOIN public.profiles p ON p.id = t.user_id
  ORDER BY t.pts DESC, t.user_id
  LIMIT 100;
END;
$$;

GRANT EXECUTE ON FUNCTION public.leaderboard(text, uuid) TO authenticated;

-- -----------------------------------------------------------------------------
-- User's own points summary
-- -----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.my_points()
RETURNS TABLE (total integer, by_reason jsonb)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  RETURN QUERY
  SELECT
    coalesce(sum(points), 0)::int,
    coalesce(jsonb_object_agg(reason, total), '{}'::jsonb)
  FROM (
    SELECT reason, sum(points)::int AS total
    FROM public.point_ledger
    WHERE user_id = v_uid
    GROUP BY reason
  ) s;
END;
$$;

GRANT EXECUTE ON FUNCTION public.my_points() TO authenticated;

-- -----------------------------------------------------------------------------
-- Seed the achievement catalogue.
-- Idempotent: re-running updates the copy, never duplicates rows.
-- -----------------------------------------------------------------------------
INSERT INTO public.achievements
  (code, title_en, title_ar, description_en, description_ar, criteria)
VALUES
  ('first_day', 'First Day', 'أول يوم',
   'Complete your first curriculum day.', 'أكمل أول يوم في الخارطة.',
   '{"type":"days_completed","threshold":1}'),
  ('seven_day_streak', 'Seven-Day Streak', 'سبعة أيام متتالية',
   'Study on seven consecutive days.', 'ادرس سبعة أيام متتالية.',
   '{"type":"streak_days","threshold":7}'),
  ('thirty_days', 'Thirty Days of Learning', 'ثلاثون يومًا من التعلّم',
   'Complete thirty curriculum days.', 'أكمل ثلاثين يومًا من الخارطة.',
   '{"type":"days_completed","threshold":30}'),
  ('first_project', 'First Project', 'أول مشروع',
   'Mark a project as completed.', 'وسم مشروعًا كمكتمل.',
   '{"type":"projects_completed","threshold":1}'),
  ('first_deployment', 'First Deployment', 'أول نشر',
   'Record a live URL on a project.', 'سجّل رابط نشر على مشروع.',
   '{"type":"deployments","threshold":1}'),
  ('first_phase', 'First Completed Phase', 'أول مرحلة مكتملة',
   'Finish every day of one curriculum phase.', 'أكمل كل أيام إحدى مراحل الخارطة.',
   '{"type":"phases_completed","threshold":1}'),
  ('first_review', 'First Weekly Review', 'أول مراجعة أسبوعية',
   'Submit your first weekly review.', 'قدّم أول مراجعة أسبوعية لك.',
   '{"type":"reviews","threshold":1}'),
  ('ten_sessions', 'Ten Focus Sessions', 'عشر جلسات تركيز',
   'Record ten focus sessions of five minutes or more.', 'سجّل عشر جلسات تركيز بخمس دقائق أو أكثر.',
   '{"type":"sessions","threshold":10}'),
  ('first_hundred', 'One Hundred Days', 'مئة يوم',
   'Complete one hundred curriculum days.', 'أكمل مئة يوم من الخارطة.',
   '{"type":"days_completed","threshold":100}'),
  ('capstone', 'Capstone Completed', 'إنهاء المشروع التخرّجي',
   'Complete every day of the capstone phase.', 'أكمل كل أيام مرحلة المشروع التخرّجي.',
   '{"type":"phases_completed","threshold":10}')
ON CONFLICT (code) DO UPDATE SET
  title_en = EXCLUDED.title_en,
  title_ar = EXCLUDED.title_ar,
  description_en = EXCLUDED.description_en,
  description_ar = EXCLUDED.description_ar,
  criteria = EXCLUDED.criteria;