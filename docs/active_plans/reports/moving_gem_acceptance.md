# Moving Gem acceptance ledger

Status: ROOT ACCEPTED THE LOCAL MOVING-GEM / ADDITIVE-32ND-ROOM MILESTONE AS DONE_WITH_CONCERNS.
The served campaign has 32 rooms. The original native fixture and independent review remain frozen
historical evidence; all 31 previous room definitions and their relative order are preserved.
Continuous development remains active.

## Goal and evidence

Gem rides an existing moving organic platform. Bubble targets stay fixed in world space, and
platforms and barriers do not block shots; platform travel changes the muzzle-to-target distance
and whether a bubble can reach within max range. Native routes show Pac powering and riding the
carrier to bring Gem into range, while Isp receives FLOAT, reaches an upper route, and latches
Pac's lower door. A no-stop `keep_power` route also succeeds, so BRAKE remains optional.

BRAKE is optional if the carrier's existing movement and the partners' positions already create a
clear, forgiving cooperative choice. Do not require both players to satisfy pad quotas just to
show both roles.

Acceptance requires the range choice and both partner roles to remain meaningful without turning
the overhead obstruction into a timing tax. Reject or revise the route if review finds that players
mostly wait or repeat an ordinary hold relay. Do not add a hit quota, timer, configuration, new
hero ability, new movement clock, or bypass-only gate.

## M0: settle the boundary

The source/history investigation is in `tests/_temp/moving_gem_seams/REPORT.md`; the type expert's
approved contract is in `tests/_temp/moving_gem_contract/REPORT.md`. Root owns the architecture
decision and approved a Gem-only optional `platformId` on Gem's appearance,
plus one pure `resolve_villain_position(state, villain)` resolver. The resolver uses Gem's authored
position plus the current platform top-left delta; it returns the authored point for static actors
and fails clearly for invalid attached references. Keep Cana unchanged.

Pure weapon geometry receives the attack, resolved actor point, and optional target. The
state-facing `weapon_pose(state, attack)` resolves Gem once, and launch uses the same actor point
and geometry. Keep physics step order: the pre-platform-advance muzzle is the stored projectile
origin and target; later Gem movement changes the actor, warning, and next launch without retcon.
The approved core scope is implemented as recorded under M1. This boundary approves no room, new
Cana behavior, or general moving-villain system.

## M1: core and prototype

**Core: FROZEN.** Gem now has an optional authored `platformId`; a shared resolver derives the
actor point from the authored position and current platform delta. Pure weapon geometry accepts
that point, and runtime pose and launch use the resolver. Actor art and layout use the same point.
Cana is unchanged. Release order and projectile origin/target snapshot are preserved. Three focused
permanent cases were added to the existing interference tests; no room or registration changed.

Evidence and implementation ownership are in `tests/_temp/moving_gem_core/REPORT.md`. Three focused
interference cases pass (23 total); the worker's TypeScript, ESLint, and Prettier checks pass, and
the 31 existing rooms and initial weapon geometry match the pre-edit snapshot. The fresh SPEC
checkpoint `tests/_temp/moving_gem_core_spec/SOURCE_CHECKPOINT.md` is ACCEPTED_FOR_BUILD. Root's
`./check_codebase.sh` passes type, lint, format, and 90 Node checks.

The canonical build and both standard Playwright smoke tests pass. Root also independently verified
the served index, bundle, and source map against disk, including all 54 embedded sources, and ran
`source source_me.sh && python3 -m pytest tests/ -q` (3,676 passed, one advisory warning for the
925-line interference test file). Build and source receipts are in
`tests/_temp/moving_gem_core_build/REPORT.md`; the preview remains running.

**Native: DONE_WITH_CONCERNS.** The frozen fixture and replay report are
`tests/_temp/moving_gem_native/candidate.json` and
`tests/_temp/moving_gem_native/REPORT.md`; the fixture SHA-256 is
`82a2599241fa5b26a8338df9a0e8f12b40491a7e86baedc155e8d65fdc07202c`. Fixed ordinary-input
streams in `tests/_temp/moving_gem_native/native_results.json` replay against fresh production game
state at 120 Hz. The fixture is not registered.

| Element | Frozen fixture |
| --- | --- |
| World and floor | `1100x620`; floor `(0,550,1100,70)` |
| Gem ferry | `(80,480,160,18)`; offset `(500,0)`; period `8`; requires power |
| Gem and POWER | Gem `(200,460)`; Pac rides attached POWER at ferry offset `(10,-8,50,8)` |
| Bubble | Fixed target `(465,532)`; range `150`; windup `0.9`; cooldown `1.6`; speed `170` |
| Isp route | Spawn `(451,514)`; membrane at `x400`; upper route `(530,400,500,18)` |
| Handoff | Isp latch `(600,392,100,8)` opens Pac's lower door at `x900`; separate exits |

The native routes establish the range and role hypothesis:

- Initially Gem's muzzle is 244.48 px from the Isp target, beyond the 150 px limit. The ferry
  carries Gem from x200 to x700; in the main replay, distance spans 77.24-244.48 px and enters
  range around 1.408 s. At 2.517 s, release muzzle `(465.73,454.76)` is 77.25 px from target;
  Isp receives FLOAT at 2.792 s.
- The main route completes in 14.033 s. Pac boards and powers the ferry, delivers Gem into range,
  then reaches the lower exit after Isp floats to the upper route and latches Pac's door at 10.225 s.
- The `keep_power` route also completes without a stop: Pac keeps POWER occupied and Isp steers
  through three FLOATs. It completes in 21.708 s. BRAKE or power-release timing is optional.
- Role counterfactuals matter. Without Pac's delivery, three releases remain out of range, no shot
  hits, and Isp cannot return through the membrane to latch. Without Isp's upper latch, Pac delivers
  Gem and Isp receives FLOAT repeatedly, but the lower door stays closed and neither exit is
  reached after 33.9 s.
- In `missed_upper_recovery`, Isp misses one FLOAT approach, falls safely, then catches a later
  bubble, lands at 34.292 s, latches at 34.308 s, and completes in 38.108 s. No hit quota or
  permanent disable is needed.

The original 500 px candidate's main route exposed one concern: the ferry stops at x391.46 directly
over Isp and blocks most of the first FLOAT. Pac releases POWER and reboards at 4.033 s; after the
ferry moves clear, a later bubble hits Isp at 8.208 s. The faster route uses this optional
manipulation, while `keep_power` proves it is not mandatory. This concern led root to require R2's
shorter ferry span before production authoring. These original source-aware streams do not
establish discovery, enjoyment, or human coordination.

## Campaign fit and review

Root selected the R2 shorter-ferry-span fixture for production authoring: liver setting, working
title **Bring Your Own Villain**, stable ID `level_32` at position 18 after `level_30` and before
`level_14`. The source is registered, and root accepts the local milestone as DONE_WITH_CONCERNS. The
campaign rationale is in `tests/_temp/moving_gem_campaign_fit/REPORT.md`. The existing 31-room
difficulty assessment and findings remain frozen; they support prior-exposure judgments, not a
score for this candidate.

The first independent review of the original 500 px ferry-span candidate recommended authoring but
found its overhead block could make recovery feel like waiting for another ferry and bubble cycle.
Root treated that obstruction as a real gameplay issue and required a geometry revision before
selection. The original review and replay remain unchanged at
`tests/_temp/moving_gem_candidate_review/REPORT.md`.

The isolated R2 prototype changes only the horizontal ferry offset to 200 px (and applies the
selected liver/title metadata); no engine, registry, production source, or permanent test was
changed in that experiment. Its candidate and frozen streams are in
`tests/_temp/moving_gem_clear_receiver/candidate.json` and
`tests/_temp/moving_gem_clear_receiver/native_results.json`; the report is
`tests/_temp/moving_gem_clear_receiver/REPORT.md`. This revision retains the range dependency while
clearing the Isp approach: the first FLOAT lands on the upper route at 5.13 s and latches at 5.27 s.
The `main` route completes at 9.07 s, `park_in_range` at 7.24 s, and `keep_power` at 9.84 s. The
deliberate first-miss retry completes at 12.01 s versus 38.11 s for the original fixture. Without
Pac's delivery, three releases still do not reach Isp; without Isp's latch, Pac remains blocked.
The first release is a boundary nuance at 156.43 px versus the 150 px range, with the clipped
endpoint contacting the bubble's 12 px contact radius; retain this for source and visual review.

## M2: production authoring and acceptance

The room author registered `src/level_bring_your_own_villain.ts` through `src/levels.ts` at stable
ID `level_32`, after `level_30` and before `level_14` (public position 18; array index 17). The
liver room uses R2's 200 px ferry offset and existing organ art. All 31 previous definitions and
their relative order are preserved.

The room SPEC was ACCEPTED_FOR_BUILD, and the post-registration source gate passed TypeScript,
lint, format, and 90 Node checks. The earlier R2 focused normal route 06 and reduced-motion route
01 passed, but the normal `main_upper_latch.png` captured the opening state and no
`main_carrier_powered.png` was saved. Do not treat those files as visual proof of those milestones.
Root viewed the normal FLOAT and reduced-motion powered-carrier screenshots. These earlier files
remain at `tests/_temp/moving_gem_focused_browser/attempt06_normal/` and
`tests/_temp/moving_gem_focused_browser/attempt01_reduced/`.

The fresh unseeded 32-room browser journey PASSed on the R2 build (main SHA-256
`2a9d78c710f5a97d37328c18615a02fd0075cbf4c7cda0e79897efd789bacfbc`; map
`6838de27296f697ac28ed360e9628ce3871305f1c5945b9b3712caf370e8eef7`): one Play and 31 Next
clicks completed the exact source order, including `level_32` in 0:07 with zero retries and the
finale.
All 32 rooms appeared as Replay entries before and after reload, saved progress persisted
byte-for-byte, sound remained enabled, and two legacy-save cases preserved the intended insertion
behavior. No page, console, request, or HTTP errors occurred; Chromium closed cleanly. The route used
the frozen `park_in_range` native stream translated to ordinary public keyboard input. Evidence and
decisive images are in
`tests/_temp/moving_gem_campaign_browser/campaign_attempt01/REPORT.md`. Root viewed the room,
completion, and finale captures. This functional evidence remains bound to the R2 build and is not
human discovery, enjoyment, or paired-control evidence.

After that campaign run, the author made R3's display-only correction: inactive Cana's x position
changed from 80 to 750 so it no longer visibly merges with the opening scene. The exact source and
parsed-room diff confirm that only this coordinate changed; gameplay data and mechanics are equal.
The correction evidence is in `tests/_temp/moving_gem_clear_start/REPORT.md`. The final source
SHA-256 values are `src/level_bring_your_own_villain.ts`:
`4f56a8a6fd2cb04490403f7bbdfbfacfcad395c68889966025c711bcd132ce0d`, and `src/levels.ts`:
`6e0612e195dad94e92c1d0232825b526f93d06d3176ab68c673d5c79a2abd3c9`. Root accepted R3 for the
final build; a full campaign rerun is not required solely for this inactive display placement.

The final canonical build and both standard smokes pass. Root verified served index, main bundle,
and map against `dist/`; all 55 embedded sources match current files. The final index SHA-256 is
`15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`. The build receipt is
`tests/_temp/moving_gem_final_build/REPORT.md`. Final main SHA-256 is
`fd873084465c54343074f7a1d1d5eb4c0b40d0cd3c511b5f71c765df9aea1498`; source-map SHA-256 is
`d945732eb5f4526a2888b783c0f2ec0fbb26a0711a43e32357d2c7359b39680e`. The live preview at
`http://127.0.0.1:8127/` remains available. The post-R3 source gate
again passed 90 Node checks. After this documentation closeout,
`source source_me.sh && python3 -m pytest tests/ -q` passed with exit 0: 3,676 passed in 3.37 s,
with one advisory warning for the 925-line `test_interference.mjs` file. The final focused R3 normal
and reduced-motion routes also PASS. They use a public Levels
menu and controls with an isolated save that contains only `level_30` completion. Both main routes
complete in 0:08 with zero retries; captures show the opening, powered carrier, FLOAT, active green
latch, and exits. Root viewed the normal opening/powered/active-latch captures and reduced second
FLOAT/completion. Served hashes match before and after; all 55 embedded sources match current
files; both runs have zero page, console, request, and HTTP errors, successful browser close, and
terminal artifact-check PASS. The final receipt is
`tests/_temp/moving_gem_focused_browser/REPORT.md`; normal and reduced captures are in
`tests/_temp/moving_gem_focused_browser/attempt03_r3_normal/` and
`tests/_temp/moving_gem_focused_browser/attempt02_r3_reduced/`.

The missed-upper recovery route completes in 0:41 on both R3 modes. That display contains a 40 s
RLE segment with about 28 s idle, then an ordinary observed ArrowRight step of about 0.5 s from
Pac's x877 position to the lower exit. It is not a retry-latency or human-time measure. Retry count
1 came from a deliberate Restart control check before the route; the missed FLOAT recovery itself
needed no reset. The 40 s scripted route demonstrates recovery after a failed approach, not a
forced waiting requirement.

Fresh SPEC, QUALITY, and integration reviews all return ACCEPT_WITH_CONCERNS, with no blocker,
drift, or source fix requested. Their reports are `tests/_temp/moving_gem_final_spec/REPORT.md`,
`tests/_temp/moving_gem_final_quality/REPORT.md`, and
`tests/_temp/moving_gem_final_integration/REPORT.md`. Root accepts the local milestone as
DONE_WITH_CONCERNS. Remaining concerns are human discovery, enjoyment, novice suitability, and
paired-keyboard comfort, which scripted evidence does not measure; the new room remains unscored.

## Closure and residual limits

Root selected R2 after adjudicating the original candidate's overhead obstruction as a gameplay
issue, despite the original independent review's permissive authoring recommendation. The shorter
ferry span demonstrates a clear first FLOAT, a retry after a deliberate miss, and counterfactual
role dependencies. The room is registered and served; the full campaign and save route passed on
R2. R3 changes only inactive Cana's display position. Root accepts the local moving-Gem and
additive-room milestone as DONE_WITH_CONCERNS; continuous development remains active. The new room
has no difficulty score, and the frozen 31-room assessment is not a current 32-room assessment.
Human discovery, enjoyment, novice suitability, and paired-keyboard comfort remain unmeasured. Some
active frames place weapon/status text near the ferry and hero art, though the gameplay cues remain
readable. The first stored R2 release remains a documented boundary contact at 156.43 px against a
150 px range limit, with the clipped endpoint contacting the bubble's 12 px radius.
