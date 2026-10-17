# Lung recoil room plan

**Status: ROOT ACCEPTED, DONE_WITH_CONCERNS.** Root kept the bounded private experiment with
`DONE_WITH_CONCERNS` and accepted the production milestone after the final code/build/browser gates
and production SPEC, QUALITY, and integration reviews. Runtime, approved art, and renderer
integration are complete. Scripted evidence does not establish human discovery, enjoyment, or
paired-keyboard comfort.

## Goal and evidence

Design one cooperative lung room around two heroes jointly loading living tissue, then releasing a
partner into a reciprocal return route. Both heroes must have necessary, distinct work. The room
needs an ordinary-input miss and retry path, and the recurring villain must take an active,
legible role. Preserve ordinary movement and the existing campaign finale.

The private R2 report at `tests/_temp/lung_recoil_r2/REPORT.md` records a full first-order clear and
an assisted fresh-jump clear at native 120 Hz, upper return paths, and a miss/retry. Its copied
physics kernel changes only when standing
and coyote time refresh; its launch transition sets `vy = -730`, clears grounded/support state,
resets coyote time, and preserves the ordinary jump buffer and held state. Representative coyote,
buffered-landing, resting-platform, and moving-platform jump controls matched the baseline. The R2
report is candidate evidence; production behavior is established separately by the implementation
and native report below. Browser acceptance and human discovery remain unproven. See the
[prototype plan](lung_recoil_prototype.md).

The current campaign has 36 rooms. Add stable `level_37`, titled **Hold Your Breath**, immediately
after `level_03` at the end of the lungs chapter. Preserve all 36 existing definitions and their
relative order, and keep `level_20` final. The [current gameplay direction](../reports/gameplay_direction.md)
asks new rooms to create distinct cooperative decisions, preserve recoverable legal play, and keep
human play claims separate from scripted evidence.

## Approved production contract

- Author participation with exactly `PlatformDefinition` kind `"recoil"`. Recoil uses fixed
  vertical speed `-730`; it has no force setting or persistent runtime state.
- At the start of each actual native physics substep, snapshot whether both players are grounded
  directly on the same recoil platform. After ordinary movement, exactly one still directly
  supported by that platform launches. Clear that player's grounded/support/coyote state and
  preserve jump buffer and held-jump state.
- Refresh standing and coyote time from geometry only when vertical velocity is nonnegative.
  Preserve existing FLOAT and STICKY semantics without recoil-specific cancellation or override.
  The room uses recurring Cana, so FLOAT is not combined with recoil in this room; check ordinary
  effect behavior separately if production regression evidence requires it.
- Do not add generic stage validation or other speculative state. No validator is needed to require
  recoil only in lung-stage definitions.
- Geometry begins as a hypothesis: living tissue at `x=400, y=480, w=300, h=80`, reaching the
  fallback floor at `y=560`, with prototype-aligned top and width. The single physics/room owner
  must prove actual landings, upper destinations, return stairs, exits, and recurring Cana behavior
  against production simulation before the collision/art contract is frozen.

## Approach and ownership

1. **A0 - contract stub.** Add only the approved `kind: "recoil"` union arm to
   `src/types/level.ts`; typecheck immediately. The type owner records the accepted production
   contract and root's prototype decision.
2. **Production implementation and evidence.** One physics/room owner implements the approved
   physics/platform contract and room together. Keep room geometry and event handling local where
   possible. Prove the actual room geometry and recurring Cana behavior through the simulation.
   Freeze the collision rectangle and art contract from that evidence, then add Astra's SVG scenery
   and integrate it in the renderer. Do not alter existing room definitions, frozen `current36`
   evidence, or generated campaign indexes/maps.
3. **Production SPEC, QUALITY, integration.** After implementation and its evidence are complete,
   perform a fresh SPEC review, then a different QUALITY review, then a fresh integration review.
   Address blockers between reviews; root owns scope changes and final acceptance. A separate
   preimplementation architect approval gate is not part of this approved plan.

## Verification

- Replay the actual production room through the native game APIs with ordinary inputs: full
  reciprocal completion, fresh jump during launch, missed launch with recovery/retry, solo attempt,
  and a two-player route that omits recoil. Record controls, outcomes, source identity, and traces
  in an ignored `tests/_temp/` report. Confirm both heroes contribute and villain behavior is
  active in the intended route.
- Compare representative ordinary movement controls, including buffered/fresh jump and relevant
  platform support, to the pre-change behavior. Retain permanent tests only for stable, meaningful
  contracts such as release activation and the fresh-jump seam; keep route matrices and tunable
  geometry probes temporary.
- Run root-owned `./check_codebase.sh`, the official `./build_github_pages.sh`, and both standard
  browser smokes. On the built game, use the existing
  [`devel/capture_gameplay_screenshots.mjs`](../../../devel/capture_gameplay_screenshots.mjs)
  ordinary-key route for gameplay images that verify a clear, readable launch/landing art, and
  recovery. The required save/order Playwright assertions may be a narrowly scoped one-time check
  under ignored `tests/_temp/`; no new capture framework or preview interface is needed.
- Verify stable-ID save/order behavior: fresh unlock after `level_03`, completion and reload of
  `level_37`, old earned IDs remain replayable, and the existing finale remains last. The old
  36-room campaign map remains historical evidence after insertion; do not create a full 37-room
  difficulty assessment or journey gate in this milestone.
- Keep claims separate: native traces establish scripted simulation behavior; built-browser
  checks establish the shipped interaction and rendering; expert reviews assess source and
  integration; human pair play is still needed for discovery, comfort, and enjoyment claims.

## File scope

Expected production files under root's authorization:

- `src/types/level.ts`, `src/physics.ts`, and the directly required simulation/state modules for
  the approved recoil contract.
- `src/level_lung_recoil.ts` for the authored room and its villain scene.
- `src/levels.ts` for scene registration, definitions, and campaign placement.
- `src/assets/` for the approved Astra SVG, followed by the required renderer file(s).
- `tests/_temp/lung_recoil_production/` for ignored native/browser evidence only.

No changelog entry was added in this A0 contract task; the production implementation owner records
the implementation closeout in the repository changelog.

## Ledger

| Gate | Owner | State | Evidence or decision |
| --- | --- | --- | --- |
| Root production decision | Root | COMPLETE | KEEP the bounded private experiment, `DONE_WITH_CONCERNS`; SPEC, QUALITY, and integration accepted. See prototype and integration reports. |
| A0 contract stub | Boundary/type owner | COMPLETE | Added exactly one `kind: "recoil"` arm; `npx tsc --noEmit -p tsconfig.json` passed. |
| Production and native evidence | Physics/room owner | COMPLETE | Actual production clears reciprocally and after a miss/retry at native 120 Hz; a fresh jump during launch clears, while solo and no-joint controls do not release. Recurring Cana throws and shove-caused retry are traced. Old 36 serialized definitions and relative order compare equal; `level_37` follows `level_03`, and `level_20` stays last. Final geometry: body x400/y480/300x80, reboard step x800/y500/80x16, and right return walkway x920/y445/80x16 (D19). See ignored `tests/_temp/lung_recoil_production/README.md` and raw traces. |
| Tissue art | Astra asset owner; root approval | COMPLETE | Approved D20 `src/assets/lung_recoil_tissue.svg`: 300x160, two frames (resting/loaded), fixed rim; SHA-256 `adc2912c4555ed0104c81314b425e8a160688f4d48de03475d44aae0c6fedfc9`. See `tests/_temp/lung_recoil_art/ART_REPORT.md`. |
| Renderer integration | `lung_recoil_render` owner | COMPLETE | Renderer owner reports main TypeScript check, format, and shell syntax pass. |
| Permanent recoil contracts | Runtime owner | COMPLETE | Both contract tests in `tests/test_recoil.mjs` pass; main TypeScript check exits 0. |
| Canonical code gate | Root / lint-type owner | COMPLETE | D21 resolved the Node ambient-type configuration gap. Root canonical gate passed: 92/92 checks, both TypeScript checks, lint, and format. |
| Initial build and browser smokes | Root | COMPLETE | First official build and both standard browser smokes passed before renderer/art integration. |
| Final code/build and browser smokes | Root | COMPLETE | Final canonical gate passed (92/92 checks, both TypeScript checks, lint, and format); official build and both standard browser smokes passed. Built source parity passed for main `4f911d92fa403cfc393cf8760d07d3639e598ce1113baa7a5ad9618ce6133750`, map `d43c5fb2ff0fdcddd60339e19d09912bcd9037ccdd8a128636d33a62bbd4b7e4`, and the approved SVG. Index/main/map/new-SVG requests returned 8127 HTTP 200 with disk parity. |
| Focused built-browser acceptance | Root / implementation owner | COMPLETE | `tests/_temp/lung_recoil_browser/REPORT.md` records save/order receipts and four final views. Both full and retry ledgers end with zero deaths/errors; loaded/airborne states are readable. Unlock, completion, reload, legacy 36-room replay, `level_37` Ready, and `level_20` last passed. Root inspected receipts and two images. Intermediate SHOVE/re-entry is supported by the native D19 trace; the capture tool's terminal-only intermediate states were not independently observed in the browser. Reduced-motion was not captured because the tool fixes that preference to false. |
| Production SPEC | Fresh SPEC reviewer | ACCEPT_WITH_CONCERNS | No blockers or plan drift; see `tests/_temp/lung_recoil_production_spec/REPORT.md`. |
| QUALITY | Different fresh reviewer | ACCEPT_WITH_CONCERNS | See `tests/_temp/lung_recoil_production_quality/REPORT.md`. Its nonblocking shared-pad-plaque scope question is resolved by the accepted Cana-switchboard evidence: `tests/_temp/cana_switchboard_spec_recheck/REPORT.md`, `tests/_temp/cana_switchboard_quality/REPORT.md`, and the tracked [Cana-switchboard acceptance](../reports/cana_switchboard_acceptance.md). Recoil adds only its new overlay and build-list entry. |
| Integration | Fresh integration reviewer | ACCEPT_WITH_CONCERNS | No blockers or plan drift; see `tests/_temp/lung_recoil_production_integration/REPORT.md`. It confirms the plaque concern's accepted Cana-switchboard origin. |
| Root acceptance | Root | ACCEPTED, DONE_WITH_CONCERNS | All required production gates are complete. Limits remain: native route evidence is scripted; focused browser evidence does not capture reduced motion or independently show terminal-only intermediate states; human discovery, comfort, and enjoyment remain untested. No full 37-room journey/map gate or new feature queue is part of this milestone. |
