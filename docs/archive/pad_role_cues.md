# Pad role cues

**Status:** DONE_WITH_CONCERNS. Fresh SPEC, QUALITY, and integration accept with concerns; root accepts the bounded cue change. Root closed current38 as `DONE_WITH_CONCERNS` and froze its records, captures, map, report, and findings as the pre-cue baseline. The initial built-game capture showed the long level07 label clipped by the two island gates; the exact label was shortened to **"STEADY + PARK FERRY"** while retaining both action cues. The final default-size capture shows the full label and both role cards; the ordinary route reaches both exits. The active-pad view shows Pac overlapping part of the label while standing on it, accepted as a preexisting nonblocking overlap. Human discovery, confusion reduction, and fun remain unmeasured. The continuous gameplay goal remains ACTIVE.

## Goal and evidence

Clarify what the two heroes' pad colors mean across the campaign and make the local effects of Pac's STEADY pad visible in position 10, **Double Trouble** (`level_07`). Preserve the room's puzzle: players should see what the pad affects and infer when Pac should step away.

Current38 ranks role-card scope and the level 07 release order first among follow-up clarity opportunities. The cards say Isp stops machinery on blue pads and Pac steadies orange platforms, although pads can also open doors, latch routes, and power lifts. In `level_07`, Pac's `steady` pad stabilizes the bridge, opens Isp's bridge door, and stops the far ferry. The current hint gives the full sequence; the subtitle keeps the useful patience flavor. These source and presentation mismatches support clearer cues, but current38 contains no human observation proving that players are confused. See the `FINDINGS.md` and [assessment plan](difficulty_38_refresh.md).

## Approved copy

- Isp card: **"Blue pads are Isp's: they can stop or power tissue, or open routes. Automatically."** Keep `Automatically.` bold.
- Pac card: **"Orange pads are Pac's: they can steady tissue or open routes. Bounce from bubbles' gold tops."** Keep the bounce sentence bold.
- `level_07` steady-pad label: **"STEADY + PARK FERRY"** (CUE_FIT correction).

The card text describes color ownership and the range of pad effects without promising that every pad has every effect. The local label retains both action cues in a shorter form that fits the island plaque region, while preserving the existing subtitle, the player's release inference, and the optional hint's far-ferry identification. Do not add dialogue, a renderer option, or a general mechanism for label variants.

## Scope and sequence

Root has closed current38 and confirmed its source/build snapshot is frozen. The source edits below are complete:

1. Updated the two existing team-card descriptions in `src/app.tsx`.
2. Overrode only the level 07 STEADY pad's existing `label` in `src/levels_middle.ts`; its effects, owner, activation, and geometry are preserved. The initial capture exposed clipping of the original long label at the island gates, so CUE_FIT shortened it to **"STEADY + PARK FERRY"**.
3. The source-only correction changes exactly that label from the immediately preceding candidate. Root's official build and the existing `devel/capture_gameplay_screenshots.mjs` flow against preview port 8127 are recorded in the playtest evidence below.
4. Root's official build, final captures, and ordinary level 07 route are recorded in `tests/_temp/pad_role_cues_playtest/REPORT.md`. The final build hash matches `dist/main.js`; the passive view shows both cards and the complete label, while the active view records the known overlap. The route reaches both exits with zero deaths and no browser errors. Human discovery and confusion remain unmeasured.
5. Fresh SPEC, distinct QUALITY, and integration reviews accept with concerns; root accepts this bounded change as DONE_WITH_CONCERNS. Human discovery, confusion reduction, and fun remain unmeasured.

## File scope

- `src/app.tsx`: existing approved role descriptions; unchanged by CUE_FIT.
- `src/levels_middle.ts`: `level_07`'s STEADY pad label is **"STEADY + PARK FERRY"**.
- `tests/_temp/pad_role_cues_fit_correction/REPORT.md`: record source comparison, commands, and correction evidence.

No mechanics, physics, controls, roster, save IDs, attacks, geometry, hints, permanent tests, or screenshot interfaces change in this plan. Current38 remains the frozen pre-cue baseline; do not rebuild it or rewrite its assessment artifacts.

## Completion checks

- The two cards identify color ownership and explain that pads can have broader local effects.
- The **"STEADY + PARK FERRY"** label fits the island plaque region in the passive default-size capture, retains both action cues, and omits release timing/order. Pac overlaps part of it while standing on the pad.
- Source comparison confirms only the label differs from the immediately preceding candidate; formatting and code check pass.
- The final default-play-size built-game capture shows readable cards and pad label, and the ordinary level 07 route reaches both exits with zero deaths and no browser errors.
- Fresh reviews and root record acceptance and any remaining concerns. No human playability claim follows from source review, scripted route, or screenshot evidence.
