# Next fun candidate

Status: DONE_WITH_CONCERNS. Design investigation only; playable feasibility remains unproven.

## Bubble Bouncer

One compact breathing room: **Pac catches the bubbles until both players want one to hit Isp.**
Pac walks toward the right through Gem's shot lane, absorbing bubbles while Isp holds Pac's
doors open. Once through the last door, Pac jumps onto a raised exit shelf. The next bubble
passes underneath Pac and becomes Isp's way onto the high route. The funny reversal is that
the same attack was inconvenient a moment ago and is now the thing they are waiting for.

This adds deliberate projectile interception and selective exposure. It uses no cargo, carrier,
new effect, or rescue latch. Keep the room short; a second reciprocal switch relay dilutes it.
Gem: "Stop catching those! They are individually addressed!" Ending: "You kept the useful one?!"
Cana's glucose gates remain the reason Isp must stay down during Pac's first trip.

## Concrete first prototype

World: 1100 by 620. Coordinates are hypotheses for a temporary ordinary-input probe.

| Object | Rectangle or position | Purpose |
| --- | --- | --- |
| Safe floor | `(0,550,1100,70)` | Every early launch and failed handoff is recoverable. |
| Isp spawn | `(100,514)` | Approaches the blue hold from the left. |
| Pac spawn | `(450,514)` | Already clearly upstream of Isp; no need to jump over the holder. |
| Blue HOLD | `(330,542,100,8)` | Isp-only hold opens both Pac doors; starts Gem's attack. |
| Pac entry gate | `(500,0,20,550)` | Prevents Pac prepositioning beyond the screen before HOLD. |
| Pac far gate | `(940,0,20,550)` | Requires Isp to remain grounded during the walk. |
| Pac exit shelf | `(970,500,130,20)` | Jump here after the far gate to deliberately clear the beam. |
| Isp high route | `(430,350,670,20)` | FLOAT reaches it; ordinary jumping from the floor does not. |
| Isp exit | `(1040,290,42,60)` | High route. |
| Pac exit | `(1040,440,42,60)` | Shelf; the exited Pac stands above the beam. |
| Gem | actor position near `(1070,560)` | Aim left at `(300,535)`; derive actual muzzle from weapon geometry. |

Both gates block Pac only. HOLD opens them with existing door effects. No hazards, crates,
moving platforms, or collectible requirements. Author a Gem DNA-wall scheme on entry and a
Cana glucose-gate scheme on the far gate, both countered by HOLD. The required two authored
schemes need not imply a new villain mechanic.

Start one recurring bubble attack on HOLD: initial hypothesis `windup: 0.75`, `cooldown: 0.15`,
`speed: 600`, `radius: 12`, `maxRange: 800`. These are provisional geometry/timing values,
not acceptance thresholds. With the actual left-facing Gem grip near x1051/y535, an unblocked
first shot reaches Isp near 2.1 seconds after HOLD. Pac's uninterrupted trip from x450 to fully
past the far gate takes about 2.5 seconds. Pac naturally meets that shot upstream during the
walk. The interception therefore buys a real opportunity in the ordinary opening, rather than
being decoration after Pac could already have crossed. STICKY pauses Pac briefly on safe ground;
an immune Pac still catches later bubbles. Tune by observed comfort, not by these estimates.

## Ordinary route and recovery

1. Isp walks onto HOLD. Pac sees both doors open and Gem wind up; the beam itself stays visible
   in the open corridor. Pac walks right and visibly catches an incoming bubble. Isp stays down.
2. Pac keeps walking, catching further bubbles if necessary. STICKY is safe and ends by itself.
   After passing x960, Pac jumps right onto the shelf at x970/y500.
3. Pac is now above the horizontal beam. Isp invites the next shot by staying on HOLD. FLOAT
   lifts Isp about 217 pixels during its 1.4-second effect, with a little subsequent upward coast.
   Isp steers toward x430 as the feet clear the y350 platform, then walks the upper route.
4. Both reach their own exits. Pac's shelf and exit are above the beam, so waiting at exit cannot
   accidentally consume Isp's necessary launch bubble.

If Pac jumps out of the beam early, Isp floats and the gates close. There is no death: Pac can
retreat from a closing door under the existing nearest-face retreat rule. Isp returns left off
the upper ledge onto the safe floor and reoccupies HOLD. Pac can also return from the shelf if
needed. The left end of the upper route must remain open for this recovery. Do not add a ceiling
trap or one-way lock. If the high landing is missed, Isp lands on the floor and tries again.

Clue the choice directly: subtitle "Catch it now. Let it through later." Hint: "Isp holds the
doors. Pac catches bubbles on the way right. Past both doors, jump onto the shelf so a bubble
can lift Isp." Show ordinary STICKY/FLOAT feedback and retain the visible windup. The gate closing
on an early launch demonstrates the consequence safely; no untelegraphed lethal lesson is needed.

## Actual contracts and limits

- [interference.ts](../../../src/interference.ts) removes a bubble on the first player contact.
  Pac gets STICKY; Isp gets FLOAT. Immunity prevents the effect, not bubble consumption. A
  boomerang does not offer this shielding behavior. Platforms and barriers do not block shots.
- [physics.ts](../../../src/physics.ts) leaves horizontal movement available during FLOAT and
  allows partner support. Pac must be well upstream: coincident contacts check Isp first.
- [mechanisms.ts](../../../src/mechanisms.ts) samples holds before and after movement; rising
  off HOLD closes both doors. No new signal, timer, collision, or attack-continuation rule is needed.
- [weapon_pose.ts](../../../src/weapon_pose.ts) supplies the actual muzzle. Do not draw a shot
  from Gem's center or imply the high route shields anyone.
- The high route is 200 pixels above the floor, and 150 above Pac's exit shelf. Ordinary jump
  rise is about 92 pixels; one partner-height boost adds 36. Isp cannot simply walk to its exit
  or use the final shelf as an ordinary staircase. A clever FLOAT passenger solution is welcome.
- Pac can potentially remain before the far gate after an early attempt, then dash through on a
  renewed HOLD. Preserve this recoverable cooperative alternative if it retains both roles.
  Do not add policing barriers to force a rehearsed order.

## Required temporary probe

Use an isolated candidate level plus a disposable route controller under the existing temporary
feasibility location. Production files wait. Prove a complete run using ordinary inputs and show
an actual Pac interception before the far door, followed by an actual Isp FLOAT after Pac climbs
clear. Inspect these two moments in the browser with normal and reduced motion. Check the high
landing is roomy, the far-door passage is comfortable despite STICKY, and the shelf-bound Pac is
outside the beam. Also run an early jump/closed-gate recovery and a missed high landing. Probe
walking/jumping ahead, stacking, and the prepositioned recovery alternative; do not reject a clever
cooperative solution merely for differing from the hint.

Main uncertainty: the first-shot race must make shielding useful without making a fast projectile
or waiting for repeated STICKY the whole experience. If it feels like a long corridor tax, shorten
the corridor and adjust the initial shot timing together; if that still fails, reject the room
instead of adding switches. Finite scripted success cannot establish fun or novice discovery.

If selected, likely production ownership is one new `src/level_bubble_bouncer.ts` definition/scene,
campaign assembly in [levels.ts](../../../src/levels.ts), and appropriate campaign documentation.
Stable ID and insertion point belong to the manager; retain every existing room and final room.
The accepted Return to Sender artifacts remain historical and unchanged.
