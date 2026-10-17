import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const LUNG_RECOIL_SCENE: VillainScene = {
  gem: {
    position: { x: 170, y: 190 },
    opening: "Careful. That tissue has a lot of opinions.",
    ending: "They bounced all the way home!",
  },
  cana: {
    position: { x: 300, y: 280 },
    opening: "Hold still! My boomerang is taking the scenic route!",
    ending: "It came back. They did too.",
  },
  schemes: [],
};

export const LUNG_RECOIL_LEVEL: LevelDefinition = {
  id: "level_37",
  title: "Hold Your Breath",
  subtitle: "One cell steps off. One cell springs away.",
  hint: "Stand together on TISSUE. One cell steps off to send the other flying. Aim for your own upper landing and latch RETURN. Miss? Reunite below and try again; the first cell can help launch the second.",
  stage: "lungs",
  villain: "cana",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 480, y: 444 }, pac: { x: 630, y: 444 } },
  platforms: [
    { id: "fallback_floor", kind: "static", rect: { x: 0, y: 560, width: 1100, height: 60 } },
    { id: "living_tissue", kind: "recoil", rect: { x: 400, y: 480, width: 300, height: 80 } },
    { id: "upper_left", kind: "static", rect: { x: 150, y: 310, width: 270, height: 18 } },
    { id: "upper_right", kind: "static", rect: { x: 740, y: 310, width: 270, height: 18 } },
    { id: "left_return_walkway", kind: "static", rect: { x: 120, y: 445, width: 240, height: 16 } },
    { id: "left_return_high", kind: "static", rect: { x: 50, y: 395, width: 100, height: 16 } },
    { id: "right_return_walkway", kind: "static", rect: { x: 920, y: 445, width: 80, height: 16 } },
    { id: "right_reboard_step", kind: "static", rect: { x: 800, y: 500, width: 80, height: 16 } },
    { id: "right_return_high", kind: "static", rect: { x: 1000, y: 395, width: 100, height: 16 } },
  ],
  pads: [
    {
      id: "isp_upper_return",
      rect: { x: 155, y: -18, width: 46, height: 18 },
      platformId: "upper_left",
      accepts: "isp",
      activation: "latch",
      label: "ISP RETURN",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "isp_upper_door" }],
    },
    {
      id: "pac_upper_return",
      rect: { x: 100, y: -18, width: 46, height: 18 },
      platformId: "upper_right",
      accepts: "pac",
      activation: "latch",
      label: "PAC RETURN",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "pac_upper_door" }],
    },
  ],
  barriers: [
    { id: "isp_upper_door", rect: { x: 250, y: 260, width: 18, height: 300 }, blocks: "both" },
    { id: "pac_upper_door", rect: { x: 900, y: 260, width: 18, height: 300 }, blocks: "both" },
  ],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 160, y: 250, width: 44, height: 60 } },
    { player: "pac", rect: { x: 960, y: 250, width: 44, height: 60 } },
  ],
  villainScene: LUNG_RECOIL_SCENE,
  interference: [
    {
      id: "cana_lung_recoil_boomerang",
      kind: "boomerang",
      target: { x: 720, y: 510 },
      cooldown: 0.55,
      windup: 0.75,
      speed: 360,
      radius: 15,
    },
  ],
};
