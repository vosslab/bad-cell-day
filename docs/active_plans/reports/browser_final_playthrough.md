# Browser final campaign playthrough

All eight final levels (13-20) complete sequentially in the rendered browser application
with zero retries and no browser console or page errors. Gem, Cana, and the tumor core
are defeated through their paired TARGET pads, and level 20 displays the actual final
victory. This is browser acceptance, separate from the
[simulation playthrough](final_playthrough.md).

Run `node tests/playwright/_temp_final_playthrough.mjs` with the stable built application
served at `http://127.0.0.1:8123/`. Chromium was launched outside the macOS sandbox,
whose MachPort restrictions prevent a sandboxed browser launch. The script exits 0:
`PASS final eight browser levels; prior twelve continuation only; twenty persisted and replay enabled`.

## Scope and controls

This run is an explicit continuation: only levels 01-12 are initially seeded as completed,
representing the independently verified tutorial and middle campaign browser runs.
Their placeholder times are not measurements from this run. No level 13-20 completion
is seeded. The controller opens visible Levels, selects unlocked level 13, and clicks
Next level after each completed room through level 19.

Every final level is solved with Playwright `keyboard.down` and `keyboard.up` for A/W/D
and arrow keys. The coordinate controller reads the rendered canvas data attributes,
releases input between actions, and uses an installed Playwright clock to advance
animation in 16 ms increments. The application performs its ordinary 120 Hz physics.
The script imports no simulation or game code, changes no game state, and performs
no teleportation or synthetic direct event dispatch. Neutral waiting and ordinary jumps
handle the slime pulse, moving lift, partner crossing, and shelf undersides.

| Level | Saved seconds | Retries | Sparks | Result |
| --- | ---: | ---: | --- | --- |
| 13 | 9.942 | 0 | 1 / 2 | Complete |
| 14 | 10.533 | 0 | 2 / 2 | Complete |
| 15 | 9.300 | 0 | 2 / 2 | Complete |
| 16 | 9.892 | 0 | 2 / 2 | Gem defeated, complete |
| 17 | 24.133 | 0 | 2 / 2 | Complete |
| 18 | 5.700 | 0 | 1 / 2 | Complete |
| 19 | 10.425 | 0 | 2 / 2 | Cana defeated, complete |
| 20 | 10.567 | 0 | 2 / 2 | Tumor core defeated, final victory |

Completion of each boss room requires boss defeat in the unchanged application.
The final capture shows both heroes at their distinct high blue and lower orange
targets, the cell saved, and the victory text "You saved the cell day!". Replay level
is visible and Next level is absent. Saved progress contains all 20 records; after
reload all 20 level buttons are enabled and marked Replay. The script checks every
button, including those below the scroll boundary.

## Rendered evidence

The run writes `test-results/browser_final_results.json`, including measured final
level records, the complete saved progress, empty error collection, and artifact hashes.
These full-page screenshots were captured and visually inspected:

- `test-results/browser_final_level13_game.png`: active slime column and factory room.
- `test-results/browser_final_level16_game.png`: Gem and factory backdrop.
- `test-results/browser_final_level19_game.png`: Cana and citadel backdrop.
- `test-results/browser_final_level20_game.png`: both villains and final tumor core.
- `test-results/browser_final_level20_complete.png`: final victory and Replay control.
- `test-results/browser_final_persist20_1440.png`: scrolled level menu after reload.

Additional completion captures exist for levels 16 and 19. Game and victory captures
use a 1280x800 viewport; the persisted menu uses 1440x900. The game field, HUD,
toolbar, and both control cards fit the game captures; full-page height is 804 px
because the footer extends four pixels beyond the viewport. Distinct factory,
citadel, and final boss color treatments are present in the final rebuilt artifact.

The tested `dist/main.js` SHA-256 is
`989a2fab0e1e666767802382eef69487d16f728eb292f429733c46ffc82a2d3d`.
The tested `dist/index.html` SHA-256 is
`15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`.

## Evidence limits

This proves one legal browser route per final room, sequential Next controls, boss
completion, final victory, persistence, and unlocks. It is a continuation of separately
verified earlier runs, not one fresh-storage 20-level session. It does not prove novice
timing tolerance, every platform phase, every optional collectible, or a broad viewport
matrix. No product source, permanent tests, build files, or public server configuration
changed during this task.
