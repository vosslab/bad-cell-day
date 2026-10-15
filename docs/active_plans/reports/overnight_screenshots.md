# Overnight gameplay screenshots

## Result

Captured and visually inspected two real gameplay views on 2026-10-15 at 12:22:27 UTC:

| Managed asset | Visible state | Size |
| --- | --- | --- |
| [gem_bubble_relay.png](../../screenshots/gem_bubble_relay.png) | Room 13: Isp FLOAT, Pac holding the bubble pad, Gem and Cana, tumor-organ backdrop | 1632 x 1020; 403,201 bytes |
| [cana_boomerang_console.png](../../screenshots/cana_boomerang_console.png) | Room 19: Pac SHOVE, Isp on STOP, Cana in flight, robot console and glucose-organ backdrop | 1632 x 1020; 437,840 bytes |

Both PNGs show unobscured hero and villain faces, readable effect labels, room title, HUD, and
keyboard controls. Each is exactly 16:10, below the 1920 px edge ceiling and 1 MB budget. Native
captures needed no resizing or image edits. No animation was needed to demonstrate these states.

## Provenance and limits

The served `main.js` was checked against the existing final build before each capture:
`980ad68be5a185ab0f3254bd135e2d92dc8d88732162c840bc52218839cd0eaa` (SHA-256).
No build command was run by this capture task.

The browser contexts seeded completion records for preceding rooms solely to unlock level
selection. Each then selected the room through the ordinary Levels UI and used ordinary keyboard
input. Playwright's clock advanced normal animation and simulation until the requested effect.
No simulation state, pose, effect, DOM, or game art was written or substituted. Both screenshots
were captured during `playing`, with zero retries and no browser console or page errors.

Reduced motion was `no-preference`; these static captures do not claim reduced-motion acceptance
or full campaign completion. The durable harness has inline bounded input routes and does not
depend on temporary test files.

## Re-capture

Serve the already-built distribution in one terminal:

```bash
source source_me.sh && python3 -m http.server 8123 --bind 127.0.0.1 --directory dist
```

Then capture and copy the inspected output:

```bash
node devel/capture_gameplay_screenshots.mjs
cp /private/tmp/gem_bubble_relay.png /private/tmp/cana_boomerang_console.png docs/screenshots/
```

The harness writes its timestamp, served build hash, effects, positions, phase, and errors to
`/private/tmp/gameplay_screenshot_receipt.json`. It writes PNGs to that same temporary directory.
Inspect re-captures before copying them into the managed screenshot folder.

## Verification and handoff

- README edits replace only content inside the existing screenshot sentinels, preserving both
  anchors and the surrounding prose. Replacing the block twice produced identical Markdown.
- Descriptive alt text identifies each visible effect, teammate position, and room backdrop.
- Pandoc rendered the actual README to standalone HTML under `/private/tmp`; Chromium decoded
  both embedded PNGs at 1632 x 1020 and confirmed both nonempty alt attributes.
- Focused README first-paragraph and link checks passed: 12 tests, 69 deselected.
- `npx prettier --check devel/capture_gameplay_screenshots.mjs` passed; Node syntax check passed.
- These are the only managed screenshot assets. Both have live README embeds; there were no stale
  managed or retained reference images to prune.
- Changelog handoff: add two current gameplay PNGs, their README embeds, and a repeatable capture
  harness. The parent integrator owns the changelog entry.

The first browser attempt found no listener on port 8123. Starting a dist-only local server resolved
that environment gap; the final captures and rendered README verification completed successfully.
