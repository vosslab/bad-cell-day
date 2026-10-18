import type { VillainScene } from "./types/villain";

export const MIDDLE_VILLAIN_SCENES: Readonly<Record<string, VillainScene>> = {
  level_06: {
    gem: {
      position: { x: 145, y: 320 },
      opening: "At last, a platform that appreciates my weight!",
      ending: "They used me as ballast. I demand a better title.",
    },
    cana: {
      position: { x: 980, y: 320 },
      opening: "Welcome to the arrival bank. I charge by the bounce.",
      ending: "They landed without paying. Typical.",
    },
    schemes: [],
  },
  level_07: {
    gem: {
      position: { x: 750, y: 410 },
      opening: "A DNA bridge! Some assembly disintegrates.",
      ending: "Who authorized structural friendship?",
    },
    cana: {
      position: { x: 265, y: 410 },
      opening: "My throw comes back. Your patience might not.",
      ending: "They timed that crossing around my throw. Rude.",
    },
    schemes: [
      {
        id: "island_dna",
        villain: "gem",
        target: { kind: "platform", id: "bridge" },
        counterPadIds: ["steady", "rescue"],
        action: "dna_bridge",
      },
      {
        id: "island_gate",
        villain: "cana",
        target: { kind: "barrier", id: "pac_island" },
        counterPadIds: ["stop", "rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_08: {
    gem: {
      position: { x: 500, y: 450 },
      opening: "Bubbles for cells. No refunds for nutrients!",
      ending: "That bridge had one job: wobble.",
    },
    cana: {
      position: { x: 1000, y: 450 },
      opening: "My glucose gate demands a parking fee.",
      ending: "They paid with nutrients. MY nutrients.",
    },
    schemes: [
      {
        id: "crate_dna",
        villain: "gem",
        target: { kind: "platform", id: "bridge" },
        counterPadIds: ["steady", "rescue"],
        action: "dna_bridge",
      },
      {
        id: "parking_gate",
        villain: "cana",
        target: { kind: "barrier", id: "box_door" },
        counterPadIds: ["park", "rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_09: {
    gem: {
      position: { x: 1076, y: 450 },
      opening: "Heavy marrow cargo. Heavier DNA wall.",
      ending: "Two cells. One deeply bruised ego.",
    },
    cana: {
      position: { x: 550, y: 450 },
      opening: "No glucose, no ferry. That's my policy.",
      ending: "Rescue power? I demand a refund.",
    },
    schemes: [
      {
        id: "team_dna",
        villain: "gem",
        target: { kind: "barrier", id: "team_door" },
        counterPadIds: ["team", "rescue"],
        action: "dna_wall",
      },
      {
        id: "heavy_ferry_drain",
        villain: "cana",
        target: { kind: "platform", id: "ferry" },
        counterPadIds: ["stop", "rescue"],
        action: "energy_drain",
      },
      {
        id: "heavy_landing_gate",
        villain: "cana",
        target: { kind: "barrier", id: "pac_landing" },
        counterPadIds: ["stop", "rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_10: {
    gem: {
      position: { x: 680, y: 310 },
      opening: "Top of the marrow! My bridge is all split ends.",
      ending: "Please stop stabilizing my lovely mutations.",
    },
    cana: {
      position: { x: 1060, y: 100 },
      opening: "Top floor! My boomerang has right of way!",
      ending: "They validated their own parking.",
    },
    schemes: [
      {
        id: "upper_dna",
        villain: "gem",
        target: { kind: "platform", id: "bridge" },
        counterPadIds: ["steady", "rescue"],
        action: "dna_bridge",
      },
      {
        id: "lift_glucose_gate",
        villain: "cana",
        target: { kind: "barrier", id: "pac_landing" },
        counterPadIds: ["stop", "rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_11: {
    gem: {
      position: { x: 720, y: 410 },
      opening: "Marrow makes cells. My DNA wall separates them.",
      ending: "Their latches are talking behind my beard.",
    },
    cana: {
      position: { x: 320, y: 480 },
      opening: "Stair runs 5s, pauses 3s. Still solid. Sadly.",
      ending: "Either latch feeds the lift? Who planned this?",
    },
    schemes: [
      {
        id: "split_dna",
        villain: "gem",
        target: { kind: "barrier", id: "blue_lane" },
        counterPadIds: ["orange"],
        action: "dna_wall",
      },
      {
        id: "stair_outage",
        villain: "cana",
        target: { kind: "platform", id: "step_one" },
        counterPadIds: ["blue", "orange"],
        action: "energy_drain",
      },
      {
        id: "lower_glucose_gate",
        villain: "cana",
        target: { kind: "barrier", id: "orange_lane" },
        counterPadIds: ["blue"],
        action: "glucose_gate",
      },
    ],
  },
  level_12: {
    gem: {
      position: { x: 965, y: 420 },
      opening: "My DNA bridge has commitment issues.",
      ending: "Pac held it together. Again.",
    },
    cana: {
      position: { x: 1060, y: 420 },
      opening: "Five seconds on, three off. I call it efficiency.",
      ending: "A nutrient-powered override! My nemesis is lunch.",
    },
    schemes: [
      {
        id: "cargo_dna",
        villain: "gem",
        target: { kind: "platform", id: "bridge" },
        counterPadIds: ["steady", "rescue"],
        action: "dna_bridge",
      },
      {
        id: "cargo_outage",
        villain: "cana",
        target: { kind: "platform", id: "ferry" },
        counterPadIds: ["brake", "rescue"],
        action: "energy_drain",
      },
      {
        id: "cargo_island_gate",
        villain: "cana",
        target: { kind: "barrier", id: "pac_island" },
        counterPadIds: ["brake", "rescue"],
        action: "glucose_gate",
      },
    ],
  },
};
