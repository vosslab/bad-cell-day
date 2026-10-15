# Final villain visual acceptance

Date: 2026-10-14. Result: PASS for the art/render build identified below.

## Browser evidence

Chromium opened the existing dist at http://127.0.0.1:8123/ with a 1280 x 800 viewport.
Screenshots are full-page captures (content height can slightly exceed 800 pixels).
The temporary harness used an installed Playwright clock, paused before navigation, and advanced
requestAnimationFrame explicitly. It collected each canvas frame's fillText calls after clearRect;
wrapped dialogue was checked by joining the lines. No production code changed during this check.

- Title: both enlarged molecular heroes are visible; transformed bounds are approximately
  184 x 190 and 180 x 186 pixels. Labels and sticker remain readable.
- Level 1 opening: Gem and Cana are visible with separate opening speech, molecular shapes,
  causal connection lines, DNA wall, and unpowered lift. Players and controls remain visible.
- Level 10 opening: Cana is at the new source position x=220, y=130. Both complete quips render
  as wrapped text in separate bubbles with clear horizontal space between them. Neither actor
  nor speech covers the other bubble; the bridge and pads remain legible.
- Level 14 partial progress: ordinary ArrowRight moved Pac from x=120 to x=188.25 onto OPEN.
  At 0:04, phase remains playing and Gem says "One trap down. Another is still live!".
  The patrol barrier is open; the rolling bomb remains visible in the playfield. No simulation
  state or player coordinates were injected. This visual check is distinct from prior traversal proof.
- Prior completion records were seeded only to unlock levels 10 and 14 for these spot checks.
  The title and level 1 used empty progress.
- All four SVG requests returned HTTP 200 and decoded at 240 x 240. No page or console errors.
  No horizontal document/body overflow was detected on title, level 10, or level 14.

Actual screenshots were opened and inspected directly. Art remains small in-world, consistent
with the game scale; molecular silhouettes and villain differences are visible at this scale.

## Artifact provenance

Source and dist SVG bytes match for Isp, Pac, Gem, and Cana. Source and dist index.html and
style.css bytes match. The dist source map contains exact current source text for
render_villains.ts, render_characters.ts, villain_scenes_middle.ts, and villain_scenes_final.ts.
All listed dist hashes were identical before and after the browser run. A later input-only rebuild
requires its own behavior validation; these screenshots identify this exact art/render build.

| Artifact | SHA-256 |
| --- | --- |
| dist/index.html | 15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7 |
| dist/main.js | 0186972fa1cd18809441be67f4af176c07bcfbf2181dca5532bb471a2c51dd71 |
| dist/main.js.map | 1315de4da69edf64594492ecc85a5b3215d12dbb96e707279eb5d9647f5f9997 |
| dist/style.css | 553ee60b9969c895bf430b7c4057a8cb0018f7f45d042639f8467872bc0d2f37 |
| src/assets/isp.svg = dist/assets/isp.svg | 546395af4d32d75d9b89ac4f8ff9fc79f1fd6605b8c337cfdc10dffd5d5dbd9b |
| src/assets/pac.svg = dist/assets/pac.svg | 96d2722390a6721fee089926cb41e08792dc55ef12f05caf6ad23fd6d1d180e1 |
| src/assets/gem.svg = dist/assets/gem.svg | f57e7fc42a5d915e6fd4c14b9e0099451b0d0a018d22e86c07e4bb9abee18631 |
| src/assets/cana.svg = dist/assets/cana.svg | 19c1d26b522b69d493b9869ab332f6fd9f64b9fd5002e2e3273365add08f41d4 |

Screenshot files live in /private/tmp/villain-final-visual (temporary local evidence).

| Screenshot | SHA-256 |
| --- | --- |
| title_heroes_1280.png | 97696bbbc82982f75ad36ce7fc03364a8ceb517460564cfe05f7035a4e6c5d34 |
| 01_opening_1280.png | dae817e3e3026bff0a8a597b0a2bd00a1427642290a6776ddbe441d452c58aec |
| 10_opening_1280.png | ed2e8cd12476e8263753852ecf049c2602ab43de255a669b29a452b49f388a50 |
| 14_partial_progress_1280.png | dd6352b6ebfd36532b85048655306fc5f34d554f6ec0f6225d8939d3d1b237bc |

Machine-readable evidence: results.json and provenance.json in the same temporary directory.

## Historical command

The ignored temporary runner was deleted after the successful check, in keeping with bounded
acceptance evidence. Its successful invocation was:

```bash
node tests/playwright/_temp_villain_final_visual.mjs
```

Chromium execution used sandbox escalation for local browser startup. The server was started with
`source source_me.sh && python3 -m http.server 8123 --directory dist` and left available.
The harness corrected inherited locator/clock issues and removed an arbitrary hero-size assertion;
these were harness corrections, not game changes.
