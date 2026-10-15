# Across the Divide routes

Room `level_21` adds an introductory separated-route relay after `level_12`.
The integration owner wires `SPLIT_RELAY_LEVEL` and `SPLIT_RELAY_SCENE` into the
campaign. Existing rooms remain intact.

## Geometry contract

This is approximate 2D motion planning with axis-aligned solid rectangles,
existing swept collision clipping, and ordinary floating-point simulation.
Coordinates are pixels, positive y downward. Bodies are 30 by 36; character art
can extend to roughly 88px. The measured jump apex is about 92px. Authored rises
are 50px and 60px; the recovery jump rises 70px. No engine contract changes.

Isp starts at y300 above Pac's y550 route. Isp's upper hurdle requires a 50px
jump before ROUTE. The upper start ends at x430. A 70px boarding notch separates
it from a powered lift at x500..620, which travels from y300 to y160. Its top
landing begins x650 at y160. Pac jumps onto the lower y490 step at x315..435,
then later jumps onto the separate y490 HOME step at x770..910. The upper rail,
lift and landing remain out of Pac's jump range. The two routes converge only
past the final x920 wall; Isp drops onto the lower exit floor beyond x940.

## Causal sequence

1. Isp jumps the upper hurdle and reaches ROUTE at x235. This latches Pac's
   lower gate at x260 open. Pac cannot begin the lower route without Isp.
2. Pac moves through that gate, jumps onto the first 60px step, and holds LIFT
   at x340. This powers the lift and opens Isp's x650 landing gate.
3. Isp jumps onto the lift, rides upward, and jumps to the upper landing.
   LINK at x745 permanently preserves lift power and the landing gate, and
   opens Pac's x710 lower gate. Pac can now leave LIFT without stranding Isp.
4. Pac moves through the lower gate, jumps onto the second step, and latches
   HOME at x825. This opens Isp's final x920 wall. Both move to their exits.

Each partner moves after their contribution and enables the other's next
movement. There is one temporary support handoff followed by permanent rescue.
No player must hold the opening pad throughout the room.

## Recovery and bypasses

- There are no hazards or time limits. Closed gates provide safe wrong-order
  feedback. Latches persist until retry.
- Leaving LIFT early freezes the solid lift at its current position. Returning
  to LIFT resumes it. LINK permanently eliminates this dependency.
- A missed boarding or landing jump falls onto the catch shelf at y370,
  x400..650. Walk to the visible boarding notch and jump left to the original
  y300 rail. Simulation verifies the return from x465 to x410.
- An Isp-only wall at x380..400 runs from the y300 rail to the world bottom.
  Its top is flush with the rail, so upper walking remains clear. Its right
  face closes the catch shelf's left edge; Isp can jump 70px back to the rail
  but cannot walk off onto the lower y490 step. Pac passes through this orange
  wall to reach LIFT normally. The barrier renderer uses this actual rectangle.
- This closes a reproduced living softlock: Isp could jump over ROUTE from the
  hurdle, fall onto the catch, then walk left onto the lower step. With ROUTE
  still unlatched, Pac remained behind x260 and Isp could not climb the 120px
  rise back to the catch. The corrected layout keeps that wrong-order attempt
  on the catch and allows Isp to return and latch ROUTE.
- A second permanent Isp-only wall at x650..670 runs from y182 to the world
  bottom. Its top meets the landing's underside, sealing the catch's right
  edge even when LIFT opens the separate full-height landing gate. Pac passes
  through it. The visible wall uses the actual barrier rectangle. An ordinary
  powered-lift miss previously escaped right onto the lower floor or HOME
  step while LINK remained false; neither lower surface permits a return.
  The two permanent walls now enclose all falls beneath the boarding notch,
  moving lift, and landing's left edge. Isp can walk against either side,
  then return to the notch without a retry. Above y182 the powered lift still
  permits the intended jump onto the y160 landing. From the initial y300 rail,
  the 92px jump apex leaves Isp's feet at about y208, below the wall's top,
  so this recovery enclosure preserves the LIFT dependency.
- The notch is 70px wide. A first 40px version allowed a careful straight-up
  return, but diagonal recovery struck the underside of the rail. Widening
  the actual geometry made ordinary left-jump recovery work.
- Pac cannot reach the catch shelf: the floor-to-shelf rise is 180px, and the
  lower-step-to-shelf rise is 120px. The pad is left of the shelf, providing
  168px overhead clearance while Pac supports Isp.
- Isp's two gates span the world height. Falling around an upper barrier cannot
  skip its partner dependency. Pac's lower gates reach the underside of the
  initial rail and exceed the lower jump range elsewhere.
- The earliest lift-to-landing ascent is 140px, exceeding an unpowered jump.
  Four omitted-partner simulations also attempt repeated jumps at the gates.

## Verification evidence

Command: `node --import tsx tests/_temp/split_relay_route.mjs`.

- Complete ordinary-input traversal: 1,164 frames at 60Hz, 19.392 simulated
  seconds, both characters at their exits.
- ROUTE at frame 74; Pac holding LIFT at 175; LINK at 866; HOME at 1,013;
  both exits at 1,164. The lift wait is deliberately patient rather than
  optimized around its cycle.
- Withhold ROUTE: Pac remains before x260.
- Withhold LIFT: Isp cannot reach LINK, including repeated jump attempts.
- Withhold LINK: Pac remains before x710.
- Withhold HOME: Isp remains before x920.
- Missed-jump catch and 70px jump-back recovery pass using ordinary inputs.
- Skipping ROUTE with two early jumps, dropping onto the catch, and walking
  left for 110 frames leaves Isp safely at (400,334), with ROUTE still false
  and Pac still at (70,514). Walking to x465, jumping left to x410, then walking
  to ROUTE successfully latches it; LINK remains false throughout recovery.
- Early LIFT release freezes the carrier; returning to the pad resumes it.
- With Pac holding LIFT, 126 frames of rightward walking followed by 150 idle
  frames leaves Isp safely at (620,334), with LINK false and LIFT active.
  Another 240 frames of rightward walking and repeated jumps remain contained.
  Walking left for 110 frames reaches (400,334). The ordinary x465-to-x410
  jump returns to the rail; boarding the lift and reaching LINK then succeeds.
  The pre-correction reproduction continued right for 180 frames and settled
  at (881.5,454) on the HOME step, with LINK still false.
- `npx tsc --noEmit -p tsconfig.json` exits 0.

Replay chunks and checkpoint states are written to
`test-results/split_relay/inputs.json`, `checkpoints.json`, and
`powered_miss_checkpoints.json`. Every traversal
step uses only player left/right/jump booleans; no teleportation, pad mutation,
or physics state injection. The temporary script is deliberately outside the
permanent test suite. Browser rendering and real keyboard acceptance remain
with the integration owner; simulation is not visual acceptance.

Gem and Cana are both present. Cana's energy drain targets `relay_lift`, with
LIFT and LINK as its actual counters. His lower lock targets `pac_link_gate`,
with LINK as counter. Gem's final DNA wall targets `isp_home_gate`, with HOME
as counter. All targets and counter pads exist and match their authored effects.
