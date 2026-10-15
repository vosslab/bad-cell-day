# Middle campaign routes

Owner: `src/levels_middle.ts`, exporting seven readonly definitions, `level_06` through
`level_12`. Stages: sewers 6-8; laboratory 9-12. No engine or aggregate files changed.

## Replay evidence

All seven routes below completed through `create_game_state` and `step_game` with normal
left/right/jump button inputs at 1/120 second. No state mutation, teleportation, barrier
changes, forced stabilization, or forced outcome was used. The temporary harness is `tests/_temp/middle_playthrough.mjs`; it imports the current
source and accepts the level number. Run `node --import tsx tests/_temp/middle_playthrough.mjs 6`
(and likewise 7 through 12). Completion times are simulation seconds, including deliberate waits after hops.

| Level | Result | Seconds |
| --- | --- | --- |
| 06 | complete, zero deaths | 11.98 |
| 07 | complete, zero deaths | 14.87 |
| 08 | complete, zero deaths | 11.11 |
| 09 | complete, zero deaths | 13.35 |
| 10 | complete, zero deaths | 11.67 |
| 11 | complete, zero deaths | 12.92 |
| 12 | complete, zero deaths | 14.38 |

`npx tsc --noEmit -p tsconfig.json`, scoped ESLint with zero warnings, and scoped
Prettier check all exit 0. Browser/rendered review remains an integration gate.
Collectibles are optional and were not required for these completion proofs.

Coordinates below are player left x; height names refer to standing feet y. `Hop x`
means a fresh jump-button edge, movement toward x, release, then 0.8 seconds settling.
`Walk x` means normal movement to within 2 px. Routes begin with 0.1 seconds settling.
The harness throws on death or movement stuck for ten seconds. Exits overlap the body;
completion can therefore occur before reaching the exact center of an exit.

## 06: Narrow Escape

Feet start500. Isp starts65, Pac350, on opposite sides of the first alcove. This prevents
the low corridor from trapping both behind a stationary partner. Roofs at y420 form
short low passages; wide open alcoves at x180..330 and500..650 have top445.
Isp walks145, hops205 onto the first alcove, then walks275 onto HOLD x240..325.
Pac walks465 through the opened full-height Pac door400, hops535 onto the second
alcove, and walks595 onto RESCUE x560..645. That permanently opens both the Pac door
and Isp's full-height door700. Isp walks340 (drops clear of the first roof), walks465,
hops535 onto the second alcove, then hops690 over waiting Pac and off the alcove.
Pac walks900, hops1035; Isp walks955. The first alcove teaches a safe waiting position;
the second adds collision-aware passing. Roof gaps include a full body width for dropping.

## 07: Double Trouble

Feet410. Isp walks125 onto STOP. Pac walks155, hops255 onto ferry FIRST (x220..260,
width150), walks320, hops475 onto the island440..610, and walks515 onto STEADY.
STOP opens Pac's full-height island door443. STEADY opens Isp's door615 and holds the
170 px unstable bridge. Isp walks155, hops255 onto the now moving ferry, walks330,
hops475 onto the island, then hops620 over Pac onto the bridge. Isp walks730, hops820
onto ferry SECOND (x790..815, width100), then hops955 onto RESCUE on the finish930+.
The latch stabilizes the bridge and opens all three progression doors. Pac walks725,
hops820 onto the second ferry, then hops1035 to the orange exit. Isp remains near955.
Ferry motion, bridge, and the two role gates make the island an actual transfer station.

## 08: Push Comes to Shove

Feet450. Ordinary crate starts210, width40. Pac walks285, pushing the crate toward PARK
x300..385, hops420 over the parked crate and first door410, then walks490 onto STEADY.
Isp walks170 then275, leaving the crate at334.25 with feet450 and PARK active. Isp hops430
over the crate and door, hops600 over Pac onto the unstable bridge570..870, and walks925
onto RESCUE. Pac's hold opens Isp's full-height bridge door580. The rescue permanently
holds the bridge and opens Pac's final door875. Pac walks900, hops1035 over waiting Isp;
Isp walks955. The ordinary crate is the unattended holder that lets both travel together.

## 09: Two Tons of Trouble

Feet450. Isp95, Pac125, heavy crate185, width50. Both hold right for0.8 seconds; they form
a touching chain and push the crate to326.75. It weighs2 on TEAM x300..385, opening the
full-height shared door415. Pac hops390 over the box and walks520. Isp hops410 over the
box and walks495 onto STOP x465..550. Pac hops640 onto the ferry580..620 (width170),
walks715, hops875 onto the finish840+, then walks895 onto RESCUE. STOP both brakes
and opens Pac's full-height landing door843; Pac's latch opens Isp's finish door925.
Isp walks520, hops640 onto the moving ferry, walks730, hops870 onto the landing.
Pac walks900, hops1035, then Isp walks955. No low ceiling can pin the heavy crate or
prevent jumping over it. The second mechanic still requires Isp after the shared shove.

## 10: Elevator Etiquette

Both start aboard the broad lift (Isp400, Pac460, feet520), avoiding an inaccessible
rising lift for the second player. Lift x290..560 travels vertically520..310 in4 seconds.
Wait3.2 seconds after initial settling; Isp walks330 onto the attached STOP (local x20..105,
local y-8..0), freezing the lift near the upper landing and opening Pac's landing door583.
Pac walks515, hops630 onto landing580..730, then walks650 onto STEADY. Isp walks500,
hops600 onto the landing, then hops755 over Pac onto bridge730..910. Isp walks945 onto
RESCUE, holding the bridge and all progression doors open. Pac walks900, hops1035 over
waiting Isp; Isp walks955. Starting aboard gives both players time to recognize the moving
pad; only Isp can brake, and only Pac can enable the upper bridge route.

## 11: Split Decision

Feet550. Pac walks185, hops300 onto the first step top480, then walks525, dropping under
the upper lane (bottom430). Isp walks185, hops295 onto that step, walks335, then hops470
onto the upper lane top410. Isp walks595 onto BLUE, opening Pac's lower door610.
Pac walks680 onto ORANGE (feet550), opening Isp's upper door745. Isp walks780 down onto
the descending step top480 and walks900 onto the final floor550. Pac walks720, hops825
onto the descending step770..890, then walks900. Pac hops1035 over Isp; Isp walks955.
The upper Pac-only blocker385 ends430; the lower Isp-only blocker425 starts430. These
form separate colored routes with130 px vertical separation. Both latches are necessary
for the intended progression. Stacking can ease the first stair climb but is optional.

## 12: Microtubule Shuffle

Feet420. Pac walks240, moving the ordinary crate170 toward BRAKE x240..325, then hops330
over it. Isp walks220, leaving the crate at289 and BRAKE active, then hops345 over it.
BRAKE keeps the ferry370..410 (width150) stopped and opens Pac's island door593.
Pac hops440 onto the ferry, walks480, hops625 onto island590..740 and walks650 onto
STEADY. Isp hops440 onto the same parked ferry, walks490, hops615 onto the island,
then hops760 over Pac onto the unstable bridge740..910. STEADY opens Isp's door745.
Isp walks945 onto RESCUE, permanently stabilizing the bridge and opening Pac's finish
door913. Pac walks900, hops1035 over Isp; Isp walks955. Cargo duty frees Isp to follow
immediately, unlike the earlier player-held ferry brake. Both player roles remain required.

## Design corrections from replay

- Widened corridor roof gaps so cells can fall fully off an alcove before their torso
  meets the next low roof. This corrects authored geometry rather than engine collision.
- Kept heavy-crate staging in open headroom and tested the actual chained push.
- Started both elevator passengers aboard, leaving the attached brake unoccupied until
  near the landing; boarding delays cannot strand a player below the lift.
- Added the explicit lower-route return stair jump in level11 and explicit exit passing
  sequences. Walking through a waiting partner can move them out of a plate or exit.
