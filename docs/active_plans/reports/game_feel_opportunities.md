# Hero feedback opportunities

Status: DONE_WITH_CONCERNS. The investigation is complete; implementation and new browser
acceptance are pending. Human enjoyment and novice interpretation remain unmeasured.

## Scope and evidence

Goal: make "take turns being your partner's way through" feel visible in the heroes,
while preserving the accepted 22-room campaign and its meaningful roles.

This is a source and retained-image audit, not a fresh playthrough or accessibility audit.
Inspected runtime, physics, outcome/pad state, Canvas drawing, UI completion, save settings,
and canonical hero art. Used the UI/UX Engineer feedback/state-coverage guidance and repository
principles **Focus on important issues**, **Use the scientific method**, and
**Fix the design, not the symptom**. No game code, tests, art, or generated files change here.

Viewed these actual PNGs with image inspection:

- [split_route_relay.png](../../screenshots/split_route_relay.png): separated routes and hero art.
- [tumor_core_shutdown.png](../../screenshots/tumor_core_shutdown.png): paired charge at 0.8/2s.
- `test-results/fresh_campaign/01_opening.png`: current first-room appearance.
- `test-results/fresh_browser/21_recovery_lift_held.png`: Pac holds LIFT; Isp waits above.
- `test-results/fresh_browser/21_recovery_failure.png`: Isp airborne near exits, Pac READY.
  Despite its filename, this image does not show a dead state; do not count it as death proof.
- `test-results/fresh_browser/22_ordinary_complete.png`: Crossed Paths completion panel.
- `test-results/fresh_campaign/22_complete.png`: final completion panel.
- `test-results/overnight_encounters/level_19_recovery_pac_shove.png`: historical 20-room
  interference appearance, explicitly not final-build acceptance.

Fresh evidence lives in sibling directories `test-results/fresh_browser/` and
`test-results/fresh_campaign/`; the nested `fresh_browser/fresh_campaign` path does not exist.
Retained captures establish visible states, not animation quality. Current sources confirm
the historical interference rendering still exists; subjective timing remains unobserved.

## Feedback coverage

| Moment | Actual feedback | Opportunity or limit |
| --- | --- | --- |
| Partner handoff | Both controls remain live simultaneously. Pads turn green, add `+`, and draw target links; barriers open and carriers change state. | There is no active-character switch. The attention handoff is between partners/routes. Hero bodies do not acknowledge holding or rescuing. |
| Cross-route help | Authored links and villain reactions show mechanism consequences. Finale explicitly names which TARGET is held. | Across the Divide visibly separates helpers, but Pac on LIFT has the same idle pose as Pac doing nothing. Distinguish contribution from waiting without naming the next solution. |
| Jump and landing | Fixed collision feet, shadow, facing, shared idle bob, and an airborne stretch; buffered jumps and coyote time exist. | Airborne pose does not distinguish rising, falling, or impact. No landing reaction history exists. Screenshot evidence cannot measure responsiveness. |
| Spark pickup | Owned spark disappears and HUD count increases. | No local pickup reaction; a player watching the feet may miss the reward. Useful later, but weaker connection to reciprocal cooperation. |
| Hurt and recovery | Interference draws effect name, duration arc, wobble/stuck cue, then RECOVER immunity ring. Lethal death gives both heroes crosses/stars, banner/status, and automatic reset after 0.6s. | Existing nonlethal recovery is explicit. No health system exists. Actual death animation was inspected in source only; do not claim the retained failure-named PNG verifies it. |
| Boss shutdown | Target chips, shared charge bar, core halves, defeat art, disabled attacks, and shutdown instruction. | Strong existing shared consequence. Additional charge banners or screen shake would compete with useful information. |
| Victory | Immediate completion overlay, team headline, stats, two villain portraits and authored endings. | Heroes become faint behind the opaque overlay; villains receive the clearest character moment. Success names the team but visually spotlights its opponents. |
| Personality | Tall eager Isp and broad half-lidded Pac read as distinct cute silhouettes; villains stroke a beard/use a mirror and react to progress. | Hero personality is mostly static art and control-card copy. The heroes do less acting than the villains during their own success. |

Source owners: [render_characters.ts](../../../src/render_characters.ts),
[render_game.ts](../../../src/render_game.ts), [runtime.ts](../../../src/runtime.ts),
[physics.ts](../../../src/physics.ts), [mechanisms.ts](../../../src/mechanisms.ts),
[render_interference.ts](../../../src/render_interference.ts),
[render_boss_charge.ts](../../../src/render_boss_charge.ts), and [app.tsx](../../../src/app.tsx).

## Shortlist

1. **Hero responses to partner work.** Give held support, first rescue/latch, and joint success
   a connected visual language. Highest fit to the north star and an existing visible gap.
2. **Locomotion and pickup response.** Add velocity-aware poses, foot-anchored landing compression,
   and local spark acknowledgment. Broadly useful, but does less to explain why both roles matter.
3. **Optional sound feedback.** Could reinforce important transitions, but no audio implementation
   exists. `soundEnabled` is saved and defaults to true; it is not an implemented mute control.
   Audio adds preference/lifecycle work and cannot solve silent-play readability. Defer.

## Recommended coherent change

Implement **hero responses to partner work** as one presentation pass, initially judged in
the first hold/rescue room, Across the Divide, Crossed Paths, and the finale.

Before: Pac stands on LIFT while a carrier changes elsewhere; the same smiling or half-lidded
sprite represents idle, active help, and arrival. On winning, large Gem/Cana portraits dominate
the success panel while the heroes disappear into its backdrop.

After: Isp visibly plants a quick, intent lean while sustaining an owned control; Pac settles
into a broad steady brace. A newly secured latch gets one brief, distinct acknowledgment from
its actual operator. The partner's existing route responds as it already does. Completion puts
both recognizable heroes together beside the team headline, with a shared celebratory pose;
existing villain reactions remain the comic response below. Controls remain immediate throughout.

This makes the helper appear active without inventing a new reward or telling the recipient
where to go. Isp's eager energy and Pac's steadiness emerge through timing and posture using
the existing art. These are design hypotheses, not measured enjoyment gains.

### Bounded ownership and contracts

| Owner | Responsibility |
| --- | --- |
| `src/runtime.ts` | Observe relevant state transitions immediately after fixed simulation steps. Own short-lived presentation history and its attempt lifecycle. |
| Proposed `src/hero_feedback.ts` | Small typed projection of actual owned-pad occupancy, first latch, and team completion into hero responses; no event bus or puzzle rules. |
| `src/types/presentation.ts` | Explicit read-only hero-response values passed to drawing. Keep simulation and save types unchanged. |
| `src/render_characters.ts`, `src/render_game.ts` | Foot-anchored posture/acknowledgment using canonical image assets; keep current depth ordering, identity labels, and contact brackets. |
| `src/app.tsx`, `src/style.css` | Compact paired hero treatment inside the existing completion heading; no added dialog, extra action, or delayed Next/Replay. |

An active latched pad does not prove someone is still holding it. Use `occupiedBy` plus the
pad's real minimum weight for a held pose, and the false-to-true `latched` transition for its
one-time acknowledgment. Attribute an owned pad only to its actual occupant. Do not infer hero
credit from `active` alone, a crate, or an unoccupied old latch. Avoid making an `any`/joint pad
look like a solo accomplishment. Existing state stays authoritative about whether a route works.

Presentation observes after each fixed step so short transitions are not lost between rendered
frames. One response per hero takes priority over ordinary idle motion; interference/death
feedback stays recognizable and interrupts celebration. Only actual completion produces the
joint victory. Reset history on start/retry/automatic death restart/replay; freeze response age
while paused. Preserve input, charge, saved progress, trial isolation, and render purity.

Reduced motion uses a stable contributing pose or short static acknowledgment, with no repeated
pulsing, bounce, or camera movement. Keep the existing identity/READY text and semantic game
status; avoid per-step live announcements. No new tutorial arrows, next-pad prompts, speech
bubbles, particles, currency, statistics, or extra HUD row are needed for this change.

### Tradeoffs and proof

- Enlarged art already overlaps pad labels and the finale's lower-right actor area. Foot anchoring,
  small transforms, bounded edge centering, and identity-over-body draw order are acceptance
  requirements. Reject poses that obscure a landing edge, warning, or held/latched distinction.
- Existing artwork is a complete SVG image, not a rig. Whole-body posture supports a bounded first
  pass; articulated limbs or new face variants would expand art scope and require a separate call.
- A bracing pose says "I am operating this control," not "my partner used it successfully."
  Do not add a transfer-success claim without evidence of that traversal.
- A completion hero grouping needs small-height and narrow-layout inspection so Next/Replay and
  authored villain reactions remain reachable. Choose a compact grouping, not another card row.

Validate before/after frames for idle versus held versus newly latched, a released hold versus
an abandoned latch, one partner READY, interruption by interference/death, and joint completion.
Check normal/reduced motion, pause/resume, retry, edge-clamped heroes, stacked heroes, fallback
art, and repeated re-entry to the same held pad. Temporary behavioral probes should establish
that presentation changes no physics, pad, charge, save, or input outcome; retain permanent tests
only for stable nontrivial lifecycle/attribution contracts. Run repository checks/build and inspect
ordinary-input handoffs on the actual new build; retained PNGs cannot accept new animation.

Human follow-up: let two people encounter a reciprocal room without coaching. Ask who made each
crossing possible and what changed when the helper moved away. Observe whether they notice the
helper's contribution and the joint finish without extra reading. Record confusion and useful
moments separately from scripted completion. Revise or remove reactions that distract from the
partner route. This investigation does not establish measured fun, accessibility compliance,
first-time discovery, or two-player success.
