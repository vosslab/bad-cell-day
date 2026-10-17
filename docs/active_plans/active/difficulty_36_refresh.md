# Current36 difficulty assessment

## Goal and authority

Prepare the complete 36-room campaign map that will guide the next gameplay decision. The existing
[difficulty rubric](../../DIFFICULTY_RUBRIC.md), [typed contract](../../../devel/difficulty/types.ts),
and assessment/capture CLIs remain authoritative and unchanged. The blind first pass uses idle
captures for all 36 rooms and supports visible opening-cue judgments only. After those records are
reviewed and locked, the paired source-aware pass uses authored mechanics and retained route evidence
where available. Neither pass establishes human learning, human route completion, measured
difficulty, or enjoyment.
Root owns author release, scoring decisions, and final acceptance.

Assess the mandatory both-exit route for two humans sharing a keyboard. Keep collectibles separate,
record one-operator input demand as a note, and use `null` for unknowns. Scores remain evidence-backed
ordinal estimates, not human measurements, rank gates, or instructions to reorder rooms.

## Method and boundaries

1. **COMPLETE:** create `current_36/snapshot.json` first, then capture the current 36-room build with
   the existing observation CLI. Preserve all three idle frames per room and keep PNGs ignored.
2. **FIRST PASS REPAIR AND RE-REVIEW COMPLETE:** twelve fresh source-blind authors completed three
   chronological rooms each, hashing records before opening the next packet (D1). Fresh replacements
   own levels 16/18 and 36; superseded records with incomplete custody or room-specific evidence are
   excluded. Six authorized SHA-only citation repairs retain their original bytes and semantic-delta
   proof. Fresh re-review returned `ACCEPT_WITH_CONCERNS`; root accepted and authorized locks. All 36
   locks match current first-pass bytes. Paired ownership remains with the first-pass authors; a06
   owns 13/24, a09 owns 17, b16 owns 16/18, and b36 owns 36.
3. **COMPLETE:** root released source after the level 16/18 replacements, fresh first-pass re-review,
   and all 36 locks. Paired authors completed 36 records and handoffs; a fresh SPEC correction batch
   changed only levels 06, 13, 19, 29, 31, 33, and 35. All first-pass records and locks remain frozen.
   During broad source lookup, b16, b36, a09, and a10 incidentally saw older assessment snippets;
   affected dossiers disclose the exposure, and source-aware scores are not described as
   experimentally independent of historical judgments.
4. **COMPLETE:** the explicit-run validator and report CLI pass after the level 07 recovery-evidence
   correction. The record distinguishes the no-fold baseline death from the retained historical
   fold-present candidate's catch and continuation; current source has matching fold geometry, but
   that candidate was not replayed on the current build. Its recovery estimate is 2. The same
   evidence supports the existing level 05 assertions, which remain unchanged. The map, report,
   chart, and dossiers were regenerated, and cross-room findings withdraw the unsupported
   early-crossing fix. Fresh SPEC, recovery SPEC, QUALITY, and integration reviews accept with
   concerns; root accepts the bounded assessment as DONE_WITH_CONCERNS.

Visible opening dialogue, subtitles, control cards, pad labels, and the closed Hint button are valid
first-encounter evidence and remain in the packets. Hidden hint contents, authored source/facts, route
scripts, proposed scores, and future-room context stay outside the blind evidence set. Snapshot facts
are metadata for provenance and roster order; blind authors must not receive the snapshot. Idle
screenshots cannot establish what a player would do, whether feedback follows an action, control
reliability, or hidden recovery cost.

The campaign source, build, and art remained frozen through assessment closeout. Any change before
closeout invalidates this capture and requires a fresh snapshot and full capture before assessment
continues. Later changes make this source-bound assessment historical while its records
remain evidence of this campaign state. Do not add assessment mechanisms, configs, permanent tests, or
score thresholds.

## Gates and status

| Gate | Owner | Status |
| --- | --- | --- |
| Rubric, contract, and CLI boundary | Preparation / root | Confirmed; unchanged |
| Snapshot first and full idle capture | Preparation | Complete; provenance verified |
| Packet and image inventory, leakage boundary | Preparation / root | Complete; see private receipt |
| Blind first pass and per-room hash handoff | Twelve fresh authors | Complete; replacements reviewed |
| Level 36 blind replacement | difficulty36_b36 | Complete; re-reviewed and locked |
| Levels 16/18 blind replacements | difficulty36_b16 | Complete; re-reviewed and locked |
| Digest-only citation repair | Fresh correction owner | Complete; originals and semantic-delta proof retained privately |
| Fresh first-pass re-review and locks | Fresh reviewer / root | Complete; all 36 locks match current first-pass bytes |
| Paired source-aware pass | Same authors, with b16 and b36 replacements | Complete for all 36 |
| SPEC-requested second-pass corrections | difficulty36_record_corrections | Complete; levels 06, 13, 19, 29, 31, 33, and 35 only |
| Run README and provenance summary | Assessment documentation | Complete; root accepted DONE_WITH_CONCERNS |
| Level 07 recovery evidence correction; level 05 paired evidence check | Fresh correction owner | Complete; historical fold-present candidate distinguished from no-fold baseline, matching current geometry; level 05 retained unchanged |
| Validate and generate map/report/chart/dossiers | Assessment documentation / CLI | Passed for 36 after level 07 correction; report/map consistency verified |
| Cross-room findings | Assessment documentation | Complete; SPEC, recovery SPEC, QUALITY, and integration accept with concerns |
| Fresh specification review | Fresh reviewer | ACCEPT_WITH_CONCERNS; `tests/_temp/difficulty36_spec_rereview/REPORT.md` |
| Level 07 recovery SPEC delta | Fresh reviewer | ACCEPT_WITH_CONCERNS; `tests/_temp/difficulty36_recovery_spec/REPORT.md` |
| Quality review | Fresh reviewer | ACCEPT_WITH_CONCERNS; `tests/_temp/difficulty36_quality/REPORT.md` |
| Integration review | Fresh reviewer | ACCEPT_WITH_CONCERNS; `tests/_temp/difficulty36_integration/REPORT.md` |
| Final assessment acceptance | Root | ROOT ACCEPTED DONE_WITH_CONCERNS |
| Next gameplay milestone | Root | Authorizes separate bounded lung-tissue compression/recoil prototype; production decision follows evidence |

Preparation evidence and exact capture errors are recorded privately at
`tests/_temp/difficulty36_prepare/REPORT.md`. The run snapshot, packets, receipt, source binding, and
ignored images are under `docs/difficulty_runs/current_36/`. The run README records current
provenance and method limits. Root accepts this source-bound assessment as DONE_WITH_CONCERNS. The
next bounded experiment is a separate prototype of joint lung-tissue compression and recoil that
launches a partner toward a reciprocal return path. Root has authorized this bounded experiment;
the idea remains unproven, and the production decision will follow the evidence. Set it aside if it
does not create a distinct cooperative choice. No new physics framework, configuration, or feature quota is required,
and a full campaign refresh is not a prerequisite for each future gameplay change.
