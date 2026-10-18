import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const PASSING_THOUGHTS_SCENE: VillainScene = {
  gem: {
    position: { x: 610, y: 450 },
    opening: "Keep your thoughts moving.",
    ending: "I liked that thought better.",
  },
  cana: {
    position: { x: 720, y: 340 },
    opening: "I have a thought for you!",
    ending: "That thought came back around.",
  },
  schemes: [],
};

export const PASSING_THOUGHTS_LEVEL: LevelDefinition = {
  id: "level_52",
  title: "Passing Thoughts",
  subtitle: "Pac: catch Isp's moving fold, then borrow his head!",
  hint: "Isp rides the upper shuttle. Pac rides the lower one, then jumps onto Isp's shuttle from the side. Step on Isp's head to reach the high path. Pac's latch powers Isp's lift. Miss a shuttle? Try the separated folds and the small bank hop.",
  stage: "brain",
  villain: "both",
  villainScene: PASSING_THOUGHTS_SCENE,
  world: { width: 1200, height: 680 },
  spawns: { isp: { x: 540, y: 414 }, pac: { x: 300, y: 474 } },
  platforms: [
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 600, width: 1200, height: 80 } },
    {
      id: "upper_shuttle",
      kind: "moving",
      rect: { x: 500, y: 450, width: 140, height: 18 },
      motion: { offset: { x: -240, y: 0 }, period: 8 },
    },
    {
      id: "lower_shuttle",
      kind: "moving",
      rect: { x: 250, y: 510, width: 140, height: 18 },
      motion: { offset: { x: 260, y: 0 }, period: 8 },
    },
    { id: "upper_path", kind: "static", rect: { x: 600, y: 340, width: 300, height: 18 } },
    { id: "isp_bank", kind: "static", rect: { x: 660, y: 450, width: 280, height: 18 } },
    {
      id: "final_lift",
      kind: "moving",
      requiresPower: true,
      rect: { x: 1000, y: 500, width: 90, height: 18 },
      motion: { offset: { x: 0, y: -200 }, period: 6 },
    },
    { id: "far_bank", kind: "static", rect: { x: 1100, y: 300, width: 100, height: 380 } },
    { id: "final_recovery_fold", kind: "static", rect: { x: 940, y: 530, width: 50, height: 18 } },
    { id: "left_reboard_fold", kind: "static", rect: { x: 180, y: 530, width: 120, height: 18 } },
    { id: "right_reboard_fold", kind: "static", rect: { x: 700, y: 530, width: 100, height: 18 } },
  ],
  pads: [
    {
      id: "pac_latch",
      rect: { x: 830, y: 332, width: 52, height: 8 },
      accepts: "pac",
      activation: "latch",
      label: "POWER ISP'S LIFT",
      minWeight: 1,
      effects: [{ kind: "power", platformId: "final_lift" }],
    },
  ],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "pac", rect: { x: 630, y: 280, width: 80, height: 60 } },
    { player: "isp", rect: { x: 1125, y: 240, width: 50, height: 60 } },
  ],
  interference: [
    {
      id: "gem_shuttle_bubble",
      kind: "bubble",
      target: { x: 560, y: 430 },
      maxRange: 160,
      windup: 0.8,
      cooldown: 2,
      speed: 160,
      radius: 12,
    },
    {
      id: "cana_helpful_boomerang",
      kind: "boomerang",
      target: { x: 880, y: 320 },
      windup: 0.7,
      cooldown: 1.6,
      speed: 300,
      radius: 12,
    },
  ],
};
