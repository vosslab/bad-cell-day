# Cana's Moving Target promotion

## Outcome

Register the approved moving-target encounter as `level_54`, intestine position 6 / campaign
position 11, between **Cana-stipation** (`level_53`) and **The Great Cell Shuffle** (`level_05`).
Preserve all prior room definitions and their relative order. The room offers a short cooperation
encounter between longer puzzle sequences: Pac braces the powered moving fold while Isp crosses
above; Cana's carried-origin boomerang SHOVEs Pac and releases the fold; if Pac stays on the fixed
fold, the carrier catches up and stops again. Pac can then take the lower route.

## Source and proof

Promote `tests/_temp/moving_attacker_coop_prototype/fixture.mjs` into typed
`src/level_moving_target.ts` using the existing level and villain scene contracts. Preserve its
geometry, spawns, scenes, dialogue, attack, and power cycle. Change only the private ID to
`level_54` and use the approved full player hint. Register through the existing scene and campaign
paths in `src/levels.ts`. Add no mechanics, controls, state, options, assets, or permanent tests.

Record normalized before/after room definitions and campaign order under
`tests/_temp/moving_target_implementation/`. Replay the fixture's ordinary and Pac recovery cases
against the actual normalized registered level at `dt=1/120`, retaining exact input keys and final
state. Final accepted evidence also includes an independent initial-Isp-miss/reboard route, seven
public views, and a seeded save/reload progression run.

## Documentation and acceptance

Current54 has 54 registered rooms, with the previous 53 definitions and order preserved. The
canonical check gate passed before the final hint wording correction; the final official build,
two browser smokes, seven public views, focused save/reload progression, SPEC, QUALITY, and final
integration were accepted with concerns at 2026-10-18 14:53:35 UTC. The independent initial-Isp-miss
route completed in 7.133 s. The seeded progress run saved level54 at 11/54, loaded The Great Cell
Shuffle at display position 12, and retained the completed room and unlocked successor after
reload. These focused results do not establish a fresh 54-room journey, a difficulty score, or
human discovery and enjoyment. Keep the
historical 53-room journey and frozen current53 difficulty assessment unchanged. The broader game
goal remains active.
