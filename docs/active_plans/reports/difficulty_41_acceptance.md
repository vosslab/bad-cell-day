# Current 41 difficulty assessment acceptance

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** Root accepted the complete current41 assessment at
2026-10-17 09:27:51 UTC as a frozen, source-bound expert design baseline.

## Scope and review

The run covers the captured 41-room roster, with 41 idle observation packets, 41 immutable first-pass
records and locks, 41 same-author paired source-aware records, a campaign map, generated campaign
report, SVG, and room dossiers. Root accepted the full first-pass set with concerns before source
release; all eight original author groups completed the paired pass. Corrections and re-specs are
disclosed in the [run ledger](../../difficulty_runs/current_41/README.md). The accepted outputs are
the [campaign map](../../difficulty_runs/current_41/campaign_map.json),
[generated report](../../difficulty_runs/current_41/report/LEVEL_DIFFICULTY_REPORT.md), and its
room dossiers, which retain source and route evidence locators. First-pass judgments were not
rewritten.

The fresh source-aware SPEC reviews are recorded for the [early](../../../tests/_temp/difficulty41_source_early_spec/REPORT.md),
[middle](../../../tests/_temp/difficulty41_source_middle_spec/REPORT.md), and
[late](../../../tests/_temp/difficulty41_source_late_spec/REPORT.md) segments, followed by the
documented author re-specs. The final factual-prose handoff is
[`difficulty41_final_wording/REPORT.md`](../../../tests/_temp/difficulty41_final_wording/REPORT.md).
Fresh findings QUALITY re-review accepted with limits in
[`difficulty41_quality_respec/REPORT.md`](../../../tests/_temp/difficulty41_quality_respec/REPORT.md).
It accepted the corrected synthesis and retained a wording caveat about the Split Decision 5/3 cue.
Fresh integration accepted in
[`difficulty41_integration/REPORT.md`](../../../tests/_temp/difficulty41_integration/REPORT.md)
without a blocker. It verified the source and campaign hashes, final map/findings, room evidence,
and the saved full-run validation and report-generation outputs. Root independently ran and passed
full validation at 09:17 UTC. This preceded the final prose-only findings handoff; the integration
report's sentence implying the validation followed that handoff is chronologically inaccurate. The
map, paired records, and source did not change after full validation; the final handoff changed only
`FINDINGS.md`. Full validation and report generation both exited 0 in
[`difficulty41_generate/`](../../../tests/_temp/difficulty41_generate/).

## Frozen capture

| Input | SHA-256 |
| --- | --- |
| Campaign roster | `c83140ffea2282aa236dadd1078dad7267e1f23303b56c45cbf6dc55fe30b32a` |
| Source fingerprint | `bfb2222807b136470e415b8a27adae494d0add5b8083b2f0b235b64c0fb711ad` |
| Built JavaScript and served copy | `d2c91ea468f919e521c32861f1af170b7e50b1b0c41c66cbc9e79774dc1427a7` |
| Source map and served copy | `f8a0a5082be34a6e6965f2a3f7586804f5741779be46baa4db95b41017bb586c` |
| Capture receipt | `6025770551c03e02c8883fe38d7ffc4f404f7de874e6cb5c0109c0f4f55e09d5` |

These values bind the assessment to its pre-bridge-presentation source and build. Root released a
separate bridge readability implementation at 09:28 UTC; later source changes do not change this
accepted baseline. Do not rerun the assessment CLI or source-freshness check against that later
presentation source, and do not imply the live build still matches the frozen capture.

## Limits and priority

The first-pass images show idle openings, not player execution. All 41 first-pass platforming values
are `unknown`. Paired scores are ordinal expert judgments, not measured human difficulty, success,
discovery, enjoyment, comfort, or performance. Scripted/native routes show feasibility only. Zero
control-friction estimates do not establish physical keyboard comfort. The reported sideways motion
and fall risk at displayed Level 3 (`level_04`) remain unresolved; sampled frames and scripted routes
did not reproduce or diagnose the report. Keep this as the first player-impact question. Current38
remains frozen historical evidence and contributes no inherited scores.

Chronology qualifications remain: group 2 authored timestamps were estimated, so lock timestamps,
hashes, and within-group order govern chronology; the superseded early review that opened future
images was replaced; a middle reviewer disclosed seeing `CHANGELOG.md` during orientation and said
it did not inform judgments; no evidence indicates original authors saw source before release.
Generated Markdown display punctuation normalization is documented in
[`difficulty41_findings/style_cleanup.txt`](../../../tests/_temp/difficulty41_findings/style_cleanup.txt);
first-pass files remain unchanged. No room choice, score quota, or queue follows from the assessment.

The bounded
[bridge readability plan](../active/BRIDGE_READABILITY.md) was later completed and accepted with
concerns under separate root release; see its
[acceptance report](bridge_readability_acceptance.md). This later presentation work does not change
the source/build hashes or findings above, and the accepted assessment remains bound to its captured
pre-change baseline. The reported movement and human fall risk remain unresolved. The continuous
gameplay goal remains ACTIVE.
