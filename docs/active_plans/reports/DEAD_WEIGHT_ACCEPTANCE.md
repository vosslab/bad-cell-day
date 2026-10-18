# Dead Weight Production Status

**Status:** root accepted the bounded production milestone as `DONE_WITH_CONCERNS` at 2026-10-17
20:45:51 UTC. Current-source code/build/browser gates, fresh SPEC, targeted QUALITY, and final
integration accept with concerns.

Root authorized additive **Dead Weight** (`level_46`) at 2026-10-17 20:28:22 UTC after accepting
the corrected private checkpoint as `KEEP_WITH_CONCERNS`. Runtime inspection confirms the 46-room
campaign places it at position 27 in the liver, after `level_32` and before `level_14`; all earlier
45 definitions retain their relative order.

## Current aligned source

The final approved layout changes only the upper fold and right wall. Pac puts Gem's mass on
counterweight A; A descends and raises Isp on B. Isp uses FLOAT to reach the high fold while Pac
takes the low passage and exit. The existing static tissue stop prevents the tested Gem over-push;
Cana starts on the existing floor. The observed freeze after Isp leaves support is a consequence,
not a requirement for Pac's landing. No new engine, configuration, or state behavior is included.

Root reports the current-source 96-check gate, both TypeScript checks, lint, format, official build,
and both standard smokes passed. The served JS hash is
`bf1830b26f073f256524d823c52478df75343356207d3f7f90c56f3ff7f57e45`; its map hash is
`a09105bf31f4de5edc5fb48820ea9e1517ab9dcdf634ca06b82aaf8c7e1976ff`. HTTP matches disk, and all
73 mapped sources match. The source owner's exact TypeScript compile also exited 0 without
diagnostics. Fresh aligned-source public SPEC accepts with concerns.

Root reports these native traces complete with both exits and no deaths. **First completion** is
the frame where both exits are reached; **scheduled tail** is the end of the full input schedule after
the game freezes the completed state:

| Route | First completion | Scheduled tail |
| --- | ---: | ---: |
| Normal | 1,141 | 1,264 |
| Missed-FLOAT retry | 1,421 | 1,544 |
| One extra steering frame | 1,142 | 1,265 |
| Continuous Isp-right during FLOAT | 1,101 | 1,224 |
| Bounded over-push and same-run regroup | 1,945 | 1,986 |

In the last route, the over-push prefix leaves Isp on B after 1,484 frames, then ordinary regrouping
and a later bubble let Isp exit after Pac. This proves that bounded same-run recovery only; general
floor recovery remains untested. Route traces and seven correct-key capture cases are in
`tests/_temp/dead_weight_aligned_routes/`.

The seven aligned browser cases passed with zero deaths and browser errors. Root personally viewed
all seven original images and accepts the sampled layout and readability with concerns. The receipt
and PNGs are preserved under `tests/_temp/dead_weight_docs/aligned/`; capture time was
`2026-10-17T20:40:04.128Z`.

The initial six-pass audit reviewed the pre-alignment source. All three initial findings are closed
after current-doc inspection. Fresh aligned-source SPEC and targeted QUALITY accept with concerns;
the QUALITY report is under `tests/_temp/dead_weight_alignment_quality/`. Final integration accepts
with concerns; see `tests/_temp/dead_weight_final_integration/REPORT.md`. Root accepted the bounded
milestone as `DONE_WITH_CONCERNS` at 2026-10-17 20:45:51 UTC. Human discovery, fun, comfort, general
floor recovery, and difficulty are unmeasured. The immutable current44 assessment assigns no score;
the broader continuous-development goal remains active. No remote publication is claimed.

## Preserved pre-alignment history

The first browser capture did not complete: its helper stopped after FLOAT with Isp on the floor in
the playing phase, and produced no final receipt. On that layout, 45 rightward Isp frames cleared at
1,141, while 46 frames tucked under the upper fold and failed at minimum y=118. Root authorized only
the two-rectangle correction above; no further geometry change is authorized.

Root viewed the three pre-alignment starting, loaded, and FLOAT-effect captures. They passed their
individual state checks but do not establish a clear. Their copied originals and SHA-256 receipt are
preserved in `tests/_temp/dead_weight_docs/pre_alignment/`.

The pre-alignment room matched the corrected private fixture except for four approved metadata
fields. That comparison predates the two authorized geometry changes and is historical provenance,
not a current source identity claim. The private fixture and review history remain under
`tests/_temp/live_ballast_*`; captured hashes and counts are one-time evidence, not permanent gates.

The first TypeScript handoff included 13 historical baseline copies in the compiler glob. The
correction owner preserved them in an inert archive, verified names and bytes, and removed raw copies
without a configuration change. The corrected exact compile exited 0 with no diagnostics; the source
owner's compile on the current source also passes.

See the [production ledger](../active/LIVE_BALLAST.md).
