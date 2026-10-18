# Movement follow-up acceptance

Root accepted this bounded movement milestone as **DONE_WITH_CONCERNS** on 2026-10-17 at
15:21:55 UTC. Candidate B adds a recovery surface to Boneheads (`level_39`); candidate A, Fold and
Ferry, failed its reciprocal-role and clear criteria and was not promoted. The broader gameplay goal
remains active. The [plan](../active/movement_followup.md) records the final ledger.

## Accepted recovery

The production delta adds static platform `lower_return_fold` at
`{ x: 940, y: 568, width: 50, height: 14 }` and changes only the final hint sentence to "Miss the
lower jump? Jump out from the catch fold below and try again." The assembled comparison changes
only the `level_39` hint and platform list; the other 42 definitions and their order are unchanged.
The normal route clears at frame 694 and the late-miss recovery at frame 778, both with zero deaths
and both exits. The recovery trace lands Pac on the fold before a fresh jump and reboarding; TISSUE
HOLD is active for 183 frames and Cana's attack remains active.

Root reports 96 code checks and 2/2 standard build smokes passed. The current bundle SHA-256 is
`9f5bd1b40c8318555e41a704c1bdcca6aa016fb2bc2cbfd470aeab5bfd08c5fc`; disk and the bundle served
at `127.0.0.1:8127` match, and all 68 bundled sources match. Root reviewed the normal-clear,
caught-state, and recovery-clear captures, accepting sampled legibility. Fresh SPEC, distinct
QUALITY, and integration reviews accept with concerns.

## Rejected room candidate

Private candidate A, Fold and Ferry, remains unregistered and private. Its 3458-frame attempt did
not clear, the proposed first partner boost was unnecessary, and ordinary movement let both heroes
ride the 90-pixel carrier together, erasing the intended role split. No production promotion or
room was approved. This rejects this candidate only; it does not establish that all moving-platform
cooperation fails.

## Evidence limits

The browser and native routes are bounded scripted evidence. The observed recovery is supported by
the three reviewed captures and tested route, not by a human play session. Fun, discovery, comfort,
and difficulty remain unmeasured. The bypass evidence is not exhaustive, and no permanent
layout-specific test is claimed. Temporary receipts remain in `tests/_temp/`: `movement_followup_plan`,
`movement_carrier_private`, `boneheads_recovery_authoring`, `boneheads_recovery_browser`,
`boneheads_recovery_public_spec`, `boneheads_recovery_public_quality`, and
`movement_followup_integration`.
