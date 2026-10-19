# Villain boarding prototype

**Status: DONE_WITH_CONCERNS; root accepted 2026-10-18 23:51:45 UTC.**

The bounded question was whether a launch-side loading dock gives Pac a short, physical job while
preserving `level_32`'s ferry/range puzzle, Isp's FLOAT/latch route, and both exits. The fixture only
adds a contiguous dock and shifts Pac/Gem's private starting positions. It adds no pads, barriers,
controls, attack changes, physics, or campaign registration. It leaves the upper and lower routes
intact.

The ordinary-input route pushes Gem from the dock onto the ferry, boards POWER, lets the powered
ferry carry Pac and Gem, then uses the existing Isp bubble and upper latch. Pac exits by jumping over
the settled Gem. A small Pac overshoot followed by a left correction rejoins POWER and completes the
same route. The detailed intervals, snapshots, events, commands, and hashes are in the
[prototype report](../../../tests/_temp/villain_boarding_prototype/REPORT.md).

The resolved candidate was frozen as `tests/_temp/villain_boarding_delivery/candidate.json` before
registration. The full current58 registry snapshot is
`tests/_temp/villain_boarding_delivery/registered_before.json`. The registered source keeps the
original title and changes the hint to explain loading, the POWER wait, and Isp's FLOAT/latch job.

## Delivery status

- [x] Freeze the pre-change full registry and resolved private fixture.
- [x] Apply only the authorized `level_32` spawn, dock, Gem position, and hint delta.
- [x] Run ordinary registered-source success and 12-frame overshoot/10-frame recovery using public
  simulation functions; retain full traces and failures under
  `tests/_temp/villain_boarding_delivery/`.
- [x] Compare the post-change registry to the frozen 58-ID/order and definition snapshot.
- [x] Pass focused source formatting.
- [x] Root runs the canonical 96-check gate, production build, and two browser smokes.
- [x] Capture and inspect V0 initial dock view; root confirmed material Pac/Gem overlap.
- [x] Apply root-authorized narrow V1 layout correction; original V0 source and images remain in
  history.
- [x] Capture V1 initial, loading, ride, FLOAT, and completion views. Pac, Gem, and POWER are
  separated in the V1 opening.
- [x] Capture a non-truncating upper-latch view and a passing loading-position-correction browser clear.
- [x] Begin Phase B capture after the Phase A root gate.
- [x] Run the focused seeded completion, save, Next, and reload flow after the opening is readable.
- [x] Obtain fresh SPEC, QUALITY, and integration reviews after browser evidence; all three passed.
- [x] Root reviewed source, comparisons, route driver, receipts, and all six original V1 views; accepted
  the bounded milestone as DONE_WITH_CONCERNS at 2026-10-18 23:51:45 UTC.

Review receipts: [SPEC](../../../tests/_temp/villain_boarding_spec/REPORT.md),
[QUALITY](../../../tests/_temp/villain_boarding_quality/REPORT.md), and
[integration](../../../tests/_temp/villain_boarding_integration/REPORT.md). Integration noted a
nonfunctional wording correction, now reflected in the design decision: the ferry travels 100 pixels
instead of the prior 200, while its far stop remains 280 and period remains 8. No code change or
rereview was needed.

The private fixture and its historical route, recovery,
and failed traces remain unchanged. Phase A evidence and hashes are recorded in the
[Phase A report](../../../tests/_temp/villain_boarding_delivery/PHASE_A_REPORT.md). V0's visual stop,
V1 browser captures, and seeded progression flow are recorded in the
[Phase B report](../../../tests/_temp/villain_boarding_delivery/PHASE_B_REPORT.md).
