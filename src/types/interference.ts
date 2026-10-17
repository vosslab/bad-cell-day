import type { Vec2 } from "./geometry";
import type { PlayerId } from "./player";

export type InterferenceKind = "bubble" | "boomerang";

// The matching scene actor supplies the origin; targets never track a player.
type InterferenceAttackBase = {
  readonly id: string;
  readonly target: Readonly<Vec2>;
  readonly windup: number;
  readonly cooldown: number;
  readonly speed: number;
  readonly radius: number;
  readonly startsOnPadId?: string;
  readonly interruptedByPadIds?: readonly string[];
};

export type InterferenceAttackDefinition = InterferenceAttackBase &
  (
    | { readonly kind: "bubble"; readonly maxRange: number }
    | { readonly kind: "boomerang"; readonly aim?: "nearest" }
  );

export type WeaponAction =
  | "ready"
  | "windup"
  | "release"
  | "recoil"
  | "reload"
  | "outgoing"
  | "returning"
  | "catch"
  | "recover"
  | "waiting"
  | "interrupted"
  | "defeated";

export type WeaponGeometry = {
  kind: InterferenceKind;
  actorPosition: Vec2;
  facing: 1 | -1;
  shoulder: Vec2;
  grip: Vec2;
  releaseAnchor: Vec2;
  catchAnchor: Vec2;
  aimAngle: number;
  endpoint: Vec2;
};

export type WeaponPose = WeaponGeometry & {
  action: WeaponAction;
  progress: number;
  holdingWeapon: boolean;
};

export type InterferenceAttackState = {
  id: string;
  started: boolean;
  usedInterruptPadIds: string[];
  phase: "cooldown" | "windup";
  remaining: number;
  lockedTarget?: Readonly<Vec2>;
  actionMarker?: { kind: "release" | "catch" | "interrupted"; at: number };
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
  hitPushableGem: boolean;
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
