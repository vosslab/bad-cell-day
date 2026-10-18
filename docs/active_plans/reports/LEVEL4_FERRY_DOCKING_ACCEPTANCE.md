# Level 4 ferry docking acceptance

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 12:39:46 UTC.** The bounded display 4
ferry-footing change is accepted. The continuous gameplay goal remains ACTIVE.

## Accepted change

In display 4, stable `level_03` (**Stop Right There!**), only the ferry rectangle width changes from
280 to 310. Its x=310, y=400, height=24, offset `{x: 100, y: 0}`, and 6-second period remain
unchanged. All 43 level definitions and their order are preserved, with exactly one serialized
public `LEVELS` difference: `/3/platforms/1/rect/width`, 280 to 310. At maximum travel the ferry
spans x=410..720 and meets the right shore.

Source `src/levels_tutorial.ts` SHA-256:
`969b96f9b6d150045ae80d49750530dfad0a96f86cff4e15a664ed945c36c8cb`. Physics source SHA-256:
`1ce24601c4f099ca737ab03eeb8d7e5e98e2e164596d9401214035615cdf84e8`, unchanged. The after-change
public `LEVELS` snapshot SHA-256 is
`21fc6f35247dd5eea9e51f491d731080c13cd2c82c8f7a74b17c406f1c64a4ad`.

## Evidence

- The focused native runner uses production public `LEVELS` and physics. Four cases pass: the
  ordinary clear (9.1 seconds), no-jump far-shore transfer and 240-frame supported wait, ferry
  reversal with Pac on shore and the RESCUE gate latched, and Gem bubble lift/recovery while Pac
  remains aboard. Traces and implementation details are in
  `tests/_temp/level4_ferry_docking_implementation/REPORT.md`.
- Root independently replayed the production runner successfully and verified the JSON semantic
  comparison allows only the ferry width change while physics remains unchanged.
- `./check_codebase.sh` passed TypeScript, lint, formatting, and 94 Node checks. The official
  `source source_me.sh && ./run_playwright_tests.sh --build` passed both standard browser smokes.
- Fresh SPEC (`tests/_temp/level4_ferry_docking_spec/REPORT.md`) accepted,
  QUALITY (`tests/_temp/level4_ferry_docking_quality/REPORT.md`) accepted, and integration
  (`tests/_temp/level4_ferry_docking_final_integration/REPORT.md`) accepted with concerns. The
  root-owned code/build/smoke gates and visual approval are recorded here as root evidence;
  historical review reports are preserved as dated checkpoints.
- Three focused browser views used a served build whose `dist/main.js` SHA-256 is
  `10c2a96b5348eea74cd3494550758fd0a53b441728d102b99e940a28be420a07`; source, build, and served
  artifact matched. Root viewed all three original captures and approved them. There were zero
  deaths and zero page or console errors. The ordinary clear shows completion with zero retries
  and 2/2 sparks. The shore-wait and rescue/reversal views show Pac on the right shore and the ferry
  returned left; both remain in PLAYING, with Isp FLOAT.

## Concerns and limits

The final ordinary-clear browser case appended 60 right frames after the supplied route stopped
1.31 px short of the exit. The original failed attempt image was overwritten by the final passing
capture; its logs and receipt remain. The separate native ordinary route clears as supplied.
This distinction is recorded in `tests/_temp/level4_ferry_docking_capture/REPORT.md`.

The width change improves the reproduced no-jump fall; it does not guarantee all falls are
resolved. The user's exact control history, unaided discovery, human playability, fun, and difficulty
remain unmeasured. The current41 assessment stays frozen. No full-campaign journey, mobile,
save/Next, permanent tuning test, or difficulty refresh was added as a gate.

The [closed plan](../active/LEVEL4_FERRY_FOOTING.md) owns the bounded scope. The broader game goal
remains active; this receipt creates no new feature queue.
