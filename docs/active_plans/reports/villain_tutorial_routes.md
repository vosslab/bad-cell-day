# Recurring villain tutorial routes

Fresh source simulation acceptance on 2026-10-14 covers levels 1-5. Each starts from
`create_game_state(TUTORIAL_LEVELS[index])`; every subsequent change uses ordinary movement/jump
input through `step_game` at 120 Hz. The runner never changes player coordinates, mechanism state,
platform phase, or outcome. It asserts no death and final completion for each route.

Historical temporary runner: `tests/_temp/villain_tutorial_routes.mjs` (removed after acceptance).
Executed with `npx tsx tests/_temp/villain_tutorial_routes.mjs`. These checks establish source
physics acceptance, not rendered browser or learning-pair timing acceptance.

## New level 1 chain

Gem's `dna_wall` spans the world height and blocks Pac. Isp holds `dna_open`; Pac crosses to
`glucose_restore`, whose Pac-only latch permanently opens the wall and powers Cana's
`glucose_lift`. Both exits are on `exit_balcony`. There are no hazards or crates, and the full-width
floor catches missed jumps. The unpowered lift remains a solid, stationary boarding surface.

The balcony is 250 pixels above the floor. With jump speed 470 and gravity 1200, each jump rises
about 92 pixels; even a 36-pixel head stack plus two sequential jumps falls short of the balcony.
Neither a jump nor a cooperative head launch replaces the powered lift. Its 200-pixel deck and
20-pixel horizontal gap to the balcony leave generous boarding and landing room. A rider who
misses the first boarding opportunity can wait safely for another cycle.

The verified conservative route finishes in 30.66 simulation seconds with a 20-second lift cycle.
A learning pair can spend additional time reading controls and identifying pads. The intended
roughly 30-60 second first attempt remains a human-play expectation rather than a measured
usability result.

## Exact source routes

Movement coordinates below are player left edges. Move until within 1.8 pixels of the target;
`jump to` means hold the listed horizontal direction, press jump for one 120 Hz step, then release
jump while continuing toward the target. Idle periods leave both players' input empty. Completion
stops the final movement as soon as both exit rectangles overlap their owners.

| Level | Simulation completion | Route |
| --- | --- | --- |
| 1 | 30.66 s | Idle .05; Isp to 240; Pac to 580, jump to 720, idle .7; Isp to 640, idle .1; wait until lift top <=345; Pac jump to 1048, idle .7; wait until lift top >=495; Isp jump to 800, idle .6; wait until lift top <=345; Isp jump to 948, idle .7. |
| 2 | 7.65 s | Idle .05; Isp to 240; Pac to 555 then 1025; Isp to 950. |
| 3 | 8.73 s | Idle .05; Isp to 200; Pac to 265, jump to 420, idle .12, to 550, jump to 735, idle .3, to 840 then 1030; Isp to 265, jump to 435, idle .2, to 575, jump to 755, idle .3, to 960. |
| 4 | 9.05 s | Idle .05; Pac to 210; Isp to 165, jump to 335, idle .2, to 870 then 985; Pac to 930, jump to 1050, idle .6. |
| 5 | 9.78 s | Idle .05; Isp to 135; Pac to 180, jump to 350, idle .2, to 370, jump to 535, idle .2, to 565; Isp to 185, jump to 350, idle .2, to 370, jump to 530, idle .2, jump to 695, idle .2, to 980 then 995; Pac to 945, jump to 1060, idle .6. |

Level 1 uses separate lift trips deliberately: Pac boards first, while Isp waits safely for the
next low boarding opportunity. The route ends with Pac standing on the balcony and Isp jumping
into his matching exit. The outcome freezes immediately; airborne completion is the game's
existing exit-overlap rule.

## Actual villain bindings

All ten tutorial schemes resolve to a real target ID. Every named counter pad exists and has an
effect on that exact target; no fallback target selection or decorative mechanism is used.

| Level | Gem target and counters | Cana target and counters |
| --- | --- | --- |
| 1 | DNA wall `dna_wall`: `dna_open`, `glucose_restore` | Drained lift `glucose_lift`: `glucose_restore` |
| 2 | DNA door `pac_door`: `hold_door`, `rescue` | Glucose gate `isp_door`: `rescue` |
| 3 | DNA landing door `pac_landing`: `stop`, `rescue` | Glucose gate `isp_rescue`: `rescue` |
| 4 | Unstable DNA `bridge`: `steady`, `rescue` | Glucose gate `pac_rescue`: `rescue` |
| 5 | Unstable DNA `bridge`: `steady`, `rescue` | Glucose gate `pac_finish`: `rescue` |

Levels 2-5 retain their platform and mechanism geometry. Level 3 still introduces Isp's Motor Stop;
level 4 still introduces Pac's stabilization. Glucose gates use existing door effects; level 1
introduces the separate actual platform power mechanism. Both villains have explicit, noncolliding
upper-region positions and short opening/ending reactions in the new scene catalog.

## Checks and limitations

- All five routes complete with no deaths through public simulation input.
- Level 1 negative controls start from original spawns: Pac moving/jumping alone cannot cross the
  full-height DNA wall, reach RESTORE, or power the lift; Isp alone can board the unpowered lift
  but cannot move it or reach his exit.
- All ten scene targets and all associated counter effects validate.
- Scoped ESLint passes for both tutorial source files; Prettier passes for those files.
- Full TypeScript compilation passes after the middle-level owner repaired helper union typing.
- Browser presentation, built-artifact acceptance, live learning-pair duration, and remaining
  campaign levels belong to integration acceptance and are not claimed by this report.
