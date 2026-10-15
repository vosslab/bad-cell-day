# Tutorial simulation playthrough

The five authored tutorials complete death-free using legitimate player input only.
Historical executed command: `node --import tsx tests/_temp/tutorial_playthrough.mjs`
from the repository root (exit 0, `PASS: 5 tutorials complete through real inputs`).
The run exits 0 and prints `PASS: 5 tutorials complete through real inputs`.

Each level starts with its unmodified `create_game_state` result. Every frame calls
`step_game(state, input, 1 / 60)`. The controller reads coordinates to choose movement
and jump input; it never edits players, pads, platforms, doors, collectibles, or status.
It then creates a fresh state and replays the captured key intervals without consulting
coordinates. The replay must match the entire resulting state exactly.

| Tutorial | Frames | Simulation seconds | Result |
| --- | --- | --- | --- |
| 01 | 547 | 9.1083 | Complete |
| 02 | 458 | 7.6250 | Complete |
| 03 | 480 | 7.9917 | Complete |
| 04 | 522 | 8.7000 | Complete |
| 05 | 552 | 9.2000 | Complete |

## Reproducible actions

Coordinates below describe player left x. All jumps start grounded; after reaching a
jump target the controller releases input and waits for landing. Walking means hold
right until within 1.76 px of the target. The final action stops immediately when the
simulation reports complete; exit overlap can trigger before the nominal target x.
The executable prints exact half-open frame intervals `[start, end)` and their held
browser keys, including neutral intervals. Frame indices begin at zero separately for
each level. Its interval output is suitable for deterministic browser stepping at 60 Hz.

- Tutorial 01: Pac walks to205, jumps to320, walks375, jumps432, walks1020.
  Isp repeats205/320/375/432, then walks950. The optional blue perch is skipped.
- Tutorial 02: Isp walks235 and holds. Pac walks550 to latch RESCUE, then1020.
  Isp walks950 after Pac has latched the door.
- Tutorial 03: Isp walks195 and holds STOP. Pac walks260, jumps405, walks557,
  jumps750, then walks1030 through RESCUE. Isp walks260, jumps405,
  walks583.22 on the moving ferry, jumps750, then walks960.
- Tutorial 04: Pac walks205 and holds STEADY. Isp walks140, jumps300 over Pac,
  then walks982 through RESCUE. Pac walks900, then jumps1045 over parked Isp.
- Tutorial 05: Isp walks130 and holds STOP. Pac walks180, jumps325, walks376,
  jumps530, then walks560 to hold STEADY. Isp walks180, jumps325, walks401.90,
  jumps530, then jumps690 over Pac before walking995 through RESCUE.
  Pac walks930, then jumps1055 over parked Isp.

## Authored route corrections

The [tutorial_routes.md](tutorial_routes.md) hypotheses omit player pushing in tutorials
04 and05. Walking Isp through stationary Pac pushes Pac off STEADY and can collapse
the bridge. Tutorial04 was reproduced failing this way. Isp must jump over the holder,
or both players must coordinate a different valid maneuver.

Parking Isp at his exit and then walking Pac through him can push Isp past his exit.
The recorded routes jump Pac over Isp. Tutorial05 also lands Isp on Pac's head on the
island (feet364 becomes feet328), then uses a fresh jump to clear Pac while STEADY
remains held. These are ordinary supported mechanics, with no state manipulation.

Tutorial03's STOP freezes the ferry near x322.5 in this replay, rather than the authored
approximate x370. Pac's second jump action starts at x557 and ends at x749.5. The action holds
right after landing, so its total action displacement is longer than its airborne
displacement. Player width also permits landing when the leading edge first overlaps
the right shore. This demonstrates success under actual collision geometry. Isp's released moving-ferry route also completes.

## Scope of evidence

This proves individual tutorial solvability and deterministic repeatability in the actual
simulation with the default authored state. It does not prove browser keyboard wiring,
menu transitions, a human's timing tolerance, optional collectible completion, or all
possible moving-platform phases. Browser acceptance remains a separate check.
No product source files were changed for this playthrough.
