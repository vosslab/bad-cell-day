# Current53 difficulty run

Status: **FIRST-PASS GATE ACCEPTED WITH CONCERNS; SOURCE RELEASED BY ROOT** (2026-10-18 12:10:20 UTC).
This is an existing-pipeline expert
assessment preparation, not evidence of human play, discovery, enjoyment, or measured difficulty.
The Cana-stipation milestone is closed. Current46 is the latest accepted expert map, but its
campaign is inapplicable to this changed 53-room roster. All historical runs remain untouched.

## Commands and capture

| Command | Exit | Result |
| --- | ---: | --- |
| `npx tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/current_53` | 0 | Wrote the ordered 53-room snapshot. |
| `node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_53` (sandbox attempt) | 1 | Chromium stopped at macOS `bootstrap_check_in ... Permission denied (1100)`, `SIGTRAP`; no packets were written. The helper had created an empty `observations/` directory, removed with `rmdir` after confirming it contained no files. |
| `node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_53` (authorized local-browser escalation) | 0 | Captured all 53 rooms from the already-running `http://127.0.0.1:8127/`; no server restart or rebuild. |
| Read-only roster, packet, PNG, ignore, and HTTP integrity check | 0 | 53 packet identities and 159 PNG hashes/sizes agreed with snapshot and receipt; zero errors. |
| `npx tsx devel/assess_difficulty.ts validate --run-dir docs/difficulty_runs/current_53` | 1 | Preparation-stage check, before root acceptance: all 53 `first_pass` files were absent. This historical result is not a current-pass validation. |

The successful helper run took the three idle screenshots at 16, 1516, and 4016 ms per room,
with hints closed and no keys pressed. It recorded zero browser error packets and zero nonzero
retry displays. The capture receipt and source binding were created by the canonical helper; it
does not copy site files into the run. The helper checked the served JS and source-map hashes for
each room. A separate read-only check confirmed HTTP 200-compatible fetches and byte identity with
the on-disk build.

## Frozen identity

| Identity | Value |
| --- | --- |
| Campaign fingerprint | `07b3712a96754a2a5d9054ec1593c80a48da598a0f4e94cf2ce7720f0664f38c` |
| Source fingerprint | `f2ebec9c3e7a6a5803fe486d300c6bfdde21cc6c878514fed1a917f73dda2596` |
| `dist/main.js` SHA-256 | `1ea95ecd937879628b94d2570190d6aeba9353afcb3a4e706084f402843e3030` |
| Source-map SHA-256 | `c67d067b38cead670aea91d72c535294af48eee823e7a41b9bc27c44f0381dd3` |
| Snapshot SHA-256 | `c41ceed84214e6071d6c64ca57debae9b02cf9caf7534b906eedb0bec7b54d8c` |
| Capture receipt SHA-256 | `714efd630a62202b7b40d9288af3554c4244bc7dbc06bafa74cdae4326cfda52` |
| Source-binding SHA-256 | `12b30043581d478ec128b9a10679de700533c6da2d7f7d8f41fb30c81d243f0f` |
| Capture time | `2026-10-18T11:40:16.288Z` |
| Preview | `http://127.0.0.1:8127/` |

Disk and HTTP JS/map SHA-256 values match. All 53 packets match snapshot position, ID, title, and
source-binding packet hash. Each packet has three PNGs; all 159 image SHA-256 values and recorded
byte sizes match. The 53 JSON packets, capture receipt, and source binding total 214 files under
`observations/`. All 159 PNGs are ignored by `.gitignore` rule `/docs/difficulty_runs/**/*.png`;
their combined size is 65,724,831 bytes. The read-only check reported zero mismatches.

## Frozen campaign roster

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
| 10 | `level_53` | Cana-stipation |
| 11 | `level_05` | The Great Cell Shuffle |
| 12 | `level_48` | Gut Reaction |
| 13 | `level_07` | Double Trouble |
| 14 | `level_47` | The Long Gut |
| 15 | `level_41` | Cana's Friendly Fire |
| 16 | `level_11` | Split Decision |
| 17 | `level_49` | Bone Voyage |
| 18 | `level_09` | Two Tons of Trouble |
| 19 | `level_10` | Elevator Etiquette |
| 20 | `level_23` | Cargo Exchange |
| 21 | `level_51` | A Bone to Pick |
| 22 | `level_12` | Marrow Cargo Shuffle |
| 23 | `level_21` | Across the Divide |
| 24 | `level_36` | A Little Push |
| 25 | `level_13` | Gem's Bubble Break |
| 26 | `level_40` | Bursting Point |
| 27 | `level_24` | I've Got You |
| 28 | `level_30` | Your Turn to Carry |
| 29 | `level_44` | Step On It |
| 30 | `level_43` | Cellpool Lane |
| 31 | `level_32` | Bring Your Own Villain |
| 32 | `level_46` | Dead Weight |
| 33 | `level_14` | Bombs Need Personal Space |
| 34 | `level_26` | Bubble Bouncer |
| 35 | `level_28` | Two for One |
| 36 | `level_15` | Special Delivery for Gem |
| 37 | `level_16` | Gem's Liver Lair |
| 38 | `level_18` | A Meeting of Minds |
| 39 | `level_17` | Cana's Upside-Down Commute |
| 40 | `level_25` | Return to Sender |
| 41 | `level_22` | Crossed Paths |
| 42 | `level_52` | Passing Thoughts |
| 43 | `level_27` | Attention, Please! |
| 44 | `level_39` | Boneheads |
| 45 | `level_35` | Pick On Someone Else |
| 46 | `level_31` | Knock It Off |
| 47 | `level_42` | Neural Misfire |
| 48 | `level_38` | Jump to Conclusions |
| 49 | `level_50` | Backseat Driver |
| 50 | `level_29` | Changing Places |
| 51 | `level_33` | No Takebacks |
| 52 | `level_19` | Cana's Control Freak-Out |
| 53 | `level_20` | A Very Bad Day for the Tumor |

## Limits and next gate

Idle screenshots reveal sampled visible states only. They do not establish routes, full mechanics,
control reliability, recovery, human understanding, success, fun, frustration, or difficulty. First
pass remained source-blind and chronological, recording hypotheses rather than invented witnessed
actions and separating puzzle and platforming axes. The complete set is locked and has passed
structural validation. Root reviewed the full set and five qualitative review reports, then released
source for paired second passes at 2026-10-18 12:10:20 UTC. The [active plan](../../active_plans/active/difficulty_53_refresh.md)
defines the remaining gates and author bands. Root accepted preparation before author dispatch. The
timestamped confirmation to the first-gate coordinator was recorded at 2026-10-18 11:47:07 UTC,
after root read the preparation report, independently checked all 53 packet identities and 159 PNG
identities/hashes, and viewed original `level_02_2.png` and `level_53_3.png`. The initial acceptance
time was not separately recorded. Root's later 12:10:20 UTC decision released source for paired
second-pass work; it does not authorize a production change or constitute assessment completion.

## Paired second-pass checkpoint

Source access is released and paired work is in progress. Of 53 records, 28 are author-confirmed:
18 pass per-record validation, 10 need correction, and 25 are not yet confirmed. A's five records,
G's eight records, and I's position 53 record pass; G disclosed an unsourced Python edit, and root
directed that these API-valid bytes remain preserved. C2's positions 12-15 pass, while level_05 fails because
`source_artifacts` includes a journey receipt. D2's nine records still fail
`prior_knowledge[].status` enum validation after a header-only correction. The earlier D2 full-run
validation stopped at missing campaign coverage and did not validate present records. Root is
batching fresh D2 schema/semantic corrections with C2's level_05 evidence-field cleanup. Canonical
full validation/report generation waits for all 53 author-confirmed records to pass.

## First-pass ownership and disclosures

| Band | Positions | Author workspace | Handoff state |
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

Root retains dispatch ownership. Three original author bands did not pass the first-pass evidence
boundary. Their 19 records, 19 locks, and misplaced C handoff were preserved and hash-verified
before those invalid canonical copies were removed. Replacements B3, C2, and D2 completed clean
first-pass handoffs. The 34 unaffected first-pass records and locks, observations, snapshot,
README, source, and build were verified unchanged during recovery. Replacement authors must use
only assigned observation evidence and must not consult retired attempts or their archive. All nine
bands have complete handoffs: 53 candidate records and locks. B3, C2, and D2 confirmed no outside
evidence exposure before their first locks. A's `level_01.created_at` and several of G's authored
`created_at` values are later than their lock times; H also reports later authored timestamps for
positions 48-52. Use lock timestamps and reported prompt/inspection sequences for chronology;
preserve valid records and locks. Structural validation passed with zero issues. Root reviewed all
53 proposed summaries and five qualitative reports, accepted this first-pass gate with concerns, and
released source for the paired second pass at 2026-10-18 12:10:20 UTC. Current46 remains the latest
accepted expert map until whole53 assessment acceptance.

## First-pass gate decision

The first-pass structural proof is recorded in [`tests/_temp/difficulty53_first_gate/REPORT.md`](../../../tests/_temp/difficulty53_first_gate/REPORT.md) and its pre-release machine checkpoint in [`receipt.json`](../../../tests/_temp/difficulty53_first_gate/receipt.json). The checker found 53 matching record/lock pairs, validated all 53 records and lock fingerprints, all 53 current packets and 159 image references, null observed feedback throughout, and zero structural issues. The receipt's `source_release` field records the gate state at validation time before root's later release decision.

Root reviewed the complete set and five qualitative reports: [A, positions 1-5](../../../tests/_temp/difficulty53_first_review_1/REPORT.md), [E, positions 25-31](../../../tests/_temp/difficulty53_first_review_2/REPORT.md), [F/G, positions 32-45](../../../tests/_temp/difficulty53_first_review_3/REPORT.md), [H/I, positions 46-53](../../../tests/_temp/difficulty53_first_review_4/REPORT.md), and [replacement bands B3/C2/D2, positions 6-24](../../../tests/_temp/difficulty53_replacement_first_review_sol/REPORT.md). Review concerns include citation semantic support, a missed passive-motion observation, hazard and cooperation anchors, some hero-role specificity, and unreliable authored timestamps. Preserve all first-pass bytes and carry these concerns into paired comparisons. Root accepted the first-pass gate with concerns and explicitly released source for paired second passes at 2026-10-18 12:10:20 UTC. The full assessment remains open.
