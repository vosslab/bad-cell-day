# Cargo feedback milestone ledger

Status: C1 and C2 visual evidence identified a left GRIP occlusion. C2's complete 31-room journey
passes with concerns. C3's exact draw-order change is source-accepted, built, smoke-tested, and
accepted for the focused normal/reduced-motion gameplay and visual scope with provenance and minor
presentation concerns. Fresh SPEC and QUALITY, the canonical docs, the corrected full Python gate,
and the post-metadata source gate are complete. Fresh integration and final root acceptance remain
pending. The historical `current_31` assessment and C2 campaign evidence remain unchanged.
The accepted 31-room assessment is recorded in
[difficulty_31_acceptance.md](difficulty_31_acceptance.md). The continuous game goal remains
ACTIVE. This ledger covers only the next Cargo Exchange feedback milestone.

## Outcome and baseline

Explore whether Cargo Exchange can communicate which side contacts the nutrient-sac and what the
gate does as a result. The accepted D31e assessment reports that existing rider/load, dotted
connection, and status cues are present, while one partial single-operator AI probe prompted this
question. That probe is a discoverability prompt, not evidence of a control defect. Before C1, root
checked the source and build against all 39 accepted baseline pins; the protected 8127-served main
and map assets matched that baseline.

Root approved C1 after reading the design and seam reports and viewing the actual probe12 and heavy
room09 captures. The source baseline's 39 pins and protected served assets passed root's parity
check; `npx tsc --noEmit -p tsconfig.json` exited 0. The approved scope is:

- Replace both `>` and `>>` nutrient-sac direction glyphs in shared tissue-object rendering with
  neutral bilateral grips; retain the heavy shell, paired nuclei, and `TEAM` marks.
- Add a narrow Cargo Exchange overlay for actual side contact, conditional `PUSH SIDES` when a
  hero stands on top, the existing pad label, and actual `OPEN` or `LOCKED` feedback at the gate's
  true endpoint. Derive it from authored effects and live geometry, pad, and barrier state. Make no
  prediction or promise about motion.
- Preserve reversible cargo, the two-rider clutch, recovery, both heroes' meaningful roles, and
  legal alternatives. Keep puzzle rules, physics, roster, and `render_counterweights.ts` unchanged.
  Add no runtime state, shared type, configuration, or feedback framework.

## Staged acceptance

| Stage | Owner | Evidence and boundary | State |
| --- | --- | --- | --- |
| Design and seam reports | `/root/cargo_feedback_design`; `/root/cargo_feedback_seams` | Read actual visual material and inspect source seams; reports accepted as inputs to C1. | COMPLETE |
| Root scope decision | Root | Approve a bounded presentation change derived from existing geometry and state. | C1 APPROVED |
| C1 renderer source and source checkpoint | `/root/cargo_feedback_implementation`; fresh SPEC | Three assigned renderer files frozen; SPEC source checkpoint accepts C1 for build with no source blocker or architectural drift. Temporary purity trace passed. `tests/_temp/cargo_feedback_spec_c1/SOURCE_CHECKPOINT.md`; `tests/_temp/cargo_feedback_implementation/REPORT.md`. | COMPLETE; RETAINED |
| C1 source gate and canonical build | Root; build owner | `./check_codebase.sh` passed both typechecks, lint/format, and 87 Node checks. `./run_playwright_tests.sh --build` passed with two standard UI smokes. Asset/index/style/map provenance passed. `tests/_temp/cargo_feedback_build_c1/REPORT.md`. | PASS; HISTORICAL C1 |
| C1 built artifact | Root | All 41 pins checked; 39 inherited paths include three expected changes (`render_game.ts`, `dist/main.js`, `dist/main.js.map`), 36 unchanged paths, and two new renderer source paths. Protected 8127 index/main/map GETs returned 200 and matched local hashes. Main `3e68f461899a1048f795c463d2bd587c93c4de75d2b1b4ff26e7dde8f708f728`; map `9276ae47a33453a667d662f478f883d057c00eb05e60bd0cf7dc4bcc01901545`. | VERIFIED; HISTORICAL C1 |
| C1 focused runtime | `/root/cargo_feedback_browser_c1`; fresh SPEC | Normal03 and actual reduced-motion01 routes pass mechanics and zero-error checks, including gate receipts, conditional top cue, cargo reversal, and heavy artwork. SPEC found the side-contact outline occluded by hero artwork and too similar in color at shipped scale. During movement, the existing gap is 1.25px while the strict cue requires under 0.01px, so the cue disappears. Pause overlay also veils the board. `tests/_temp/cargo_feedback_browser_c1/REPORT.md`; `tests/_temp/cargo_feedback_spec_c1/RUNTIME_CHECKPOINT.md`. | NOT ACCEPTED PENDING CORRECTION |
| Root C2 correction decision | Root | Reuse existing `PUSH_CONTACT_REACH = MOVE_SPEED / 120 + 1` in the renderer's side gap, with a static visible grip cue clear of the hero. Preserve authored contact semantics; add no solver, state, input, or route change. Gate receipts, top cue, and shared art already pass. | C2 APPROVED |
| C2 source correction and source checkpoint | `/root/cargo_feedback_reach_c2`; fresh SPEC | Three C2 source paths frozen (`constants.ts`, `physics.ts`, and `render_cargo_feedback.ts`); SPEC accepts source for build. The temporary trace matches baseline and current physics state byte-for-byte over 480 frames. No input, solver, or movement behavior change. `tests/_temp/cargo_feedback_reach_c2/REPORT.md`; `tests/_temp/cargo_feedback_spec_c2/SOURCE_CHECKPOINT.md`. | COMPLETE FOR BUILD |
| C2 source gate and canonical build | Root; build owner | Root `./check_codebase.sh` passed both typechecks, lint/format, and 87 Node checks. One `./run_playwright_tests.sh --build` exited 0 with two standard smokes. Provenance and served-byte checks passed. `tests/_temp/cargo_feedback_build_c2/REPORT.md`. | PASS |
| Current C2 built artifact | Root | All 42 local pins checked; sequential protected 8127 index/main/map GETs returned HTTP 200 and exact local parity. Flat pin map SHA `29a0e4f95261b3d1902a5b0e0e31eeeded9f20cb0ec38a1612561ce46d1be586`; main `cff0512ffea08da6de9a82b27b9b0d874014c49a09a040c349d03acecb6db8be`; map `0349f4ed4f6177cc5a79a5faa2f739ed6af3383b25212c408ea887f40cb87bc7`. | VERIFIED |
| C2 focused visual and route proof | `/root/cargo_feedback_browser_c1`; fresh SPEC | Normal route exits 0 with mechanics, zero errors, cleanup, and 42-pin parity. Right and moving-gap GRIP are visible at the 1.25px gap; left GRIP overlaps Pac's name tag and is not accepted. Root held reduced-motion repetition after this blocker was visible. `tests/_temp/cargo_feedback_browser_c1/C2_REPORT.md`; final C2 SPEC confirms the same blocker. | NOT ACCEPTED PENDING CORRECTION |
| C2 full 31-room journey | `/root/cargo_feedback_campaign_c1`; root | All 31 rooms, finale, Replay/save, and sound checks pass with zero errors; cleanup and 42-pin parity pass. This is versioned C2 shared-art/global campaign evidence and does not clear C2's left-plaque visibility concern or claim C3 room23 pixels. `tests/_temp/cargo_feedback_campaign_c1/REPORT.md`. | PASS WITH CONCERNS; C2 |
| C3 draw-order correction | `/root/cargo_feedback_order_c3`; root | After C2 campaign cleanup, move only the existing room-gated `draw_cargo_feedback` invocation from before actors to immediately after the `draw_player_overlay` loop and before interference effects. This places the interaction cue above the brief name label while actor art remains clear. Add no layout, state, or configuration. | COMPLETE |
| C3 source and SPEC | `/root/cargo_feedback_order_c3`; fresh SPEC | Frozen `src/render_game.ts` SHA `406bbbf071533a0897cf18117413318bb3579cfd613761cc39cbbf7c0da49a6b`; exact one-call relocation after player overlays and before interference effects. SPEC accepts source; only the 42-pin C2 map differs at this source path. `tests/_temp/cargo_feedback_spec_c3/SOURCE_CHECKPOINT.md`; `tests/_temp/cargo_feedback_order_c3/REPORT.md`. | ACCEPTED FOR BUILD |
| C3 source/build gates | Root; build owner | Root `./check_codebase.sh` passed both typechecks, lint/format, and 87 Node checks. One canonical build passed two standard smokes. All 42 pins, 53 embedded sources, assets, and served bytes passed. Pin map SHA `4a143d1771d1bdd09117c57a0fa08b13c3a06f6322060c13bf899b3cc76aab65`; main `3f5e34748f100b8574de754cd0541d4ca419377fd581ab7b38e4fb37ab3e181e`; map `d92f8fc53733b9f12ed0d02f9958f6a8ba87e838967d948176043a0cadbade59`. `tests/_temp/cargo_feedback_build_c3/REPORT.md`. | PASS; C3 |
| C3 focused runtime | Fresh isolated browser owner; root | Normal room23 completed with all 15 checks, no browser errors, cleanup, and reviewed actual frames. Fresh reduced-motion attempt02 completed all 15 route/state checks and both exits; root reviewed the left/right/moving GRIP, top cue, gate states, and heavy cargo captures and accepted the gameplay and visual scope with concerns. The helper exited 1 after browser close when its all-42 local-pin assertion found the lockfile changed; do not call this an all-42 postflight pass. The actual post-run evidence showed all 53 embedded source-map contents and served index/main/map exactly matched C3, and all 40 nonmetadata frozen paths stayed stable. At post-run only `package-lock.json` had changed; concurrent edits later changed `package.json` and `package-lock.json` development dependency ranges/versions. Root's adjudication accepts the tested C3 bundle and frames with this metadata drift recorded. The exact room-gated no-op in other rooms needs no fourth 31-room rerun. See `tests/_temp/cargo_final_spec_restart/REPORT.md`, `tests/_temp/cargo_final_browser_restart/REPORT.md`, and `tests/_temp/cargo_final_browser_restart/reduced_attempt02/`. | ACCEPTED WITH CONCERNS; METADATA DRIFT |
| Post-metadata source gate | Root | After the concurrent metadata changes, `./check_codebase.sh` exited 0: both typechecks, lint, formatting, and 87 Node checks passed. Receipt: `session 23547`, final `916a2a`. No build, browser, or service action was needed for this documentation closeout. | PASS |
| Fresh SPEC | `/root/cargo_final_spec_restart`; root | Accepts the focused normal/reduced gameplay and visual scope with concerns. Root reviewed the actual new reduced-motion frames; the browser closed before the final all-42 pin assertion failed on the concurrent lockfile change. Metadata and served-bundle adjudication is recorded in the runtime row above. `tests/_temp/cargo_final_spec_restart/REPORT.md`. | ACCEPT WITH CONCERNS |
| Fresh QUALITY | `/root/puzzle_feedback_quality`; root | Accepts presentation quality with concern and no plan or architecture drift. Reviewed actual normal/reduced captures show readable left/right/moving GRIP, top cue, gate receipts, and heavy cargo. The right-side leader crosses upper-hero artwork and looks busy; it does not obscure the cue and root accepts it as nonblocking. No scope expansion is requested. `tests/_temp/puzzle_feedback_quality/REPORT.md`. | ACCEPT WITH CONCERN |
| Canonical docs | Root-authorized doc owner | Added the scoped shared-art and room23 feedback behavior to the changelog, direct controls to usage, the frozen assessment boundary to difficulty guidance, and the settled rendering behavior to the existing Cargo Exchange decision. Historical `current_31` records, captures, ratings, and C2 campaign evidence remain unchanged. | COMPLETE |
| Full Python gate | Root | First `source source_me.sh && python3 -m pytest tests/ -q` exited 1: 3,674 passed, 1 failed, and 1 warning. The failure was 19 Markdown links from this ledger to ignored `tests/_temp` paths. The link owner converted ignored artifact references to inline code paths and reports 266 Markdown links passing (`a63f9620...`). After canonical docs and the correction, the full command exited 0 with 3,674 passed in 3.07 seconds and no warnings printed. Receipt: `session 83288`, final `f2c954`. | PASS |
| Integration and root acceptance | Fresh integration owner; root | Integrate the accepted C1/C2/C3 evidence, fresh SPEC and QUALITY, source gate, canonical docs, and full Python result. Root has not yet issued final Cargo milestone acceptance. | PENDING |

## Acceptance boundaries

- Keep `current_31` records, locks, captures, and historical assessment artifacts immutable.
- Keep the existing difficulty rubric, schema, and assessment framework unchanged.
- Show the feedback follows actual existing contact and gate state; avoid adding directional route
  guidance for reversible cargo.
- Demonstrate that the selected presentation preserves cargo reversal, meaningful contributions
  from both heroes, recovery, and legal alternatives across the retained C2 campaign and focused C3
  room23 route.
- Treat scripted play as operability and presentation evidence. It does not establish human
  comprehension, enjoyment, first-use discovery, or shared-keyboard comfort.
- Record failed attempts and unresolved questions in the implementation/review receipts. Do not
claim completion until root accepts the remaining integration and milestone review.
- C2 source acceptance and canonical build/smoke success did not establish left-side visual
  legibility. C3's focused normal and reduced-motion frames resolve that blocker for the approved
  presentation scope; the reduced helper's final all-42 assertion remains a recorded metadata
  concern.
- Preserve all C1 reports, failed attempts, build pins, and current31 assessment artifacts. Treat C1
  runtime and build results as historical evidence after C2; do not rewrite them or reuse the C1
  build for final acceptance.

## Canonical documentation

The Cargo wording draft remains in `tests/_temp/cargo_feedback_ledger/canonical_docs_draft.md` as
the source of the concise documentation fragments. Canonical Cargo docs are now updated; final
milestone acceptance still depends on fresh QUALITY, integration, the full Python rerun, and root
review. The accepted `current_31` assessment remains frozen against its pre-feedback source and build.

