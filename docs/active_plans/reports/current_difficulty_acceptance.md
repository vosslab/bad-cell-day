# Current difficulty acceptance

**Status: DONE_WITH_CONCERNS.** This ledger tracks the current 28-room
difficulty and pacing reassessment. It is a bounded milestone inside continuous Isp and Pac
development; the continuous gameplay goal remains ACTIVE (goal turn: PROGRESS). Root accepted the
first-pass stage and synthesis freeze with concerns. Assessment data SPEC/QUALITY, operational-docs
SPEC/QUALITY, and final integration all accept with concerns. Root accepted this milestone with
concerns; the current 28-room snapshot is closed and remains immutable.

## Frozen context

| Item | Accepted identity or constraint |
| --- | --- |
| Campaign | 28 rooms; current order follows `gameplay_direction.md` |
| Main build | SHA-256 `b967b3178ecdde68c1bd889e9658058ace6919457d020991aca3391ad6a6641d` |
| Map | SHA-256 `a56a6724f08192a3c3ab5bdf2fe219f16b30cb69e94b3c4994658b91598b0812` |
| Preview | Port 8127, PID 65718 |
| Source state | Frozen during this assessment |
| Historical assessment | 23-room records, locks, captures, calibration, and 26 outputs stay unchanged |

At the root's current baseline check, `npx tsc --noEmit -p tsconfig.json` exits 0 and
`node --import tsx --test tests/test_difficulty_assessment.mjs` exits 0 (10/10). The tests use
temporary fixture roots; no files were written. These checks do not settle the run boundary or
create current 28-room evidence.

The accepted source/build identifiers are supplied by the milestone owner. Fresh capture-time
source binding now establishes provenance for the idle observation packets; it does not establish
route completion, difficulty ratings, or human response.

## Acceptance ledger

| Gate | Evidence and owner | State |
| --- | --- | --- |
| Run boundary | D1 approved; contract recorded in the architect report | APPROVED |
| Isolated-run plumbing | Root accepts after SPEC and distinct QUALITY acceptance | DONE_WITH_CONCERNS |
| D1 tooling SPEC | Explicit acceptance | ACCEPTED |
| D1 tooling QUALITY | Distinct reviewer explicitly accepted | ACCEPTED |
| Fresh current capture | Full 28-room run accepted with concerns; provenance and sample framing reviewed | DONE_WITH_CONCERNS |
| First pass and locks | D3 approved after all six reports, 28 records, locks, chronology, and coverage were reviewed | DONE_WITH_CONCERNS |
| Second pass | All 28 records/reports frozen; paired SPEC and QUALITY accepted with concerns | DONE_WITH_CONCERNS |
| Validation and synthesis | Post-correction validation PASS; report/map/SVG/28 dossiers/findings frozen with concerns | DONE_WITH_CONCERNS |
| Assessment data SPEC | ACCEPT/DONE_WITH_CONCERNS; no material blocker | DONE_WITH_CONCERNS |
| Assessment data QUALITY | ACCEPT/DONE_WITH_CONCERNS; no corrective blocker | DONE_WITH_CONCERNS |
| Final documentation | Five operational docs and current-priority update frozen with concerns | DONE_WITH_CONCERNS |
| Documentation SPEC | ACCEPT/DONE_WITH_CONCERNS; no correction requested | DONE_WITH_CONCERNS |
| Documentation QUALITY | ACCEPT/DONE_WITH_CONCERNS; no factual/navigation blocker | DONE_WITH_CONCERNS |
| Final integration | `tests/_temp/current_difficulty_final_integration/REPORT.md`; ACCEPT_WITH_CONCERNS, no material blocker | DONE_WITH_CONCERNS |
| Root acceptance | Explicit acceptance after final integration; all 32 output pins, 303 protected pins, and live pins verified | DONE_WITH_CONCERNS |

These states track dependencies, not quality judgments. Do not infer approval or scores before the
corresponding artifacts and reviews exist. The current assessment contract and rubric remain in
[`DIFFICULTY_RUBRIC.md`](../../DIFFICULTY_RUBRIC.md); the current direction and 28-room order are
in [`gameplay_direction.md`](gameplay_direction.md).

## Decision propagation

| Decision | Propagated constraint | State |
| --- | --- | --- |
| D1: explicit isolated run directory for both CLIs | Require `--run-dir docs/difficulty_runs/<name>`; keep scoring, provenance, and historical data intact. The canonical rubric stays unchanged. The solution-free run README is manually authored; snapshot README code generation is excluded. | APPROVED; tooling DONE_WITH_CONCERNS |
| D3: release source for second pass | After full first-pass locks, reports, and root review, release fresh isolated second-pass authors; withhold historical 23-room and other second-pass scores. | APPROVED; second pass accepted |

The contract details are in `tests/_temp/current_difficulty_contract/REPORT.md`. The fresh coder
owned the coupled CLI/report/path/helper/ignore/fixture adaptation. No game source, build, current
`28` data, or canonical docs were in that implementation assignment. Tool reviews passed before
real current-run initialization and capture were authorized.

The factual route index is `DONE_WITH_CONCERNS` at
`tests/_temp/current_difficulty_route_index/REPORT.md`. It is route-reference evidence, not a new
score, route test, or authorization to create records.

At implementation code freeze, the coder reported both TypeScript configurations, the existing
difficulty tests (10/10), scoped ESLint/format, and `./check_codebase.sh` passing; the codebase log
is `tests/_temp/current_difficulty_tools/check_codebase.log`. The final second-prompt path wording
was the only follow-up. The coder completed synthetic CLI/report/custody proof and root accepted
the tooling milestone after fresh SPEC and QUALITY acceptance. This remains tooling evidence, not
real capture or difficulty acceptance.

The SPEC reviewer explicitly accepts the implementation source. Coder evidence includes 76
synthetic CLI invocations, synthetic paired-record validation for 28 rooms, isolated report/link
generation, deterministic rerender, and unchanged custody for 297 protected original files. These
are one-time boundary proofs, not real assessment or browser-capture acceptance. The bounded
concerns remain: run paths do not isolate assessor knowledge, reviewers must check visual claims
and solution leakage, and scripted evidence does not measure human difficulty or enjoyment.

Root reports `source source_me.sh && python3 -m pytest -q tests` exited 0 with 1,985 passed in
3.04s after helper archival. This is a current tooling/docs gate, not 28-room assessment acceptance.
The SPEC reviewer and a different QUALITY reviewer explicitly accepted; root accepted the D1
tooling milestone. The docs owner propagated D1 into the operational assessment instructions,
usage, design record, changelog, and current-priority paragraph in `gameplay_direction.md`. The
canonical rubric, historical 23-room records/captures/generated outputs, and source/build remain
frozen. SPEC's live custody included this authorized documentation work and was not evidence of
historical generated-output drift.

Root accepted D2, the current 28-room capture, as DONE_WITH_CONCERNS. The exact commands are
`node --import tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/current_28`
and `node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_28 --url http://127.0.0.1:8127/`.
The run contains 28 packets, 84 PNGs, a capture receipt, and a capture-time source binding. The
selected-context `verifyObservationProvenance` check exited 0 with `Current 28-room observation
provenance PASS`; all packet/image hashes, roster order, and source/build freshness passed. Root
reviewed samples `level_02_3`, `level_23_1`, `level_18_2`, `level_28_3`, and `level_20_1` and found
no framing blocker. Capture is idle-state evidence, not route completion, assessment scores, or
human observations. The accepted build/map hashes and protected preview port 8127, PID 65718,
remain unchanged.

Fresh first-pass authors worked in six isolated chronological groups with no source, routes,
historical scores, or future packets. The root read-only gate imported `validateFirst`, `checkedLock`,
and `validateCoverage`, then checked all 28 records and locks with the explicit current observation
context. It exited 0 with `PASS 28 first records and immutable locks; non-null action feedback: 0`.
All 28 confidence values are low and unknowns are preserved. After reading all six reports, checking
source-free reports and chronology, and sample-reading `level_02` plus the full core narrative, root
approved D3. All first-pass records and locks are frozen. The two evidence-citation limitations
below remain attached to the first pass; no originals were rewritten.

D3 released six fresh isolated second-pass authors to inspect current source/routes and write only
their assigned second-pass JSON. Historical 23-room scores and other second-pass scores stayed
withheld to reduce anchoring. The paired report/map and cross-room synthesis are generated and
frozen; data SPEC and QUALITY accept with concerns. Final integration and root acceptance are
complete. No gameplay or campaign-order change is authorized by these ratings alone.

Current-source ordinary-input probes provide candidate route evidence, not accepted room conclusions:
`tests/_temp/current_second_marrow/no_cargo_probe.json` clears with cargo still at `(170, 380)`;
`tests/_temp/current_second_liver/alternate26.json` clears without Pac bubble contact and with Isp
FLOAT; core reports include alternate no-FLOAT/no-RESCUE clears; brain reports 18 bounded
current-route/recovery replays. These observations can test whether a mechanic is necessary and help
explain alternatives. They do not establish bugs, human fun, or player difficulty, and remain subject
to pair validation and root review.

A separate gameplay candidate remains open for a later bounded comparison, not implementation: the source owner
reports assembled position-21 `level_16` has no interference configuration, while its recurring
unstable-bridge collapse and 7-of-10 ferry power cycle create active pressure. Scene schemes render
the recurring motifs and counter feedback. Root inspected the assembled source and `level_16_1`
image: a central non-solid robot-like purple block is visually distinct from molecular Gem in the
upper-left, and has no projectile state. This identity/encounter-readability question is separate
from the difficulty score and the lethal `gem_core` rectangle below the bridge. The evidence is at
`tests/_temp/current_second_liver/assembled16.json`. This could be a stronger active-villain/boss opportunity than closing an
alternate route, but remains a hypothesis, not an approved product change.

The frozen findings preserve four bounded play investigations: test the identity and playable Gem
interaction at position 21; observe first-use counterweight feedback at position 12 before any order
change; check useful FLOAT transfer across positions 15/16/18/19 while keeping legal alternatives;
and observe whether pairs understand the finale's support handoff and late-recovery cost. These are
evidence questions, not feature requirements or automatic redesigns.

Second-pass data covers all 28 rooms: lungs 4, intestine 4, marrow 6, core 1, brain 6, and liver 7.
All source authors and reports are complete; helpers are archived and final data is frozen. A fresh
string-only correction addressed non-ASCII punctuation in brain `level_17`, `level_19`, `level_22`,
`level_25`, and `level_27`; liver normalized its own prose. Scores, schema, evidence, and first-pass
hashes remain unchanged. Root's post-correction
`node --import tsx devel/assess_difficulty.ts validate --run-dir docs/difficulty_runs/current_28`
exited 0 with `Valid assessment for 28 campaign rooms` and the expected unknowns. Root's parsed-prose
ASCII/ISO-8859 scan also passed. Second-pass fixes now require a fresh reviewed correction.

Fresh synthesis generated and froze the selected-run map, 28 dossiers, report, SVG, and
`FINDINGS.md`; score edits were excluded. Fresh assessment SPEC ACCEPTS with concerns and found no
material blocker. The selected-run outputs are frozen
with `DONE_WITH_CONCERNS`: 32 owned output hashes are recorded, all 1,925 Markdown link occurrences
resolve to 100 local targets, the output passes ASCII/whitespace checks, and 303 protected files
including all 84 first/second/lock records remain unchanged. Root inspected the generated summary,
findings, and actual chart image. The report keeps 2 unknown first puzzle axes, 20 unknown first
platforming axes, and null control friction for all rooms in both passes; unknowns remain null.
See the current [FINDINGS.md](../../difficulty_runs/current_28/FINDINGS.md),
[campaign report](../../difficulty_runs/current_28/report/LEVEL_DIFFICULTY_REPORT.md), and
[difficulty chart](../../difficulty_runs/current_28/report/difficulty_campaign.svg).

After all helpers and generated outputs were archived/frozen, root ran
`source source_me.sh && python3 -m pytest -q tests`: 2,016 passed in 2.30 seconds. No source/build
changed after the accepted 82-Node code gate. This verifies repository tests against the artifact
freeze; it does not replace assessment review.

Fresh data SPEC now ACCEPTS with concerns in `tests/_temp/current_difficulty_data_spec/REPORT.md`.
It reviewed all 28 pairs, causal comparisons, current outputs, representative visual claims, and
preservation checks; it found no material blocker. It confirms first-pass records remain low
confidence, second-pass records medium, all 120 first-step observed-feedback values are null, all
control-friction values remain unknown, and score deltas do not isolate hindsight because pass
authors differ. It did not inspect every captured image. The first03/first23 citation weaknesses
remain as concerns and are carried into the second-pass comparison without rewriting firsts.

A distinct data QUALITY review now ACCEPTS with concerns in
`tests/_temp/current_difficulty_data_quality/REPORT.md`. It found no corrective blocker, verified
all 32 output hashes and all 28 findings rows against the current map, and accepted the bounded
alternate-route and level-16 investigation conclusions with their stated limits. It did not inspect
every capture image or reexecute every route.

The operational documentation closeout at `tests/_temp/current_difficulty_final_docs/REPORT.md` is
DONE_WITH_CONCERNS. It updated `LEVEL_DIFFICULTY.md`, `USAGE.md`, `DESIGN_DECISIONS.md`,
`CHANGELOG.md`, and the current-priority paragraph in `gameplay_direction.md`. The owner reports
all five files passed character/whitespace checks and scoped link checks. After this ledger's three
paths were corrected, root's full Markdown-link suite passed 188 tests. Fresh documentation SPEC,
also ACCEPTS with concerns in `tests/_temp/current_difficulty_docs_spec/REPORT.md`; no correction was
requested. It confirmed the docs preserve run paths, historical boundaries, unknowns, and estimates,
and keep the level-16 proposal unapproved. Distinct docs QUALITY ACCEPTS with concerns in
`tests/_temp/current_difficulty_docs_quality/REPORT.md`; it found no factual, navigation, or plan-drift
blocker. Final integration at `tests/_temp/current_difficulty_final_integration/REPORT.md` is
ACCEPT_WITH_CONCERNS with no material blocker. Root verified the live pins, accepted all tool/data/
docs reviews, and accepted the milestone as DONE_WITH_CONCERNS. The 2,016-test Python gate and
188-test Markdown-link gate passed. No game or order change has been made.
Expert estimates do not measure enjoyment, novice discovery,
player success/time/deaths, arbitrary-state recovery, or paired-keyboard comfort.
The immutable first-pass records preserve two citation-precision limits: `level_03` describes
cross-frame ferry motion and frame-3-only STUCK using a shared claim, and `level_23` cites DOM-only
evidence for an earlier-room prior-knowledge claim. The second-pass comparisons preserve those
first impressions and address the evidence limits without rewriting them. Historical 23-room
scores were withheld from first-pass authors.

## Evidence limits

The scope audit in `tests/_temp/current_difficulty_boundary/REPORT.md` recorded that the legacy
`node --import tsx devel/assess_difficulty.ts validate` exits 1 with
`snapshot campaign_sha256 is stale`; its normal paths point at historical 23-room data. D1 resolved
the path boundary by requiring explicit `--run-dir` for both CLIs, and fresh tooling reviews passed.
The current assessment uses `docs/difficulty_runs/current_28` and leaves historical data unchanged.

Expert scores will be estimates under the rubric, not measured difficulty or calibrated values.
Human enjoyment, discovery, paired comfort, and player performance remain unmeasured unless a
separate human observation study supplies evidence. Root accepted this bounded milestone with concerns.

## Completion boundary

The 28-room run has validated evidence, required fresh reviews and integration acceptance, final
documentation, and explicit root acceptance. This closes only the reassessment milestone; the
continuous gameplay development goal remains ACTIVE, and the separate Gem16 comparison is not
authorized as a product change.
