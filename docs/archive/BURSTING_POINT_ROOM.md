# Bursting Point room plan

**Status: ROOT ACCEPTED `DONE_WITH_CONCERNS`.** Add stable `level_40`, **Bursting Point**, to the
liver stage after `level_13` and before `level_24` (new display position 19). Next from display 19
goes to display 20 (`level_40` to `level_24`), while stable `level_20` remains the finale and last
room at position 40. The continuous gameplay goal remains ACTIVE. The accepted 39-room full journey
is historical evidence for the earlier unchanged roster; it is not a full 40-room journey. The
current 38-room campaign difficulty assessment remains frozen, and stable `level_39` and `level_40` remain
difficulty-unassessed until a separate assessment. The [private experiment](PURPOSEFUL_COLLAPSE_EXPERIMENT.md)
supports planning, not production acceptance or human-play claims.

## Goal and contract

Build a short variation after the first useful FLOAT: Pac deliberately loads a fragile overhead
membrane to open Isp's upward route, while Isp positions for Gem's recurring bubble and steers
through the opening. Pac falls to a distinct lower exit; Isp takes the upper exit. Preserve the
causal twist: the roof opens the route, while FLOAT supplies movement. Include a forgiving premature
FLOAT or missed-shot recovery through ordinary regrouping and Gem recurrence. Avoid mandatory
difficulty escalation, an input quota, forced timer task, new pad or hazard, or a tail objective.

- Put the room in `src/level_bursting_point.ts`, exporting `BURSTING_POINT_LEVEL` and
  `BURSTING_POINT_SCENE`. Registration and order belong only in `src/levels.ts`.
- Preserve all 39 current enriched definitions, scenes, and their relative order. Insert
  `level_40` between `level_13` and `level_24`; keep `level_20` last. Do not alter shared engine,
  types, physics, renderer, saves, or options.
- Use liver tissue art and liver-stage scene naming. Keep the final private sketch's platforms,
  spawns, exits, and roof timing. Place Gem at `(100, 350)` on the left shelf and Cana at
  `(930, 550)` as a lower-right heckler, using the existing scene contract.
- Keep Gem's existing recurring bubble unchanged: target `(410, 500)`, windup `0.55`, cooldown
  `1.05`, speed `260`, radius `15`, and max range `600`. Add no permanent disable or pad tail.
- Re-author and prove production routes from these production positions; private timings do not
  transfer. If concrete geometry or readability evidence blocks the causal route, stop and report
  the boundary for root. Do not add mechanisms to work around it.

## Approach and gates

1. **Concept SPEC satisfied.** The private concept review at
   `REPORT.md`
   satisfies the preimplementation SPEC. The final production SPEC after source, browser, and
   implementation evidence remains required.
2. **Add the room.** Snapshot the public `LEVELS` entries before edits. Add the isolated level and
   scene exports and registry/order entry only. Compare all former 39 definitions, scene data, and
   relative order against the snapshot; require `level_40` at position 19, `level_24` at position
   20, and `level_20` last.
3. **Prove production behavior.** Use public production source and ordinary inputs, with no
   post-construction gameplay-state writes. Step at the existing fixed `1/120` interval and record
   compact `[frames, [keys]]` input intervals for the dedicated screenshot tool's 120 Hz contract.
   Re-author production timings for Gem at `(100, 350)`; private 60 Hz timings do not transfer.
   Record clear and early blocked-FLOAT followed by missed-shot recovery, both distinct exits, and
   the causal order: roof opens before the successful ascent. Include ordinary Gem recurrence and
   zero deaths. If these fail, correct only the room data; stop if the existing contract cannot
   express the route. Use the existing screenshot tool without redesigning preview tooling.
4. **Run repository gates.** Run `./check_codebase.sh`, then
   `source source_me.sh && ./run_playwright_tests.sh --build`. Capture the dedicated built-browser
   views for a clear, an early blocked FLOAT, and later recovery/recurrence. Confirm natural local
   save and Next `19 -> 20`, legacy `level_39` identity/replay, source-to-served-bundle identity,
   and finale-last ordering. Root reviews the resulting captures and evidence.
5. **Review and accept.** Obtain fresh SPEC, then release QUALITY for exactly six fresh passes
   (Plan, Test, Style, Docs, Legacy, Comment) after the implementation is ready. Obtain fresh
   integration review and root acceptance. Resolve concrete blockers between gates. Update Phase B
   documentation only after acceptance, using observed counts and evidence; state that the new room
   remains unassessed until those gates pass.

## Completion checks

- Native production traces show both roles contribute, the roof causally opens the upper route,
  the partners reach separate exits, and an early/missed bubble can recover on ordinary recurrence.
- All prior 39 definitions and scenes compare unchanged and in the same relative order; stable IDs,
  progression, saved completion, legacy replay, Next `19 -> 20`, and finale-last behavior hold.
- The repository gate, built standard smokes, dedicated captures, bundle identity, fresh SPEC,
  six-pass QUALITY, integration, and root visual acceptance pass. Human discovery, fun, comfort, and
  difficulty are not claimed without human evidence.
- Add no permanent geometry/tuning test unless evidence demonstrates a stable regression need;
  use temporary checks for this bounded room otherwise. No full 40-room journey was required for this
  isolated data-only addition; the accepted 39-room journey remains historical evidence for the
  earlier roster.

## Implementation ledger

The production room is in `src/level_bursting_point.ts` and is registered through
`src/levels.ts`. The temporary native runner uses the enriched production `LEVELS` entry and only
`create_game_state`, `create_empty_input`, and `step_game` at exactly `1/120` second. It performs no
postconstruction state writes. The baseline snapshot and runner compare every prior enriched room
and relative order; all 39 match, with `level_40` at position 19, `level_24` at position 20, and
`level_20` last.

Both production routes pass with separate exits and zero deaths. The ordinary route collapses the
roof at frame 166 and receives FLOAT at frame 339, then completes at frame 634 (5.2833 seconds).
The recovery route first receives FLOAT at frame 339 and remains physically blocked against the
intact roof underside from frame 450 through 507 (58 frames; Isp top and roof underside both
`y=370`). Pac collapses the roof at frame 630. Gem's recurring shot gives Isp FLOAT at frame 678,
after which the pair complete at frame 964 (8.0333 seconds). Detailed native traces and compact
120 Hz capture inputs are in
`result.ndjson`
and
`route_ledger.json`.

These results establish implementation behavior and old-room semantic preservation. The root-reported
`./check_codebase.sh` passed (both TypeScript programs, ESLint, Prettier, and 92 Node checks), and
`source source_me.sh && ./run_playwright_tests.sh --build` passed the official build and both standard
smokes (2/2, 2.1 seconds). Root confirmed preview `main.js` HTTP 200 and source-to-served-bundle
identity. Final built-browser evidence records ordinary and recovery routes completing with zero
deaths, retries, or page/console errors; visible blocked FLOAT at the intact roof; later recurring
FLOAT; and the upper/lower split. Natural save, Next to `level_24`, reload and replay, all 39 prior
stable IDs including `level_39`, and finale-last `level_20` pass. The served build SHA-256 is
`1b548cc3f9530c5ceb1caeed9845beb0c0f9d8db968c00bcb485a1d0681b8bc8`; source hashes are recorded in
`REPORT.md`.
Root viewed all seven original PNGs and accepted the visual composition without a source blocker.
Production SPEC accepted; the six fresh QUALITY reports and fresh integration accept with concerns;
root accepts this milestone `DONE_WITH_CONCERNS`. The initial failed browser recovery used a
mismapped input; its original case JSON was overwritten, and the retained failed JSON is explicitly
a reconstruction. The contemporaneous failure log and corrected successful receipts remain. The
reviewers reconciled the Plan finding against the prior 39-room baseline and deferred the proposed
permanent placement test under the plan's KISS rule; no product fix or new test was needed. Stable
`level_40` remains difficulty-unassessed. No full 40-room journey or human discovery, enjoyment,
comfort, readability, or difficulty result is claimed. The level-3 horizontal-motion concern
remains unresolved.

## File scope

- `src/level_bursting_point.ts`: new level and scene data.
- `src/levels.ts`: registration and campaign insertion only.
- `tests/_temp/bursting_point_production/` and the existing dedicated browser-capture location:
  temporary native, progression, visual, and bundle evidence.
- Phase B counts and map are updated below the accepted evidence boundary; stable `level_40` remains
  difficulty-unassessed regardless of source, browser, or review gates.

Any failure that needs a shared engine change, art addition, or different causal design returns to
root for a separate decision. This plan does not resolve the level-3 horizontal-motion concern or
complete the continuous gameplay goal.
