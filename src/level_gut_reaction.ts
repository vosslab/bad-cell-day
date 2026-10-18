import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const GUT_REACTION_SCENE: VillainScene = {
  gem: {
    position: { x: 210, y: 500 },
    opening: "That tissue looks springy. The data are inconclusive.",
    ending: "I have revised my bounce estimate.",
  },
  cana: {
    position: { x: 1000, y: 450 },
    opening: "Delivery across the gut! Please sign for this boomerang.",
    ending: "The return trip was not in the brochure.",
  },
  schemes: [],
};

export const GUT_REACTION_LEVEL: LevelDefinition = {
  id: "level_48",
  title: "Gut Reaction",
  subtitle: "Ride the folds. Bounce your partner to the high road.",
  hint: "At the first TISSUE, step off to launch your partner. Isp can collect the high Spark while Pac rides the moving fold below. Meet at the far TISSUE: Isp steps off to bounce Pac to the high exit, then takes the low exit. Miss? Regroup and try again.",
  stage: "intestine",
  villain: "both",
  villainScene: GUT_REACTION_SCENE,
  world: { width: 1280, height: 660 },
  spawns: { isp: { x: 315, y: 464 }, pac: { x: 400, y: 464 } },
  platforms: [
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 580, width: 1280, height: 80 } },
    { id: "first_tissue", kind: "recoil", rect: { x: 160, y: 500, width: 300, height: 80 } },
    { id: "isp_spark_shelf", kind: "static", rect: { x: 500, y: 310, width: 200, height: 20 } },
    {
      id: "moving_gut_fold",
      kind: "moving",
      rect: { x: 500, y: 500, width: 160, height: 22 },
      motion: { offset: { x: 180, y: 0 }, period: 8 },
    },
    { id: "second_tissue", kind: "recoil", rect: { x: 850, y: 450, width: 270, height: 80 } },
    { id: "pac_high_landing", kind: "static", rect: { x: 1130, y: 250, width: 150, height: 20 } },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [
    { id: "isp_optional_spark", owner: "isp", position: { x: 600, y: 280 } },
    { id: "pac_ferry_spark", owner: "pac", position: { x: 650, y: 470 } },
  ],
  exits: [
    { player: "isp", rect: { x: 650, y: 520, width: 70, height: 60 } },
    { player: "pac", rect: { x: 1200, y: 190, width: 70, height: 60 } },
  ],
  interference: [
    {
      id: "gem_short_bubble",
      kind: "bubble",
      target: { x: 470, y: 480 },
      maxRange: 200,
      windup: 0.8,
      cooldown: 2,
      speed: 150,
      radius: 12,
    },
    {
      id: "cana_reunion_boomerang",
      kind: "boomerang",
      target: { x: 900, y: 430 },
      aim: "nearest",
      cooldown: 1.7,
      windup: 1,
      speed: 240,
      radius: 12,
    },
  ],
};
