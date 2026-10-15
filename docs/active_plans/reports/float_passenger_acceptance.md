# FLOAT passenger acceptance

Status: DONE_WITH_CONCERNS. 2026-10-15. Fresh SPEC, QUALITY, and integration ACCEPT; the manager
explicitly accepts the milestone. Frozen build, focused browser behavior, custody, and
documentation pass. Crowded contact art and intermittent permanent-browser transport remain
nonblocking concerns. Continuous game development remains ACTIVE.

## Integrated room

Stable `level_24`, **I've Got You**, occupies position 16, after `level_13` and before `level_14`
in the liver. Its subtitle is "Liver teamwork. Pac jumps onto Isp for a FLOAT ride."
[level_float_passenger.ts](../../../src/level_float_passenger.ts) owns its room and villain scene;
[levels.ts](../../../src/levels.ts) assembles them. The original 23 assembled definitions match
every JSON field and retain exact relative order. No shared physics, types, controls, or save
schema change is required.

Isp holds LIFT to invite Gem while Pac boards. FLOAT physically raises the passenger; Pac
dismounts to CROSS and opens Isp's separate lower passage. Isp's RECONNECT latch preserves that
gate and opens Pac's upper onward gate. Gem remains repeatable after RECONNECT, allowing a fallen
Pac to ride again. Safe floor, existing head support, and existing liver tissue supply the route.
Cana's gate scheme is consequential without another attack or patrol.

## Source evidence

The accepted [float_passenger_feasibility.md](float_passenger_feasibility.md) retains candidate
comparison, tolerance, bypass, recovery, and source-render limits. The fixture SHA-256 is
`1298bbf96a62790a2a5f7f5b0260035f936299571d4392d6d187f498f5925781`.
Production matches it except stable ID and subtitle. Local receipts and outputs are under
`test-results/float_passenger/feasibility/` and `test-results/float_passenger/implementation/`;
these ignored local paths are evidence locations, not committed report dependencies.

| Check at implementation handoff | Outcome |
| --- | --- |
| `npx tsc --noEmit -p tsconfig.json` | PASS, no diagnostics |
| `npx eslint --max-warnings 0 src/level_float_passenger.ts src/levels.ts` | PASS |
| Scoped Prettier check with repository ignore files | PASS, both source files |
| Fixture/catalog validation | PASS, 24 distinct stable IDs, accepted placement, original 23 exact |
| Ordinary 16 ms source route | PASS, complete at 11.432 simulated seconds |
| Node tests including two generic carry regressions | PASS, 19 physics / 69 total |
| Fresh SPEC | ACCEPT; independently reproduced preservation, fixture, route, tolerance, recoveries, and finite bypass probes |

The 580-case tolerance sweep is bounded, with a common successful sampled dismount interval of
0.85..1.65 seconds across four time steps and five boarding offsets; earlier departures can miss.
All five named recovery probes pass. The 120 moving-boost attempts and 38 stationary-boost
characterization cases inform local geometry; they are not exhaustive reachability proofs.
Eight prototype normal/reduced renders expose a material sprite-overlap concern for built review.

## Frozen build and smoke

Candidate build receipt: `test-results/float_passenger/candidate_build/receipt.md`.

- Main SHA-256: `a7ef8689a1d043451722e2f1e24542842a1bd9bc3abad4789799b34368eef084`.
- Source-map SHA-256: `cf61676ce709ea0c239e73d23816afef22499b070fb52548924620c52b876018`.
- All 73 authored source/build inputs and 18 served files are frozen; all 41 authored map entries
  match source. All 13 SVGs are unchanged. Only main and map differ from the anatomical baseline.
- Fresh `level_02`, new `24` in normal/reduced motion, and adjacent `13` opening smoke pass with
  zero page, console, request, or HTTP errors. Valid old save records expose `24` as Ready while
  retaining `13` as Replay. This smoke does not establish completion or recovery.

Commands retain the scratch paths used at execution; outputs now reside in the archive above.

| Exact build/browser command | Outcome |
| --- | --- |
| `./build_github_pages.sh` | PASS, official production build |
| `./run_playwright_tests.sh --build --output=tests/_temp/float_passenger/candidate_build/playwright_results` | Build PASS; macOS MachPort denies browser launch before tests |
| `./run_playwright_tests.sh --output=tests/_temp/float_passenger/candidate_build/playwright_results_escalated` | 1/2 PASS; final broad-smoke console assertion sees `ERR_CONNECTION_RESET` |
| `./run_playwright_tests.sh --output=tests/_temp/float_passenger/candidate_build/playwright_results_retry` | 1/2 PASS; final broad-smoke console assertion sees `ERR_SOCKET_NOT_CONNECTED` |
| `./run_playwright_tests.sh --trace=on --output=tests/_temp/float_passenger/candidate_build/playwright_results_trace` | 2/2 PASS, original two workers |

The launched runs used narrow Chromium process escalation and unchanged test configuration.
Earlier failures and their logs remain retained. The successful trace contains only HTTP 200
requests; earlier failed resource URLs are unknown because those runs lack traces and console
messages omit URLs. The intermittent transport fault remains unresolved; a passing trace run
does not establish consistent green results.

## Built-browser behavior

`test-results/float_passenger/browser/report.md` and `summary.json` record 22 required cases PASS,
24 passing result entries including replay/reload, 17 ordinary-key completions with zero retries,
and 17 screenshots. Accepted browser lanes have zero runtime, page, console, network, or HTTP
errors. All 18 served files and all 43 mapped contents, including 41 authored entries, match at
the start and end of three lanes. Original 23-room JSON fields/order and new-room definitions
remain exact. These focused lanes are not a fresh all-24 campaign traversal.

Normal and reduced motion each demonstrate the full physical carry and reciprocal gates,
missed-shot/STICKY recovery, late boarding recovery, early CROSS release and reoccupation,
and a post-RECONNECT fall followed by another Gem ride without Restart. Pause during FLOAT
preserves state for 1800 ms; resume continues the rise. Visible Restart restores the room, and
separate progressed-state probes confirm that both gates reset after RECONNECT. Save/reload,
earned Replay, old-23 achievements/preferences, and the `13 -> 24 -> 14` frontier all pass.
Focused normal-motion routes `13`, `14`, `17`, and final `20` pass; the finale remains position 24
with no Next button. Three finite boarding/dismount timing samples pass; they do not establish a
guaranteed timing window.

The first launch denial and two invalid late-boarding harness waits remain preserved. In those
late attempts Pac supported Isp from below; waiting for both to reach the floor was invalid.
Corrected ordinary-key supplements step Pac clear, let Isp settle, reboard, and complete in both
modes. No failure is discarded or relabeled as passing. The actual commands and archived helper
bytes are retained in the local browser report.

The canonical [float_passenger.png](../../screenshots/float_passenger.png) shows the rising carry.
SHA-256: `4488ec076c54c098aee16acd8cfe02577817fc7c64813bff6276c644d2655b78`.
The enlarged molecular bodies overlap strongly; both badges, footing strokes, and FLOAT remain
visible. Fresh QUALITY accepts readability while retaining crowded contact art as a nonblocking
concern.

## Independent quality review

Fresh QUALITY ACCEPTS with no blocking product, code, plan, style, or coverage findings. Its
source-blind expert first attempt independently discovers the lift without source, hints, or
hidden state; the reviewer's later reduced-motion completion is separate from the 17 browser-owner
runs. This is a QUALITY walkthrough, not novice/two-player evidence or a new canonical difficulty
assessment. Crowded contact art and unresolved permanent-suite transport remain nonblocking concerns.

Local review: `test-results/float_passenger/quality/review.md`, SHA-256
`b99f2d8ee7b3821ff999efeec0a9eaa2fe31164ddb6425e55f86bfaf90da5d46`.
Frozen `first_observation.json` SHA-256:
`303f3b732634998f0198dd7f6d9e841c265574643817fd860258c4155355fb91`;
matching Markdown SHA-256:
`d634c28f8da39e4b7eaae76f3aa1fed74dc28d5e27de37919efc5aa0db2112ac`.

Fresh integration ACCEPTS with no blocker or architectural drift. It independently verifies all
135 custody hashes, exact 136-file membership, 133 original files and byte count, frozen quality
locks, absent temporary evidence, all 73 source inputs, 18 distribution files, current hashes,
original 23-room JSON/order, new definition, canonical PNG, and 38 local documentation links.
The manager accepts DONE_WITH_CONCERNS on 2026-10-15, preserving both nonblocking concerns and
all evidence limits.

## Evidence custody and checks

`test-results/float_passenger/CUSTODY.md`, `inventory.json`, and `SHA256SUMS` retain six evidence
trees: baseline, feasibility, implementation, candidate build, browser, and quality. All 133
original files (25,179,833 bytes) verify exactly before temporary originals are removed. The root
ledger covers the other 135 files; 136 total files comprise 133 originals and three metadata files.
Root `SHA256SUMS` SHA-256:
`9f98285c9a194a122d70b524bd9575f72f4ea5fa840a703be867fc4c4a62d29a`.

All helpers are inert text. Both documented restores pass: 133 original files plus 18 additional
helper copies produce 151 verified temporary files, then cleanup removes them. Frozen first-pass
observations and failed probes remain unchanged. The prototype server on 8138 is stopped; the
shipped-build server on 8127 remains live. Custody proves byte identity and membership, not new
gameplay acceptance.

The final `./check_codebase.sh` passes all 69 Node tests, both TypeScript configurations, ESLint,
and Prettier. Full Markdown-link, guidance-format, and ASCII checks pass 367 tests;
`git diff --check` passes. Main and map retain the frozen hashes above.

## Final acceptance gates

| Gate | Status | Required record |
| --- | --- | --- |
| `./check_codebase.sh` | PASS | Both TypeScript configurations, ESLint, Prettier, 69/69 Node tests |
| Production build | PASS | Frozen identity and official command above |
| Permanent browser suite | Final run PASS; CONCERN | 2/2 final trace run; intermittent transport fault unresolved |
| Focused built browser | PASS | 22 required cases, 17 zero-retry completions; limits and failed probes preserved above |
| Different fresh QUALITY | ACCEPT | No blocking findings; crowded contact art and transport concerns retained |
| Evidence custody | VERIFIED | 133 originals, 136 total files; both restore procedures pass |
| Fresh integration | ACCEPT | No blockers or architectural drift; independent artifact/custody/doc verification |
| Manager integration acceptance | DONE_WITH_CONCERNS | Explicit 2026-10-15 acceptance; continuous game development ACTIVE |

The canonical check first encountered an unrelated old anatomy archive bundle with an executable
extension. Its owner preserved the bytes with a text archive suffix; the fresh unchanged gate
passes. No configuration or test was weakened.

The [float_passenger.md](../active/float_passenger.md) ledger owns completion status. The
historical 23-room difficulty assessment predates both this room and the anatomy presentation;
no numerical score for `level_24` is claimed. Scripted source/browser evidence cannot establish
novice discovery, paired control comfort, or enjoyment.
