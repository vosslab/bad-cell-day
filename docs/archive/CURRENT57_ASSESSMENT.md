# Current57 difficulty assessment

Setup: **DONE_WITH_CONCERNS; ACCEPTED BY ROOT** (2026-10-18). Overall assessment:
**DONE_WITH_CONCERNS; ACCEPTED BY ROOT** at 2026-10-18 21:42:04 UTC. SPEC: **PASS_WITH_CONCERNS**;
QUALITY: **PASS**; integration: **PERFORMED, FAIL solely on stale status labels; finding closed by root**.
The complete first-pass gate was **ACCEPTED WITH CONCERNS** and source released at 2026-10-18
20:28:35 UTC. The paired report, map, chart, and concise findings are generated; all 57 records passed
`validateSecond`. After scoped semantic corrections to records 14, 25, and 33, the final report
command exited 0 and wrote report, SVG, and map for all 57 rooms. This remains an expert estimate, not
human-play evidence.

## Scope and identity

- Run: `docs/difficulty_runs/current_57/`; prior `current_53` evidence stays immutable.
- Assessment records are bound to the frozen source/build: `dist/main.js` SHA-256
  `5ff3526ce96cfca76a383b99edabdfa183e59736701a0bd3d2bf02afe4f0d3ef`; source-map SHA-256
  `3e971938ed3036b821ae9ba9446a315fef4fb9f98503d0c3102d953eb977e6c9`.
  The source/build freeze ended when root accepted this assessment; the historical records remain bound
  to those hashes.
- Snapshot: 57 rooms; campaign fingerprint `a2f7e1b196c79a0c2279ccd257d2708752958ddfc3a42c6206e74ec95149e2c0`;
  source fingerprint `75a46d482756f4bcf9838891eb05be5555d3fd09101563e967f8e9e91fd36566`.
- Capture the ordered 57-room campaign at `http://127.0.0.1:8127/`. Each packet contains visible
  DOM text and three idle screenshots at 16, 1516, and 4016 ms; no keys are pressed and hints stay
  closed. `capture_receipt.json` and `source_binding.json` bind packet/image identities to the
  captured build. The observation files and screenshot paths are the first-pass evidence set.
- First-pass records use only the current and earlier observation packets; idle actions remain
  hypotheses and observed feedback remains `null` unless witnessed. Source access begins only after
  root accepts all first-pass records and locks.

## Assessment sequence

1. Verify the snapshot, source/build binding, capture receipt, 57 packet identities, and 171 image
   hashes. Root accepts this preparation before dispatch.
2. Fresh authors work chronologically in positions 1, 2-27, 28-45, and 46-57. Each uses
   `docs/DIFFICULTY_RUBRIC.md` and `devel/difficulty/types.ts`, writes
   `first_pass/level_XX.json`, and successfully locks each room before opening the next. Preserve
   records and failures. Cross-review calibration across author bands.
3. After root releases source, the same authors inspect actual mechanics, ordinary-input mandatory
   routes, both heroes' roles, mistakes, and recovery; each second pass cites its locked first-pass
   hash. Preserve the reviewed first-pass records and locks.
4. Review and validate the paired records, then use the existing report command. Keep the eight
   dimensions, separate puzzle/platforming axes, and unknowns; do not claim measured human
   difficulty.

## Setup checkpoint

The canonical commands are:

```text
npx tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/current_57
node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_57
```

The snapshot command exited 0. The authorized Chromium capture produced all 57 packets and 171
screenshots at `http://127.0.0.1:8127/`. Independent checks and root review verified packet order and
hashes, image hashes and byte sizes, zero browser errors, capture offsets, and JS/map identity
against `observations/capture_receipt.json` and `observations/source_binding.json`. The capture
process was observed running and later absent, but its original exec session handle was lost, so its
exact exit status is unknown. No source or build change was made.

## Live gates

1. Opening position 1 is assigned to fresh author `current57_first_opening`. An early author
   inadvertently read position 2's full JSON packet, without its images, before position 1. The
   opening author is uncontaminated; the record is now locked. The early author owns positions 2-27
   only, completed those first passes, and confirmed no position 3 or later packet was read before
   locking position 2.
2. The initial late author read position 28-35 screenshots before making any lock and saw all 57
   titles. They authored no records or locks and stopped. Preserve the exposure account at
   `tests/_temp/current57_first_late/exposure_summary.md`. Fresh replacement
   `current57_first_late_replacement` owns positions 28-45 and has confirmed they will not open
   position 46. During assessment, a broad `rg` matched only position/ID metadata for 45-46 in
   `source_binding.json`; no mechanics were read.
3. The initial final-band author confused campaign position 46 with stable ID `level_56` and
   overwrote `first_pass/level_46.json`, which belongs to position 35. They created no lock and
   stopped. Preserve the mistaken payload and summary at
   `tests/_temp/current57_first_final_band/`. The original author's position-35 record was
   reconstructed byte-for-byte at
   `tests/_temp/current57_first_late_replacement/level_46_position35_original.json` (SHA-256
   `c13d6539b5c0bdbf0bcd6c08a609f7881bac713cb4f2b1e057c543cdb6ea14f6`). Fresh
   `current57_locked_record_recovery` restored that exact content. Root confirmed the canonical
   record is `level_46` at position 35 and matches its original lock; no lock changed, and root read
   the recovery report. Fresh `current57_first_final_replacement` owns positions 46-57 for first
   and paired second passes. They made a targeted CLI source search for lock syntax only; no
   gameplay source or solutions were read. They must read, write, and successfully lock each
   first-pass record before opening the next packet; use exclusive-create to prevent overwrite.
4. Root accepted all 57 first-pass records with concerns and released source at 2026-10-18
   20:28:35 UTC. Root personally read the 57 proposed plans and score summaries and checked all 57
   stable-ID files and locks: hashes match, positions cover 1-57, evidence references use only
   current or earlier observations, all `observed_feedback` values are null, and all control
   friction scores are unknown. Root treats the metadata and CLI-help exposures above as limitations,
   not solution leakage. Preserve all first-pass records and locks. The four paired authors are now
   source-aware and second pass is underway; no source or build changes were made.
5. Synthesize what the pair learns and applies, their actual mutual dependence, and campaign pace.
   Examine current profiles around levels 6, 12, 22, and 46 and revised levels 29, 36, and 57,
   alongside the relevant earlier teaching. A strong recombination or breather can earn its place;
   do not impose a novelty quota or reorder from numeric rank alone. Make clarity/recovery distinct
   from interesting challenge, and end with one causal, concrete gameplay opportunity. Cargo
   Exchange (`level_23`) is **KEEP**: its ordinary 15.725-second route and pinned-sac 28.567-second
   recovered clear are supported evidence, independent of its score.
6. After report generation, run a fresh SPEC review, then a different fresh QUALITY review, then
   fresh integration review. Keep those gates distinct.

The early author band (positions 2-27) has completed its paired records with root-calibration
changes. Root noted one ordinal uncertainty for normal review: compare the concrete cooperation
roles in levels 21 (4), 23 (3), 24 (3), and 30 (4). Cooperation 4 may come from repeated mutual
dependencies or sustained simultaneity. Do not count safe sequential work or lethal execution as
extra cooperation automatically. Do not change author records or force a score; explain any remaining
uncertainty in ordinary SPEC/QUALITY review only. This does not require a separate review project,
and the current evidence supports keeping Cargo Exchange.

As of root's latest progress message, the final band (positions 46-57) is complete with audited
source/evidence locators and first locks; its paired summary is at
`tests/_temp/current57_first_final_replacement/second_pass_summary.md`. The middle band (positions
28-45) is the remaining source-aware work; positions 28-31 were complete and the rest underway at
that checkpoint. Root then found three semantic errors in the final-band records despite locator QA:
level 29's initial Isp/Pac routes were swapped; Heavy Thought (`level_56`) had an impossible load
order (Isp POWER before joint heavy-load), attributed a loading fall to unloading, and incorrectly
required both heroes to remain on DELIVER when the heavy sac alone supplies 2. Fresh
`current57_final_accuracy_repair` owns correction and checking of those 12 records; the original
author is frozen. Do not edit those inputs. Root will review the corrected deltas before giving the
all57-ready signal. This semantic repair is required before report generation. A bounded read-only
actual-input probe confirmed a no-cargo both-exit clear in 1,904 frames (15.867 seconds), leaving the
sac untouched at (160,432). In a fresh state loaded from registered `LEVELS`, with no runtime
injection, both heroes use the upper route, drop at the left edge to the receiver, jointly hold
DELIVER for weight 2, and contact-push through the lane. Fresh
`current57_heavy_alternative_record` owns only the paired level56 record to include both legal routes,
the actual necessary jobs, and scoped first-encounter uncertainty; first pass and lock stay unchanged.
Do not claim the cargo route must be enforced, or treat the alternate as a gameplay defect. It may
offer creative alternate play, a breather, or recovery value. Await this bounded record correction
and remaining late-band records, plus root's explicit all57-ready signal, before report generation.

Root has read and accepted the scoped accuracy handoff: the final-accuracy repair report and corrected
levels 29, 35, and 56; the Heavy Thought native no-cargo proof and runner; the paired level56
alternative-route record; and the Moving Target (`level_54`) source/body-brake correction and revised
record. This accepts those bounded corrections for the handoff, not the full assessment. Fresh SPEC
preparation may proceed, but its verdict is withheld until the generated report is ready. Root will
explicitly release canonical report generation after the late band is complete.

The late band (positions 28-45) is complete and root signaled all57-ready. Two evidence-reference
repairs passed all 2,461 path/hash/locator checks; a bounded record-contract repair then passed the
exported `validateSecond` check for all 57 records. The final canonical report command, after SPEC's
scoped semantic corrections to records 14, 25, and 33, exited 0 and wrote the report, map, and SVG.
The chart was visually inspected. Integration's sole finding was that the README and plan still labeled
completed SPEC/QUALITY review as pending; those current-status labels were synchronized and root
verified the correction, closing that clerical finding without a fresh integration PASS or rerun. Root
accepted the assessment as `DONE_WITH_CONCERNS`; the source/build freeze ended then. Captured
assessment records and reports remain frozen. The broad game goal remains active. See the concise
`FINDINGS.md` and the
`CHECKPOINT.md` for exact
diagnostics and artifact provenance. No human play or fun claim is made.
