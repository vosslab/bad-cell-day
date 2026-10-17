import type { VillainScene } from "./types/villain";

export const MIDDLE_VILLAIN_SCENES: Readonly<Record<string, VillainScene>> = {
  level_06: {
    gem: {
      position: { x: 350, y: 454 },
      opening: "I put bubbles in the gut. You are welcome!",
      ending: "They found the free exit. Typical.",
    },
    cana: {
      position: { x: 820, y: 190 },
      opening: "Glucose gate closed. Please hold for energy.",
      ending: "Rescue rerouted my whole budget!",
    },
    schemes: [
      {
        id: "alcove_dna",
        villain: "gem",
        target: { kind: "barrier", id: "isp_pass" },
        counterPadIds: ["rescue"],
        action: "dna_wall",
      },
      {
        id: "alcove_glucose",
        villain: "cana",
        target: { kind: "barrier", id: "pac_pass" },
        counterPadIds: ["hold", "rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_07: {
    gem: {
      position: { x: 650, y: 160 },
      opening: "A DNA bridge! Some assembly disintegrates.",
      ending: "Who authorized structural friendship?",
    },
    cana: {
      position: { x: 265, y: 419 },
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
      position: { x: 390, y: 459 },
      opening: "Bubbles for cells. No refunds for nutrients!",
      ending: "That bridge had one job: wobble.",
    },
    cana: {
      position: { x: 390, y: 180 },
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
      position: { x: 400, y: 180 },
      opening: "Heavy marrow cargo. Heavier DNA wall.",
      ending: "Two cells. One deeply bruised ego.",
    },
    cana: {
      position: { x: 760, y: 180 },
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
      position: { x: 770, y: 130 },
      opening: "Top of the marrow! My bridge is all split ends.",
      ending: "Please stop stabilizing my lovely mutations.",
    },
    cana: {
      position: { x: 220, y: 130 },
      opening: "Ride up, brake upstairs. My glucose isn't free!",
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
      position: { x: 720, y: 190 },
      opening: "Marrow makes cells. My DNA wall separates them.",
      ending: "Their latches are talking behind my beard.",
    },
    cana: {
      position: { x: 320, y: 190 },
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
      position: { x: 760, y: 170 },
      opening: "My DNA bridge has commitment issues.",
      ending: "Pac held it together. Again.",
    },
    cana: {
      position: { x: 430, y: 170 },
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
