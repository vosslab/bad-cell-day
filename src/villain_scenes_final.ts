import type { VillainScene } from "./types/villain";

// Perches stay above every traversable surface, target pad, and exit in these rooms.
export const FINAL_VILLAIN_SCENES: Readonly<Record<string, VillainScene>> = {
  level_13: {
    gem: {
      position: { x: 85, y: 155 },
      opening: "My beard keeps slime time!",
      ending: "My beard's watch is slow.",
    },
    cana: {
      position: { x: 1000, y: 155 },
      opening: "Your glucose exit is closed.",
      ending: "A temporary energy setback.",
    },
    schemes: [
      {
        id: "gem_entry",
        villain: "gem",
        action: "dna_wall",
        target: { kind: "barrier", id: "pac_entry" },
        counterPadIds: ["open", "rescue"],
      },
      {
        id: "gem_slime",
        villain: "gem",
        action: "dna_trap",
        target: { kind: "hazard", id: "slime_clock" },
        counterPadIds: [],
      },
      {
        id: "cana_exit",
        villain: "cana",
        action: "glucose_gate",
        target: { kind: "barrier", id: "isp_exit" },
        counterPadIds: ["rescue"],
      },
    ],
  },
  level_14: {
    gem: {
      position: { x: 90, y: 155 },
      opening: "Behold my rolling beard bomb!",
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
      position: { x: 85, y: 150 },
      opening: "My bridge! My factory! My beard!",
      ending: "The beard demands a recount!",
    },
    cana: {
      position: { x: 1000, y: 150 },
      opening: "I supply the factory's power cuts.",
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
      position: { x: 90, y: 145 },
      opening: "DNA wall. Beard-level security.",
      ending: "You found the hairline crack!",
    },
    cana: {
      position: { x: 1000, y: 145 },
      opening: "The lift needs Pac's power pad.",
      ending: "Fine. Enjoy the penthouse.",
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
        counterPadIds: ["open", "rescue"],
      },
    ],
  },
  level_18: {
    gem: {
      position: { x: 90, y: 145 },
      opening: "My DNA bridge needs conditioner.",
      ending: "Your teamwork has volume!",
    },
    cana: {
      position: { x: 1000, y: 145 },
      opening: "Separate desks. Shared power bill.",
      ending: "That was an unauthorized meeting.",
    },
    schemes: [
      {
        id: "gem_lower",
        villain: "gem",
        action: "dna_bridge",
        target: { kind: "platform", id: "lower_route" },
        counterPadIds: ["steady", "rescue"],
      },
      {
        id: "cana_shelf",
        villain: "cana",
        action: "energy_drain",
        target: { kind: "platform", id: "shifting_shelf" },
        counterPadIds: ["steady", "rescue"],
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
      position: { x: 1000, y: 145 },
      opening: "Power cuts are a management skill.",
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
      position: { x: 90, y: 130 },
      opening: "DNA bridge! Final beard protocol!",
      ending: "The beard has left the building.",
    },
    cana: {
      position: { x: 1000, y: 130 },
      opening: "My power cuts finish this duet.",
      ending: "Both halves? That's just rude.",
    },
    schemes: [
      {
        id: "gem_core_bridge",
        villain: "gem",
        action: "dna_bridge",
        target: { kind: "platform", id: "core_bridge" },
        counterPadIds: ["steady", "rescue"],
      },
      {
        id: "gem_core_wall",
        villain: "gem",
        action: "dna_wall",
        target: { kind: "barrier", id: "isp_bridge_gate" },
        counterPadIds: ["steady", "rescue"],
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
        counterPadIds: ["rescue"],
      },
    ],
  },
};
