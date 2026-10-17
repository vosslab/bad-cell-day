# Current38 difficulty run

**Status: ROOT ACCEPTED - DONE_WITH_CONCERNS.** All 38 source-aware records and the generated map,
dossiers, chart, and `FINDINGS` are frozen to the captured source/build bindings below. Full
current38 validation/report and fresh SPEC, different QUALITY, and integration reviews passed with
the recorded concerns. The continuous game-development goal remains ACTIVE.

## Assessment execution

Root confirmed `CAPTUREREADY` after independently rechecking the source, roster, and capture counts.
The seven paired assignments are:

| Group | Owner | Positions and room IDs |
| --- | --- | --- |
| g1 | `difficulty38_pair_g1` | 1-5: 02, 01, 04, 03, 37 |
| g2 | `difficulty38_pair_g2` | 6-10: 06, 08, 34, 05, 07 |
| g3 | `difficulty38_pair_g3` | 11-17: 11, 09, 10, 23, 12, 21, 36 |
| g4 | `difficulty38_pair_g4` | 18-22: 13, 24, 30, 32, 14 |
| g5 | `difficulty38_pair_g5` | 23-26: 26, 28, 15, 16 |
| g6b | `difficulty38_pair_g6b` | 27-32: 18, 17, 25, 22, 27, 35 |
| g7 | `difficulty38_pair_g7` | 33-38: 31, 38, 29, 33, 19, 20 |

At the first observed file-count checkpoint, 25 first-pass records and 24 locks existed. The
`level_17` record in g6b was present before its lock, an ordinary in-progress state under the
per-room lock rule. The independent review later confirmed all 38 records and locks, including
strictly increasing actual lock times within all seven groups. The original g6 author disclosed
future-packet exposure before writing any record or lock and stopped; fresh g6b replaced only that
untouched first-pass slot.

Eighteen first-pass records have inaccurate author-entered `created_at` values later than their lock
times. Review used actual lock times, hashes, and per-author sequence for chronology; all first-pass
records and locks remain unchanged.
Three locked records describe passive idle transitions in `observed_feedback` (`level_12`,
`level_23`, and `level_36`). Their screenshots show the changes, but no keys were pressed and causes
are unknown. Paired authors must compare them as passive observations, never as evidence that a
proposed player action worked.

Root accepted the independent review and issued `ALL38LOCKED_SOURCE_RELEASE` to all seven paired
authors. During source-phase work, g6b disclosed a broad `src` and `devel` search that returned
historical assessment title/ID hits; no scores were shown and no file was opened. g3 disclosed
title/ID-only historical assessment exposure. g1 disclosed a broader `rg` search of `tests` and
`docs` that exposed a historical Level03 assessment/score row after levels 02, 01, and 04 were drafted
but before levels 03 and 37 were written. Root allowed source/trace-grounded completion; first-pass
blindness remains intact. Early SPEC accepted levels 03 and 37 with limits, stating their estimates
are not independent of historical judgments while first-pass evidence remains unexposed.

All 38 `control_friction` ratings are `null`: source maps and native `GameInput` routes do not verify
browser keyboard/focus/input handling, and no new tests were required. Corrections fixed prior-room
positions/attribution in levels 10, 11, 12, and 23; set level 14 clarity to 2 without hint evidence;
kept level 26 execution at 3 for mandatory actions; and added a level 12 no-cargo model proof at 8.76
simulated seconds with both exits and cargo unchanged. The level 05 route now waits for STOP to
restore before Pac crosses to STEADY; its native trace reaches both exits at 10.98 seconds. The
retained native traces cover levels 04, 05, 12, 37, and 38, not a full journey. Root accepted removing
five duplicate per-step level 05 trace citations while retaining route-level trace and source
evidence; the final tool text refresh completed. The corrected 15-record batch substantively passed
re-SPEC, and final spot SPEC accepted levels 05, 11, 12, and 14. Early/middle/late/final SPEC is
complete. Fresh QUALITY and integration accepted with concerns; root accepted the assessment as
`DONE_WITH_CONCERNS` with no unresolved material finding or architectural drift.

`FINDINGS` and the mechanical map/report artifacts are complete and frozen to the captured
campaign/source/build bindings recorded below. The first-review report is
`tests/_temp/difficulty38_first_review/REPORT.md`; the capture handoff is in
`tests/_temp/difficulty38_ledger/REPORT.md`.

## Final acceptance and limits

The assessment is accepted as bounded expert design evidence, not measured player difficulty. Human
discovery, coordination, recovery frequency, comfort, success, enjoyment, and a full 38-room journey
remain unmeasured. All control-friction ratings are `null`; native traces show scripted feasibility
for levels 04, 05, 12, 37, and 38 only, not browser keyboard/focus reliability or human response.
Confidence remains low at positions 33, 35, and 36. The position 3 side-to-side bridge-motion/easy-
falls report remains unresolved. The g1 source-aware estimate for position 4 is not independent of
the disclosed historical Level03 score exposure; first-pass blindness remained intact. The 18 late
first-pass `created_at` values use lock metadata for chronology, and three passive idle transitions
retain unknown causes.

Root approved a separate next candidate: local level 07 pad-role/effect cues. The work preserves
players' inference about release timing, keeps mechanics unchanged, and displays no full solution or
new framework. See the [pad-role cue plan](../../active_plans/active/pad_role_cues.md). Source remains
frozen until root receives this closeout. This assessment closeout does not complete the continuous
game-development goal.

## Snapshot and provenance

The existing snapshot command captured the current campaign roster in source order. The observation
CLI then captured each room from the local preview at `http://127.0.0.1:8127/`. Its provenance
checks matched the built JavaScript and source map served over HTTP to the accepted artifacts:

| Input | SHA-256 |
| --- | --- |
| Campaign roster | `9ab4e8281eeb10cab2a3bb37b3a4d755dc0cf97c8e072202cdd9b4b542912b1f` |
| Source fingerprint | `a5a604946108f75bd072a96d0c659091b106cdd462f1a8a8bacd3210a0d1432c` |
| `dist/main.js` and served `main.js` | `a3ddac4ab9596cb5a214e17f13d836be890ca401f937219d25d132e3d854522e` |
| `dist/main.js.map` and served `main.js.map` | `3df9852c89b5d3ab4a5bd015580ca6e0173ccc951c938f9ce9f9b537c23e6c59` |
| Capture receipt | `460b2d93ad365afef8b5f05abb19be795da6f7fa89e0eb37d80af27dbbad2042` |

The capture-time source binding records 38 ordered packet identities and hashes. The snapshot
records each ID, position, title, stage, and structural counts; `observations/capture_receipt.json`
records the same ordered roster, three image hashes and byte sizes per room, and browser errors.
The captured menu titles were checked against the full snapshot roster for every room selection.
`level_38` is position 34, between `level_31` and `level_29`; the finale `level_20` remains position
38. There are 38 JSON packets and 114 PNG captures. `git check-ignore` confirms observation PNGs
are ignored under the existing repository rule.

## What the packets show

Each packet contains visible DOM text and screenshots of the selected room's opening state at 16,
1516, and 4016 ms. No gameplay keys were pressed, and the optional hint remained closed. For later
rooms, earlier IDs were marked complete only to open the selector; the room was then selected from
the captured campaign menu. This gives each room the same three-frame first-state observation and
does not claim to show a route, action-caused feedback, mistakes, recovery, human discovery, or player
outcomes. Three locked first-pass records note passive idle transitions with unknown causes; these
do not establish that any proposed action worked. The source-blind first-pass prompt was inspected
and retained in the preparation record; it exposes only the rubric, typed contract, current/earlier
observation packets, and scoring instructions. It bars source, hints, route solutions, and other
room assessments until the first record is locked.

The first-pass packets support only an expert's opening-cue estimates. Puzzle and platforming are
separate axes; clarity, recovery cost, and control friction stay separate. Prior exposure is not
proof of mastery. The paired source-aware records add authored route evidence, not human outcomes.
These packets are not a game clear or a human playtest.

## Commands and results

```sh
npx tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/current_38
node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_38
npx tsx devel/assess_difficulty.ts prompt level_02 --pass first --run-dir docs/difficulty_runs/current_38
```

All three commands exited 0. Snapshot creation reported 38 rooms. The full capture reported all
38 positions, with three images per room and zero retries in every reported frame; the receipt
contains no browser errors. There were no skipped rooms. The prompt was generated only for a
source-leak contract check and was not used to create an assessment record. See
`tests/_temp/difficulty38_capture/REPORT.md` for the execution ledger and prompt check.
