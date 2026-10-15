import { create_player } from "./characters";
import { WORLD_HEIGHT, WORLD_WIDTH } from "./constants";
import type { LevelDefinition } from "./types/level";
import type { GameState } from "./types/simulation";

export const DEMO_LEVEL: LevelDefinition = {
  id: "garden_demo",
  title: "Garden rendezvous",
  subtitle: "Two little heroes. One big escape.",
  hint: "Isp and Pac each have an exit. Help them reach it together.",
  stage: "garden",
  world: { width: WORLD_WIDTH, height: WORLD_HEIGHT },
  spawns: { isp: { x: 90, y: 514 }, pac: { x: 145, y: 514 } },
  platforms: [
    { id: "floor", kind: "static", rect: { x: 0, y: 550, width: WORLD_WIDTH, height: 70 } },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 950, y: 490, width: 44, height: 60 } },
    { player: "pac", rect: { x: 1010, y: 490, width: 44, height: 60 } },
  ],
};

export function create_game_state(level: LevelDefinition): GameState {
  const state: GameState = {
    level,
    status: "playing",
    time: 0,
    players: {
      isp: create_player("isp", level.spawns.isp),
      pac: create_player("pac", level.spawns.pac),
    },
    platforms: level.platforms.map((platform) => ({
      id: platform.id,
      rect: { ...platform.rect },
      previousRect: { ...platform.rect },
      displacement: { x: 0, y: 0 },
      active: true,
      motorOn: false,
      stabilized: false,
      occupiedTime: 0,
      respawnTime: 0,
      motionTime: 0,
    })),
    pads: level.pads.map((pad) => {
      const platform = level.platforms.find((candidate) => candidate.id === pad.platformId);
      return {
        id: pad.id,
        rect: {
          ...pad.rect,
          x: pad.rect.x + (platform?.rect.x ?? 0),
          y: pad.rect.y + (platform?.rect.y ?? 0),
        },
        occupiedBy: [],
        weight: 0,
        active: false,
        latched: false,
      };
    }),
    barriers: level.barriers.map((barrier) => ({ id: barrier.id, open: false })),
    hazards: level.hazards.map((hazard) => ({
      id: hazard.id,
      rect: { ...hazard.rect },
      active: true,
    })),
    crates: level.crates.map((crate) => ({
      id: crate.id,
      rect: { ...crate.rect },
      velocity: { x: 0, y: 0 },
      grounded: false,
      supportId: undefined,
    })),
    collectibles: level.collectibles.map((collectible) => ({
      id: collectible.id,
      collected: false,
    })),
    bossDefeated: false,
    deathReason: undefined,
  };
  return state;
}
