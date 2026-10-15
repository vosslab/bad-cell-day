# Tutorial route design

Owner: `src/levels_tutorial.ts`. These are authored route hypotheses for integrated
simulation and browser verification. Type checking does not establish runtime solvability.
All coordinates below use player left x and platform top y, unless called a pad center.
Collectibles are optional; the two player exits determine success.

## Shared movement assumptions

- Worlds are 1100 by 620. Players are 30 by 36, moving at 210 px/s.
- Jump speed 470 and gravity 1200 give a theoretical 92 px rise, 0.783 s same-height
  flight, and 164.5 px same-height displacement. Collision tolerances can reduce this.
- A second player can add 36 px of height. Full-height doors (y=0..620) prevent stacking
  or jumping around a required switch. Nobody can jump across the 280-500 px voids.
- Stop effects freeze a deterministic ping-pong motor at its current position. Unoccupied
  motorized platforms move. The authored `period` is the full outward-and-return period.
- Stabilization holds/restores unstable platforms. Unstable platforms collapse after 0.8 s
  of continuous occupation, reset after 2 s, and can reset their occupation timer in air.
  Door effects therefore make each role necessary even if someone jump-hops a bridge.
- Hold and latch effects targeting the same object combine: a rescue latch keeps that
  object enabled after the original holder leaves. Each pad accepts only its named owner.
- Pad y is platform top minus 8; pad height 8 touches a grounded player's feet.
- Hazards only occupy the bottom of each void. There is no hidden lower bypass walkway.

## Level 01: Welcome to the Cell

Stage: garden. Start Isp (65,514), Pac (125,514), standing on y=550.
Move right to the first step x=260..430, top480; jump onto it from x~210.
Jump from x~375 onto the broad high step x=430..650, top410. Both rises are 70 px.
The blue collectible route takes the optional x=465..590 perch at y=340, another 70 px
rise; jump vertically beside the perch before moving onto it. The orange route stays
on the high step, then descends onto x=650..820 at y=480. The floor catches every fall.
Both routes rejoin on y=550. Isp's exit is x=940..985; Pac's is x=1010..1055.
No pads, barriers, or hazards. The solid staircase requires ordinary jumps to pass.
Both characters have independent collectible trails and exits.

## Level 02: Hold That Door!

Stage: garden. Both start on y=500. Isp walks to x~235, overlapping HOLD x=210..295.
Pac walks through the full-height Pac-only door x=400..426, then onto RESCUE
x=520..610 (target player x=550). RESCUE permanently opens that door and Isp's door
x=660..686. Isp leaves HOLD and joins Pac on the same walkway. Exit targets are
Isp x=950 and Pac x=1020, both feet y=500.
Pac cannot reach RESCUE before Isp holds HOLD. Isp cannot press Pac's latch or pass
Isp's own door before the latch. There are no jumps or hazards to distract from reciprocity.

## Level 03: Stop Right There!

Stage: garden. Both start with feet y=400. Left shore ends x=300; right begins x=720.
Ferry width280, initial x310, offset100, period6. It travels x310..410. Isp moves onto
STOP x=170..255 (target x=195) when ferry x is approximately370. The stopped ferry
then spans x370..650, leaving 70 px between each bank and ferry. The same STOP pad
also opens Pac's full-height landing door x=725..747, which the hint explicitly explains.
Pac jumps from x~255 to x~390, walks across the ferry to x~595, then jumps to x~750.
Pac walks onto RESCUE x=805..895 (target x=835). That latch holds Pac's landing door
open and opens Isp's rescue door x=900..922. Isp can now release STOP and follow.

Isp's ferry route does not require Pac to operate another STOP: at every ferry position
the left/right edge gaps are 10..110 and 30..130 px. Use the corresponding near-edge
jump when the ferry approaches, ride it, then jump to the right bank when near it.
The ferry's speed is 33.3 px/s versus player210. Exit targets: Isp x=960, Pac x=1030.
The 420 px void prevents shore-to-shore jumping, including a player stack. Landing
and rescue doors make both roles necessary even if the moving ferry could be ridden.
Slime starts y=585 beneath the entire void.

## Level 04: Bridge Over Troubled Slime

Stage: garden. Feet start y=410. Pac moves to x~205 on STEADY x=180..265.
STEADY stabilizes bridge x=300..800 and opens Isp's full-height crossing door x=805..827.
Isp walks right across the 500 px bridge, then presses RESCUE x=845..925 (target x=865).
Walking the bridge takes 2.38 s versus 0.8 s unstabilized collapse. The latch permanently
stabilizes/restores the bridge, holds Isp's door open, and opens Pac's rescue door
x=940..962. Pac leaves STEADY and crosses the permanently safe bridge. Exit targets
are Isp x=982, Pac x=1045, feet410. No mandatory precision jumps.

Isp starts behind Pac on STEADY and must hop over Pac (x=140 to x=280) before crossing;
walking into Pac pushes the holder off the pad. The bridge itself is not the sole bypass
guard because continuous occupation resets between jumps: Isp's door still requires Pac's
STEADY before the rescue latch is reached. Pac cannot press Isp's rescue latch or finish
before it opens Pac's own door. After the latch, Pac should pass Isp before settling in the
orange exit, or hop over parked Isp so both exits align (final hop x=920 to x=1045).
Slime y=585 covers the 500 px void, with no alternative floor.

## Level 05: The Great Cell Shuffle

Stage: sewers. Feet start y=400. Left bank ends220; middle island spans500..650;
right bank starts930. The ferry is width180, x230..310, offset80, period5.
Isp stands at x~130 on STOP x=110..185 when ferry x~270. It then spans270..450,
leaving two 50 px jumps. STOP also opens Pac's full-height island door x=503..523.
Pac jumps from x~175 onto ferry x~290, walks to x~400, jumps to x~530, and stands
at x~560 on STEADY x=540..615. Pac must remain beyond the island door after landing.

STEADY stabilizes bridge x=650..930 and opens Isp's full-height bridge door x=655..675.
Isp releases STOP and uses the moving ferry to follow to the island, then hops over Pac
(x=495 to x=640) to reach the bridge. Ferry edge gaps are 10..90 px throughout its cycle,
with speed 32 px/s; wait for its approach as needed.
Isp crosses the 280 px bridge (1.33 s walking versus 0.8 s collapse), then presses
RESCUE x=960..1025 (target x=970). The latch permanently stabilizes the bridge and
opens Isp's bridge door, Pac's finish door x=933..953, and Pac's earlier island door.
Pac leaves STEADY and follows over the stable bridge. Pac should pass Isp before settling
in the orange exit, or hop over parked Isp so both exits align. Exit targets: Isp x=995
and Pac x=1055. Jumps lift the players, but their landing feet return to platform top y=400.

The first gate requires Isp's stop hold; the second requires Pac's stabilization hold;
the final gate requires Isp's rescue latch. Full-height doors enforce the sequence
against jumping or stacking. Each void is wider than a jump and has slime at y=585.

## Validation evidence

- `npx tsc --noEmit -p tsconfig.json`: exit 0 after authoring all five definitions.
- Prettier write/check is scoped to the owned TypeScript file.
- Runtime, campaign browser, and rendered-artifact acceptance are recorded in
  [villain_browser_tutorials.md](villain_browser_tutorials.md), the continuation reports, and
  [recurring_villains_ledger.md](recurring_villains_ledger.md). This file remains source-route evidence.
