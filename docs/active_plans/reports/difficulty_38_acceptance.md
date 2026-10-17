# Current38 assessment acceptance

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** The complete 38-room source-aware assessment passed
its full validator and report generation. Fresh SPEC reviews accepted the corrected records, a
different fresh QUALITY review accepted the findings, and integration accepted the composition with
concerns and no material finding or drift. Root accepted the assessment as bounded expert design
evidence. The source/build snapshot remains frozen.

## Scope and bindings

The assessment covers the captured campaign order and source/build snapshot recorded in the
[current38 run ledger](../../difficulty_runs/current_38/README.md). Its provenance binds the
campaign roster SHA-256 to
`9ab4e8281eeb10cab2a3bb37b3a4d755dc0cf97c8e072202cdd9b4b542912b1f`, the source fingerprint to
`a5a604946108f75bd072a96d0c659091b106cdd462f1a8a8bacd3210a0d1432c`, `dist/main.js` and its served
copy to `a3ddac4ab9596cb5a214e17f13d836be890ca401f937219d25d132e3d854522e`, and the source map and
served copy to `3df9852c89b5d3ab4a5bd015580ca6e0173ccc951c938f9ce9f9b537c23e6c59`. The capture
receipt SHA-256 is
`460b2d93ad365afef8b5f05abb19be795da6f7fa89e0eb37d80af27dbbad2042`. The run README is the
source of detail for these bindings and capture custody.

The roster contains lungs 1-5, intestine 6-10, marrow 11-17, liver 18-26, brain 27-37, and tumor
38. `level_38` is displayed at position 34, between `level_31` and `level_29`; `level_20` remains
position 38 and the finale. Stable room IDs and display positions are distinct.

## Work and review

All 38 first-pass records and immutable locks were accepted with concerns by independent review
before source release. All 38 paired source-aware records were completed; each author's local
`validateSecond` passed. Corrections were re-reviewed by SPEC, including the corrected 15-record
batch and final spot review of levels 05, 11, 12, and 14. Full current38 validation and report
generation passed, producing the [campaign map](../../difficulty_runs/current_38/campaign_map.json),
[report and dossiers](../../difficulty_runs/current_38/report/LEVEL_DIFFICULTY_REPORT.md), and
[campaign chart](../../difficulty_runs/current_38/report/difficulty_campaign.svg). The
[cross-room findings](../../difficulty_runs/current_38/FINDINGS.md) summarize profile shape,
uncertainty, and candidate priorities.

Fresh QUALITY independently recomputed both axes for all 38 rooms, checked evidence and synthesis
against records, source, and retained artifacts, and accepted the work with concerns. It found no
correction necessary. Its concerns are the disclosed chronology, source-exposure, native-route, and
human-evidence limits below. The review report is retained locally at
`tests/_temp/difficulty38_quality/REPORT.md`. Fresh integration accepted with concerns and no
material finding or drift; see `tests/_temp/difficulty38_integration/REPORT.md`. Root accepted
current38 as DONE_WITH_CONCERNS.

## Evidence limits

The first pass used idle-only opening packets. Paired source-aware walkthroughs add authored source
and route evidence, not player outcomes. Eighteen first-pass `created_at` values are later than their
lock times; reviewers used actual lock times, hashes, and per-author sequence for chronology and
preserved all locked records. Three packets record passive idle transitions at levels 12, 23, and 36;
their causes are unknown. During source work, g3 and g6b reported title/ID-only historical search
hits. g1 reported seeing a historical level 03 score after drafting levels 02, 01, and 04 but before
writing levels 03 and 37; the level 03 source-aware estimate is therefore not independent of that
historical judgment. First-pass blindness remains intact.

All 38 control-friction values are unknown because source mappings and native input traces do not
verify browser keyboard, focus, or input handling. Five retained native traces cover levels 04, 05,
12, 37, and 38, not the full campaign. The level 05 mandatory route completes both exits at 10.98
simulated seconds after STOP restores before Pac crosses to STEADY. Pac stages on the recovery fold;
this route is not a ferry ride and has no cargo. The level 12 no-cargo model proof completes both
exits at 8.76 simulated seconds with cargo unchanged. These traces establish scripted feasibility
for their exact inputs only.

Scores are ordinal expert judgments, not measured human difficulty, success, discovery, enjoyment,
frustration, completion time, learning, or two-person keyboard comfort. No human pair, complete
campaign journey, or browser keyboard-control study is claimed. The reported side-to-side bridge
motion at displayed position 3 remains unresolved; authored source without horizontal motion does
not disprove the report. A Cargo Exchange first-time pair observation would be useful design evidence,
not a general gate for future work.

## Next direction

Root approved the bounded [pad role cues plan](../active/pad_role_cues.md). It refines role-card
wording in the anatomical context and labels level 07's STEADY effect as
**STEADY BRIDGE / PARK FAR FERRY**. Players infer the release timing. Preserve room geometry,
controls, effects, and the release puzzle; keep the optional hint's full sequence. Do not add a generic
feedback framework or show the full solution by default. The plan owner will synchronize its copy
before implementation. Source implementation waits for the current38 plan and run README closeouts,
then proceeds against the frozen snapshot. This is a sequencing dependency, not an additional human
approval gate. The [gameplay direction ledger](gameplay_direction.md)
records the selection and sequencing. Preserve the accepted finale and other accepted rooms. Do not
select a room to meet a quota.

The current38 [active plan](../active/difficulty_38_refresh.md) records the method, custody, and
acceptance history. Game build and browser acceptance belong to earlier gameplay receipts.
See the [level 3 acid-push receipt](level3_acid_push_acceptance.md),
[level 37 receipt](LUNG_RECOIL_ACCEPTANCE.md), and
[level 38 receipt](split_launch_acceptance.md). This data-only assessment adds no build, browser,
human-play, or difficulty gate.
