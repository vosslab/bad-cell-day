# Cana delivery feasibility

2026-10-15. Decision recommendation: **do not add a mandatory shove-distance
room with the current effect**. A source experiment demonstrates the crossing,
but the useful timing is narrow and its payoff is about 53 pixels of extra
travel. Keep accepted room 22 and the current campaign unchanged. No production
mechanic, campaign placement, or browser acceptance is approved by this report.

## Evidence boundary and method

Run `node --import tsx tests/_temp/cana_delivery_probe.mjs` from the repository
root. The probe imports production `create_game_state`, `step_game`, and level
helpers directly. Each fixture starts from authored synthetic spawns; all live
movement uses ordinary left/right/jump inputs at 120 Hz. No live actor position,
effect, projectile, or pad state is injected. Shared-lane stacking and recovery
bypass probes are separately authored fixtures. There are no build changes.

This is source simulation, not a rendered browser attempt, novice discovery,
shared-keyboard playtest, or evidence of fun. The reactive success controller
observes the simulated SHOVE state; a person would need readable anticipation
or a visible hit cue. Its timing samples are characterization, not a requirement
for permanent tests.

## Harness custody

The original temporary source was archived byte-for-byte at
`test-results/counterweight_validation_harnesses/cana_delivery_probe.mjs.txt`; verify it with that
directory's `SHA256SUMS`. Restore it to `tests/_temp/cana_delivery_probe.mjs` from the repository
root using the copy command in the archive README, then use the run command above.

Geometry-expert framing: classical 2D dynamic motion planning with axis-aligned
30 by 36 pixel bodies, rectangular obstacles, point/radius projectile contact,
pixels right/down, seconds, and ordinary floating-point measurement. Production
clipping, stand-on tolerances, coyote time, and integration order are the oracle.
The task is reachability and recovery, not a new geometry kernel. Source owners:
`src/constants.ts`, `src/collisions.ts`, `src/physics.ts`, `src/interference.ts`,
and `src/mechanisms.ts`.

## Measured result

| Quantity | Source result | Implication |
| --- | --- | --- |
| Normal speed / jump / gravity | 210 px/s; 470 px/s upward; 1200 px/s squared | Continuous ideal rise is 92.04 px; the 120 Hz fixture rises 90.08 px. |
| Shove | Initial +260 px/s, linear decay, 0.4 s | Continuous ideal bonus is 52 px; the discrete full-hit measurement is 53.083 px. |
| Net full-effect travel while holding right | 137.083 px | 84 px ordinary movement plus the shove bonus. |
| Net travel while holding left | -30.917 px | Countersteering recovers control; this is not an unavoidable full 53 px translation. |
| Optimized sampled normal coyote jump | Right body edge 508.25 px before falling below landing height | Landing begins x530; normal movement fails. |
| Immediate post-hit right + jump | Lands x510.833, right edge 540.833 | Gap crossing works, with 10.833 px body overlap at touchdown. |
| Latest successful sampled post-hit jump | 100 ms after detecting hit | 108.33 ms is too late: coyote expires and Pac falls onto the catch floor. |
| Anticipated jump samples | -58.33 through +100 ms around detected hit | Only 20 sampled 120 Hz ticks succeed; earliest touchdown overlap is 0.333 px. |
| Shared-lane two-hero boost | Pac launches 300, 350, or 383 ms after Isp's jump and crosses without a boomerang | Separate lanes are required to preserve shove necessity. |

The early/late limits apply to this authored launch fixture and controller,
not every possible level or input policy. A slower projectile gives a longer
visible approach, but does not extend the short effect or coyote window after
contact. Larger gaps reduce margins; smaller gaps eventually admit a normal
late coyote jump. A lower landing expands ordinary reach too.

The controller's stationary pre-hit wait is intentional: Pac can stand at x295
with five pixels still supported. Detection occurs at 1.883 s; windup starts at
0.267 s, flight starts at 1.275 s. The one-second warning plus approximately
0.608 s flight gives anticipation. It does not supply a generous post-hit
decision. The experiment does not establish that a human would read that timing.

## Concrete geometry and ordinary-input demonstrations

All coordinates are pixels. Rectangles list x-range and top y.

```text
y300  Isp control [0................................300]   proposed upper route
      INVITE x100..175; Isp spawn (120,264)
y350  Isp-only lane floor/filter across the world (25 high)

y480  Cana muzzle (100,480) --------------------------> target (670,480)
y500  launch [0................300]  230 px  [530........1100] landing
                         Pac (295,464)
y550                          [300..335] return step
y600  catch [0.....................................530]
```

The full-width Isp filter at y350 prevents Isp joining Pac's lower lane and
forming a moving jump pedestal. Pac cannot jump 200 pixels up to Isp's control
platform. An authored muzzle at (100,480), radius 12, speed 300, cooldown 0.25 s,
and windup 1 s is enabled by Isp's INVITE hold. It needs no new engine mechanism.

Successful shove sequence:

1. Isp remains stationary on INVITE; Pac waits stationary at the launch edge.
2. At source tick 226 (1.883 s), Pac presses right + jump, then keeps right held.
3. Pac touches down on the landing at tick 318, approximately 2.658 s.

The same input with jump delayed to tick 239 misses the coyote window and lands
at (433.833,564) on the catch floor. Normal right + jump from sampled takeoff
x290, 298, 302, 306, 310, 314, and 318 also fails to reach the high landing.
Takeoff x322 and x326 is already too late for an ordinary coyote jump.

The separate recovery demonstration uses attack disabled to isolate geometry:
walk right 72 ticks, wait 80, and arrive on the catch at (421,564). Walk left
toward x350; jump left 44 ticks, release movement/jump for 70, landing on the
return step at (300,514). Jump left 45 ticks, then stop for 70, returning to
launch at (249.25,464). This is two ordinary jumps, no restart or state reset.
It proves this geometric recovery, not a recovery under an active repeated shot.

The catch floor is 100 px below the landing, so a normal jump from it reaches
feet y509.917 and cannot climb the tower. The narrow return step reaches feet
y459.917 but is too far left to cross to x530: six sampled launch delays from
each recovery surface produce zero landing bypasses. These samples complement
the height/range reasoning; they are not exhaustive input search.

## Partner control, bypasses, and a rejected full-room sketch

With Isp outside INVITE there is no windup, projectile, shove, or demonstrated
crossing. Walking Isp off INVITE removes a projectile already in flight and
resets cooldown to 0.25 s. Reoccupying starts a new cooldown/warning, not an
old half-finished shot. This was measured with ordinary Isp movement. A
projectile can hit each hero once across its whole outgoing/return flight;
suppressing after impact does not remove the already-applied player effect.
The source probe directly measures cancellation/restart; the last two facts
are inspected production behavior.

A coherent full-room relay could use these existing contracts, but is **not
implemented or recommended**:

1. Isp holds upper INVITE, enabling Cana and stabilizing Pac's far landing bridge.
2. Pac takes the shove jump, then holds DELIVERY at x580, floor y500. DELIVERY
   stabilizes that same bridge and opens Isp's upper gate at x340.
3. Isp leaves INVITE, intentionally cancelling Cana, and crosses upper ledges
   [340,500] and [540,720] at y300 to latch HANDOFF near x600.
4. HANDOFF stabilizes Pac's landing permanently and opens Pac's right-hand
   stair gate. Pac leaves DELIVERY and climbs x760/y430, x850/y360, then
   joins Isp on a shared finish at x930/y300.

This gives distinct upper/lower paths and two reciprocal route changes. A
failure before step 2 can recover geometrically as above if Isp cancels the
attack and waits. But the inventive cooperation is ordinary delivery/hold
transfer; the mandatory launch still relies on a small speed bonus and a
short timing window. It is insufficient reason to add a room between accepted
22 and 19, or anywhere else. The sketch's bridge timing, gate anti-bypasses,
second-half climbing, and full completion have not been simulated.

Without lane isolation, the alternative negative-control spawn puts Isp at
(295,464), Pac on Isp at (295,428). Isp jumps; Pac waits 36, 42, or 46 ticks,
then jumps right. All three cross the gap without interference. This is
legitimate existing teamwork, but defeats the claim that Cana is necessary.
No crates are present, so crate extensions are excluded rather than patched.

## Stronger next direction

Prefer an additive reciprocal cargo/ferry route or a genuinely useful FLOAT
handoff over promoting this speed increase into a mandatory precision check.
FLOAT supplies about 217 px of sustained rise over 1.4 s, versus about 90 px
for an ordinary jump: its route distinction has substantially more geometric
room. Stable room 17 already proves an invited FLOAT then partner lift rescue;
a new candidate must add a real control transfer and two separate physical
routes beyond that existing pattern before earning a new room.

For Cana specifically, retain dodge/suppression and optional shortcuts where
already readable. A free lateral alcove reachable using a +53 px shove is
usually reachable by holding right slightly longer; making it exclusive needs
a gap, a timed closing route, a hazard speed race, or a new interaction. The
first was measured here and the others would add unsupported complexity.
Do not implement a generic launch/catch mechanic to justify the premise.

Next manager decision: close the mandatory shove-distance candidate, preserve
accepted room 22, and select a different substantial cooperative route for a
separate source prototype. The present experiment changes only this report
and its temporary probe.
