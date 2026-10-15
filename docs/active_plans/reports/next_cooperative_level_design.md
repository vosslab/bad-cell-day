# Return to Sender candidate

Status: DONE_WITH_CONCERNS. Design investigation and fixture handoff are complete; the candidate
requires ordinary-input feasibility before production authoring. This report does not establish
playability, novice difficulty, enjoyment, or two-player comfort.

## The playable idea

Propose stable `level_25`, **Return to Sender**, in the brain after `level_17` and before `level_22`.
The manager decides final placement after feasibility. Use signal-vesicle flavor and the existing
organic mechanisms rather than industrial courier art; no new assets are needed.
Preserve all 24 existing definitions and their relative order. Earlier rooms teach ordinary cargo,
weight plates, upper/lower paths, powered lifts, and Cana's returning throw. This room combines
those lessons around one object physically changing hands.

Isp drops one nutrient sac from his upper route. Pac receives it below, uses its weight to release
Isp, and later sends the same sac back on a powered elevator. Isp parks it above to free both exits.
Cana throws through Pac's elevator control: jumping aside deliberately stops the elevator; being
shoved aside does so unexpectedly. A nuisance can become exactly the pause Isp needs to unload.
The surprise comes from the players' positions and the returning throw, using existing deterministic
rules. No mandatory hit, narrow SHOVE launch, new randomizer, or new mechanism is needed.

This is the entertainment hypothesis: "You knocked the operator off. Thanks, we needed to stop
there!" Pac chooses when to run, dodge, and resume; Isp judges when to board and receive. The safe
floor turns a botched handoff into another attempt inside the room. One ascent is about four seconds,
during which Isp can approach the receiving edge rather than wait beside an idle control.

## Why this addition

| Candidate | Distinct value | Decision |
| --- | --- | --- |
| Two remote ferries with attached controls | Both players affect moving routes | Set aside: too close to `21`'s power relay and `22`'s route handoffs. |
| Boomerang-assisted long jump | Villain becomes transport | Reject: repeats the previously rejected narrow SHOVE timing problem. |
| One sac passed down and returned up | Shared object, gravity handoff, remote receiving, useful accidental stop | Prototype this bounded fixture. |

`23` uses two cargo loads to reverse linked counterweights with both heroes riding. Here one ordinary
sac circulates, Pac operates from a separate lower position, and Isp unloads above. `24` carries Pac
on floating Isp; this candidate carries cargo on an existing standard elevator. `21` and `22` exchange
route access, while this room also requires the partners to pass and recover the same physical object.

## Necessary cooperation

1. Isp pushes the upper sac off the open lip, then jumps to the upper control route. Pac meets it on
   the lower floor. The fall itself is the first visible handoff.
2. Pac and the sac share RECEIVE, an `any` hold plate requiring weight 2. It opens Isp's upper door
   and powers a separate fall-recovery lift. Pac alone and the ordinary sac alone each weigh only 1.
3. Isp crosses his door and latches RELEASE. This preserves his door and recovery power and opens
   Pac's lower cargo corridor. Pac can now take the sac off RECEIVE without undoing the first handoff.
4. Pac loads the return elevator, retreats left and jumps onto SEND, and operates from below. SEND accepts Pac
   and powers only the return elevator. Isp approaches from the upper deck.
5. Pac releases SEND when the cargo is above the upper dock. Isp can hop onto the frozen carrier and
   push the sac onto DOCK. Cana can interrupt that operation, but stepping back onto SEND resumes it.
6. The sac holds DOCK while both heroes leave through one full-height final door, Isp above and Pac
   below. A hero can substitute on DOCK temporarily, but cannot keep it pressed while reaching that
   hero's own exit. The sac frees the final holder.

Dependency graph: Isp's drop -> Pac plus cargo on RECEIVE -> Isp's RELEASE -> Pac's loading and SEND
-> Isp's unloading and DOCK -> both exits. Pac cannot press Isp's RELEASE. Isp cannot operate SEND.
Neither can keep the final hold plate occupied while independently reaching both exits.

The intended routes stay physically different: Isp crosses the upper gap and receives above; Pac
pushes along the lower corridor and operates below. Recovery may temporarily mix the routes. The
feasibility probe must distinguish harmless alternate cooperation from a bypass of a required favor.

## Candidate fixture

Coordinates are implementation hypotheses, not frozen requirements. Rectangles use `x,y,width,height`.
Use `LevelDefinition` and the existing original brain tissue rendering; author no new public type,
physics, attack effect, control, save schema, or configuration option.

| Element | Candidate data |
| --- | --- |
| World and floor | `1100x620`; floor `(0,550,1100,70)`; no lethal hazards |
| Spawns | Isp `(80,264)`; Pac `(130,514)` |
| Upper start and sac | Deck `(0,300,380,22)`; ordinary sac `(180,260,40,40)` |
| Drop and upper continuation | Open chute `x380..500`; deck `(500,300,220,22)` |
| Recovery lift | `(390,550,110,24)`, offset `(0,-250)`, period `8`, requires power |
| RECEIVE | `(530,542,120,8)`, `any`, hold, weight 2; upper door and recovery power |
| Isp upper door | `(560,0,20,322)`, blocks Isp |
| RELEASE | `(610,292,70,8)`, Isp latch; upper door, lower corridor, recovery power |
| Lower cargo door | `(690,322,20,228)`, blocks both |
| Return elevator | `(740,550,130,24)`, offset `(0,-310)`, period `8`, requires power |
| SEND | Raised lower ledge near `x600,y470`; Pac hold; power return elevator |
| Upper receiving dock | `(870,300,230,22)` |
| DOCK | `(885,292,70,8)`, `any` hold, weight 1; open final door |
| Cargo stop | Static `(960,288,12,12)`; sac stops before it, hero hops over |
| Final door | `(1000,0,20,620)`, blocks both |
| Exits | Isp `(1040,240,42,60)`; Pac `(1040,490,42,60)` |

The 120px upper gap is below the continuous model's approximately 164.5px same-height jump travel.
The actual 120Hz movement and launch/landing footprints must establish the playable margin. At its
highest point the return elevator is 60px above the upper dock, below the approximate 92px jump rise.
Its 60px overshoot creates approximately 1.55 seconds above dock height per complete pass. Releasing
SEND freezes the elevator throughout unloading; the puzzle does not ask Isp to finish pushing in
that interval. A missed stop permits another cycle. All these values remain tunable fixture data.

## Villain behavior

Use Gem's DNA scheme on the upper door and Cana's glucose scheme on the return elevator. Candidate
Gem position: `(250,205)`. Gem's opening can invite the drop: "That is my
snack. Drop it this instant!" Cana objects to the return: "I ordered delivery. Not a return."

One boomerang crosses the raised SEND operator at body height from Cana's actual derived hand.
Candidate for ledge height 470: Cana `(500,488)`, target `(720,449.2)`. Candidate windup `1.0`, cooldown
`1.8`, speed `180`, radius `12`, starting on RELEASE. The lane crosses SEND at operator height and
stays well below the receiving route. Begin with no interrupt binding: the response is positioning
and ordinary jump/step movement. Preserve standard warnings and recurring behavior.

Attacks affect heroes, not the sac. Pac may dodge without leaving the safe floor, accept a shove and
recover, or resume after an accidental stop. The exact hand-derived trajectory and whether a hit
actually clears this plate need a normal-input probe. Do not manufacture an attack hit if a clear
route avoids it; retain consequential meddling as an available interaction, not a timing tax.

## Recovery and decisive probes

- The temporary feasibility owner refuted the original floor-level SEND placement: Pac crosses it
  while pushing, raising the empty carrier about 33px and jamming the sac against its side. This is
  an authoring geometry failure, not a demand for more precise loading. Probe a roughly 70px-wide
  raised SEND ledge: cargo passes beneath; Pac jumps up after loading. The currently approved probe
  uses top 470, 80px above the floor. Top 480 is an optional comparison with more jump margin but
  only 48px clearance underneath a 22px deck; actual clearance and route evidence decide.
- Miss Isp's opening jump: Pac plus cargo restores the left recovery lift. RELEASE later keeps it
  powered. Prove Isp can reboard from the real floor and return to the upper route.
- Misplace the sac below: the continuous floor and closed final door retain it; jump around it to
  push it back. Prove retrieval from both sides of the return lift, including an empty lift parked
  above the floor after premature SEND use.
- Miss an elevator stop or unload: allow another cycle or resume from a midair pause. Prove no
  underside contact creates a living trap. The upper stop should retain a parked sac without
  preventing Isp from hopping past it.
- Seek a bypass: try direct exits, two heroes replacing RECEIVE's cargo, crate/head stacking, an
  early upper latch, lower travel under Isp's door, a recovery-lift shortcut, and a hero substituting
  for the final sac. Sample actual promising routes, not an exhaustive coordinate matrix.
- Exercise the playful response: show ordinary-input dodge/step-off stopping the loaded lift, then
  one actual Cana hit causing a recoverable stop if the authored lane supports it. Compare the
  resulting activity with a no-hit solution; reject slow escort or repeated helpless waiting.

The next owner owns a temporary fixture and ordinary-input routes under `tests/_temp/return_to_sender/`.
No permanent geometry/count tests, build, browser run, or suite is part of this design investigation.
After feasible routes and bounded bypass/recovery probes, fresh specification and quality review
can decide production authoring. Built new-room/adjacent-room checks and appropriate campaign
acceptance remain separate. Human fun, discovery, and cooperation require human observation.

## Source evidence

- [constants.ts](../../../src/constants.ts), lines 4-8: hero size, speed, jump and gravity.
- [types/level.ts](../../../src/types/level.ts), lines 9-27 and 37-60: standard moving platforms,
  hold/latch ownership, weight, power, and doors already express the fixture.
- [mechanisms.ts](../../../src/mechanisms.ts), lines 28-83: ordinary cargo counts only on `any`
  plates; powered motion resets from actual active pads; latch preserves earlier help.
- [mechanisms.ts](../../../src/mechanisms.ts), lines 152-183: inactive power freezes a carrier's
  motion clock, supported cargo rides, and blocked riders stop carriers rather than being crushed.
- [physics.ts](../../../src/physics.ts), lines 42-75: ordinary pushing and gravity transfer cargo.
- [collisions.ts](../../../src/collisions.ts), lines 48-60: cargo sees every closed barrier, including
  color barriers. Keep filters out of the cargo transfer path; do not assume cargo ignores them.
- [interference.ts](../../../src/interference.ts), lines 42-66 and 146-179: Cana gives Pac bounded
  SHOVE, shots inspect heroes, and the boomerang returns through its lane.
- [weapon_pose.ts](../../../src/weapon_pose.ts), lines 41-72: calculate the actual release anchor
  rather than treating the actor center as the muzzle.
- [levels.ts](../../../src/levels.ts), lines 27-51: stable room order permits additive insertion.
  [level_counterweight.ts](../../../src/level_counterweight.ts) and
  [level_float_passenger.ts](../../../src/level_float_passenger.ts) establish the neighboring novelty
  boundaries; [gameplay_direction.md](gameplay_direction.md) records the cooperative vision.

Rules applied: [REPO_STYLE.md](../../REPO_STYLE.md), [MARKDOWN_STYLE.md](../../MARKDOWN_STYLE.md),
[FUN_VIBES_DESIGN_STYLE.md](../../FUN_VIBES_DESIGN_STYLE.md), and
[PLAYFUL_TRAINING_GAME_STYLE.md](../../PLAYFUL_TRAINING_GAME_STYLE.md). Scope follows
[HUMAN_GUIDANCE.md](../../HUMAN_GUIDANCE.md) and [DESIGN_DECISIONS.md](../../DESIGN_DECISIONS.md).
The manager owns any later changelog or settled-decision entry; this lane writes only this report.
