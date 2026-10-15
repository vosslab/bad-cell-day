import type { VillainScene } from "./types/villain";

export const TUTORIAL_VILLAIN_SCENES: Readonly<Record<string, VillainScene>> = {
  level_01: {
    gem: {
      position: { x: 335, y: 190 },
      opening: "My DNA wall says no visitors!",
      ending: "You found the friendship loophole.",
    },
    cana: {
      position: { x: 795, y: 155 },
      opening: "I drank the lift's glucose. Burp.",
      ending: "Pac brought a spare snack?!",
    },
    schemes: [
      {
        id: "gem_first_wall",
        villain: "gem",
        target: { kind: "barrier", id: "dna_wall" },
        counterPadIds: ["dna_open", "glucose_restore"],
        action: "dna_wall",
      },
      {
        id: "cana_first_lift",
        villain: "cana",
        target: { kind: "platform", id: "glucose_lift" },
        counterPadIds: ["glucose_restore"],
        action: "energy_drain",
      },
    ],
  },
  level_02: {
    gem: {
      position: { x: 340, y: 170 },
      opening: "New DNA door. Same excellent beard.",
      ending: "Stop holding doors for each other!",
    },
    cana: {
      position: { x: 735, y: 220 },
      opening: "I cut the glucose gate's supply!",
      ending: "RESCUE? Rude button name.",
    },
    schemes: [
      {
        id: "gem_hold_door",
        villain: "gem",
        target: { kind: "barrier", id: "pac_door" },
        counterPadIds: ["hold_door", "rescue"],
        action: "dna_wall",
      },
      {
        id: "cana_rescue_gate",
        villain: "cana",
        target: { kind: "barrier", id: "isp_door" },
        counterPadIds: ["rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_03: {
    gem: {
      position: { x: 650, y: 145 },
      opening: "Your landing is closed for DNA!",
      ending: "They even used the brakes. Ugh.",
    },
    cana: {
      position: { x: 970, y: 190 },
      opening: "No glucose, no gate opening!",
      ending: "Pac has excellent connections.",
    },
    schemes: [
      {
        id: "gem_landing_wall",
        villain: "gem",
        target: { kind: "barrier", id: "pac_landing" },
        counterPadIds: ["stop", "rescue"],
        action: "dna_wall",
      },
      {
        id: "cana_landing_gate",
        villain: "cana",
        target: { kind: "barrier", id: "isp_rescue" },
        counterPadIds: ["rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_04: {
    gem: {
      position: { x: 460, y: 175 },
      opening: "I made this DNA bridge extra wobbly!",
      ending: "Pac's a better builder than me.",
    },
    cana: {
      position: { x: 1010, y: 180 },
      opening: "My glucose gate keeps Pac here!",
      ending: "Isp restored it for her? Gross.",
    },
    schemes: [
      {
        id: "gem_unsteady_bridge",
        villain: "gem",
        target: { kind: "platform", id: "bridge" },
        counterPadIds: ["steady", "rescue"],
        action: "dna_bridge",
      },
      {
        id: "cana_bridge_gate",
        villain: "cana",
        target: { kind: "barrier", id: "pac_rescue" },
        counterPadIds: ["rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_05: {
    gem: {
      position: { x: 700, y: 155 },
      opening: "DNA bridge, now with added wobble!",
      ending: "Stop stabilizing my bad ideas!",
    },
    cana: {
      position: { x: 995, y: 195 },
      opening: "I locked the glucose finish gate!",
      ending: "They rescued each other AGAIN.",
    },
    schemes: [
      {
        id: "gem_shuffle_bridge",
        villain: "gem",
        target: { kind: "platform", id: "bridge" },
        counterPadIds: ["steady", "rescue"],
        action: "dna_bridge",
      },
      {
        id: "cana_shuffle_gate",
        villain: "cana",
        target: { kind: "barrier", id: "pac_finish" },
        counterPadIds: ["rescue"],
        action: "glucose_gate",
      },
    ],
  },
};
