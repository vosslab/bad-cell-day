# Final target pressure

Status: **DONE_WITH_CONCERNS**

Root accepted this bounded level 20 milestone at 2026-10-18 00:50:56 UTC. SPEC, QUALITY, and
integration each ACCEPT WITH CONCERNS. This decision covers the level 20 encounter only; it does
not close the broader gameplay goal, claim a full 47-room journey, or measure human enjoyment.

## Outcome

In **A Very Bad Day for the Tumor** (`level_20`), place Gem at `(1040, 310)` and aim his existing
bubble at `(900, 285)`, across Isp's upper blue TARGET approach. Cana remains on Pac's lower route.
Keep the successful split route and two-second joint charge. If a late bubble knocks Isp off blue
TARGET, the hint directs Isp to wait on the crown and retake it while Pac holds orange TARGET.

## Preserved mechanics

STOP controls the motor/gate; STEADY interrupts Cana once; blue TARGET interrupts Gem once and
supports the bridge handoff. RESCUE opens the route. Both targets must remain held for two seconds
to finish.

## Evidence and review

- Baseline native split-route clear: 1,358 frames, zero deaths (`tests/_temp/physical_finale_solver/REPORT.md`).
- Adopted 1040-home native route: fast clear at 1,337 frames, zero deaths. The delayed route reaches
  a positive 1.583-second charge before Gem's bubble causes FLOAT and resets blue TARGET. Isp
  returns to the crown while Pac holds orange; the same run clears at 1,927 frames with zero deaths.
  Exact schedules are in `tests/_temp/final_target_pressure/`.
- Browser input exposed a one-frame Pac nudge that crossed the STEADY edge. The original fast and
  recovery inputs failed; corrected cases change only interval 6 from 24 to 22 frames. Both browser
  clears pass without deaths or page errors. Root replayed that correction natively: fast clear at
  1,335 frames, recovery at 1,925 frames, and FLOAT reset at frame 1,436.
- Root reviewed five browser originals: initial view, WINDUP at frame 1,370, FLOAT/reset prefix,
  fast clear, and recovery clear. Gem's placement and telegraph read clearly, including the visible
  1.1-second warning before FLOAT takes effect immediately on release. Pushed bodies and labels
  crowd the right edge; root judged this nonblocking, with no further source or UI change required.
  The served build hash was `735b5a947fa5b1fa1ab73c9535b3c5eea792ef52fcefe02137a6551985fcf724`.
- The official build and both standard smokes passed. Code check (96 checks), final hint TypeScript
  compile, and format check passed. SPEC, QUALITY, and integration ACCEPT WITH CONCERNS; see
  `tests/_temp/final_pressure_spec/REPORT.md`, `tests/_temp/final_pressure_quality/REPORT.md`, and
  `tests/_temp/final_pressure_integration/REPORT.md`.

The routes establish scripted feasibility and sampled presentation. They do not establish human
discovery, enjoyment, or comfort. No full 47-room journey or human playtest is claimed.

See `tests/_temp/final_pressure_capture/REPORT.md` for capture details and receipts. The
[final room definition](../../../src/levels_final.ts) and
[villain scene](../../../src/villain_scenes_final.ts) own implementation.
