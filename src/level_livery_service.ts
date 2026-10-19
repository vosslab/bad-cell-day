import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const LIVERY_SERVICE_SCENE: VillainScene = {
  gem: {
    position: { x: 710, y: 322 },
    opening: "Parcel inspection! I have a bubble for that.",
    ending: "Inspection complete. Parcel still weird.",
  },
  cana: {
    position: { x: 560, y: 430 },
    opening: "Express delivery! I charge extra for detours.",
    ending: "The decoy got my return address.",
  },
  schemes: [],
};

export const LIVERY_SERVICE_LEVEL: LevelDefinition = {
  id: "level_58",
  title: "The Liver-y Service",
  subtitle: "One cell takes the low road. One cell gets Cana's attention.",
  hint: "Pac can push the light nutrient sac along the lower route. Isp can cross the upper folds and draw Cana's nearest-player boomerang away. Meet at the far dock; put both cells and the sac on WEIGH 3.",
  stage: "liver",
  villain: "both",
  villainScene: LIVERY_SERVICE_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 120, y: 504 }, pac: { x: 45, y: 504 } },
  platforms: [
    { id: "lower_route", kind: "static", rect: { x: 0, y: 540, width: 1100, height: 80 } },
    { id: "first_ledge", kind: "static", rect: { x: 205, y: 470, width: 150, height: 18 } },
    { id: "second_ledge", kind: "static", rect: { x: 390, y: 400, width: 140, height: 18 } },
    {
      id: "cana_fold",
      kind: "moving",
      rect: { x: 545, y: 430, width: 170, height: 18 },
      motion: { offset: { x: 170, y: 0 }, period: 7 },
    },
    { id: "third_ledge", kind: "static", rect: { x: 590, y: 330, width: 160, height: 18 } },
    { id: "far_dock", kind: "static", rect: { x: 700, y: 450, width: 80, height: 18 } },
  ],
  pads: [
    {
      id: "weigh3",
      rect: { x: 840, y: 532, width: 195, height: 8 },
      accepts: "any",
      activation: "latch",
      label: "WEIGH 3",
      minWeight: 3,
      effects: [{ kind: "door", barrierId: "exit_access" }],
    },
  ],
  barriers: [
    { id: "exit_access", blocks: "both", rect: { x: 1000, y: 350, width: 18, height: 190 } },
  ],
  hazards: [
    {
      id: "isp_only_liver_fluid",
      kind: "slime",
      harms: "isp",
      rect: { x: 250, y: 525, width: 185, height: 15 },
    },
  ],
  crates: [{ id: "nutrient_sac", heavy: false, rect: { x: 190, y: 490, width: 42, height: 50 } }],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1005, y: 470, width: 40, height: 68 } },
    { player: "pac", rect: { x: 1055, y: 470, width: 40, height: 68 } },
  ],
  interference: [
    {
      id: "cana_decoy_boomerang",
      kind: "boomerang",
      target: { x: 880, y: 490 },
      aim: "nearest",
      windup: 0.65,
      cooldown: 1.25,
      speed: 310,
      radius: 16,
    },
    {
      id: "gem_dock_bubble",
      kind: "bubble",
      target: { x: 820, y: 430 },
      maxRange: 520,
      windup: 0.7,
      cooldown: 2.0,
      speed: 165,
      radius: 12,
    },
  ],
};
