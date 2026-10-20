# Bridge readability acceptance

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** Root accepted the bounded Level 3 bridge-readability
milestone at 2026-10-17 09:45:16 UTC after viewing all five fresh built-browser captures. The
continuous gameplay goal remains ACTIVE.

## Result

The shared fragile-surface renderer shows an interior bruise and progressively deeper, wider tears
from existing occupancy/collapse progress, with the landing rim fixed. Stabilization preserves the
green appearance; inactive surfaces retain the outline; existing occupancy and reset behavior clears
the warning. The Level 3 subtitle is exactly **"Pac holds STEADY until Isp reaches RESCUE."** No
mechanics, timers, state, configuration, HUD, geometry, attacks, or assets changed.

The source change was limited to `src/render_game.ts`, `src/render_tissue.ts`,
`src/types/anatomy.ts`, and `src/levels_tutorial.ts`. Final `src/render_tissue.ts` SHA-256 is
`97dcf5a3182a9809647eae096a888374bf4995e42b0e87792a53f8294ee8b880`. The served `dist/main.js`
matched the capture build at SHA-256
`3e7920712fdd78252fbba1a976850bfb7b81bee5d4154c75b1b8ee86415e02b1`.

## Evidence and review

- Temporary native proofs show the ordinary rescue clear and the accepted both-dunks route, including
  four-second villain returns and two bridge-collapse resets. Both routes complete with zero retries.
- A temporary renderer proof checks progressive bruise/tear commands, stable suppression, inactive
  surface behavior, fixed anchors, and the unchanged top rim.
- The first built-browser visibility review requested a focused warning-visibility correction. Fresh
  source SPEC accepted; corrected QUALITY and integration accepted with concerns.
- Root inspected all five fresh captures: early warning, later warning, Gem return, stable green
  support with both villains returned, and the ordinary rescue clear. The exact subtitle appears in
  all five; the warning is more pronounced late, and the landing rim remains visually fixed.
- Final `./check_codebase.sh` passed with exit 0, including 93 repository checks plus TypeScript and
  lint/format checks. `source source_me.sh && ./run_playwright_tests.sh --build` passed with exit 0,
  including the two standard smokes. No new permanent tests were added.

The raw captures and helper receipt are in
`REPORT.md`.
Implementation proofs and fresh reviews are retained under `tests/_temp/bridge_readability_*` and
`tests/_temp/bridge_warning_*`.

## Limits

This evidence establishes scripted route behavior and rendered visibility in the captured states.
The human report of lateral bridge motion and fall frequency remains unresolved. The work does not
establish human discovery, comfort, readability, or reduced falls, and does not claim to fix the
reported motion.

The current41 difficulty assessment remains frozen to its accepted pre-change source/build baseline;
its records, locks, map, report, and hashes were not refreshed. Do not treat its capture as matching
the live presentation source. No follow-on feature queue is approved by this closeout.
