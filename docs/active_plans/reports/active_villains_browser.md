# Targeted active-villain browser acceptance

Status: PASS on the manager-frozen build, 2026-10-15. Actual action frames inspected.
No production files, build outputs, or server process changed in this lane.

## Frozen artifact and commands

- Main SHA-256: `a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5`.
- Map SHA-256: `c31d54fe5d776f0443524f64d657e49af28e4e1a2df0d7b835207598e59faff0`.
- Server: `http://127.0.0.1:8127/`, serving the existing manager-owned `dist/`.
- Manifest: 58 entries: 39 source-map modules (37 authored modules and two Solid dependencies),
  17 packaged web artifacts, and the two Gem/Cana source SVGs. Every served artifact matched local bytes;
  all mapped source contents matched disk. Identified files remained unchanged through each run.
  The supplementary analysis additionally hashes all 13 source SVGs and verifies each against
  its accepted packaged bytes, including every source background.
- All 13 packaged image assets decoded; zero console, page, failed-request, or HTTP errors.

The exact retained driver is
`test-results/active_villains_validation_harnesses/active_villains_browser.mjs.txt`; restore it
to `tests/_temp/active_villains_browser.mjs` before running these commands. Every candidate retains
its executed version as `harness.txt`. Commands ran from the repository root. Chromium needed
sandbox escalation because macOS denied its Mach-port registration inside the sandbox.

```bash
ACTIVE_VILLAINS_BUILD_SHA=a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5 \
ACTIVE_VILLAINS_RUN=candidate_browser_03 \
node tests/_temp/active_villains_browser.mjs

ACTIVE_VILLAINS_BUILD_SHA=a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5 \
ACTIVE_VILLAINS_RUN=candidate_browser_04 ACTIVE_VILLAINS_SKIP_NORMAL=1 \
node tests/_temp/active_villains_browser.mjs

node --input-type=module < test-results/active_villains_browser/analysis/analyze.mjs.txt
```

## Actual browser outcomes

The accepted evidence combines normal runs in `candidate_browser_03` with normal supplements
and the complete reduced-motion matrix in passing `candidate_browser_04`. There are 32 distinct
mode/journey combinations: 30 completion journeys and two pause/retry journeys. Candidate 04
alone retained 4,068 observations and 682 screenshots. Analysis confirms exact equality of
player positions, effects, room and phase at 3,471 matched normal/reduced observations.

| Journey in both modes | Observed result |
| --- | --- |
| Fresh storage, visible Play, ordinary first room | Stable 02 first; walking completion; both villains act before RESCUE; Gem actually FLOATs Isp and Cana actually SHOVEs Pac. |
| Ten-second late start | Both attack cycles recur; forgiving hits recover; ordinary completion. |
| Gem against Pac; Cana against Isp | Actual STUCK and DIZZY contacts, distinct body poses, recovery and completion. |
| Gem walking dodge | Walk out of the windup lane, return to HOLD, complete without Isp FLOAT. |
| Pac overlap near 385 and 405; reverse approach | Closed door blocks farther-face movement; permitted clearance and renewed HOLD allow ordinary completion. |
| RESCUE hold | Both weapons latch OFF, pending flight disappears, existing hero effect survives, no later shot during extended wait. |
| Eighty-ms desynchronization, hop recovery | Reproduced reversed partner order at closed door; Isp returns to HOLD; Pac hops over Isp and reaches RESCUE; both finish. |
| Same desynchronization, walking-only recovery | Isp returns to HOLD; Gem FLOAT supplies clearance; Pac walks underneath; Isp lands and restores door; Pac rescues; both finish with zero jump keys. |
| Seeded replay stable 03 | Actual FLOAT on STOP shore; ferry resumes, partner recovers/reboards, ordinary completion. |
| Seeded replay stable 08 | Cargo remains on PARK during real FLOAT; substitution preserves the cooperative contribution; ordinary completion. |
| Seeded replay stable 07 | Return timing and actual effects occur on broad islands; partner suppression remains available; ordinary completion. |
| Seeded replay stable 06 | Hero grounded on HOLD before actual FLOAT at the gun lane; Pac waits safely in lower recess; recovery and completion. |
| Pause/retry | Paused player/effect/phase attributes remain identical after one clock second; Resume works; Retry clears effect and resumes the room. |

Later rooms are explicitly seeded replay, not a fresh-campaign claim. The separate campaign
worker owns full progression. All gameplay here uses real keyboard input and Playwright's clock.
Canvas datasets are existing read-only exports. Canvas wrappers observe actual text, paths,
arcs, transforms and images, then call the original draw operation unchanged. The harness never
injects simulation state or calls simulation stepping.

## Closure and accidental help

Retained candidate 02 includes unfiltered actual closed-door fills. The analysis identifies the
Pac-blocking closed fill at world x400..426, then compares consecutive actual Pac positions
using its unchanged 30-pixel body. Across 70 closed-overlap intervals there are zero moves toward
the farther exit: 64 blocked stationary samples and six permitted nearer-face movements.
The 385 route holds Pac at x381.61 through closure and FLOAT; the 405 and reverse routes also
show permitted clearance toward the appropriate face. These are sampled browser observations,
complementing the independent exact-substep collision tests rather than replacing them.

The delayed source fixture can leave Isp at x630 and Pac at x386.48. Returning Isp to x238.70
pushes Pac to x208.70, reversing the initial partner order. Walking Pac directly right then pushes
Isp off HOLD; that unsuccessful attempt is preserved by the campaign worker. It is not a softlock:
the ordinary hop recovery completes, and a second recovery needs walking alone.

In both motion modes the walking recovery has these identical actual states:

| Harness time | State |
| --- | --- |
| 5.248 s | Isp630, Pac386.48; closed-door waiting state. |
| 7.376 s | Isp238.70 on HOLD, Pac208.70 to its left. |
| 8.784 s | Actual FLOAT lifts Isp to y417.50; Pac remains on floor y464. |
| 9.568 s | Pac walks underneath to320.12; Isp floats at y296.08. |
| 11.760 s | Isp lands at HOLD; Pac554.92 reaches RESCUE and latches suppression. |
| 15.216 s | Both complete; input log contains no W or ArrowUp. |

This optional recovery gives Gem's interference a useful consequence. Ordinary first Play and
walking-dodge routes still complete without requiring this hit or a jump.

## Inspected action frames

File paths below are local retained evidence beneath `test-results/active_villains_browser/`.
Normal references use `candidate_browser_03/`; reduced references use `candidate_browser_04/`.
The independent visual reviewer additionally inspected these and later-room samples directly.

- `normal_fresh_play_ordinary_cycle_056.png` and its reduced counterpart: aimed gun, throwing
  windup, both warnings and clear lane attribution.
- Ordinary cycles 064/072/080/096/104/120: Gem discharge, recoil/lowered reload and readiness;
  Isp suspended FLOAT, Pac braced SHOVE/recovery, actual closing-door transition. Distinct
  silhouettes remain meaningful with reduced motion.
- `normal_fresh_gem_pac_state_1312.png` / reduced counterpart: Pac STUCK with frozen body,
  planted feet, timer and explicit label.
- `normal_fresh_cana_isp_state_1616.png` / reduced counterpart: Isp dazed body and stars,
  Pac SHOVE, truthful timer and effect labels.
- Gem/Pac route at 2432..2560 ms: Cana's returning projectile approaches x673.74 then690.39;
  at2496 the drawn boomerang is restored exactly at the anatomical catch anchor
  `(699.32855,461.47144)`, with RECHARGING and no suppression. It remains at that hand through
  catch/recovery. The single boomerang draw maximum holds across all observed frames.
- `normal_seeded_replay_3_state_11808.png`: FLOAT releases STOP while Pac uses the ferry.
- `normal_seeded_replay_8_state_3184.png`: cargo/PARK persists through FLOAT.
- `normal_seeded_replay_7_state_1392.png` and `state_2752.png`: actual DIZZY/SHOVE and readable
  later return. Reduced equivalents preserve translation and directional meaning.
- `normal_seeded_replay_6_state_1568.png`, `state_2400.png`, `state_3760.png`: grounded HOLD,
  actual muzzle-lane contact/FLOAT, and safe recess/ground recovery; reduced equivalents inspected.
- Both `fresh_float_under_recovery_float_clearance.png` and `pac_walked_under.png`: real clearance
  and unchanged floor-contact truth during the walking recovery.

Gem/Cana identities and faces remain recognizable; each weapon connects to its owned articulated
hand. Cana has no held duplicate during flight. Aim, disruption, recovery and silencing dialogue
are restored and attributed. HUD, doors, pads, lanes and mechanism readouts remain usable.
Hero and actor labels can crowd when several bodies share Gem's small area; this is a retained
nonblocking density observation. The independent visual lane found no blocking correction.

## Failure custody and limits

`candidate_a77ac47` retains the sandbox-only launch failure. Candidates 01..03 retain harness
endpoint failures: exact 120-Hz source inputs can stop a few walking pixels or a landing frame
short after conversion to 16-ms browser RAF. The corrections append real visible exit walking
or landing only when heroes are already at the finish. They do not modify room geometry,
simulation state, attack timing, or the successful route's earlier choices. All failed candidates,
exact harnesses, copied route JSON, input transitions and SHA manifests remain available.

`candidate_browser_04/results.json` records PASS and all custody checks. The compact
`analysis/summary.json` records matched states, closure intervals, natural catch coordinates,
walking recovery milestones and accepted journey endpoints. Its exact analysis driver and
`SHA256SUMS` are retained beside it; every candidate has its own `SHA256SUMS`.

This establishes targeted operability and observed visual clarity on the identified artifact.
It does not establish human enjoyment, discovery, novice difficulty or two-person coordination.
