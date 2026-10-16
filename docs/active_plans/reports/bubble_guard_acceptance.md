# Bubble Guard milestone ledger

Status: DONE_WITH_CONCERNS; accepted by the manager after fresh integration ACCEPT WITH CONCERNS,
with no blockers. B1 selects compact Bubble Bouncer for additive `level_26` in the liver, after
stable `level_14` and before `level_15`; B2 accepts the geometry corrections.
Production now registers `level_26` at campaign position 18 of 26; all 25 prior definitions and
their relative order remain exact. B3's endpoint correction and source checks pass. Fresh SPEC and
distinct QUALITY accept the frozen source. The official build passes; unchanged permanent browser
tests pass 2/2 on a no-rebuild retry after the first sandboxed Chromium launch failed before test
bodies. Five focused normal/reduced browser cases pass with no console/page/request errors. The
fresh 26-room campaign passes in exact order, earns all Replay entries, and reloads identical saved
progress. Fresh integration independently confirms B1/B2/B3, the prior 25-room baseline, frozen
build and screenshot binding, focused routes, raw campaign journey, and separate menu inspection.
Preserve the accepted 25-room campaign as the baseline. Human enjoyment, discovery, paired-play
comfort, and current 26-room numerical difficulty remain unmeasured. Continuous game development
remains ACTIVE.

## Design hypothesis

The selected compact Bubble Bouncer uses Gem's 450 range and 260 speed in place of the initial
800/600 hypothesis. Isp holds the doors while Pac can intercept the shot, become STICKY, and jump
onto the exit perch so Isp can FLOAT through. The safe room follows the bomb encounter and precedes
team cargo; production art stages it in the liver and carries over the prototype subtitle.

Pac's interception demonstrates shielding. A fast cooperative dodge may clear the far gate before
an unblocked shot reaches Isp, and B1 accepts that possibility; a complete fast-dodge route has not
been verified, so catching is not established as optional by route evidence. Do not add barriers or
timing pressure to require a catch. Keep the puzzle playful and unpredictable while giving both
heroes consequential work. The source hint should say to jump onto the shelf before its far end;
walking past it runs into solid wall.

B2 corrects prototype geometry for production. Translate all local x-coordinates by -150 while
keeping the world and full floor fixed, containing Gem's 99px sprite and 158px status box. Shrink
HOLD from 100px to 60px while keeping its new left edge at 450. The original wide pad could overlap
the upper ledge and cause FLOAT to bonk. The corrected pad ends at 510: every valid Isp hold position
keeps the body right edge below 540, clear of the upper route beginning at 550. The demonstrated
main route still holds from x=501.2. Correct this in geometry, not just in prose.

The intentional bridge-collapse prototype is deferred. Its main ordinary-input run completes in
11.712 seconds with a real Cana SHOVE and recovery, but a late recovery leaves both heroes below and
requires Retry; its core STEADY-to-RESCUE relay also repeats a pattern used in many rooms. Keep its
evidence in `tests/_temp/trapdoor_cooperation/REPORT.md` for possible future reassessment. Use
current room-local behavior and contracts; neither prototype indicates a need for new engine or
type contracts.

## Dependency ledger

| Lane | Status | Owner or evidence |
| --- | --- | --- |
| Map and design | B1 SELECTED | Compact Bubble Bouncer, liver position after 14 and before 15 |
| Temporary feasibility | DONE_WITH_CONCERNS | Raw `FEASIBLE_WITH_LIMITS`; independent replay and baseline check pass |
| Production source | FROZEN | SHA-256 `4f075250633c40a5c971987a4aa9828de43cd93d0b6665330189ed8bfdd16c47` |
| Roster | FROZEN | SHA-256 `f535b3ab46f2b8a9315b684abc05988ba2f582b1ebc64338d364bf38effa1741`; prior 25 exact |
| B3 endpoint correction | DONE | Edge FLOAT and all three original routes pass; `tests/_temp/bubble_bouncer_endpoint/receipt.md` |
| Canonical source checks | PASS | `./check_codebase.sh`; both TypeScript configs, lint/format, and 78 Node checks |
| Fresh SPEC review | ACCEPT | Independent replay, all 25 prior definitions, and B1/B2/B3 transforms |
| Different fresh QUALITY review | ACCEPT | No blockers; manager keeps the canonical formatted 210-character literal |
| Official build | PASS; frozen | Main and map hashes below; source contents match map |
| Permanent browser tests | PASS 2/2 on retry | Initial MachPort sandbox launch failed before tests; retry used same build |
| Focused normal/reduced browser | PASS 5 cases | No console/page/request errors; details and capture below |
| Fresh 26-room campaign | PASS | Exact order, 26 earned Replay entries, identical save reload; report below |
| Fresh integration review | ACCEPT WITH CONCERNS | No blockers; verified source, build, browser and campaign evidence |
| Documentation closeout | READY | Current roster/count wording reconciled; scoped Markdown links and whitespace pass |
| Manager acceptance | DONE_WITH_CONCERNS | Accepted; continuous game development remains ACTIVE |

Owners for later lanes are assigned when dependencies are known. Do not create parallel workstreams
ahead of those dependencies.

## Acceptance evidence

The frozen compact fixture SHA-256 is
`ad23e95f4886c35f195d4dae05c41374637cce164ea0a8f976f159abec083ea2`. Its raw report status is
FEASIBLE_WITH_LIMITS; the canonical handoff is DONE_WITH_CONCERNS. The root independently replayed
the 6.800-second main route, 10.480-second early-jump recovery, and 8.992-second missed-landing
recovery, and confirmed the serialized baseline still matches all 25 campaign definitions and
their order. See `tests/_temp/bubble_bouncer/REPORT.md` for inputs, route failures, and limits.
Scripted simulation does not establish human discovery, enjoyment, difficulty, or two-player
comfort. The deferred bridge-collapse evidence is in `tests/_temp/trapdoor_cooperation/REPORT.md`.

B3 exposed a production-source edge: with Isp at x=423.92 on the left edge of HOLD and Pac at exit
altitude y=464, no FLOAT arrives through 11.2 seconds because the bubble ends at x=470, leaving a
16.08px gap, larger than its 12px radius. The frozen correction changes only the bubble target x to
450, matching HOLD's left edge; actual travel is 431px within the 450px maximum. The new edge route
receives FLOAT at 4.080 seconds, reaches the upper route at 5.808, and completes at 7.120. All active
HOLD horizontal positions are covered by the projectile path from x=450 through x=881. The three
original routes still complete at 6.800, 10.480, and 8.992 seconds. Source and roster hashes and the
independent SPEC replay are listed above; see `tests/_temp/bubble_bouncer_endpoint/receipt.md`.
No engine/type contract or permanent test was added.

The official build used `PW_PORT=8142`, `--build`, and output
`tests/_temp/bubble_bouncer_build/permanent`. It has `dist/main.js` SHA-256
`fdff239e4218678e3f3d34c1414fa4ea6eaac19bdbc90c8672c0b982bfd65034` and source map SHA-256
`e2882674b3d89370471c811e08a2770141fdef1ee60d895e46d0469d4695d86d`. The map contains both frozen
source modules; port 8127 serves the new main bundle, and 8142 is closed. The final root check again
confirmed frozen source/build hashes and HTTP 200 from 8127. The exact build and browser retry
evidence is in `tests/_temp/bubble_bouncer_build/receipt.md`. The full suite passes 1,979 tests in
1.95 seconds with `source source_me.sh && python3 -m pytest -q tests`; that run preceded temporary
browser helpers. Post-helper root policy checks pass 854 checks in 0.39 seconds. The failed initial
MachPort launch and unchanged 2/2 retry are both retained in the build receipt.

The focused built-browser suite passes five normal/reduced cases: normal main with pause/resume,
intentional restart, earned Replay, and reload; reduced-motion main; early jump with gates closing,
reopening, and recovery; missed high landing with floor return and zero resets; and the left-edge
FLOAT landing. No console, page, or request errors occur. One early endpoint route needed one extra
16ms ordinary right-input step; the input remains recorded without a product change. Readability
review finds faces, status, and landing rims clear in normal and reduced motion. Pac and Gem art
overlap slightly at the shelf; this is nonblocking and does not justify a cosmetic rebuild.

The selected canonical image is a reduced-motion main-route frame: Pac is above the bubble lane as
Gem FLOATs Isp toward the upper exit. Its source is
`tests/_temp/bubble_bouncer_browser/main_reduced_attempt_01/isp_float_rising.png`; the accepted copy
is `docs/screenshots/bubble_bouncer.png`, SHA-256
`3d2e328fc964403eb75a8d4b301f0ef74dad5f62ac8d62e355346ce516b3ad12`. It documents this reduced-
motion state only, not normal-motion presentation or human enjoyment/discovery.

The insertion moves later campaign positions by one while preserving their relative order: `level_26`
is position 18, `level_15` 19, `level_16` 20, `level_18` 21, `level_17` 22, `level_25` 23,
`level_22` 24, `level_19` 25, and `level_20` 26. Earlier positions are unchanged.

Fresh integration ACCEPTS WITH CONCERNS and finds no blockers. Its independent replay confirms the
approved B1/B2/B3 transform, prior 25-room definitions and order, frozen build and canonical
screenshot binding, five focused cases, raw 26-room journey, and separate earned-menu inspection.
The remaining concerns are explicit: a complete fast-dodge route remains unverified; slight Pac/Gem
art overlap at the shelf is readable and nonblocking; no human fun, discovery, paired-play comfort,
or current 26-room numerical difficulty follows from scripted evidence.

The authoritative fresh campaign report is `tests/_temp/bubble_bouncer_campaign/REPORT.md`, with
raw result `tests/_temp/bubble_bouncer_campaign/fresh_01/results.json`. An empty browser context
used one Play and 25 visible Next actions to complete all 26 rooms in exact order. The final joint
charge, shutdown, and ending appeared; all 26 menu rows showed Replay after reload. Saved progress
was identical before and after reload at 1,981 bytes (SHA-256
`47fe8c987f14570c28bb0e67bbd4758434a06fff8cecf5e0dc67dcce3ac8f4b4`). There were no app, page, or
resource errors. Zero retries were observed, not required. A separate menu inspection restored the
earned save and scrolled all 26 entries into view; this is visibility follow-up, not the fresh
earning proof. The unnecessary second full-campaign repeat was deliberately stopped after eight
rooms; its `pass: false` and interruption are retained in `tests/_temp/bubble_bouncer_campaign/fresh_02/`
and are not a product failure. The one-time evidence remains in ignored `tests/_temp/`; no archive
copy or custody gate is required for this milestone.

Before and after production, compare the campaign's existing 25 room definitions and relative
order. The new room may be additive, but the accepted rooms must retain their definitions and
sequence. Recheck the full campaign journey and adjacent rooms in the built browser if production
changes campaign ordering or shared behavior.

## Acceptance closeout

The SPEC and QUALITY reviews, frozen build, unchanged permanent browser suite, focused browser
routes, 26-room campaign, integration, and documentation are complete. The manager accepts this
milestone as DONE_WITH_CONCERNS. Preserve all 25 existing definitions and their relative order.
Continuous game development remains ACTIVE. Open discussion belongs in the appropriate decision
record; settled B1/B2/B3 direction is in
[DESIGN_DECISIONS.md](../../DESIGN_DECISIONS.md).
