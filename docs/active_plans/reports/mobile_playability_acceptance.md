# Bad Cell Day mobile playability acceptance

The final build supports solo two-thumb play while preserving keyboard co-op, physics, campaign
rooms and existing saves. Each hero owns one captured pointer and a 132x88 CSS-pixel pad with six
44x44 zones. Top-row direction includes held jump; bottom-row direction releases it. Extra fingers
on an occupied pad are ignored. Pointer release/cancel/lost capture clears its owner; pause, retry,
level changes, death, completion, blur, hidden-page and disposal clear all input. Keyboard and touch
holds are independently combined at simulation sampling.

A coarse primary pointer uses landscape rails outside the complete 1100/620 world. Safe-area insets
and dynamic viewport height bound the compact interface. Fine-pointer laptops retain their existing
layout. Portrait pauses active touch play with a rotate prompt; returning to landscape requires
explicit Resume. Title and level-selection menus remain available in portrait.

## Final identity

SHA-256, final build on 2026-11-15:

| Artifact | SHA-256 |
| --- | --- |
| `dist/main.js` | `cefee8b5a839f6a1a13b7b6b94aaa8498f5c19a87bb9aa36ef2bc22659d68aec` |
| `dist/style.css` and `src/style.css` | `c8293462b2f38cb57772fa51588bca84049fbf023268ef1dfdf8ef499537b1bd` |
| `dist/index.html` | `4df732bdf6fd2811ba2cffe44659d77a51bea2e52885554a16c0b9490cfc4d39` |
| `src/app.tsx` | `c53c8daf49e289452911141c4c42ff5cb313e2381a1b7cf3591df489155cf5b2` |
| `src/runtime.ts` | `f6d16aeb96fecf758c2802a6da6520f882bd50019b7b97b6603c26c35571b353` |
| `src/touch_input.ts` | `391cdb8418f1f6d011fab6eb00d42c316c28d07caadd20fe8b16c65abf87035c` |

The route runner asserted served JavaScript matched the disk hash. Local evidence lives in ignored
`test-results/mobile_playability/`: `receipt.json` holds every route interval, observed per-interval
positions and pressed zones, screenshots and final states. `capture.mjs` preserves the exact runner;
native input-only reconstruction scripts and route receipts are alongside it. Screenshots were
rendered by Chromium at 844x390, scale 1, and inspected at their captured size.

## Actual touch journeys

All five routes completed with zero retries and no page or console errors on the final build.
The table uses stable room IDs; campaign display numbers differ (for example, `level_56` is
displayed as 47 in this campaign). The browser used actual Chromium CDP `Input.dispatchTouchEvent` with two concurrent touch contacts,
sliding each captured thumb between pad zones. There were no keyboard movement substitutions,
synthetic hidden movement events, live simulation writes, altered mechanics or teleportation.
The browser clock advanced prepared routes in 16ms increments. Only preboot saved completion
records unlocked each selected room; ordinary Levels menu selection started it. This setup proves
focused route feasibility, not a fresh campaign journey.

| Room | Observed result | Local visual evidence |
| --- | --- | --- |
| `level_02` Hold That Door! | Isp holds the blue switch while Pac crosses, then both reach their exits. Final phase complete, zero deaths. | `level_02_final.png` |
| `level_09` Two Tons of Trouble | Both thumbs hold right to move the heavy sac together, then separate movement/jump inputs complete the ferry and rescue route. | `level_09_step1.png`, `level_09_final.png` |
| `level_33` No Takebacks | Isp remains on SEND while Pac occupies CATCH; Pac leaves CATCH independently to trap the returning parcel, then each reaches its own exit. | `level_33_step3.png`, `level_33_step4.png`, `level_33_step5.png`, `level_33_final.png` |
| `level_37` Hold Your Breath | Separate movement and fresh jump edges execute reciprocal recoil launches, RETURN latches and both exits. | `level_37_step3.png`, `level_37_step7.png`, `level_37_final.png` |
| `level_56` A Heavy Thought | Joint loading, Isp holding POWER while Pac rides the sac, Pac braking, Isp rejoining above, paired delivery and both exits. | `level_56_step11.png`, `level_56_step13.png`, `level_56_step15.png`, `level_56_joint_deliver.png`, `level_56_final.png` |

The joint-delivery image is sampled at browser clock 14624ms. Its observed positions are
Isp x980.17/y244 and Pac x948.54/y244, with the team together at the receiver. Native reconstruction
separately records DELIVER active with both heroes and weight 2 at frame 1756; this native internal
state is corroboration, not a browser-state read. The subsequent touch-only clear establishes the
route through the exit gate.

## Commands and gates

Commands ran from the repository root:

- `npm ci --cache /Users/vosslab/.cache/npm`: existing lock installed, no dependency additions.
  The first default-cache attempt failed outside the writable roots. npm reported nine moderate
  existing advisories; this work did not upgrade dependencies.
- Baseline `./check_codebase.sh`: both TypeScript programs and ESLint passed, then Prettier flagged
  two existing hero-feedback tests. Those whitespace-only issues were formatted. Baseline
  `./build_github_pages.sh` passed separately.
- Final `./check_codebase.sh`: both TypeScript programs, ESLint, Prettier and 92 Node tests passed.
- `./build_github_pages.sh`: passed; generated tracked `dist/` refreshed.
- `PLAYWRIGHT_BROWSERS_PATH=/Users/vosslab/.cache/ms-playwright ./run_playwright_tests.sh --build`:
  3/3 passed (two established keyboard journeys and the added real CDP multi-touch test).
  Chromium required sandbox escalation because macOS rejected its Mach port registration inside
  the restricted sandbox. The added test checks concurrent movement, occupied-pad extras,
  owner-only release, sliding jump/neutral, keyboard composition, cancellation, focus retention,
  held-touch clearing on rotation, explicit resume and viewport fit.
- `PLAYWRIGHT_BROWSERS_PATH=/Users/vosslab/.cache/ms-playwright node --import tsx tests/_temp/mobile_capture.mjs /private/tmp/bcd_level_02.json /private/tmp/bcd_level_09.json /private/tmp/bcd_level_33.json /private/tmp/mobile_recoil_route.json /private/tmp/mobile_heavy_route.json`:
  5/5 complete, zero deaths/errors. Temporary drivers were copied into the ignored evidence folder,
  then removed from `tests/_temp/` after completion. Final input files are also saved as
  `route_02.json`, `route_09.json`, `route_33.json`, `route_37.json`, and `route_56.json`
  beside the copied runner for local reproduction.
- `source source_me.sh && python3 -m pytest -q tests/test_ascii_compliance.py tests/test_whitespace.py tests/test_source_file_line_limit.py tests/test_guidance_doc_format.py`:
  1318 passed. Final `python3 -m pytest -q tests/test_markdown_links.py` reported 26 historical
  failures and 299 passes. Every failed file refers to absent older difficulty-observation
  evidence; no changed or new mobile document failed. Those unrelated generated-history links
  were left unchanged. The changed-document filter passed 19 checks (306 deselected).
- `git diff --check`: passed.

Prepared native schedules had to be reconstructed because historical temporary route files were
absent. No rules or room definitions changed. An intermediate browser attempt overlapped a rebuild
and saw a 404; the final run started after the build and had no errors. Native No Takebacks stopped
on its exact completion frame; browser quantization once left Pac 1.75px short. Extending its final
ordinary direction/jump hold by ten native frames produced the final successful clear. An early
extra-finger test incorrectly supplied remaining contacts to CDP touchEnd; inspection confirmed
CDP ends the listed contacts, and the corrected test passes.

## Mobile Hint correction and final replay

Review found that the mobile Hint button expanded a tip inside the hidden desktop hint strip.
The final build above also renders the current room hint in the existing mobile status area.
Opening Hint replaces the ordinary status text within its existing two-line, scrollable bounds;
closing it restores status. The button's `aria-controls` names both responsive text targets and
`aria-expanded` follows visibility. The default world, thumb rails and desktop hint behavior retain
their layout. On narrow screens, scroll the status area to read longer hints.

After this correction, `./check_codebase.sh` again passed TypeScript, ESLint, Prettier and all 92
Node tests; `./build_github_pages.sh` passed. With the build frozen,
`PLAYWRIGHT_BROWSERS_PATH=/Users/vosslab/.cache/ms-playwright PW_PORT=4321 ./run_playwright_tests.sh`
passed 4/4 tests. The added native `.tap()` regression opens and closes Hint at 844x390 and 568x320,
asserts the visible text equals the selected room hint, checks the expanded state and status swap,
and verifies no page overflow or world overlap. Both screenshots were inspected at native size:
`test-results/mobile_playability/hint_844.png` and `hint_568.png`. This final run supersedes the
earlier 3/3 browser run. Chromium again required sandbox escalation for macOS launch permission.

The five touch routes were then replayed, unchanged, against the final JavaScript hash above using
the preserved runner and existing server on port 4179:

```text
PLAYWRIGHT_BROWSERS_PATH=/Users/vosslab/.cache/ms-playwright node --import tsx test-results/mobile_playability/capture.mjs test-results/mobile_playability/route_02.json test-results/mobile_playability/route_09.json test-results/mobile_playability/route_33.json test-results/mobile_playability/route_37.json test-results/mobile_playability/route_56.json
```

All five again completed with zero deaths and no page/console errors. The runner asserted that
served JavaScript matched the final disk hash. The route table and screenshots above now describe
this final replay. Its `test-results/mobile_playability/receipt.json` has SHA-256
`de75b67c8994b92189180773a06928ad0201ac8d21a01472145f36e439e1f2da`.
The pre-correction receipt remains `receipt_before_hint.json`, SHA-256
`f774046f5029acb0c1e69dff78aa04bac3c42fec4e7ff3fd1477d986f8e6b334`, and identifies the earlier
`62efa7c2ad662ec7a53145ec38faf9cf00d4be6026ace58b2e07c350ecc2e8f1` bundle. Evidence was copied to
`/private/tmp/bcd_hint_preserved_20261115/mobile_playability/` before the official runner cleared
`test-results`, then restored. Final correction logs are `hint_check.log`, `hint_build.log`,
`hint_browser.log` and `hint_final_routes.log` in the local evidence folder.

## Limits and review

These are prepared-route browser feasibility observations. Physical-device thumb comfort, iOS Safari
browser chrome, human discovery and enjoyment, and a full touch-only 57-room campaign remain
unmeasured. The independent cross-browser viewport/lifecycle sweep is owned by the parent mobile
report; it must cite the final hashes above. No commit, publication or deployment was performed.
Independent SPEC and QUALITY reviews remain parent-owned acceptance steps.
