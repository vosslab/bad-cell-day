# A Little Push: production integration and acceptance

## Status

**ROOT ACCEPTED DONE_WITH_CONCERNS for the bounded milestone.** Stable `level_36` follows `level_21` and precedes `level_13` in marrow. Preserve all previous 35 rooms and keep `level_20` last. This authorizes the production source, campaign registration, display polish, and ignored evidence archive described here. It does not establish human playability or release readiness. Native fixture evidence is in `tests/_temp/helpful_shove_feasibility/REPORT.md`; production evidence belongs in ignored `tests/_temp/helpful_shove_production/REPORT.md`.

## Production contract and ownership

Copy the frozen fixture at SHA-256 `e9b07468fb7ccbb3ae8a795f02dd3db3b78e25d17bebaeca5a17ef98aaa3c820` exactly for mechanics: actor/platform positions and sizes, launch and far-deck heights, recovery floor and low return step, upper route and sealed gate, SAFE LANDING and persistent far-latch effects, exits, and Cana's SHOVE. The level module exports `HELPFUL_SHOVE_LEVEL` and `HELPFUL_SHOVE_SCENE`; `src/levels.ts` registers it through the existing scene map, campaign order, and definitions array. Keep the embedded fixture scene out of the level literal. No engine, shared type, state, config, asset, build, public document, or permanent test changes are in scope.

Authorized display text: title `A Little Push`; subtitle says Cana's accidental help can be returned as a favor; pad label `OPEN ISP` retains the existing `far_latch` id and effects. Hint: Isp holds SAFE LANDING; Pac jumps with Cana's RIGHT-GOING throw for extra distance; OPEN ISP keeps the landing safe and frees Isp; missed jumps use the lower return fold. The fixture proves a grounded jump before impact and later coyote-forgiving inputs, so do not frame coyote time as a hidden requirement. Fill both actors' empty opening and ending strings with short original jokes about Cana accidentally helping; Gem may spectate. Text changes do not authorize mechanical changes.

## Corrected native evidence

The original feasibility report and raw evidence remain preserved. Its `no_boost_coyote.mjs` did not actually move Isp despite the report's claim, so its 20 px shortfall is not accepted. Root reran the exact frozen fixture with an `interference=[]` clone and no injected state; Isp walked for 52 frames, and SAFE LANDING plus the open membrane were asserted on every later frame. Across 70 takeoffs (frames 112-181), 56 jumps fired and none reached the far deck; maximum right edge was x497 against deck x510, a 13 px shortfall. Root's run log is `/private/tmp/helpful_shove_root_native.log`. The final fixture's four successful ordinary traces (856, 862, 868, and 874 frames) and 1194-frame miss/retry trace were independently replayed; all exits complete; the authored spawn boxes have zero strict overlap in the initial geometry check. These results validate feasibility only. The older ccfa fixture hash is historical; H6's e9b07468... hash is authoritative. Do not rewrite raw evidence or claim it came from a different fixture.

## Completed gates and evidence

1. **Production integration:** PASS. Exported mechanics match the frozen JSON, four success traces and one miss/retry RLE replay against the exported room, and the 36-room roster preserves the prior definition/order hash with `level_20` final.
2. **Source checks:** PASS. TypeScript, scoped ESLint, Prettier, and diff checks pass. Scratch JS remains `.mjs`/`.txt`; root owns the delivered `dist/` build.
3. **Integrated code gate and build:** PASS. Root reports 90 code checks, official build, two standard smokes on retry, source-current identity, and served asset parity.
4. **Fresh browser acceptance on the delivered build:** DONE. Focused normal-motion grounded SHOVE clear, reduced-motion missed-jump recovery/retry, seeded progress, Next, reload, and the legacy 35-room save check passed. The owner report is in ignored `tests/_temp/helpful_shove_browser/REPORT.md`; it is not exhaustive human play.
5. **Fresh reviews:** QUALITY and integration ACCEPT_WITH_CONCERNS. QUALITY notes a nonblocking partial Pac-sprite occlusion of the active OPEN ISP plaque while Pac occupies the pad. Root accepts DONE_WITH_CONCERNS; the integration report is in ignored `tests/_temp/helpful_shove_final_integration/REPORT.md`.

The native far-deck landing has about 12-16 px of overlap, a tight timing and landing margin. The corrected no-boost run is one bounded direct-approach sweep, not exhaustive proof that no possible no-boost route exists. Existing raw feasibility evidence and its earlier incorrect label stay intact for auditability.

## Accepted route geometry

World 1100x620. Pac starts at x40 in the safe bay; Cana fires right across the approach. Launch ledge is x100-310 at y430. The far unstable deck is x510-740 at y390, so its 40px rise shortens ordinary-jump airtime; this deliberately revises the original equal-height hypothesis. A Pac-specific membrane protects the deck until Isp holds SAFE LANDING. The safe floor is y550; one low step at x330-410,y500 returns Pac to launch. Isp starts on the sealed upper route x0–1100 at y270 and cannot leave before Pac latches arrival through the full-height x700 gate.
