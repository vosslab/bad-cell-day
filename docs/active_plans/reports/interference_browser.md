# Trial browser acceptance

## Result and scope

The built Troublemaker Trial completes using ordinary keyboard input, and all four
effects have visible browser evidence. Fresh and existing campaign saves retain
identical serialized bytes. Replay, return to the 20-room selector, and starting
the first campaign room work. Final title layout passes after the narrow UI fix.
This is operability and visual evidence, not human enjoyment or learning acceptance.

Checks ran on 2026-10-14 with headless Chromium through Node Playwright over
`http://localhost:8123/`, serving `dist/`. No private simulation API, teleport,
state mutation, or synthetic hidden-control event was used. Canvas datasets were
read-only observations. Campaign physics/curriculum were not exhaustively replayed;
the sampled first room and selector supplement the source tests and existing smokes.

## Build provenance

SHA-256 values for the final build:

| Artifact | SHA-256 |
| --- | --- |
| `dist/main.js` | `51993fdbfd9c730ac370edf121d10c181c928a4b2279f767744ea025f9f5734f` |
| `dist/main.js.map` | `f84efa69f4a9ecbe6c93d7ef6acd143f4055fa99109c7211450d9aa890006098` |
| `dist/style.css` | `e2f0248615d9cc6d388b80781ef575ef33e35f56e1acf8855e1c883ffeae131b` |

The final source map's embedded source exactly matches the current `app.tsx`,
`runtime.ts`, `interference_trial.ts`, `interference.ts`, `render_interference.ts`,
`physics.ts`, `game_state.ts`, and `render_game.ts`. The prior gameplay build had main hash
`e01a8349b5bbf22895add159a278d21c7ec557198311cf94e8874221df99eb76`
and map hash `56db2274b6869f539ea8f171210f3350079d890aa48e4f0dd0a3132b5bccca1f`.
Its gameplay sources also matched. The final change affected title composition;
the dedicated shove, windup, flight, recovery, restart, and seeded-save evidence
comes from that prior build. Final title, entry, keyboard completion, replay,
selector, first-room movement, and three effect captures were refreshed.

## Keyboard route

Input was held with `page.keyboard.down/up`, advancing finite simulation intervals
with `page.clock.runFor`. The clock was installed and paused before navigation;
ordinary screenshots and test execution therefore could not advance simulation.
Segments below reproduce the route, with normal frame quantization:

| Keys | Seconds | Observed landmark |
| --- | --- | --- |
| ArrowRight | 0.50 | Pac x145 holds ENTRY; Isp is pushed to x175 |
| d | 0.60 | Isp x299.25 waits in bubble bay |
| none | 3.20 | FLOAT; Isp rises to approximately y398 |
| d | 0.85 | Isp x435 clears ledge and reaches RESCUE |
| none | 0.90 | Isp lands y344; both gates stay open |
| d + ArrowRight | 2.30 | Pac briefly STICKY; Isp DIZZY in Cana lane |
| ArrowRight | 1.80 | Pac catches up and pushes Isp normally |
| d + ArrowRight | 0.70 | Trial complete, zero retries, about 10 seconds |

The first FLOAT was additionally paused for 2,000 ms. Its published effect,
positions, level, and paused phase remained identical. Resume continued ascent,
recovery, and completion. A separate real Tab/Enter navigation reached the title
trial button and started the room on the final build.

## Effects and recovery

- FLOAT visibly raises Isp above the ledge while right steering reaches the latch.
  The mid-ascent capture shows Isp around y398, away from Gem's launch position.
- STICKY briefly holds Pac around x251.75 while right input remains held; ordinary
  motion resumes and Pac subsequently reaches the exits.
- DIZZY preserves rightward steering: Isp is observed around x704.06 during the
  effect, then continues through the lane and recovers to `none`.
- For SHOVE, leave Isp on RESCUE, move Pac right for 3.5 seconds after the latch,
  then wait seven seconds in the lane. Pac reaches x752.25, is struck around
  x756.54, and settles at x805.33 with no input and effect `none`.
- Restart during active DIZZY immediately returns both heroes to x90/x40 and
  clears both published effects. Another restart after the effect walkthrough
  shows closed gates, original positions, and no flying projectiles. Replay also
  starts with clean effects/positions. Exact internal timer, immunity, and
  projectile-array resets are source-test evidence; the browser observes their
  visible behavior rather than reading private remaining timers.

## Save and menu evidence

Fresh-context bytes before and after completion/replay/selector/reload:

```json
{"version":1,"completed":[],"soundEnabled":true,"reducedMotion":false}
```

Seeded-context bytes remain exactly:

```json
{"version":1,"completed":[{"levelId":"level_02","bestTime":25.5,"bestCollectibles":1}],"soundEnabled":false,"reducedMotion":false}
```

The selector contains exactly 20 campaign buttons plus the separate trial section.
Fresh context has one unlocked room; seeded context has two. Trial completion has
the explicit `Trial complete` heading, `Back to levels`, and `Replay trial`.
There is no `Next level` button or final-campaign completion message. Selecting
the first campaign button starts `level_02`, and both heroes move with their normal
keys. Reload after the trial preserves the same saved bytes. The runtime singleton
allowlist was reviewed by source inspection, not covered by runtime tests; browser
behavior confirms its public entry.

## Screenshot inspection

Evidence is local and ignored under `test-results/interference/`. The following
actual images were opened with `view_image`, rather than inferred from assertions:

- `effect_float.png`, `route_2.png`, `effect_sticky.png`, `effect_dizzy.png`,
  `effect_shove.png`, `float_paused.png`, and `restart_cleared.png`.
- `windup.png`, `outgoing_midfloat.png`, and `boomerang_return.png`: bright READY
  telegraphs precede launch; Gem's gun and Cana's hand origin are visible. The
  boomerang is visible away from Cana on both legs, including after its turn.
- `completion.png` and `completion_short.png`; the short viewport requires normal
  page scrolling to reach the controls, and actual clicks successfully reach them.
- `final_title1280.png`, `final_title_short.png`,
  `final_title_short_scrolled.png`, and `final_title_narrow.png`.

The four characters' faces remain readable during effects; effect arcs and stars
do not obscure their eyes. Route instructions and effect labels are readable at
1280x800. At 1000x450 the page scrolls normally; the title control becomes fully
visible on scroll and remains keyboard reachable. At 390x844 both title buttons
fit inside the stage. No new loud-art usability blocker was found.

The first build clipped the desktop trial button by 3 px and hid the note beneath
it. This was a real layout issue, independently flagged by the manager and fixed
by the UI owner. Final 1280x800 bounds: stage bottom 567.48, trial button bottom
515.98, play note bottom 550.48. At 1000x450 these are 703.19/577.66/612.16; at
390x844 they are 760/438.11/470.61. Both controls and note fit the stage in each.

## Commands and execution notes

The temporary browser harness was `tests/playwright/_temp_interference.mjs`; it
was removed after acceptance. Exact principal commands were:

```bash
source source_me.sh && python3 -m http.server 8123 --directory dist
node tests/playwright/_temp_interference.mjs
INTERFERENCE_SEED='{"version":1,"completed":[{"levelId":"level_02","bestTime":25.5,"bestCollectibles":1}],"soundEnabled":false,"reducedMotion":false}' INTERFERENCE_RESULT=seeded_observations.json node tests/playwright/_temp_interference.mjs
INTERFERENCE_RESULT=effects_observations.json node tests/playwright/_temp_interference.mjs
RESET_EFFECT=dizzy INTERFERENCE_RESULT=reset_dizzy.json node tests/playwright/_temp_interference.mjs
SHOT_PREFIX=final_ INTERFERENCE_RESULT=final_observations.json node tests/playwright/_temp_interference.mjs
SHOT_PREFIX=final_ INTERFERENCE_RESULT=final_keyboard_layout.json node tests/playwright/_temp_interference.mjs
shasum -a 256 dist/main.js dist/main.js.map dist/style.css
```

The harness consumed temporary command segments from
`/private/tmp/interference_browser_commands.json`, derived from the gameplay owner's
source-proven `/private/tmp/interference_route_inputs.json`. Observations and logs
retain exact positions and serialized saves. Successful runs record `errors: []`
from page-error and console-error listeners. No claim is made about unobserved
platforms or reduced-motion browser playback. Reduced-motion rendering was inspected
in source; browser playback and meaningful effect-test coverage were not established.

Exploratory failures were test-environment/harness issues: the initial server was
not running (`ERR_CONNECTION_REFUSED`); starting the static server resolved it.
An initial unpaused fake clock allowed screenshot wall time to advance simulation;
the deterministic runs pause it first. An initial replay assertion read datasets
before the next rendered frame; ordering the click before finite clock advancement
resolved it. These are retained here rather than represented as clean first runs.
No new permanent browser test was added by this lane.

## Integration acceptance

Fresh specification and quality reviews accept the final title correction and
browser evidence. Independent integration review accepts the composed result:
the three final build hashes above match, all eight inspected owned source-map
entries match current sources, and static CSS matches its source. The five
campaign/save source hashes match the turn baseline. No rebuild was necessary.

The manager reports the final 22-check suite and production build passed after the
title correction. The two existing permanent browser smokes passed before that
title-only change; the final trial and title/browser route were refreshed after it.
Human play evaluation remains separate from completed implementation acceptance.
