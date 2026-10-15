# Difficulty browser acceptance

Fresh built browser acceptance on 2026-10-14 passes the reordered opening four rooms with
ordinary keyboard input and zero retries. A separate legacy-save context preserves the old lift
room's earned record and Replay access. A separate selected-final scenario completes the final
room and verifies the ending and Replay branch. These are rehearsed routes, not novice difficulty
measurements or a fresh twenty-room playthrough.

## Executed checks

Build command: `./build_github_pages.sh` (exit 0). Existing Python static server serves `dist/` at
`http://127.0.0.1:8123/`. Browser command:
`node tests/playwright/_temp_difficulty_browser.mjs` (exit 0). Headless Chromium runs outside the
macOS sandbox through approved escalation. Catalog comparison command:
`npx tsx tests/_temp/difficulty_browser_catalog.ts` (exit 0).

The browser context is 1280x800. Playwright pauses its clock, advances in 16 ms intervals, and sends
real keyboard A/W/D and arrow input. Read-only canvas position, stable-ID, and phase projections
from the runtime guide the controller. No runtime state, coordinates, mechanisms, or outcomes are
injected. Fresh progression starts without storage seeding and uses visible Play and Next controls.

The exact routes come from [villain_tutorial_routes.md](villain_tutorial_routes.md). The lift route
adds a deliberate missed boarding while the lift is high: Isp lands on the full floor at
`x=800, y=514`, then safely returns to the low boarding area and completes. The saved times include
that recovery, and neither character dies.

| New position | Stable room | Rehearsed seconds | Retries | Sparks |
| --- | --- | --- | --- | --- |
| 01 | `level_02` | 7.658 | 0 | 2 / 2 |
| 02 | `level_01` | 30.925 | 0 | 3 / 4 |
| 03 | `level_04` | 9.092 | 0 | 2 / 2 |
| 04 | `level_03` | 8.792 | 0 | 2 / 2 |

The first room completes without any jump input. Its Hint control reveals the Isp/Pac keyboard
instructions and HOLD/RESCUE explanation; ordinary scrolling exposes the hint strip below the
initial viewport. Both keyboard control cards are visible at the initial viewport. The second
room is visibly numbered 02 and titled `Glucose Going Up!`; its lift and jumps retain the authored
safe recovery. Both heroes and both villains are visible in all four opening captures. Every
completion presents both villain reactions and a reachable Next control.

Next after new position 04 opens `level_06` at position 05. Reload retains four actual completion
records; the selector shows four Replay rooms, position 05 Ready, and position 06 Locked. All twenty
rendered selector ordinal/title pairs match read-only source inspection of the approved stable-ID
order `02,01,04,03,06,08,05,07,11,09,10,12,13,14,15,16,18,17,19,20`.
Boss definitions remain at positions 16, 19, and 20.

## Separate save scenarios

A distinct browser context seeds only a historical progress record for `level_01`, with best time
42.25 seconds and three collectibles. Loading preserves those exact values. New position 01 is
Ready, the earned room at position 02 is Replay and launches as HUD 02, and position 03 is Ready
because its immediate predecessor is completed. Position 04 remains Locked. This proves existing
room access without implying that unseen rooms become globally unlocked.

Another distinct context seeds only a `level_19` completion (30 seconds, zero collectibles), then
selects final position 20 through the visible selector. The ordinary keyboard route completes in
10.000 seconds, zero retries, and 2 / 2 sparks. The resulting save retains the seeded level 19
record and adds the actual level 20 result. The final panel reads `You saved the cell day!`, shows
both villain reactions and Replay, and has no Next button. Replay starts `level_20` in playing phase.
This selected-final check does not claim the other eighteen rooms were completed in that context.

The manager reviewed the audit's suggested first-room Gem wording edit and retained
`New DNA door. Same excellent beard.` as a self-contained new-trap joke. The screenshot records
that explicit continuity decision; no scene or geometry edits were made for this browser work.

## Evidence and identity

Ignored evidence lives in `output_difficulty/`:

- `1_opening.png` through `4_opening.png`: initial room views.
- `1_hint_scrolled.png`: first-room instructions after ordinary scrolling.
- `1_complete.png` through `4_complete.png`: real completion panels.
- `2_safe_missed_lift.png`: Isp safely below the elevated lift while Pac waits at the exit balcony.
- `reload_first4_selector.png` and `legacy_selector.png`: progress and legacy Replay choices.
- `20_opening.png` and `20_complete.png`: the selected final scenario and ending.
- `results.json`: exact saved records, twenty source/selector pairs, assets, errors, and hashes.

The openings, safe missed lift, legacy selector, final ending, first hint, and opening-four
completion captures were visually inspected. All four SVG character assets return HTTP 200;
there are zero page errors and zero console errors.

| Artifact | SHA-256 |
| --- | --- |
| `dist/main.js` | `defa001dba82fd6871d789473256c4a78b3d9842ea6c892eb1610e51b6f68103` |
| `dist/index.html` | `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7` |
| `dist/style.css` | `4f7c80c21b30d39fadc38ae3c5c6fec881c1882763bc60d31ecaa561b06cda26` |
| Historical temporary browser harness | `68fe96ccda63f1f6762b23c00395ca5f7762a2dcc431f8f039d6c9b70b2206b2` |
| Historical temporary catalog comparison | `43bda379aa6b4b8b38d923d312409679eb2655e868b07b6852d34959fe4d9184` |

Temporary harnesses are removed after acceptance. No permanent browser test or production source
changes are introduced by this acceptance task. Geometry preservation and prior all-room route
proof remain separate evidence; this fresh run covers the reordered opening, persistence, legacy
access, and final branch. Human first attempts, two-person coordination, and novice difficulty
remain pending observation.
