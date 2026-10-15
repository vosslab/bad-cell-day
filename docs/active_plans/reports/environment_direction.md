# Living tumor districts

Status: ACTIVE. Updated 2026-10-15. This execution contract covers one presentation milestone:
six original district backgrounds that make the living tumor recognizable while keeping the
cooperative routes readable. The manager approves this scope under the human's continuing game
improvement direction. The architect approves the composer boundary with static scenery for this
milestone; acceptance remains open until the ledger below has evidence.

## Baseline and stability

The manager identifies source-frozen bundle SHA-256
`a3a900f994066a3c62436c881b324330c480bd8ab997fe2d1b7574faf033fe40` as the accepted
23-room campaign baseline: canonical checks, production build, permanent browser checks, and a
fresh full campaign pass. The focused 57-sample counterweight clarification passes, and fresh quality
and integration reviews ACCEPT. The custody snapshot at
`/private/tmp/bad_cell_day_counterweight_23_baseline` has a verified 12-file SHA manifest and
byte-identical source copies. The counterweight milestone is complete.
These are supplied baseline facts, not new verification performed by this document.

Before integrating source, retain the snapshot, exact source manifest, bundle hash, and clarification
result. If new evidence exposes an unresolved gameplay failure, pause this milestone and use
a separate narrow stabilization plan. This document does not redesign counterweights or algorithms.

Live source inspection confirms that `render_game.ts` owns the six theme tuples, procedural tissue,
stage machinery, and background title. Theme accent also colors platforms. `render_tumor_organs.ts`
caches SVG images and renders separate encounter organs and the finale core. The build explicitly
preflights, copies, and asserts each required SVG. These are the integration boundaries.

## Execution contract

1. Finish the six static, animation-free transparent SVGs with `viewBox="0 0 1100 620"`.
   Use softened plum and burgundy,
   broad peripheral silhouettes, and an open interior. Each stage has a distinct anatomical identity;
   decoration must read behind solid platforms, hazards, interaction cues, heroes, and the HUD.
2. Add `src/render_environment.ts` as the owner of stage themes, background image cache, and
   `draw_environment(context, state, time)`. Move the existing six theme tuples unchanged and export
   a typed `STAGE_THEMES` or equivalent so platform accents retain their exact current values.
3. Use `state.level.stage` as the sole asset selector. Draw the existing gradient wash, the
   corresponding SVG scaled to the authored world dimensions, then the existing title. Lazily cache
   the six `HTMLImageElement` instances, creating each once. Draw only when `image.complete &&
   image.naturalWidth > 0`, and balance canvas save/restore. While pending, show wash and
   title only. A required asset load failure fails acceptance; do not mask it with generic scenery.
4. Replace the background call in `render_game.ts`; remove its old tissue and machinery paths so
   scenery is not duplicated. Preserve every subsequent draw layer and the existing encounter
   organs/core. Keep hero/villain artwork, platform drawing, collision, simulation, UI, saves, and
   physics unchanged. Retain `circle()`, which other foreground drawing still uses. Preserve the
   caller's reduced-motion `time = 0` contract. Render scenery statically in both motion modes;
   any later breathing animation needs separate direction.
5. Extend required-asset preflight, copy, and output assertions in `build_github_pages.sh` for all
   six files. Missing sources fail before the destructive distribution rebuild.

## File scope and custody

| Files | Ownership and purpose |
| --- | --- |
| `src/assets/environment_garden.svg`, `environment_sewers.svg`, `environment_laboratory.svg`, `environment_factory.svg`, `environment_citadel.svg`, `environment_boss.svg` in that same directory | `tumor_district_art` owns these six original editable assets. |
| `src/render_environment.ts`, `src/render_game.ts`, `build_github_pages.sh` | A later integration worker owns the approved composer, call replacement, theme relocation, and packaging. |
| This report and canonical documentation records | Manager owns acceptance updates and records the completed change in the changelog and settled decision record. |
| Frozen baseline and final evidence | Manager retains identified artifacts outside transient browser-output cleanup paths. |

Workers share the checkout and preserve other workers' edits. Scope changes involving gameplay,
additional modules, animation systems, or asset pipelines return to the manager; architecture
decisions and cross-cutting changes require architect approval. This document is the only artifact
written by its planning task.

## Acceptance ledger

All rows are pending until the manager supplies the exact artifact, result, and retained evidence.
Source completion alone does not close visual or ordinary-input acceptance.

| Check | Required evidence | State |
| --- | --- | --- |
| Stable baseline | Manager verifies the 12-file snapshot manifest/source copies, 57-sample clarification, full 23-room pass, and fresh quality/integration acceptance. | PASS |
| Architecture boundary | Architect approves bounded composer/cache/theme ownership, static scenery, retained foreground helpers, and unchanged gameplay owners. | APPROVED |
| Packaging | All six source SVGs present; canonical build copies all six; browser decodes each with nonzero natural dimensions and no asset errors. | Pending |
| Six district identities | Contact sheet of one representative room per stage from the identified build; each has distinct peripheral anatomy and open playable space. | Pending |
| Motion and layer isolation | Same-state normal/reduced captures preserve geometry, title, platform accents, and foreground visibility; zero-time presentation is static. | Pending |
| Dense mechanisms | Hardest stable room `level_23` preserves cargo, deck edges, ropes, rider/load cues, and HUD readability. | Pending |
| Encounter visibility | Stable `level_13` shows Gem/FLOAT clearly; stable `level_20` preserves finale core, target lamps, joint finish, and panel readability. | Pending |
| Ordinary-input routes | Actual keyboard routes through representative scenes, Cargo Exchange, FLOAT encounter, and finale remain operable; record pause/retry and errors. | Pending |
| Render purity | Temporary same-state render probe checks exact simulation-state equality before/after render, including loaded/pending assets and zero/nonzero presentation time. | Pending |
| Canonical checks | `./check_codebase.sh`, `./build_github_pages.sh`, and `./run_playwright_tests.sh` pass on the identified final artifact. | Pending |
| Gameplay custody | Baseline manifest comparison establishes byte-identical gameplay, level, save, UI, and physics owners; inspect the renderer diff for the bounded changes above. | Pending |

Keep one-time probes under `tests/_temp/` and remove them at closeout. Do not add permanent tests
for SVG coordinates, path counts, room counts, or tunable art details. Render purity is meaningful
temporary evidence because asynchronous image loading and presentation must never alter gameplay.

If unchanged gameplay ownership and focused routes pass, the accepted baseline full-campaign proof
supports this presentation-only milestone; another full 23-room traversal is not mandatory.
Opening screenshots of all 23 rooms are optional additional visual evidence. Any gameplay-owner
change, route failure, or new regression invalidates that shortcut and requires focused diagnosis
and appropriately broadened verification before acceptance.

## Risks and closeout

Scenery can resemble solid ground, obscure narrow edges, compete with colored controls, or crowd
the finale panel. Correct those failures in the owning SVG or bounded composition, then recapture
the affected scene and both motion modes. Asset load failures require packaging/path repair and
a fresh decode check. State mutation requires isolation correction and a rerun of the purity probe.
Do not compensate through geometry, controls, or additional generic fallback art.

Close only after the ledger records the final source manifest and bundle hash, required images,
commands, and ordinary-input results. Report observed operability and legibility separately from
human discovery, enjoyment, or two-person play, which remain unmeasured.
