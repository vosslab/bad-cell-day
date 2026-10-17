# Boneheads room plan

**Status: ROOT ACCEPTED `DONE_WITH_CONCERNS`.** Fresh SPEC, distinct QUALITY, and integration
reviews each accepted with concerns. Root accepts the small Cana status-tag overlap with the bottom
rim of Pac's exit ring as nonblocking. The continuous gameplay goal remains ACTIVE.

Keep stable `level_39`, titled **Boneheads**, in the brain chapter after
`level_27` and before `level_35` (new display position 32); keep `level_20` last. Build on level 30's
existing grounded carry rather than presenting this as its first introduction. The follow-on
distinction is sustained mutual support: Pac carries Isp while Isp holds high tissue contact to keep
the route active, then Isp dismounts to the upper route as Pac continues below. Human readability,
discovery, and play remain unmeasured. The continuous gameplay goal remains ACTIVE.

## Goal and evidence

Add one cooperative brain room around grounded transport: Pac carries Isp across a fragile span;
Isp's high tissue contact stabilizes it; Isp dismounts to the upper shelf while Pac reaches the lower
bank and makes one short, clearly jumpable gap after the handoff. The distinct work is sustained
movement by Pac and sustained support by Isp, followed by separate upper and lower exits. The
marrow scout is historical feasibility evidence only; production art and villain scene use the
brain stage. Scripted evidence does not establish that players will discover the route or enjoy it.
The scout report and traces remain in ignored `tests/_temp/grounded_carry_puzzle_scout/`.

## Released production contract

- Add stable `level_39`, titled **Boneheads**, in the brain chapter after `level_27` and before
  `level_35` (new display position 32). Preserve all 38 existing enriched definitions and their
  relative order; keep finale `level_20` last. This placement builds on level 30's existing
  grounded carry and spaces the room away from the liver carry rooms 24 and 30. Do not claim that
  this is the campaign's first grounded carry.
- Pac is the grounded carrier; Isp rides high and holds the canopy contact while Pac crosses. Isp
  then dismounts to the upper shelf and Pac continues along the lower bank. Keep the two separate
  exits and allow a miss followed by ordinary Restart.
- Add one short, clearly jumpable gap on Pac's lower route after the handoff. Keep clearance below
  the upper shelf. Use existing movement, collision, jump, pad, retry, renderer, and persistence
  contracts; add no hazard family, catch floor, quota, relay, mission, or new mechanic.
- Use existing brain art and pad rendering. Include one readable recurring Cana boomerang:
  start it once on first activation of the high pad, with ordinary delay and windup, and let the
  existing recurrence continue after Isp releases the pad. Do not add weapon logic, permanent
  disable behavior, or attack spam. If the existing attack contract cannot express this trigger,
  stop before changing engine behavior and return the exact boundary for root decision.
- The prototype pad has no `platformId`. Its independent contact can reactivate the span while the
  span is inactive. Restoration means platform reactivation; do not claim it catches a falling hero.
- Check one bounded, ordinary split-role alternative where Isp approaches the fixed contact while
  Pac advances. A cooperative alternative that clears is acceptable. Report the observed route
  without adding anti-bypass gates, extra relays, or a claim that head-carry is the only solution.
- Keep the existing DNA-span scheme/personality where useful. Isp already has a meaningful upper
  dismount; do not add switches or extra tasks. Let built captures determine whether existing art
  suffices or Astra art is needed.

## Approach and ownership

1. **Confirm existing contracts and ownership.** Check the high-pad activation and Cana recurrence
   against current production types and behavior before authoring. The expected room and scene-data
   owner is `src/level_grounded_carry.ts`; registration, scene collection, and campaign placement
   belong in `src/levels.ts`. Confirm the exact scene-data convention while implementing. If either
   requested behavior needs an engine contract change, stop and report it before widening scope.
2. **Implement the fixed room.** Done. Added the brain-stage room at the released insertion with a
   50 px lower-bank gap after the upper shelf ends; Pac's jump starts beyond the shelf edge, leaving
   open headroom. A fresh source inspection found the 20 px Pac exit marker was sunk into tissue and
   hidden by Cana's START/WINDUP tag; its rectangle now uses the existing 60 px exit height at
   `y=440`. The original `(930, 420)` boomerang target produced only a decorative 10 px throw. The
   target now sits at `(700, 480)`, giving a 247 px leg through the lower-route approach while
   retaining the existing start trigger, cooldown, and windup. All 38 prior definitions, enriched
   scenes, and relative order compare equal.
3. **Prove behavior on production source.** Done for the assigned native scope. The authored helper
   route, miss plus fresh retry, recurring Cana event, bounded split-role contact probe, and focused
   progression check use public `LEVELS`, `create_game_state`, and `step_game`. Exact traces and
   snapshots are under ignored `tests/_temp/boneheads_production/`. The bounded alternative shows
   Pac crossing while Isp repeatedly contacts the fixed pad; it stops before a full-room clear and
   does not establish that the helper carry is the only cooperative solution. The correction report
   records ordinary and 0.5 s delayed clears without a shove (5.783 s and
   6.283 s), plus one paired-input route where Cana shoves Pac at 3.708 s and continued movement
   clears both exits at 5.583 s. The first high-pad activation starts the attack at 1.692 s; its
   first release/catch markers are 3.150/4.458 s, with later releases after pad release. The
   corrected hint says Pac carries Isp through TISSUE HOLD; the corrected exit is 60 px high at
   `y=440`. The split-role probe reaches the far bank but stops before a full-room clear. The
   ignored correction report is `tests/_temp/boneheads_cana_lane/REPORT.md`; its source hash is
   `84546de3ebba8af467223dd23be7b22091c96c09fa9ddd91528f132957e5fe10`.
   Pac crosses the 50 px gap while still airborne in the lower exit; do not claim a landing. The
   original correction report is under ignored `tests/_temp/boneheads_cana_lane/REPORT.md`.
4. **Review the built interaction.** Root's fresh `./check_codebase.sh` passed both TypeScript
   programs, lint, format, and all 92 Node checks. The official `source source_me.sh &&
./run_playwright_tests.sh --build` passed the build and both standard smokes. The distribution
   SHA-256 is `eccb9bb6c703ab438870bf76d0da536d87a17aab021e1e2a8ce6d0dcd5a28020`. The final browser
   capture package records ordinary carry and clear, first Cana flight and recurrence after pad
   release, corrected Pac exit, miss/restart, and saved progression. All four capture commands exit
   0 with no page or console errors; successful routes have zero deaths, the deliberate miss reaches
   `dead` before visible Restart and a clear, and served `main.js` matches `dist/main.js`. Saved
   progression confirms `27 -> 39 -> 35` across reload, replay access for the prior 38 rooms, and
   `level_20` last. Root inspected all seven original final frames under `/private/tmp`, including
   carry, split routes, both Cana flights, the Pac exit, and completion. The Pac exit ring and title
   are readable above the floor; the Cana status bar covers the bottom rim but leaves its labels
   legible. The outbound boomerang is visible, and the completion frame records zero retries. Root
   accepts the bounded visual composition; the status-bar overlap is a nonblocking concern. Browser
   receipts are under ignored `tests/_temp/boneheads_browser/`; no full campaign journey or human
   discovery is claimed. Fresh SPEC, distinct QUALITY, and fresh integration each accept with
   concerns; root accepts the milestone as `DONE_WITH_CONCERNS`. Human readability, discovery, and
   enjoyment remain unmeasured. Address blockers between reviews; root owns scope changes.

## Completion checks

- Native production routes show Isp supported by Pac while the high contact is active, Pac crossing
  the span, Isp dismounting to the upper shelf, Pac taking the lower bank jump, and both exits
  completing. Include a miss with ordinary fresh retry.
- The Cana boomerang is visible and readable, begins once on first high-pad activation with ordinary
  warning and windup, and recurs after pad release.
- A simple progression check confirms old frontier `level_27` unlocks `level_39`, then `level_35`;
  all 38 earned rooms remain replayable and the finale remains last.
- Root's code gate, official build, both standard smokes, and existing capture workflow pass. Fresh
  SPEC, distinct QUALITY, and integration reviews accept with concerns; root accepts
  `DONE_WITH_CONCERNS`.
- No permanent tests pin geometry or tuning. Do not require a full 39-room journey, a difficulty
  refresh, or human availability. Scripted and visual evidence does not establish human discovery,
  comfort, or fun.

## File scope

- `src/level_grounded_carry.ts`: new room and its scene data, if existing contracts suffice.
- `src/levels.ts`: stable-ID registration and insertion after `level_27` / before `level_35`.
- `tests/_temp/boneheads_production/`: ignored native, progression, and browser evidence only.
- Campaign count documentation: update only after actual roster insertion; retain historical maps.

No types, shared physics, renderer options, assets, persistence schema, permanent test suite, or
private preview interface are pre-approved. This plan authorizes the bounded room described above,
not a gameplay-goal completion claim.
