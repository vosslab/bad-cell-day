# Current58 difficulty assessment

Status: Root accepted the 58-room expert assessment with concerns. The source/build freeze is
released; the captured run remains frozen to its recorded identity. `current58` is the latest
accepted map, and `current57` remains immutable historical evidence. This assessment estimates
expert difficulty; it cannot establish human play, comfort, or enjoyment. The separate current58
browser journey has completed; its evidence is summarized below.

## Scope and identity

- Run: `docs/difficulty_runs/current_58/`; prior `current57` remains historical.
- Snapshot: 58 rooms; campaign fingerprint
  `cb8e80d8cea154fd965e145b054af6b8cdaa71976cfd5940156924d496a4743c`; source fingerprint
  `d0e7ec85b28c978cd4d9a18d61c2f71659ada36d7a9e18d0939b9a38ee893583`.
- Frozen build: `dist/main.js` SHA-256
  `02843258aad6595151f26da97ebaed6a4157aa8fd870f82a5c30adfe2ddb2dd9`; source-map SHA-256
  `357ce85e9e3213d4134b47479e2e4b4c1aeb27fa028e20fc2bb0d1f39d76dfc5`.
- Capture and identity evidence is recorded in the `README.md`.

## Assessment gates and closeout

1. Fresh authors work in chronological bands 1-17, 18-33, 34-45, and 46-58. Use only the rubric,
   types, and current or earlier observations; write and lock each record before opening the next
   packet. Keep source, hints, solutions, historical assessments, and future packets closed.
2. Root reviews every first-pass record and lock before releasing source access for paired second
   passes.
3. The same authors complete paired second passes on mechanics, legal routes, roles, mistakes, and
   prior learning. Cite each locked first-pass hash and preserve unknowns by axis.
4. Validate and generate the report with the canonical CLI. Keep source and build unchanged through
   both passes and final assessment acceptance. Obtain fresh scoped SPEC, QUALITY, and integration
   reviews, then have root accept and refresh latest-map links.

The first-prompt level 02 check exited 0. All original first-pass bytes match their unchanged locks,
and all 58 paired records cite the matching first-pass hash. Root accepted the assessment with
concerns after fresh SPEC passed and QUALITY and integration passed with no material issues. Final
canonical validation exited 0 and confirmed the deduplicated report artifacts; the separate report
regeneration command's exit status is unknown and is not claimed. See the accepted `README.md`, [report](../../LEVEL_DIFFICULTY_REPORT.md), [campaign map](../../../devel/difficulty/campaign_map.json), and [campaign difficulty index](../../LEVEL_DIFFICULTY.md). Idle captures and expert estimates do not represent a player journey or measured human difficulty or fun.

## Separate browser journey

Root verified a fresh empty-save journey through all 58 rooms in one attempt each, with zero
retries, ordinary Next progression, the Patient Rescued ending, and all ordered room IDs preserved
after reload. The frozen bundle hash matched the assessment build; browser errors and failed requests
were empty. This prepared-runtime evidence does not measure human play, comfort, or enjoyment. See
the `journey_receipt_2026-10-19T12-08-02-083Z.json`.
