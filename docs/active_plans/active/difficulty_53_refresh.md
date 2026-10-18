# Current53 difficulty refresh

Status: **FIRST-PASS GATE ACCEPTED WITH CONCERNS; SOURCE RELEASED BY ROOT** (2026-10-18 12:10:20 UTC).
This bounded expert walkthrough uses the existing rubric and CLI. It is not human play evidence.
Current46 and earlier runs remain immutable; current46's map is inapplicable because campaign
content and order changed. Root released source for the paired second pass after reviewing the
complete first-pass set; this does not authorize source/build changes or accept the assessment. The
broad game goal remains active.

## Scope and frozen identity

- Run: [`docs/difficulty_runs/current_53/`](../../difficulty_runs/current_53/).
- Snapshot: 53 rooms in current registry order; campaign fingerprint
  `07b3712a96754a2a5d9054ec1593c80a48da598a0f4e94cf2ce7720f0664f38c`; source fingerprint
  `f2ebec9c3e7a6a5803fe486d300c6bfdde21cc6c878514fed1a917f73dda2596`.
- Frozen built JS SHA-256: `1ea95ecd937879628b94d2570190d6aeba9353afcb3a4e706084f402843e3030`;
  source map SHA-256: `c67d067b38cead670aea91d72c535294af48eee823e7a41b9bc27c44f0381dd3`.
- Cana-stipation is position 10 (`level_53`). Snapshot provenance and all observations bind to
  the current source/build. No source, build, test, configuration, or pipeline edits are part of
  this assessment preparation.
- Use the existing eight rubric dimensions and preserve separate puzzle and platforming axes.
  Explain prior teaching and transfer, both heroes' roles, decisions/reasoning, plausible mistakes
  and recovery, and pass-one/pass-two hindsight comparisons. Estimates remain expert judgments.
  Use Schell's balance, puzzle, interest, and playtesting discussions to inform practical findings;
  they set no quota or score-sorting rule.

## Ownership and chronological first-pass bands

Root dispatched fresh source-blind authors after accepting preparation. Each author proceeds in
campaign order, locks one room before opening the next packet, and uses only the rubric, typed
contract, and that room plus earlier observation packets. Source, solutions, hints, and historical
scores remain unavailable before the campaign-wide gate. Three original author bands were retired
after protocol deviations; replacement authors must not consult retired attempts or their archive.

| Author band | Positions | Assigned author workspace | First-pass state |
| --- | ---: | --- | --- |
| A | 1-5 | `tests/_temp/difficulty53_a/` | `DONE_WITH_CONCERNS`; chronology metadata caveat |
| B | 6-10 | `tests/_temp/difficulty53_b3/` | `DONE_WITH_CONCERNS`; handoff received |
| C | 11-15 | `tests/_temp/difficulty53_c2/` | `DONE_WITH_CONCERNS`; handoff received |
| D | 16-24 | `tests/_temp/difficulty53_d2/` | `DONE_WITH_CONCERNS`; nine locks and handoff received |
| E | 25-31 | `tests/_temp/difficulty53_e/` | `DONE_WITH_CONCERNS`; handoff received |
| F | 32-37 | `tests/_temp/difficulty53_f/` | `DONE_WITH_CONCERNS`; handoff received |
| G | 38-45 | `tests/_temp/difficulty53_g/` | `DONE_WITH_CONCERNS`; unreliable authored timestamps |
| H | 46-52 | `tests/_temp/difficulty53_h/` | `DONE_WITH_CONCERNS`; handoff received |
| I | 53 | `tests/_temp/difficulty53_i/` | `DONE_WITH_CONCERNS`; handoff received |

Root accepted preparation before author dispatch. The confirmation to the first-gate coordinator
was recorded at 2026-10-18 11:47:07 UTC after root read the preparation report, independently
checked all 53 packet identities and 159 PNG identities/hashes, and viewed the original
`level_02_2.png` and `level_53_3.png` captures. The initial acceptance time was not separately
recorded. Three original author bands were not
accepted under the first-pass evidence boundary. Their 19 records, 19 locks, and misplaced C
handoff were preserved and hash-verified before only those invalid canonical copies were retired.
Replacement authors B3, C2, and D2 completed their authorized first-pass bands. Their private
evidence archive was not part of the first-pass input set. The 34 unaffected first-pass records and
locks plus the observation packets, snapshot, README, source, and build were verified unchanged
during recovery.
All nine bands have complete handoffs: 53 candidate records and locks. B3, C2, and D2 confirmed no
outside evidence exposure before their first locks. A's `level_01.created_at` and several of G's
authored `created_at` values are later than their locks; H also reports later authored timestamps
for positions 48-52. Treat those fields as unreliable and use lock receipts plus reported
command/inspection sequences for chronology; preserve every valid lock. Structural validation has
passed. Root reviewed the complete set and qualitative reviews and released source for the paired
second pass at 2026-10-18 12:10:20 UTC. The assessment and its later review gates remain open.

After all first passes were locked, root reviewed the complete campaign-wide set and released
source access. The same paired authors now complete source-aware second passes with ordinary input,
route, and recovery evidence. First passes remain immutable.

## Gates and dependencies

| Phase | Dependency and completion gate |
| --- | --- |
| Preparation | Frozen snapshot, canonical idle packets, receipt/binding, ordered identity and integrity review; root accepts preparation. |
| First pass | Fresh authors follow the chronological bands and lock each room before opening the next. |
| Campaign gate | **Complete with concerns:** root reviewed the full locked set and explicitly released source access at 2026-10-18 12:10:20 UTC. |
| Second pass | **In progress:** 28 author-confirmed records; 18 pass and 10 need correction; 25 campaign records are not yet confirmed. A (1-5), G (38-45), and I (53) pass; C2 (11-15) has one `source_artifacts` failure; D2 (16-24) has nine status-enum failures. Root is batching D2 schema/semantic correction with C2's `level_05` evidence-field cleanup. G disclosed an unsourced Python edit; root directs preserving the API-valid records. First-pass records and locks remain immutable. |
| Report and synthesis | Canonical validation and report succeed; practical priorities distinguish puzzle from platforming and use Schell chapters without quotas. |
| SPEC review | Fresh SPEC review checks evidence, causal comparisons, and synthesis. |
| QUALITY review | Distinct fresh QUALITY review follows SPEC acceptance. |
| Integration and root acceptance | Final integration review and root acceptance close the active freeze; captured artifacts remain frozen. |

Preparation evidence and bounded capture limitations are recorded in the [run receipt](../../difficulty_runs/current_53/README.md)
and [local handoff report](../../../tests/_temp/difficulty53_prepare/REPORT.md). Root accepted
preparation before dispatch; the timestamped confirmation to the gate coordinator was 2026-10-18
11:47:07 UTC. Root then released source for paired second passes at 12:10:20 UTC; neither decision
constitutes whole-assessment completion.
