# Cellpool private room probe

## Goal and status

Test whether a short room can make the 42-room campaign's Cana SHOVE and corrected physical carry feel like one readable cooperative action. Status: **CLOSED: KEEP_WITH_CONCERNS; production implementation approved by root at 2026-10-17 11:42:58 UTC.** The approved production scope and remaining gates are in the [Cellpool Lane production plan](CELLPOOL_LANE_ROOM.md).

The current candidate is `tests/_temp/cellpool_gate_correction/fixture.mjs`. The earlier fixture and its report under `tests/_temp/cellpool_private_room/` are historical evidence and remain unchanged.

## Chain and geometry

Isp takes an upper approach; Pac takes a lower step. They meet on the launch deck without initial latch choreography: Pac jumps up from the lower step, and Isp walks off the upper route to land on Pac. Pac carries Isp through a normal jump across a moderate gap. Cana's recurring right-going boomerang SHOVE should visibly extend the jump and help both land. From there, Isp uses an upper exit lane and Pac a lower one; one simple latch on each lane opens the partner's final route. A full-width harmless recovery floor and return folds should allow a missed jump to be retried without death or reset.

Use existing platforms, pads, barriers, exits, and `cana_shove` interference only. Estimate the gap from body width, jump range, and actual SHOVE contact, then run the full flight. Preserve open-ended movement: the intended route must be helped by SHOVE, but alternative jumps, head boosts, or dismounts remain legal. Do not claim SHOVE is mandatory or add invisible blocks to enforce the answer.

## Main uncertainty

Level 36 has Pac make a solo Cana-boosted leap while Isp stays on a separate SAFE LANDING route. The possible new value is a physically stacked passenger through SHOVE and a shared landing, with a separated approach and reciprocal route-open actions. If those feel like redundant pad choreography, shelve the room rather than adding mechanics. Keep launch timing and latch count low; check whether SHOVE repeats during ordinary movement and whether each exit pad opens the other hero's blocked route.

## Evidence and boundary

During the private trial, author a private `LevelDefinition`; use public `create_game_state` and `step_game` with ordinary key inputs only. Record source definition, exact command and source hash, input intervals, state traces, projectile contacts, support/landing, latch/exit observations, one normal clear, and one ordinary miss-to-retry-to-clear recovery. Run the full flight and landing, not a truncated window. Keep correction evidence in `tests/_temp/cellpool_gate_correction/`. This private evidence phase makes no production edits; production scope is now authorized by the linked plan. Human fun, readability, and difficulty remain unproven.

## Outcome

The original prototype evidence is in `tests/_temp/cellpool_private_room/REPORT.md`. SPEC review found that both old gate tops were only 40 px above their route floors, so ordinary jumps could bypass the gates and floor pads. The corrected candidate changes only the two visible barrier rectangles: `isp_exit_gate` at x=820 becomes `{ y: 0, height: 550 }`, and `pac_exit_gate` at x=1000 becomes `{ y: 0, height: 550 }`; each retains its x, width 16, owner, and all other definition fields. The source diff is preserved by `fixture_before.mjs` and `fixture.mjs` in the correction directory.

The full normal replay and full miss-to-retry recovery replay both complete using unchanged latest inputs. Normal completion is 6.092 s; recovery completion is 10.092 s. A one-hero probe per lane also shows the near-side pad latching while its hero's own gate remains closed: Isp reaches and latches `isp_open_pac_exit` at x=790 while `isp_exit_gate` remains closed; Pac reaches and latches `pac_open_isp_exit` at x=970 while `pac_exit_gate` remains closed. In each probe, the hero stays grounded on its route and cannot pass its gate while jumping right. The probe's own pad opens only the partner's gate. These are engine observations, with the source geometry and input scripts recorded in the correction artifacts; they are not proof of human readability or fun. Fresh corrected SPEC, QUALITY, and integration reviews accepted the prototype. Root independently reproduced four cases: the normal clear in 6.092 s and recovery clear in 10.092 s, plus both probes stopping at the closed own gate while opening the partner gate.

Replays were run from `tests/_temp/cellpool_gate_correction/` with `npx tsx run.mjs inputs.json fixture.mjs` and `npx tsx run.mjs inputs_recovery.json fixture.mjs`. The isolated lane checks used `npx tsx run.mjs inputs_probe_isp.json fixture_probe_isp.mjs` and `npx tsx run.mjs inputs_probe_pac.json fixture_probe_pac.mjs`. The corrected fixture SHA-256 is `85178e1d780a54abcf403f79f7f9d153c0cc1b7a9931f49adc28a6a02ec49490`; the unchanged normal and recovery input hashes are `b4f4562bdd01ee3eae764ad22b01900b2b1f7bf32bcb5e2e833ed6f2f3d57fb4` and `a6c62acf61de48249398ae97998a30bd89c19f19864615426e8019d009e541b6`. Full traces and probe fixtures/inputs are in that directory. The corrected private candidate is closed. Human fun, readability, and difficulty remain unproven, as does the reported level 3 lateral cause.
