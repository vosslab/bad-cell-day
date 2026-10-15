# Plan: A living anatomical world

## Context

Make the existing cancer world feel like one organism: recognizable organs, organic playable
architecture, and living or mutated mechanisms that respond to the partners. Human direction favors
playful bold forms, original artwork, and clear cooperation. This is a technical presentation plan;
gameplay redesign, difficulty reassessment, and program management have separate homes.

The [gameplay direction](../reports/gameplay_direction.md) records continuous development as ACTIVE
and the completed difficulty assessment milestone as DONE. M1 was accepted by the manager on
2026-10-15. Its accepted main SHA-256 is
`7046a97d1c9ed6ce6ddc07c2f758f5abefda121a472bf185ff92f1660741805b`; its map SHA-256 is
`3774cc312a633052a59d2ca0ccdf645d2876f4c55763b24707594ca70c02483e`. The assessment artifact
(`a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5`) is now a historical visual
source baseline. Its scores and frozen artifacts remain unchanged; a new first pass is required
before claiming clarity under the anatomical source.

## Objectives

- Recognize lungs, intestine, marrow, liver, brain, and tumor through original organ silhouettes,
  tissue palettes, and consistent foreground mechanisms.
- Read every safe edge, hazard, player role, mechanism state, and partner consequence during play.
- Preserve the accepted rooms, ordinary-input routes, save identities, and villain interactions.

## Design philosophy

Apply **Fix the design, not the symptom** and **Focus on important issues** from
[REPO_STYLE.md](../../REPO_STYLE.md): own organ identity once, share one small tissue drawing
contract, and keep collision geometry authoritative. Broad playful, bold-form inspiration informs
original art. Physiological detail serves the cooperative action rather than competing with it.

## Scope

- Rename the six presentation stages cleanly and atomically, including required build assets.
- Draw editable organ scenery and organic floors, platforms, doors, pads, carriers, cargo, and hazards.
- Show existing active, powered, stabilized, moving, blocked, and dangerous states through living
  valves, tissue bridges, sacs, tension cords, and visible state responses.
- Update player-facing chapter, room, hint, and villain wording to fit the organs.

## Non-goals

- Change physics, geometry, input, timing, pad labels/effects, motions, attacks, or save schema.
- Reorder rooms, introduce mechanics, redesign the algorithm, or perform fresh difficulty scoring.
- Copy another artist's assets or represent visual inspection as human enjoyment evidence.

## Architecture boundaries and ownership

### Mapping (milestones -> components)

| Milestone | Component | Review boundary |
| --- | --- | --- |
| M1 | Organ naming, palette, surface API, build migration | Architect approves cross-cutting contract |
| M2 | Six editable backgrounds; foreground; linkages and copy | Independent files after M1 acceptance |
| M3 | Frozen build, rendered acceptance, documentation | Fresh specification, quality, integration |

The architect APPROVED the M1 boundaries on 2026-10-15: canonical organ metadata/palette,
readonly appearance, and a pure clipped tissue helper. Existing user authorization covers execution
and does not require another user approval pause.
Invite questions and challenges at dispatch, then checkpoint scope and the exact API before M2.
Each owner preserves other agents' edits and reports a conflict before touching another owner's file.

### File scope

| Owner boundary | Expected files and purpose |
| --- | --- |
| Atomic migration owner (A0) | New `src/types/anatomy.ts`, `src/anatomy.ts`, initial `src/render_tissue.ts`; migrate stage references in level definitions, validation, renderers, affected tests, and `build_github_pages.sh`; rename six assets with `git mv`; retain baseline custody |
| `anatomy_svg_opening` | Only opening organ SVGs: lungs, intestine, marrow |
| `anatomy_svg_late` | Only later organ SVGs: liver, brain, tumor |
| `anatomy_playable_tissue` | `src/render_tissue.ts` and `src/render_game.ts`: organic surfaces, mechanisms, cargo, hazards; optional `src/render_tissue_objects.ts` if needed |
| `anatomy_linkage_copy` | `src/render_counterweights.ts`, `src/levels_tutorial.ts`, `src/levels_middle.ts`, `src/levels_final.ts`, `src/level_split_relay.ts`, `src/level_crossed_paths.ts`, `src/level_counterweight.ts`, `src/interference_trial.ts`, `src/game_state.ts`, `src/villain_scenes_tutorial.ts`, `src/villain_scenes_middle.ts`, `src/villain_scenes_final.ts`, `src/app.tsx`, and `src/render_villains.ts` (approved fallback quip string only); do not edit `render_game.ts` or `render_tissue.ts` |
| Integration owner | Regenerate `dist/` from source, run acceptance, and update durable docs/reports and the ledger below |

The four M2 owners are exclusive. Copy files must be enumerated at dispatch so their ownership is
disjoint; this ledger records the agreed component boundaries. Do not broaden them into physics,
geometry, new mechanisms, or save changes.

A narrow readability correction was tracked separately: in the normal-motion level 02 capture,
GEM's name had low contrast against the pink alveolar floor. The fresh owner
`anatomy_villain_label_readability` edited only the villain-name backplate in
`src/render_characters.ts`: add a dark, text-measured plate for GEM and CANA without changing label
anchors, text font/color, actor poses, or weapon poses. The plate must avoid the recharge indicator.
The isolated normal/reduced level 02 proof passed without page errors. This presentation correction
adds no mechanic and does not trigger a full-campaign run. Whole-build confirmation passed in M3. See the receipt in `test-results/anatomical_world/villain_labels/`.

Before parallel dispatch, enumerate actual copy files and assign each to one owner; split copy into
a separate fresh task if file boundaries overlap. A0 completes all broad migration edits first.
All shared types live in `src/types/anatomy.ts`; canonical readonly palettes and headings live in
`src/anatomy.ts`, imported directly by consumers. Remove `STAGE_THEMES` rather than retain a legacy
alias. Avoid duplicated palettes, unsafe casts, `any`, and compatibility aliases.

Proposed minimal A0 surface contract, finalized before dependent dispatch:

```ts
draw_tissue_surface(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  stage: OrganStage,
  appearance: TissueSurfaceAppearance,
  time: number,
): void;
```

`OrganStage` has the six organ keys. `OrganPalette` defines the small shared background, tissue,
edge, and accent palette required by consumers. `TissueSurfaceAppearance` describes kind
`solid | carrier | fragile | counterweight` and actual `active`, `powered`, and `stabilized` flags,
all readonly; existing rectangles and state own physical truth.
Use simpler typing if adequate; freeze the exact exports and fields in the dispatch receipt.
The approved appearance shape is readonly `{ kind; active: boolean; powered: boolean;
stabilized: boolean }`, with `kind` restricted to the four values above; it copies no IDs,
geometry, or motion. Freeze palette field/export names in the same A0 receipt.
A0 installs the helper and counterweight call signature so parallel owners do not edit each
other's files. The helper receives presentation values, never changes simulation state, and owns
its canvas save/restore. Its canonical implementation is `src/render_tissue.ts`.
Inactive surfaces retain a non-solid ghost outline. Callers retain actual-state labels, warnings,
load readings, and displacement cues.

The rendering contract uses 2D world pixels with y increasing downward. Keep collision-facing top
and side edges exact. Clip irregular interiors and undersides inside the authoritative rectangle;
add no false footholds, bulges into hazards, or gaps that imply different support. Linkage decoration
may connect surfaces but must read as non-solid. Retain literal pad labels and role/weight cues.
Use `time = 0` for reduced-motion decoration; real mechanisms, attacks, and state feedback continue.
Rendering is pure against frozen state and restores clipping, alpha, transforms, and line dashes.

## Milestone plan

| M | Title | Summary | Goal |
| --- | --- | --- | --- |
| M1 | Establish organ contract | Refresh stability, freeze baseline, migrate atomically | Compiling organ vocabulary and shared surfaces |
| M2 | Make tissue playable | Integrate organ art, organic mechanisms, and coherent copy | Living world with readable cooperation |
| M3 | Accept integrated build | Verify rendered states, routes, compatibility, and reviews | Evidence-bound implementation closeout |

M1 depends on architect approval and a stable refreshed baseline. Snapshot source/build hashes,
stable order, saved achievements, and a normalized level-content hash excluding only presentation
stage/title/subtitle/hint and presentation-only villain text. Protect all geometry, labels, effects,
motions, attacks, and referenced IDs; report exact excluded fields. Map `garden -> lungs`,
`sewers -> intestine`, `laboratory -> marrow`, `factory -> liver`, `citadel -> brain`, and
`boss -> tumor`, with stable `level_23` explicitly assigned marrow despite its old factory stage.
The resulting campaign chapters are positions 1-4 lungs, 5-8 intestine, 9-14 marrow (including
`level_21`), 15-18 liver, 19-22 brain, and 23 tumor. Demo uses lungs; trial uses marrow.
Update explicit `boss` stage checks to `tumor`, preserve the stable `level_20`-specific core-render
branch and earlier bosses, and migrate every stage consumer, required-asset checks/copies/assertions,
and existing assertions. Use `git mv` only after required index-writability/lock checks.
Exit: full code check, production build, and built-browser smoke pass with all six renamed assets
decoded and protected content unchanged. Parallel-plan ready: no; migration is one atomic owner.

M2 depends on M1 acceptance and its published API. Backgrounds retain `viewBox="0 0 1100 620"`:
lungs use branching airways/alveoli; intestine uses folds/villi; marrow uses porous trabeculae and
blood cells; liver uses lobules and branching vessels; brain uses folds and neural strands; tumor
uses disordered swollen tissue. Keep busy detail peripheral and below play-layer contrast.
Foreground tissue belongs to the same palette and organ; valves open, supported tissue steadies,
powered sacs activate, and tension cords reflect the existing counterweight loads and displacement.
Preserve hazard footprints, carrier trajectories, ownership, warnings, and reciprocal consequences.
Exit: all six organs, foreground objects, and state changes work together at actual play scale in
normal/reduced motion. Parallel-plan ready: yes; background, foreground, and linkage/copy files
are disjoint under the accepted API. Resolve API changes through A0/architect before dependent edits.

M3 depends on complete M2 source. Freeze the integrated candidate, run the checks below, then obtain
fresh SPEC review, fresh QUALITY review, and integration acceptance in that order. Corrections return
to the source owner and receive fresh review appropriate to the changed boundary. Exit: every gate
has an evidence locator and accepted outcome. Parallel-plan ready: no for final freeze/integration.

## Test and verification strategy

- Run `./check_codebase.sh`, `./build_github_pages.sh`, and `./run_playwright_tests.sh --build`.
  The prior count is 67 code tests and two browser tests; report current counts without concealing
  failures. Build once per accepted source freeze and bind browser evidence to that distribution.
- Validate all six SVGs as XML, editable source, successful browser decode, and actual rendered
  small/full-size appearance. Inspect all 23 opening rooms in a contact sheet and representative
  normal/reduced states for each organ; decoding alone does not establish usable art.
- Inspect stable `02`, `08`, `23`, `13`, `17`, `22`, and `20` through ordinary-input completion,
  early release/recovery, pause/resume, and retry as applicable. Verify lift warnings, counterweight
  docking/load cues, useful FLOAT, reciprocal paths, and paired boss targets remain readable.
- Use one-time frozen-state rendering across dozens of representative states to prove no state
  mutation/canvas leakage. Probe clipped top/side edges against collision rectangles, including
  tiny/fragile/carrier/counterweight surfaces, inactive states, doors, cargo, and hazard boundaries.
- Compare protected normalized level content and stable order with M1. Verify fresh-save and
  legacy-save replay/unlock behavior. Run a new full 23-room campaign only if mechanics change or
  a failure broadens beyond presentation; otherwise label focused route evidence accurately.
- Keep temporary proof in `tests/_temp/` or ignored test artifacts, retain useful receipts, and
  remove harnesses at closeout. Add permanent tests only for stable behavior worth maintaining.

A failed geometry/state/content check blocks integration and returns to its owning source file.
A visual ambiguity blocks the affected art/copy boundary; correct contrast, shape, or placement and
recapture. Flag bold color or large forms only for a specific readability, state, layout, keyboard,
or accessibility failure. A pre-existing core failure gets a separate stabilization plan with one
cause/change/metric per experiment; it does not expand this plan into root-cause investigation.

## Migration and compatibility policy

Stage keys are presentation data and are not persisted. Stable level IDs, campaign order, input,
save schema, attacks, and mechanics stay fixed. Source and runtime assets migrate together with no
old-key aliases. Preserve existing difficulty records and their frozen provenance. Visual-source
changes legitimately make prior observation freshness checks stale: mark the current map as a
historical accepted baseline in front-door docs and closeout; do not rewrite frozen inputs or
describe this art pass as a reassessment. New novice/two-human evidence remains separate.

## Documentation close-out requirements

The integration owner updates [CHANGELOG.md](../../CHANGELOG.md),
[DESIGN_DECISIONS.md](../../DESIGN_DECISIONS.md), affected front-door/usage/architecture docs, and
[gameplay_direction.md](../reports/gameplay_direction.md). Record exact build/source hashes,
render captures, checks, remaining limitations, historical map status, and temporary-proof cleanup.
Human-owned direction alone belongs in [HUMAN_GUIDANCE.md](../../HUMAN_GUIDANCE.md); forwarded LLM
suggestions retain their authorship. Preserve the completed difficulty milestone as DONE and
continuous development as ACTIVE.

Execution ledger (authoring completion does not complete implementation):

| Gate | Status | Evidence / next action |
| --- | --- | --- |
| Plan authored | DONE | This file; manager confirms current mapping/API scope |
| Architect contract | APPROVED | 2026-10-15 approval; boundaries above |
| Baseline custody | DONE | Custody owner verified the archived baseline and migration copies, then removed the released `tests/_temp/anatomical_world/{baseline,migration}/` directories. Canonical restore instructions are `test-results/anatomical_world/CUSTODY.md`. The baseline's original manifest digest remains recorded there. The previous 173-entry root manifest (`4d58b2d1a0167728118a03f6b8d7b529bb8be934d63521c6c8859d47514053f1`) and pre-packaging ledger (`cbea1f6ea1cc33379965d99cda823dec4021ee017e28c0c07ae628f4d07a4434`) are historical. Packaging-only followup retains the frozen candidate bundle as `copied_site/main.js.txt`, with a custody mapping to restore `main.js`; its bytes and original distribution/served manifests remain unchanged. The current archive ledger covers 949 payloads (950 files including the ledger), SHA-256 `3c5d173b2656e0fbbba8431ca496902fe723d15e9c32488cc8f9c13bfc0b4ff6`; exact membership and every hash pass. |
| A0 source/API receipt | ACCEPTED | Manager accepted 2026-10-15. Main SHA-256 `7046a97d1c9ed6ce6ddc07c2f758f5abefda121a472bf185ff92f1660741805b`; map SHA-256 `3774cc312a633052a59d2ca0ccdf645d2876f4c55763b24707594ca70c02483e`. Readonly API is `ORGAN_THEMES` and `draw_tissue_surface`; six stages/assets migrated. Custody copies `test-results/anatomical_world/migration/verification.json` and `smoke.json` record protected-content and M1 checks. |
| M1 migration | ACCEPTED | Manager fresh check: 67 code checks, both TypeScript configurations, lint, and format pass; production build plus six-organ normal/reduced Replay smoke pass. Play, pause, freeze, resume, retry, and 13 SVG decodes had zero errors. Protected mechanics checksum `80806bfa0841f9968defd23d5d729fe81ca213f7d4f093ba0bd4903321c72d5a` matches baseline excluding exactly the eight presentation fields recorded by the migration verification. |
| M2 source implementation | DONE | Opening and later organ SVGs, three foreground modules, linkage/copy, and the scoped villain-name backplate are complete. Owner receipts: `test-results/anatomical_world/art_opening/ART_RECEIPT.md`, `art_late/evidence.md`, `foreground/source_receipt.json`, `linkage_copy/README.md`, and `villain_labels/proof.json`. Type/API stayed unchanged. |
| M2 integrated validation | PASS | Frozen built-browser final signoff is DONE. Main lane: 18 ordinary-key completions = fresh 02 (1), seven required stable IDs in both modes (14), and normal 14/19/21 (3). Separate supplementary lane: four successful recovery probes (23 and 22, both modes), two repeated finale completions, and normal stable 11 power warning/outage/return. Legacy profile preserves all 20 old Replay rooms, all three added Ready rooms, and preferences on reload. All accepted lanes have zero app/network errors. Browser FINAL_VERIFICATION.json records 454 accepted PNGs and allPass true. |
| Fresh SPEC | ACCEPTED | Fresh review accepted main SHA-256 `5143922d0da6d28dec92d452124bd2c60aa089419201c2f23da1a0bc7e085a73` and map `64926c792632f5e573c1e4089da24f494a59e2b7569f68b6b3ea71fada37e821`. Independent source review matched 74 source/test hashes and 42 bundled sources; protected 23-room checksum remains unchanged. |
| Fresh QUALITY | ACCEPTED | Independent review inspected 23 built normal openings, six organ scenes in normal/reduced motion, and representative tissue, valve, fragile, stabilized, counterweight load/dock, and villain-label states. No defects found. |
| Frozen build and permanent browser checks | PASS | Manager-fresh codebase check passes 67 tests, both TypeScript configurations, lint, and format. Three production builds have identical main/map bytes. All 42 source-map entries (40 authored), 75 source/build-input freezes, 18 served files, 13 SVGs, and 26 byte-identical protected modules pass. Final permanent Playwright run passes 2/2 with the original two workers; earlier one-worker rerun also passes 2/2. Earlier sandbox launch denial and a nonrecurring connection reset remain recorded in candidate_build/receipt.txt. |
| Pure tissue/render contract probe | PASS | Independent probe: 1,128 frozen renders, 282 reduced-motion pixel pairs, 5,760 surface cases, 140 objects, 288 exact active edges, 288 hollow centers, and 3 clipping-state cases; zero product failures. Canonical receipt: `test-results/anatomical_world/render_validation/`. |
| M3 closeout | DONE | Frozen technical/browser checks, canonical screenshots, final archive custody, and documentation are complete. Fresh independent integration review accepts the final evidence-bound closeout. |
| Integration | ACCEPTED | Explicit manager acceptance on 2026-10-15 after fresh SPEC, QUALITY, and integration reviews. Anatomical milestone DONE; continuous game development ACTIVE. |

Implementation status is DONE. M1 and whole-milestone integration are ACCEPTED; M2 source and M3
closeout are DONE. Frozen technical checks, final browser acceptance, fresh SPEC/QUALITY/integration
reviews, documentation, and final archive custody pass. The manager explicitly accepted this
milestone on 2026-10-15. The earlier difficulty assessment milestone stays DONE; continuous game
development stays ACTIVE. Human enjoyment, novice clarity, and paired-player comfort remain
unmeasured.
