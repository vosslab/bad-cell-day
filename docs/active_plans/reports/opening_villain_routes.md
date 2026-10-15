# Opening villain route prototype

## Status

The current-anchor candidate is runnable and feasible for ordinary flat-floor play. Promotion is
blocked by a reproduced shared collision defect: Pac can walk through a door which closes while
his body overlaps it. This report records simulation evidence, not rendered-art acceptance.
The planned shared aiming contract will change the anchors; rerun and retune this experiment after
that contract lands. No campaign definitions, production engine files, or dist files were changed.

The exact retained source is
`test-results/active_villains_validation_harnesses/opening_villain_probe.mjs.txt`.
Restore it to `tests/_temp/opening_villain_probe.mjs` before running
`node --import tsx tests/_temp/opening_villain_probe.mjs`. The probe clones current stable
`level_02`, now displayed as LEVEL 1. Its only player-state changes come from `step_game` with
ordinary left/right/jump input. Each route starts with a fresh game state. JSON records include
sampled inputs, positions, effects, pad state, projectile directions, and event timelines under
`test-results/opening_villain/`.

## Candidate scene and attacks

Keep the existing continuous walkway at y=500, HOLD x=210..295, RESCUE x=520..610, and both
full-height barriers. Actor positions deliberately place the CURRENT shared muzzle at y=480:
Gem (279.8,508.8) gives muzzle (315,480); Cana (664.8,508.8) gives muzzle (700,480).
These are provisional positions pending mirrored, aimed weapon anchors.

| Definition | Gem bubble | Cana boomerang |
| --- | --- | --- |
| ID | gem_opening_bubble | cana_opening_boomerang |
| Actual current origin | (315,480) | (700,480) |
| Target | (175,480) | (320,480) |
| Cooldown | 0.55 seconds | 0.30 seconds |
| Windup | 0.70 seconds | 0.65 seconds |
| Speed | 170 pixels/second | 500 pixels/second |
| Radius | 12 pixels | 13 pixels |
| Disabled by | rescue | rescue |

Gem's horizontal 140-pixel sweep covers the entire HOLD pad. Cana's 380-pixel flight crosses
Pac's rescue approach and visibly reverses before ordinary RESCUE. Terrain does not stop either
projectile; neither the walkway nor gates are described as projectile cover.

Rejected placement/timing: Cana at speed 240 fired but RESCUE canceled the outgoing projectile
before its return became visible during ordinary play. Speed 500 gives an observable return.

## Ordinary route timeline

The ordinary controller walks Isp to x=250 while Pac walks toward RESCUE, then both walk to their
existing exits. It uses no jump, retry, teleport, or deliberately required hit.

| Time | Event |
| --- | --- |
| 0.525 | Isp activates HOLD |
| 0.950 | Cana throws |
| 1.250 | Gem fires |
| 1.392 | Gem floats Isp |
| 1.408 | Cana shoves Pac |
| 1.442 | Floating Isp loses HOLD; Pac's door closes |
| 1.708 | Boomerang visibly enters its return phase |
| 1.975 | Pac latches RESCUE, opening both doors |
| 1.983 | Both projectiles are cleared by RESCUE |
| 2.800 | Isp's FLOAT ends normally |
| 5.133 | Both players complete |

The initial FLOAT frame can still overlap the pad; HOLD correctly deactivates when Isp rises
clear. Maximum FLOAT rise reaches y=245.71. No pre-RESCUE Isp crossing of x=630 was observed:
the full-height Isp gate remains effective while floating.

## Route evidence

All 14 saved routes complete without a retry. Except the explicit FLOAT-oversteer stress route,
they use no jump input.

| Route | Completion | Evidence |
| --- | --- | --- |
| ordinary | 5.133 s | Both attacks, visible boomerang return, FLOAT and shove recover |
| delayed_10 | 15.008 s | Ten-second initial wait recovers |
| delayed_12 | 17.275 s | Twelve-second initial wait recovers |
| delayed_15 | 20.475 s | Fifteen-second initial wait recovers |
| release_pac_365 | 7.967 s | Early HOLD release left of Pac's door recovers |
| release_pac_385 | 6.883 s | Door closes on overlapping Pac; source defect below |
| release_pac_405 | 6.892 s | Door closes on overlapping Pac; source defect below |
| release_pac_435 | 7.358 s | Early release after crossing recovers |
| gem_pac | 9.050 s | Deliberately receive sticky; later move and finish |
| cana_isp | 8.933 s | Deliberately receive dizzy; later move and finish |
| walk_dodge | 7.508 s | Pausing in the attack lane still receives shove; rejected as dodge |
| floor_walk_cana_dodge | 6.767 s | Walk to Pac x=260, wait until 2.5 s, then proceed; no shove |
| float_gate_bypass | 12.625 s | Aggressive steering reaches closed Isp gate without crossing |
| rescue_silence | 14.208 s | Wait until 12 s after early RESCUE; no further shots |

All four existing effects occur on input-reachable positions and recover. The successful Cana
walking dodge still receives Gem's sticky: this does not establish a route avoiding every hit.
The aggressive FLOAT route passes Isp over Pac and reverses their floor order. Its recovery uses
one ordinary Isp jump at 12 s to let Pac pass to the farther exit. This is a real steering
limitation to assess before claiming universal no-jump recovery; the ordinary route does not
change their order.

## Shared collision failure

`release_pac_385.json` demonstrates a closed-door bypass rather than a collision trap:

- At 1.542 s Pac x=380.03 overlaps the closed x=400..426 barrier.
- At 3.283 s Pac x=398.92 remains in the closed barrier.
- At 3.425 s Pac x=428.67 has crossed completely while the door is still closed.

`clip_axis` in `src/collisions.ts` clips an approaching body only when its leading edge starts
outside the obstacle. It provides no recovery rule for an obstacle enabled around an overlapping
body. `update_pads` in `src/mechanisms.ts` closes the barrier immediately on HOLD loss. The two
contracts together permit this crossing. The temporary probe records the failure and does not
patch shared physics. Establish the owning closure policy before promotion; a room-specific
placement workaround would hide this existing source defect.

## Acceptance limits

The runnable probe asserts normal completion, both first shots, return visibility, all route
completion, reachable sticky/dizzy, the successful walking Cana dodge, no Isp gate bypass, and
RESCUE silence. It intentionally records the known closed-door overlap failure rather than
misrepresenting it as passing closure acceptance. Current tests do not prove visual weapon aim,
rendered actor clearance, a hit-free route, or the future weapon-pose contract.
