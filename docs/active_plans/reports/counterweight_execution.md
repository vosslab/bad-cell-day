# Counterweight execution ledger

Status: DONE for the integrated counterweight milestone; continuous gameplay improvement remains
ACTIVE. Source-frozen checks, targeted browser acceptance, permanent browser tests, and the full
campaign pass. The approved direction is
[counterweight_direction.md](counterweight_direction.md).

## Final candidate

- Main artifact SHA-256: `a3a900f994066a3c62436c881b324330c480bd8ab997fe2d1b7574faf033fe40`
- Source-map SHA-256: `1a488b599a574fa603ab69122fe04e3b6b63230db31a6c0e67e91b573acfe498`
- Canonical 50 checks and production build: PASS.
- Permanent browser tests: 2/2 pass in 2.4 seconds.
- Fresh targeted route/recovery evidence: source-level acceptance passes seven approach heights,
  revisit behavior, and the former inner-wall pin through completion. Formal quality review accepts
  corrected source and normal/reduced actual images.
- Full 23-room fresh-save browser run: PASS, exit 0, Play plus 22 Next actions, zero retries/errors,
  byte-identical reload, 23 Replay entries, 36/36 mapped entries (34 authored sources and 2
  dependencies) match, and six images decode. See [counterweight_campaign_browser.md](counterweight_campaign_browser.md).
- Focused built-browser acceptance: 34 normal-motion, 18 reduced-motion, and five actual-floor
  reboarding samples pass with zero errors. Both motion modes recover the inner pin through recess,
  parking, return delivery, and completion. All 34 authored map sources match; final screenshots
  were inspected. See [counterweight_browser.md](counterweight_browser.md).
- The README captures the outbound 2:1 load scene at
  [cargo_exchange.png](../../../docs/screenshots/cargo_exchange.png).

## Frozen baseline

The accepted hero-response campaign historically contained 22 rooms. Its preserved snapshot is
`/private/tmp/bad_cell_day_hero_22_baseline`, with main artifact hash `facb9769`.
Prior accepted reports remain historical evidence for that artifact.

## Completed work

- The frozen foundation provides the typed pair contract, shared passenger clutch, atomic support
  and collision transaction, runtime initialization, authored validation, and visible load/rider cues.
- Numeric review accepts the edge-scaled ULP contact boundary: only arithmetic-scale initial overlap
  counts as contact; meaningful penetration blocks. This contract preserves ordinary collision and
  support predicates.
- Current room, recovery-bay, and shared HUD/dialogue layout fixes are integrated in the frozen
  candidate. Prior
  candidate `ab997ae` completed all 23 rooms with zero errors and retained 23 Replay entries, but
  failed source-freeze verification and showed mandatory-crate pinning plus dialogue overlap. It is
  historical candidate evidence, not final acceptance.
- The authored dock correction uses a bottom inner recovery recess, a 14px stop, and an existing
  any-body LOWER DOCK latch that opens a safety gate only near full bottom alignment. An always-open
  bay let cargo leave mid-trip and strand 28px below the deck. The latest focused room proof passes
  the full route with a 1500-frame hold, a pin, two hops into recovery space, unloading, and clear.
  This is room-local authored safety geometry, not a new engine feature. The frozen candidate's
  built-browser targeted proof passes: 34 normal-motion and 18 reduced-motion samples plus five
  actual-floor reboarding samples, with zero browser errors. The pin recovery route completes in
  both motion settings, and final screenshots were inspected. See
  [counterweight_browser.md](counterweight_browser.md).
- [levels.ts](../../../src/levels.ts) registers the authored counterweight room and scene, places
  stable `level_23` after `level_10` and before `level_12`, and preserves all prior rooms' relative
  order, including rooms 21/22 and the final ending room. This places its reciprocal two-trip
  cargo, two-passenger clutch, and minimum-weight return-crate delivery after the existing lane,
  weight, and together-boarding lessons.
- Canonical campaign construction invokes `validate_counterweights` for every room alongside
  villain-scene validation. The direct validator remains exported by its owning module.
- Progress remains owned by the existing stable-ID save implementation; no save schema changes.

## Candidate-source checks

The following checks passed for an earlier integrated candidate, before a new production build;
they are not final acceptance for the corrected room and presentation sources:

- An inline `node --import tsx` import of the canonical campaign validates all 23 definitions.
  Temporary assertions confirm the insertion and compare the prior 22 relative order with the
  baseline list, including the finale last. No count-pinned permanent test is added.
- `npx tsc --noEmit -p tsconfig.json` passes.
- `node --import tsx --test tests/test_save_load.mjs` passes all five tests, including synthetic
  insertion at existing frontiers, legacy earned replay, completion, and reload.
- `npx prettier --check src/levels.ts` passes.

Scripted routes establish feasibility, not novice discovery, enjoyment, or coordination between
two human players.
