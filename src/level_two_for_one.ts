import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const TWO_FOR_ONE_SCENE: VillainScene = {
  gem: {
    position: { x: 80, y: 380 },
    opening: "One bubble. One victim.",
    ending: "That was a two-for-one?!",
  },
  cana: {
    position: { x: 1030, y: 550 },
    opening: "No sharing the projectiles!",
    ending: "They even shared the projectile.",
  },
  schemes: [],
};

export const TWO_FOR_ONE_LEVEL: LevelDefinition = {
  id: "level_28",
  title: "Two for One",
  subtitle: "One bubble. Two very bad ideas for Gem.",
  hint: "Pac jumps onto Isp. Isp jumps; near the top, Pac jumps again and falls onto a bubble's gold cap. Pac rebounds right; Isp runs ahead and jumps into that bubble for FLOAT. Missed it? Regroup for the next shot.",
  stage: "liver",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 310, y: 514 }, pac: { x: 250, y: 514 } },
  platforms: [
    { id: "floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "gem_gland", kind: "static", rect: { x: 0, y: 380, width: 150, height: 20 } },
    { id: "gland_wall", kind: "static", rect: { x: 150, y: 0, width: 20, height: 620 } },
    { id: "pac_duct", kind: "static", rect: { x: 400, y: 310, width: 120, height: 20 } },
    { id: "isp_duct", kind: "static", rect: { x: 800, y: 300, width: 300, height: 20 } },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1020, y: 240, width: 42, height: 60 } },
    { player: "pac", rect: { x: 450, y: 250, width: 42, height: 60 } },
  ],
  interference: [
    {
      id: "shared_flight",
      kind: "bubble",
      target: { x: 850, y: 475 },
      windup: 1,
      cooldown: 1,
      speed: 200,
      radius: 12,
      maxRange: 600,
    },
  ],
};
