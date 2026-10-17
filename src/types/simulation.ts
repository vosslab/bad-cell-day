import type { Rect, Vec2 } from "./geometry";
import type { InterferenceState } from "./interference";
import type { LevelDefinition } from "./level";
import type { GameInput, PlayerId, PlayerState } from "./player";

export type GameStatus = "playing" | "dead" | "complete";

export type VillainBodyState = {
  villain: "gem" | "cana";
  rect: Rect;
  velocity: Vec2;
  respawnRemaining: number;
};

export type CounterweightState = {
  id: string;
  position: number;
  loads: [number, number];
  riders: [boolean, boolean];
  blocked: boolean;
};

export type PlatformState = {
  id: string;
  rect: Rect;
  previousRect: Rect;
  displacement: Vec2;
  active: boolean;
  motorOn: boolean;
  powered: boolean;
  stabilized: boolean;
  occupiedTime: number;
  respawnTime: number;
  motionTime: number;
};

export type PadState = {
  id: string;
  rect: Rect;
  occupiedBy: PlayerId[];
  weight: number;
  active: boolean;
  latched: boolean;
};

export type BarrierState = { id: string; open: boolean };

export type HazardState = { id: string; rect: Rect; active: boolean };

export type CrateState = {
  id: string;
  rect: Rect;
  velocity: Vec2;
  grounded: boolean;
  supportId: string | undefined;
};

export type CollectibleState = { id: string; collected: boolean };

// Runtime objects are mutable; authored level data is shared and never mutated.
// step_game updates this state in place and never reads DOM or wall-clock time.
export type GameState = {
  level: LevelDefinition;
  status: GameStatus;
  time: number;
  players: Record<PlayerId, PlayerState>;
  platforms: PlatformState[];
  counterweights: CounterweightState[];
  pads: PadState[];
  barriers: BarrierState[];
  hazards: HazardState[];
  crates: CrateState[];
  villainBodies: VillainBodyState[];
  collectibles: CollectibleState[];
  bossDefeated: boolean;
  // Seconds of uninterrupted cooperative target occupancy.
  bossCharge: number;
  deathReason: string | undefined;
  interference?: InterferenceState;
};

export type CreateGameState = (level: LevelDefinition) => GameState;

// dt is seconds; same state, input, and dt must produce the same result.
export type StepGame = (state: GameState, input: GameInput, dt: number) => void;
