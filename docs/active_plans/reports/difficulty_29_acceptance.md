# Current 29-room difficulty acceptance

**Status: CONTENT ACCEPTED WITH CONCERNS; HOST GATE OPEN; PROMOTION PENDING.** Root accepted the
complete frozen 29-room evidence as design guidance and closed paired evidence collection against
the recorded source/build. The mandatory repository-wide host check remains failed and unresolved;
this is not an all-gates-green result and the run is not promoted to current. The frozen 28-room run
remains historical and unchanged. Difficulty estimates inform design review; they are not build
gates or measurements of human success, enjoyment, time, or frustration.

## Scope and method

| Item | Current boundary |
| --- | --- |
| Campaign | Current roster order; 29 rooms, including `level_29` |
| Run | [README.md](../../difficulty_runs/current_29/README.md) |
| Source/build | Frozen snapshot of the recorded pre-trial visual source/build, not a current-source freshness claim after renderer revisions; supplied main and map SHA-256 values are `e6f6e58983aabe757da7c96b39c36795663adc8238e114f31ae5f5ba669cfa29` and `7ba2592b3eabc435e8909f3a32f259dab06a3e7df90bda293cda2a70f1ea16b4` |
| Method | Two-pass expert walkthrough in [DIFFICULTY_RUBRIC.md](../../DIFFICULTY_RUBRIC.md); existing score scale, weights, schema, and CLI |
| Human evidence | None is claimed from expert estimates or AI play |

The method rubric was refreshed before first-pass authoring. Its SHA-256 is
`d5b5d7fef204a20934b65b8a644cbb67edec13d0a977986ef7944b6edf40d831`; it is descriptive provenance,
since the existing snapshot and capture do not bind rubric bytes.
Each assessor owns a paired assignment, pauses after the first pass, and resumes it only after all
29 records are reviewed and locked and root releases source. The scale, weights, and schema are
unchanged.

## Owners and evidence boundary

| Owner | Work and allowed evidence | State |
| --- | --- | --- |
| Run manager | Snapshot, full idle capture, receipt, source binding, locks, validation, generated map/report, run README | COMPLETE; corrected full validation/report PASS |
| Paired assessors | Disjoint room assignments; first pass uses rubric, typed contract, assigned packet, and earlier packets only; pause until all locks are reviewed and root releases source, then resume the same assignment with current source and ordinary-input route evidence | EVIDENCE COLLECTION CLOSED |
| Synthesis/review | Cross-room findings, evidence review, focused SPEC, distinct QUALITY, integration, then root acceptance | SPEC, QUALITY, and integration ACCEPT WITH CONCERNS; root accepts content |

Root accepted all 29 immutable locks after checking their receipt and independently recomputing
first-record hashes. Lock times span `2026-10-16T06:14:21.848Z` through `2026-10-16T06:14:26.956Z`.
Root released current source and ordinary-input campaign evidence to the same five paired assessors
for pass two. The full 29-record validation and report passed structurally. Fresh synthesis review
found a semantic transfer-history error: the records treated the rider-clutch/load rule as new and
omitted its earlier introduction in `level_23`. The narrow correction now identifies the earlier
core-model introduction and later one-sac/hero-swap transfer. It changed only the affected
second-pass prior/novelty/comparison evidence; first-pass records, locks, other second-pass fields,
routes, current source, and build are unchanged. Corrected full validation and report generation
pass for all 29 rooms. Root verified the corrected campaign map SHA-256
`f2e26ec79771a6c658b4da7877410f36714b24725622cc7339fd6784132f3319` and aggregate SHA-256
`d86c31ac2d188472cc97dedc2801b771c7d5182b2e73ed28441bbd07b1c976f8`. The independent SPEC review
accepts the corrected assessment with concerns: the locked first pass still missed the level 23
earlier lesson, and there is no human evidence for shared-keyboard comfort. It found the corrected
29-room assessment consistent with the rubric, source, locks, and generated outputs. QUALITY accepts
with concerns, noting partial occlusion of room 29's board in idle captures and no human play
evidence. Integration accepts with concerns and found no mismatch in the frozen evidence. Root
accepts the complete assessment as design guidance and closes paired evidence collection for this
source/build. The map, report, findings, rubric, source, and build pins are frozen; a future source
or build change belongs to a later run and must not be mixed into these packets. Each assessor
received only their own first-pass record; historical scores and other groups' second-pass ratings
remained withheld.

The accepted geometry and mechanic judgments are bounded design input from the recorded pre-trial
visual source/build. Later renderer or art revisions need new runtime evidence for art clarity. A
future fix to the host budget gate alone will not refresh or automatically promote this snapshot;
promotion remains a separate root-owned decision.

A tested intermediate counterweight prototype is rejected for production priority because it repeats
the accepted `level_29` sac-transfer and hero-swap structure. Its report is under
`tests/_temp/balanced_handoff_prototype/REPORT.md`.

The repository-wide check `source source_me.sh && python3 -m pytest -q` is separate from the
selected-run difficulty validation. Root reports 2054 passed and one mandatory shared Podman-budget
test failed at 26.16 GB against a 20 GB limit; no game or difficulty-assessment test failed. The
read-only cache inspection found no image meeting the clearly stale cleanup condition and changed
no Podman resources. The host gate remains failed and unresolved; no cache cleanup is authorized.

The separate source-blind opening UI probe and its diagnostic are available to pass two only as AI
evidence. They are not human difficulty or enjoyment evidence. The 28-room and older 23-room data
stay immutable and withheld from this assessment.

All 29 source-blind first-pass records pass the structural check and fresh semantic review after
narrow evidence corrections. Root accepted their lock receipt and independently recomputed the 29
first-record hashes before releasing source. No other scores or hypotheses changed.

The capture's initial unprivileged Chromium launch failed with macOS MachPort rendezvous error
1100. Root verified that it left one empty staging directory and authorized removal of that empty
directory only. The same full capture then passed with the current source and served build hashes.
Failure logs remain in `tests/_temp/difficulty_29_capture/`; the capture owner's integrity report
records the exact commands, receipt and binding pins, and inspected sample packets.

## Acceptance gates

| Gate | Required evidence | State |
| --- | --- | --- |
| Fresh capture | Full 29-room snapshot and capture; source/build, roster, packet, and image bindings pass | DONE_WITH_CONCERNS; 29 packets and 87 images validated |
| First pass freeze | All 29 source-blind records reviewed and locked before root releases source | DONE_WITH_CONCERNS; receipt accepted, 29 hashes match |
| Second pass | The same assessors resume all 29 paired records with source-supported mechanics, ordinary-input routes, both-hero roles, recovery, and a hindsight comparison | DONE WITH NARROW SEMANTIC CORRECTION |
| Validation and synthesis | Selected-run validation passes; map, report, room dossiers, and findings are reviewed and frozen | PASS; corrected outputs and findings released for review |
| Fresh reviews | SPEC, a distinct QUALITY review, and integration report accept the frozen evidence | SPEC, QUALITY, and INTEGRATION ACCEPT WITH CONCERNS |
| Repository full suite | Required repository-level check completes, with unrelated environment failures reported separately | FAILED / OPEN: 2054 passed; mandatory Podman-budget test failed at 26.16 GB versus 20 GB; inspection found no clearly stale cleanup candidate, no resources changed |
| Root acceptance | Root reviews the complete acceptance record before any promotion to current | CONTENT ACCEPTED WITH CONCERNS; HOST GATE OPEN; PROMOTION PENDING |

Paired evidence collection is closed for the recorded pre-trial visual source/build. Any later
source/build change requires a new run and must not be mixed with these immutable packets, locks,
records, map, report, or findings. The host gate remains failed. Even after it is resolved, root must
make a separate promotion decision; this snapshot does not become current-source evidence by itself.
Do not edit historical assessments.
