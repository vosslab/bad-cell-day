# Fresh gameplay browser acceptance

PASS: eight targeted keyboard runs complete on the final frozen build, including normal and
reduced-motion recovery paths for all three changed rooms, plus the exact room 21 wrong-order
regression and powered-lift right-miss regression. This is seeded Replay acceptance; fresh
campaign progression is a separate gate.

## Artifact and method

- Served manager-owned build: http://127.0.0.1:8127/.
- Bundle SHA-256: `ac0a8f29eeff6f604896f251c59d6ac2f4b6dd05eb8d9ba7a96267a1fdb472d6`.
- Source map SHA-256: `bf3bf985f766fc079d06dddab9abd179d9e51833961282de3b60999d3d7b93e7`.
- Served main.js bytes match disk before input, and its disk hash remains unchanged afterward.
- All 31 mapped sources match current disk files: 29 authored sources and two Solid dependencies.
- Evidence: `test-results/fresh_browser/results.json` and `source_provenance.json`.
- Temporary driver: `tests/_temp/fresh_gameplay_browser.mjs`; no permanent timing test added.
- Playwright Chromium, built HTTP output, viewport 1280x900, finite fake-clock advancement.
- Valid v1 completion records seed only visible Replay availability for stable rooms 20/21/22.
  Every movement and jump uses ordinary keyboard events. Runtime datasets are read-only.
- Each run pauses for one simulated second, resumes through the visible button, and intentionally
  retries once before traversing. Every completed DOM record reports one retry; no automatic deaths.
- Recovery runs use actual `prefers-reduced-motion: reduce`; normal and wrong-order use no-preference.

## Results

| Stable room | Current campaign position | Normal | Reduced-motion recovery | HUD times |
| --- | --- | --- | --- | --- |
| 20, final tumor | 22 | PASS | PASS | 0:13 / 0:17 |
| 21, Across the Divide | 13 | PASS | PASS | 0:19 / 0:23 |
| 22, Crossed Paths | 20 | PASS | PASS | 0:16 / 0:21 |

Room 20 recovery releases the bridge too early, restores STEADY, interrupts target charging, and
returns to complete the shared shutdown. Room 21 recovery deliberately leaves LIFT, waits, returns
to LIFT, then boards the carrier and completes LINK/HOME and both exits in the same attempt.
Room 22 recovery attempts the blocked inward path and wrong-order stairs, abandons LIFT, returns,
waits at the upper lock, then completes. Its retained screenshot shows Pac's recoverable SHOVE.

The room 21 wrong-order run jumps from the hurdle over ROUTE without activating it, drops
onto the catch shelf, and walks left into the new wall. Isp safely stops at x400/y334. The player
walks right to the boarding notch x465, jumps left onto the original rail, activates ROUTE, then
completes the full partner relay in the same attempt. Both heroes finish; one intentional retry,
zero automatic deaths. Exact checkpoints and keys are in `21_wrongorder.json`.

The new reduced-motion room 21 powered-miss run leaves Pac on active LIFT, then walks Isp right
off the rail before LINK. Isp lands at x620/y334 against the new right wall. Sustained right
walking and five rightward jumps leave Isp enclosed at x620/y334; walking left stops at x400/y334.
Isp walks to the notch x465 and jumps back to x410/y264 on the rail. The same attempt then rides
the lift, activates LINK, lets Pac activate HOME, and reaches both exits at HUD 0:31. Pac's
position is unchanged throughout the initial miss, and the screenshot shows LINK unlatched.
There is one intentional opening retry and no automatic death. Exact inputs and snapshots are
in `21_rightcatch.json`.

All eight runs record zero page/console errors, failed requests, or HTTP errors. Per-case JSON
retains key transitions, HUD/read-only snapshots, source/route hashes and seeded storage records.

## Screenshot inspection

Visually inspected final-build PNGs in the actual image viewer:

- `20_ordinary_shutdown_charging.png`: both target readouts HELD, visible 0.8 / 2s text and partial
  yellow progress. The illustrated tumor core occupies the upper backdrop; it does not cover the
  stepped travel geometry or the shared shutdown panel.
- `21_rightcatch_link.png`: upper Isp LINK and lower Pac LIFT remain distinct; both floors,
  the new catch wall and exit gates are readable. The partner roles are visibly separated.
- `22_recovery_route_024.png`: Isp waits above, Pac has SHOVE below, and both return stairs and
  the closed right canopy remain visible. Reduced-motion play retains static readable labels.
- `21_wrongorder_catchwall_stops_drop.png` and `21_wrongorder_route_recovered.png` preserve the
  wall stop and successful ordinary return; `21_wrongorder_complete.png` preserves both exits.
- `21_rightcatch_powered_miss_rightcatch.png`, `21_rightcatch_catch_returned_to_rail.png` and
  `21_rightcatch_complete.png` show the enclosed miss, return to the upper rail and both exits.

Screenshots establish these desktop states only. Human enjoyment, novice discovery, two-human
coordination and subjective motion comfort are unmeasured.

## Execution and corrections

```bash
node --check tests/_temp/fresh_gameplay_browser.mjs
node tests/_temp/fresh_gameplay_browser.mjs http://127.0.0.1:8127/
```

Chromium's first sandboxed launch fails with macOS MachPortRendezvous Permission denied (1100).
Approved `require_escalated` execution succeeds. The final log is
`/private/tmp/fresh_browser_final_rightcatch.log`. This single aggregate run records all eight
passes on the same frozen bundle; `results.json` contains all eight records. The harness verifies
the seven artifact/source hashes again after all eight cases. All 31 map sources match disk.

The first room 21 recovery endpoint assertion fired with Isp x991/y252 still falling toward the exit.
The harness increases its finite final settling interval from 200ms to 1000ms; the same ordinary
route completes at x991/y457.75. Initial diagnostic JSON is `21_recovery_initial_endpoint.json`.

The first new wrong-order return jump began under the upper rail at x400 and hit its underside.
The controller now walks to the authored visible boarding notch x465 before jumping left to x410.
This ordinary recovery completes; initial diagnostic JSON is `21_wrongorder_initial_jump.json`.
Neither controller correction changes gameplay or bypasses a puzzle.

First-build evidence is retained separately as `initial_build_results.json`. A separate adversarial
review discovered the room 21 wrong-order living softlock after those initial passing routes.
The geometry owner added the Isp-only left catch wall and then the right catch wall below the
landing. The final eight-run proof above includes both corrections. Earlier diagnostics remain
historical evidence, not final-build acceptance. No product edit, build, or canonical runner
invocation was performed by this owner.
