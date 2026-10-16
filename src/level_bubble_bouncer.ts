import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const BUBBLE_BOUNCER_SCENE: VillainScene = {
  gem: {
    position: { x: 920, y: 560 },
    opening: "Stop catching those! They are individually addressed!",
    ending: "You kept the useful one?!",
  },
  cana: {
    position: { x: 770, y: 480 },
    opening: "Both doors. One holder.",
    ending: "You let that one through?",
  },
  schemes: [
    {
      id: "gem_entry",
      villain: "gem",
      action: "dna_wall",
      target: { kind: "barrier", id: "entry" },
      counterPadIds: ["hold"],
    },
    {
      id: "cana_far",
      villain: "cana",
      action: "glucose_gate",
      target: { kind: "barrier", id: "far" },
      counterPadIds: ["hold"],
    },
  ],
};

export const BUBBLE_BOUNCER_LEVEL: LevelDefinition = {
  id: "level_26",
  title: "Bubble Bouncer",
  subtitle: "Liver teamwork. Catch it now. Let it through later.",
  hint: "Isp holds HOLD while Pac catches bubbles on the way right. Pac jumps onto the shelf near the last gate. Once Pac is above the beam, let a bubble give Isp FLOAT, then steer right onto the upper ledge.",
  stage: "liver",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 350, y: 514 }, pac: { x: 570, y: 514 } },
  platforms: [
    { id: "floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "pac_shelf", kind: "static", rect: { x: 820, y: 500, width: 130, height: 20 } },
    { id: "isp_route", kind: "static", rect: { x: 550, y: 350, width: 400, height: 20 } },
  ],
  pads: [
    {
      id: "hold",
      rect: { x: 450, y: 542, width: 60, height: 8 },
      accepts: "isp",
      activation: "hold",
      label: "HOLD",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "entry" },
        { kind: "door", barrierId: "far" },
      ],
    },
  ],
  barriers: [
    { id: "entry", blocks: "pac", rect: { x: 610, y: 0, width: 20, height: 550 } },
    { id: "far", blocks: "pac", rect: { x: 790, y: 0, width: 20, height: 550 } },
  ],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 890, y: 290, width: 42, height: 60 } },
    { player: "pac", rect: { x: 890, y: 440, width: 42, height: 60 } },
  ],
  interference: [
    {
      id: "bouncer",
      kind: "bubble",
      target: { x: 450, y: 535 },
      windup: 0.75,
      cooldown: 0.15,
      speed: 260,
      radius: 12,
      maxRange: 450,
      startsOnPadId: "hold",
    },
  ],
};
