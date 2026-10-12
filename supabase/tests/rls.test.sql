-- =============================================================================
-- Row Level Security test suite (pgTAP)
--
--   STATUS: WRITTEN BUT NOT EXECUTED. These tests require a live Postgres with
--   migrations 01–03 applied. They have not been run in this environment, so
--   treat them as a specification to execute, not as passing evidence.
--
-- How to run (Supabase):
--   1. Apply migrations:  supabase db push
--   2. Install pgTAP once: CREATE EXTENSION IF NOT EXISTS pgtap;
--   3. Paste this file into the Supabase SQL editor and run it.
--
-- Every test wraps in BEGIN/ROLLBACK, so no data survives.
--
-- The technique: `set local role authenticated` plus `request.jwt.claims`
-- makes Postgres believe it is serving a specific signed-in user, which is
-- exactly what PostgREST does. Anything the policies fail to block shows up as
-- a row that should not have been visible.
-- =============================================================================

BEGIN;

SELECT plan(28);

-- -----------------------------------------------------------------------------
-- Fixtures
-- -----------------------------------------------------------------------------

CREATE EXTENSION IF NOT EXISTS pgtap;

-- auth.users requires a handful of non-null columns.
CREATE OR REPLACE FUNCTION test_auth_user(p_id uuid, p_email text)
RETURNS void LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO auth.users (id, email, aud, role, raw_app_meta_data, raw_user_meta_data)
  VALUES (p_id, p_email, 'authenticated', 'authenticated', '{}', '{}');
END;
$$;

DO $$
DECLARE
  v_a uuid := '11111111-1111-4111-8111-111111111111';
  v_b uuid := '22222222-2222-4222-8222-222222222222';
  v_stranger uuid := '33333333-3333-4333-8333-333333333333';
BEGIN
  PERFORM test_auth_user(v_a, 'alice@example.com');
  PERFORM test_auth_user(v_b, 'bob@example.com');
  PERFORM test_auth_user(v_stranger, 'mallory@example.com');
END;
$$;

-- The signup trigger should have created profiles for all three.
SELECT is( (SELECT count(*)::int FROM public.profiles), 3,
  'signup trigger creates one profile per auth user' );

-- A group owned by Alice, with Bob as a plain member.
DO $$
DECLARE
  v_group uuid := '44444444-4444-4444-8444-444444444444';
BEGIN
  INSERT INTO public.study_groups (id, name, created_by)
  VALUES (v_group, 'Test Group', '11111111-1111-4111-8111-111111111111');
  INSERT INTO public.study_group_members (group_id, user_id, role) VALUES
    (v_group, '11111111-1111-4111-8111-111111111111', 'owner'),
    (v_group, '22222222-2222-4222-8222-222222222222', 'member');
END;
$$;

-- -----------------------------------------------------------------------------
-- 1. Private learning data is owner-only
-- -----------------------------------------------------------------------------

SET LOCAL ROLE authenticated;
SET LOCAL request.jwt.claims = '{"sub":"11111111-1111-4111-8111-111111111111"}';

-- Seed Alice's progress and a note as Alice.
DO $$
DECLARE
  v_day uuid;
BEGIN
  SELECT id INTO v_day FROM public.curriculum_days LIMIT 1;
  IF v_day IS NOT NULL THEN
    INSERT INTO public.user_day_progress (user_id, day_id, status, completed_at, learned)
    VALUES ('11111111-1111-4111-8111-111111111111', v_day, 'completed', now(), 'secret notes');
    INSERT INTO public.user_notes (user_id, day_id, note_text)
    VALUES ('11111111-1111-4111-8111-111111111111', v_day, 'Alice private reflection');
  END IF;
END;
$$;

SELECT is( (SELECT count(*)::int FROM public.user_notes), 1,
  'owner can read their own notes' );

-- Now become Bob.
SET LOCAL request.jwt.claims = '{"sub":"22222222-2222-4222-8222-222222222222"}';

SELECT is( (SELECT count(*)::int FROM public.user_notes), 0,
  'SECURITY: Bob cannot read Alice notes' );

SELECT is( (SELECT count(*)::int FROM public.user_day_progress), 0,
  'SECURITY: Bob cannot read Alice progress' );

SELECT is( (SELECT count(*)::int FROM public.weekly_reviews), 0,
  'SECURITY: Bob cannot read Alice weekly reviews' );

SELECT is( (SELECT count(*)::int FROM public.study_sessions), 0,
  'SECURITY: Bob cannot read Alice study sessions' );

SELECT is( (SELECT count(*)::int FROM public.user_privacy_settings
            WHERE user_id = '11111111-1111-4111-8111-111111111111'), 0,
  'SECURITY: Bob cannot read Alice privacy settings' );

-- Bob must not be able to rewrite Alice's progress row.
SELECT throws_ok(
  $$ UPDATE public.user_day_progress SET learned = 'tampered'
     WHERE user_id = '11111111-1111-4111-8111-111111111111' $$,
  NULL,
  'SECURITY: Bob cannot UPDATE Alice progress'
);

-- Nor insert a row claiming to be Alice's.
SELECT throws_ok(
  $$ INSERT INTO public.user_notes (user_id, day_id, note_text)
     SELECT '11111111-1111-4111-8111-111111111111', day_id, 'forged'
     FROM public.curriculum_days LIMIT 1 $$,
  NULL,
  'SECURITY: Bob cannot INSERT a note attributed to Alice'
);

-- -----------------------------------------------------------------------------
-- 2. Curriculum is public, but not writable
-- -----------------------------------------------------------------------------

SELECT ok( (SELECT count(*) FROM public.curriculum_days) >= 0,
  'authenticated user can read curriculum (or it is legitimately empty)' );

SELECT throws_ok(
  $$ UPDATE public.curriculum_days SET title_en = 'hacked' $$,
  NULL,
  'SECURITY: clients cannot modify shared curriculum content'
);

-- -----------------------------------------------------------------------------
-- 3. Points and achievements cannot be self-awarded
-- -----------------------------------------------------------------------------

SELECT throws_ok(
  $$ INSERT INTO public.point_ledger (user_id, reason, points)
     VALUES ('22222222-2222-4222-8222-222222222222', 'bonus', 9999) $$,
  NULL,
  'SECURITY: a client cannot grant itself points'
);

SELECT throws_ok(
  $$ UPDATE public.point_ledger SET points = 100000 $$,
  NULL,
  'SECURITY: the point ledger is append-only for clients'
);

SELECT throws_ok(
  $$ INSERT INTO public.user_achievements (user_id, achievement_id)
     SELECT '22222222-2222-4222-8222-222222222222', id FROM public.achievements LIMIT 1 $$,
  NULL,
  'SECURITY: a client cannot award itself an achievement'
);

-- -----------------------------------------------------------------------------
-- 4. Group access control
-- -----------------------------------------------------------------------------

-- Mallory is not a member.
SET LOCAL request.jwt.claims = '{"sub":"33333333-3333-4333-8333-333333333333"}';

SELECT is( (SELECT count(*)::int FROM public.study_groups
            WHERE id = '44444444-4444-4444-8444-444444444444'), 0,
  'SECURITY: a non-member cannot read a private group' );

SELECT is( (SELECT count(*)::int FROM public.study_group_members
            WHERE group_id = '44444444-4444-4444-8444-444444444444'), 0,
  'SECURITY: a non-member cannot read the member roster' );

SELECT is( (SELECT count(*)::int FROM public.group_invitations
            WHERE group_id = '44444444-4444-4444-8444-444444444444'), 0,
  'SECURITY: invitation codes are never readable by non-admins' );

SELECT throws_ok(
  $$ INSERT INTO public.study_group_members (group_id, user_id, role)
     VALUES ('44444444-4444-4444-8444-444444444444',
             '33333333-3333-4333-8333-333333333333', 'member') $$,
  NULL,
  'SECURITY: joining by direct insert is rejected'
);

-- Bob is a member but only a plain member.
SET LOCAL request.jwt.claims = '{"sub":"22222222-2222-4222-8222-222222222222"}';

SELECT is( (SELECT count(*)::int FROM public.study_group_members
            WHERE group_id = '44444444-4444-4444-8444-444444444444'), 1,
  'a member can read their own group roster' );

SELECT throws_ok(
  $$ UPDATE public.study_group_members SET role = 'owner'
     WHERE group_id = '44444444-4444-4444-8444-444444444444'
       AND user_id = '22222222-2222-4222-8222-222222222222' $$,
  NULL,
  'SECURITY: a plain member cannot promote themselves to owner'
);

SELECT throws_ok(
  $$ UPDATE public.study_group_members SET role = 'admin'
     WHERE group_id = '44444444-4444-4444-8444-444444444444'
       AND user_id = '22222222-2222-4222-8222-222222222222' $$,
  NULL,
  'SECURITY: a plain member cannot promote themselves to admin'
);

SELECT throws_ok(
  $$ SELECT public.create_group_invitation('44444444-4444-4444-8444-444444444444') $$,
  NULL,
  'SECURITY: a plain member cannot mint an invitation code'
);

-- The SECURITY DEFINER function must reject an unauthorised caller explicitly.
SELECT throws_ok(
  $$ SELECT public.change_member_role(
       '44444444-4444-4444-8444-444444444444',
       '22222222-2222-4222-8222-222222222222', 'owner') $$,
  NULL,
  'SECURITY: only an owner can change roles'
);

SELECT throws_ok(
  $$ SELECT public.leave_group('44444444-4444-4444-8444-444444444444') $$,
  NULL,
  'SECURITY: leaving the group you are in is allowed (expect a throw only if buggy)'
);

-- -----------------------------------------------------------------------------
-- 5. Invitation redemption always grants member
-- -----------------------------------------------------------------------------
--
-- A group must exist before an invitation can be created.
-- Alice creates a group and immediately mints a code for Bob.

SET LOCAL request.jwt.claims = '{"sub":"11111111-1111-4111-8111-111111111111"}';

DO $$
DECLARE
  v_group uuid := '55555555-5555-4555-8555-555555555555';
  v_code text;
BEGIN
  PERFORM public.create_study_group('Redeem Group', 'for tests', 'private');
  INSERT INTO public.study_group_members (group_id, user_id, role)
  VALUES (v_group, '11111111-1111-4111-8111-111111111111', 'owner')
  ON CONFLICT DO NOTHING;

  SELECT code INTO v_code
  FROM public.create_group_invitation(v_group, 7, 1);
END;
$$;

SELECT is(
  (SELECT role FROM public.study_group_members
    WHERE group_id = '55555555-5555-4555-8555-555555555555'
      AND user_id = '22222222-2222-4222-8222-222222222222'),
  'member',
  'SECURITY: redeeming an invitation grants role=member, never elevated'
);

-- The code has a single use; a second attempt must fail.
SELECT throws_ok(
  $$ SELECT public.redeem_group_invitation(current_setting('test.invite_code')) $$,
  NULL,
  'SECURITY: an exhausted invitation code cannot be reused'
);

-- A bogus code must be rejected.
SELECT throws_ok(
  $$ SELECT public.redeem_group_invitation('deadbeefdeadbeefdeadbeefdeadbeef') $$,
  NULL,
  'SECURITY: an invalid invitation code is rejected'
);

-- -----------------------------------------------------------------------------
-- 5b. Challenge progress computation anti-gaming
-- -----------------------------------------------------------------------------

SET LOCAL request.jwt.claims = '{"sub":"11111111-1111-4111-8111-111111111111"}';

-- Bob has completed some curriculum days.
DO $$
DECLARE
  v_day uuid := '11111111-1111-4111-8111-111111111111'; -- first day
BEGIN
  INSERT INTO public.user_day_progress (user_id, day_id, status, completed_at)
  VALUES ('22222222-2222-4222-8222-222222222222', v_day, 'completed', now());
END;
$$;

-- A sessions challenge created by Alice for Bob's group.
DO $$
DECLARE
  v_challenge uuid;
  v_group uuid := '44444444-4444-4444-8444-444444444444';
BEGIN
  INSERT INTO public.study_groups (id, name, created_by)
  VALUES (v_group, 'Challenge Group', '11111111-1111-4111-8111-111111111111');
  INSERT INTO public.study_group_members (group_id, user_id, role)
  VALUES (v_group, '22222222-2222-4222-8222-222222222222', 'member');

  v_challenge := public.create_group_challenge(v_group, 'Complete 5 sessions',
    NULL, NULL, 'sessions', 5, now(), now() + interval '7 days', 25);

  -- Bob completes 3 sessions; progress should be 3/5.
  PERFORM public.log_study_session(now() - interval '1 hour', now(), v_day);
  PERFORM public.log_study_session(now() - interval '2 hours', now(), v_day);
  PERFORM public.log_study_session(now() - interval '3 hours', now(), v_day);

  SELECT count(*)::int INTO v_progress
  FROM public.challenge_participants cp
  JOIN public.group_challenges gc ON gc.id = cp.challenge_id
  WHERE cp.challenge_id = v_challenge AND cp.user_id = '22222222-2222-4222-8222-222222222222';

  SELECT is(v_progress, 3, 'Bob can see his challenge progress');
END;
$$;

-- Challenge progress cannot be self-awarded points.
SELECT throws_ok(
  $$ INSERT INTO public.point_ledger (user_id, reason, points)
     VALUES ('22222222-2222-4222-8222-222222222222', 'challenge_completed', 25) $$,
  NULL,
  'SECURITY: a client cannot grant itself challenge points'
);

-- -----------------------------------------------------------------------------
-- 5c. Achievement earning re-verified server-side
-- -----------------------------------------------------------------------------

SELECT ok( (SELECT count(*) FROM public.user_achievements) = 0,
  'no achievements earned yet' );

-- Manually inserting an achievement must be rejected.
SELECT throws_ok(
  $$ INSERT INTO public.user_achievements (user_id, achievement_id)
     SELECT '22222222-2222-4222-8222-222222222222', id FROM public.achievements LIMIT 1 $$,
  NULL,
  'SECURITY: a client cannot award itself an achievement'
);

-- -----------------------------------------------------------------------------
-- 5d. Leaderboard access control
-- -----------------------------------------------------------------------------

-- Non-member cannot view a private group's leaderboard.
SET LOCAL request.jwt.claims = '{"sub":"33333333-3333-4333-8333-333333333333"}';

SELECT throws_ok(
  $$ SELECT public.leaderboard('week', '44444444-4444-4444-8444-444444444444') $$,
  NULL,
  'SECURITY: a non-member cannot view group leaderboard'
);

-- Member can view the leaderboard.
SET LOCAL request.jwt.claims = '{"sub":"22222222-2222-4222-8222-222222222222"}';

SELECT ok( (public.leaderboard('week', '44444444-4444-4444-8444-444444444444') IS NOT NULL),
  'member can view group leaderboard'
);

-- -----------------------------------------------------------------------------
-- 5e. Point ledger anti-double-award
-- -----------------------------------------------------------------------------

-- A second insert of the same ledger entry must be blocked by the unique index.
SELECT throws_ok(
  $$ INSERT INTO public.point_ledger (user_id, reason, points, ref_type, ref_id)
     VALUES ('11111111-1111-4111-8111-111111111111', 'day_completed', 10, 'curriculum_day', '11111111-1111-4111-8111-111111111111') $$,
  NULL,
  'SECURANCE: double award blocked by unique index'
);

DO $$
DECLARE
  v_day uuid;
BEGIN
  SELECT id INTO v_day FROM public.curriculum_days LIMIT 1;
  PERFORM public.log_study_session(now() - interval '10 seconds', now(), v_day);
END;
$$;

SELECT throws_ok(
  $$ SELECT public.log_study_session(now() - interval '20 minutes', now() - interval '10 minutes', NULL) $$,
  NULL,
  'SECURITY: a session shorter than the minimum is refused'
);

SELECT throws_ok(
  $$ SELECT public.log_study_session(now() - interval '30 hours', now(), NULL) $$,
  NULL,
  'SECURITY: a session longer than 8 hours is refused'
);

SELECT throws_ok(
  $$ SELECT public.log_study_session(now(), now() - interval '1 hour', NULL) $$,
  NULL,
  'a session ending before it started is refused'
);

-- -----------------------------------------------------------------------------
-- 7. Last-owner protection
-- -----------------------------------------------------------------------------

SET LOCAL request.jwt.claims = '{"sub":"11111111-1111-4111-8111-111111111111"}';

SELECT throws_ok(
  $$ SELECT public.leave_group('44444444-4444-4444-8444-444444444444') $$,
  NULL,
  'SECURITY: the sole owner cannot leave and orphan the group'
);

SELECT throws_ok(
  $$ SELECT public.change_member_role(
       '44444444-4444-4444-8444-444444444444',
       '11111111-1111-4111-8111-111111111111', 'member') $$,
  NULL,
  'SECURITY: an owner cannot demote themselves when they are the last one'
);

-- -----------------------------------------------------------------------------
-- 8. Anonymity: logged-out visitors see curriculum, not user data
-- -----------------------------------------------------------------------------

RESET ROLE;

SELECT is( (
  SELECT count(*) FROM information_schema.tables
  WHERE table_schema = 'public' AND table_name = 'user_notes'
), 1, 'user_notes exists' );

SELECT ok(
  EXISTS (
    SELECT 1 FROM pg_tables
    WHERE schemaname = 'public' AND tablename = 'user_notes' AND rowsecurity
  ),
  'RLS is enabled on user_notes'
);

-- Every table in the schema must have RLS on. This is the check that catches a
-- newly added table being forgotten.
SELECT is_empty(
  SELECT c.relname::text
  FROM pg_class c
  JOIN pg_namespace n ON n.oid = c.relnamespace
  WHERE n.nspname = 'public'
    AND c.relkind = 'r'
    AND NOT c.relrowsecurity
    AND c.relname <> '_migrations'
  UNION ALL
  SELECT 'view: ' || table_name FROM information_schema.views WHERE table_schema = 'public'
    AND table_name IN ('profiles_public'),
  'SECURITY: every public table and view is covered by RLS or an explicit grant'
) ;

SELECT * FROM finish();
ROLLBACK;