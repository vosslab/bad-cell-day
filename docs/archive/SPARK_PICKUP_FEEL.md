# Spark pickup feedback

**Status:** ROOT ACCEPTED `DONE_WITH_CONCERNS` at 2026-10-18 04:02:55 UTC. This bounded presentation
milestone is closed; the broader continuous gameplay goal remains active.

## Approved scope

Show a brief owner-colored Canvas ring at each newly collected Spark's authored position. Keep the
response local and modest. Normal motion expands and fades the ring over 0.45 seconds; reduced
motion uses a stable mark for the same interval. `any` Sparks stay purple. Collection rules, rewards,
controls, HUD, audio, and simulation state remain unchanged.

## Implementation boundary

`src/collectible_feedback.ts` observes copied collection transitions after fixed steps. Runtime owns
its history and resets it on level start/replay, retry, and automatic restart after death. Pausing
freezes its age; dead and completed states suppress active marks. `src/render_game.ts` reads an
optional readonly snapshot, so direct render previews continue to work without feedback.

## Acceptance

Source implementation, the existing root combined checks/build/two browser smokes, focused observer
proof, and built-game capture review were accepted with concerns after fresh SPEC, QUALITY, and
integration reviews. The root combined gate predates the later screenshot-runner preference
correction; that tool-only change had scoped Node syntax and Prettier checks, and normal/reduced-motion
captures recorded the applied preference in each view receipt. The combined gate was not rerun after
that correction.

The corrected proof places collection at step 87 and ends at total step 155, after 8 aging steps and
60 expiry-check steps; it does not establish the exact expiry step. The former 155- and 215-frame active-labeled samples are expired and were preserved;
the accepted retakes identify a visible blue ring in the 125-frame normal view and a visible but
partly overlapped stable ring in the 115-frame reduced-motion view. The ring remains distinct from
Gem's yellow bubble; the reviewed images show no obscured feet or warnings. This is sampled visual
evidence, not a full lifecycle browser matrix or evidence of player discovery, interpretation,
enjoyment, or comfort. Pause freezing is supported by skipped-update proof; reset and terminal
suppression are supported by source inspection.

The dedicated capture runner accepts an optional per-view `reducedMotion` value, defaults to normal
motion, applies the browser and saved preference, and records the applied value per view. It adds no
game option or framework. Implementation, correction, capture, and fresh review receipts are under
`tests/_temp/spark_pickup_feel_{implementation,spec,quality,integration}/`,
`tests/_temp/spark_capture_evidence_correction/`, and `tests/_temp/spark_pickup_feel_retake/`.
