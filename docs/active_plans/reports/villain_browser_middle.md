# Recurring villains: middle browser acceptance

Functional acceptance PASS, 2026-10-14. Visual acceptance has one issue listed below.
This report covers the rebuilt campaign served at
`http://127.0.0.1:8123/`, levels 6-12, in Chromium at 1280 x 800.

## Method and scope

The historical temporary runner `tests/playwright/_temp_villain_middle.mjs` (removed after
acceptance) sent actual keyboard down/up events and advanced the paused Playwright clock, using
the normal runtime physics and completion/save path. Read-only canvas datasets provide player
coordinates, level, and phase.
Read-only Canvas2D instrumentation records the actual rendered text, rounded rectangles, and image
draws. It does not access or change simulation state, pads, player positions, platform power, or
completion status. The known ordinary-input routes come from
[villain_middle_routes.md](villain_middle_routes.md).

This is a continuation segment, not a fresh twenty-level campaign claim. The isolated context seeds
only completed levels 1-5 with placeholder times of 60 seconds and zero sparks. These records unlock
level 6 and are not measurements of tutorial play. Levels 6-12 must earn records through keyboard play,
using Next between levels. No additional level completion is seeded.

Levels 11 and 12 wait six seconds at spawn, deliberately observing the last second warning and the
three-second outage. Two rendered frames half a second apart must show NO POWER and identical carrier
bounds, with the carrier still drawn. After an ordinary counter pad activation, the runner captures
power restored during a nominal off-window. This tests the author-described delayed route.

Initial incomplete controller attempts exposed two harness issues: clock installation alone allowed
real time between calls, and a requestAnimationFrame wrapper was replaced by the clock tool, causing
render observations to accumulate historical frames. The accepted fresh run explicitly pauses the
clock before navigation and resets read-only observations at each Canvas2D clearRect frame boundary.
Earlier historical-frame assertions were discarded. These corrections are not product failures.

## Results

| Level | Displayed time | Retries | Sparks | Result |
| --- | --- | --- | --- | --- |
| 6 | 0:11 | 0 | 2 / 2 | Complete |
| 7 | 0:14 | 0 | 2 / 2 | Complete |
| 8 | 0:11 | 0 | 2 / 2 | Complete |
| 9 | 0:13 | 0 | 2 / 2 | Complete |
| 10 | 0:11 | 0 | 1 / 2 | Complete |
| 11 | 0:19 | 0 | 2 / 2 | Complete |
| 12 | 0:26 | 0 | 2 / 2 | Complete |

All seven levels display their completion panels with both villain reactions. Next advances each
level normally. After reload, saved progress contains exactly twelve completed records; level 12
shows Replay, level 13 is enabled, and level 14 remains locked. There are twenty level buttons.
Console errors and page exceptions are empty. Level 10's optional blue spark was not collected.

Both actors are visible in each opening capture. The 55-world-pixel hero art remains readable at the
rendered canvas scale (about 36 CSS pixels at this viewport), with distinct heads, limbs, and labels.
The slime bands stay within their visible pit floors and leave the safe platform edges clear.
Representative expanded hints are visible below the controls, including level 12's timed-outage,
cargo BRAKE, STEADY, and permanent RESCUE explanation.

Level 11's unpowered stair stays drawn at `(240, 465, 140, 22)` for two frames 0.5 seconds apart.
Level 12's unpowered ferry stays drawn at `(400, 420, 150, 22)` over the same interval (floating point
coordinates rounded here). Both visibly show POWER OFF SOON before NO POWER. At displayed time
0:13, during each nominal 5-8 second off-window, level 11 shows active BLUE and the running motor
marker; level 12 shows active BRAKE and STOP. Both show restored glucose motifs and Cana's countered
reaction. The level 12 capture waits for the next off-window after settling onto BRAKE, accounting
for its longer time; this is ordinary waiting with no state change.

### Visual issue requiring follow-up

At level 10 opening, Cana's speech bubble overlaps Gem's bubble and obscures much of Gem's opening
line at 1280 x 800. Both actors remain visible and the DOM status contains the complete lines, but
the canvas dialogue needs spacing. Evidence: `level10_opening.png`. This has been sent to the manager
for the scene owner to correct. Functional success does not close this visual issue.

## Build identity

Actual served assets at the end of this run:

- `main.js`: `bfe9b24ca58b8ad447c58a48bf7169753b5a6f3ac40b3a1e0e6c2d16a3862eb0`
- `style.css`: `553ee60b9969c895bf430b7c4057a8cb0018f7f45d042639f8467872bc0d2f37`

The report applies to this build. Later dialogue or positioning changes need their own rendered
spot check; this run does not silently validate a rebuilt artifact.

## Evidence

Generated evidence is in `/private/tmp/villain-browser-middle/` (local, untracked), with one opening
and completion image per level, warning/outage/restoration images for levels 11-12, and saved-progress
selection after reload. `results.json` records HUD measurements, saved records, render observations,
browser errors, and SHA-256 hashes of the actual served JavaScript and CSS assets.
