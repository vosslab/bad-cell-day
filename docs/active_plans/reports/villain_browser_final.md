# Final villain browser acceptance

Executed 2026-10-14 against the built application served at `http://127.0.0.1:8123/`.
Levels 13-20 complete sequentially with zero in-game retries and no console or page errors.
All three bosses complete through the ordinary paired TARGET route; level 20 reaches
"You saved the cell day!", displays both villain portraits and ending quips, omits Next,
and offers a working Replay control. All 20 saved records survive reload and all 20 menu
buttons are enabled and marked Replay.

## Method and build

Historical command: `node tests/playwright/_temp_villain_final.mjs` (exit 0; temporary runner
removed after acceptance).
Chromium ran outside the macOS sandbox after its MachPort restriction prevented launch.
The ignored, temporary controller uses Playwright keyboard down/up, real visible controls,
and an installed Playwright clock advanced in 16 ms animation increments. It reads the
rendered canvas coordinate attributes to choose movement and landing waits. The actual
application runs its normal 120 Hz physics. No simulation code is imported and no player
position, mechanism, boss state, or completion state is changed by the controller.

Only valid completed records for levels 01-12 are seeded before boot, with explicitly
placeholder one-second times. Levels 13-20 are earned in this run through visible level
13 selection and sequential Next clicks. This is final-campaign continuation acceptance,
not a fresh-storage 20-level run.

Read-only canvas drawing observation confirms Gem and Cana SVG draws in every final room.
Network observation confirms all four canonical SVG assets load successfully; cached 304
responses on reload are accepted along with initial 200 responses. Canvas drawing observation
also records the actual power warning, outage, and subsequent restored motor labels.

| Level | Saved seconds | Retries | Sparks | Outcome |
| --- | ---: | ---: | --- | --- |
| 13 | 9.892 | 0 | 1 / 2 | Complete |
| 14 | 49.208 | 0 | 2 / 2 | Complete after deliberate outage waiting |
| 15 | 9.108 | 0 | 2 / 2 | Complete |
| 16 | 19.525 | 0 | 2 / 2 | Boss complete after deliberate outage waiting |
| 17 | 20.867 | 0 | 2 / 2 | Pac POWER and Isp RESCUE lift route complete |
| 18 | 5.525 | 0 | 1 / 2 | Complete |
| 19 | 19.833 | 0 | 2 / 2 | Boss complete after deliberate outage waiting |
| 20 | 20.092 | 0 | 2 / 2 | Final boss and campaign complete |

The tested `dist/main.js` SHA-256 is
`bfe9b24ca58b8ad447c58a48bf7169753b5a6f3ac40b3a1e0e6c2d16a3862eb0`.
The tested `dist/index.html` SHA-256 is
`15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`.
This build predates the manager's subsequent reaction-only renderer adjustment; these hashes
identify the exact gameplay acceptance artifact.

## Evidence and inspection

Local evidence is retained under `/private/tmp/villain-browser-final/`:

- `results.json`: measured coordinates, saved times, saved records, SVG observations,
  power labels, empty error collection, and build hashes.
- `13_opening.png`: both villains, opening lines, causal connections, larger heroes,
  exits, pads, and slime visible together.
- `14_warning.png`, `14_outage.png`, `14_restored.png`: POWER OFF SOON, NO POWER,
  and restored green glucose/motor supply after the rescue route.
- `16_opening.png`, `16_ending.png`, `19_opening.png`, `19_ending.png`:
  boss rooms and their paired villain ending portraits/quips.
- `20_opening.png`, `20_ending.png`, `20_replay.png`: final room, actual ending,
  both readable villain portraits/quips, absent Next, and functioning Replay.
- `persist20.png`: reloaded level menu scrolled to the final replayable room.

Opening, outage/restoration, and final-ending images were visually inspected. Heroes, villain
silhouettes and labels, pad ownership, exits, causal wires, and both ending portrait cards remain
legible at the tested 1440x1000 viewport. The larger characters do not obscure the starting
control pads in these captures.

## Limits and controller corrections

An exploratory controller wait stalled harmlessly in level 15 because Isp landed on Pac
at y428 instead of the ground at y464. The wait was corrected and a fresh continuation run
completed. A later complete gameplay run exposed a test-only network assertion that rejected
a valid cached SVG 304 response on reload. After accepting 200/304 responses, the final clean
run completed all gameplay and persistence assertions with zero in-game retries and no errors.
The old `failure.json` and `failure.png` are exploratory controller diagnostics, not final evidence.

This establishes one legal browser route per final room, including deliberate scheduled outages,
ordinary power restoration and the level 17 lift handoff. It does not establish novice timing
comfort, every optional collectible, every mechanism phase, or other viewports. Simulation-level
frozen-carrier and rescue-during-off-window proof remains in
[villain_final_routes.md](villain_final_routes.md). No production source or build file was edited
by this browser verification task.
