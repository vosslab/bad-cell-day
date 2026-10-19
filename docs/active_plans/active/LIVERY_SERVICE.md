# The Liver-y Service delivery

## Outcome

**Status:** Root accepted `DONE_WITH_CONCERNS` at 2026-10-18 23:13:33 UTC. This bounded milestone is
complete; the broader game goal remains active.

Promote the frozen courier/decoy candidate as `level_58`, campaign position 39, after
`level_28` and before `level_15`. Preserve the candidate's geometry, copy, and mechanics; change
only the stable ID and module/registry wiring.

## Decision and evidence

Pac pushes the light sac along the lower route while Isp can use the upper folds and draw Cana's
nearest-player boomerang. Cana rides the moving fold and keeps attacking; Gem releases bubbles near
the dock. The delivered sac and both heroes latch WEIGH 3, opening the two separate exits while
both attacks remain active.

Phase A used fresh states from registered `LEVELS` and ordinary `create_empty_input` /
`step_game` calls at 1/120 s. The paired route draws Cana to Isp, activates WEIGH 3 with weight 3 at
frame 524, recovers Pac's close jump bump, and completes both exits at frame 765. The no-decoy
attempt keeps Isp on the first ledge while Cana targets Pac; her boomerang contacts and nudges the
sac at frames 331-343. Pac and Isp recover the route, activate WEIGH 3 at frame 922, and clear both
exits in that same attempt at frame 1130 after Pac jumps past Isp. No state was injected and no
attack was disabled.

The exact comparison confirms the 57 pre-promotion definitions and their relative campaign order
are unchanged. The registered `level_58` definition matches the frozen fixture except for the ID;
its position is level_28, level_58, level_15. The original private fixture, inputs, runner, trace,
and their supplied hashes remain unchanged. The additional no-decoy exit continuation is ordinary
input appended to the copied scenario.

## Gates and limits

| Phase | Status | Evidence |
| --- | --- | --- |
| A: registered native proof | Passed | `tests/_temp/livery_service_delivery/NATIVE_EVIDENCE.md` |
| Root source/build/review gate | Passed | 96 canonical checks, build, 2/2 standard smokes, fresh SPEC, QUALITY, and integration all `PASS_WITH_CONCERNS`; root reviewed the source, receipts, and all five original PNGs. |
| B: built-browser views and bounded progression flow | Passed | Five captures, ordinary clear/recovery, seeded save/Next/reload, and legacy-save checks; root viewed all original PNGs and found no material visual issue. |
| Root acceptance | `DONE_WITH_CONCERNS` | 2026-10-18 23:13:33 UTC. |

The native replays show prepared-input feasibility. They do not establish human discovery, paired
playability, enjoyment, or difficulty. No full current58 journey or difficulty assessment has been
run.

## Evidence files

- Frozen private candidate and hashes: `tests/_temp/courier_decoy_prototype/`.
- Pre-promotion registered snapshot: `tests/_temp/livery_service_delivery/pre_promotion_57.json`.
- Copied ordinary inputs, registered runner, trace, summary, and comparison: `tests/_temp/livery_service_delivery/`.
- Built-browser report, receipts, command logs, and original PNG captures: `tests/_temp/livery_service_delivery/`.
- Promotion pointer in the private ledger: `docs/active_plans/active/COURIER_DECOY_PROTOTYPE.md`.
