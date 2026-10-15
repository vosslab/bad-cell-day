# Recurring villains: middle campaign acceptance

Owned files: `src/levels_middle.ts` and `src/villain_scenes_middle.ts`.
Scene attachment to the exported campaign and rendered acceptance belong to integration.

## Authored causes and countermeasures

Both actors have an explicit safe upper perch, opening line, ending line, and actual targets in
every level. Scene bindings use literal component IDs. The temporary acceptance script validates
that every target exists and that every named counter pad has an effect on that exact target.

| Level | Gem's actual DNA obstacle | Cana's actual machinery or glucose gate | Cooperation retained |
| --- | --- | --- | --- |
| 06 | `isp_pass`, countered by RESCUE | `pac_pass`, opened by HOLD and RESCUE | Isp holds first; Pac permanently reroutes the gates |
| 07 | `bridge`, stabilized by STEADY/RESCUE | `second` requires power from STEADY/RESCUE; `pac_island` opens with STOP/RESCUE | Isp brakes first ferry; Pac powers second and steadies bridge |
| 08 | `bridge`, stabilized by STEADY/RESCUE | `box_door`, opened by PARK/RESCUE | Ordinary crate holds PARK; Pac holds bridge; Isp rescues |
| 09 | `team_door`, opened by TEAM/RESCUE | `ferry` requires STOP/RESCUE power; `pac_landing` opens with STOP/RESCUE | Both push heavy crate; Isp powers/brakes; Pac rescues |
| 10 | `bridge`, stabilized by STEADY/RESCUE | `pac_landing`, opened by STOP/RESCUE | Isp brakes attached lift pad; Pac steadies upper bridge |
| 11 | `blue_lane`, opened by ORANGE | `step_one` cycles power, restored by BLUE/ORANGE; `orange_lane` opens with BLUE | Separate upper Isp/lower Pac latches remain required |
| 12 | `bridge`, stabilized by STEADY/RESCUE | `ferry` cycles power, overridden by BRAKE/RESCUE; `pac_island` opens with BRAKE/RESCUE | Cargo holds brake; Pac steadies; Isp rescues |

Level 11 converts the first stair to a shallow moving carrier with 20 px vertical travel. Its
highest surface remains an ordinary generous jump below the upper lane. Level 12 retains the
existing ferry path. Both machines run for five seconds, then pause for three, in an eight-second
cycle. Their solid carriers remain present during outages. Either level 11 latch restores stair
power permanently; level 12 cargo BRAKE overrides the cycle while also braking, and RESCUE makes
power permanent. Level 7 and 9 rescue power also persists when the original holder leaves.

## Normal-input replay evidence

Historical command: `node --import tsx tests/_temp/villain_middle_routes.mjs` (temporary runner
removed after acceptance).
The runner used only `create_game_state`, `step_game`, and ordinary directional
and jump input at 1/120 second. It reads runtime positions to choose when to release movement;
it never writes player positions, pad state, platform state, barriers, or outcomes. All seven
previously documented routes from [middle_routes.md](middle_routes.md) still complete. Optional
collectibles were not part of these completion routes.

| Level | Simulation seconds | Outcome |
| --- | --- | --- |
| 06 | 11.97 | Complete, zero deaths |
| 07 | 14.78 | Complete, zero deaths |
| 08 | 11.08 | Complete, zero deaths |
| 09 | 13.20 | Complete, zero deaths |
| 10 | 11.65 | Complete, zero deaths |
| 11 | 13.02 | Complete, zero deaths |
| 12 | 14.32 | Complete, zero deaths |

Two additional ordinary-input runs deliberately wait six seconds at spawn before following the
same route. Level 11 completes in 19.07 seconds and level 12 in 20.32 seconds. These runs observe
374 and 169 fixed steps with an unpowered carrier, respectively, and verify that it remains
active and its motion time stays frozen while power is continuously off. They also observe
346 and 551 steps of restored power during the authored off-window after a counter pad activates.
This covers actual timed outages and recovery rather than only inspecting cycle declarations.
The ordinary level 11 run itself encounters 248 unpowered steps before its latch restoration.

## Focused checks

- `npx tsc --noEmit -p tsconfig.json`: exit 0.
- `npx eslint src/levels_middle.ts src/villain_scenes_middle.ts --max-warnings 0`: exit 0.
- Scoped Prettier check with all three repository ignore paths: exit 0.
- Every middle-scene target and counter binding: valid.

Browser evidence for actor overlap, warning visibility, and glucose/DNA target rendering remains
an integration check. No remote publication or index changes were made by this owner.
