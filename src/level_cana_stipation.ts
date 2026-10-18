import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const CANA_STIPATION_SCENE: VillainScene = {
  gem: {
    position: { x: 300, y: 354 },
    opening: "I brought a map!",
    ending: "That was not my map.",
  },
  cana: {
    position: { x: 400, y: 470 },
    opening: "This carriage is too small for my head.",
    ending: "I can walk the rest of the way.",
  },
  schemes: [],
};

export const CANA_STIPATION_LEVEL: LevelDefinition = {
  id: "level_53",
  title: "Cana-stipation",
  subtitle: "Pac: clear Cana off the carrier. Isp: power the ride!",
  hint: "Isp shoves Gem away from POWER, then holds it for the carrier. Pac pushes Cana left; Isp can step off POWER to pause the ride during the shove. Pac latches LIFT at the far dock so Isp can jump onto the lift and reach the high exit. Missed the carrier? Use the low folds to try again.",
  stage: "intestine",
  villain: "both",
  villainScene: CANA_STIPATION_SCENE,
  world: { width: 1100, height: 680 },
  spawns: { isp: { x: 100, y: 354 }, pac: { x: 464, y: 434 } },
  platforms: [
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 600, width: 1100, height: 80 } },
    { id: "recovery_fold", kind: "static", rect: { x: 350, y: 544, width: 150, height: 14 } },
    { id: "right_recovery_fold", kind: "static", rect: { x: 540, y: 530, width: 140, height: 14 } },
    { id: "start_dock", kind: "static", rect: { x: 0, y: 470, width: 300, height: 18 } },
    {
      id: "carrier",
      kind: "moving",
      requiresPower: true,
      rect: { x: 300, y: 470, width: 220, height: 18 },
      motion: { offset: { x: 580, y: 0 }, period: 18 },
    },
    { id: "upper_route", kind: "static", rect: { x: 0, y: 390, width: 840, height: 18 } },
    { id: "tunnel_roof", kind: "static", rect: { x: 480, y: 390, width: 360, height: 36 } },
    { id: "far_dock", kind: "static", rect: { x: 840, y: 470, width: 30, height: 18 } },
    { id: "high_bank", kind: "static", rect: { x: 980, y: 250, width: 120, height: 18 } },
    {
      id: "final_lift",
      kind: "moving",
      requiresPower: true,
      rect: { x: 840, y: 390, width: 90, height: 18 },
      motion: { offset: { x: 0, y: -140 }, period: 14 },
    },
  ],
  pads: [
    {
      id: "upper_power",
      rect: { x: 200, y: 382, width: 54, height: 8 },
      accepts: "isp",
      activation: "hold",
      label: "POWER",
      minWeight: 1,
      effects: [{ kind: "power", platformId: "carrier" }],
    },
    {
      id: "far_latch",
      rect: { x: 843, y: 462, width: 40, height: 8 },
      accepts: "pac",
      activation: "latch",
      label: "LIFT",
      minWeight: 1,
      effects: [{ kind: "power", platformId: "final_lift" }],
    },
  ],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1010, y: 190, width: 60, height: 60 } },
    { player: "pac", rect: { x: 842, y: 410, width: 45, height: 60 } },
  ],
  interference: [
    {
      id: "gem_short_bubble",
      kind: "bubble",
      target: { x: 230, y: 372 },
      maxRange: 170,
      windup: 1,
      cooldown: 2.5,
      speed: 160,
      radius: 12,
    },
    {
      id: "cana_boomerang",
      kind: "boomerang",
      target: { x: 700, y: 455 },
      windup: 0.8,
      cooldown: 1.4,
      speed: 210,
      radius: 12,
    },
  ],
};
