# Fresh gameplay execution

Updated 2026-10-15. This ledger tracks current work to make the cooperative game
better through tangible, playable improvements. Overnight reports are baseline
evidence; they do not complete this work or limit its scope. There is no master plan
or approval gate. Clarification and challenges are welcome.

| Task | Status | Evidence or next decision |
| --- | --- | --- |
| Boss charge and finale | DONE; specification, quality, and integration ACCEPT | Reciprocal handoff, interrupted charge, recovery, and shared shutdown pass. |
| Original finale art | DONE; integrated art ACCEPT | State-linked core and target feedback remain legible in the final build. |
| New cooperative rooms | DONE; specification, quality, and integration ACCEPT | Distinct upper/lower routes in room 21; inward/return shortcut in room 22. |
| Campaign/save integration | DONE | Stable-ID tests and continuous fresh-save 22-room journey pass; reload retains 22 Replay entries. |
| Targeted browser verification | DONE | Eight final-build normal/recovery runs pass, including both room 21 catch-wall regressions. |
| Expansion automated gates | DONE; historical baseline | 33 unit tests plus type/lint/format, production build, and two permanent browser tests pass. |
| Hero response and lift presentation | DONE; source reviews and browser acceptance pass | 38 current unit tests; corrected-build normal/reduced targeted checks and fresh 22-room regression pass. |

The 22-room playable expansion milestone is complete. The continuous development goal remains
active; this report stays a living ledger. Human enjoyment, novice discovery, two-human coordination,
and subjective reduced-motion comfort remain unmeasured. Scripted success establishes operability.
The fresh direction in [gameplay_direction.md](gameplay_direction.md) supersedes assumptions in the
older master plan; historical reports retain their original checkpoint claims.

## Accepted expansion baseline

Historical expansion `dist/main.js` SHA-256:
`ac0a8f29eeff6f604896f251c59d6ac2f4b6dd05eb8d9ba7a96267a1fdb472d6`.
Source provenance covers 29 authored sources and two Solid dependency sources: 31 mapped sources
in total. The final browser reports identify this frozen artifact.

- `./check_codebase.sh`: 33 unit tests pass, with type, lint, and format checks passing.
- `./build_github_pages.sh`: production build passes.
- `./run_playwright_tests.sh --output=/private/tmp/bad_cell_day_fresh_smoke --workers=1`:
  two permanent browser tests pass in 2.3 seconds on the final build.
- [fresh_campaign_browser.md](fresh_campaign_browser.md): all 22 rooms complete continuously
  using a fresh save, visible Play/Next, and ordinary keyboard input. Zero retries, page/console
  errors, failed requests, or HTTP errors; reload preserves all 22 Replay entries.
- [fresh_gameplay_browser.md](fresh_gameplay_browser.md): eight normal/recovery runs for stable
  rooms 20/21/22 pass, including room 21 wrong-order left miss and powered-lift right miss.
  Each has one intentional opening retry, zero automatic deaths, and zero browser/network errors.
- Core, finale, new-room specification/quality, and final integration review: ACCEPT.
  Integrated art evidence is in [fresh_finale_art.md](fresh_finale_art.md).

## Campaign and recovery decisions

All 20 previous stable IDs retain their relative order. Room 21 sits between 12/13, room 22
between 17/19, and stable room 20 remains the final encounter at campaign position 22. Five
focused save tests cover legacy frontiers, earned-successor replay, and inserted-room reload
without coupling their assertions to the campaign count.

Across the Divide intentionally uses distinct upper/lower routes, successive reciprocal handoffs,
and convergence. Crossed Paths supplies the partner-opened backtracking shortcut. A shortcut is
not a missing room 21 acceptance requirement. Adversarial review found two living catch-shelf
traps in room 21; local Isp-only left/right walls now contain those misses while preserving the
boarding-notch return. Both recoveries complete through ordinary input on the final build.

Durable final-build captures are [split_route_relay.png](../../screenshots/split_route_relay.png)
and [tumor_core_shutdown.png](../../screenshots/tumor_core_shutdown.png). They preserve the
original browser PNG bytes; detailed temporary captures and JSON remain under
`test-results/fresh_browser/` and `test-results/fresh_campaign/`.

## Retained overnight evidence

The historical `test-results/overnight_final` directory was copied in full to
`/private/tmp/bad_cell_day_retained_overnight` before removing its lint-contaminating
`reduced_trial_harness.mjs` from the working tree. The copy contains 77 files. Its
sorted per-file SHA-256 manifest is
`/private/tmp/bad_cell_day_retained_overnight.verify.sha256`; the manifest SHA-256 is
`c1901ea880317b973498e76b3333180c881b4bb44e8d7a19136abeffb6ff5f99`.
The manifest compared byte-for-byte with a manifest of the original directory before
the harness was removed. A second whole-manifest file is
`/private/tmp/bad_cell_day_retained_overnight.sha256` (SHA-256
`0427e9446448c37cf0e9f57d5dcb8cc015f9c9d5779e801ec21311101f4aa30c`).

Commands in [overnight_final_browser.md](overnight_final_browser.md) that rerun the
old harness from `test-results/overnight_final/reduced_trial_harness.mjs` are
historical. The original evidence is preserved in the snapshot even if a later
browser runner clears the working-tree output directory. The baseline lint finding
was confined to that retained browser harness; no product or lint configuration was
changed. No commits or publication were made.

## Subsequent hero-response pass

The accepted expansion milestone above remains a historical baseline. Investigations in
[lift_playability.md](lift_playability.md) and
[game_feel_opportunities.md](game_feel_opportunities.md) selected visible support/latch hero
responses, paired victory, and authored lift boarding/recovery guidance. The response pass preserves
physics, timing, geometry, controls and save rules. Its final corrected build passes 38 tests,
type/lint/format, production build, two permanent browser tests in 2.6 seconds, and targeted
normal/reduced browser checks. The final corrected-build fresh 22-room regression passes with zero retries/errors, byte-identical
save reload and all 22 Replay entries; all 33 sources match disk (31 authored plus two dependencies).
See [hero_campaign_browser.md](hero_campaign_browser.md).
See [hero_response_execution.md](hero_response_execution.md) and
[hero_response_browser.md](hero_response_browser.md) for current hashes, resolved badge overlap,
evidence and explicit acceptance limits. Hero-response milestone is DONE; continuous development remains ACTIVE. The next bounded
investigation probes whether Cana's deliberate shove can create a useful route choice; it is a
feasibility investigation, not a production commitment.

Validation harness custody: five former `tests/_temp/*.mjs` drivers are preserved as byte-verified
`.mjs.txt` copies, SHA-256 manifest, and `README.txt` under
`test-results/fresh_validation_harnesses/` and
`/private/tmp/bad_cell_day_22_validation_harnesses`. Restore the original `.mjs` names into
`tests/_temp/` before rerunning from the repository root; the `.mjs.txt` archives are not directly
runnable. This keeps JavaScript lint discovery clear while retaining the full-campaign driver
and focused route/browser harnesses. Consult the retained README for serving and argument context.
