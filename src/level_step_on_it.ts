import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const STEP_ON_IT_SCENE: VillainScene = {
  gem: {
    position: { x: 250, y: 400 },
    opening: "I am not a stepladder!",
    ending: "Then why am I full of footprints?",
  },
  cana: {
    position: { x: 1050, y: 550 },
    opening: "My colleague has a new support role.",
    ending: "I said support, Gem.",
  },
  schemes: [],
};

export const STEP_ON_IT_LEVEL: LevelDefinition = {
  id: "level_44",
  title: "Step On It",
  subtitle: "A shove makes a step; a bubble pays it back.",
  hint: "Isp nudges Gem off the left ledge. Pac jumps from Gem onto START BUBBLES. Isp catches FLOAT to the right of the high tissue ledge, then steers left to land. Pac takes the floor exit.",
  stage: "liver",
  villain: "gem",
  villainScene: STEP_ON_IT_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 70, y: 364 }, pac: { x: 40, y: 514 } },
  platforms: [
    { id: "upper_left_ledge", kind: "static", rect: { x: 0, y: 400, width: 350, height: 18 } },
    { id: "lower_dock", kind: "static", rect: { x: 340, y: 530, width: 460, height: 18 } },
    { id: "pac_upper_path", kind: "static", rect: { x: 510, y: 410, width: 140, height: 18 } },
    { id: "isp_exit_roost", kind: "static", rect: { x: 850, y: 350, width: 100, height: 18 } },
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
  ],
  pads: [
    {
      id: "pac_starts_bubbles",
      rect: { x: 540, y: 402, width: 80, height: 8 },
      accepts: "pac",
      activation: "latch",
      label: "START BUBBLES",
      minWeight: 1,
      effects: [],
    },
  ],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 865, y: 280, width: 70, height: 70 } },
    { player: "pac", rect: { x: 1000, y: 490, width: 60, height: 60 } },
  ],
  interference: [
    {
      id: "gem_return_bubble",
      kind: "bubble",
      target: { x: 1050, y: 520 },
      maxRange: 500,
      windup: 0.25,
      cooldown: 0.25,
      speed: 220,
      radius: 12,
      startsOnPadId: "pac_starts_bubbles",
    },
  ],
};
