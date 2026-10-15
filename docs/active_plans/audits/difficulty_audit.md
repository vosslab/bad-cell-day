# Campaign difficulty audit

Source inspection: 2026-10-14, before any difficulty implementation. Positions below are the
existing campaign positions, not proposed new numbers. Stable IDs identify the authored rooms.

## Evidence and method

- Human observation, supplied by the manager: the roughly 9 p.m. play session found current
  level 1 decently challenging and current level 2 much easier. This directly supports the
  opening inversion; it supplies no novice measurements for levels 3-20.
- Direct human clarification, relayed by the manager: "level 2 was just walking, level 1 had
  jumps". Teach the walking cooperation first, then preserve the safe lift/jumping challenge
  the human liked. No change to level 1's physics follows from this observation.
- Source inference: all 20 geometry definitions and villain scenes were inspected. Source
  references below identify definition start lines in this baseline. Scenes label real existing
  targets; their decorative actors do not add collision or independent decision steps.
- Existing input-route proof: [villain_tutorial_routes.md](../reports/villain_tutorial_routes.md),
  [villain_middle_routes.md](../reports/villain_middle_routes.md), and
  [villain_final_routes.md](../reports/villain_final_routes.md) document legal ordinary-input completions.
  [middle_routes.md](../reports/middle_routes.md) and
  [final_playthrough.md](../reports/final_playthrough.md) expose
  actual handoffs. These were inspected, not rerun for this audit.
- Existing browser proof: [villain_browser_tutorials.md](../reports/villain_browser_tutorials.md),
  [villain_browser_middle.md](../reports/villain_browser_middle.md), and
  [villain_browser_final.md](../reports/villain_browser_final.md) establish experienced scripted routes in
  identified builds. They do not measure novice comprehension or comfort.

The ordinal bands are introductory, developing, demanding, and capstone. They describe the
mandatory completion route relative to this campaign. They are hypotheses, not calibrated human
ratings. Puzzle decisions, handoffs, execution, failure/recovery, and discoverability remain
separate. A longer wait is not an additional puzzle decision. Optional sparks are outside these
profiles: a full-collection objective could change the order and needs separate evidence.

Shared engine facts affect every row. Latched pads stay active for the attempt; hold pads require
occupancy. Supported bridges remain solid;
unpowered carriers stay solid and freeze instead of disappearing
([src/mechanisms.ts](../../../src/mechanisms.ts), lines 27-84 and 108-159). Boss targets need both
owners simultaneously, then remain defeated (lines 86-104). Death/retry resets the room, including
latches, crates, and boss state; there are no intermediate checkpoints
([src/runtime.ts](../../../src/runtime.ts), lines 70-77). Heavy crates require two connected
directional pushers ([src/physics.ts](../../../src/physics.ts), lines 12-53). Thus single-person
two-character play has a distinct simultaneous-input burden from two-person cooperation.

## Every existing level

Each source link points to the owning file. The line number in the position column identifies
the stable-ID declaration in the inspected baseline.

| Position / stable ID / source line | Title and band | Meaningful decisions and handoffs | Timing and platforming | Failure/recovery and discoverability |
| --- | --- | --- | --- | --- |
| 1 / `level_01` / tutorial:7 | Welcome to the Cell; developing | Isp holds DNA OPEN; Pac latches RESTORE; both use powered lift. One hold-to-rescue handoff followed by transport. | Safe boarding and elevated dismount; 230 px lift travel, 20 s cycle. Extra trips inflate time. | Full floor catches misses; can wait for another cycle. First room combines control learning, ownership, latch, power, and moving transport. |
| 2 / `level_02` / tutorial:63 | Hold That Door!; introductory | Isp holds; Pac crosses and permanently rescues Isp. One direct handoff. | Flat continuous floor; no mandatory jump or timing window. | No lethal hazards. Visible two-pad chain is the clearest introduction to the shared grammar. Human reports easier than 1. |
| 3 / `level_03` / tutorial:112 | Stop Right There!; developing | Isp brakes ferry and opens landing; Pac rescues; Isp follows. | Pac crosses stationary ferry; Isp crosses moving ferry after leaving STOP. Multiple gap jumps. | Slime punishes missed landings with full restart. STOP gives the first crossing a controlled experiment. |
| 4 / `level_04` / tutorial:179 | Bridge Over Troubled Slime; developing | Pac supports bridge; Isp crosses to rescue; Pac follows. Reverses holder role. | Hop over held partner; stabilized bridge is continuous, not a timed collapse race. | Slime below; losing hold before rescue can expose bridge collapse. Simpler execution than 3 despite later position. |
| 5 / `level_05` / tutorial:247 | The Great Cell Shuffle; demanding | Isp STOP -> Pac STEADY -> Isp RESCUE. Two staged role transfers. | Ferry gap jumps, moving return crossing, partner hop, supported bridge. | Two lethal gaps; failures repeat the relay. Combines 3 and 4 coherently. |
| 6 / `level_06` / middle:102 | Narrow Escape; introductory/developing | Same hold/rescue dependency as 2; choose safe alcoves and pass partner. | Small alcove climbs and low-roof navigation; no moving carrier. | Continuous floor, no hazards; collision confusion is reversible. Pac starts ahead of Isp. Lower consequence and simpler dependency than 5. |
| 7 / `level_07` / middle:131 | Double Trouble; demanding | STOP -> STEADY powers second ferry and supports bridge -> RESCUE. Same relay as 5, longer transport chain. | First ferry, partner hop, supported bridge, second narrower ferry, exit jumps. | Two slime spans; late misses replay substantial travel. Second ferry power connects two visible effects to one control. |
| 8 / `level_08` / middle:175 | Push Comes to Shove; developing/demanding | Park ordinary crate as unattended holder; Pac STEADY -> Isp RESCUE. Introduces substitution of cargo for player. | Crate clearance and partner hop; one continuous supported bridge. | Crate parking on safe ground is recoverable; bridge failure is lethal. New reasoning but fewer moving jumps than 7. |
| 9 / `level_09` / middle:211 | Two Tons of Trouble; demanding | Both shove heavy crate onto TEAM; Isp powers/brakes ferry; Pac rescues. Adds simultaneous push to unattended weight. | Hop parked crate, ferry crossings, partner passing. | Safe initial cargo experiment; later gap death resets cargo too. Requires discovering connected two-person push; hint states both push. |
| 10 / `level_10` / middle:247 | Elevator Etiquette; demanding | Ride together; Isp brakes near upper landing; Pac STEADY -> Isp RESCUE. Position of attached STOP matters. | Starts aboard lift; recognize correct stopping height, dismount, hop partner, bridge. | Mistimed STOP can be released/repositioned; falling into moat is lethal. Moving control adds timing/discoverability beyond a ground STOP. |
| 11 / `level_11` / middle:288 | Split Decision; developing | Route Isp above and Pac below; BLUE opens ORANGE's route; ORANGE opens BLUE's. Two latches, no prolonged hold. | Shallow moving stair; safe lane climbs and return stair; carrier pauses 3 s in 8. | Continuous floor, no hazards. Colored filters demand spatial reading, but errors do not replay a lethal relay. Clear consequence valley after 10. |
| 12 / `level_12` / middle:323 | Microtubule Shuffle; demanding | Cargo holds powered BRAKE; Pac STEADY; Isp RESCUE. Combines 8's unattended holder with ferry/bridge relay. | Crate hop, stationary braked ferry for both, supported bridge, partner hop. | Two slime spans; cargo setup repeats on death. Outage becomes irrelevant while BRAKE occupied; cycle is not another mandatory timing puzzle. |
| 13 / `level_13` / final:24 | Gem's Slime Schedule; developing | Isp OPEN -> Pac RESCUE, with each player observing a hazard pulse. No additional relay or cargo. | Wait then cross 55 px column; inactive for 4.6 s in each 6 s cycle. Ground is continuous. | Mistiming pulse kills; safe waiting positions and explicit hint. Strong drop in dependency/transport complexity after 12; useful first timed-hazard lesson. |
| 14 / `level_14` / final:55 | Bombs Need Personal Space; developing/demanding | Pac OPEN -> Isp RESCUE; use raised refuges for moving bomb; Pac follows. | Several refuge jumps for both; second refuge moves 40 px and pauses safely. | Bomb contact kills, floor catches ordinary missed jumps. Safe heights explain avoidance; cyclic refuge remains solid. More execution than 13, same handoff depth. |
| 15 / `level_15` / final:94 | Special Delivery for Gem; demanding | Heavy crate on WEIGH -> Pac STEADY -> Isp RESCUE. Combines 9's team cargo with 8's supported bridge. | Crate and partner hops; continuous stabilized bridge, no ferry. | Initial shove recoverable, slime below bridge lethal. Can be easier in execution than 9/12; meaningful cooperative cargo consolidation. |
| 16 / `level_16` / final:134 | Gem's Slime Factory; capstone | STOP -> STEADY powers ferry/supports bridge -> RESCUE -> both TARGET holds. | Familiar ferry jumps and supported bridge; targets share final floor. | Slime spans; target phase has no attack-pressure timer. Boss adds simultaneous placement, not a new combat system. Natural first paired-target introduction. |
| 17 / `level_17` / final:190 | Cana's Upside-Down Commute; demanding | Pac holds POWER; Isp rides to permanent RESCUE; Pac follows; both traverse stepped balconies. | Two lift trips over moat, 210 px vertical travel, 10 s cycle; descending step then jump back up. | Deep moat makes failed boarding/dismount costly. Safe waiting exists at start/upper landing. Power handoff is simpler than 16, traversal harder than 18. |
| 18 / `level_18` / final:223 | Separate Departments; developing/demanding | Pac starts on right-side POWER, already holding; Isp takes filtered upper route to RESCUE; Pac climbs right stairs. | Isp stair/shelf jumps over moat; Pac's mandatory route is short. | Isp misses can kill; Pac waits safely. Layout looks split, but mandatory completion does not require Pac to traverse the lower bridge. Significant asymmetry, not a two-route expedition. |
| 19 / `level_19` / final:268 | Cana's Control Freak-Out; capstone | Familiar STOP -> STEADY -> RESCUE, then separated high/low TARGET holds. | Ferry-to-raised-console jump; elevated bridge and split final heights. | Moats punish misses; after rescue, safety persists. Consolidates 10's elevation and 16's paired targets. |
| 20 / `level_20` / final:324 | A Very Bad Day for the Tumor; capstone | Same relay and paired targets, with blue crown above orange shutdown. | Raised ferry entry, bridge-to-raised-shutdown jump, extra crown climb. | Moats; pulse core is below normal supported route, not an independent mandatory dodge sequence. Credible final spatial synthesis, not radically deeper logic than 19. |

Source files: [src/levels_tutorial.ts](../../../src/levels_tutorial.ts),
[src/levels_middle.ts](../../../src/levels_middle.ts), and
[src/levels_final.ts](../../../src/levels_final.ts). Scene files inspected:
[src/villain_scenes_tutorial.ts](../../../src/villain_scenes_tutorial.ts),
[src/villain_scenes_middle.ts](../../../src/villain_scenes_middle.ts), and
[src/villain_scenes_final.ts](../../../src/villain_scenes_final.ts).

## Dependencies and inversions

These are teaching dependencies, not hard engine prerequisites: every room restarts independently.

| Concept | Best existing introduction | Existing synthesis |
| --- | --- | --- |
| Hold then permanent rescue | 2 | 1, 3, 4, 6, 13, 14, 17, 18 |
| Passing stationary partner | Safe alcoves in 6 | 4, 5, 7-10, 12, 15-20 |
| Power and safe carrier | 1 | 7, 9, 11, 12, 16-20 |
| Separate colored routes | Safe floor in 11 | 18 |
| Stabilized bridge | 4 | 5, 7, 8, 10, 12, 15, 16, 18-20 |
| Brake then cross ferry | 3 | 5, 7, 9, 10, 12, 16, 19, 20 |
| Wait for a hazard, use refuge | 13, then 14 | Avoid treating every pause as a race |
| Crate replaces holder | 8 | 12; heavy variants 9 and 15 |
| Multi-stage role relay | 5 | 7, 10, 12, 16, 19, 20 |
| Paired target placement | 16 | 19, then 20 |

Robust source inversions are 1 -> 2, 5 -> 6, 10 -> 11, and 12 -> 13. The first has direct
human corroboration. Likely execution inversions include 3 -> 4, 7 -> 8, and 17 -> 18, but
their puzzle novelty differs; human trials should decide the closest comparisons. Level 15's
shorter scripted time than 14 does not establish an inversion: simultaneous heavy pushing adds
a different burden. Level 17's long route largely reflects waiting and two lift trips.

## Recommended implementation direction

Apply **Fix the design, not the symptom**: change curriculum order at campaign assembly,
preserving stable IDs and authored puzzle geometry. The human directly supports 2 before 1.
The recommended bounded candidate is:

`02, 01, 04, 03 / 06, 08, 05, 07 / 11, 09, 10, 12 / 13, 14, 15, 16 / 18, 17, 19 / 20`.

Slashes preserve current stage groups: garden, sewers, laboratory, factory, citadel, boss. First
teach walking cooperation, then safe jumping/lift power, supported bridge, and ferry gaps. The
sewers start with safe partner passing, then safe crate parking plus a supported bridge, then
ferry/bridge relay and two-ferry synthesis. Ordinary cargo before heavy cargo gives the new
weight mechanic a known purpose. Laboratory starts with safe spatial filters, then team pushing,
attached-lift braking, and cargo/ferry/bridge synthesis. Factory keeps timed-hazard introductions,
heavy-cargo consolidation, and the first paired-target boss. Citadel puts the simpler asymmetric
split room before the two-trip dangerous lift and elevated target boss. The combined boss ends.

Level 8 before 5 is a judgment call: crate substitution adds reasoning, while 5 adds moving-ferry
execution and two lethal spans. Safe crate setup makes 8 a credible introduction before the
transport relay. Level 4 before 3 similarly trades bridge novelty for fewer hazardous jumps.
Level 1 remains a richer safe room than 4 in some dimensions; its floor supports learning jumps
before bridge failure becomes lethal. These choices need human comparison, not absolute ranking.

New positions 5, 9, 13, and 17 deliberately open chapters with a simpler or narrower lesson.
This is an overall rising curriculum with planned recovery and new-concept introductions;
it does not claim every adjacent room is harder. Bosses stay at positions 16, 19, and 20.
Use **Use the scientific method** for close comparisons and later refinement.

## Global alternative considered

A source-based global candidate was also considered:

`02, 06, 01, 11, 04, 03, 13, 14, 08, 05, 09, 15, 12, 07, 10, 18, 17, 16, 19, 20`.

It gives safe grammar/spatial lessons, then individual lethal obstacles, then cargo/relay
combinations, then elevated synthesis and the three paired-target rooms. Neighboring rooms can
change which dimension is demanding; exact positions within those groups remain provisional.
In particular, 11's spatial reading may be harder than 4's straightforward held bridge even though
11 is safer. Swapping those lessons is a playtest question, not a proven correction.

Its stage labels would jump garden -> sewers -> garden -> laboratory -> garden -> factory,
and later between other themes. That costs visual/story continuity. It is not evidence that stage
blocks are mandatory, but without novice measurements its extra disruption is insufficiently
justified. The bounded candidate keeps chapter personality and resolves the clearest within-stage
inversions. The manager approved this bounded direction as D1; it is implemented after this audit's
baseline. Comparative human validation remains pending.

The first room's existing "New DNA door. Same excellent beard." opening remains suitable beside
its new-trap tutorial; no continuity edit is needed. The new first-room title and control wording
follow the onboarding position, and the former welcome room is now "Glucose Going Up!". Stable IDs
and save records stay attached to authored rooms. Preserve the old level 1 geometry and lift timing.

Retain strong puzzles. If order and chapter grouping cannot provide the intended rise, refine the
specific owning room after a concrete failed human attempt: improve visible causal explanation
or make an existing cooperative dependency meaningful. Adding arbitrary hazards, tighter jumps,
mandatory filler walks, or every queued mechanic is unsupported by this audit. Level 18's unused
lower-route potential is a candidate only if the intended lesson requires both routes; its current
short legal completion is not itself a bug.

## Human evaluation after changes

Record first-attempt wall time, total time to completion, deaths, manual restarts, help requests,
and where the player stops or misreads a control. Keep one-person/two-character and two-person
sessions separate, and note prior room experience and whether hints were read. For two players,
observe whether each understands the other's action and can explain the handoff.

Compare adjacent suspected inversions using fresh players or counterbalanced order when possible.
Allow purposeful recovery pauses; distinguish waiting for a carrier from not knowing what to do.
Use current controls and a small external observation sheet. Existing saved best time retains
successful performance and cannot recover first-attempt confusion, abandoned attempts, or help.
No telemetry system, dashboard, or permanent numeric difficulty gate is justified at this stage.

Fresh postimplementation review must check the chosen progression against this inventory, ordinary
routes, menu/Next ordering, new and existing saves, and rendered onboarding/story continuity.
Experienced bot completion remains a feasibility gate; human attempts establish difficulty.
