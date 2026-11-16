# Recurring Marrow gameplay milestone

## Status and authority

**DONE_WITH_CONCERNS.** Root accepted this approved gameplay milestone after fresh integration
review returned ACCEPT_WITH_CONCERNS. It follows the accepted, concern-bearing 32-room difficulty
assessment. The frozen `current_32` scores remain an R3 design baseline and are not fresh for the
changed source. Do not repeat the full campaign assessment after each edit. The continuous
game-development goal remains ACTIVE.

The assessment's auxiliary R2 full-campaign/save evidence differs from frozen R3 only in inactive
Cana's display position (x80 to x750). R3 captures and focused normal/reduced-motion browser checks
are separate evidence. Neither establishes human fun or control comfort.

## Approved changes

- In level 11, **Split Decision** at campaign position 9, add exactly one existing-contract
  boomerang: `id: cana_return_lane`, target `(540, 440)`, windup `0.55`, cooldown `0.9`, speed `450`,
  radius `12`, interrupted by pad `blue`.
- Replace the global automatic-latch `[L]` label with plain `STAYS ON`; there is no L-key control.
- Change Cana's level 10 opening to: `Ride up, brake upstairs. My glucose isn't free!` This matches
  the ride-first route.
- Preserve room geometry, pads, exits, schemes, and the other 31 rooms. Preserve the level 23
  counterweight breather and all other weapon-free rooms.

Use the native candidate proof in `tests/_temp/marrow_weapon_probe/PROBE.md`. The recovery ledge and
new nutrient-sac prototype are deferred; neither belongs to this milestone. Existing types suffice:
no engine, state, options, or permanent-test change is in scope. The assessment's captured source is
released for this implementation only after this plan is recorded.

## Ownership and evidence

One source owner handles the changes in `src/levels_middle.ts`, `src/render_game.ts`, and
`src/villain_scenes_middle.ts`. A separate documentation owner handles the relevant concise usage,
changelog, and this evidence ledger. Root owns the integrated source check, production build, standard
smokes, browser evidence coordination, reviews, and final acceptance.

The source owner completed `npx tsc --noEmit -p tsconfig.json` and native authored-level route probes.
The ordinary level 11 route completed in 5.04 seconds and showed BLUE interrupt Cana at 2.65 seconds,
followed by another Cana release at 4.11 seconds. The hit-recovery route completed in 5.29 seconds,
with interruption at 2.90 seconds and another release at 4.36 seconds. Both reached both exits with
BLUE and ORANGE latched. Root's integrated `./check_codebase.sh` passed typecheck, lint typecheck,
ESLint, Prettier, and 90 Node tests (exit 0; output `71b4dd`). Root's production build and two standard
smokes passed (`source source_me.sh && ./run_playwright_tests.sh --build`, exit 0; chunk `41deda`).
Root also verified all 55 embedded sources against disk and the served `index.html`, `main.js`, and
`main.js.map` against `dist/` (chunk `8907a4`).

Focused browser evidence is complete in `tests/_temp/recurring_marrow_browser/REPORT.md`. All four
contexts passed against one frozen build: normal and reduced-motion level 11 clears,
including hit recovery, BLUE interruption, and boomerang recurrence; the level 10 opening and initial
upward ride before brake input; and the level 32 inactive `STAYS ON` label before route input. The
level 32 observation is not a new clear. In normal mode Isp remained stationary at x497.17 during the
450 ms recovery interval. Some generic screenshot paths were reused; earlier metadata at those paths
does not match the retained latest images. Distinct decisive captures and event observations remain,
as detailed in the browser report.

Fresh SPEC and distinct QUALITY reviews both returned ACCEPT_WITH_CONCERNS in
`tests/_temp/recurring_marrow_spec/REPORT.md` and `tests/_temp/recurring_marrow_quality/REPORT.md`.
Fresh integration returned ACCEPT_WITH_CONCERNS in
`tests/_temp/recurring_marrow_integration/REPORT.md`; root accepted the milestone as DONE_WITH_CONCERNS.
Root's integrated repository checks, build/smokes, served-artifact parity, and full Python suite also
passed; their exact receipts are summarized in `tests/_temp/recurring_marrow_closeout/REPORT.md`.
The Python command `source source_me.sh && python3 -m pytest tests/ -q` passed with 3,713 tests.
Keep these focused checks distinct from full-campaign evidence:
the other 31 rooms remain the frozen baseline, and no new campaign run is claimed. Scripted routes and
automated checks do not establish human fun, discovery, or control comfort.

The continuous game-development goal remains ACTIVE. Human enjoyment, discovery, and control comfort
remain unmeasured.
