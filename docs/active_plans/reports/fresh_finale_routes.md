# Fresh finale route evidence

The authored change is restricted to `level_20` in `src/levels_final.ts` and
`src/villain_scenes_final.ts`. Other rooms, stable campaign IDs, saves, controls,
and hero silhouettes are untouched by this work.

## Cooperative handoff

1. Isp holds STOP while Pac crosses the ferry to STEADY.
2. Pac holds STEADY, powering the ferry, opening Isp's gate, stabilizing both
   bridge pieces, and suppressing Cana's boomerang.
3. Isp crosses to the console, jumps from about x640 to the control step, then
   from about x780 to the upper balcony. Gem's bubble crosses this ascent.
4. RESCUE latches ferry motor/power and the two entry gates. It does not stabilize
   either bridge piece and does not open Pac's finish gate.
5. Isp holds the high blue TARGET. It takes over both bridge stabilizers, opens
   Pac's finish gate, and suppresses Gem's bubbles.
6. Pac leaves STEADY, crosses the lower gap, and dodges Cana's restored attack.
   Pac's low orange TARGET and Isp's high blue TARGET require two continuous
   seconds together. Breaking either hold resets charge. Defeat latches.

The scene schemes name exactly these support sources. The two bridge schemes
list STEADY and blue TARGET; the finish gate lists blue TARGET alone.

## Geometry contract and measured clearance

This is 2D classical motion planning with translating axis-aligned rectangles,
floating-point positions in world pixels, x increasing right and y increasing
down. Existing `src/collisions.ts` owns swept axis clipping, open overlap, and
standing contact tolerances. No geometry kernel or tolerance changed.

Bodies are 30 by 36 pixels. Movement is 210 pixels/second, jump speed 470, and
gravity 1200. The continuous ballistic apex is approximately 92 pixels; 70-pixel
ascents have about 122 pixels of horizontal travel before descending to the new
floor, in addition to body overlap. The actual 120 Hz simulation is the final
route oracle.

| Surface | Horizontal span | Floor y |
| --- | --- | --- |
| Entry refuge | 0-220 | 520 |
| Ferry at authored origin | 230-430 | 450 |
| Console refuge | 510-650 | 450 |
| Left bridge | 650-820 | 450 |
| Control step | 710-800 | 380 |
| Right bridge | 875-970 | 450 |
| Control balcony | 870-970 | 310 |
| Blue crown | 970-1080 | 310 |
| Orange shutdown refuge | 970-1100 | 450 |

The lower gap is 55 pixels and lies beyond the first overhead shelf. The proposed
earlier 745-800 gap lay under that shelf, which would block a lower-lane jump;
the gap was moved before implementation. Upper steps rise 70 pixels and have a
70-pixel horizontal edge gap. Launching the first upper jump too late (x675)
hits the shelf underside; launching around x640 succeeds. These are solid
platforms, not one-way or automatic catch ledges.

The planning distinction between body clearance and point clearance follows the
geometry skill's local de Berg et al. *Computational Geometry: Algorithms and
Applications*, chapter 13.3, configuration-space obstacles and translating-body
Minkowski sums. Existing swept collision code supplies the runtime oracle;
ballistic reach and body-expanded clearance are independent design checks.

## Actual attack lanes

Gem stands at (660,385), giving muzzle (695.2,356.2), and aims at (1060,285).
The bubble crosses the real control route at speed 150 with radius 14, a
1.1-second warning, and four-second cooldown. Blue TARGET suppresses it. In the
baseline route it floats Isp at frame 665; Isp safely lands back on the control
step and continues. The 0.7-second delayed route avoids the bubble entirely.

Cana stands at (1010,450), giving muzzle (1045.2,421.2), and aims at (525,421).
The boomerang crosses the lower bodies and returns along the same lane at speed
180 with radius 12, a 0.9-second warning, and 0.8-second cooldown. STEADY alone
suppresses it. Suppression cancels the shot and continuously restores the full
cooldown. A fresh warning follows release. One complete flight takes about
5.8 seconds, allowing a two-second target hold between sweeps.

The boss art anchor is authored at x735,y95,width140,height140, center (805,165),
separate from the upper walking surface and the renderer's charge panel.

## Reproducible input-only evidence

Run `node --import tsx tests/_temp/finale_route.mjs`. Each case creates a fresh
campaign `level_20` with `create_game_state` and advances only ordinary movement
and jump inputs through `step_game` at 1/120 second. No teleports, pad flags,
platform flags, boss flags, or other simulation state are assigned.

The script emits frame-keyed input changes, named position/pad checkpoints, and
attack/effect transitions to `test-results/fresh_finale/*.json`. Browser replay
can consume each timeline directly using its `dt` and `frames` fields. Generated
files are local evidence, not permanent test fixtures.

| Fresh route | Protected behavior | Result |
| --- | --- | --- |
| `cooperative_handoff.json` | Gem float recovery; blue takeover; lower gap and outgoing-shot dodge; continuous hold | Complete |
| `handoff_recovery.json` | Premature STEADY release leaves bridges unsupported and finish gate shut despite RESCUE; console retreat and restored cooldown; charge interruption/reset and retry | Complete |
| `timing_0.7.json` | Delayed start changes projectile/ferry phase; both attacks avoided | Complete |
| `timing_1.8.json` | Initial Cana shove during ferry/console approach; STEADY and full route remain attainable | Complete |
| `timing_3.1.json` | Further changed ferry/projectile phase; both attacks avoided | Complete |
| `returning_boomerang.json` | Wait on supported right bridge, dodge outgoing leg and jump left over returning leg, then finish | Complete |

The recovery case also intentionally waits for an unsupported bridge to collapse
and uses the existing coyote window to jump back to the console. That is a
frame-exact boundary feasibility check, not an expectation for ordinary players.
The normal route and the earlier console retreat need no collapse escape.

The returning-flight case asserts no Pac interference effect through its
`return_dodged` checkpoint. A later second shot can shove Pac on the wide orange
pad; the remaining overlap still permits the continuous hold and completion.

## Verification and limits

- All six fresh routes pass their assertions, including final completion.
- `npx tsc --noEmit -p tsconfig.json` exits successfully with no diagnostics.
- Source formatting was checked with the installed Prettier.
- The route proof establishes geometric and timing feasibility, recoverability,
  actual attack interaction, and shutdown behavior. It does not establish fun,
  first-time discoverability, legible final art, or browser acceptance. The
  manager's independent browser and rendered-artifact review owns those checks.
