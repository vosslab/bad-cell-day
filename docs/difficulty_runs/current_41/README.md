# Current 41 capture and assessment ledger

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS (frozen baseline).** Root accepted this bounded expert
assessment at 2026-10-17 09:27:51 UTC after fresh QUALITY and integration review. Root accepted all
first-pass records with concerns before releasing source; all eight original author groups then
completed their paired source-aware pass. Full validation and report generation both exited 0; see
the retained output in `tests/_temp/difficulty41_generate/`. Root's independent validation passed
at 09:17 UTC, before the final prose-only findings handoff. No map, paired record, or source changed
after full validation. See the [acceptance report](../../active_plans/reports/difficulty_41_acceptance.md).
Results and limits are summarized in [FINDINGS.md](FINDINGS.md), with generated per-room evidence in
[the report](report/LEVEL_DIFFICULTY_REPORT.md).

## Frozen capture

| Input | SHA-256 |
| --- | --- |
| Campaign roster | `c83140ffea2282aa236dadd1078dad7267e1f23303b56c45cbf6dc55fe30b32a` |
| Source fingerprint | `bfb2222807b136470e415b8a27adae494d0add5b8083b2f0b235b64c0fb711ad` |
| Built JavaScript and served copy | `d2c91ea468f919e521c32861f1af170b7e50b1b0c41c66cbc9e79774dc1427a7` |
| Source map and served copy | `f8a0a5082be34a6e6965f2a3f7586804f5741779be46baa4db95b41017bb586c` |
| Capture receipt | `6025770551c03e02c8883fe38d7ffc4f404f7de874e6cb5c0109c0f4f55e09d5` |

The snapshot, source binding, receipt, 41 observation packets, and 123 PNGs were verified against
the frozen source/build. Each packet contains three idle opening frames, no keys, and zero retries;
these images are not human playtest evidence. The capture had one restricted Chromium launch failure
before the approved launch succeeded. The initial failure and verifier-construction slips are
recorded in `tests/_temp/difficulty41_capture/REPORT.md`. No recapture or source change occurred
within this assessment.

## Assessment ledger

All 41 `first_pass/` records and corresponding immutable locks remain intact. Root reviewed and
accepted the complete first pass with concerns before source access. All eight same-author paired
segments are present in `levels/`. Early coverage uses original records, group 1's re-spec, and the
remaining re-spec records; middle coverage uses the original records and remaining re-spec records;
late coverage uses group 7's original and re-spec records plus group 8's original and remaining
re-spec records. The source-aware pass records room-specific source and route differences; it does
not rewrite first-pass judgments.

Known chronology and review qualifications:

- Group 2's authored `created_at` values were manually estimated. Lock timestamps, hashes, and
  within-group order are authoritative for first-pass chronology.
- A superseded early review opened future images. It was replaced; accepted early coverage does not
  rely on it.
- A middle first-pass reviewer disclosed reading `CHANGELOG.md` during orientation, could not
  reconstruct or certify its contents, and said it was unused in judgments.
- There is no evidence that original authors saw source before the explicit source release.

The generated campaign map and report are frozen to the hashes above. All 41 first-pass platforming
scores remain `unknown`, because idle frames cannot establish execution. Scripted/native routes show
feasibility, not human discovery, co-op communication, comfort, or performance. Control-friction
zeros do not establish physical keyboard comfort. Expert estimates are ordinal judgments, not
measured fun or success. Current38 remains frozen historical evidence; its scores are not inherited.
The Level 3 bridge movement and fall-risk report remains unresolved. See the
[acceptance report](../../active_plans/reports/difficulty_41_acceptance.md) for review chronology,
the frozen-baseline disposition, and limits.
