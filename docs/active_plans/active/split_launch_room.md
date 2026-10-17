# Jump to Conclusions: production plan

**Status: PRODUCTION AUTHORIZED; acceptance is pending.** Root selected KEEP and explicitly
authorized bounded production work (D3). Root approved the exact brain asset (D4), SHA-256
`1c4b95db1af1ed51ca86fa6d3a8443d3f4d00e624a4ba5aac3d5ba0bdb786f4e`. Production implementation
and final acceptance evidence are being recorded here. The [private prototype ledger]
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
- Production source and native traces are recorded by their owner. Root's D5 batch passes
  `./check_codebase.sh` and `source source_me.sh && ./run_playwright_tests.sh --build`.
- Built-browser ordinary-key evidence shows full clear. Save/order evidence shows
  legacy 37-room progress remains replayable, `level_38` is ready after its predecessor and survives
  clear/reload, and the existing successor unlocks; `level_20` remains last. Verify built source is
  current and the HTTP-served asset matches disk.
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
| Production plan | Plan owner | ACTIVE | This document carries the bounded implementation contract and closeout ledger. |
| Gameplay and native evidence | Gameplay owner | IN PROGRESS | Own `src/level_split_launch.ts`, `src/levels.ts`, and `tests/_temp/split_launch_production/`; record TypeScript result and traces. |
| Art and renderer integration | Renderer owner | INTEGRATED | Root verified HTTP 200 and disk parity for the approved brain SVG; exact hash `1c4b95db1af1ed51ca86fa6d3a8443d3f4d00e624a4ba5aac3d5ba0bdb786f4e`. |
| Built-browser acceptance | Browser owner | PENDING FINAL BUILD | Use ordinary-key capture and ignored save/order assertion; report actual events and limits. |
| Integrated gate/build/smokes | Root | PASS | `./check_codebase.sh`: 92/92 Node checks, main and lint TypeScript, ESLint, Prettier. `source source_me.sh && ./run_playwright_tests.sh --build`: official build and 2/2 smokes. Built-source-current assertion passes; HTTP 8127 returns 200 and disk parity passes for index, main, map, brain SVG, and lung SVG. Main SHA-256 `f740670ad34e0e94e3f2c0a27a130ee9a34a1b1030e444dced8b726013a4b553`; map SHA-256 `af97e8a2ba832cddd12f6e29afd966116251cbea48aba40fd9480e8a50073f76`; index SHA-256 `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`. |
| SPEC review | Fresh reviewer | PENDING COMPLETE IMPLEMENTATION + EVIDENCE | Review specification coverage after implementation and evidence are complete. |
| QUALITY review | Different fresh reviewer | PENDING SPEC ACCEPTANCE | Start only after SPEC accepts; resolve findings before integration review. |
| Integration review | Fresh reviewer | PENDING QUALITY ACCEPTANCE | Review combined scope and plan coverage after both earlier reviews accept. |
| Root acceptance | Root | PENDING ALL REQUIRED EVIDENCE + REVIEWS | Record DONE or `DONE_WITH_CONCERNS` and explicit limits. |

## Questions and decisions

| ID | Kind | Question / decision | State and next owner |
| --- | --- | --- | --- |
| D3 | Decision | Keep this bounded design and explicitly authorize production. | SETTLED by root; production authorized. |
| D4 | Decision | Approve the exact temporary brain SVG for production. | SETTLED by root; approved SHA-256 is recorded above. |
| D5 | Decision | Use one integrated batch gate for codebase checks, official build, and standard smokes. | SETTLED by root; commands are recorded in Approach step 5. |
| D1 | Design constraint | Use existing level, recoil, barrier, physics, and save contracts; add no shared/runtime contract. | APPLIED in production; verify in implementation review. |

The production decision and exact-asset approval are settled. Human discovery, enjoyment, comfort,
and reduced-motion behavior remain unmeasured and are not gates. Keep implementation, browser,
integrated checks, reviews, and root acceptance open until their owners provide evidence. Root
records any later challenge or correction here; affected owners restate, apply, and verify it.
