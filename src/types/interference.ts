import type { Vec2 } from "./geometry";
import type { PlayerId } from "./player";

export type InterferenceKind = "bubble" | "boomerang";

// The matching scene actor supplies the origin; targets never track a player.
export type InterferenceAttackDefinition = {
  readonly id: string;
  readonly kind: InterferenceKind;
  readonly target: Readonly<Vec2>;
  readonly windup: number;
  readonly cooldown: number;
  readonly speed: number;
  readonly radius: number;
};

export type InterferenceAttackState = {
  id: string;
  phase: "cooldown" | "windup";
  remaining: number;
};

export type InterferenceProjectileState = {
  attackId: string;
  kind: InterferenceKind;
  origin: Vec2;
  target: Vec2;
  position: Vec2;
  phase: "outgoing" | "returning";
  // One flight includes both legs of a boomerang's path.
  hitPlayers: PlayerId[];
};

export type PlayerInterferenceEffect =
  | { kind: "none" }
  | { kind: "float" | "sticky" | "dizzy"; remaining: number }
  | { kind: "shove"; remaining: number; velocity: Vec2 };

export type PlayerInterferenceState = {
  effect: PlayerInterferenceEffect;
  immunityRemaining: number;
};

// This transient state belongs to the simulation and never enters saved progress.
export type InterferenceState = {
  attackers: InterferenceAttackState[];
  projectiles: InterferenceProjectileState[];
  players: Record<PlayerId, PlayerInterferenceState>;
};
