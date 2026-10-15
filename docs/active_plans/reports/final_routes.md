# Final campaign route notes

These eight rooms are authored in `src/levels_final.ts` against the implemented
470 px/s jump, 1200 px/s2 gravity, and 210 px/s movement. Coordinates below are
player left edges and platform top heights, not timestamps or teleport commands.
Routes are geometric hypotheses pending the independent input-driven tester.
Author checks: strict TypeScript exited 0; own-file ESLint exited 0; Prettier
formatted both source files. No browser or complete route acceptance is claimed.

## Level 13 - Slime Schedule

1. Isp moves to x195 on the floor at y500 and holds OPEN.
2. Pac moves through the x380 gate. Wait at x420, outside the column x460..515.
3. After the column fades, cross to x665 and latch RESCUE. The six-second cycle
   has 1.4 dangerous seconds and 4.6 clear seconds; crossing takes under a second.
4. Isp follows, independently waiting for a clear pulse. The x310..420 y430
   refuge is optional and has a blue treat. Finish Isp x950 and Pac x1030.

## Level 14 - Bombs Need Personal Space

1. Pac holds OPEN at x195, floor y500. Isp passes x290.
2. Isp jumps from around x280 onto refuge one x340..480, top y430.
3. The bomb patrols x420..680 at floor height, period eight seconds. Travel
   along the refuge, jump its 100-pixel gap to refuge two x580..720, y430.
4. Drop to x760 after the bomb travels left, then reach RESCUE x825. Its patrol
   ends at x708 including width, leaving a broad safe landing beyond x740.
5. Pac follows the same refuges. Finish at x950 / x1030, floor y500.

## Level 15 - Special Delivery

1. Align both cells in a touching row behind the heavy crate, initial x220.
   Move right together until the crate overlaps WEIGH x300..375, floor y500.
   The weight-two crate keeps the x430 door open after both cells leave.
2. Jump over the parked crate and continue through the door.
3. Pac holds STEADY around x520. Isp jumps over Pac, crosses bridge x600..880,
   and latches RESCUE x935. This permanently stabilizes the bridge and opens
   the x885 Pac gate. Pac follows; exits x990 / x1050.
4. The loading pad also accepts both cells together, but neither can sustain
   that hold while the other crosses the full-height door. Crate placement is
   the durable delivery route.

## Level 16 - Gem boss

1. Isp holds STOP x125, floor y450. This freezes the broad ferry near its
   starting phase and opens Pac's x513 island gate.
2. Pac jumps onto ferry x230..430, top y450, then to island x510..650.
   Even the least favorable frozen ferry position leaves an 80-pixel gap.
3. Pac holds STEADY x565. Isp follows the ferry, hops over Pac, crosses the
   bridge x650..900, and latches RESCUE around x925.
4. Pac follows. Isp remains on blue TARGET at x960; Pac stands on orange
   TARGET at x1040. Both hold pads overlap their own exits at floor y450.
   Defeat requires simultaneous actual owner occupancy and then latches.

## Level 17 - Upside-Down Commute

1. Pac holds OPEN x145 on the low starting floor y550.
2. Isp boards the vertical lift x260..420 when it returns near y550.
   Ride to near y340, then jump right onto balcony x430..610, y340.
3. Pass the Isp gate x433 and latch RESCUE x515. Pac can now ride up too.
4. Both jump from the balcony's right edge to the lower balcony x650..810,
   top y410, then jump right onto the tower x850..1100, top y340.
5. Finish x950 / x1030. The lift has a deterministic ten-second round trip;
   no motor stop or precise frame is needed.

## Level 18 - Separate Departments

1. Pac spawns on the right, x1010 floor y500. Remain on STEADY x1000..1075.
2. Isp starts left, climbs x220..340 top y430, then jumps onto the moving
   shelf x350..570 top y360. Its 60-pixel horizontal travel changes the gap.
3. Jump right to the upper route x650..930, y360. The largest gap is 80 pixels.
   Pac's hold opens the full-height blue gate x680. Reach RESCUE x805.
4. Pac can leave the right console and climb the right stair x950..1080,
   y430, then jump left onto x850..930, y360. The rescue opens Pac's x933 gate.
5. Isp exits x780 and Pac x875, both y360. Optional orange treat x820,y470
   lies on the lower bridge and requires Pac to return to the right stairs.
   The lower blue filter and upper orange filter visibly maintain separate
   routes. Pac stabilizes the lower bridge; the rescue preserves it.

## Level 19 - Cana boss

1. Isp holds STOP x145 at y500. Pac crosses ferry x240..460, y500, then
   jumps to console x550..730, y430, through Pac's x553 gate.
2. Pac holds STEADY x625. Isp follows the ferry and jumps over Pac. Jump from
   the console's right side onto the high bridge x730..910, y360.
3. Isp latches RESCUE x755, then stands on high blue TARGET x840, y360.
4. Pac follows onto the now stable high bridge, then jumps/drops right to
   the low finish x930..1100, y430, through the opened x933 gate.
5. Pac holds orange TARGET x1020. Simultaneous targets defeat Cana; both
   targets overlap their respective exits on the different height branches.

## Level 20 - Tumor Core

1. Isp holds STOP x125 at the entry y520. Pac jumps up 70 pixels onto ferry
   x230..430, y450, then crosses to the console x510..650, y450.
2. Pac holds STEADY x565. Isp follows, hops over Pac, and traverses the stable
   bridge x650..900, y450. Jump up to shutdown platform x900..1100, y380.
3. Isp latches RESCUE around x925, freeing Pac and preserving both machines.
4. Isp jumps up 70 pixels to the crown x950..1050, y310, and holds TARGET
   around x975. Pac follows the bridge and takes the lower TARGET x1040,y380.
5. Both simultaneous owner targets shut down the combined tumor core. Isp's
   high and Pac's low exits overlap their pads. Each player contributes a
   required machine control before the final split target positions.

## Mechanism and safety boundaries

- Tall gates require the specified control/rescue sequence; jump timing cannot
  bypass their full-height geometry.
- Boss TARGET pads use hold activation with distinct `isp` and `pac` owners.
  RESCUE latches machine support independently and never marks a boss defeated.
- Boss hazards have kind `villain`, so the existing simulation disables them
  after defeat. Slime under pits remains a fall hazard.
- All routes use static, moving, or unstable platforms already in the contract.
  No conveyor, color-changing, or new physics rule is implied by the story.
- The bomb and pulse rooms retain substantial safe waiting space. Restart resets
  deterministic mechanism phase; an unhurried player can wait for another cycle.
