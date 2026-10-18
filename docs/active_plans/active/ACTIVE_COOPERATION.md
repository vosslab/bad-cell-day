# Narrow Escape cooperation and airborne pose

**Status: DONE.** Root accepted this bounded batch at 2026-10-18 00:29:44 UTC. The broader
gameplay goal remains active. Current44/current46 assessments remain historical and were not
refreshed.

## Player outcome

At stable `level_06` / campaign position 7, Isp pushes Gem onto the upper-left counterweight deck
and boards; Pac boards the lower-right deck. Gem's physical mass lowers Isp's side and raises Pac's,
giving both heroes consequential roles in a visible shared lift. Pac exits upper-right, then Isp
leaves at the bottom. Both villains and their weapons remain active.

If a hero misses the high bank, the counterweights freeze with that rider absent. A high fold and
safe floor lead back through two folds to the still-raised right deck, so the rider can reboard and
finish without reset or automatic return. The ordinary-input native clear and same-run recovery
both reach both exits with no deaths. Root-reviewed browser views cover the start, midride, clear,
recovery, and three jump phases; all seven pass without deaths or browser errors. The recovery view
needed 30 ordinary rightward frames after its supplied route ended just short. Root accepts the
sampled visuals; the airborne pose reads subtly, and the existing counterweight HUD crowding the
weapon header is nonblocking and outside this change.

## Scope and review

The other 46 rooms, campaign order, save behavior, and control physics are preserved. The room uses
the existing counterweight engine and types, with no new engine, configuration, state, asset, or
SVG behavior. Normal airborne stretch/compression follows existing vertical velocity and remains
anchored at the sole; dead, reduced-motion, effect, support, and pad priorities remain intact.

Root's combined code check, build, and two smokes pass. Fresh SPEC, QUALITY, and integration reviews
ACCEPT; root accepted the batch as DONE. Browser and native evidence establish operation and sampled
presentation, not human discovery, enjoyment, or difficulty. The focused book rationale is Schell
13 (consequential cooperation), 14 (visible action and progress), 16 (pace), and 28 (specific
observations); Koster (vary learned patterns); Swink (simulation-linked response); and Fullerton
(observe before coaching). The older [game-design reading note](../reports/game_design_reading.md)
is historical context, not authority for this design or its evidence.
