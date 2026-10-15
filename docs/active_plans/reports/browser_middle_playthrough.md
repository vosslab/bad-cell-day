# Middle browser playthrough

2026-10-14. PASS for levels 6-12 on the built twenty-level campaign served at
`http://127.0.0.1:8123/`.

This is a continuation from the separately proven tutorial segment, not a fresh full-campaign run.
The isolated browser context initially seeds only valid completed records for levels 1-5 to unlock
level 6. Those seed records use placeholder prior times of 60 seconds and zero sparks; they are not
measurements of the earlier segment. Levels 6-12 receive their completion records only from actual
keyboard play and the runtime's normal completion/save path.

## Method and results

Exact command, from the repository root:

```bash
node tests/playwright/_temp_middle_playthrough.mjs
```

Chromium runs headless with the execution sandbox escalation required for this host's Chromium
MachPort environment. The existing manager-owned server/build is reused. The temporary controller
uses real keyboard down/up events, visible Levels and Next controls, and Playwright clock advancement.
Canvas datasets are read only for player positions, current level, and phase; it never writes game
state or teleports characters. The known simulation routes supply keyboard targets.

| Level | Displayed time | Retries | Sparks | Result |
| --- | --- | --- | --- | --- |
| 6 | 0:12 | 0 | 2 / 2 | Complete |
| 7 | 0:14 | 0 | 2 / 2 | Complete |
| 8 | 0:11 | 0 | 2 / 2 | Complete |
| 9 | 0:13 | 0 | 2 / 2 | Complete |
| 10 | 0:11 | 0 | 1 / 2 | Complete |
| 11 | 0:12 | 0 | 2 / 2 | Complete |
| 12 | 0:14 | 0 | 2 / 2 | Complete |

All seven completion panels appear, and Next advances sequentially between them. The saved progress
contains exactly twelve completed level records. After reload, Levels lists twenty campaign entries,
levels 1-12 show Replay, level 13 is enabled, and level 14 remains locked. Browser console errors and
page exceptions are empty. The level 10 route does not collect its optional blue spark; full spark
collection is not claimed.

## Captured evidence

- [browser_middle_results.json](../../../test-results/browser_middle_results.json): measured results,
  saved records, and empty error list.
- [browser_middle_level9_heavy.png](../../../test-results/browser_middle_level9_heavy.png): team crate
  push, 1280 x 800 viewport.
- [browser_middle_level10_lift.png](../../../test-results/browser_middle_level10_lift.png): Isp holds
  lift STOP near the upper landing, 1280 x 800 viewport.
- [browser_middle_level12_done.png](../../../test-results/browser_middle_level12_done.png): level 12
  completion, 1280 x 800 viewport.
- [browser_middle_persist12_1440.png](../../../test-results/browser_middle_persist12_1440.png): reloaded
  level selection with progress through 12, 1440 x 900 viewport.

The harness initially needed 32 ms of clock advancement after reload so Solid could mount the UI.
An initial screenshot insertion accidentally labeled a level 7 capture as level 10; the harness was
corrected and the sequential run repeated before retaining the screenshots above. These were
controller/evidence defects, with no product behavior failure observed. This temporary route-specific
harness is not a proposed permanent test.
