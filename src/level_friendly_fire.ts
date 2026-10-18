import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const FRIENDLY_FIRE_SCENE: VillainScene = {
  gem: {
    position: { x: 425, y: 280 },
    opening: "I have a bubble with your name on it.",
    ending: "Was that my return address?",
  },
  cana: {
    position: { x: 100, y: 420 },
    opening: "Delivery! This one comes back.",
    ending: "I meant to do that.",
  },
  schemes: [],
};

export const FRIENDLY_FIRE_LEVEL: LevelDefinition = {
  id: "level_41",
  title: "Cana's Friendly Fire",
  subtitle: "One return address. Two ways to get there.",
  hint: "Pac steps on START BUBBLES; Isp rides FLOAT to OPEN PAC'S LOWER ROUTE. Then Pac can take the lower exit. Optional: position Gem for Cana's returning boomerang to send him into the acid.",
  stage: "intestine",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 250, y: 268 }, pac: { x: 522, y: 244 } },
  platforms: [
    { id: "cana_perch", kind: "static", rect: { x: 50, y: 420, width: 110, height: 18 } },
    { id: "pac_start_tissue", kind: "static", rect: { x: 400, y: 280, width: 180, height: 18 } },
    { id: "crossfire_step", kind: "static", rect: { x: 360, y: 380, width: 40, height: 18 } },
    { id: "isp_float_step", kind: "static", rect: { x: 220, y: 304, width: 70, height: 18 } },
    { id: "upper_tissue", kind: "static", rect: { x: 320, y: 200, width: 720, height: 18 } },
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
  ],
  pads: [
    {
      id: "pac_starts_bubbles",
      rect: { x: 450, y: 272, width: 70, height: 8 },
      accepts: "pac",
      activation: "latch",
      label: "START BUBBLES",
      minWeight: 1,
      effects: [],
    },
    {
      id: "isp_upper_latch",
      rect: { x: 350, y: 192, width: 70, height: 8 },
      accepts: "isp",
      activation: "latch",
      label: "OPEN PAC'S LOWER ROUTE",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "pac_lower_gate" }],
    },
  ],
  barriers: [
    { id: "pac_lower_gate", blocks: "pac", rect: { x: 850, y: 0, width: 20, height: 550 } },
  ],
  hazards: [
    {
      id: "acid_below_crossfire_lip",
      kind: "slime",
      harms: "both",
      rect: { x: 160, y: 385, width: 200, height: 125 },
    },
  ],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1010, y: 140, width: 50, height: 60 } },
    { player: "pac", rect: { x: 1010, y: 490, width: 50, height: 60 } },
  ],
  interference: [
    {
      id: "cana_crossfire_boomerang",
      kind: "boomerang",
      target: { x: 500, y: 388 },
      windup: 0.25,
      cooldown: 0.25,
      speed: 400,
      radius: 12,
    },
    {
      id: "gem_route_bubble",
      kind: "bubble",
      target: { x: 265, y: 286 },
      maxRange: 280,
      windup: 0.25,
      cooldown: 0.2,
      speed: 170,
      radius: 12,
      startsOnPadId: "pac_starts_bubbles",
    },
  ],
};
