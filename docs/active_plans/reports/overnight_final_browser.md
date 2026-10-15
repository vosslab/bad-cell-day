# Final campaign browser acceptance

PASS: all 20 campaign rooms completed in one continuous fresh-save run on the final built artifact,
using visible Play/Next level controls and ordinary keyboard movement. All 20 records survived reload;
every campaign selector entry showed Replay. Every room completed with zero retries. This proves
scripted operability and persistence, not novice difficulty, human enjoyment, or two-person experience.

## Artifact and method

- Served URL: http://127.0.0.1:8123/ with the frozen dist directory; no rebuild by this owner.
- main.js SHA-256: `980ad68be5a185ab0f3254bd135e2d92dc8d88732162c840bc52218839cd0eaa`.
- main.js.map SHA-256: `07fda0d6913a85ee653f1052f6aed07e4e0d37c2bb2fe847cab171fad5bc50ff`.
- style.css SHA-256: `e2f0248615d9cc6d388b80781ef575ef33e35f56e1acf8855e1c883ffeae131b`.
- HTTP main.js bytes matched disk before input. All 26 embedded authored sources matched disk.
- Full file hashes: test-results/overnight_final/artifact_sha256.json.
- Source comparison: test-results/overnight_final/source_provenance.json.
- Fresh browser storage contained zero completed rooms. No campaign unlock or game-state injection.
- Playwright fake time advanced only finite intervals. Canvas datasets were read for coordinates and
  phase; ordinary keys performed every movement and jump. Source route JSON supplied timing only.
- Browser viewport 1280x800. Final gameplay source stayed frozen throughout acceptance.

## Earned campaign records

Times below are the visible HUD values; exact bestTime values are retained in results.json.

| Campaign position | Stable room | HUD time | Retries | Sparks |
| --- | --- | --- | --- | --- |
| 1 | 2 | 0:07 | 0 | 2 / 2 |
| 2 | 1 | 0:30 | 0 | 3 / 4 |
| 3 | 4 | 0:09 | 0 | 2 / 2 |
| 4 | 3 | 0:08 | 0 | 2 / 2 |
| 5 | 6 | 0:12 | 0 | 2 / 2 |
| 6 | 8 | 0:11 | 0 | 2 / 2 |
| 7 | 5 | 0:09 | 0 | 2 / 2 |
| 8 | 7 | 0:14 | 0 | 2 / 2 |
| 9 | 11 | 0:13 | 0 | 2 / 2 |
| 10 | 9 | 0:13 | 0 | 2 / 2 |
| 11 | 10 | 0:11 | 0 | 1 / 2 |
| 12 | 12 | 0:14 | 0 | 2 / 2 |
| 13 | 13 | 0:22 | 0 | 2 / 2 |
| 14 | 14 | 0:09 | 0 | 2 / 2 |
| 15 | 15 | 0:09 | 0 | 2 / 2 |
| 16 | 16 | 0:09 | 0 | 2 / 2 |
| 17 | 18 | 0:05 | 0 | 1 / 2 |
| 18 | 17 | 0:24 | 0 | 2 / 2 |
| 19 | 19 | 0:12 | 0 | 2 / 2 |
| 20 | 20 | 0:10 | 0 | 2 / 2 |

The run did not require collecting every optional spark. Results, earned save records, input actions,
console errors, and resource failures are in test-results/overnight_final/results.json. Console/page
errors: zero. Failed requests or HTTP errors: zero.

## Trial and reduced motion

A separate fresh-save trial run passed pause/resume, intentional keyboard retry, bubble-to-RESCUE
ascent, both exits, Replay trial, and return to Levels. Progress remained byte-for-byte unchanged
with completed=[]; the second campaign room stayed locked. The one trial retry was intentional.
Evidence: test-results/overnight_final/trial.json and trial_complete.png, trial_return_levels.png.

Room 13 also passed the missed-bubble/repeat/recovery route with prefers-reduced-motion: reduce,
zero retries, ordinary keyboard inputs, and no console/page errors. This secondary context reused
only the actual earned 20-room save to unlock visible Replay selection. It changed no gameplay
state. Evidence: test-results/overnight_final/13_reduced_recovery.json and matching screenshots.
The other 19 rooms were not rerun under reduced motion in this campaign proof. The encounter
report records seven fresh targeted runs on the same final `980ad68b` artifact, including the
17/19 reduced-motion recovery run; those captures now belong to the final build.

## Screenshots

All paths below exist beneath test-results/overnight_final/:

- 13_opening.png and 13_complete.png: new safe bubble introduction.
- 18_opening.png and 18_complete.png: campaign position 18, stable room 17 bubble/lift relay.
- 19_opening.png and 19_complete.png: original dangerous boomerang boss encounter.
- 20_complete.png: final victory.
- reload20.png: all 20 Replay entries after reload.
- 13_reduced_recovery_float.png and 13_reduced_recovery_complete.png.
- trial_rescue.png, trial_complete.png, and trial_return_levels.png.

## Commands and corrections

Repository Playwright and package conventions were inspected first. Existing installed Chromium
and the baseline temporary bare-library harness were reused; no dependencies or browser setup
changed. The screenshot owner served dist on port 8123 without rebuilding.

The following commands are historical execution records. The plan-specific temporary harness
was removed at closeout after acceptance; final captures, state JSON, input timelines, and
the reduced-trial evidence remain under `test-results/overnight_final/`.

```bash
node --check tests/_temp/overnight_final_campaign.mjs
node tests/_temp/overnight_final_campaign.mjs > /private/tmp/overnight_final_campaign_run.log 2>&1
TRIAL_ONLY=1 node tests/_temp/overnight_final_campaign.mjs > /private/tmp/overnight_final_trial_run.log 2>&1
REDUCED_RECOVERY=1 node tests/_temp/overnight_final_campaign.mjs > /private/tmp/overnight_final_reduced_run.log 2>&1
```

Chromium initially failed inside the macOS sandbox with MachPortRendezvous Permission denied;
approved unsandboxed execution succeeded. The first HTTP attempt found no port 8123 listener.
A concurrent screenshot owner then started it; this owner's attempted duplicate bind reported
Address already in use and created no server.

The initial fresh run reached room 13 safely but its source-timed route stopped Pac at x788.25,
y284, just beyond the exit, with Isp x658.50/y284 and zero deaths. The harness added ordinary
leftward movement to x745 and restarted all 20 from fresh storage; the passing run is continuous.
The original screenshot/state are initial_13_route_endpoint.png/json. This was controller endpoint
alignment, not impossible geometry. Current input JSON duration is 22.33s rather than the earlier
16s handoff; the exact JSON used is retained in this output folder.

After the successful campaign, the initial trial harness requested Isp x1075 despite a world clamp
at x1070. Correcting the ordinary target to x1065 allowed the separate fresh trial to pass.
trial_failure.png/json preserves that controller diagnostic; campaign completion records were
already saved and remain intact.

A concurrent permanent Playwright invocation cleared early output artifacts; the manager identified
that cleanup and stopped further runner calls. The final run's screenshots, records, logs, full hash
manifest, and source comparisons exist. No gameplay or production edit was made by this owner.

No remaining browser blocker. Human discovery, visual comfort at narrow sizes, learning transfer,
and two-player enjoyment remain unmeasured.

## Reduced-motion trial gate

PASS: a separate fresh Chromium context at http://localhost:8123/ reports
`matchMedia('(prefers-reduced-motion: reduce)').matches === true`. Disk and served main.js
SHA-256 both equal `980ad68be5a185ab0f3254bd135e2d92dc8d88732162c840bc52218839cd0eaa`;
the disk hash also stays unchanged at the end. The existing trialProof keyboard route is reused
in an isolated temporary harness, with finite fake-clock intervals and read-only canvas datasets.
No save, game-state, or movement injection is used.

The trial passes pause/resume (one simulated second of frozen state), an intentional keyboard
retry that clears effects, ordinary FLOAT ascent to RESCUE, both exits, Replay trial with retries
reset to zero, and return to the 20-entry Levels menu with the second campaign room still locked.
Completion shows 0:16 and one intentional retry. Fresh completed=[] progress stays byte-for-byte
unchanged after completion and again after returning to Levels. Zero console/page errors, failed
requests, or HTTP errors are observed. All four document image elements decode successfully
(two unique Isp/Pac SVG URLs); the resource list records the remaining browser requests.

Evidence under test-results/overnight_final/:

- reduced_trial.json: hashes, media query assertion, save bytes, states, key transitions, resources.
- reduced_trial_warning.png: visually inspected static WINDUP labels, AIMING labels, dashed paths.
- reduced_trial_float.png: visually inspected FLOAT label and enclosing bubble outline.
- reduced_trial_complete.png: visually inspected Trial Complete and Replay trial control.
- reduced_trial_paused.png, reduced_trial_rescue.png, reduced_trial_replay.png, reduced_trial_levels.png.
- reduced_trial_run.log and reduced_trial_sandbox_failure.log.
- reduced_trial_harness.mjs: exact isolated harness retained for review; temporary source is removed
  after capture.

Exact commands from repository root:

```bash
node --check tests/_temp/reduced_trial_final.mjs
node tests/_temp/reduced_trial_final.mjs > test-results/overnight_final/reduced_trial_run.log 2>&1
cp test-results/overnight_final/reduced_trial_run.log test-results/overnight_final/reduced_trial_sandbox_failure.log
node tests/_temp/reduced_trial_final.mjs > test-results/overnight_final/reduced_trial_run.log 2>&1
```

The first browser command fails at Chromium launch with macOS MachPortRendezvousServer
Permission denied (1100). The final identical command runs with approved require_escalated
execution and exits 0. No dependency/browser setup, build, production edit, or default Playwright
test invocation occurs. The captured harness can be rerun from repository root with
`node test-results/overnight_final/reduced_trial_harness.mjs`; it overwrites only reduced_trial
artifacts. This proves scripted reduced-motion trial operability and visible cues at 1280x800,
not human motion comfort, novice discovery, or two-human coordination.
