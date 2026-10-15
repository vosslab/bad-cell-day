# Tutorial villain encounter source routes

Status: source authored and input-only verification passing, 2026-10-15. Built-browser acceptance
belongs to the manager's frozen artifact. These observations do not establish visual art acceptance,
novice difficulty, enjoyment, or two-person coordination.

## Frozen source and command

The retained executable copy is
`test-results/active_villains_validation_harnesses/tutorial_villains_probe.mjs.txt`; copy it back
to `tests/_temp/tutorial_villains_probe.mjs` before running
`node --import tsx tests/_temp/tutorial_villains_probe.mjs`. This preserves relative imports.
to preserve relative imports. The source manifest records exact SHA256 hashes and final shared
weapon geometry. Tutorial source hashes at freeze:

- `src/levels_tutorial.ts`: `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`
- `src/villain_scenes_tutorial.ts`: `32267a2219c6a155b9bae79a6777d39b498f0512b51a9966793743b1a278e9d9`

The probe starts every route with `create_game_state`, advances through ordinary input only at
120 Hz, and never writes hero, pad, platform, barrier, projectile, or completion state. Every route
is replayed from its complete input array; the entire resulting simulation state must match.
Twenty-six routes pass. No platform, hazard, barrier, pad, collectible, exit, or hero spawn geometry
was changed. Permanent tests were not added for these tunable timings.

## Authored encounters

| Stable / displayed | Local task and counter |
| --- | --- |
| 02 / 1 | Gem sweeps HOLD; FLOAT releases the live door. Cana's longer returning shot contests Pac's safe approach. RESCUE latches both attacks off. |
| 01 / 2 | Gem sweeps safe DNA OPEN. Pac's RESTORE silences Gem and powers the lift, keeping boarding clear. |
| 04 / 3 | STEADY enables Cana's safe far-bank shot. RESCUE stabilizes the bridge, allowing Pac to leave STEADY and silence Cana. |
| 03 / 4 | Gem sweeps STOP on the broad shore; FLOAT releases the ferry brake. Landing and braking again recover the route. RESCUE silences Gem. |
| 05 / 7 | Gem revisits safe-shore STOP disruption, with no fire through hazardous jump lanes. RESCUE deliberately ends the interference. |

Acting roots are planted at actual floor height. Final shared anatomy supplies launch and catch
anchors; encounter definitions contain no hand offsets. The first-room Gem muzzle is approximately
(295.97,475.50), endpoint (175,480), with authored maxRange145 and actual travel121px. Cana launches
at (699.33,461.47), targets (320,480), and travels approximately380px per leg. Gem fires at1.250s;
Cana throws at0.950s and begins return at1.708s. The ordinary walking route reaches RESCUE at1.958s
and completes at5.117s. Isp's FLOAT starts1.275s, releases HOLD1.325s, and expires2.683s.

Room04's Cana root is (825,410), with right-facing release approximately(885.67,371.47) and target
(1080,390). Both legs stay on the safe bank x800..1100. The lane is approximately195px each way;
its radius13 does not reach the bridge or Pac's STEADY pad. Cooldown0.1s, windup0.65s and speed160
make the second flight meet ordinary far-bank travel. DIZZY slows existing horizontal input to55%
without reversing it. An early rejected safety argument assumed reversal; source inspection
corrected that assumption before final authoring. The final lane retains a substantial return.

## Route evidence

Every JSON has events, sampled positions, effects, pads and projectile phases. Every matching
`*_inputs.json` contains a complete array of120Hz ordinary input objects for replay in the browser.

| Route | Completion seconds | Protected observation |
| --- | --- | --- |
| ordinary | 5.117 | Walking-only introduction; both attacks, FLOAT and SHOVE, visible return, RESCUE cancellation. |
| delayed_10 / 12 / 15 | 17.175 / 18.892 / 20.075 | Initial hesitation remains recoverable without Retry. |
| gem_walk_dodge | 6.100 | Isp walks left out of Gem's warning, returns to HOLD; no FLOAT and no jump. Pac still receives a forgiving shove. |
| floor_walk_cana_dodge | 6.767 | Pac waits on safe floor until Cana naturally returns, then proceeds without SHOVE. Gem may apply STUCK. |
| gem_pac | 10.900 | Input-reachable Pac STUCK ends and the room completes. |
| cana_isp | 8.933 | Input-reachable Isp DIZZY ends and the room completes. |
| release_pac_365 / 385 / 405 / 435 | All complete | Early HOLD release before, within, and after the doorway recovers. |
| reverse_door_overlap | Complete | Entering from the right, leftward deeper motion is blocked after closure; retreat and restored HOLD recover. |
| float_gate_bypass | 12.625 | Aggressive FLOAT steering cannot pass the full-height closed Isp gate. |
| rescue_silence | 14.208 | Long post-RESCUE wait produces no new projectiles. |
| room01_ordinary / delayed | 32.442 / 40.358 | FLOAT releases DNA OPEN; RESTORE ends fire before both board and ride the existing lift. |
| room03_ordinary / delayed | 8.592 / 18.842 | FLOAT deactivates STOP and the ferry actually moves; ordinary input reboards and finishes. |
| room04_ordinary / delayed | 9.092 / 19.092 | DIZZY occurs on the far bank; leaving STEADY ends the flight and both finish. |
| room04_exposed | 12.700 | Waiting on the bank observes a hit, recovery and subsequent partner cancellation. |
| room04_counter | 8.133 | Pac leaves STEADY promptly after RESCUE; both complete without a hit. |
| room05_ordinary / delayed | 10.467 / 20.667 | FLOAT releases STOP, ferry motion resumes, and landing/reboarding reaches final suppression. |

The rejected `walk_dodge` route remains recorded: merely pausing Pac in the lane still receives a
shove, so it is not claimed as successful avoidance. The explicit aggressive FLOAT steering route
can reverse hero order; its recovery includes one ordinary jump to let the farther-exit hero pass.
The ordinary introduction and both walking dodge routes use no jump.

## Closing-door evidence

The probe checks every input step beginning with Pac overlapping a closed barrier: normal movement
may only approach the nearer separating face. Exact source geometry determines the face at each
step. `release_pac_385.json` records282 left-nearer steps; continued right input cannot progress
through the closed door. `reverse_door_overlap.json` records the right-nearer counterpart, including
left input held at x406.75 without deeper movement. Subsequent retreat/reopening finishes the room.
The source assertion applies equally during shove effects, neutral input and walking.

The ordinary route legitimately reaches more than halfway through the open door before FLOAT
releases HOLD; its rightward exit after closure follows the architect's committed-crossing policy.
This is distinct from the corrected less-than-halfway bypass. The door remains pad-owned and fully
closed for new entrants. Barrier behavioral tests and final browser closure frames remain separate
owner/manager acceptance evidence.

## Acceptance limits and custody

No built asset was generated by this worker. The browser campaign should replay `ordinary_inputs.json`
for02 and `room01_ordinary_inputs.json`, `room04_ordinary_inputs.json`, `room03_ordinary_inputs.json`,
`room05_ordinary_inputs.json` for the other four stable IDs. These use1/120s per frame. Additional
routes provide targeted hit/dodge/return/closure captures. Source frames include shared poses for the
opening room; the manager should inspect final normal/reduced action art and mechanism legibility.
The existing20-second lift period makes room01's full route longer than the floor-only opening;
its controller retries boarding from the established left side rather than changing the lift.
