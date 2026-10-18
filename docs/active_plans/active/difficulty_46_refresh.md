# Current46 difficulty refresh

Status: **ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 22:15:47 UTC**.
The broad game goal remains active. This plan records the frozen current46 expert assessment; it is
not human play evidence. The six fresh Plan, Test, Style, Docs, Legacy, and Comment audit passes
are complete; Test and Legacy had no findings. Both deduplicated documentation findings and later
clerical items are closed. Targeted QUALITY accepts, separate integration accepts with concerns,
and root accepted the bounded assessment as `DONE_WITH_CONCERNS` at 2026-10-17 22:15:47 UTC.
Current46 is the latest accepted frozen expert assessment. The active source/build freeze has ended;
the captured artifacts remain immutable. The broad gameplay goal remains active.

## Scope and identity

- Use the existing difficulty pipeline with an absent `docs/difficulty_runs/current_46/` directory.
- Freeze source and build for this assessment. Do not rebuild or change production files.
- Expected `dist/main.js` SHA-256: `bf1830b26f073f256524d823c52478df75343356207d3f7f90c56f3ff7f57e45`.
- Expected source-map SHA-256: `a09105bf31f4de5edc5fb48820ea9e1517ab9dcdf634ca06b82aaf8c7e1976ff`.
- Current46 order: lungs 1-5, intestine 6-12, marrow 13-19, liver 20-32, brain 33-45,
  tumor 46 (stable `level_20`). Gut Feeling is position 6 (stable `level_45`); Dead Weight is
  position 27 (stable `level_46`).
- Historical current44 and all earlier runs remain immutable.

## Completed phases and gates

| Phase | Completed work | Gate decision |
| --- | --- | --- |
| Preparation | The coordinator captured the frozen 46-room snapshot and idle observations, recording roster, provenance, identities, errors, and ignored PNGs. | Capture identity and packet integrity passed. An initial sandbox Chromium failure was followed by the authorized successful capture. |
| First pass | Fresh authors used the rubric and chronological current46 observation packets, then wrote and locked each assigned room in campaign order. | Authors used no source, hints, routes, historical scores, or future packets. All 46 records and locks passed root validation. |
| Campaign review | Root reviewed all 46 ordered records and locks before releasing source access. | Root authorized source release after four fresh reviews accepted with concerns. |
| Second pass | The same author for each room inspected source and ordinary-input route evidence, then recorded a paired account against the locked first pass. | First-pass records stayed immutable; evidence and causal changes were recorded. |
| Report and review | The canonical report produced the map, report, chart, and dossiers; the findings SPEC and six-pass global QUALITY audit followed. | The report and final findings SPEC passed. All six independent audit passes completed; Test and Legacy had no findings. Both deduplicated documentation findings and later clerical items are closed. Targeted QUALITY accepts; separate integration accepts with concerns; root accepted this bounded assessment as `DONE_WITH_CONCERNS` at 2026-10-17 22:15:47 UTC. |

## First-pass ownership and handoff record

Root dispatched seven chronological bands. The status column records the latest handoffs and review
state; it is not a campaign review.
Exposure receipts and G's preserved contaminated draft are described in the
[current46 run receipt](../../difficulty_runs/current_46/README.md).

| Author | Campaign positions | Stable IDs | Recorded handoff |
| --- | --- | --- | --- |
| A | 1-5 | `level_02`, `level_01`, `level_04`, `level_03`, `level_37` | handoff received; 5 rooms |
| B | 6-12 | `level_45`, `level_06`, `level_08`, `level_34`, `level_05`, `level_07`, `level_41` | handoff received; 7 rooms |
| C | 13-19 | `level_11`, `level_09`, `level_10`, `level_23`, `level_12`, `level_21`, `level_36` | handoff received; 7 rooms |
| D2 | 20-26 | `level_13`, `level_40`, `level_24`, `level_30`, `level_44`, `level_43`, `level_32` | handoff received; 7 rooms |
| E2 | 27-32 | `level_46`, `level_14`, `level_26`, `level_28`, `level_15`, `level_16` | handoff received; 6 rooms |
| F | 33-39 | `level_18`, `level_17`, `level_25`, `level_22`, `level_27`, `level_39`, `level_35` | handoff received; 7 rooms |
| G2 | 40-46 | `level_31`, `level_42`, `level_38`, `level_29`, `level_33`, `level_19`, `level_20` | handoff received; 7 rooms; misplaced handoff relocated byte-for-byte |

Original authors D, E, and G were stopped after unintended future-content exposure. Their exposure
receipts are retained under `tests/_temp`; no record from those stopped assignments is accepted.
G's unlocked `level_31` draft was byte-preserved outside the canonical run directory and removed
from `first_pass/`; no lock existed. Root accepted C's filenames-only observation and F's
temporary-directory-name observation as caveats. Authors were instructed not to inspect another
author's assessment. F disclosed that `level_27.created_at` was manually entered about six seconds after the
file's modification time. Root preserves the record, accepts the disclosed field as unreliable,
and uses canonical lock time plus command order for chronology. The coordinator has not opened that
record. Each replacement proceeded in assigned campaign order and locked each room before opening
the next observation packet. The coordinator reviewed the complete campaign before root released
source access. Cleanup proof and the later filename-only snapshot remain local-only evidence at
`tests/_temp/difficulty46_run_manager/REPORT.md`.

Root has received first-pass handoffs from all seven authors (46 rooms). G2's `PHASE1.md` was
relocated byte-for-byte from the current46 run root to G2's temporary handoff directory after root
authorization; the original was removed only after `cmp` succeeded. Root's live validator returned
exit 0 for all 46 first-pass records, lock hashes, and packet fingerprints; it checked 143 steps
with null `observed_feedback`, 46 null control-friction scores, and campaign/source/build identity
against the frozen capture.

All four fresh first-pass reviews returned `ACCEPT_WITH_CONCERNS`. Root independently validated all
46 records and locks, then authorized `ALL46RELEASE` at 2026-10-17 21:11:38 UTC. The same seven
authors completed their paired source-aware passes. Every first-pass record and lock remains
immutable, and source/build remain frozen through assessment acceptance.

Paired questions to resolve with evidence: verify level 04's mandatory cooperation, level 34/07's
required reasoning, and level 37's inferred execution/hazards; check novelty against actual earlier
teaching; establish whether level 30's labeled toxic sections are mandatory and their consequence;
test whether level 14's "seven seconds" cue indicates a mandatory timer; preserve level 31's first
record while distinguishing the villain's stated intent from the player's useful target; check
level 29's reasoning/cooperation against earlier teaching, level 38's route-split cues, and level
20's explicit two-second hold separately from its route. Root accepts null control friction and
idle-only feedback as unknown, and requires unexplained unknowns to stay explicit. The complete
review findings and root's specific level 31 disposition are in the temporary coordinator report.

All seven authors handed off the 46 paired records. The incremental source SPEC reviews accepted
records as they became writer-confirmed and validated; all later edits were routed back for re-review.
Optional hints can explain intended solutions but do not establish unassisted clarity. The initial
combined gate failed because six records inherited a stale source fingerprint; root's diagnosis and
the precise repair scope are recorded below. The structural scout's proposed room was parked due to
overlap with existing patterns; its evidence remains in the handoff record. FINDINGS now exists, and
the parked proposal authorizes no feature.

The first authorized canonical report attempt exited 1 after 3.268743 seconds with
`second_pass: campaign or source fingerprint is stale`. Root diagnosis `d9d538` found exactly six
stale inherited `source_fingerprint` headers in F's records: `level_17`, `level_18`, `level_22`,
`level_25`, `level_27`, and `level_39`. The other 40 matched the snapshot, and source/build remained
frozen. A fresh Luna owner repaired only those six headers and preserved inert originals and a
report; root accepted the repair and fresh SPEC under receipt `f95788`. Root's canonical validation
then exited 0 for all 46. The authorized report rerun exited 0 in 41.390 seconds and wrote 46-room
map, report, and SVG outputs. Their SHA-256 values and the axis/burden summary are recorded in the
[run receipt](../../difficulty_runs/current_46/README.md). The separate [FINDINGS synthesis](../../difficulty_runs/current_46/FINDINGS.md)
records the assessment's design interpretation. Its original combined SPEC raised campaign-progression
interpretation and one position/mechanic attribution issue; the final synthesis SPEC accepted the
corrections. Six fresh Plan/Test/Style/Docs/Legacy/Comment passes are complete; Test and Legacy had
no findings. Both deduplicated documentation findings and later clerical items are closed. Targeted
QUALITY accepts; separate integration accepts with concerns; root accepted this bounded assessment
as `DONE_WITH_CONCERNS` at 2026-10-17 22:15:47 UTC. Root parked the named generic villain-baited
fork/reunion after a novelty check found substantial overlap with existing rooms. Next work is
exploratory private navigation with distinct partner roles and forgiving recovery, using existing
mechanics. The broad gameplay goal remains active. No campaign order or score changes or production
feature are authorized.

## Preparation receipt

Preparation commands, exits, capture identity, and the exact room roster are recorded in
[`docs/difficulty_runs/current_46/README.md`](../../difficulty_runs/current_46/README.md).
Preparation is `DONE_WITH_CONCERNS`. Root completed the campaign-wide first-pass gate and released
all 46 for paired source-aware assessment. The canonical combined report and FINDINGS now exist.
The final findings SPEC and six independent audit passes are complete. Both deduplicated
documentation findings and later clerical items are closed. Targeted QUALITY accepts; separate
integration accepts with concerns; root accepted this bounded assessment as `DONE_WITH_CONCERNS` at
2026-10-17 22:15:47 UTC. Idle frames show
only sampled visible states; they do not establish route, playability, mechanics, human understanding,
or measured difficulty.
