-- =============================================================================
-- Migration: 20261011_06_update_profile_privacy
--
-- A SECURITY DEFINER helper so the Settings UI can update the caller's own
-- privacy fields without the client ever needing the service_role key.
-- The function checks that the caller is the row's owner before applying changes.
-- =============================================================================

CREATE OR REPLACE FUNCTION public.update_user_profile(
  p_share_progress      boolean DEFAULT NULL,
  p_share_streak        boolean DEFAULT NULL,
  p_share_achievements  boolean DEFAULT NULL,
  p_share_notes         boolean DEFAULT NULL,
  p_hidden_from_leaderboard boolean DEFAULT NULL,
  p_notify_reminders    boolean DEFAULT NULL
)
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

  UPDATE public.profiles
  SET
    share_progress      = COALESCE(p_share_progress,      share_progress),
    share_streak        = COALESCE(p_share_streak,        share_streak),
    share_achievements  = COALESCE(p_share_achievements,  share_achievements),
    share_notes         = COALESCE(p_share_notes,         share_notes),
    hidden_from_leaderboard = COALESCE(p_hidden_from_leaderboard, hidden_from_leaderboard),
    notify_reminders    = COALESCE(p_notify_reminders,    notify_reminders)
  WHERE user_id = v_uid;
END;
$$;

GRANT EXECUTE ON FUNCTION public.update_user_profile(
  boolean, boolean, boolean, boolean, boolean, boolean
) TO authenticated;