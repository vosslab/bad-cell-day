# Shove carry feasibility

## Question

Can Cana's ordinary right-going boomerang SHOVE Pac while Isp rides on Pac, adding enough
reach for both to cross a gap that ordinary jumping cannot cross?

## Hypothesis and boundary

The existing simulation gives Pac a 0.4-second SHOVE effect with a 260 px/s horizontal
velocity contribution that decays during the effect. Pac can still use ordinary movement and
jump input. The physics step already carries a grounded partner horizontally and vertically
when the lower player moves. A narrow two-deck fixture should therefore expose useful extra
reach without custom rules. This is a private engine experiment; it does not authorize a
production room or establish fun, readability, or recovery quality.

## Method

Build one authored `LevelDefinition` with a safe lower recovery floor, a small upper launch
deck, a separated upper landing deck, and Cana positioned so the actual boomerang path
crosses Pac's body while Pac carries Isp. Use public state creation, empty inputs, and fixed
simulation steps only. Run the same coarse movement and jump intervals with and without the
attack. Record projectile contact, stack support, jump, landing, and maximum rightward reach.
Derive the tested gap from player geometry and both runs; preserve all inputs and traces.

## Decision

**SET ASIDE; NEEDS CONTEXT.** The original two-second probe ended before the full flight landed, so
its categorical failed-landing claim is retracted. The completed ordinary flight recovered both
players on the same floor. The original measurement found 53 px of extra reach; this does not
establish a useful room, stable advantage, readability, or fun. A fresh full-flight feasibility
check may be considered separately after the carry correction. This note authorizes no production
room or level registration.
