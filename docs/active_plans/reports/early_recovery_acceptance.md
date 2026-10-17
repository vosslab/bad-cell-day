# Early co-op recovery acceptance

## Current status

**ROOT ACCEPTED DONE_WITH_CONCERNS.** The continuous gameplay goal remains ACTIVE. The native clone proof is `FEASIBLE_WITH_LIMITS`. Root accepted only the two static catch folds:

- Level 05, position 7: `{x:450,y:470,width:50,height:14}`.
- Level 07, position 8: `{x:950,y:480,width:50,height:14}`.

Production implementation, source preservation, build, focused browser gameplay, and fresh reviews
are complete. Integration returned PASS WITH LIMITS with no gameplay or architecture blocker; root
accepted the bounded milestone as DONE_WITH_CONCERNS.

## Native feasibility evidence

The native report records ordinary-route completion in both baseline and candidate clones. A
level 05 near-bank miss dies at frame 261 in baseline; the clone report observes support by frame
244, then the route jumps back to the island, restores STOP and STEADY duties, and clears both exits
at frame 2123. The production replay scans each frame and records first fold support at frame 235.
These are separate measurements; they are not claimed to agree or denote identical contact times.
A level 07 near-bank miss dies at frame 1507; clone recovery catches at frame 1483, returns to
STEADY, restores Isp's RESCUE duty, and clears both exits at frame 2194. Production replay also
records first fold support at frame 1483. Both ferries remain part of ordinary completion. The
recorded bounded shortcut attempts do not prove that every exploit is absent.

Level 07's early walk-off can still miss the fold. The evidence covers a near-bank dismount, not
every fall. Native simulation does not establish browser presentation, human discovery, enjoyment,
or paired-control comfort. Full traces, ten input paths, limits, and reproduction commands are in
`tests/_temp/early_recovery_native/REPORT.md` and
`tests/_temp/early_recovery_native/paths.json`. These are ignored one-time files and are not
retained in the repository.

## Acceptance gates

| Gate | State | Evidence |
| --- | --- | --- |
| Native clone feasibility | COMPLETE | `FEASIBLE_WITH_LIMITS`; see linked native report and path archive. |
| Production implementation and real-source routes | COMPLETE | Exactly two folds; other 31 definitions unchanged; both ordinary and both recovery replays clear both exits. See implementation report and JSON receipts. |
| Build and gameplay smokes | COMPLETE | Root reports code gate: 90 Node checks plus type/lint/format; focused Python source-line check: 349 passed, existing 925-line warning; official Playwright smokes: 2/2. Served and local built hashes match. |
| Focused browser catch and recovery | COMPLETE | Four aligned views and two default views exit 0 with zero deaths/errors; both room full clears complete. Level 07 frame 1490 is the supported landing; frame 1483 is airborne. |
| Fresh SPEC, QUALITY, and integration reviews | COMPLETE WITH LIMITS | SPEC PASS WITH LIMITS; QUALITY PASS WITH LIMITS; integration PASS WITH LIMITS, no gameplay/architecture blocker. |
| Root verdict | ROOT ACCEPTED DONE_WITH_CONCERNS | Continuous gameplay goal remains ACTIVE. |

The frozen `current_32` difficulty assessment remains unchanged historical guidance. The `current_33`
effort remains capture-only and deferred: no assessment was accepted, no scores or locks exist, and
all 33 unaccepted drafts were removed after confirming they were untracked and had no locks. This
gameplay milestone creates no difficulty scores and does not require a full 33-room assessment before
another gameplay improvement. Scripted success does not measure human fun, discovery, novice
suitability, or shared-keyboard comfort.

## Integrated receipts

Root reports `./check_codebase.sh` exited 0 with 90 Node checks plus TypeScript, lint, and format;
the focused Python source-line check exited 0 with 349 passed and its existing 925-line warning;
`./run_playwright_tests.sh --build` exited 0 with 2/2 smokes. `assertBuiltSourcesCurrent` passed, and
main.js, main.js.map, and index.html served over HTTP returned 200 and matched their built disk
hashes: main.js `890a856da0dd00c4433a425572238fd493a7df7fcdba47045c595b8e6bc81a6d`, main.js.map
`a7c40cac61a9c625e1c0cddc8daaf2a0284ceed349c458d983643eeed07a1dd6`, and index.html
`15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`.

The aligned catch/clear captures and two default captures exited 0. Level 05 and 07 full clears
reported `phase=complete`, zero deaths, and no page or console errors. Level 05 browser catch state
shows Pac supported at x470; level 07's initial aligned frame 1483 is airborne, while the separate
frame-1490 capture shows Isp at x970 with feet at fold top y480, zero deaths, and no errors. The
initial aggregate browser run exited 1. Its initial report wrongly attributed the failure to
level 05; retained images and timestamps show the level 05 views completed before the later failure.
The corrected four-view alignment and default capture runs exited 0. The review reports retain these
distinctions and limits.

Native recovery, production replay, browser captures, and review reports remain under
`tests/_temp/early_recovery_{native,implementation,browser_alignment,landed_capture,spec_review,quality_review,integration_review}/`.
