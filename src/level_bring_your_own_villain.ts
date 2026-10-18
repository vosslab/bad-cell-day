import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const BRING_YOUR_OWN_VILLAIN_SCENE: VillainScene = {
  gem: {
    position: { x: 200, y: 480 },
    opening: "Catch this ride!",
    ending: "You brought the wrong passenger.",
  },
  cana: {
    position: { x: 750, y: 550 },
    opening: "I was not invited.",
    ending: "I will find my own room.",
  },
  schemes: [],
};

export const BRING_YOUR_OWN_VILLAIN_LEVEL: LevelDefinition = {
  id: "level_32",
  title: "Bring Your Own Villain",
  subtitle: "Pac rides Gem's carrier while Isp takes the upper route.",
  hint: "Pac boards POWER to carry Gem into bubble range. Isp catches a bubble, floats to the upper latch, and opens Pac's lower door.",
  stage: "liver",
  villain: "gem",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 451, y: 514 }, pac: { x: 40, y: 514 } },
  platforms: [
    {
      id: "safe_floor",
      kind: "static",
      rect: { x: 0, y: 550, width: 1100, height: 70 },
    },
    {
      id: "gem_ferry",
      kind: "moving",
      requiresPower: true,
      rect: { x: 80, y: 480, width: 160, height: 18 },
      motion: { offset: { x: 200, y: 0 }, period: 8 },
    },
    {
      id: "isp_upper_route",
      kind: "static",
      rect: { x: 530, y: 400, width: 500, height: 18 },
    },
  ],
  pads: [
    {
      id: "power",
      platformId: "gem_ferry",
      rect: { x: 10, y: -8, width: 50, height: 8 },
      accepts: "pac",
      activation: "hold",
      label: "POWER",
      minWeight: 1,
      effects: [{ kind: "power", platformId: "gem_ferry" }],
    },
    {
      id: "upper_latch",
      rect: { x: 600, y: 392, width: 100, height: 8 },
      accepts: "isp",
      activation: "latch",
      label: "OPEN PAC'S DOOR",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "pac_lower_door" }],
    },
  ],
  barriers: [
    {
      id: "isp_membrane",
      blocks: "isp",
      rect: { x: 400, y: 0, width: 20, height: 550 },
    },
    {
      id: "pac_lower_door",
      blocks: "pac",
      rect: { x: 900, y: 0, width: 24, height: 550 },
    },
  ],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1015, y: 340, width: 50, height: 60 } },
    { player: "pac", rect: { x: 1015, y: 490, width: 50, height: 60 } },
  ],
  interference: [
    {
      id: "gem_ferry_bubble",
      kind: "bubble",
      target: { x: 465, y: 532 },
      maxRange: 150,
      windup: 0.9,
      cooldown: 1.6,
      speed: 170,
      radius: 12,
    },
  ],
};
