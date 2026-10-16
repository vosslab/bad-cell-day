# Current 32-room difficulty run

This frozen run contains the paired expert assessment for all 32 rooms in the recorded campaign.
Full validation and report generation passed. Fresh SPEC, different fresh QUALITY, and integration
reviews returned ACCEPT_WITH_CONCERNS. Root accepted the assessment as DONE_WITH_CONCERNS. No data
or output blocker was identified. This is the frozen R3 baseline; its estimates are not fresh for
source changed after that build.

The [campaign map](campaign_map.json), [generated report](report/LEVEL_DIFFICULTY_REPORT.md),
[campaign chart](report/difficulty_campaign.svg), and [cross-room findings](FINDINGS.md) are the
current generated outputs. The report links the 32 room dossiers. For example, final puzzle
estimates are 57 for `level_02@1`, 79 for `level_29@30`, and 93 for `level_20@32`; these are
ordinal expert estimates, not measured player difficulty. Every final control-friction value is
unknown (`null`). The report keeps clarity and recovery as separate burdens.

The [acceptance ledger](../../active_plans/reports/difficulty_32_acceptance.md) records the frozen
input fingerprints, review dispositions, and concerns. The [assessment plan](../../active_plans/active/difficulty_assessment.md)
records this closeout; the approved next step is in
[recurring_marrow.md](../../active_plans/active/recurring_marrow.md). The continuous game-development
goal remains active.

The auxiliary R2 full-campaign/save journey differs from the frozen R3 baseline only in inactive
Cana's display position (x80 to x750). R3 captures and focused normal/reduced-motion browser checks
are separate evidence. This boundary does not establish player fun or control comfort.

`snapshot.json` records the campaign roster and source fingerprint. `observations/` contains one
JSON packet per campaign position, three PNG captures per packet, a capture receipt, and a capture-
time source binding. PNG names use the stable room ID and frame number, such as
`level_32_1.png`. Frames are taken at approximately 0, 1.5, and 4 seconds after room entry.

All 32 paired first-pass records and locks are present and immutable. Root reviewed their hashes and
order, sampled all four author windows, and confirmed the blind-process statements before source
release. The same paired assessors then completed the source-aware pass. The SPEC review required
corrections to several route/rationale details and unsupported early control-friction values; no
first-pass lock changed. The final map, report, chart, dossiers, and findings were generated from
the completed pair set.

The selector was seeded with earlier room IDs marked complete only to make later rooms selectable.
No keys were pressed. Hints remained closed. These are idle first-state observations; they do not
show practice, mastery, routes, mistakes, feedback after actions, recovery, human difficulty, or
two-person keyboard comfort. Screenshots are authoritative for canvas visibility. Visible DOM
text is recorded separately. Retain the 96 ignored PNG captures locally for this assessment's
evidence lifecycle; they are intentionally not checked in. Local evidence paths in the review
records are retained as inline code references, not repository links.
