# Browser tutorial playthrough

All five tutorials complete in sequence through the rendered browser application with
zero retries and no browser console or page errors. This is browser acceptance,
separate from the [tutorial_playthrough.md](tutorial_playthrough.md) simulation evidence.

Run `node tests/playwright/_temp_tutorial_playthrough.mjs` with the built site served at
`http://127.0.0.1:8123/`. The temporary script is
[_temp_tutorial_playthrough.mjs](../../../tests/playwright/_temp_tutorial_playthrough.mjs).
It requires Chromium permission outside the macOS sandbox because sandboxed launch fails
with the MachPortRendezvousServer permission error. The completed run exits 0 and prints
`PASS browser all five sequential tutorials, fresh context, keyboard only, reload persists five`.

## Genuine browser controls

A new browser context begins with empty browser storage. The controller clicks visible
Play, then uses Playwright `keyboard.down` and `keyboard.up` with A/W/D and arrow keys.
It reads the canvas's rendered coordinate and phase attributes to time ordinary movement
and jumping. Playwright's installed clock advances animation frames in 16 ms intervals;
the actual application runtime retains its own 1/120 s physics timestep. No simulation
imports, debug mutations, teleports, localStorage seeding, or direct event dispatch occur.
The controller releases input after each action and waits for a stable landing before
new jumps. The ordinary routes jump over the partner on the STEADY pad and at exits.

The controller clicks Next level after each of tutorials 01 through 04 and verifies the
next rendered level ID. Tutorial 05 presents the final victory, Replay level, and no
Next level button. The saved progress contains five actual completion records. After
reloading the page, Levels displays five enabled buttons, all marked Replay.

| Tutorial | Saved seconds | Retries | Sparks | Browser result |
| --- | --- | --- | --- | --- |
| 01 | 9.750 | 0 | 4 / 5 | Complete |
| 02 | 7.617 | 0 | 2 / 2 | Complete |
| 03 | 8.600 | 0 | 2 / 2 | Complete |
| 04 | 8.900 | 0 | 2 / 2 | Complete |
| 05 | 9.958 | 0 | 2 / 2 | Complete |

## Captured evidence

The run writes machine-readable results to `test-results/browser_tutorial_results.json`.
Screenshots in `test-results/` capture the visible rendered application:

- `browser_level1_game.png` through `browser_level5_game.png`: each tutorial at 1280x800.
- `browser_level1_complete.png`: first completion with Next level.
- `browser_level5_complete.png`: final victory with both exits occupied.
- `browser_unlocked5_1440.png`: five unlocked Replay buttons after reload at 1440x900.

The level 05 game and final completion screenshots were visually inspected. These are
full-page captures, so their pixel height exceeds the viewport. The first-built styling
makes the playfield taller than the 800 px viewport; a later height-cap source change
was pending integration during this run. Final responsive visual acceptance belongs to
the rebuilt artifact and should be recorded separately.

The tested `dist/main.js` SHA-256 is
`ed1abfca8c7509af04de8e61b115fd660a887e48c1e85902122f897c4830bfc8`.
The tested `dist/index.html` SHA-256 is
`15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`.
No product source or permanent tests changed in this browser acceptance task.

## Evidence limits

This establishes browser keyboard wiring, sequential completion, victory controls,
persistence, and menu unlocks for one legal route per tutorial. It does not establish
human timing tolerance, every moving-platform phase, optional blue-perch completion,
or a broad responsive viewport matrix. Pause, blur, and restart have separate smoke
evidence and were not repeated in this playthrough.
