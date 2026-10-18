import type { VillainScene } from "./types/villain";

// Perches stay above every traversable surface, target pad, and exit in these rooms.
export const FINAL_VILLAIN_SCENES: Readonly<Record<string, VillainScene>> = {
  level_13: {
    gem: {
      position: { x: 300, y: 500 },
      opening: "My liver bubbles are strictly for trouble!",
      ending: "You used my bubbles as an elevator?",
    },
    cana: {
      position: { x: 1000, y: 155 },
      opening: "I stole the liver's glucose for lunch.",
      ending: "You took the scenic route to glucose.",
    },
    schemes: [
      {
        id: "gem_stairs",
        villain: "gem",
        action: "dna_wall",
        target: { kind: "barrier", id: "isp_stairs" },
        counterPadIds: ["rescue"],
      },
      {
        id: "cana_entry",
        villain: "cana",
        action: "glucose_gate",
        target: { kind: "barrier", id: "pac_entry" },
        counterPadIds: ["rescue"],
      },
    ],
  },
  level_14: {
    gem: {
      position: { x: 90, y: 155 },
      opening: "This liver needs my rolling beard bomb!",
      ending: "It missed by a whisker.",
    },
    cana: {
      position: { x: 1000, y: 155 },
      opening: "Seven seconds. Then a power nap.",
      ending: "You restored my nap budget?",
    },
    schemes: [
      {
        id: "gem_patrol",
        villain: "gem",
        action: "dna_wall",
        target: { kind: "barrier", id: "isp_patrol" },
        counterPadIds: ["open", "rescue"],
      },
      // The eight-second bomb patrol is avoided from the two raised refuges.
      {
        id: "gem_bomb",
        villain: "gem",
        action: "dna_trap",
        target: { kind: "hazard", id: "rolling_bomb" },
        counterPadIds: [],
      },
      {
        id: "cana_refuge",
        villain: "cana",
        action: "energy_drain",
        target: { kind: "platform", id: "refuge_two" },
        counterPadIds: ["rescue"],
      },
      {
        id: "cana_exit",
        villain: "cana",
        action: "glucose_gate",
        target: { kind: "barrier", id: "pac_exit" },
        counterPadIds: ["rescue"],
      },
    ],
  },
  level_15: {
    gem: {
      position: { x: 90, y: 155 },
      opening: "My DNA bridge has split ends!",
      ending: "Signed for by my beard. Oops.",
    },
    cana: {
      position: { x: 1000, y: 155 },
      opening: "Glucose delivery? Weigh it first.",
      ending: "That parcel was overqualified.",
    },
    schemes: [
      {
        id: "gem_packing",
        villain: "gem",
        action: "dna_bridge",
        target: { kind: "platform", id: "packing_bridge" },
        counterPadIds: ["steady", "rescue"],
      },
      {
        id: "cana_loading",
        villain: "cana",
        action: "glucose_gate",
        target: { kind: "barrier", id: "loading_gate" },
        counterPadIds: ["weigh", "rescue"],
      },
    ],
  },
  level_16: {
    gem: {
      position: { x: 810, y: 450 },
      opening: "My liver! My bridge! My magnificent beard!",
      ending: "The beard demands a recount!",
    },
    cana: {
      position: { x: 1000, y: 150 },
      opening: "I keep this liver on a strict no-glucose diet.",
      ending: "Two targets. How inconvenient.",
    },
    schemes: [
      {
        id: "gem_factory",
        villain: "gem",
        action: "dna_bridge",
        target: { kind: "platform", id: "factory_bridge" },
        counterPadIds: ["steady", "rescue"],
      },
      {
        id: "cana_press",
        villain: "cana",
        action: "energy_drain",
        target: { kind: "platform", id: "press_ferry" },
        counterPadIds: ["stop", "steady", "rescue"],
      },
    ],
  },
  level_17: {
    gem: {
      position: { x: 250, y: 550 },
      opening: "My bubble is going UP in the world!",
      ending: "You found the hairline crack!",
    },
    cana: {
      position: { x: 1000, y: 145 },
      opening: "My lift stays off until RESCUE.",
      ending: "Fine. Enjoy the top of the brain.",
    },
    schemes: [
      {
        id: "gem_balcony",
        villain: "gem",
        action: "dna_wall",
        target: { kind: "barrier", id: "isp_balcony" },
        counterPadIds: ["open", "rescue"],
      },
      {
        id: "cana_lift",
        villain: "cana",
        action: "energy_drain",
        target: { kind: "platform", id: "reversed_lift" },
        counterPadIds: ["rescue"],
      },
    ],
  },
  level_18: {
    gem: {
      position: { x: 90, y: 145 },
      opening: "My door opens only when the shelf stops. Very efficient!",
      ending: "A moving thought. Then a parked thought. Annoying.",
    },
    cana: {
      position: { x: 1000, y: 145 },
      opening: "I put the parking brake in the other brain fold.",
      ending: "You actually talked to the other brain fold?",
    },
    schemes: [
      {
        id: "gem_upper",
        villain: "gem",
        action: "dna_wall",
        target: { kind: "barrier", id: "isp_upper" },
        counterPadIds: ["steady", "rescue"],
      },
      {
        id: "cana_stairs",
        villain: "cana",
        action: "glucose_gate",
        target: { kind: "barrier", id: "pac_stairs" },
        counterPadIds: ["rescue"],
      },
    ],
  },
  level_19: {
    gem: {
      position: { x: 90, y: 145 },
      opening: "My high bridge has beard support!",
      ending: "Structural whiskers defeated!",
    },
    cana: {
      position: { x: 480, y: 438 },
      opening: "My boomerang scrambles brain signals!",
      ending: "I preferred separate targets.",
    },
    schemes: [
      {
        id: "gem_high",
        villain: "gem",
        action: "dna_bridge",
        target: { kind: "platform", id: "high_bridge" },
        counterPadIds: ["steady", "rescue"],
      },
      {
        id: "cana_hall",
        villain: "cana",
        action: "energy_drain",
        target: { kind: "platform", id: "sliding_hall" },
        counterPadIds: ["stop", "steady", "rescue"],
      },
    ],
  },
  level_20: {
    gem: {
      position: { x: 1040, y: 310 },
      opening: "Blue TARGET is right in my firing lane!",
      ending: "The beard is leaving this tumor!",
    },
    cana: {
      position: { x: 1010, y: 450 },
      opening: "STEADY interrupts my boomerang once; then it returns!",
      ending: "Both halves? That's just rude.",
    },
    schemes: [
      {
        id: "gem_core_bridge",
        villain: "gem",
        action: "dna_bridge",
        target: { kind: "platform", id: "core_bridge" },
        counterPadIds: ["steady", "blue_target"],
      },
      {
        id: "gem_core_bridge_right",
        villain: "gem",
        action: "dna_bridge",
        target: { kind: "platform", id: "core_bridge_right" },
        counterPadIds: ["steady", "blue_target"],
      },
      {
        id: "gem_core_wall",
        villain: "gem",
        action: "dna_wall",
        target: { kind: "barrier", id: "isp_bridge_gate" },
        counterPadIds: ["steady", "rescue", "blue_target"],
      },
      {
        id: "cana_core_ferry",
        villain: "cana",
        action: "energy_drain",
        target: { kind: "platform", id: "core_ferry" },
        counterPadIds: ["stop", "steady", "rescue"],
      },
      {
        id: "cana_core_gate",
        villain: "cana",
        action: "glucose_gate",
        target: { kind: "barrier", id: "pac_finish_gate" },
        counterPadIds: ["blue_target"],
      },
    ],
  },
};
