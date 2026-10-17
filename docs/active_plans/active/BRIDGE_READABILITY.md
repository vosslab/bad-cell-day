# Unstable Bridge Readability

**Status: DONE_WITH_CONCERNS.** Root accepted this bounded milestone at 2026-10-17 09:45:16 UTC after reviewing all five fresh built-browser captures. The continuous gameplay goal remains ACTIVE. The accepted current41 report remains frozen to its captured pre-change source/build baseline.

## Goal and evidence

Make unstable-bridge danger and support easier to read before a fall, while preserving the cooperative challenge and optional villain dunks in displayed Level 3 (`level_04`, *Bridge Over Troubled Slime*). This responds to the human report that the bridge shifts side to side and is easy to fall from. Human fall risk matters even though scripted play succeeds.

The accepted `LEVEL3_BRIDGE_GRACE.md` set collapse grace to 1.2 seconds and `SURFACE_TEXTURE_ANCHOR.md` anchored the existing tissue texture. The observation at `tests/_temp/level3_motion_observation/REPORT.txt` did not reproduce the reported bridge shift; it found the bridge rectangle fixed at `(300, 410, 500, 22)` in sampled frames. The motion complaint remains undiagnosed and must not be represented as fixed by this work.

## Proposed approach

Use state-derived progressive tearing in place on existing unstable surfaces, with a fixed landing rim. Derive the cue from existing occupancy/collapse progress through the shared renderer. Keep the stable top edge and landing boundaries visually fixed; ensure the cue resets when occupancy resets, disappears or clearly changes when the platform collapses, and yields to the existing stabilized appearance. Do not add a timer, state, configuration, physics, control, geometry, attack, permanent countdown, or extra HUD.

The first-encounter instruction must be this always-visible Level 3 subtitle: **"Pac holds STEADY until Isp reaches RESCUE."** The optional hint may remain; it cannot teach the first encounter to players who do not open it. Preserve the unstable bridge as a usable risk, reset behavior, optional villain dunks, and existing 1.2-second collapse grace. The appearance work does not diagnose the reported sideways movement or claim to prevent falls. If review finds that current visuals already communicate remaining collapse time clearly, challenge this presentation change and return to root.

## Accepted result

The shared fragile-surface renderer now derives an interior bruise and progressive tears from
existing collapse progress, while retaining the fixed landing rim. Stabilization keeps its green
override; inactive surfaces keep their outline, and occupancy/reset behavior clears the cue. The
Level 3 subtitle is exactly **"Pac holds STEADY until Isp reaches RESCUE."** No mechanics, timers,
state, configuration, HUD, geometry, attacks, or assets changed.

Temporary native proofs cover the ordinary clear and both villain dunks, returns, and collapse
resets. The final five-view browser recapture shows early and late warnings, Gem's return, stable
green support, and the ordinary rescue clear. The first pixel review requested a focused visibility
correction; fresh source SPEC, corrected QUALITY, and integration reviews then accepted the result
with concerns. Root viewed all five fresh PNGs and accepted the milestone with concerns.

The human report of lateral bridge motion and fall frequency remains unresolved; captures and
scripted routes do not establish human readability, comfort, or reduced falls. Source and route
evidence are recorded in the [acceptance report](../reports/bridge_readability_acceptance.md).

## File scope and gates

Expected production files: `src/render_game.ts` and/or `src/render_tissue.ts` for the shared cue, plus `src/levels_tutorial.ts` for the subtitle. If the renderer requires an explicit appearance contract, add only the narrow field in `src/types/anatomy.ts`. No new SVG is expected; if implementation evidence suggests one is necessary, stop and escalate to root. A fresh implementation agent owns the released work.

Acceptance evidence is in the [closeout report](../reports/bridge_readability_acceptance.md). No new permanent tests or full 41-room journey was required. The difficulty CLI and source-freshness check were not rerun: current41 remains bound to its accepted captured baseline. Scripted/native success does not establish human comfort or prove the reported side-to-side motion resolved.
