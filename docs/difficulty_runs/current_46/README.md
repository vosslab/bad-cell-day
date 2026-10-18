# Current46 difficulty run

Status: **ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 22:15:47 UTC**.
Preparation is `DONE_WITH_CONCERNS`. The corrected findings synthesis and all six independent
Plan, Test, Style, Docs, Legacy, and Comment audit passes are complete; Test and Legacy had no
findings. Both deduplicated documentation findings and later clerical items are closed. Targeted
QUALITY accepts, separate integration accepts with concerns, and root accepted this bounded
assessment as `DONE_WITH_CONCERNS` at 2026-10-17 22:15:47 UTC. Current46 is the latest accepted,
frozen expert assessment. The broad gameplay goal remains active.

The [durable review receipt](../../active_plans/reports/difficulty_46_acceptance.md) preserves the
accepted decisions, essential evidence, and current gates. Current44 remains the latest
root-accepted assessment before current46 closeout; current44 is now a historical accepted
checkpoint.

## Commands and capture

The run directory was absent before snapshot creation. The coordinator ran:

| Command | Exit | Result |
| --- | --- | --- |
| `npx tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/current_46` | 0 | Wrote a 46-room ordered snapshot. |
| `node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_46` | 1 | Initial sandbox Chromium launch failed; see below. |
| `node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_46` | 0 | Root reran the same command with approved escalation. No server restart or build occurred. |

The initial Chromium launch failed with `bootstrap_check_in
org.chromium.Chromium.MachPortRendezvousServer.15514: Permission denied (1100)` and terminated by
`SIGTRAP`. The empty partial `observations/` directory was removed with `rmdir`; no files were
removed. Root then completed the canonical capture at 2026-10-17 20:54:26.696 UTC from the existing
preview at `http://127.0.0.1:8127/`.

The capture contains 46 packets and 138 idle PNGs, three per room at 16, 1516, and 4016 ms. The
receipt, packet, and snapshot rosters agree in all 46 positions. Every packet has three images and
an empty `browserErrors` list. A read-only integrity check found zero issues across room IDs,
positions, titles, packet SHA-256 values, image SHA-256 values, and recorded image byte sizes.
`git check-ignore -v` confirms the PNGs are ignored by `.gitignore` rule
`/docs/difficulty_runs/**/*.png`.

## Frozen identity

| Identity | Value |
| --- | --- |
| Campaign fingerprint | `33c7df0d3c05176e5cf3e683f387db61075b3061f16bbde39146351c1791cc93` |
| Source fingerprint | `938dbb3d1c91889d072648c7a6c2ed48c6a9d88c6482297896c6b599a6617b4c` |
| `dist/main.js` SHA-256 | `bf1830b26f073f256524d823c52478df75343356207d3f7f90c56f3ff7f57e45` |
| Source-map SHA-256 | `a09105bf31f4de5edc5fb48820ea9e1517ab9dcdf634ca06b82aaf8c7e1976ff` |
| Capture receipt SHA-256 | `de084710661c633675b189ee440190acc7af12857de96ab57e228f525e093675` |
| Capture time | `2026-10-17T20:54:26.696Z` |

Disk and HTTP-served JS and source-map hashes matched the snapshot capture identity. The current
preview returned HTTP 200 for `main.js`. The browser checked served build and source-map hashes per
room. No rebuild was run, and the frozen source/build must remain unchanged through assessment
closeout.

## Frozen campaign roster

The snapshot is the canonical record of room facts and provenance. This table records campaign
position, stable ID, and title from that snapshot.

| Position | Stable ID | Title |
| ---: | --- | --- |
| 1 | `level_02` | Hold That Door! |
| 2 | `level_01` | Glucose Going Up! |
| 3 | `level_04` | Bridge Over Troubled Slime |
| 4 | `level_03` | Stop Right There! |
| 5 | `level_37` | Hold Your Breath |
| 6 | `level_45` | Gut Feeling |
| 7 | `level_06` | Narrow Escape |
| 8 | `level_08` | Push Comes to Shove |
| 9 | `level_34` | Gut Instinct |
| 10 | `level_05` | The Great Cell Shuffle |
| 11 | `level_07` | Double Trouble |
| 12 | `level_41` | Cana's Friendly Fire |
| 13 | `level_11` | Split Decision |
| 14 | `level_09` | Two Tons of Trouble |
| 15 | `level_10` | Elevator Etiquette |
| 16 | `level_23` | Cargo Exchange |
| 17 | `level_12` | Marrow Cargo Shuffle |
| 18 | `level_21` | Across the Divide |
| 19 | `level_36` | A Little Push |
| 20 | `level_13` | Gem's Bubble Break |
| 21 | `level_40` | Bursting Point |
| 22 | `level_24` | I've Got You |
| 23 | `level_30` | Your Turn to Carry |
| 24 | `level_44` | Step On It |
| 25 | `level_43` | Cellpool Lane |
| 26 | `level_32` | Bring Your Own Villain |
| 27 | `level_46` | Dead Weight |
| 28 | `level_14` | Bombs Need Personal Space |
| 29 | `level_26` | Bubble Bouncer |
| 30 | `level_28` | Two for One |
| 31 | `level_15` | Special Delivery for Gem |
| 32 | `level_16` | Gem's Liver Lair |
| 33 | `level_18` | A Meeting of Minds |
| 34 | `level_17` | Cana's Upside-Down Commute |
| 35 | `level_25` | Return to Sender |
| 36 | `level_22` | Crossed Paths |
| 37 | `level_27` | Attention, Please! |
| 38 | `level_39` | Boneheads |
| 39 | `level_35` | Pick On Someone Else |
| 40 | `level_31` | Knock It Off |
| 41 | `level_42` | Neural Misfire |
| 42 | `level_38` | Jump to Conclusions |
| 43 | `level_29` | Changing Places |
| 44 | `level_33` | No Takebacks |
| 45 | `level_19` | Cana's Control Freak-Out |
| 46 | `level_20` | A Very Bad Day for the Tumor |

## Limits and next gate

These are automated idle visible-state captures, not playthroughs. They do not establish route
feasibility, control reliability, human discovery, understanding, success, enjoyment, or difficulty.
Current44 and earlier runs remain immutable, and none of their scores transfers to this roster.

Root proposed seven source-blind first-pass bands in the [active execution plan](../../active_plans/active/difficulty_46_refresh.md).
Authors used only the rubric and chronological observation packets, proceeded within their band in
campaign order, and locked each room before opening the next packet. Root reviewed the full set and
released source access; the same seven authors have completed paired source-aware second passes.
The corrected findings synthesis and six independent Plan, Test, Style, Docs, Legacy, and Comment
passes serving as global QUALITY are complete; Test and Legacy had no findings. Both deduplicated
documentation findings and later clerical items are closed. Targeted QUALITY accepts; separate
integration accepts with concerns; root accepted the bounded assessment as `DONE_WITH_CONCERNS` at
2026-10-17 22:15:47 UTC. Current46 is the latest accepted frozen expert assessment.

## Live first-pass coordination

Original authors D, E, and G were stopped after future-content exposure and replaced by D2, E2,
and G2. Root directed the coordinator to preserve G's unlocked `level_31` draft byte-for-byte, then
remove only its original `first_pass/level_31.json` path after confirming no lock existed. The
preserved copy has SHA-256
`1ceb6236ece08e5b065e93f328565ecf48f5c90c593e23c3a12ca5018edf223c` and 12,103 bytes; its contents
were not read or forwarded. Root accepted C's filenames-only observation, F's temporary-directory
name observation, a reviewer's metadata-only inspection of this README, and G2's unsourced read of
five permitted earlier packets as process caveats. Root reported no evidence breach and directed
sourced Python for G2's remaining work. F's manually entered `level_27.created_at` is unreliable;
root preserves the locked record and uses lock time plus command order for chronology.

Root has received first-pass handoffs from all seven authors (46 rooms). G2's `PHASE1.md` was
mistakenly written at the current46 run root, then relocated byte-for-byte to G2's temporary
handoff directory under root's authorization; the misplaced original was removed only after a
successful `cmp`. Root's live validator returned exit 0 for all 46 first-pass records, lock hashes,
and packet fingerprints; all 143 steps had null `observed_feedback`, all control-friction scores
were null, and campaign/source/build identities matched the frozen capture.

All seven authors handed off their 46 locked first-pass records. Root's independent validation
returned exit 0 for all records, lock hashes, packet fingerprints, null `observed_feedback` values,
null control-friction scores, and frozen campaign/source/build identities. All four fresh reviews
returned `ACCEPT_WITH_CONCERNS`; root authorized `ALL46RELEASE` at 2026-10-17 21:11:38 UTC. The same
authors completed the paired passes, with first-pass records and locks immutable. Root accepts the
reviewed process caveats. Review questions about mandatory routes, inferred hazards and timing,
reasoning/cooperation, prior teaching, and separation of explicit cues from route evidence carry
forward into the paired records. The source/build freeze ended at root acceptance; captured
artifacts remain immutable. The canonical report command is documented in the active plan; its first authorized
attempt failed on six stale inherited source fingerprints. Exact evidence and root decisions remain
in the local-only `tests/_temp/difficulty46_run_manager/REPORT.md` working receipt.

Fresh factual SPEC reviewers inspected author-confirmed, per-file-validated records as partial
handoffs arrived; final band verdicts waited for complete PHASE2 handoffs and checked later
corrections. Central/late reviews accepted with concerns. Early/middle baseline findings were closed
through accepted four-record B and six-record rubric correction SPEC reviews. Root accepted the
separate six-header fingerprint repair and fresh SPEC under receipt `f95788`. The final combined
findings synthesis is also accepted; its disposition and correction groups are recorded in the
durable [review receipt](../../active_plans/reports/difficulty_46_acceptance.md).
Optional hints can explain intended solutions but cannot establish unassisted clarity. An unlocked
live second-pass draft for level 45 revised its hazards score from 1 to 0 because a safe-floor shove
is interference, not physical danger; its causal rationale and per-file validation were updated. No
locked record or source changed. The read-only structural scout's proposed room was parked due to
overlap with existing patterns; its evidence remains in the handoff record. FINDINGS now exists, and
no production feature is authorized by the parked proposal.

All seven authors have handed off all 46 paired records. D2 resumed the same assignment after an
interrupted turn, preserving five existing records and completing only the two missing records. F's original
`validate-one.mjs` was a custom evidence/shape check, not canonical `validateSecond`; its `level_35`
first-pass fingerprint typo shows that it did not establish freshness. Keep that evidence labeled
with its actual scope. Root reports a fresh correction owner/review canonically validated six
records and accepted them in `difficulty46_rubric_correction_spec`; the combined canonical report
gate remains mandatory. One early-review report misstated a route as 36 frames; the correct
current-source completion frames are level 08 at 1122 and level 36 at 702.

The exact canonical command was run twice. The first authorized attempt exited 1 in 3.268743 seconds
with `second_pass: campaign or source fingerprint is stale`. Root diagnosis `d9d538` found exactly
six stale inherited `source_fingerprint` headers in F's records: `level_17`, `level_18`, `level_22`,
`level_25`, `level_27`, and `level_39`; the other 40 matched the snapshot. A fresh Luna owner repaired
only those headers and preserved inert originals/report. Root accepted the repair and fresh SPEC
under `f95788`; root's canonical validation exited 0 for all46. The authorized retry
`npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_46` exited 0 in
41.390 seconds with `Wrote report, SVG, and map for 46 rooms.`

Generated artifact identities:

| Output | SHA-256 |
| --- | --- |
| `campaign_map.json` | `f065bc9cad46052fab83da3e3838853de5c4a63c17f8713725ebf85af6582906` |
| `report/LEVEL_DIFFICULTY_REPORT.md` | `4d19daeba7db5491ffd6495fca3ad479d20ae13d844aba0a6878d2e7e4b56e06` |
| `report/difficulty_campaign.svg` | `626f17aff4dae4244731e9e20a13ba80267cfe1507945ebbe88464f30a1bde90` |

The report and map cover all 46 campaign positions and 46 room dossiers. Their campaign and source
fingerprints are `33c7df0d3c05176e5cf3e683f387db61075b3061f16bbde39146351c1791cc93` and
`938dbb3d1c91889d072648c7a6c2ed48c6a9d88c6482297896c6b599a6617b4c`; frozen `dist/main.js` and
source-map hashes remain `bf1830b26f073f256524d823c52478df75343356207d3f7f90c56f3ff7f57e45` and
`a09105bf31f4de5edc5fb48820ea9e1517ab9dcdf634ca06b82aaf8c7e1976ff`. The first-pass validator
previously confirmed 46 records, lock hashes, packet fingerprints, 143 steps with null feedback, and
46 null control-friction ratings; root's post-repair canonical validation again returned exit0 for
all46. Final puzzle estimates span 43-82 and platforming estimates 11-68; all first-pass
platforming axes are unknown, four first-pass puzzle axes are unknown, clarity/recovery burdens range
1-3, and control friction is unknown in all46. The report has 16 automated review candidates; these
are prompts, not conclusions. No human outcomes or measured difficulty are claimed. The separate
[FINDINGS synthesis](FINDINGS.md) records the assessment's design findings. Root parked its named
generic villain-baited fork/reunion concept after a novelty check found substantial overlap with
existing rooms. After assessment acceptance, the next gameplay work is a private navigation-focused
prototype with distinct partner jobs and forgiving recovery; design details remain open. This does
not authorize score changes, campaign reordering, or production work. Remaining assessment gates
are final targeted QUALITY and integration review, followed by root acceptance. Idle
captures, expert ordinal estimates, and scripted feasibility traces do not measure human success,
discovery, enjoyment, friction, comfort, or difficulty.

## Generated artifacts and next gates

The authorized canonical command
`npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_46` first exited 1
after 3.268743 seconds because six paired records inherited stale source fingerprints. Root
accepted a correction limited to those six headers, and root canonical validation then exited 0.
The authorized rerun exited 0 in 41.390 seconds with `Wrote report, SVG, and map for 46 rooms.`
Artifact hashes, estimate ranges, and campaign/source fingerprints above are the generation receipt;
detailed phase chronology remains in the [active plan](../../active_plans/active/difficulty_46_refresh.md).

Current44 and earlier runs remain immutable. Current46 is accepted as a bounded expert assessment;
the root decision ends the active source/build freeze while these captured artifacts remain
immutable. Later gameplay work does not require rebasing or recapturing this run. No remote
publication is claimed.
