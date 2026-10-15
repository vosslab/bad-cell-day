# Encounter browser acceptance

Status: fresh targeted browser acceptance passes on the final frozen build. The idle return-hit
death below is an observed intentional challenge under the user's clarified design guidance.
This report covers the two encounter rooms; the separate campaign operator owns fresh all-20 proof.

## Artifact and method

Tested the manager's built static site at `http://127.0.0.1:8123/` with Chromium via
Playwright. Final accepted `dist/main.js` SHA-256:
`980ad68be5a185ab0f3254bd135e2d92dc8d88732162c840bc52218839cd0eaa`.
The served response and local file match. `dist/main.js.map` SHA-256:
`07fda0d6913a85ee653f1052f6aed07e4e0d37c2bb2fe847cab171fad5bc50ff`.
The historical temporary browser harness was `tests/_temp/overnight_encounters.mjs`; it and
its plan-specific input timelines were removed at closeout. Captures and JSON evidence remain
under `test-results/overnight_encounters/`. No production source or distribution was changed
by this operator.

The earlier build `4558eac0ebb9fa733dcc7d1633e83f40a360a634a2f63280d580505d8d138e16`
passed the same targeted checks. Its raw artifacts were removed by a later test-runner output
cleanup. All paths below now refer to newly generated final-build captures, not retained old images.
Seven fresh runs produce seven state JSON files; each records the final JavaScript hash,
zero console/page errors, zero failed/HTTP-error requests, and existing screenshot paths.

Seeded completion records for the first 18 campaign positions solely to unlock selectors.
Both rooms started through their ordinary level buttons. Every subsequent movement used real
keyboard events; no player positions, effects, mechanisms, boss state, or completion were set.
Playwright's finite fake-clock intervals advanced the ordinary game loop. Historical source routes
from `tests/_temp/encounter_inputs_level_17.json` and `_19.json` provided keyboard intervals;
these temporary timeline files were removed at closeout after playback.
The browser runs at RAF cadence; a recovery replay once needed an ordinary final move to the
exit after its input timeline ended a few pixels short. That tail was explicit in the executed harness.

## Results

- Both normal routes completed with zero retries: stable `level_17` (campaign position 18)
  and stable `level_19` (campaign position 19),
  with displayed times 0:24 and 0:12 respectively. Browser datasets recorded
  Isp FLOAT and Pac SHOVE, followed by recovery to `none`. Completion screenshots preserve
  both heroes in their respective exit routes.
- The recovery timelines complete too: Gem's first bubble is missed; an unsteered float returns
  to the safe launch bay before another shot succeeds. Cana's console shove recovers and Pac
  reaches STEADY. Both recovery routes also complete with actual browser reduced-motion
  emulation enabled. The UI has no reduced-motion toggle; its runtime reads the OS preference.
  Both ordinary and reduced-motion recovery runs show 0:32 and 0:13, with zero retries.
- An ordinary vertical jump on Gem's unpowered launch bay reached feet y459.92 in the sampled
  attempt, below the y370 balcony. FLOAT reaches that balcony and Isp's RESCUE powers Pac's
  lift. This is a focused jump-bypass experiment, not exhaustive adversarial route search.
- Pausing during FLOAT freezes the rendered position and effect for two simulated seconds.
  Resume permits expiry; keyboard retry restores both spawns and clears the effect.
- Holding STEADY produces the visible `HELD - SILENCED` state and keeps it for five seconds.
  Leaving it restores cooldown and a full visible WINDUP; returning cancels that warning. Separate IN FLIGHT and HELD - SILENCED captures show
  active-projectile cancellation as Pac returns to STEADY.
  RESCUE preserves suppression after Pac leaves STEADY in the completion route.
- Isp occupies his boss target before Pac's target; play remains active until both required
  targets are occupied. Final completion is consistent with the authored two-target gate.
- All six SVG assets decode: Isp, Pac, Gem, Cana (240x240), bubble organ and glucose organ
  (320x200). Zero console errors, uncaught page errors, failed requests, or HTTP errors were
  observed in all seven fresh runs. Historical initial opening screenshots raced lazy image loading; captures
  now await image decode and advance a rendering frame. No rebuild was necessary.

## Return-leg edge experiment

A separate deliberate late-arrival experiment waits on the hall until room time 4.0s, then
jumps Pac to x570 after the outgoing boomerang has passed. The returning shot hits at
x564.21/y394. With no steering, it pushes Pac off the left edge: after 800ms Pac is
x515.42/y551.58, phase `dead`, retries 1 (`results_return.json`). With immediate ordinary
ArrowRight held for 400ms and then released for 400ms, Pac finishes x599.42/y394, no effect,
phase `playing`, retries 0 (`results_return_controlled.json`). This is a recoverable late
hazard with input and it punishes standing at the console edge. The user distinguished an
avoidable death during idle input from a defect and intended this as an avoidable challenge,
so no catch step or physics change is requested. That design decision does not establish
human perceptions of fairness.
A timed ordinary jump also avoids the return without a hit: after this late landing, wait
650ms, jump for 250ms, release, and land at x568.50/y394 with no effect and zero retries.
Then walking to STEADY silences the attack (`results_return_dodge.json`). An earlier jump
lands into the returning shot and dies; the jump has a meaningful timing requirement.

The visible WINDUP lasts 1.2 seconds after the 2.2-second cooldown, with a dashed attack path
and warning label. The boomerang then travels about 205 world pixels at 150 pixels/second
(about 1.37 seconds each way). Its return is shown by the weapon moving back along that
path while IN FLIGHT remains visible; there is no separate fresh warning for the return.
The countersteer trial recovers after SHOVE expires. Source inspection confirms 0.4-second
SHOVE, 0.8-second additional immunity, and one hit per player per projectile; this is source
corroboration, not a new browser telemetry field. No softlock occurred: dodge, countersteer,
STEADY, RESCUE, both targets, retry, and both exits remain operable. Bot timing establishes
these options, not human perceptions of fairness or enjoyment.

Outgoing SHOVE normally nudges Pac onto STEADY, which cancels the projectile before its return.

## Visual evidence

Visually inspected the 1280x800 opening, FLOAT, SHOVE, suppression, warning cancellation,
short, and narrow captures. The organ art stays behind the gameplay layer and preserves the
existing background and hero artwork. Stage routes and effects remain visible at desktop size.

Useful captures under `test-results/overnight_encounters/`:

- `level_17_opening.png`, `level_19_opening.png`
- `level_17_isp_float.png`, `level_19_pac_shove.png`
- `level_17_complete.png`, `level_19_complete.png`
- `level_17_float_paused.png`, `level_17_retry_clean.png`
- `level_19_steady_suppressed.png`, `level_19_steady_still_suppressed.png`
- `level_19_reactivated_cooldown.png`, `level_19_reactivated_warning.png`
- `level_19_warning_cancelled.png`, `level_19_reactivated_flight.png`,
  `level_19_flight_cancelled.png`
- `level_19_short.png` (800x600), `level_19_narrow.png` (390x844)
- `narrow_level_menu_bottom.png`
- `level_19_return_after_idle.png`, `level_19_return_after_controlled.png`
- `level_19_return_jump_dodge_dodge.png`, `level_19_after_dodge_steady_dodge.png`

State evidence: `results.json`, `results_recovery.json`, `results_recovery_reduced.json`,
`results_extras.json`, `results_return.json`, `results_return_controlled.json`, and
`results_return_dodge.json`. Fresh visual inspection covers FLOAT, SHOVE, WINDUP, and the
390px narrow page: effects and stage targets remain distinguishable at desktop size; the narrow
canvas text limitation remains. The final rerun retains the original pause, retry, suppression,
short viewport, and level-menu screenshots for direct review.

At 800px wide, game labels and controls remain readable; the full page requires vertical
scrolling. At 390px wide, the page and buttons fit without horizontal overflow, and the level
menu scrolls to its bottom. Canvas text scales very small: this is usable page layout evidence,
not acceptance of comfortable narrow-screen gameplay. A shared keyboard remains recommended.

## Commands and limits

Historical commands executed from the repository root (repeated runs overwrote stable capture names).
The plan-specific harness and input timelines were removed at closeout; these are execution
records rather than currently runnable entry points. Captures and JSON evidence remain in
`test-results/overnight_encounters/`.

```bash
node tests/_temp/overnight_encounters.mjs
RECOVERY=1 node tests/_temp/overnight_encounters.mjs
RECOVERY=1 REDUCED=1 node tests/_temp/overnight_encounters.mjs
EXTRAS=1 node tests/_temp/overnight_encounters.mjs
RETURN=1 node tests/_temp/overnight_encounters.mjs
RETURN=1 RETURN_RECOVER=1 node tests/_temp/overnight_encounters.mjs
RETURN=1 RETURN_DODGE=1 node tests/_temp/overnight_encounters.mjs
```

On the historical run, Chromium startup inside the filesystem sandbox failed with macOS
`MachPortRendezvousServer ... Permission denied (1100)`. The approved next option was the
same local browser command outside that sandbox; no dependencies or browsers were installed.
All seven final runs used that approved browser invocation and exited 0 without a new blocker.
A historical temporary harness syntax error was corrected before capture. The first Cana recovery attempt
stopped short due to RAF timing; the legal exit tail then completed. These were operator harness
issues, not silent product repairs.

This is scripted single-operator acceptance with fake time and seeded prior records. It does not
establish novice difficulty, enjoyment, two-human coordination, or a fresh whole-campaign save.
The separate final campaign operator owns that proof. The new safe bubble introduction in room 13
is outside this focused two-room check. Any subsequent production rebuild needs
its own final artifact-bound acceptance.
