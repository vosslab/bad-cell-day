# Level 3: Push Both Villains into Acid

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** Campaign data, native proofs, renderer source,
integrated build, source identity, seven browser views, SPEC, six-scope QUALITY, and integration
review are complete. Human fun, discovery, the reported bridge motion, the full 38-room journey, and
current 38-room difficulty remain unproven. The accepted `level_38` milestone is
closed and is not reopened here.

## Goal and evidence

Add a playful Level 3 interaction in which ordinary movement pushes both Gem and Cana into the acid.
They should fall with a readable comic splash, disappear briefly, and return to the encounter. A
villain may interrupt only a bound attack or projectile; after returning, it resumes an attack
already started or observes its existing cooldown. There is no attack key, patrol system, inventory,
or new difficulty system in scope.

The encounter must retain the existing STEADY-to-RESCUE cooperation puzzle and the bridge challenge.
Stable level IDs and order, saved progress, and the other 37 room definitions stay intact. This is a
bounded feature; it adds no deadline to the current 38-room difficulty assessment. Enjoyment and
unaided discovery remain human outcomes and are not inferred from scripted proof.

## Current evidence and decisions

- Current room: stable `level_04`, **Bridge Over Troubled Slime**. The authored bridge is `unstable`
  at x=300..800, top=410, collapse delay 0.8 s and reset 2 s. The acid pit is x=300..800,
  y=585..620. It has no authored side-to-side motion.
- The human reports that the Level 3 bridge shifts side-to-side and is easy to fall from. Source
  defines an unstable bridge but no authored horizontal movement. Root's P2 decision preserves the
  existing geometric challenge without adding gaps or extra pressure; it does not claim that the
  source implements the reported side-to-side motion or that the user explicitly required motion
  preservation.
- The hero puzzle uses Pac's STEADY hold to stabilize/open the Isp route around x=805, then Isp's
  RESCUE latch to latch the bridge and doors. P7 moves only the RESCUE pad to x=970 so it does not
  auto-latch while Isp is pushing Cana; this leaves the optional dunk before the normal latch.
- Campaign data is adopted and frozen. `level_04` remains at campaign position 3, with
  `scene.pushable: true`, Gem center `(265,410)`, Cana center `(825,410)`, and RESCUE pad x=970.
  Only four fields differ from the recovered pre-A0 definition: `hint`, RESCUE pad `rect.x`, Gem
  scene position, and `pushable`. All other 37 room definitions and order are unchanged.
- Keep the existing Cana-only weapon roster. Do not add a Gem gun; Gem keeps the bridge scheme.
- The root-owned A0 shared contract is implemented and accepted:
  `VillainBodyState`, always-present `GameState.villainBodies`, and opt-in initialization for
  `scene.pushable`. Root reports `./check_codebase.sh` passed (92 checks, both TypeScript checks,
  lint, and format); `source source_me.sh && ./run_playwright_tests.sh --build` passed the official
  build and two standard smokes. Runtime and campaign adoption are now frozen and accepted for the
  current native milestone.
- The original A0 report and frozen old-38 baseline bundle under `tests/_temp/` were externally
  cleared at 20:33 after human commit `eaf28cc`. The tracked source remains intact. Do not recreate
  closed level-38 reports. A fresh source-bound baseline was reconstructed from fixed pre-A0 commit
  `eaf28cc395dc1827fe1e43ac2f7cd6c2687f67a3`; this is a new baseline, not recovery of the deleted
  artifacts. See `tests/_temp/acid_push_baseline_recovery/REPORT.md`. Bundle
  `baseline.mjs` SHA-256 is `dc721f472b9eba0cf0299bba3dc965840ddb62d022bbe42927460845faadf1ee`;
  all-38-room `levels.json` SHA-256 is
  `6828af4a574a5250a9907dee9555259eb0621e50329faa31990ec26f99a6ed5a`. It validates 38 rooms,
  `level_38` at position 34, `level_20` last, pre-A0 state without `villainBodies`, and one 120 Hz
  `step_game` tick. This supports representative source-bound comparisons, not proof of any new
  behavior.
- Root approved the original `tests/_temp/acid_dunk_art/acid_dunk_splash.svg`, SHA-256
  `75ef5e869728d73833ddb99f77c87980a75cb00e54a8ea10aea64c46216ae395`, after direct review at
  128px transparent and 256px lung/acid context. This approves the art asset only. `ART_REPORT.md`
  is complete as DONE_WITH_CONCERNS and records author-inspected SVG/raster/context proofs. Native
  dunk proof and authored scene adoption are complete; root also approved the splash appearance in
  the seven final built-browser views.
- Root's P2 decision supersedes the earlier P1 shorter-bridge proposal. P2 preserves bridge geometry
  and adds no gaps or extra pressure. Do not revive P1.
- The runtime owner froze the native implementation after proving both dunks and four-second returns,
  Cana's new post-return shot, and a normal no-dunk cooperative clear. See
  `tests/_temp/acid_push_runtime/REPORT.md` for the frozen file hashes and key ledgers. On the dunk
  route Gem contacts acid at 2.642 s and returns at 6.642 s; Cana contacts at 12.267 s and returns
  at 16.267 s. Both heroes then complete STEADY/RESCUE and exits with zero deaths. The no-dunk clear
  completes in 1,201 frames with zero deaths. This is native evidence, not built-browser acceptance.
- The runtime owner reports the representative unchanged `level_37` and `level_38` native ledgers
  match the reconstructed pre-A0 baseline route results exactly. See the runtime and legacy-route
  reports; the legacy comparison owner is released. This does not reopen or recreate the deleted
  level-38 evidence.
- Renderer handoff is implemented and typechecked, including an exact copy of the approved splash
  asset and build copy/check path. The integrated build passed after the environment's missing
  headless-shell binary was installed; the initial two smoke launches failed before launch, then the
  retry passed 2/2. Root also reports `./check_codebase.sh` PASS (92 tests plus TypeScript, lint, and
  format), current-built-source assertion PASS, and HTTP 8127/disk identity PASS for index, main
  bundle, campaign map, and splash. Main bundle SHA-256:
  `a3ddac4ab9596cb5a214e17f13d836be890ca401f937219d25d132e3d854522e`; campaign map:
  `3df9852c89b5d3ab4a5bd015580ca6e0173ccc951c938f9ce9f9b537c23e6c59`; index:
  `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`; splash retains approved
  hash `75ef5e869728d73833ddb99f77c87980a75cb00e54a8ea10aea64c46216ae395`. Seven built-browser
  gameplay views are frozen and inspected in `tests/_temp/acid_push_browser/REPORT.md`; all have
  zero retries and browser errors, and root approved the inspected visuals. Browser acceptance does
  not establish human enjoyment or unaided discovery.

## Remaining approach and file scope

1. Preserve the accepted A0 result in this ledger. Use the new source-bound fixed-commit baseline
   for representative old-room/order comparisons; do not recreate closed `level_38` reports or
   claim the cleared bundle is still available.
2. Campaign adoption is complete. Public `LEVELS` replay verifies both dunk/return routes, Cana
   resumption, and the no-dunk cooperative clear; all other rooms/order match the recovered baseline.
3. Focused temporary behavior probes passed for effect-adjusted shove velocity, solid-block
   behavior, attacker-owned projectile cleanup, pad-start during absence, and ordinary escape from
   an occupied home. Record the overlap/pass-through behavior on return as a nonblocking observation;
   no runtime change was proposed and no permanent route tests were added.
4. The integrated build, two standard browser smokes, source-current check, and served HTTP/disk
   identity checks passed. The initial smoke attempt lacked the installed headless-shell binary and
   failed before launch; after installing Chromium's shell, the official command passed 2/2. This
   was environment setup, not a gameplay failure.
5. Seven final built-browser gameplay views are complete and inspected. The SPEC review accepted
   with concerns, and all six fresh QUALITY passes (Plan, Test, Style, Docs, Legacy, Comment) are
   complete. Fresh integration accepts composition and plan coverage with concerns and no blocker or
   drift; root accepts the bounded milestone as DONE_WITH_CONCERNS. Human play limits remain
   explicit: enjoyment, unaided discovery, reported bridge motion, full 38-room play, and current
   38-room difficulty are unproven.

Current owners:

- Runtime owner: completed and CODEFROZEN; see native proof report and source-hash receipt.
- Campaign-data owner: complete and frozen; report records adopted source and public `LEVELS` replay.
- Focused behavior-probe owner: complete; one-time evidence only under `tests/_temp/`.
- Renderer owner: source handoff complete; integrated build and source identity checks pass.
- Browser owner: complete; seven-view browser report and receipt are frozen.
- SPEC reviewer: ACCEPT_WITH_CONCERNS; see the frozen SPEC report.
- Six QUALITY reviewers: complete; see `tests/_temp/acid_push_audit/` and its merged summary.
- Root: accepts the bounded milestone as DONE_WITH_CONCERNS after integration review.

## Completion checks

- Native runtime proof is complete: ordinary contact pushes both villains into acid; each returns
  after four seconds; Cana resumes the existing attack cycle and produces its next shot; the route
  completes STEADY/RESCUE and both exits with zero deaths. The ordinary no-dunk route also clears
  with zero deaths. See the runtime report and frozen key ledgers.
- Campaign data adoption passed public `LEVELS` replay: Gem `(265,410)`, Cana `(825,410)`, RESCUE
  pad x=970, `scene.pushable: true`, with all other `level_04` fields and the other 37 room
  definitions/order unchanged. The Cana-only weapon roster and Gem bridge scheme remain intact.
- Focused behavior probes passed, with one documented nonblocking observation: a hero overlapping
  a returning villain may move through its body until clear; ordinary movement escapes and no
  softlock occurs. No runtime fix or permanent route matrix was added.
- The renderer source handoff and integrated build/smokes passed; the built output matches source
  and served disk identity for index, main bundle, map, and approved splash. Seven actual gameplay
  captures are complete and inspected.
- Authored data keeps the existing bridge span and instability/collapse behavior, pit placement,
  stable room identity, campaign order, save behavior, and every old room definition. Compare old
  definitions and order against the new source-bound baseline. If the approved splash asset is used,
  preserve its exact SHA-256 through renderer integration and the built output.
- Root's integrated `./check_codebase.sh` and `source source_me.sh && ./run_playwright_tests.sh --build`
  passed; the first smoke launch lacked Chromium headless shell and failed before launch, while the
  retry after installing the shell passed 2/2. Source-current and served HTTP/disk identity also
  passed. Seven browser captures show shove, splash, return, Cana's attack cue, both clear routes,
  and representative prior-room behavior. Native traces do not substitute for browser observations.
- Fresh specification review accepted requirement coverage with concerns; all six fresh QUALITY
  passes are complete. Fresh integration accepts composition and plan coverage with concerns; root
  accepts the milestone as DONE_WITH_CONCERNS. These checks do not claim human fun or discovery
  without human observation.

## Ledger

| Item | Owner | State | Evidence / next action |
| --- | --- | --- | --- |
| Room requirement and P2 constraint | Root | DECIDED | Keep the existing unstable-bridge geometric challenge without gaps or extra pressure; P1 shorter bridge is superseded. |
| A0 shared villain-body contract | Root / A0 owner | ACCEPTED | `./check_codebase.sh` passed 92 checks, both TypeScript checks, lint, and format; official build and two standard smokes passed. |
| Old-room baseline provenance | Fresh recovery owner | DONE_WITH_CONCERNS | New source-bound baseline from `eaf28cc395dc1827fe1e43ac2f7cd6c2687f67a3`; see recovery report and recorded hashes. It is not the deleted original bundle. |
| Splash artwork | Root / art owner | ART DONE_WITH_CONCERNS; exact asset APPROVED | `tests/_temp/acid_dunk_art/ART_REPORT.md`; exact SVG hash recorded above. Root approved its appearance in the seven final built-browser views. |
| Runtime source and native proof | Runtime owner | CODEFROZEN; DONE_WITH_CONCERNS | `tests/_temp/acid_push_runtime/REPORT.md`; both-dunk/return and no-dunk clear, actual key ledgers, Cana post-return shot, TypeScript and focused checks recorded. |
| Working room design | Root | P7 KEEP; ACCEPTED | Gem `(265,410)`, Cana `(825,410)`, RESCUE x=970, `scene.pushable: true`; all other room data remains unchanged. |
| Campaign data and public `LEVELS` replay | Fresh data owner | DONE_WITH_CONCERNS | `tests/_temp/acid_push_campaign_data/REPORT.md`; both-dunk/return and no-dunk route pass, exact four field differences, other 37 definitions/order unchanged. |
| Splash art and renderer source | Art / renderer owners | SOURCE HANDOFF COMPLETE | Approved exact SVG and renderer path are implemented/typechecked and included in the passing integrated build; root approved its appearance in the final captures. |
| Focused behavior contract probe | Fresh owner | PASS_WITH_OBSERVATION | `tests/_temp/acid_push_behavior_probe/REPORT.md`; effect velocity, blocks, projectile ownership, absent pad start, occupied-home escape pass; return-overlap oddity documented without fix. |
| Integrated build and source identity | Root | PASS | Official build and retry smokes 2/2; source-current check and HTTP 8127/disk identity pass for index, main, map, and splash. |
| Built-browser gameplay captures | Browser owner | DONE_WITH_CONCERNS | Seven final views in `tests/_temp/acid_push_browser/REPORT.md` and frozen receipt; zero retries/errors, both dunk and no-dunk clears, root visuals approved. |
| SPEC review | Fresh reviewer | ACCEPT_WITH_CONCERNS | Frozen-source SPEC report accepts coverage; see `tests/_temp/acid_push_spec/REPORT.md`. |
| QUALITY review | Six fresh reviewers | COMPLETE | All six scopes completed. PLAN and DOCS identified the stale plan status, now corrected here; DOCS also identified the malformed new changelog link, now corrected. TEST suggested one permanent lifecycle test; root deferred it as a KISS maintenance tradeoff because temporary acceptance evidence is strong. No permanent coverage is claimed. STYLE, LEGACY, and COMMENT have no findings. See `tests/_temp/acid_push_audit/SUMMARY.md`. |
| Integration review and root acceptance | Fresh reviewer / root | ROOT ACCEPTED DONE_WITH_CONCERNS | `tests/_temp/acid_push_integration/REPORT.md` accepts composition and plan coverage with concerns and no blocker or drift. Root accepts the milestone; human fun, discovery, reported bridge motion, the full 38-room journey, and current 38-room difficulty remain unproven. |

## Questions and decisions

| ID | Kind | Question / decision | State and next owner |
| --- | --- | --- | --- |
| D1 / P2 | Decision | Preserve the bridge challenge without adding gaps or extra pressure; source remains an unstable bridge without authored horizontal motion. | SETTLED by root; this does not assert that source movement matches the user's reported side-to-side appearance. |
| D2 | Decision | The earlier shorter-bridge P1 proposal is superseded. | SETTLED by root; do not apply. |
| D3 | Decision | Runtime may proceed using accepted A0 types while a new baseline is reconstructed. | SETTLED and executed; source-bound baseline is recorded, and deleted original artifacts remain unavailable. |
| D4 | Decision | Approve original `acid_dunk_splash.svg`. | SETTLED by root for the exact hashed asset; art approval does not equal integrated acceptance. |
| P6 | Decision | Accept the frozen native runtime proof and retain current Cana-only weapon roster. | SETTLED by root; runtime owner released; no Gem gun, Gem keeps bridge scheme. |
| P7 | Decision | Keep the working native room proposal for campaign adoption. | SETTLED by root: Gem `(265,410)`, Cana `(825,410)`, RESCUE x=970, `scene.pushable: true`, all other room data unchanged. |
| Q1 | Decision from evidence | Move the RESCUE pad to x=970 to avoid auto-latching while Isp pushes Cana, preserving the optional dunk before ordinary latch. | Answered by P7; campaign-data owner must apply and verify through public `LEVELS` replays. |

For each decision affecting implementation, root records the result and rationale here. Every affected
owner confirms the concrete constraint in their updated brief, applies it, and supplies relevant
verification evidence before the question is closed. Clarification, challenge, decision, and escalation
questions are expected early; root owns cross-boundary choices and acceptance.
