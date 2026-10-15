# Active middle villain routes

Source freeze: 2026-10-15. Owner files: `src/levels_middle.ts` and
`src/villain_scenes_middle.ts`. Implements the stable 06/08/07 rows in
[active_villains_direction.md](active_villains_direction.md).
Manager owns canonical changelog/design records, the build and browser acceptance.

## Encounter relationships

- 06: Gem's short leftward sweep crosses the first raised HOLD alcove. Existing lower corridor
  recesses at x130..180 and x330..380 put a waiting cell below the projectile; terrain interception
  is never assumed. Isp exposes itself on HOLD while Pac waits below the second alcove, then
  crosses the first gate and climbs to RESCUE. The rescue cancels Gem permanently.
- 08: Gem's loading-floor sweep includes the PARK approach and ends before the box door and
  STEADY. PARK's ordinary crate keeps working through FLOAT/STUCK; Pac's bridge duty and Isp's
  supported crossing remain outside fire. RESCUE cancels the attack.
- 07: Cana throws left across the broad STOP shore. The roughly 159px flight at 130px/s shows
  both outgoing and return travel during the normal route. Pac's arrival at STEADY suppresses
  the attack while stabilizing the bridge and powering the second ferry; Isp then leaves STOP.
  The first ferry and both supported crossing segments remain outside the shot. RESCUE also
  supplies permanent suppression when Pac later leaves STEADY.

No platforms, barriers, crates, hazards, spawns or movement physics changed. Gem's first-alcove
range is 145px; the actual target is about121px from the muzzle. Its loading-floor range is250px;
actual travel is about226px. Those endpoints use the final shared anatomical geometry, as does
Cana's immutable return anchor.

## Ordinary-input evidence

The retained runner is
`test-results/active_villains_validation_harnesses/middle_villains_probe.mjs.txt`; restore it to
`tests/_temp/middle_villains_probe.mjs` before the recorded command:
`node --import tsx tests/_temp/middle_villains_probe.mjs --assert`.
The temporary runner creates actual room states and supplies only left/right/jump inputs at120Hz.
It never injects player positions, effects, pad state, projectiles or outcomes. Complete replay
inputs and sampled/event states live under `test-results/middle_villains/`. Each JSON has
`fps:120` and an `inputs` array of complete `{isp,pac}` button states, one per simulation tick.

| Stable room | Ordinary | Delay10s at spawn | Result |
| --- | --- | --- | --- |
| 06 | 11.99s | 21.89s | Complete, FLOAT recovery and rescue cancellation |
| 08 | 11.18s | 21.80s | Complete, cargo keeps PARK active |
| 07 | 14.97s | 25.48s | Complete, outgoing/returning visible to simulation |

Additional retained runs all complete without Retry:

- `level_06_recess_wait.json`: Isp waits10s below the first lane before climbing; no effect while
  waiting. `level_06_wait_then_dodge.json` completes with no hero hit after waiting below and
  hopping through the opening. This is an optional timed avoidance route, not a required skill.
- `level_06_intentional_hit.json`: remaining on HOLD permits repeat FLOAT and four observed
  hold-loss transitions before ordinary recovery. `level_06_hold_release.json` deliberately
  returns left, waits and reboards the raised platform; the gate control remains usable.
- `level_08_cargo_survives.json`: Isp waits on the loading floor while Pac is on STEADY and
  the crate alone holds PARK. FLOAT expires without disturbing cargo or bridge duty.
  The10s delayed route also naturally records Pac STUCK and recovers.
- `level_07_return_wait.json` waits through complete return cycles before departure.
  `level_07_return_leg_hit.json` jumps the outgoing leg and receives Pac SHOVE on the returning
  leg at2.583s, then completes20.60s. The delayed route can safely reorder the heroes on the
  shore; Pac uses an ordinary hop over Isp before the ferry rather than pushing him off its edge.

All runs assert completion, actual release, and suppression after the next simulation update.
Focused assertions also establish no-hit avoidance, cargo surviving interference, HOLD loss and
an actual returning-leg hit. The observational fired flag includes the authoritative release
marker because a projectile consumed immediately on hero contact has no surviving post-step
projectile record.

## Verification and remaining review

TypeScript typecheck, scoped ESLint and scoped Prettier pass. Source probes do not establish
rendered readability, novice difficulty or final-built replay acceptance. In particular, 06's
ordinary first bubble is consumed at contact near its muzzle; browser review must establish that
its discharge/recoil and hit read clearly. Root positions need rendered inspection for apparent
floor contact: Gem06=(350,454), Gem08=(390,459), Cana07=(265,419). The latter is planted near
ferry staging, and 06's actor stands above the lower corridor. If either looks unsupported or
buried, return the narrow authored placement to this owner and rerun these routes with the
shared anchors. No terrain-blocking assumption or renderer-only muzzle adjustment is acceptable.
