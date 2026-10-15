# Crossed Paths route evidence

## Geometry contract

This room uses the existing 2D axis-aligned collision and moving-platform model in pixel units.
The geometry-expert motion-planning route informed the review: validate an actual continuous
ordinary-input path against the game simulation, then inspect separation and blocked alternatives.
No geometry kernel, engine, shared type, or campaign ordering changes belong to this module.

Stable room ID: `level_22`. Intended campaign position: after `level_17`, before `level_19`.
The source exports `CROSSED_PATHS_LEVEL` and `CROSSED_PATHS_SCENE`.

## Layout and causal checkpoint

- Isp starts left; Pac starts right. Pac walks inward along the lower corridor, while Isp rides
  the narrow powered lift to an upper corridor.
- Isp holds INVITE while Pac crosses the inward gate. Isp then boards the stopped lift; Pac
  steps onto LIFT to carry Isp upward. Missing a boarding opportunity is recoverable by waiting
  for the lift's return, or briefly releasing LIFT to let Isp approach the stopped carrier.
- Isp jumps right to HANDOFF. Its latch preserves lift power and the invitation gate, and opens
  Pac's next inward gate. Pac can leave LIFT and continue left to TURNAROUND.
- Pac's TURNAROUND latch opens Isp's upper wall. Isp proceeds right, jumping the 60-pixel break,
  and latches STAIRS.
- Pac reverses direction. The formerly blocked return stairs are now usable: three leftward
  climbing jumps replace the inward floor route, collect the orange spark, and reunite Pac
  with Isp on the upper finish shelf. Both exits occupy this shared shelf.

This sequence has five partner-directed actions and four ownership changes. It differs from the
introductory split-path room through opposite starts, inward traversal, powered lift timing,
route reversal, and a staircase return. Neither hero remains stationed throughout the puzzle.
The lower return stretch leads into a newly available route with an optional spark, rather than
ending at the same console.

## Bypass and recovery review

Isp's lower-route filter joins the upper shelf at y=300 and extends to the bottom of the world.
This seam prevents dropping around the shelf's left edge into Pac's lower route. The upper wall
extends to the ceiling; Pac's lower locks rise above the ordinary 92-pixel jump apex.
Pac's upper filter separates the inner upper corridor from the right-side stair return.

The return gate leaves 100 pixels above the lower floor for 88-pixel character artwork. Its
underside stops a closed-gate jump six pixels short of landing on the first tread. After it opens,
the treads rise 70, 70, and 60 pixels. The upper corridor has 178 pixels of lower-lane headroom.
The moving lift rises 200 pixels, with an ordinary jump required to transfer to the upper shelf.

The simulation checks withholding INVITE, an early stair attempt, leaving LIFT before HANDOFF,
Pac meeting the still-locked inner gate, and Isp meeting the upper wall before TURNAROUND.
All recover on ordinary supporting surfaces and complete in the same state after cooperation
resumes. These are temporary route probes, not permanent timing contracts.

Gem's scene targets the upper DNA wall and names Pac's actual counter. Cana's scene targets
lift power and the return stair gate, each with the actual counter pads. Both actors are present.
Cana fires a telegraphed diagonal boomerang after HANDOFF until STAIRS. His lower perch is below
the traversable floor and his shot rises into Pac's inner approach. Pac can time a jump over
the outgoing/returning sweep; a hit causes the existing recoverable shove. The ordinary run
sees a real projectile and finishes without a shove; the interrupted run receives one shove
and still completes. The timed lift transfer, upper gap, and staircase add movement challenges.

## Executed checks

- `npx tsx tests/_temp/crossed_paths_route.mjs`: passes two fresh spawn-to-finish runs using only
  ordinary movement/jump inputs; no player, platform, pad, or barrier mutation.
- Ordinary run: completion at simulation time 16.067 seconds; both optional sparks collected.
- Recovery run: completion at simulation time 21.650 seconds; both optional sparks collected.
- `npx tsc --noEmit -p tsconfig.json`: passes.

Replay files are `test-results/crossed_paths/ordinary.json` and
`test-results/crossed_paths/recovery.json`. Each contains `levelId`, ordered `frames` with
`input` and `dt`, and `milestones` with labels, frame indices, and snapshots. Frame counts include
idle inputs after completion; completion freezes simulation time. These files support browser
replay and capture; pure simulation does not establish browser rendering acceptance.
