# Recurring villain browser tutorial acceptance

Fresh browser acceptance on 2026-10-14 completes tutorials 1-5 in sequence with zero retries,
zero page errors, and zero console errors. This run targets the newly rebuilt recurring-villain
application served at `http://127.0.0.1:8123/`, rather than the historical tutorial build documented
in `browser_tutorial_playthrough.md`.

## Executed acceptance

Historical temporary runner: `tests/playwright/_temp_villain_tutorials.mjs` (removed after
acceptance). Executed with `node tests/playwright/_temp_villain_tutorials.mjs`.
Chromium runs outside the macOS sandbox because its normal browser launch requires that permission.
The command exits 0 with:

```text
PASS fresh browser tutorials 1-5, keyboard only, zero retries; next6 and reload five saved
```

A new browser context starts with no completed progress. The runner clicks visible Play and sends
real A/W/D and arrow keyboard input. It observes rendered canvas position/phase attributes and
advances Playwright's clock in 16 ms intervals; the application runs its own 120 Hz physics.
There are no simulation imports, storage seeding, direct event dispatch, position teleports,
mechanism mutations, or forced completion. Tutorial 1 uses the authored 20-second powered lift
cycle and separate safe trips for the two players.

| Tutorial | Saved seconds | Retries | Sparks | Result |
| --- | --- | --- | --- | --- |
| 1 | 31.067 | 0 | 3 / 4 | Complete |
| 2 | 7.667 | 0 | 2 / 2 | Complete |
| 3 | 8.767 | 0 | 2 / 2 | Complete |
| 4 | 9.075 | 0 | 2 / 2 | Complete |
| 5 | 9.817 | 0 | 2 / 2 | Complete |

Visible Next level controls advance every tutorial, including tutorial 5 to level 6. Reload retains
five actual completion records; Levels shows five Replay choices and six enabled levels. Every
completion contains both Gem and Cana reactions with loaded SVG portraits. Initial requests for
`isp.svg`, `pac.svg`, `gem.svg`, and `cana.svg` return HTTP 200; reload revalidation returns 304.

## Rendered evidence

Screenshots and machine-readable results are under `/private/tmp/villain-browser-tutorials/`:

- `level1_opening.png` and `level1_outage.png`: both villains, opening quips, full-height DNA wall,
  larger heroes, RESTORE pad, and the stationary lift labelled NO POWER.
- `level1_puzzle_power_restored.png`: after ordinary cooperation, Pac rides the raised lift with
  its lit green lamp, the DNA wall is open, and Cana reacts to restored glucose.
- `level1_complete.png` through `level5_complete.png`: two portraits and unique ending quips,
  escape text, Next level, and Replay level.
- `level1_complete_narrow.png` through `level5_complete_narrow.png`: initial narrow completion
  views at 390x844. The stage panel scrolls internally; lower reactions and controls are below
  its initial scroll position.
- `level1_complete_narrow_next.png` through `level5_complete_narrow_next.png`: the narrow panel
  scrolled to its ordinary Next control. The button stays within the viewport, at x132-258 and
  y218-271 depending on level.
- `level3_motor_stop.png` and `level4_stabilized.png`: the authored Motor Stop and stabilization
  teaching setups reached by ordinary movement.
- `reload_five_saved.png`: five replayable tutorials and level 6 unlocked after reload.
- `results.json`: exact coordinates, saved times, portrait load results, button bounds, network
  responses, errors, and artifact hashes.

The level 1 opening, outage, restored-lift, desktop completion, and scrolled narrow completion
captures were visually inspected, along with the level 3 Motor Stop and level 4 stabilization views.
Both villains are visibly distinct and remain above the traversable route. The completion panel
shows readable reactions and a fully visible Next control at 1280x800; its button lies at
x577-703, y440-499 depending on tutorial. At narrow width the panel is intentionally scrollable,
so this report claims reachability of the lower controls rather than simultaneous visibility of
all completion content.

## Build identity and limits

Tested `dist/main.js` SHA-256:
`bfe9b24ca58b8ad447c58a48bf7169753b5a6f3ac40b3a1e0e6c2d16a3862eb0`.

Tested `dist/index.html` SHA-256:
`15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`.

The source-only negative controls and exact public simulation routes are separately documented
in `villain_tutorial_routes.md`; those negative controls were also independently rerun successfully
while preparing this browser controller. Browser acceptance covers one legal route per tutorial,
keyboard wiring, rendered reactions, reachable progression, and saved progress. It does not measure
human learning-pair duration, all possible lift boarding phases, or levels 6-20 playthroughs.
No product source, built artifact, or permanent test changed for this acceptance task.
