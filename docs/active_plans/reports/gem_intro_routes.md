# Gem bubble introduction evidence

Stable `level_13`, campaign position 13, is now **Gem's Bubble Break**. This is a data-only
factory-room change; its first mandatory bubble precedes the advanced level 17 encounter at
campaign position 18. The 20 stable campaign IDs and campaign order are unchanged.

## Cooperation and geometry

- Pac holds `bubbles` (BUBBLES), a Pac-only hold pad at x120..195 on floor y500.
- Isp waits at x435 beside Gem, then steers right onto `rescue_shelf` at x500..800, top y320.
  The 180-pixel rise exceeds the approximately 92-pixel normal jump and the approximately
  128-pixel jump from a partner's head.
- Isp's `rescue` (RESCUE), a latch at x550..625 on the shelf, opens `pac_entry` and
  `isp_stairs`, and disables `factory_bubble`. Both gates are full height. Pac's gate at x270
  prevents moving a partner into the float bay; Isp's gate at x810 prevents a stair bypass.
- Pac follows via `lower_step`, x820..960 at y430, then `upper_step`, x900..1060 at y360,
  then jumps left onto the shelf. The upper step was moved from x860 to x900 after ordinary
  input exposed an underside collision; the final arrangement passes both rises and the return.
- Exits match Isp at x660 and Pac at x745 on the y320 shelf. The entire room has a continuous
  safe y500 floor, no hazards, no crates, and no moving platforms. Missed or unsteered shots
  permit another attempt without a death or reset.
- Gem is at (300,508), with fixed muzzle (335.2,479.2). His short horizontal bubble targets
  (470,479.2), speed 140, radius 12, cooldown 1.5 seconds, windup 0.8 seconds. Cana is visible
  at (1000,155). The DNA wall scheme targets `isp_stairs`; the glucose gate scheme targets
  `pac_entry`. Both counter lists contain `rescue`; no dummy hazard or invalid scene target.

## Ordinary input evidence

Historical executed command: `node --import tsx tests/_temp/gem_intro_routes.mts [mode]`.
The plan-specific runner and JSON timelines were removed at closeout after browser handoff;
this command records source proof rather than a durable executable. The runner created simulation
state normally and supplies only character input plus `step_game` at 120 Hz. It never writes
player positions, latch state, effects, projectile state, or outcome. JSON timelines contain
only frame durations and keyboard keys, ready for browser playback after the manager's build.

| Mode | Simulation time | Outcome | Observed floats |
| --- | ---: | --- | ---: |
| `complete` | 16.00 s | Both matching exits complete | 1 |
| `recovery` | 35.01 s | Missed shot, unsteered ascent, automatic repeat, both exits complete | 3 |
| `suppression` | 23.27 s | Pac leaves pad, shots stop, returns, both exits complete | 1 |
| `bypass` | 8.33 s | Gates block ordinary jump routes; RESCUE stays inactive | 0 |

Each completion route also waits three seconds after RESCUE while Pac still holds BUBBLES,
proving latch suppression overrides the enabling hold pad during active gameplay. No shots
remain and the attacker stays in cooldown. The recovery run deliberately waits away from
Gem's line, returns for an unsteered float and an automatic second float, then returns to the
floor before making the successful ascent. No death occurs.

The complete route is: Pac x145; Isp x110 then jump to250 over Pac, walk to435, wait until
feet are above317, steer to570; latch RESCUE and wait; Isp660; Pac780, jump825, settle on
lower step, reposition820, jump970, settle on upper step, reposition900, jump left toward775.
The matching exit completes during the final jump. Historical timelines were
`tests/_temp/gem_intro_inputs_complete.json`, `tests/_temp/gem_intro_inputs_recovery.json`,
and `tests/_temp/gem_intro_inputs_suppression.json`.

## Verification boundary

Passed `npx tsc --noEmit -p tsconfig.json`, scoped ESLint on `src/levels_final.ts` and
`src/villain_scenes_final.ts`, and scoped Prettier checks. Source edits own only the level 13
block and level 13 scene; all other final room/scene blocks are preserved. No build or browser
acceptance was performed by this owner; the manager coordinates fresh built-browser acceptance
and the full suite separately.
