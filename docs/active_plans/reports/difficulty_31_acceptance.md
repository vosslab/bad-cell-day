# Current 31-room difficulty acceptance

**Assessment milestone: DONE_WITH_CONCERNS (accepted by root).** This ledger records the fresh
first-encounter reassessment of the current 31-room campaign and identifies the highest-value
gameplay opportunity supported by its findings. It does not authorize gameplay changes,
assessment-framework changes, or score thresholds. The continuous game goal remains ACTIVE.

## Accepted starting point

[Living decisions acceptance](living_decisions_acceptance.md) records the accepted current campaign
source/build and set a refreshed difficulty/readability assessment as the next priority. The frozen
`current_29` run is historical evidence from pre-art/pre-carry source and remains unpromoted. No
`current_30` run is known. The generated `current_31` assessment now provides paired expert estimates
for all 31 rooms, including `level_30` and `level_31`; it does not establish human difficulty. Do not
reuse old assessment records or treat historical Podman failure as a current failure. No gameplay
source or build acceptance is reopened here.

Use the existing two-pass expert walkthrough, rating anchors, formulas, schema, validation, and
reporting unchanged from [DIFFICULTY_RUBRIC.md](../../DIFFICULTY_RUBRIC.md) and
[types.ts](../../../devel/difficulty/types.ts). Expert estimates guide design review; they do not
measure player success, enjoyment, time, frustration, or shared-keyboard comfort.

## Staged acceptance ledger

| Stage | Owner | Required evidence and boundary | State |
| --- | --- | --- | --- |
| Current capture | `/root/difficulty31_capture` | Fresh current-build snapshot, full 31-room idle packets and retained screenshots, source binding, capture receipt, and solution-free run README under `current_31`. | ACCEPTED BY ROOT: all 31 packet and 93 image hashes, receipt, source/build bindings, and roster/order checked with no errors; root viewed three captures. Snapshot `57d3763584143dd00f118cdaeff01d8ac88d6378e7b660d1bda15272d27aad34`, source `0aebfcdff08cfc3244f231e17a16d4eca18c755a32c9969b63d3a74cfb7080af`, campaign `604c65a961076bc4a7c419f931e3932e40ebf593f7e89400bfe253f29ba67771` |
| Workflow discovery | `/root/difficulty31_workflow` | Read-only account of current assessment workflow and CLI route for the 31-room run. | DONE; root accepted findings, including per-record lock support and no first-only full validator |
| Source-blind first pass | `/root/difficulty31_early` and `/root/difficulty31_late`, fresh fork-none Sol High paired assessors | Early authored positions 1-16; late authored 17-31 after chronological packet access through position 16. Each used the rubric, typed contract, and allowed packet history; unseen feedback is `null`. | COMPLETE: 16 + 15 records and locks; both complete reports read by root |
| First-pass locks and review | Authors lock each record; independent review and source eligibility owned by root | The existing CLI locks one first-pass record against the complete capture. There is no first-only campaign validator. Locked records and locks remain immutable; material concerns are retained for paired adjudication, not silently rewritten. | D31d: root accepts complete set/review as fit for paired source-release eligibility with concerns; source was later released separately after each author's probe review |
| Source-blind public probes | Same assessors, separate temporary reports and captures | After all own idle packets were seen, early explored level 23 and late level 31 using the earned Replay fixture for selection, ordinary keys/buttons, screenshots/logs, and Hint closed. No source, route helpers, hidden-state reads, or edits to first records. The first reviewer received no probe artifacts. These are contextual AI probes, not pristine chronological first encounters or human sessions. | BOTH REPORTS COMPLETE AND READ BY ROOT; partial explorations, no clears; both controllers closed with exit 0, protected port untouched |
| Paired source-informed pass | Same first-pass authors | After root read each author's own probe, root released source to that author. Record actual mechanics, both-exit route, both heroes' contributions, plausible mistake and recovery, optional collectibles separately, prior-concept transfer, and causal hindsight comparison. Keep one-person control demand in its note. | ALL 31 RECORDS READY FOR SYNTHESIS after corrections required by initial SPEC; first-pass records and locks unchanged |
| Validation and synthesis | Assessment owner, then fresh synthesis reviewer | Validate all 31 pairs against the selected run and frozen source/build; generate map, report, per-room records, and findings. Resolve evidence or semantic issues without rewriting locked first passes. Select the highest-value opportunity from impact, evidence strength, and owning concern (design, cue, control, or recovery). | DONE_WITH_CONCERNS; validate and report both exit 0 for all 31 rooms; outputs frozen and pinned |
| Independent review | Fresh SPEC, different fresh QUALITY, then fresh integration reviewer | Each review gets the accepted complete assessment and its relevant evidence; record scope, pin checks, findings, and disposition. Root reviews each handoff and owns acceptance. | SPEC, QUALITY, and fresh integration ACCEPT_WITH_CONCERNS / DONE_WITH_CONCERNS, no blockers; root accepted the assessment milestone with concerns |
| Closeout | Root | Accept or return the assessment, state concerns and evidence limits, and decide whether the selected opportunity merits a separate gameplay proposal. | COMPLETE: root accepted the 31-room assessment milestone as DONE_WITH_CONCERNS; the continuous game goal remains ACTIVE |

## Evidence and decision boundaries

- The paired campaign map must cover every current stable room ID in campaign order. Do not add
  score cutoffs, ranking gates, forced monotonicity, or human-fun claims.
- Idle-only captures do not establish action discovery, control reliability, mistakes, or recovery.
  Keep these unknown until witnessed or source/route evidence supports a pass-two claim.
- **D31b: prior-concept evidence.** The author reported that locked `level_14` and `level_26`
  records describe prior knowledge as `previously_practiced`; repeated idle cues alone do not show
  practice. Preserve those exact records and locks. Independent first-pass review retains this
  concern. The first-pass report identifies additional `previously_practiced` overstatements in
  `level_05`, `level_06`, `level_07`, and `level_08`; records at positions 1-8 remain unchanged.
  The same authors' pass two must explicitly adjudicate these claims. For later records, visible
  earlier cues may support `previously_introduced` with uncertainty; they do not prove player
  practice or mastery. Both authors restated and applied this clarification. This is a
  first-impression limitation, not a schema failure. No correction format or relocking is introduced.
- **D31c: bounded public exploration.** Root authorized early author's level-23 probe and late
  author's level-31 probe after their full idle-packet exposure. Root read both reports and viewed
  early captures `04`, `06`, `10`, `11`, and `13`, and late captures `005`, `006`, `011`, `019`,
  `027`, `028`, and `029`. Early observed clutch/deck travel, Isp
  stepping off to stop the clutch, and Pac showing `1/2` on CARGO PARKED; deck A load reached 2
  during descent. Reverse-push
  failure and an orange-curtain expectation remain unresolved. The 14m12s wall interval included
  screenshot/tooling pauses and about five seconds of explicit inputs/waits; HUD `12:21` is not a
  human difficulty or time measure. Late's probe was partial, with one Restart and no Hint. Its
  initial selection of public position 31 / stable `level_20` was corrected to public position 28 /
  stable `level_31` (Knock It Off) and preserved before gameplay input. Both probes have
  separate temporary reports/captures, do not change first-pass ratings, and remain excluded from
  first-pass review. Both browser/controllers closed with exit 0; protected port 8127 was untouched.
  These probes are contextual source-blind AI evidence, not pristine first encounters or human
  observations.
- **D31d: first-pass eligibility.** Root accepts the complete review and locks as fit for paired
  source-release eligibility with disclosed concerns. This is not acceptance of the full assessment
  or itself a source release. Root later released source to each paired author only after reading
  that author's probe. The exact 31 records and locks remain under the root's read-only pin map.
- The author reports are `tests/_temp/difficulty31_early/FIRST_PASS_REPORT.md` and
  `tests/_temp/difficulty31_late/FIRST_PASS_REPORT.md`; the independent review is
  `tests/_temp/difficulty31_first_review/REPORT.md`. Root read all three. Root independently
  rehashed 31 first records and 31 locks: IDs/positions, 16/15 authors, lock hashes, and null unseen
  feedback match with zero errors. The ordered 62-file manifest digest is
  `48ba51208662d4d3cd348dec29a2f26622ea9a4fefcac9e6c0e4096050bd72b4`; root retained a read-only
  pin map for later immutability checks. All prompt/lock commands passed. An initial early-author
  builder missing-directory error occurred before any record and was corrected and preserved.
- Independent review found no integrity or evidence-boundary blocker. Its concerns are the prior
  practice claims above, level-23/29 clutch-cycle inferences from one idle progression change, and
  other idle-based timing hypotheses. Root accepts those as disclosed concerns for paired review.
- **Paired-pass checkpoint.** Root read both `PUBLIC_PROBE_REPORT.md` files and then released
  source separately to each author; both acknowledged the release and its evidence boundaries. All
  31 paired reports and three fresh correction reports are now read by root. The initial semantic
  SPEC required corrections; fresh authors implemented them without changing first records or locks.
  The bubble-cap correction supports levels 13 and 24, but those cap routes remain unexecuted.
  Early's prior-01 transfer account was corrected for levels 09 and 10; the BLUE-before-ORANGE
  sequence was corrected for level 11 without changing numeric ratings.
- Late's corrections record a safe solid pause in level 14, changing its timing rating from 2 to 1;
  a level-26 STICKY interception, shelf clear, and Isp FLOAT-on-HOLD route, changing reasoning and
  cooperation from 3 to 2; recurring one-shot interrupt attacks in level 22; and charge-only reset
  versus lethal reset in level 20. The correct `STOP03` (not `STOP02`) prior was added for levels
  16, 19, 20, and 31. All 15 late records' source-artifact references were normalized through the
  existing `validateSecond` path while retaining route evidence. These are corrections to assessment
  evidence, not gameplay changes or a new contract.
- The existing validator accepted late's 15 corrected records with 778 references and zero errors.
  Root independently rechecked the original 62-file first-pass manifest digest
  `48ba51208662d4d3cd348dec29a2f26622ea9a4fefcac9e6c0e4096050bd72b4`; it is unchanged. All 39
  source/build pins match, and sequential GETs on protected port 8127 returned matching HTTP 200
  `main.js` and map files (`c66055f5c851fdade7b3bee51611bf8c50ac0177bce58e6e1e5dba75767797c6` and
  `09b4f046236e69a047c4939186306c999cca751a146b74b77f31f85c2bbddf7b`). Root reports command
  chunk `45419b` exit 0. No game edits, build, or suite run was part of this assessment.
- Late's account says DIZZY changes horizontal speed by 0.55 while jump remains unchanged.
  Under-shelf underside collision and multi-second command gaps make misses inconclusive; no physics
  bug is established.
- **D31e: next exploration.** Root selects a bounded gameplay exploration of Cargo Exchange's
  contact-side and gate-consequence legibility. Existing rider/load, dotted connection, and status
  cues are present. The partial single-operator AI probe, after idle exposure through position 16,
  is a discoverability prompt, not a control-bug diagnosis. Preserve load reversal, the two-rider
  clutch, recovery, and legal alternatives. Human observation remains useful follow-up, not a
  prerequisite to continued autonomous development. This assessment makes no source change; root
  separately authorizes gameplay scope under the continuous user goal.
- The selected-run validator and report generator both exited 0 for 31 pairs and wrote 31 dossiers,
  the map, and SVG. SPEC and QUALITY each ACCEPT_WITH_CONCERNS with no blocker. QUALITY's rendered
  review found all 31 rows legible; its non-blocking note is that the standalone SVG caption omits
  that its 0-100 values are ordinal summaries of final-pass estimates. The canonical documentation
  links now label the chart accordingly; the SVG itself remains generated and unchanged.
- Root read the full synthesis, SPEC, and QUALITY reports and the generated summary, README, and
  findings. Fresh integration owner `tests/_temp/difficulty31_integration_verified/REPORT.md`
  (187 lines; SHA-256 `3d4e24599c6b83a482a187c1833cfa4b215a459b30e95c8954147b0d54e74ed4`)
  returned DONE_WITH_CONCERNS / ACCEPT_WITH_CONCERNS with no blockers. Its independent checks
  covered all 31 rooms, order, formulas, nulls, burdens, dossiers, 112 local file links, and current
  key hashes. Root read the full report and accepted this assessment milestone as
  DONE_WITH_CONCERNS.
- Root's focused documentation/disk check was run with
  `source source_me.sh && python3 -m pytest tests/test_markdown_links.py tests/test_guidance_doc_format.py tests/test_ascii_compliance.py tests/test_checkout_disk_budget.py tests/test_podman_disk_budget.py`:
  final run exit 0, 659 passed (command chunk `a56f95`). The first run had 2 failures and 657
  passes because two directory links were invalid. Fresh correction report
  `tests/_temp/difficulty31_links_correction/REPORT.md` records fixing only FINDINGS/README links
  to the generated report file; the passing rerun followed. This is documentation and disk-budget
  verification, not a game test or build claim.
- Root's final protected check (command chunk `fd1304`) exited 0: the ordered 62-file manifest
  remains `48ba51208662d4d3cd348dec29a2f26622ea9a4fefcac9e6c0e4096050bd72b4`, all 39 source/build
  pins match, and the current map hash is unchanged. No game source edits, build, or full-suite
  acceptance are claimed for this assessment milestone.

Final artifact SHA-256 values:

| Artifact | SHA-256 |
| --- | --- |
| `campaign_map.json` | `8a5ea09bb0f02f71d44a8f3b794422e569a0c7f308513d62d4a857473448ee79` |
| `report/LEVEL_DIFFICULTY_REPORT.md` | `96e4934b1255cbb891d09e557b5e695ae409fe63235f795fec3ef7b9893a7e79` |
| `report/difficulty_campaign.svg` | `57e3e1c51a4c2f85436602f118b9a3ebff89a8020bc620eb84a1be82626ad69d` |
| `FINDINGS.md` | `ba8933d10c648c9892b88642b8bc2edea9a8b307383174077edf6e9278171030` |
| `README.md` | `efe46af9f3647aa12d9c4f4a17f6f3d4bdf366d3ff03dc1637d82338e925d0a1` |
- The capture's `earned_replay_storage.json` in its temporary evidence folder is accepted prior
  campaign/save-reload evidence for selection convenience only; it is not a source, play-state, or
  solution record for first-pass authors.
- Same-author paired records help identify missed or inferred mechanics; they do not establish a
  causal human bias. Human observations remain a separate evidence lane.
- Root owns author assignments, source release, acceptance, and any later gameplay decision. The
  assessment can nominate one evidence-supported opportunity; it cannot authorize implementation.
- Keep the frozen historical runs unchanged. Do not rerun tests, builds, browser checks, or source
  snapshots solely for this documentation ledger.

## Next owner

Capture, workflow discovery, first-pass authoring, locks, independent first-pass review, both
source-blind probes, paired assessment, synthesis, SPEC, QUALITY, integration, and root acceptance
are complete at their stated boundaries. The assessment milestone is DONE_WITH_CONCERNS. The
selected Cargo Exchange exploration is a separate gameplay scope decision, not an assessment
implementation. Keep the overall continuous game goal ACTIVE; this ledger closes only the
assessment milestone.
