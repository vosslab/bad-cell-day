# Campaign encounter source proof

The two authored campaign encounters complete from normal spawns using only the existing movement
and jump inputs. These are source simulation proofs; built browser acceptance belongs to the browser
owner. Production source is frozen for the manager's build batch.

## Room changes

- `level_17`: Pac's OPEN enables Gem's bubble and opens Isp's wall. The unpowered lift stays at
  floor height as a safe launch bay. Isp floats from that bay to the balcony at y370 and latches
  RESCUE. RESCUE silences Gem and permanently powers the lift for Pac. Both use the original low
  balcony and high exit tower. Gem's visible scene position is x250/y558; the shared muzzle is
  x285.2/y529.2, firing horizontally to x395/y529.2.
- `level_19`: Cana visibly occupies x480/y438, firing from x515.2/y409.2 to x720/y409.2 across the
  existing broad console. Isp holds STOP for Pac's crossing. An outgoing shove nudges Pac toward
  STEADY, which silences Cana and restores the ferry and bridge for Isp. RESCUE makes that safety
  permanent. Both original boss targets must still be occupied together. A returning leftward shove
  is not required for any jump or crossing.

All other room definitions and scene entries remain unchanged. Stable room IDs, campaign order,
controls, save contracts, hero shapes, and room 20 remain with their original owners.

## Historical commands

Executed from the repository root. The plan-specific route harness, input timelines, and
diagnostic logs were removed at closeout after browser handoff; the commands below record
performed checks rather than a durable route runner.

```bash
npx tsx tests/_temp/encounter_routes.mts level_17
npx tsx tests/_temp/encounter_routes.mts level_17 recovery
npx tsx tests/_temp/encounter_routes.mts level_19
npx tsx tests/_temp/encounter_routes.mts level_19 recovery
npx tsc --noEmit -p tsconfig.json
npx eslint src/levels_final.ts src/villain_scenes_final.ts
```

The route harness never writes player positions, velocities, mechanism state, or interference state.
It initializes each room through `create_game_state` and advances ordinary `GameInput` at 120Hz.
Each command emitted an input timeline under `tests/_temp/encounter_inputs_<room>[_recovery].json`.
Those timelines contain consecutive `{frames, keys}` intervals and `fps: 120`, ready for a browser
operator to translate into keyboard holds. Source diagnostics were in the corresponding
`tests/_temp/encounter_level_<number>[_recovery].log` files.

## Observed results

| Room | Route | Completion time | Observed effect | Projectiles at finish |
| --- | --- | --- | --- | --- |
| 17 | Normal relay | 24.87s | Isp float | 0 |
| 17 | Miss and retry | 32.81s | Isp float | 0 |
| 19 | Normal relay | 12.52s | Pac shove | 0 |
| 19 | Delayed recovery | 13.37s | Pac shove | 0 |

Room 17 recovery deliberately misses the first bubble while waiting at x220, then accepts a bubble
without steering. Isp falls safely back onto the stationary launch bay, waits for another shot, and
completes the relay. Pac subsequently waits on the ground for the powered lift to descend, boards,
and rides upward. Neither a missed shot nor a missed steering phase requires restarting.

Room 19 recovery waits after the first console landing, experiences the actual outgoing shove,
remains on safe console ground, and reaches STEADY. Isp crosses with the attack silenced; RESCUE
keeps it silenced while Pac leaves STEADY. Both targets activate and `bossDefeated` becomes true.
Every authored attack is ineligible at completion and every projectile has been removed.

## Browser handoff

Room 17 normal waypoints: Pac x150; Isp x110 then jump over Pac to x270; Isp x380 on the stationary
lift; wait until Isp's feet clear y370; steer right to x520. RESCUE is active by 5.68s. Isp jumps from
x565 to x700, walks to x780, then jumps to the exit tower. Pac waits at x220 until the descending
lift is near y505, jumps to x355, rides until feet are above y405, and jumps onto the balcony. Pac
repeats the low-balcony route, then jumps over Isp into the orange exit so Isp remains in blue.

Room 19 normal waypoints: Isp x150 STOP; Pac jumps to x390, walks to x430 on the stopped hall,
jumps to x570 on the console, then reaches x620 STEADY. Isp repeats that crossing and jumps over
Pac to x660. Start the high bridge jump at x660 so the character clears its underside before
entering the bridge. Isp reaches x760 RESCUE, then x825 TARGET. Pac moves to x660, jumps to x780,
then jumps over Isp toward x1000. Both targets complete the boss room at approximately 12.52s.

The exact input JSON is authoritative for timing. Browser rendering runs at a different frame rate;
operators should use visible height and platform positions for waits if replay clocks differ.

## Validation limits

Exact project typecheck and scoped ESLint pass. Prettier reports both production files unchanged.
No distribution build, deployment, screenshot, human difficulty judgment, or full campaign traversal
was performed by this source owner. The manager owns changelog and settled-decision updates.
