import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const NEURAL_MISFIRE_SCENE: VillainScene = {
  pushable: true,
  gem: {
    position: { x: 300, y: 560 },
    opening: "I can feel the plot thickening.",
    ending: "I was promised a softer landing.",
  },
  cana: {
    position: { x: 50, y: 560 },
    opening: "Cana do this all day!",
    ending: "My boomerang has trust issues.",
  },
  schemes: [],
};

export const NEURAL_MISFIRE_LEVEL: LevelDefinition = {
  id: "level_42",
  title: "Neural Misfire",
  subtitle: "Pac baits Cana to shove Gem; Isp catches FLOAT to open Pac's exit.",
  hint: "Pac crosses to BAIT CANA. Cana's returning boomerang can shove Gem toward bubble range. Isp climbs to the relay perch, catches FLOAT, and activates OPEN PAC on the upper landing. Other pushes and routes can work too.",
  stage: "brain",
  villain: "both",
  villainScene: NEURAL_MISFIRE_SCENE,
  interference: [
    {
      id: "cana_relay",
      kind: "boomerang",
      aim: "nearest",
      target: { x: 755, y: 542 },
      startsOnPadId: "bait_cana",
      windup: 0.25,
      cooldown: 1.4,
      speed: 420,
      radius: 12,
    },
    {
      id: "gem_float",
      kind: "bubble",
      target: { x: 1300, y: 300 },
      windup: 0.3,
      cooldown: 2.8,
      speed: 360,
      radius: 12,
      maxRange: 470,
    },
  ],
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 1070, y: 524 }, pac: { x: 600, y: 524 } },
  platforms: [
    { id: "floor", kind: "static", rect: { x: 0, y: 560, width: 1100, height: 60 } },
    { id: "gem_stop", kind: "static", rect: { x: 380, y: 480, width: 20, height: 80 } },
    { id: "isp_step_one", kind: "static", rect: { x: 990, y: 500, width: 70, height: 16 } },
    { id: "isp_step_two", kind: "static", rect: { x: 900, y: 450, width: 70, height: 16 } },
    { id: "relay_perch", kind: "static", rect: { x: 820, y: 420, width: 70, height: 16 } },
    { id: "upper_landing", kind: "static", rect: { x: 910, y: 260, width: 170, height: 16 } },
  ],
  pads: [
    {
      id: "bait_cana",
      rect: { x: 740, y: 550, width: 55, height: 10 },
      accepts: "pac",
      activation: "latch",
      label: "BAIT CANA",
      minWeight: 1,
      effects: [],
    },
    {
      id: "open_pac",
      rect: { x: 930, y: 250, width: 45, height: 10 },
      accepts: "isp",
      activation: "latch",
      label: "OPEN PAC",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "pac_low_lock" }],
    },
  ],
  barriers: [
    { id: "pac_low_lock", rect: { x: 900, y: 350, width: 20, height: 210 }, blocks: "pac" },
  ],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1015, y: 200, width: 55, height: 60 } },
    { player: "pac", rect: { x: 980, y: 500, width: 55, height: 60 } },
  ],
};
