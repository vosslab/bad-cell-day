# Level 3 acid-push acceptance

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** Campaign data, native proofs, integrated build, standard browser smokes,
served-source identity checks, and seven final built-browser views are complete. All views have zero
deaths, retries, and browser errors, including both dunk and ordinary no-dunk clears; root approved
the inspected visuals. SPEC, all six QUALITY reviews, and fresh integration accepted/completed with
concerns and no source, gameplay, or integration blocker. Root accepts the milestone as
DONE_WITH_CONCERNS. Human fun, unaided discovery, reported bridge motion, the full 38-room journey,
and current 38-room difficulty remain unproven. The active plan owns requirements and the latest
state.

The [active plan](../active/level3_acid_push.md) owns the requirements and gates. The feature adds an
optional way to push Gem and Cana into the acid in stable `level_04`, **Bridge Over Troubled Slime**.
The ordinary STEADY/RESCUE route remains available without a dunk. No campaign order, save behavior,
room count, bridge geometry, or bridge timing change is in scope.

## Human guidance and decision

The user said, "I was thinking it might be fun if on level3 you could push the villains into the
bile/stomach acidpit," and reported that "level3's bridge shifts side to side, it is easy to fall
in." Source defines an unstable bridge but no authored side-to-side movement. Root's settled design
preserves the existing bridge challenge without adding gaps or extra pressure; it does not claim the
reported motion exists or turn that design choice into a human-stated ban. See
[human guidance](../../HUMAN_GUIDANCE.md) and [design decisions](../../DESIGN_DECISIONS.md).

The adopted room opts the scene into pushable bodies, places Gem at center `(265, 410)` and Cana at
`(825, 410)`, and moves only the RESCUE pad to x=970 so an optional dunk can happen before the
ordinary latch. Cana keeps her existing weapon roster; Gem has no gun. Villains interrupt only
attacks bound to them. The usual Pac STEADY / Isp RESCUE co-op route remains intact. Public `LEVELS`
replay passes both-dunk and no-dunk clears, and all other 37 room definitions and their order match
the recovered source-bound baseline.

## Evidence and gates

| Item | Owner | State | Evidence and limit |
| --- | --- | --- | --- |
| Native runtime behavior | Runtime owner | DONE_WITH_CONCERNS | `tests/_temp/acid_push_runtime/REPORT.md`: ordinary contact pushes either villain; acid absence lasts four seconds; each returns home; Cana resumes its existing attack. Both-dunk and no-dunk cooperative routes clear with zero deaths. This is native evidence, not built-game acceptance. |
| Existing-route comparison | Runtime / legacy-route owners | DONE_WITH_CONCERNS | `tests/_temp/acid_push_legacy_routes/REPORT.md`: representative level 37 and 38 native route results match a reconstructed pre-A0 baseline. Baseline source is fixed at `eaf28cc395dc1827fe1e43ac2f7cd6c2687f67a3`; this is not recovery of the original private artifacts, which were externally cleared. Do not recreate their accepted reports or claim those raw historical artifacts remain available. |
| Room data and public `LEVELS` | Data owner | DONE_WITH_CONCERNS | `tests/_temp/acid_push_campaign_data/REPORT.md`: adopted data replays both-dunk and no-dunk clears; only four `level_04` fields differ, and the other 37 definitions/order match the reconstructed pre-A0 baseline. |
| Focused behavior probes | Probe owner | PASS_WITH_OBSERVATION | `tests/_temp/acid_push_behavior_probe/REPORT.md`: shove velocity, solid blocks, attacker-owned projectile cleanup, pad start during absence, and ordinary escape from occupied return home pass. Return overlap can allow temporary pass-through; nonblocking, no fix proposed. |
| Renderer and integrated build | Renderer / root | PASS | Approved splash asset is integrated. `./check_codebase.sh` passes 92 checks, both TypeScript programs, lint, and format; `source source_me.sh && ./run_playwright_tests.sh --build` passes build and 2/2 smokes. First launch lacked Chromium headless shell and failed before launch; installed shell, then retry passed. |
| Built-source and served identity | Root | PASS | Current-source assertion and HTTP 8127/disk identity pass for index, main bundle, campaign map, and splash. Exact hashes are recorded in the active plan. |
| Actual built-game captures | Browser owner | DONE_WITH_CONCERNS | `tests/_temp/acid_push_browser/REPORT.md` and its frozen receipt/cases record seven final views; all have zero deaths, retries, and browser errors. Both dunks, four-second splash labels/returns, Cana's return attack cue, dunk clear, and no-dunk clear are visible. Root approved all inspected views. The initial no-dunk route failed under 16 ms browser quantization when Pac left STEADY before Isp reached RESCUE; the successful input adds 30 frames to Isp's ordinary approach and extends Pac's exit walk from 48 to 96 frames, with a 24-frame neutral settle. This changes no source and is distinct from the exact native replay. |
| Fresh SPEC review | Root / fresh reviewer | ACCEPT_WITH_CONCERNS | Frozen-source SPEC report accepts coverage; see `tests/_temp/acid_push_spec/REPORT.md`. |
| Six-scope QUALITY review | Root / six fresh reviewers | COMPLETE | Plan, Test, Style, Docs, Legacy, and Comment reports are in `tests/_temp/acid_push_audit/`; merged findings and dispositions are in `SUMMARY.md`. Test's permanent lifecycle test suggestion is deferred by root as a KISS maintenance tradeoff; no permanent coverage is claimed. |
| Integration review and root acceptance | Root / fresh reviewer | ROOT ACCEPTED DONE_WITH_CONCERNS | `tests/_temp/acid_push_integration/REPORT.md` accepts composition and full plan coverage with concerns and no blocker or drift; root accepts the milestone. Human outcomes, reported bridge motion, full-campaign play, and current difficulty remain unproven. |

The runtime proof records Gem's acid contact at 2.642 seconds and return at 6.642 seconds; Cana's
contact at 12.267 seconds and return at 16.267 seconds. Cana produces a new projectile after
returning. The no-dunk route completes in 1,201 frames with zero deaths. A focused probe also finds
that a hero overlapping a returning villain can pass through it until clear; ordinary movement
escapes, so this is recorded as a nonblocking observation. Native traces do not establish what the
built browser shows, nor do scripted routes establish player discovery, comfort, or enjoyment.

The canonical code gate passed 92 checks plus both TypeScript programs, lint, and format. The
official build and standard smokes passed 2/2 after installing the missing Chromium headless-shell
binary; the first two launch attempts failed before test execution. Built-source assertions and
HTTP 8127/disk identity pass for `index.html`, the main bundle, campaign map, and approved splash.
See the active plan for exact artifact hashes and command evidence.

The final browser report records seven views against bundle
`a3ddac4ab9596cb5a214e17f13d836be890ca401f937219d25d132e3d854522e`, captured at
`2026-10-17T01:57:44.592Z`. The frozen receipt is
`tests/_temp/acid_push_browser/receipt.json`; its seven views all report no errors. The screenshots
show Gem shove, acid splash and return; Cana acid splash and return with an active-flight cue; and
both dunk and ordinary no-dunk completion. Both clear images show zero retries. Root inspected and
approved the visual placement in all seven views. The screenshot of Cana's attack cue does not
identify the simulation owner or exact firing time; native events remain the evidence for attack
ownership and timing. The no-dunk image shows one of two sparks collected.

The original no-dunk native key route was not robust to the capture tool's 16 ms browser-clock
quantization: Pac left STEADY while Isp was at x=931.25 and had not reached RESCUE, and the exploratory
run ended with one retry. The final successful browser route adds 30 frames (0.25 seconds) to Isp's
ordinary approach before Pac leaves STEADY, extends Pac's last exit walk from 48 to 96 frames, and
settles 24 frames after the clear. This is an ordinary partner-aware input adjustment, not a source
change; do not claim the final capture used the exact original native key intervals. The separate
initial failure and +8-frame failed experiment are retained in the browser report, not treated as
failures of the frozen final seven-view receipt.

The original accepted level 38 milestone remains closed. Its source-bound comparison here uses a
fresh reconstruction because the earlier temporary evidence was externally cleared; it does not
reopen level 38, the historical 38-room difficulty assessment, or the accepted report. No new score
or campaign-wide difficulty refresh is required for this bounded feature.

## Closeout

Root accepts this bounded milestone as DONE_WITH_CONCERNS. The accepted `level_38` milestone
remains closed; native comparison against reconstructed baseline
`eaf28cc` does not recover the externally cleared original artifacts. The historical 36-room
difficulty assessment and room count remain unchanged. Scripted browser input was adapted for 16 ms
clock quantization after failed exploratory routes; its successful route is not the exact native
ledger. Human fun, unaided discovery, the user's reported bridge motion, a full 38-room journey, and
current 38-room difficulty remain unproven. The continuous gameplay goal remains active.
