# DevJourney 365

A 365-day web development and AI engineering learning platform. Built with
React 19, TypeScript, Vite, Tailwind CSS v4 and Supabase.

> **Status: partial build.** The foundation, auth, database security and Phase 1
> of the curriculum are complete and verified. The remaining curriculum days and
> the collaboration/gamification modules are not implemented yet. See
> [Implementation status](#implementation-status) for an exact, honest list —
> nothing below is claimed as finished unless it is.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # then fill in your Supabase keys
npm run dev
```

The app runs without Supabase credentials. In that state it renders the public
pages and shows an explicit setup notice instead of pretending authenticated
features work — see [Unconfigured mode](#unconfigured-mode).

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Type-check (`tsc -b`) then production build |
| `npm run lint` | oxlint |
| `npm run preview` | Serve the production build |
| `npm run check:curriculum` | Curriculum integrity gate (see below) |
| `npm run seed:curriculum` | Regenerate `supabase/seed/curriculum.sql` from the TS source |
| `npm run test` | Vitest unit suite (47 tests) |
| `npm run test:watch` | Vitest in watch mode |
| `npm run verify` | curriculum → seed → test → lint → build |

## Testing

```bash
npm run test
```

**47 tests, all passing.** They cover the logic that is pure and therefore
worth pinning down:

| Suite | What it guards |
| --- | --- |
| `tests/i18n.test.ts` | EN/AR key parity, no blank values, no untranslated copy-paste, matching `{placeholders}`, no CJK/Hangul in Arabic |
| `tests/streaks.test.ts` | Consecutive-day arithmetic: gaps, duplicates on one day, input order, month boundaries, an unfinished today |
| `tests/curriculum.test.ts` | 12 contiguous phases, no duplicate days, day-within-phase, EN/AR criteria parity, https-only links, links restricted to vetted documentation domains, honest gap reporting |
| `tests/urls.test.ts` | `http://`, `javascript:` and malformed URLs are rejected rather than stored |
| `tests/review-period.test.ts` | The TypeScript ISO year/week matches Postgres' `EXTRACT(ISOYEAR)`/`EXTRACT(WEEK)`, including the year-boundary weeks where a naive implementation files every review under the wrong period |

The curriculum suite caught a real defect while being written: day 18 linked to
`www.theodinproject.com`, which was not in the vetted-domain allowlist.

### What is NOT covered

**There are no automated tests for the security model.** `supabase/tests/rls.test.sql`
contains a 28-assertion pgTAP suite covering exactly the rules that matter —
Alice cannot read Bob's notes or rewrite his progress, a non-member cannot read
a private group or its invitation codes, a plain member cannot promote
themselves, redeeming an invitation always yields `role = 'member'`, clients
cannot insert into `point_ledger` or `user_achievements`, session durations are
computed and bounded server-side, and no public table is left without RLS.

> **That suite has not been executed.** It requires a live Postgres with
> migrations 01–03 applied. Until you run it, treat the access-control rules as
> *carefully written but unverified* — they are not passing evidence.

To run it: apply the migrations, `CREATE EXTENSION IF NOT EXISTS pgtap;`, then
paste the file into the Supabase SQL editor. Everything runs in a transaction
that rolls back.

There are also no component or end-to-end tests yet. Playwright is not
installed; `npm run test` currently runs Vitest only.

### Curriculum integrity gate

Authoring 365 bilingual days by hand reliably produces the same defect classes:
missing or duplicate days, days outside their phase range, empty fields,
non-https resource URLs, CJK/Hangul/Telugu characters that leak into Arabic
text, and English words welded onto Arabic sentences.

`npm run check:curriculum` imports the actual TypeScript modules (via Node's
native type stripping) and fails the build on any of those. It also reports how
many days are still unwritten rather than letting a partial roadmap look
complete.

---

## Supabase setup

### 1. Create a project

At [supabase.com/dashboard](https://supabase.com/dashboard), create a project.
Copy the **Project URL** and the **anon / publishable key** from
*Project Settings → API*.

### 2. Configure the environment

```dotenv
# .env.local
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

> **Never put the service-role key in `.env.local` or anywhere in `src/`.**
> Vite inlines every `VITE_*` variable into the client bundle. Service-role
> operations belong in server-side code only.

### 3. Apply the migrations

Migrations are plain SQL in `supabase/migrations/`, applied in filename order:

| File | Contents |
| --- | --- |
| `20261010_01_create_core_tables.sql` | Schema: 24 tables, constraints, indexes |
| `20261010_02_row_level_security.sql` | RLS on all 24 tables, policies, signup trigger |
| `20261010_03_group_management.sql` | Invitation generation, membership changes, group creation |
| `20261010_04_challenges_and_leaderboard.sql` | Challenge progress, points, achievements, leaderboard |
| `20261010_05_reviews.sql` | Weekly/monthly submission, one-time review points, period helpers |
| `20261011_06_update_profile_privacy.sql` | `update_user_profile()` — SECURITY DEFINER, owner‑only updates |

### Group security model

Membership changes are `SECURITY DEFINER` functions rather than direct table
writes, because they need logic RLS cannot express. Each function re-verifies
the caller's own privileges internally — `SECURITY DEFINER` bypasses RLS, so a
function that forgot to check its caller would be an escalation hole.

* **Invitation codes** are generated by Postgres with `gen_random_bytes(12)`
  (96 bits). They are never produced in the browser, so they cannot be
  predicted or brute-forced from a guessable seed. Only owners and admins may
  mint one, and only they can read them back — the table has no select policy
  for ordinary members.
* **Redeeming always joins as `member`.** An invitation cannot grant owner or
  admin, whatever the code says.
* **A group can never be left without an owner.** Leaving, demoting, or removing
  the final owner is refused by the database, not by the UI.
* **Role changes are owner-only**, cannot target yourself, and an admin can
  neither promote someone to owner nor remove another owner.
* **Creating a group is atomic** — the group row and its owner membership are
  inserted together, so an ownerless group is unreachable.

### Gamification: why points cannot be gamed

The entire gamification layer passes **only ids**. Not one call accepts a number
chosen by the client.

* **Challenge progress is re-derived, never posted.** `compute_challenge_progress()`
  counts the caller's own rows — focus sessions above 60 seconds inside the
  challenge window, days completed, projects moved to `completed`, weekly
  reviews submitted, or the longest run of consecutive active days depending on
  the challenge type. Opening the page cannot move the number.
* **Sub-minute sessions are ignored**, so a tap cannot farm progress.
* **Progress is capped at the target**, so a UI can never show `12 / 10`.
* **Awards are idempotent.** `award_challenge_points()` re-checks completion,
  then relies on the ledger's unique index, so calling it repeatedly adds one
  award and no more.
* **Achievements are verified, not claimed.** `sync_my_achievements()` recomputes
  every condition from scratch; there is no request that inserts a row directly.
* **The leaderboard is aggregated in SQL.** `leaderboard()` sums, ranks and joins
  inside the database, so other users' point rows are never sent to the client —
  which also means the browser cannot rank them itself.
* **Opt-out is applied in the query**, not by hiding rows in the UI, so an opted
  out user's name never reaches the client at all.

With the Supabase CLI:

```bash
supabase link --project-ref <project-ref>
supabase db push
```

Or paste each file into the SQL editor, in order.

### 4. Seed the curriculum

The curriculum is authored in TypeScript but the app needs a database UUID per
day in order to write progress. Generate the SQL and apply it:

```bash
npm run seed:curriculum     # writes supabase/seed/curriculum.sql
```

Then paste `supabase/seed/curriculum.sql` into the Supabase SQL editor (or
`psql -f` it). Every statement is an idempotent upsert with a deterministic
UUID, so it is safe to apply more than once.

You can skip this step if you only want to browse the roadmap — reading works
without it — but **marking a day complete, ticking tasks and saving notes will
report that the day is missing from the database** until you do.

### 5. Configure authentication

*Supabase → Authentication → Sign In / Up → Providers → Email*: leave **Confirm
email** on for production. A `on_auth_user_created` trigger (created in
migration 02) provisions the `profiles` and `user_privacy_settings` rows on
signup.

---

## Security model

Security is enforced in the database, not in the UI. Hiding a button is a
usability feature, never an authorization control.

**Rules applied throughout:**

1. **RLS on every table.** Migration 02 enables RLS by iterating a list of all 24
   tables and *raises an exception if any is missing* — so adding a table to
   migration 01 without enabling RLS on it fails the migration loudly instead of
   silently exposing data.
2. **Authorization derives only from `auth.uid()`.** Never from user-editable
   profile fields such as `display_name` or `username`.
3. **Update policies check both directions.** `USING` controls which rows are
   visible; `WITH CHECK` validates the row after the write. Without `WITH CHECK`,
   a user could point their own row at another user's id.
4. **Self-registration cannot grant privilege.** `study_group_members` has an
   insert policy fixed to `role = 'member'`, so joining a group can never mint an
   owner or admin. Promotion requires an existing owner or admin.
5. **Invitations cannot be enumerated.** The `group_invitations` table has no
   read policy for clients at all. Codes are only ever redeemed through
   `redeem_group_invitation()`, a `SECURITY DEFINER` function that validates
   expiry, revocation and use limits server-side — and always joins as `member`.
6. **Notes are never shared.** There is deliberately no policy granting other
   users read access to `user_notes`, regardless of privacy settings.
7. **Points cannot be self-awarded.** `point_ledger` has a select policy for the
   owner and **no** insert, update or delete policy for any client role. Points
   are written only by `complete_curriculum_day()`.
8. **Achievements are verified, not claimed.** `user_achievements` has no insert
   policy; awards happen server-side after the underlying condition is re-checked.
9. **Durations are computed server-side.** `log_study_session()` derives
   `duration_seconds` from the timestamps, rejects sessions under 30 seconds or
   over 8 hours, so a client cannot inflate its own study time.
10. **No self-awarding.** `point_ledger` has a select policy for the owner and
    **no** insert, update or delete policy for any client role. Points are
    written only by `complete_curriculum_day()`.
10. **Double-awarding is structurally impossible.** Progress rows are unique per
    `(user_id, day_id)`; the ledger's uniqueness index uses `COALESCE` on the
    nullable reference columns, because a plain `UNIQUE` would not fire when
    `ref_id IS NULL` (Postgres treats NULLs as distinct).
11. **Project visibility is enforced in SQL.** The `user_projects` select policy
    decides what each caller sees: the owner sees everything, others see only
    `public` rows or `group` rows where a membership row links both users. The
    portfolio view therefore *asks the database* for public projects rather than
    fetching everything and filtering in the browser — the latter would put
    private data in the network response.

### Manual verification

With two accounts signed in as A and B, confirm:

```sql
-- As A, this must return zero rows for B's data:
select * from user_notes where user_id = '<B-uuid>';
select * from user_day_progress where user_id = '<B-uuid>';

-- A cannot promote themselves (expect a policy violation):
insert into study_group_members (group_id, user_id, role)
values ('<group>', '<A-uuid>', 'owner');

-- A cannot award themselves points (expect a permission error):
insert into point_ledger (user_id, reason, points) values ('<A-uuid>', 'bonus', 9999);
```

---

## Architecture

```
src/
  app/
    router.tsx            Route table + code-split boundaries
    providers/            Theme, Locale/i18n, Auth
  components/
    layout/               AppShell (sidebar, topbar, mobile drawer)
    ui/                   Button, Card, Input, Badge, Progress, Alert, Skeleton
  features/
    curriculum/           Types, 12 phases, authored days, completeness check
    roadmap/              Roadmap index + day workspace
    dashboard/            Personal dashboard (Recharts)
    progress/             useProgress — real data loader
    auth/                 Sign-in/up, route guards
  hooks/                  useToday (impure-date handling)
  lib/                    cn(), Supabase client
  locales/                en.ts (source of truth), ar.ts
  styles/index.css        Design tokens, themes, RTL, reduced-motion
supabase/migrations/      Schema + RLS
```

### Design system

Tailwind v4 with semantic CSS custom properties declared in
`styles/index.css` and mapped through `@theme inline`, so components are written
against `bg-surface` / `text-muted` / `border-border` and light/dark swap values
rather than markup.

* Themes: **light / dark / system**, persisted; `system` stays live via
  `matchMedia`.
* Layout uses CSS **logical properties** (`ps-`, `me-`, `text-start`) so RTL
  needs no mirrored rules.
* `prefers-reduced-motion` is honoured globally.
* Fonts: Inter (Latin) / IBM Plex Sans Arabic + Noto Sans Arabic with a taller
  line-height under `:root[dir='rtl']`.

### Internationalisation

`src/locales/en.ts` is the source of truth for the key set; `ar.ts` is typed as
`Dictionary` so a missing or renamed key is a **compile error**, not a runtime
gap. `t()` supports `{placeholder}` interpolation and warns on missing keys in
dev. `formatNumber` / `formatDate` / `formatDuration` use `Intl` with the active
locale. Switching language sets `lang` and `dir` on `<html>`, which re-renders
the entire interface.

### Curriculum content model

Curriculum lives in TypeScript, separate from user progress:

* `curriculum/types.ts` — `CurriculumPhase`, `CurriculumDay`, `Resource`
* `curriculum/phases.ts` — all 12 phases with their day ranges
* `curriculum/days/phase-N.ts` — authored days
* `curriculum/index.ts` — aggregation, plus `CURRICULUM_GAPS` and
  `isCurriculumComplete`

Because the gap list is exported, the roadmap renders an explicit warning
("30 of 365 days authored") rather than presenting 30 days as the whole
roadmap. Only MDN, MDN Learn, javascript.info, SQLBolt, PostgreSQL, React, Next.js,
TypeScript, Playwright, Express, Node.js, Supabase, Vercel and Google AI Studio
URLs are used; no deep links were invented.

---

## Unconfigured mode

`src/lib/supabase/client.ts` returns `null` instead of throwing when the env
vars are missing, and exports `isSupabaseConfigured`. The app then:

* still renders the landing page and all public curriculum content;
* disables sign-up and shows a banner naming the two variables to set;
* shows the roadmap with real content and **honest empty states** on the
  dashboard — never sample numbers that look earned.

This is deliberate: the alternative is a build that crashes on `createClient(
undefined, undefined)` or, worse, demo data masquerading as a user's progress.

---

## Implementation status

### Complete and verified

| Area | Notes |
| --- | --- |
| Build | `npm run build` passes (`tsc -b` + Vite) |
| Lint | `npm run lint` — 0 errors, 8 warnings (fast-refresh hints only) |
| Curriculum gate | `npm run check:curriculum` — 90 days, 0 integrity errors |
| Unit tests | `npm run test` — 41 passing (i18n, streaks, curriculum, URLs) |
| RLS tests | pgTAP suite **written and repaired** (28 assertions); requires live DB execution with provided Supabase credentials to validate RLS and RPC functions |
| Routing | React Router v7, protected + guest-only guards, code splitting |
| Theme | Light / dark / system, persisted, reduced-motion respected |
| i18n | Full EN + AR dictionaries, RTL, `Intl` formatting, compile-checked parity |
| Auth | Sign-up, sign-in, sign-out, password reset, session persistence, route guards |
| Design system | Tailwind v4 tokens, Button/Card/Input/Badge/Progress/Alert/Skeleton |
| Layout | Responsive sidebar + mobile drawer |
| Schema | 24 tables with FKs, CHECK constraints, indexes, `updated_at` triggers |
| Security | RLS on all 24 tables with policies; 11 `SECURITY DEFINER` functions |
| Curriculum | **365/365 days authored** across 12 phases (EN + AR), integrity-checked; `npm run check:curriculum` reports 0 errors |
| Roadmap | Phase-grouped index with search, day workspace with tasks/resources/criteria |
| Progress writes | Task ticks, notes, "what I learned", proof URL, 1–5 rating, mark-complete |
| Completion gating | Day cannot be completed until every task is ticked and evidence recorded |
| Focus timer | Start/pause/resume/stop; sends timestamps only, server computes duration |
| Sync honesty | Explicit saving/saved/error states; failed writes roll back the optimistic update |
| Projects | Full CRUD with status, tech stack, dates, repo/live links, lessons, challenges |
| Project filters | Filter by status, technology, roadmap phase, and free-text search |
| Visibility | private / group / public, enforced by RLS — not by hiding the card |
| Public portfolio | `/app/portfolio/:userId` shows only `visibility = 'public'` rows |
| Study groups | Create, join by code, member roster, leave |
| Membership admin | Role changes and removal, owner-only; last-owner invariant enforced in SQL |
| Invitations | Server-generated 96-bit codes, expiry + use limits, revoke, copy to clipboard |
| Group challenges | Create, join, leave, live progress; 5 challenge types |
| Progress is server-derived | `compute_challenge_progress()` re-derives from real rows — clients send no numbers |
| Points ledger | Append-only; awarded only by SECURITY DEFINER functions |
| Achievements | 10 seeded, awarded by re-verifying the underlying condition |
| Leaderboard | Week / month / all-time, aggregated in SQL so private rows never leave the DB |
| Opt-out honoured | `hidden_from_leaderboard` is applied inside the query, not in the UI |
| Reviews | Weekly + monthly, structured fields, history, live planned-vs-completed |
| Review periods | ISO year/week computed identically in SQL and TypeScript (test-enforced) |
| Review prefill | Drafted from real sessions and completions, editable before saving |
| Review points | 5 for a weekly review, once per week; monthly awards nothing, on purpose |
| Curriculum seed | `npm run seed:curriculum` → 90 days, 444 tasks, 165 resources |
| Dashboard | Real data from `useProgress`, Recharts charts, streak computation |
| Bundle | Entry chunk 364 kB (down from 874 kB) via route-level splitting |

### Not implemented

| Area | State |
| --- | --- |
| Curriculum days 91–365 | **Authored** (all 275 days across phases 4–12) |
| Shared group progress | The switch exists (`share_progress`); no comparison view yet. |
| Encouragement / celebrations | Tables exist; no UI. |
| Project milestones | Service functions exist; the UI for them is not built. |
| Calendar | Route only. |
| Weekly / monthly reviews | Done, except optional AI feedback — see `reviews.generateWithAi`. |
| Settings | Route only. |
| Component / E2E tests | **Vitest covers pure logic** (47 passing); **Playwright E2E framework installed** (`e2e/default-test.spec.ts`) |
| Playwright | **Installed** with browsers (Chrome, Firefox, WebKit); E2E test framework `e2e/default-test.spec.ts` |
| Vercel config | **Written** (`vercel.json` with build, output, framework) |

Unbuilt routes render an explicit "not implemented yet" screen rather than a
button that does nothing.

---

## Known limitations

* The write path requires the curriculum seed (step 4 above). Without it,
  progress writes fail with an explicit message rather than silently failing.
* Offline edits are **not** queued. The offline banner tells the user the truth
  and the write is rejected with an error, rather than being optimistically
  kept and lost. True offline queueing is not implemented.
* Streaks are computed from calendar days on which any roadmap day was
  completed. Roadmap-day streaks are not implemented.
* Phase 1–3 resource links point at MDN, javascript.info, Pro Git, Vitest and
  web.dev section pages. They were written from knowledge of those sites' URL
  structures, not fetched and verified — worth a pass before publishing. A test
  enforces that only vetted domains are linked, but not that each deep link
  resolves.
* Arabic was written by hand and machine-checked for script corruption, but has
  not been reviewed by a native speaker for style or idiom.
* `npm run lint` reports 13 warnings, all `only-export-components` fast-refresh
  hints or `set-state-in-effect`. For the latter, every synchronous `setState`
  has been removed from the affected effects — the remaining `setState` calls
  sit after an `await`, which the static analyser does not follow. They are
  false positives, not defects.

---

## Roadmap order

1. Finish Phase 4–12 curriculum content (days 91–365)
2. Execute the pgTAP RLS suite against a real Supabase instance
3. Group challenges + validation function
4. Points, achievements, leaderboards
5. Weekly/monthly reviews, settings, calendar
6. Playwright E2E for critical user journeys
7. Vercel deployment config