import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const GUT_FEELING_SCENE: VillainScene = {
  gem: {
    position: { x: 236, y: 410 },
    opening: "Keep your feet off my head!",
    ending: "Great. Forehead footprints.",
  },
  cana: {
    position: { x: 240, y: 550 },
    opening: "Careful, the return path is busy.",
    ending: "I was guarding that exit!",
  },
  schemes: [],
};

export const GUT_FEELING_LEVEL: LevelDefinition = {
  id: "level_45",
  title: "Gut Feeling",
  subtitle: "Make a step, share the lift, split the route.",
  hint: "Isp nudges Gem down to the dock. Pac climbs via Gem to HOLD LIFT. Isp boards the stationary lift first; then Pac holds HOLD LIFT to carry him up. If the lift has already left, Pac stays on HOLD LIFT until it returns while Isp waits on the dock, then boards. Isp rides to blue; Pac returns along the lower path, past Cana, to orange.",
  stage: "intestine",
  villain: "both",
  villainScene: GUT_FEELING_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 75, y: 394 }, pac: { x: 550, y: 494 } },
  platforms: [
    { id: "high_fold", kind: "static", rect: { x: 0, y: 430, width: 300, height: 18 } },
    { id: "shared_dock", kind: "static", rect: { x: 300, y: 530, width: 480, height: 18 } },
    { id: "pac_middle_tissue", kind: "static", rect: { x: 500, y: 410, width: 175, height: 18 } },
    {
      id: "powered_lift",
      kind: "moving",
      rect: { x: 760, y: 494, width: 110, height: 18 },
      motion: { offset: { x: 0, y: -184 }, period: 7 },
      requiresPower: true,
    },
    { id: "upper_right_tissue", kind: "static", rect: { x: 820, y: 310, width: 280, height: 18 } },
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
  ],
  pads: [
    {
      id: "pac_holds_lift",
      rect: { x: 630, y: 402, width: 42, height: 8 },
      accepts: "pac",
      activation: "hold",
      label: "HOLD LIFT",
      minWeight: 1,
      effects: [{ kind: "power", platformId: "powered_lift" }],
    },
  ],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1000, y: 250, width: 100, height: 60 } },
    { player: "pac", rect: { x: 20, y: 490, width: 65, height: 60 } },
  ],
  interference: [
    {
      id: "cana_dock_boomerang",
      kind: "boomerang",
      target: { x: 700, y: 410 },
      windup: 0.5,
      cooldown: 0.6,
      speed: 260,
      radius: 11,
      startsOnPadId: "pac_holds_lift",
    },
    {
      id: "gem_pad_bubble",
      kind: "bubble",
      target: { x: 735, y: 475 },
      maxRange: 600,
      windup: 0.5,
      cooldown: 0.6,
      speed: 190,
      radius: 11,
      startsOnPadId: "pac_holds_lift",
    },
  ],
};
