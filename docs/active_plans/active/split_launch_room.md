# Jump to Conclusions: production plan

**Status: ROOT ACCEPTED; DONE_WITH_CONCERNS.** Root selected KEEP and explicitly authorized
bounded production work (D3). Root approved the exact brain asset (D4), SHA-256
`1c4b95db1af1ed51ca86fa6d3a8443d3f4d00e624a4ba5aac3d5ba0bdb786f4e`. Production implementation
and acceptance evidence are recorded here. The [private prototype ledger]
(split_launch_prototype.md) remains the source for experiment details.

## Goal and evidence

Add one cooperative brain room, working title **Jump to Conclusions**, between existing
rooms 31 and 29. The route should teach a different pattern from room 37's one-up / own-return /
return-to-help sequence: a meaningful split followed by reciprocal hold-to-latch transfer.
Both heroes must contribute distinct necessary actions, Cana must create avoidable and recoverable
pressure, and a missed attempt must allow an ordinary-input retry.

The native candidate uses the existing 300x80 recoil surface in a 1200x680 brain-stage room.
Isp launches right to a lower hold; that hold opens Pac's upper route. Pac reaches an OPEN ISP
latch, which opens Isp's final gate. The heroes converge on the floor. The private candidate traces
include a clear at frame 676, a miss/regroup/retry clear at frame 1201, a no-joint ordinary-jump
attempt that does not cross, and the reproduced 80px-gate bypass followed by the corrected
full-height barrier replay. See the private ledger for exact routes and raw traces. Production routes
and their interpretation are recorded separately in the acceptance receipt.

Two fresh scouts found no confirmed broken existing room. The reproduced bypass is a candidate
room defect with a recorded correction, not evidence of a broader stability problem. This is a
bounded room addition using existing recoil, barrier, and level-definition contracts; it proposes
no architecture or shared-contract change.

## Production contract

- Add stable `level_38` between `level_31` and `level_29`. Preserve all 37 previous definitions and
  their relative order; keep `level_20` last.
- Keep the route meaningful: Isp's lower hold enables Pac's upper crossing; Pac's far OPEN ISP
  latch releases Isp through the lower gate; both heroes then reach convergence. Neither handoff
  may be optional, and a solo or ordinary-jump bypass must not replace the intended cooperation.
- Keep recurring Cana active in the tested route, while hits remain avoidable and recovery remains
  possible. Demonstrate an ordinary-input miss, regroup, retry, and clear.
- Use the existing `recoil` kind and current `LevelDefinition`, `GameState`, physics, save, and
  configuration contracts. Add no shared types, physics/state/save/config behavior, permanent route
  matrix, or tuning sweep.
- Use only the approved 300x160 brain tissue asset identified by the SHA-256 above. Preserve its
  recoil interaction readability and byte identity through the build.

## Approach and file scope

1. Root's D3 KEEP and explicit production authorization and D4 exact-asset approval are settled.
   The implementation owners restate those constraints before their work; no public configuration
   or shared/runtime contract is added.
2. The gameplay owner implements `src/level_split_launch.ts` and registers `level_38` in
   `src/levels.ts`. Native evidence belongs under `tests/_temp/split_launch_production/` and includes
   the requested TypeScript result.
3. The renderer owner integrates the byte-identical approved asset at the existing recoil renderer
   seam and updates the existing asset list in `build_github_pages.sh`.
4. After the final build, the browser owner uses the existing
   [`devel/capture_gameplay_screenshots.mjs`](../../../devel/capture_gameplay_screenshots.mjs)
   unchanged, plus a narrowly scoped ignored save/order assertion if needed. Use ordinary keys and
   preserve receipts; do not infer unobserved browser intermediate states from native traces.
5. Root runs the single D5 batch gate: `./check_codebase.sh`, then
   `source source_me.sh && ./run_playwright_tests.sh --build`. The latter owns the official build
   and two standard smokes; do not duplicate those as a separate required build/smoke gate. Root
   has recorded both commands as passing, the built-source-current assertion as passing, and HTTP
   200/disk parity for index, main bundle, campaign map, brain SVG, and lung SVG. Browser evidence,
   reviews, and final acceptance remain open.

## Completion checks

- Native production traces with ordinary movement/jump inputs show a full reciprocal clear, both
  heroes' distinct contributions, active Cana with an avoidable/recoverable threat, and miss,
  regroup, retry, and clear. Record the bounded no-joint, no-Isp-hold, no-Pac-latch, and gate-jump
  attempts already named in the route scripts; this is not an exhaustive reachability matrix.
- The production source and native report record the `tsc` exit 0, ordinary-input clear and
  miss/retry routes, and bounded no-joint/no-hold/no-latch/gate-jump controls. The 37 old serialized
  definitions compare byte-for-byte equal and remain in relative order; `level_38` is at index 33
  and `level_20` remains last. Root's D5 batch passes `./check_codebase.sh` and
  `source source_me.sh && ./run_playwright_tests.sh --build`.
- Built-browser acceptance passes five cases with zero deaths or browser errors. Ordinary-key clear
  and retry complete. Frontier 31 shows 38 Ready and 29 Locked; after clearing 38, Next reaches 29;
  after reload, 38 is Replay and 29 remains Ready. All 37 legacy Replay entries, 38 Ready, and 20
  last are observed. Root directly approved the brain art/cue/state in the captured views. The
  intermediate miss, Cana SHOVE, and re-entry remain native-only evidence; human fun and reduced
  motion are not established. See `tests/_temp/split_launch_browser/REPORT.md` and its two receipts.
- Do not change any of the 37 existing definitions or their relative order. Keep the existing final
  room last. Any asset shown in the build is byte-identical to root's approved candidate.
- Record scripted native evidence, built-browser behavior, and any human-play evidence separately.
  Automated evidence does not establish discovery, enjoyment, two-player comfort, or reduced-motion
  behavior. Record capture limitations, including reduced-motion, if it was not observed.

## Ledger

| Item | Owner | State | Evidence / next action |
| --- | --- | --- | --- |
| Production decision | Root | KEEP; AUTHORIZED | D3; production is explicitly authorized. |
| Exact asset approval | Root | APPROVED | D4; exact SHA-256 is recorded above. |
| Production plan | Plan owner | CLOSED | Root accepted this milestone as DONE_WITH_CONCERNS after the recorded gates and reviews. |
| Gameplay and native evidence | Gameplay owner | DONE_WITH_CONCERNS | See `tests/_temp/split_launch_production/REPORT.md`: TypeScript exit 0, six bounded routes, old-level serialization/order preservation, and source checks pass. Scripted native evidence does not establish browser behavior or human outcomes. |
| Art and renderer integration | Renderer owner | INTEGRATED | Root verified HTTP 200 and disk parity for the approved brain SVG; exact hash `1c4b95db1af1ed51ca86fa6d3a8443d3f4d00e624a4ba5aac3d5ba0bdb786f4e`. |
| Built-browser acceptance | Browser owner | PASS | Five cases pass with zero deaths/errors; clear/retry, frontier/unlock, successor, reload/replay, legacy entries, and finale-last behavior are recorded in `tests/_temp/split_launch_browser/REPORT.md` and receipts. Intermediate miss/SHOVE/re-entry are native-only; human fun and reduced motion remain unmeasured. |
| Integrated gate/build/smokes | Root | PASS | Both D5 commands pass; see the acceptance receipt for source-current, served-asset, and checksum details. |
| SPEC review | Fresh reviewer | ACCEPT_WITH_CONCERNS | No blockers or plan drift; see `tests/_temp/split_launch_spec/REPORT.md`. Its evidence-limit concern is permitted by this plan. |
| QUALITY review | Different fresh reviewer | ACCEPT_WITH_CONCERNS | No blockers or plan drift. The review notes no permanent level-registration or renderer-branch test; root accepts this KISS limit because temporary proofs and shared-contract tests suffice. No test or gate is added; see `tests/_temp/split_launch_quality/REPORT.md`. |
| Integration review | Fresh reviewer | ACCEPT_WITH_CONCERNS | No blockers or plan drift. Root accepts the absence of permanent registration/renderer-branch tests as a deliberate KISS limit; see `tests/_temp/split_launch_integration/REPORT.md`. |
| Root acceptance | Root | ROOT ACCEPTED; DONE_WITH_CONCERNS | All plan requirements, evidence, gates, and reviews are complete. Human outcomes and reduced-motion remain unmeasured. |

## Questions and decisions

| ID | Kind | Question / decision | State and next owner |
| --- | --- | --- | --- |
| D3 | Decision | Keep this bounded design and explicitly authorize production. | SETTLED by root; production authorized. |
| D4 | Decision | Approve the exact temporary brain SVG for production. | SETTLED by root; approved SHA-256 is recorded above. |
| D5 | Decision | Use one integrated batch gate for codebase checks, official build, and standard smokes. | SETTLED by root; commands are recorded in Approach step 5. |
| D1 | Design constraint | Use existing level, recoil, barrier, physics, and save contracts; add no shared/runtime contract. | APPLIED; production reviews find no contract drift. |
| D6 | Review disposition | Accept the integration with concerns and no blocker or plan drift. | SETTLED by root; root accepts DONE_WITH_CONCERNS and retains the documented test-coverage limit. |

Root closes the milestone as DONE_WITH_CONCERNS. The production implementation, browser, integrated
checks, and SPEC, QUALITY, and integration reviews meet the approved plan. The remaining limits are
the lack of a permanent registration/renderer-branch test and unmeasured human discovery, enjoyment,
comfort, and reduced-motion behavior. The continuous gameplay goal remains active; separate level-3
villain-push research does not alter this room's scope or acceptance.
