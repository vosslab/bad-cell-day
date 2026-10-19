import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const BREATHING_ROOM_SCENE: VillainScene = {
  gem: {
    position: { x: 300, y: 460 },
    opening: "That sac is not where I left it.",
    ending: "I was only checking its bounce.",
  },
  cana: {
    position: { x: 1010, y: 215 },
    opening: "A detour! My favorite kind of delivery.",
    ending: "It made the whole trip.",
  },
  schemes: [],
};

export const BREATHING_ROOM_LEVEL: LevelDefinition = {
  id: "level_57",
  title: "Breathing Room",
  subtitle: "Launch across the folds. Bring your partner a step.",
  hint: "Stand together on the first TISSUE. Pac steps off right so Isp springs to the high fold. Isp pushes the little sac off the edge; it lands as a step. Pac takes the moving fold underneath, then meet on the far TISSUE. Isp steps off right to send Pac to the high exit; Isp takes the low exit.",
  stage: "lungs",
  villain: "both",
  villainScene: BREATHING_ROOM_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 200, y: 424 }, pac: { x: 350, y: 424 } },
  platforms: [
    { id: "start_floor", kind: "static", rect: { x: 0, y: 540, width: 460, height: 80 } },
    { id: "first_membrane", kind: "recoil", rect: { x: 100, y: 460, width: 300, height: 80 } },
    { id: "high_fold", kind: "static", rect: { x: 350, y: 260, width: 390, height: 18 } },
    {
      id: "travelling_fold",
      kind: "moving",
      rect: { x: 420, y: 510, width: 130, height: 18 },
      motion: { offset: { x: 200, y: 0 }, period: 6 },
    },
    { id: "reunion_dock", kind: "static", rect: { x: 700, y: 540, width: 400, height: 80 } },
    { id: "second_membrane", kind: "recoil", rect: { x: 800, y: 410, width: 140, height: 80 } },
    { id: "high_exit_fold", kind: "static", rect: { x: 920, y: 215, width: 180, height: 18 } },
    { id: "left_recovery", kind: "static", rect: { x: 420, y: 600, width: 40, height: 20 } },
    { id: "right_recovery", kind: "static", rect: { x: 660, y: 600, width: 40, height: 20 } },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [{ id: "nutrient_sac", heavy: false, rect: { x: 650, y: 210, width: 48, height: 50 } }],
  collectibles: [
    { id: "isp_first_launch_spark", owner: "isp", position: { x: 255, y: 245 } },
    { id: "pac_second_launch_spark", owner: "pac", position: { x: 830, y: 160 } },
  ],
  exits: [
    { player: "pac", rect: { x: 1030, y: 155, width: 70, height: 60 } },
    { player: "isp", rect: { x: 1010, y: 480, width: 70, height: 60 } },
  ],
  interference: [
    {
      id: "gem_first_membrane_bubble",
      kind: "bubble",
      target: { x: 340, y: 455 },
      maxRange: 420,
      windup: 0.8,
      cooldown: 2.2,
      speed: 150,
      radius: 11,
    },
    {
      id: "cana_reunion_boomerang",
      kind: "boomerang",
      target: { x: 820, y: 435 },
      aim: "nearest",
      windup: 0.8,
      cooldown: 1.8,
      speed: 245,
      radius: 12,
    },
  ],
};
