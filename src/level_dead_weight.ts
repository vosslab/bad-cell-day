import { rect } from "./levels_final_helpers";
import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const DEAD_WEIGHT_SCENE: VillainScene = {
  gem: {
    position: { x: 220, y: 220 },
    opening: "I am the payload and the problem.",
    ending: "You used my weight and my weapon.",
  },
  cana: {
    position: { x: 1050, y: 550 },
    opening: "I am staying out of this.",
    ending: "Fine. You can keep the liver.",
  },
  schemes: [],
};

export const DEAD_WEIGHT_LEVEL: LevelDefinition = {
  id: "level_46",
  title: "Dead Weight",
  subtitle: "Make Gem pull his weight. Then borrow a bubble.",
  hint: "Pac pushes Gem onto A, then boards beside him. Both heroes must ride: Gem lowers A and raises B. Isp catches FLOAT, rises above the shaft, then steers right onto the high fold. Missed the first catch? Stay over B to try again. Once Isp is up, Pac steps left off A and takes the low passage to his exit.",
  stage: "liver",
  villain: "gem",
  villainScene: DEAD_WEIGHT_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 640, y: 364 }, pac: { x: 150, y: 184 } },
  platforms: [
    { id: "safe_floor", kind: "static", rect: rect(0, 550, 1100, 70) },
    { id: "gem_loading_dock", kind: "static", rect: rect(0, 220, 200, 18) },
    { id: "gem_deck", kind: "counterweight", rect: rect(260, 240, 190, 18) },
    { id: "gem_right_stop", kind: "static", rect: rect(450, 200, 20, 300) },
    { id: "isp_deck", kind: "counterweight", rect: rect(570, 400, 200, 18) },
    { id: "isp_shaft_left", kind: "static", rect: rect(540, 204, 20, 296) },
    { id: "isp_shaft_right", kind: "static", rect: rect(780, 100, 20, 400) },
    { id: "upper_fold", kind: "static", rect: rect(780, 100, 290, 18) },
  ],
  counterweights: [
    { id: "live_ballast_lift", platformIds: ["gem_deck", "isp_deck"], travel: 160, speed: 65 },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: rect(990, 40, 60, 60) },
    { player: "pac", rect: rect(990, 490, 60, 60) },
  ],
  interference: [
    {
      id: "gem_live_ballast_bubble",
      kind: "bubble",
      target: { x: 660, y: 240 },
      maxRange: 500,
      windup: 0.9,
      cooldown: 1.0,
      speed: 500,
      radius: 14,
    },
  ],
};
