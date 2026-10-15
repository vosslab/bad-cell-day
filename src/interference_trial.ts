import type { LevelDefinition } from "./types/level";

// A separate practice room: campaign definitions and saved progress never reference it.
export const TRIAL_LEVEL: LevelDefinition = {
  id: "troublemaker_trial",
  title: "Troublemaker Trial",
  subtitle: "Borrow a bubble. Dodge a boomerang.",
  hint: "Pac holds ENTRY. Isp waits in the bubble bay, rises above the ledge, then steers right to the latch. Then escape together.",
  stage: "laboratory",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 90, y: 514 }, pac: { x: 40, y: 514 } },
  platforms: [
    { id: "floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "latch_ledge", kind: "static", rect: { x: 360, y: 380, width: 200, height: 20 } },
  ],
  pads: [
    {
      id: "entry",
      rect: { x: 125, y: 544, width: 30, height: 6 },
      accepts: "pac",
      activation: "hold",
      label: "ENTRY",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "entry_gate" }],
    },
    {
      id: "rescue",
      rect: { x: 420, y: 374, width: 45, height: 6 },
      accepts: "isp",
      activation: "latch",
      label: "RESCUE",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "entry_gate" },
        { kind: "door", barrierId: "final_door" },
      ],
    },
  ],
  barriers: [
    { id: "entry_gate", rect: { x: 205, y: 200, width: 16, height: 350 }, blocks: "both" },
    { id: "final_door", rect: { x: 600, y: 200, width: 12, height: 350 }, blocks: "both" },
  ],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1054, y: 490, width: 40, height: 60 } },
    { player: "pac", rect: { x: 1008, y: 490, width: 40, height: 60 } },
  ],
  villainScene: {
    gem: {
      position: { x: 205, y: 558 },
      opening: "Bubble trouble, coming right up!",
      ending: "You borrowed my best bubble!",
    },
    cana: {
      position: { x: 615, y: 558 },
      opening: "Catch! Actually, please do not.",
      ending: "It was supposed to come back to ME!",
    },
    schemes: [],
  },
  interference: [
    {
      id: "gem_bubble",
      kind: "bubble",
      target: { x: 350, y: 529.2 },
      windup: 1,
      cooldown: 2,
      speed: 85,
      radius: 12,
    },
    {
      id: "cana_boomerang",
      kind: "boomerang",
      target: { x: 990, y: 529.2 },
      windup: 1.2,
      cooldown: 2.2,
      speed: 150,
      radius: 13,
    },
  ],
};
