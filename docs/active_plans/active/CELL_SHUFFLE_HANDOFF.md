# Cell Shuffle handoff teaching

## Outcome

At campaign position 10 of 45, the subtitle teaches Pac to hold STEADY until Isp presses RESCUE.
The hint orders Isp re-braking at STOP, Pac holding STEADY while Isp jumps over him to RESCUE,
Pac following safely, and Gem's bubbles returning after a brief interruption. Only these two
strings in `src/levels_tutorial.ts` changed. Mechanics, geometry, timing, labels, and attacks remain
unchanged.

The release probe shows one directed early-release route can collapse the bridge and kill Isp
before RESCUE; it does not show how often players make this mistake or whether the revised copy
changes that behavior.

## Scope and evidence

- The accepted pre-edit `dist/main.js` was SHA-256
  `09bf03a284d259660a93ba5e29aae9038e4c9c7c7f78a4d0bf4e743337cc8907`. The independent source-map
  comparison found all 72 mapped sources present, 71 byte-identical, and only
  `src/levels_tutorial.ts` changed. Reverting exactly the two strings restores the old embedded
  tutorial source hash `fa5ea195aeed04f497f8f0f6c146a2928b28c7e010f9cc559b28ec6cb4273e7a`; the edited
  source hash is `41c3dc60e7beb5cbb7b24212961c81447026b8654791d4ed8cb1982c658cdc0e`.
- Root reports the canonical source checks (96), TypeScript, lint, and format checks passed, as did
  `run_playwright_tests.sh --build` (2/2). The current built and captured `dist/main.js` hash is
  `1f086fe31c73720581f50f0e85a3b2d8c0a04323fae9c8f3d472dede42dc53a1`. The preserved capture
  receipt records two `level_05` views in `playing`, `errors: []`, at
  `2026-10-17T19:25:25.948Z`; root reviewed both original captures and accepted sampled fit and
  readability. See the [closeout evidence](../../../tests/_temp/cell_shuffle_handoff_closeout/REPORT.md).
- The native probe's ordinary current45 route completed in 2,425 frames without death. Its directed
  early-release branch released Pac from STEADY and ended in Isp's death at frame 1,751 before
  RESCUE. The retained evidence is a new current45 rerun, not recovered historical current44 data.
  The ignored historical raw `evidence.json` was overwritten and its original bytes are unavailable;
  the historical report is unchanged. All 44 frozen scores remain historical.
- SPEC accepts with concerns. QUALITY accepts with concerns; its low, nonblocking clarity note is
  that `lands and brakes again` requires inferring the visible STOP pad. Integration accepts with
  concerns, and targeted changelog correction re-review accepts. Root accepted this bounded
  milestone as `DONE_WITH_CONCERNS` at 2026-10-17 19:31:35 UTC.

## Status and limits

Source, build, standard browser, and focused capture gates pass. SPEC, QUALITY, and integration
accept with concerns; targeted changelog correction re-review accepts. Root accepts the bounded
milestone as `DONE_WITH_CONCERNS` at 2026-10-17 19:31:35 UTC. This is scripted and sampled visual
evidence only: human readability, discovery, effectiveness, enjoyment, and fun remain unmeasured.
The broad gameplay goal remains ACTIVE. No full 45-room replay is required for this bounded text
change.
