# Neural Misfire prototype

**Status: CLOSED - KEEP_WITH_CONCERNS (root decision 2026-10-17 10:14:54 UTC).** Fresh SPEC, QUALITY, and integration reviews and root public replays are complete. This bounded data-only experiment remains private evidence. Production implementation requires root approval of [the separate production plan](NEURAL_MISFIRE_ROOM.md). This is one private,
data-only gameplay experiment for a distinct advanced co-op room. The 41-room campaign remains the
current playable source, and its accepted current41 expert assessment stays frozen design evidence.
The Level 3 bridge-readability milestone is complete; its remaining human motion concern is not a
gate for this prototype. Preserve good rooms and additions while exploring meaningful hero roles,
clear routes, and recurring, exploitable villains. No human fun or discovery claim is made.

## Hypothesis

In **Neural Misfire**, Pac baits Cana's real returning boomerang into shoving Gem into bubble range.
Isp uses Gem's relocated short-range FLOAT attack and climbs to latch Pac's exit. The room works only
if both jobs matter, the weapon interactions are readable and exploitable, and ordinary missed shots
or timing failures allow a safe repeat. Legal co-op solutions beyond this relay are welcome; the
relay need not be the sole route or a forced proof.

## Scope and method

Use existing engine contracts and level data only. Add no room to the campaign and no framework,
state, flags, configuration, controls, physics, attack code, or SVG. Do not patch gameplay state,
teleport actors, disable attacks, or add private interference hooks. Keep the candidate in the
ignored `tests/_temp/villain_relay_plan/` directory and recovery evidence in the separately bounded
`tests/_temp/villain_relay_recovery/` directory; use `.mjs` or
`.mts` helpers to stay outside the canonical TypeScript glob. Preserve each attempt, runner, starting
definition, inputs, traces, and failures.

First review existing seams and rules. Then implement one bounded private `LevelDefinition` and
exercise it through public `create_game_state`, `create_empty_input`, and `step_game` using ordinary
inputs at fixed 120 Hz. Demonstrate actual boomerang contact, Gem's resulting shove into the new
muzzle/bubble range, and Isp's FLOAT/climb/co-op exit. Show Pac doing meaningful work, a legal clear,
and safe missed-shot/retry recovery. Stop at about 20 purposeful attempts or 12 minutes, whichever
comes first, and report evidence and preserved failures. Root narrowed the recovery follow-up to
about 10 purposeful attempts or 8 minutes. The frozen recovery run in
`tests/_temp/villain_relay_recovery/attempt_05/` demonstrates one actual bubble miss, ordinary-input
recovery, two separate Gem-contacting Cana flights contained at `gem_stop`, later FLOAT/LINK, and
both exits. See `REPORT.md`.

## Decision gate

Root chose KEEP_WITH_CONCERNS after the accepted reviews and public replays. See the private
`REPORT.md` for closeout corrections and
the separate [production plan](NEURAL_MISFIRE_ROOM.md) for proposed implementation gates. The
prototype does not establish human readability, fun, or campaign difficulty.
