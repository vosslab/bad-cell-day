import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const YOUR_TURN_TO_CARRY_SCENE: VillainScene = {
  gem: {
    position: { x: 80, y: 380 },
    opening: "I was going to offer a ride, but you already found one.",
    ending: "They have a two-cell transit system now?",
  },
  cana: {
    position: { x: 1000, y: 430 },
    opening: "A ride for each of you? I charge by the cell!",
    ending: "Fine. Your carpool wins this round.",
  },
  schemes: [],
};

export const YOUR_TURN_TO_CARRY_LEVEL: LevelDefinition = {
  id: "level_30",
  title: "Your Turn to Carry",
  subtitle: "One dry island. Two favors returned.",
  hint: "The first fluid kills Pac; the second kills Isp. Jump onto the immune partner and let them walk you across, then swap on the dry island. Riders can jump or walk off. Cana's boomerang returns across the last shore.",
  stage: "liver",
  villain: "cana",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 150, y: 514 }, pac: { x: 55, y: 514 } },
  platforms: [{ id: "floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } }],
  pads: [],
  barriers: [],
  hazards: [
    {
      id: "pac_fluid",
      kind: "slime",
      harms: "pac",
      rect: { x: 250, y: 525, width: 260, height: 25 },
    },
    {
      id: "isp_fluid",
      kind: "slime",
      harms: "isp",
      rect: { x: 650, y: 525, width: 260, height: 25 },
    },
  ],
  crates: [],
  collectibles: [],
  exits: [
    { player: "pac", rect: { x: 960, y: 510, width: 60, height: 40 } },
    { player: "isp", rect: { x: 1020, y: 500, width: 60, height: 50 } },
  ],
  interference: [
    {
      id: "cana_shore_boomerang",
      kind: "boomerang",
      target: { x: 940, y: 535 },
      cooldown: 0.65,
      windup: 0.55,
      speed: 400,
      radius: 12,
    },
  ],
};
