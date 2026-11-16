# Liver refuge delivery

## Outcome

The level 14 traveling-refuge revision is integrated and accepted while preserving the 57-room
campaign and current game contracts. This delivery milestone is complete.

## Decision and hypothesis

Pac's OPEN plate can pause the existing refuge while Isp boards, then release it to carry
Isp toward the far shore. RESCUE opens Pac's far exit; the room does not require Pac to
wait on the near side until RESCUE is pressed. A lower recovery lip supports a missed
landing and reboarding. The frozen candidate retains
the original title, rolling bomb, gates, schemes, and RESCUE pad; it changes only level
14 geometry, OPEN's existing motor effect, and the hint. Cana's outage dialogue needs to
match the 17/20 active cycle if the candidate is promoted.

## Decision history

L1 kept level 30's reciprocal route and set aside its cosmetic shelf. L2 approved the private
level 14 geometry/motor trial with an 80px lower recovery rise and the static far-shore RESCUE.
L3 released production after the actual registered-scene proof, keeping the frozen geometry,
original title, and static RESCUE pad.

## Sequencing and gates

Phase A attached the current registered `LEVELS` scene to the frozen candidate and proved
that ordinary clear and miss/reboard routes work with both villain bodies present. After
the L3 release, the existing level 14 and allowed documentation were updated, all 57 IDs,
order, and other definitions were compared, and TypeScript passed. The root source/build
gates passed. Phase C captured five views and completed the bounded progression flow.
Fresh SPEC, QUALITY, and integration reviews passed with concerns. Root reviewed the source,
receipts, and original captures and accepted this bounded revision as `DONE_WITH_CONCERNS` at
2026-10-18 19:15:58 UTC. No milestone work remains; the broader gameplay goal remains active.

## Evidence ledger

- Frozen baseline: `tests/_temp/liver_gameplay_opportunity/candidate.mts`.
- Phase A proof: `tests/_temp/liver_refuge_delivery/registered_scene_replay.mts`.
- Original candidate remains frozen; route trials are preserved.
- The candidate route is a deterministic scripted probe, not evidence of blind human
  discovery or fun. Same-input baseline death is not an equivalent-route comparison.
- Phase A: `npx tsx tests/_temp/liver_refuge_delivery/registered_scene_replay.mts ordinary`
  and the same command with `recovery` both exited 0. Ordinary completes at frame 2116;
  Pac holds OPEN until Isp is supported by `refuge_two` at frame 390, then releases it at
  frame 430; Isp reaches RESCUE and both exit. Recovery records Pac on `recovery_lip` at
  frame 1755 and back on `refuge_two` at frame 1825. Both runs attach the exact registered
  scene and instantiate Gem at `(66, 99)` and Cana at `(976, 99)`. Inputs and compact JSON
  receipts are local to the delivery folder; source trials remain unchanged.
- Phase B: production native runs each exited 0 using
  `npx tsx tests/_temp/liver_refuge_delivery/production_replay.mts` with `ordinary` and `recovery`.
  Ordinary clears both exits at frame 2116; the
  held-OPEN and release checkpoints are frames 390 and 430, and Isp latches RESCUE at frame 1970.
  Recovery records Pac on `recovery_lip` at 1755 and back on `refuge_two` at 1825, then stops;
  this is a reboard receipt, not a recovered clear. `campaign_snapshot.mts` confirms all 57 IDs
  and their order are unchanged and all other definitions match. Snapshot digests are
  `4aac5b33f9e51f54e835c564149627c918e24114b5d1773800e721a71dc73f9e` before and
  `069098ae2b56def7dea0ba919758aa71d45878f3b87a8adee3f18021e60e2da2` after.
- Phase B checks: `npx tsc --noEmit -p tsconfig.json`, strict temporary-runner typecheck, and
  focused Prettier check each exited 0. Root's `check_codebase.sh` (96 checks), official
  build, and two standard Playwright smokes also exited 0.
- Phase C: the existing capture helper produced five views with zero deaths or browser errors;
  served JavaScript matched disk build digest
  `41644f90588674064b9c40a0749f0505e1a0b610a53f8eebda6296f045b71184`.
  The focused flow seeded only the preceding 35 IDs, saved `level_14` at 36/57, advanced to
  `level_26` / display 37, and retained `Replay` / `Ready` after reload. Browser completion
  time was 17.65 seconds due to Playwright's 16 ms clock steps; native route completion is
  2116 frames. No intervals changed. Receipts are in
  `tests/_temp/liver_refuge_delivery/captures/capture_receipt.json` and
  `tests/_temp/liver_refuge_delivery/flow_receipt.json`; original PNGs are in
  `tests/_temp/liver_refuge_delivery/captures/`. Fresh SPEC, QUALITY, and integration passed with
  concerns; root accepted the revision as `DONE_WITH_CONCERNS` at 2026-10-18 19:15:58 UTC. QUALITY
  noted a minor still-image overlap between the shared-riding heroes and their labels; no motion
  impairment was demonstrated, and root accepted it as nonblocking without a global HUD change.
- Documentation link check: an optional repository-wide Markdown-link diagnostic reported 50
  failures among 710 checks, including four links in the new plan that were subsequently changed to
  plain artifact paths. The focused new-plan check then passed (`1 passed, 709 deselected`). The
  wide diagnostic was not rerun; no older documentation references were repaired as part of this
  level change.

## Decision rows

| Phase | Status | Proof |
| --- | --- | --- |
| A | Passed | Registered scene and both villain bodies |
| B | Passed; root gates passed | Native routes, roster, TypeScript, formatting |
| C | Passed; SPEC, QUALITY, and integration passed with concerns; root accepted `DONE_WITH_CONCERNS` | Five views, bounded progression flow; root reviewed originals |

The seeded browser flow is not a fresh 57-room journey. Level 14's revision and levels 54-57 remain
unassessed; the frozen current53 assessment was not rescored. Human discovery, paired playability,
and enjoyment remain unknown. The served build matched source at the recorded hash. No milestone
work remains; the broader gameplay goal remains active. See `tests/_temp/liver_refuge_spec/REPORT.md`,
`tests/_temp/liver_refuge_quality/REPORT.md`, and `tests/_temp/liver_refuge_integration/REPORT.md`.
