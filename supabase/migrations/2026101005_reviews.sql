-- =============================================================================
-- Migration: 20261010_05_reviews
--
-- Reviews are structured, not free-form: the fields exist so the same questions
-- can be compared week to week.
--
-- Points follow the documented, transparent rules and nothing else:
--   day_completed     10
--   exercise_completed  5
--   weekly_review      5
--   challenge_completed  (bonus, set per challenge)
--
-- A monthly review deliberately awards nothing. Adding an undocumented award
-- would break the promise that the point table is visible and fixed.
-- =============================================================================

-- Current ISO year/week, used as the default period by the client.
CREATE OR REPLACE FUNCTION public.current_iso_period()
RETURNS TABLE (iso_year integer, iso_week integer)
LANGUAGE sql
STABLE
AS $$
  SELECT
    (extract(isoyear FROM now()))::int,
    (extract(week    FROM now()))::int;
$$;

GRANT EXECUTE ON FUNCTION public.current_iso_period() TO authenticated;

-- -----------------------------------------------------------------------------
-- Weekly review
--
-- Idempotent per (user, year, week): re-submitting updates the review but can
-- only ever produce one 5-point award, enforced by the ledger's unique index.
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.submit_weekly_review(
  p_iso_year      integer,
  p_iso_week      integer,
  p_strongest     text DEFAULT '',
  p_revision      text DEFAULT '',
  p_blockers      text DEFAULT '',
  p_next_goal     text DEFAULT '',
  p_planned_tasks integer DEFAULT 0,
  p_completed_tasks integer DEFAULT 0,
  p_self_assessment text DEFAULT ''
)
RETURNS public.weekly_reviews
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid     uuid := auth.uid();
  v_row     public.weekly_reviews%ROWTYPE;
  v_existed boolean;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  IF p_iso_year < 2020 OR p_iso_year > 2100
     OR p_iso_week < 1 OR p_iso_week > 53 THEN
    RAISE EXCEPTION 'Invalid ISO year or week' USING ERRCODE = '22023';
  END IF;

  IF p_planned_tasks < 0 OR p_completed_tasks < 0 THEN
    RAISE EXCEPTION 'Task counts cannot be negative' USING ERRCODE = '22023';
  END IF;

  -- The review should describe reality, so completed cannot exceed planned
  -- when both are supplied. Allowing the reverse would make "planned vs
  -- completed" a meaningless comparison in the review UI.
  IF p_planned_tasks > 0 AND p_completed_tasks > p_planned_tasks THEN
    RAISE EXCEPTION 'Completed tasks cannot exceed planned tasks' USING ERRCODE = '22023';
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM public.weekly_reviews
    WHERE user_id = v_uid AND iso_year = p_iso_year AND iso_week = p_iso_week
  ) INTO v_existed;

  INSERT INTO public.weekly_reviews
    (user_id, iso_year, iso_week, strongest_topics, revision_topics, blockers,
     next_week_goal, planned_tasks, completed_tasks, self_assessment, submitted_at)
  VALUES
    (v_uid, p_iso_year, p_iso_week, p_strongest, p_revision, p_blockers,
     p_next_goal, p_planned_tasks, p_completed_tasks, p_self_assessment, now())
  ON CONFLICT (user_id, iso_year, iso_week) DO UPDATE SET
    strongest_topics = EXCLUDED.strongest_topics,
    revision_topics = EXCLUDED.revision_topics,
    blockers = EXCLUDED.blockers,
    next_week_goal = EXCLUDED.next_week_goal,
    planned_tasks = EXCLUDED.planned_tasks,
    completed_tasks = EXCLUDED.completed_tasks,
    self_assessment = EXCLUDED.self_assessment,
    submitted_at = now()
  RETURNING * INTO v_row;

  IF NOT v_existed THEN
    INSERT INTO public.point_ledger (user_id, reason, points, ref_type, ref_id)
    VALUES (v_uid, 'weekly_review', 5, 'weekly_review', v_row.id)
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN v_row;
END;
$$;

GRANT EXECUTE ON FUNCTION public.submit_weekly_review(
  integer, integer, text, text, text, text, integer, integer, text
) TO authenticated;

-- -----------------------------------------------------------------------------
-- Monthly review — same shape, no points (see the note at the top).
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.submit_monthly_review(
  p_year            integer,
  p_month           integer,
  p_skills          text DEFAULT '',
  p_revision        text DEFAULT '',
  p_self_assessment text DEFAULT '',
  p_biggest_win     text DEFAULT '',
  p_main_difficulty text DEFAULT '',
  p_next_priorities text DEFAULT '',
  p_projects_completed integer DEFAULT 0,
  p_study_minutes   integer DEFAULT 0
)
RETURNS public.monthly_reviews
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid uuid := auth.uid();
  v_row public.monthly_reviews%ROWTYPE;
BEGIN
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Authentication required' USING ERRCODE = '28000';
  END IF;

  IF p_month < 1 OR p_month > 12 OR p_year < 2020 OR p_year > 2100 THEN
    RAISE EXCEPTION 'Invalid year or month' USING ERRCODE = '22023';
  END IF;

  IF p_projects_completed < 0 OR p_study_minutes < 0 THEN
    RAISE EXCEPTION 'Counts cannot be negative' USING ERRCODE = '22023';
  END IF;

  INSERT INTO public.monthly_reviews
    (user_id, year, month, skills_practised, revision_topics, self_assessment,
     biggest_win, main_difficulty, next_priorities, projects_completed,
     study_minutes, submitted_at)
  VALUES
    (v_uid, p_year, p_month, p_skills, p_revision, p_self_assessment,
     p_biggest_win, p_main_difficulty, p_next_priorities, p_projects_completed,
     p_study_minutes, now())
  ON CONFLICT (user_id, year, month) DO UPDATE SET
    skills_practised = EXCLUDED.skills_practised,
    revision_topics = EXCLUDED.revision_topics,
    self_assessment = EXCLUDED.self_assessment,
    biggest_win = EXCLUDED.biggest_win,
    main_difficulty = EXCLUDED.main_difficulty,
    next_priorities = EXCLUDED.next_priorities,
    projects_completed = EXCLUDED.projects_completed,
    study_minutes = EXCLUDED.study_minutes,
    submitted_at = now()
  RETURNING * INTO v_row;

  RETURN v_row;
END;
$$;

GRANT EXECUTE ON FUNCTION public.submit_monthly_review(
  integer, integer, text, text, text, text, text, text, integer, integer
) TO authenticated;

-- -----------------------------------------------------------------------------
-- Review history for the current user, newest first.
-- Explicitly scoped by auth.uid() rather than relying on the caller to filter.
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.my_weekly_reviews(p_limit integer DEFAULT 12)
RETURNS SETOF public.weekly_reviews
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.weekly_reviews
  WHERE user_id = auth.uid()
  ORDER BY iso_year DESC, iso_week DESC
  LIMIT greatest(1, least(p_limit, 52));
$$;

GRANT EXECUTE ON FUNCTION public.my_weekly_reviews(integer) TO authenticated;

CREATE OR REPLACE FUNCTION public.my_monthly_reviews(p_limit integer DEFAULT 12)
RETURNS SETOF public.monthly_reviews
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.monthly_reviews
  WHERE user_id = auth.uid()
  ORDER BY year DESC, month DESC
  LIMIT greatest(1, least(p_limit, 24));
$$;

GRANT EXECUTE ON FUNCTION public.my_monthly_reviews(integer) TO authenticated;

-- -----------------------------------------------------------------------------
-- Leaderboard fix: `revision` challenges and achievements read
-- weekly_reviews.submitted_at, which exists. Monthly reviews award no points,
-- so nothing else needs wiring here.
--
-- The weekly-review award above uses ref_id = the review row id, which is
-- stable across re-submissions because the ON CONFLICT upsert preserves the
-- original id. Combined with the ledger's unique index, that means re-submitting
-- the same week can never award twice.
-- -----------------------------------------------------------------------------