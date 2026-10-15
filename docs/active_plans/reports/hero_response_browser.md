# Hero response browser acceptance

Date: 2026-10-15. Status: PASS for the targeted runtime/visual lane on the corrected frozen build.

## Artifact and method

Historical initial build served `dist/` at `http://127.0.0.1:8127/`. Harness compares served and local SHA256 values:

- `main.js`: `78e0662331f5981e4ad22a2d94ceaa56f765e2568351d21d34afa2a75206361d`
- `main.js.map`: `a322da0774a801107f902662c8be6a764f50ce8e0914e6d2050a97c1ed4a79a1`
- `style.css`: `edda4b8751aaa681ec73aaedc14d44ddef722da289e2f420cf1f32d700ee68b8`
- `index.html`: `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`

Commands, each exit 0:

The temporary harness has been removed. Restore it from
the archived copy (`test-results/hero_validation_harnesses/hero_response_browser.mjs.txt`)
before using these historical commands; see the
restore guide (`test-results/hero_validation_harnesses/README.md`).

```bash
node --import tsx tests/_temp/hero_response_browser.mjs
node --import tsx tests/_temp/hero_response_browser.mjs supplemental
```

Headless Chromium required sandbox escalation after macOS MachPort denial. The first gameplay
attempt exposed a harness endpoint error: Isp completed level 02 by overlapping the exit at
x=911.75 before the requested x=950. The controller now accepts actual completion and the
subsequent completion assertions verify the intended outcome. No product change addressed that.

All gameplay uses ordinary Playwright keyboard events and public buttons. Only saved earned-room
records are seeded before boot to enable Replay; this is not fresh campaign progression. Runtime
observations use existing read-only Canvas datasets and semantic Game status. No application state
injection, instrumentation, synthetic rendering, or hidden event dispatch is used. Fake browser
clock advancement gives bounded reproducible input intervals; it is not measured human play time.
Both normal and reduced-motion contexts run the same route. `results.json` and
`supplemental_results.json` retain artifact hashes, sampled datasets, status, and empty error arrays.

## Runtime and visual findings

- Level 02: idle, Isp held posture, Pac latch acknowledgment, pause for 1.8 seconds, resume,
  acknowledgment expiry, return to old latch, released hold, retry, completion, and Replay pass.
  Frames 01-12 show recognizable identities, fixed foot positions, and modest whole-body reactions.
  The latch response is subtle; frames 03/05 versus 06 show the transient posture, and frame 07 does
  not show a new response on the old latch. The runtime exposes no feedback attribute, so this is
  visual judgment plus source/unit coverage rather than a browser assertion of timer internals.
- Level 04: Pac holds STEADY; Isp jumps past Pac and walks to RESCUE. Frames 13-16 show Pac's
  low broad brace, Isp's brief latch pose then ordinary stance, and Pac's release. Collision feet
  remain at y=374. Existing large hero art partially covers occupied pad labels; identity badges
  remain readable in these captures.
- Completion: paired canonical Isp/Pac art sits beside the team heading on desktop 1440x1000.
  Both villain reactions, Next, and Replay remain available. At 390x640 the stage panel scrolls
  internally: the paired heading is visible initially, while actions need panel scrolling.
  `24_complete_actions_390_640.png` shows Next and Replay together after scrolling. At 1000x450
  page scrolling is needed; the complete content stays available. Both normal and reduced-motion
  captures were inspected. Replay was actually clicked after the viewport sweep and restored
  clean level-02 spawns at Isp x=70/Pac x=130.
- Level 01: after a two-second delay, Pac misses the departure and waits under the returning lift.
  Frames 18-19 show STEP LEFT and an unambiguous left arrow, while a stationary jump still cannot
  board. Moving left and jumping back rides at Pac y=487.48, versus floor y=514. Frame 20 shows
  riding. Both motion modes produce the same observed positions. These runs establish recovery
  operability, not improved novice understanding.
- Level 03: an ordinary held-right route intentionally falls into the pond. After automatic
  restart the game is playing with Isp x=65/Pac x=125, no effects, and status "Back together.
  Ready for another try!"; frame 21 shows clean idle heroes. The death counter increases.
- Both main runs and both supplemental runs record zero page errors and zero console errors.

## Resolved presentation finding

At RESTORE center, Pac x approximately 596, the identity badge obscures the first cue line:
`22_restore_center.png` and `22_restore_center_reduced.png` show "JUMP FROM" followed by the PAC
badge covering the end of the instruction. At left launch x approximately 641,
`23_launch_badge_overlap.png` and its reduced-motion counterpart show the badge crossing the cue
panel's right edge, although the words remain readable there. This is a concrete legibility
failure at RESTORE center. Escalated to manager/coder; no production files were changed by tester.

## Limits

This targeted lane does not traverse the full campaign, Across the Divide, Crossed Paths, or the
finale. It does not test active interference interruption, the fallback-art path, every edge/stack
arrangement, same-trip paired lift boarding, or human enjoyment. Source unit tests and canonical
full checks are manager-owned and must be reported separately. This lane supplies browser visual
and keyboard evidence only. Human interpretation remains unmeasured; canonical full checks remain manager-owned.

## Corrected-build acceptance

Both commands below exit 0 on the corrected frozen build:

Restore the harness from the archive linked below before using these historical commands.

```bash
node --import tsx tests/_temp/hero_response_browser.mjs main corrected_cue
node --import tsx tests/_temp/hero_response_browser.mjs supplemental corrected_cue
```

Current served/local hashes match:

- main.js: facb97697aef32e9585835e2fcb48e910316ef4e937b7a34d0a3cc772a087347
- main.js.map: af7c8a3ad00ed060e6e199985f2ed7b24e20e4ce35336392900d08b36ffb7bd6
- CSS and index hashes are unchanged from the initial artifact listed above.

All 22 main samples per motion mode are regenerated under corrected_cue/, together with
corrected supplemental samples. Both JSON files record empty console/page error arrays. The
normal and reduced-motion RESTORE-center and launch captures 22/23 were opened and inspected:
the entire JUMP FROM LEFT line and second instruction now clear Pac's badge/body. The prior
blocker is resolved on this actual served build. Frames 17-20 in both modes show readable launch
and STEP LEFT cues through delayed stall, underside jump, and side recovery; the recovery
position remains Pac y=487.48. Corrected desktop completion, reduced-motion hero frames, and
narrow scrolled action captures were also opened and inspected. No new blocking visual defect
was observed in this targeted sample. Earlier PNGs remain preserved as before evidence.

The detailed route findings and limits above apply to this rerun. Completion at narrow size
still needs internal panel scrolling; this is documented behavior, not an all-controls-visible
claim. Latch timing is a visual observation here, supported separately by source-level tests.
No fresh campaign, interference, or enjoyment claim follows from this acceptance.

## Retained evidence

Final corrected results: results.json (`test-results/hero_response/corrected_cue/results.json`)
and supplemental_results.json (`test-results/hero_response/corrected_cue/supplemental_results.json`).
The corrected badge-clearance captures are
22_restore_center.png (`test-results/hero_response/corrected_cue/22_restore_center.png`) and
23_launch_badge_overlap.png (`test-results/hero_response/corrected_cue/23_launch_badge_overlap.png`);
the filename of the latter preserves the original regression label.
The scroll-reached actions appear in
24_complete_actions_390_640.png (`test-results/hero_response/corrected_cue/24_complete_actions_390_640.png`).

All original before/after evidence and the original tester report are byte-verified copies under
`test-results/hero_response/`. manifest.json (`test-results/hero_response/manifest.json`) records
per-file SHA-256 values. The exact harness is archived at
hero_response_browser.mjs.txt (`test-results/hero_validation_harnesses/hero_response_browser.mjs.txt`).
The evidence bundle also retains a byte-identical copy. The temporary executable has been removed
from `tests/_temp/`; restore it from the archive before using the historical commands above. See the
harness restore guide (`test-results/hero_validation_harnesses/README.md`) for exact
commands and dependencies. The `.mjs.txt` archive keeps temporary harnesses out of repository
JavaScript lint discovery.
