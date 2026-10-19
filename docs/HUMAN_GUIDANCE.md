# Human guidance

<!-- VENDORED HEADER: START -->
Record the durable guidance Neil Voss states, or approves for preservation here, in his own words:
first person or close paraphrase, one to three lines per bullet. Material he supplies as a source
may inform [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) once it is settled, and an entry of uncertain
origin belongs there too. Rules: [REPO_STYLE.md](REPO_STYLE.md).
[PROPAGATED HEADER - ENTRIES BELOW ARE YOURS]
<!-- VENDORED HEADER: END -->

- Make durable changes in starter-repo-template; consumer copies are vendored.
- A temporary, easily removable wrapper is acceptable for the Graphify crash.
  Make the edited node count match the expected normalized count.
- I want Bad Cell Day to be a cooperative local-keyboard Canvas game with playful
  readable cartoon visuals; keep the fun ahead of biology content.
- Make the README for gamers: put a large, prominent link to the live GitHub Pages
  game at the top so players can start playing right away.
- I want five tutorial levels before the campaign and 20 levels across six stages,
  with persistent unlock progression and dual-switch bosses at levels 16, 19, and 20.
- I want the villains to do more during play. The proposed weapon system has not
  come to fruition, as far as I can tell; I want to see villain action in the first
  playable level and recurring campaign play, with increasingly clever interactions.
- Gem's short-range bubble gun could float Isp and temporarily paralyze Pac; Cana's
  long-range returning boomerang could knock Pac back and make Isp dizzy. Treat these
  as concrete direction to explore, not settled mechanics.
- Build villain attacks, movement, sabotage, and reactions into readable, meaningful,
  amusing opportunities for interaction across the campaign.
- I want the requested UI migration to use SolidJS. Keep physics and canvas
  independent, use signals for UI state, and clean up component-owned resources.
- Gameplay comes first. I want original, distinct character shapes, and a red/pink
  anatomical tissue setting with cancer imagery and a touch of body horror.
- I love shapes. Start with each character's molecular shape; Isp should be tall and
  skinny, and Pac should be fat and wide.
- I want to see Gem and Cana in level 1 and throughout the game. Gem is purple and
  bearded, with DNA obstacles; Cana is green and clean-shaven, with glucose energy.
- Level 1 should show Isp using a wall switch, then Pac restoring a powered platform.
  Let the villain story and mechanics grow through the campaign.
- I still feel the characters are a bit small in the actual game. The characters
  are really awesome and cute and should be a feature.
- Keep arrow-key game input from scrolling the page when canvas focus is lost.
- Periodically reassess the game as a whole. Treat queued suggestions as candidates, and consider
  their overlap and value before implementation.
- Give the manager a list of things to accomplish that will take overnight.
- Around 9 p.m., the old level 1 felt decently challenging and old level 2 much easier; level 2
  was just walking while level 1 had jumps. Required movement matters when judging difficulty.
- "What should the Gem and Cana interference play be like? Gem has a short range bubble gun that
  makes Isp float and Pac paralyzed; Cana has long range boomerang that pushes the Pac and spins
  Isp so Isp is dizzy? I dunno some ideas." Treat these as exploration, not fixed requirements.
- When I ask for overnight work, I mean do the work; do not stop at editing the plan.
- There is no master plan; make the game better with fresh, tangible, playable
  cooperative improvements. Treat overnight work as baseline context, not task
  completion or a cap on scope. Clarification and challenges are welcome.
- Do the authorized overnight gameplay work and read the four local game-design books to inform it.
- A fair failure is not automatically a bug. Do not add an automatic catch ledge just because
  Cana's returning boomerang can knock an idle player into a gap.
- Develop a coherent direction for the whole game and make substantial, connected
  improvements. Add genuinely different partner paths while preserving good rooms.
- I want a reusable LLM rubric for assessing the whole campaign across puzzle reasoning,
  cooperation, execution, timing, hazards, novelty, recovery, and clarity; assess puzzle and
  platforming difficulty separately.
- Judge first encounters while accounting for what prior levels taught. Record observable play
  before examining mechanics and intended solutions, to identify hindsight bias.
- Use evidence-backed reasoning steps, Isp and Pac contributions, and common mistakes to
  distinguish interesting challenge from confusion or unreliable controls.
- Use the map to assess level order, identify improvements, and guide campaign expansion.
- Sewers, factory, and garden do not feel cancer- or tumor-related to me; different organs
  make more sense as the world themes.
- Keep the anatomical cancer theme throughout the game, including organic, gross platforms;
  remember the Barnsyverse inspiration.
- Keep difficulty observation PNG captures local and ignored by Git.
- I find it odd when I can disable the villains. They are more fun when they keep attacking;
  a temporary disable can be fun.
- "I was thinking it might be fun if on level3 you could push the villains into the bile/stomach acidpit."
- I was confusing level 3 with level 4; level 4 has the moving platform.
- I expect Gem and Cana to feel physical in play: characters should be able to jump over and push them. I mostly only play the first few rooms, so prioritize making the early encounters work and read clearly.
- Focus on important issues, highest-impact risks, correctness, maintainability, validation, and
  delivery. Keep changes KISS, add configuration only for demonstrated need, and treat permanent
  tests as liabilities. "Who cares, attacks are not permanent."
- Do not fixate on preview interfaces; focus effort on gameplay decisions and the highest-impact
  risks. Use existing tools, including dedicated capture tools, when evidence needs screenshots.
- "The game should be fun and unpredictable."
- Use Luna6 for general implementation and verification subagents. Use Astra for SVG creation
  because lower models are not sufficient for art.
- Keep the preview current: rebuild `dist/` after gameplay changes and restore the preview if it
  stops. Do not repeatedly request permission for these authorized preview tasks.
- I worry that vertical DNA barriers may be overused and would like to see more moving-platform or
  scene-navigation play. Heroes clearing metastasized cancer across a body map, with cleared and
  remaining areas between levels, is one possible way to show the patient-rescue goal. These are
  ideas to consider, not rigid requirements.
- 2026-10-17: "are you happy with the game now? what would you improve about the game? I am not interested in more tests."
- Use the four local game-design books as practical resources while implementation and playtesting
  continue; I especially want Schell's chapters 13, 14, 16, and 28 to inform the work.
- 2026-10-19: "not sure it is mostly fine, perhaps more about tight jumps between platforms, but
  they are mostly good." This is tentative and names no room: the opening mostly works. Preserve its
  good structure; inspect specific landing margins if evidence appears, without inferring a room or
  blanket physics/difficulty change.
