# Existing weapon route regression

Fresh source acceptance on 2026-10-15 passes the five existing attack encounters and the isolated
trial after the shared muzzle, bounded bubble flight, closed-barrier clearance, and final-room
200-unit bubble correction. This is source simulation evidence; browser and visual acceptance
remain manager-owned.

## Method and custody

Restore
`test-results/active_villains_validation_harnesses/old_weapon_routes.mjs.txt` to
`tests/_temp/old_weapon_routes.mjs`, then run
`node --import tsx tests/_temp/old_weapon_routes.mjs` from the repository root. Every live state
starts through `create_game_state`; every transition uses ordinary left/right/jump inputs through
`step_game`. There is no state injection, teleport, altered live state, or physics bypass.

The canonical inputs come from the accepted retained full-23 browser driver's five route fixtures
under `test-results/counterweight_campaign/final/`. The driver's authored final walks are preserved.
The extended finale controller is restored inside the temporary harness from
`test-results/fresh_validation_harnesses/finale_route.mjs.txt`. Only its returning-flight dodge
controller changes, as explained below. Route exports preserve `{levelId, frames:[{input,dt}]}`;
finale exports preserve the archived `{dt,frames,timeline,checkpoints,events}` schema.

Exact source and fixture hashes are in `test-results/old_weapon_routes/source_manifest.json`.
The production `src/levels_final.ts` SHA-256 is
`5f5b3e370a7fa299d91ad88b00438df3b798d72fad9b57570ffc24fad79d2a42`.
The final run is retained in `test-results/old_weapon_routes/run.log`.

## Ordinary route results

| Stable room | Result | Simulation seconds | Observed relationship |
| --- | --- | --- | --- |
| 13 | Complete | 16.000 | Isp uses FLOAT to reach the high route; RESCUE latches. |
| 17 | Complete | 24.875 | Isp uses FLOAT from the stopped lift, then RESCUE powers Pac's lift. |
| 22 | Complete | 16.058 | Cana outgoing/returning flight and Pac SHOVE; handoff, turnaround, stairs complete. |
| 19 | Complete | 12.517 | Pac recovers SHOVE; RESCUE and both TARGETs complete. |
| 20 | Complete | 13.550 | Isp FLOAT, Cana outgoing/returning, both TARGETs and charge 2 complete. |
| Trial | Complete | 32.892 | Useful FLOAT reaches RESCUE; STICKY, SHOVE, DIZZY recover; both exits reached. |

The five campaign fixtures need no timing edits. Their fresh ordinary inputs are exported as
`test-results/old_weapon_routes/route_13.json`, `route_17.json`, `route_22.json`, `route_19.json`, and
`route_20.json`. The trial export is `route_trial.json`; the trial's Pac jump near the finish is an
ordinary partner-passing maneuver after deliberately waiting for all effects.

## Recovery and dodge

All six archived finale scenarios pass against production range 200:

- Cooperative handoff: 1648 frames; Pac takes no effect.
- Handoff recovery: 2150 frames; releasing STEADY collapses the unsupported bridge, Pac retreats,
  restores STEADY and suppression, Isp takes over, partial charge is interrupted and resets to zero,
  then both heroes restore their targets and finish.
- Initial delays 0.7, 1.8, and 3.1 seconds: 1479, 1597, and 1783 frames. The 1.8-second route recovers
  Pac SHOVE and completes; the other two avoid it.
- Returning-flight dodge: 2101 frames, outgoing and return both observed, zero Pac effects, complete.

The old returning-dodge controller waited for outgoing flight while Pac stood at x910. With the
shared release anchor, that wait permits an immediate launch hit at frame 1175; the old controller
therefore fails its no-hit assertion. The adapted controller jumps in the last 0.15 seconds of
Cana's visible windup, then retains its returning-flight observation and return-leg jump. This
legal anticipatory dodge passes. It is a controller adaptation, not a production correction.
`finale_returning_boomerang.json` retains the complete adapted timeline and checkpoints.

An exploratory ten-second delay prepended to room 17's fixed recording dies at t16.867 after the
recording steers off the FLOAT route before reaching the shelf. Its retained
`level_17_10.json` is a deliberately mistimed playback observation, not an accepted recovery or a
classified source regression. Reproduce separately with `--fixed-delay-probe`. A source-faithful
baseline comparison was not established from the historical bundle: its source map omits required
modules. The partial extracted source was byte-verified into
`/private/tmp/bad_cell_day_old_weapon_baseline_source/` and removed from repository evidence so it
cannot enter canonical TypeScript checking.

## Bounded final bubble experiment

The same final-room world and accepted ordinary inputs were tested with pre-creation temporary
level fixtures whose only change was bubble range 200, 220, 240, or 370. Every candidate completes
in 13.550 seconds and hits Isp with FLOAT at t5.600, x729, y323.875 during the control-step jump,
while Pac holds STEADY. Thus range 200 retains demonstrated local task interference and gives a
shorter bubble relationship. The manager approved and the encounter owner applied range 200.
The current production rerun and all extended finale scenarios pass after that correction.

The four experiment records are `level_20_0_range_200.json`, `level_20_0_range_220.json`,
`level_20_0_range_240.json`, and `level_20_0_range_370.json` under the evidence directory. These are
explicit fixture experiments, separate from production-source acceptance.

## Acceptance limits

This proves ordinary source reachability, real effects, recovery, meaningful FLOAT use, pad handoff,
suppression restoration, both flight legs, deliberate dodge, and final charge. It does not prove
rendered attack readability, reduced-motion appearance, lifecycle/save integration, full 23-room
browser traversal, or novice/two-person usability. Those remain separate manager acceptance gates.
