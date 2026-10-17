import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const GROUNDED_CARRY_SCENE: VillainScene = {
  gem: {
    position: { x: 340, y: 188 },
    opening: "That brain bridge is held together by one tiny thought!",
    ending: "You kept that thought alive together?",
  },
  cana: {
    position: { x: 1000, y: 455 },
    opening: "Carry a passenger? I can still hit the driver!",
    ending: "My boomerang made the whole trip. Rude.",
  },
  schemes: [
    {
      id: "gem_dna_span",
      villain: "gem",
      target: { kind: "platform", id: "carry_span" },
      counterPadIds: ["high_tissue_contact"],
      action: "dna_bridge",
    },
  ],
};

export const GROUNDED_CARRY_LEVEL: LevelDefinition = {
  id: "level_39",
  title: "Boneheads",
  subtitle: "One carries. One keeps the way open.",
  hint: "Pac carries Isp through TISSUE HOLD to steady the span. Isp jumps onto the brain shelf; Pac crosses the short gap below. Cana's boomerang starts at TISSUE HOLD and keeps returning. Miss the lower jump? Restart and try again.",
  stage: "brain",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 70, y: 464 }, pac: { x: 120, y: 464 } },
  platforms: [
    { id: "left_brain_bank", kind: "static", rect: { x: 0, y: 500, width: 280, height: 120 } },
    {
      id: "carry_span",
      kind: "unstable",
      rect: { x: 280, y: 500, width: 320, height: 18 },
      collapseAfter: 0.9,
      resetAfter: 2.5,
    },
    { id: "right_brain_bank", kind: "static", rect: { x: 600, y: 500, width: 340, height: 120 } },
    { id: "far_brain_bank", kind: "static", rect: { x: 990, y: 500, width: 110, height: 120 } },
    { id: "upper_brain_shelf", kind: "static", rect: { x: 600, y: 390, width: 300, height: 18 } },
  ],
  pads: [
    {
      id: "high_tissue_contact",
      rect: { x: 280, y: 428, width: 320, height: 8 },
      accepts: "isp",
      activation: "hold",
      label: "TISSUE HOLD",
      minWeight: 1,
      effects: [{ kind: "stabilize", platformId: "carry_span" }],
    },
  ],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 825, y: 330, width: 60, height: 60 } },
    { player: "pac", rect: { x: 1020, y: 440, width: 60, height: 60 } },
  ],
  interference: [
    {
      id: "cana_brain_boomerang",
      kind: "boomerang",
      target: { x: 700, y: 480 },
      cooldown: 0.8,
      windup: 0.65,
      speed: 380,
      radius: 13,
      startsOnPadId: "high_tissue_contact",
    },
  ],
};
