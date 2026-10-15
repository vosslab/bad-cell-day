# Recurring villains: final routes

Executed 2026-10-14 against the working source. Levels 13-20 each complete with ordinary
keyboard inputs at 120 Hz. Every route runs twice from fresh `create_game_state` and deep-equals
its replay. The controller does not write player positions, mechanism state, time, or boss state.
This is source simulation acceptance; rendered browser acceptance belongs to integration.

## Authored changes

Both visible actors have explicit safe upper perches, opening lines, ending reactions, and schemes
bound to exact targets. Gem's schemes identify DNA walls, unstable DNA bridges, and the existing
telegraphed slime/bomb traps. Cana's schemes identify glucose gates and actual powered machinery.

| Level | Gem targets | Cana targets | Actual counters |
| --- | --- | --- | --- |
| 13 | `pac_entry`, `slime_clock` | `isp_exit` | `open`, `rescue`; slime uses its safe pulse window |
| 14 | `isp_patrol`, `rolling_bomb` | `refuge_two`, `pac_exit` | `open`, `rescue`; bomb uses raised refuges |
| 15 | `packing_bridge` | `loading_gate` | `steady`, `weigh`, `rescue` |
| 16 | `factory_bridge` | `press_ferry` | `stop`, `steady`, `rescue` |
| 17 | `isp_balcony` | `reversed_lift` | `open` (POWER), `rescue` |
| 18 | `lower_route` | `shifting_shelf` | `steady` (POWER), `rescue` |
| 19 | `high_bridge` | `sliding_hall` | `stop`, `steady`, `rescue` |
| 20 | `core_bridge`, `isp_bridge_gate` | `core_ferry`, `pac_finish_gate` | `stop`, `steady`, `rescue` |

Every target exists and each listed counter has an actual matching target effect. Empty counters
occur only on the existing timed slime pulse and timed bomb patrol, whose safe routes are visible.

Level 14's second refuge now moves gently 40 pixels horizontally. It supplies real timed power
progression in the 13-15 block while preserving the solid floor beneath the route. The refuge and
level 16, 18, 19, 20 carriers use ten-second cycles with seven powered seconds and three paused
seconds. Existing rescue latches permanently restore their power for the attempt. Level 16, 18,
19, 20 Pac hold controls also supply power while supporting Gem's bridge.

Level 17 intentionally starts unpowered. Pac's accessible starting POWER pad supplies the lift;
Isp's reachable balcony RESCUE permanently supplies it before Pac leaves the starting hold.
The internal pad ID `open` is preserved. No cycle is combined with `requiresPower` in this room:
active power pads override both required-power denial and any independently authored cycle.

Boss target geometry and ownership remain unchanged. Level 16 and 19 boss routes still require
simultaneous blue/orange hold targets. Level 20 still requires its two differently elevated final
targets together, preserving Gem and Cana's combined machine shutdown.

## Executed route evidence

Historical command: `node --import tsx tests/_temp/villain_final_routes.mjs` (exit 0; temporary
runner removed after acceptance).

The runner read the fixed input intervals recorded in
[final_playthrough.md](final_playthrough.md), validates all final scheme bindings, and executes
them against the new levels. Those exact intervals still complete all eight rooms:

| Level | Seconds | Outcome | Boss |
| --- | ---: | --- | --- |
| 13 | 9.858 | complete | not applicable |
| 14 | 9.692 | complete | not applicable |
| 15 | 8.933 | complete | not applicable |
| 16 | 9.400 | complete | defeated |
| 17 | 20.967 | complete | not applicable |
| 18 | 5.325 | complete | not applicable |
| 19 | 9.492 | complete | defeated |
| 20 | 9.900 | complete | defeated |

Machine-readable results: `/private/tmp/villain_final_routes_results.json`.
Browser handoff intervals: `/private/tmp/villain_final_route_inputs.json`.
These local temporary artifacts are not tracked acceptance documents.

## Outage and recovery journeys

Four additional input-only journeys complete and deterministically replay while deliberately
waiting through real outages. Level 14 waits on safe initial ground for 40 seconds before the
route. Level 16/19/20 hold STOP for ten additional seconds after reaching the starting pad, then
continue the ordinary route. Every outage leaves its carrier solid and freezes position and
`motionTime`; every rescue is observed supplying power during a later scheduled off-window.

| Level | Unpowered 120 Hz frames | Consecutive frozen frames verified | Outcome |
| --- | ---: | ---: | --- |
| 14 | 1440 | 1436 | complete |
| 16 | 360 | 359 | complete, boss defeated |
| 19 | 360 | 359 | complete, boss defeated |
| 20 | 360 | 359 | complete, boss defeated |

Exact additional inputs are exported as `/private/tmp/level_14_villain_outage_inputs.json`,
`/private/tmp/level_16_villain_outage_inputs.json`,
`/private/tmp/level_19_villain_outage_inputs.json`, and
`/private/tmp/level_20_villain_outage_inputs.json` for browser integration.
These prove recovery journeys exist; they do not claim first-time players never fail.

## Scoped checks

- `npx tsc --noEmit`: exit 0.
- `npx eslint --max-warnings 0 src/levels_final.ts src/levels_final_helpers.ts src/villain_scenes_final.ts`:
  exit 0.
- Prettier formatted all three owned source files.
- No shared engine, renderer, campaign-index, or boss-outcome implementation was changed by this author.

The temporary route script remains for integration handoff and should be removed at plan closure
once the manager extracts the campaign/browser evidence. Changelog integration belongs to the
manager's shared documentation closeout.
