# Current46 difficulty assessment review receipt

**Status:** ROOT ACCEPTED `DONE_WITH_CONCERNS` at 2026-10-17 22:15:47 UTC. The corrected findings
synthesis and all six independent Plan, Test, Style, Docs, Legacy, and Comment audit passes are
complete; Test and Legacy had no findings. Both deduplicated documentation findings and later
clerical items are closed. Targeted QUALITY accepts; separate integration accepts with concerns.
Current46 is the latest accepted frozen expert assessment, and current44 is a historical accepted
checkpoint. The active source/build freeze ended at root acceptance while this run's captured
artifacts remain immutable. The broad continuous gameplay goal remains active.

This receipt preserves the essential accepted evidence and review decisions for committed readers.
Temporary receipts under `tests/_temp/` are local working evidence and may be absent from a normal
Git publication. This document records acceptance of the bounded assessment; it does not authorize
a gameplay feature.

## Assessment evidence

The frozen source-bound snapshot covers all 46 registered campaign positions and 46 room dossiers.
The canonical command
`npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_46` exited 0 in
41.390 seconds and generated the [campaign map](../../../devel/difficulty/campaign_map.json),
[full report](../../LEVEL_DIFFICULTY_REPORT.md), and
[campaign chart](../../difficulty_campaign.svg). Their identities
and hashes are recorded in the `README.md`.

The first authorized report attempt exited 1 in 3.268743 seconds because six paired records had
stale inherited source-fingerprint headers: `level_17`, `level_18`, `level_22`, `level_25`,
`level_27`, and `level_39`. The other 40 matched. Root approved a six-header-only repair; canonical
validation then exited 0 for all 46, and the report retry passed as stated above. Campaign and
source fingerprints are `33c7df0d3c05176e5cf3e683f387db61075b3061f16bbde39146351c1791cc93` and
`938dbb3d1c91889d072648c7a6c2ed48c6a9d88c6482297896c6b599a6617b4c`. The frozen bundle hashes are
`bf1830b26f073f256524d823c52478df75343356207d3f7f90c56f3ff7f57e45` (`dist/main.js`) and
`a09105bf31f4de5edc5fb48820ea9e1517ab9dcdf634ca06b82aaf8c7e1976ff` (source map).

The run has paired records and locks for all 46 positions and 138 ignored idle PNGs. The canonical
report covers 46 positions and 46 dossiers. Final puzzle estimates span 43-82 and platforming
estimates 11-68; clarity and recovery burdens span 1-3. All 46 first-pass platforming axes and
control-friction ratings are unknown, as are four first-pass puzzle axes. The 16 automated review
candidates are prompts, not conclusions or thresholds.

Scripted feasibility replayed 46 cases across 43 distinct level IDs: 44 completed with both exits
and zero deaths; two historical inputs stopped while still playing. Accepted same-source follow-up
routes complete `level_08` at frame 1,122 and `level_36` at frame 702, with both exits and no deaths.
The new `level_44`, `level_45`, and `level_46` production routes have their own accepted evidence:
[Step On It](step_on_it_acceptance.md), [Gut Feeling](GUT_FEELING_ACCEPTANCE.md), and
[Dead Weight](DEAD_WEIGHT_ACCEPTANCE.md). These traces establish scripted route feasibility only.
Idle captures, expert ordinal estimates, and scripted routes do not measure human discovery,
understanding, success, recovery, enjoyment, comfort, control friction, or difficulty.

## Review decisions

Fresh factual source SPEC reviews examined all 46 author-confirmed, per-file-validated records
across the seven paired-assessment bands and routed corrections back for re-review. Accepted
correction work covered the early six-record and B four-record rubric batches, plus the six-header
fingerprint repair. The accepted final findings synthesis closed its
three targeted factual wording groups: position 6's Gem step and Pac-powered lift; the platforming
axis descriptions for positions 10, 45, and 46; and finale position 46's ferry, bridge, pads, and
interference. Position 34's attribution and the six-section campaign chronology remain intact.

The original combined synthesis review raised two findings: campaign-progression interpretation
and one example's position/mechanic attribution. Later targeted wording review grouped the repairs
into the three factual groups above. The final synthesis SPEC accepted those corrections with no
material contradiction; it was a narrow synthesis review, separate from the six global QUALITY
passes. Its dispositions and evidence are summarized here so the accepted decision survives without
the ignored temporary receipt.

All six fresh QUALITY passes completed: Plan, Test, Style, Docs, Legacy, and Comment. Test and
Legacy found no findings. Plan, Docs, and Comment identified the same stale status; Style identified
that stale status and ignored temporary-evidence links. Deduplication produced exactly two findings:
the broken-publication links and stale current-facing status. Both findings have been repaired.
Targeted SPEC accepted the repairs and targeted QUALITY closure accepted. Separate integration
accepted with concerns. Root accepted the bounded assessment as `DONE_WITH_CONCERNS` at
2026-10-17 22:15:47 UTC.

The audit relied on the accepted run ledger, generated artifacts, findings synthesis, final SPEC
decision, source/correction review history, and scripted-feasibility evidence. No aggregate report,
full test suite, build, browser run, or human play session was rerun for the documentation audit or
this closeout. The source/build freeze ended at root acceptance; this run's captured artifacts remain
immutable, and later gameplay work does not require rebasing or recapturing them. No remote
publication is claimed.

## Current direction

Root parked the named generic villain-baited fork/reunion concept after a read-only novelty check
found substantial overlap with **Neural Misfire**, **Pick On Someone Else**, **Gut Instinct**,
**Changing Places**, and **Crossed Paths**. Navigation and cooperation variety remain priorities;
recombinations of existing mechanics and fresh physical geometry remain welcome, with no requirement
to invent an engine mechanic or prove mathematical uniqueness. After assessment acceptance, the
next gameplay work is a private navigation-focused prototype with distinct partner jobs and
forgiving recovery, before any production registration. Its exact layout, organ, and placement
remain to be designed. A human walkthrough may add useful evidence but is not a development gate.
The current assessment authorizes no feature, score change, or campaign reorder.
