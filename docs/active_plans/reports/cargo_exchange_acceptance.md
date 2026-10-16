# Cargo Exchange milestone ledger

Status: bounded Cargo Exchange D0 milestone `DONE_WITH_CONCERNS`; continuous gameplay goal `ACTIVE`.
The prior Cana milestone is accepted separately in
[cana_encounter_acceptance.md](cana_encounter_acceptance.md).
This ledger records D0 acceptance; it does not mark the whole game complete.

## Baseline and boundaries

Previous accepted Cana baseline build pins are main
`fbf3118d7dbed2ad4661f2c136c77371117ede3892c10d87211b8eb1ad2673cd` and map
`b30675ae7af410c377dd805a246090a2cc4035dc648aa6115e926edfede22916`. The 28 current rooms and
their order remain the campaign baseline. The immutable `current_28` assessment predates Gem; do not
recalculate it or make freshness of that assessment a gate.

Root selected a bounded delivery-feedback presentation change. Preserve the two-way opposed loads,
cargo return, safe shafts, both heroes, legal solutions, geometry, physics, and roles. Keep the
change within existing state, pad data, and rendering; add no new state, configuration, types, or
helper framework.

The completed first-use probe found clear two-rider lift feedback. At the lower dock, one AI operator
mistook Pac's arrival and a spark increment for cargo delivery while the crate remained on the lift;
the Hint clarified that Pac and the crate must occupy the marked area. A wall-time jump did not recover
the route. This single scripted operator is comprehension evidence, not proof of a human usability bug
or fun result. Evidence: `tests/_temp/cargo_first_use/REPORT.md`.

The native-engine follow-up proves the baseline route clears and the tested bad-unload flush-stop
route recovers: the sac rests at x=350; Pac jumps onto it at x=360, reaches the recess at x=400, then
pushes it left to x=43.8. `cargo_parked` latches and both heroes complete the room. This route supports
keeping geometry and physics; it does not prove recovery for every possible cargo state. Evidence:
`tests/_temp/cargo_playability_followup/REPORT.md`.

## Selected direction D0

Show delivery progress in a bounded central panel derived from the existing `cargo_parked` pad's
`weight`, `minWeight`, `latched`, and `active` values. Before latching, label the count as cargo-pad
weight (`0/2`, then `CARGO PAD: 1/2 WEIGHT`); after latching, show
`CARGO PARKED | RETURN SAC RELEASED`. Keep it separate from HUD sparks, visible when Pac obscures the
floor label, and persistent after Pac reboards. Retain the existing clutch, rider, load, and stop
readouts. This is presentation feedback only; it changes no gameplay data, order, geometry, physics,
state, types, or options.

## Implementation and build

The approved panel is implemented only in `src/render_counterweights.ts`; the owner report is
`tests/_temp/cargo_feedback_impl/REPORT.md`. It uses the existing canonical header, which grows from
99 to 125 pixels; existing villain-speech avoidance reads the updated bounds. No caller or type
changes were needed. The official Pages build, 47 TypeScript/18 SVG parity, index/style checks, and
HTTP asset checks pass. Build pins: main
`18110af62885e168fbec9b054ed000fc733ee8c47973eaf339c20af3f0e93319`, map
`69787512c7ffbf32a8e4a938006a54756f82e04ef1727497e4dbc032b143c47f`, and renderer
`c5a8de2dbdd6527dc70ae3cf3c61626ce1a2708b0ed862c0521f432653f83948`.

## Milestone sequence

| Milestone | Status | Evidence or decision |
| --- | --- | --- |
| Causal playability investigation | DONE_WITH_CONCERNS | Baseline clear and tested bad-unload flush-stop recovery; `tests/_temp/cargo_playability_followup/REPORT.md`. |
| Root selects a change or keeps current design | DONE | D0 selects bounded delivery feedback from existing pad state; no geometry or physics change. |
| Implement selected change and focused proof | DONE | `src/render_counterweights.ts`; `tests/_temp/cargo_feedback_impl/REPORT.md`. |
| Official build and artifact checks | DONE_WITH_CONCERNS | Pages build, parity, index/style, and HTTP checks pass at the pins above. |
| Fresh built-browser acceptance | DONE_WITH_CONCERNS | `tests/_temp/cargo_feedback_browser/REPORT.md`: three full native clears, two smokes, zero errors across three contexts, and preserved 28 records/preferences. Root reviewed opening, partial, latched (including reduced motion), reboarded, and ready captures. Four blind RLE controller failures remain preserved as failures; native continuation is not byte-identical replay evidence. |
| Root source/code gate | DONE | `./check_codebase.sh` passed both TypeScript configs, lint, format, and 82 Node checks (session 57382). |
| Root full Python suite | DONE | 2,019 passed in 3.60 seconds (session 69417). |
| Fresh combined source SPEC | DONE_WITH_CONCERNS | `tests/_temp/cargo_feedback_spec/REPORT.md`; no blocker or drift. |
| Distinct fresh QUALITY review | DONE | `tests/_temp/cargo_feedback_quality/REPORT.md`; accepted with no material defect or drift. |
| Fresh integration | DONE_WITH_CONCERNS | `tests/_temp/cargo_feedback_integration/REPORT.md` accepts with no material defect or drift. |
| Root acceptance | DONE_WITH_CONCERNS | Root accepted bounded Cargo Exchange D0 after reviewing final integration, source/browser evidence, six captures, and the code/Python gates. |

The renderer-only change leaves gameplay unchanged, so no fresh 28-room journey was run; accepted
campaign evidence remains the baseline. Scripted operability does not establish human comprehension,
fun, discovery, paired-keyboard comfort, or audio quality. Four blind controller failures remain
preserved as failures, and native continuation does not prove a byte-identical replay. These limits
do not reopen the accepted D0 scope. The continuous gameplay goal remains ACTIVE; future additive
level ideas remain unapproved hypotheses.
