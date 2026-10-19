import type { OrganStage } from "./anatomy";
import type { Motion, Rect, Vec2 } from "./geometry";
import type { InterferenceAttackDefinition } from "./interference";
import type { PlayerId } from "./player";
import type { VillainScene } from "./villain";

type PlatformBase = { readonly id: string; readonly rect: Readonly<Rect> };

export type PlatformDefinition = PlatformBase &
  (
    | { readonly kind: "static" }
    | { readonly kind: "counterweight" }
    | { readonly kind: "recoil" }
    | {
        readonly kind: "moving";
        readonly motion: Motion;
        // Presentation-only launch-side guidance; physics remains fully solid.
        readonly boardingSide?: "left" | "right";
        readonly motorized?: boolean;
        // Required power and cycle outages are both overridden by an active power pad.
        readonly requiresPower?: boolean;
        readonly powerCycle?: {
          readonly period: number;
          readonly activeFor: number;
          readonly phase?: number;
        };
      }
    | {
        readonly kind: "unstable";
        readonly collapseAfter: number;
        // Null leaves a collapsed platform inactive until the level is restarted or retried.
        readonly resetAfter: number | null;
      }
  );

export type CounterweightDefinition = {
  readonly id: string;
  readonly platformIds: readonly [string, string];
  readonly travel: number;
  readonly speed: number;
};

export type PadEffect =
  | { readonly kind: "motor"; readonly platformId: string }
  | { readonly kind: "stabilize"; readonly platformId: string }
  | { readonly kind: "power"; readonly platformId: string }
  | { readonly kind: "door"; readonly barrierId: string };

export type PadDefinition = {
  readonly id: string;
  // If attached, rect.x/y are offsets from the platform's current top-left.
  readonly rect: Readonly<Rect>;
  readonly platformId?: string;
  readonly accepts: PlayerId | "any";
  readonly activation: "hold" | "latch";
  readonly label: string;
  // Each player and ordinary crate weighs 1; a heavy crate weighs 2.
  readonly minWeight: number;
  readonly effects: readonly PadEffect[];
};

export type BarrierDefinition = {
  readonly id: string;
  readonly rect: Readonly<Rect>;
  // Only this character is blocked; "both" is an ordinary cooperative door.
  readonly blocks: PlayerId | "both";
};

export type HazardDefinition = {
  readonly id: string;
  readonly rect: Readonly<Rect>;
  readonly kind: "spikes" | "slime" | "villain" | "beam";
  readonly harms: PlayerId | "both";
  readonly motion?: Motion;
  // Beam on/off periods; absent means continuously dangerous.
  readonly pulse?: { readonly period: number; readonly activeFor: number; readonly phase?: number };
};

export type CrateDefinition = {
  readonly id: string;
  readonly rect: Readonly<Rect>;
  // Heavy crates require both players pushing in the same direction.
  readonly heavy: boolean;
};

export type CollectibleDefinition = {
  readonly id: string;
  readonly position: Readonly<Vec2>;
  readonly owner: PlayerId | "any";
};

export type ExitDefinition = {
  readonly player: PlayerId;
  readonly rect: Readonly<Rect>;
};

export type BossDefinition = {
  readonly name: string;
  // Targets are hold pads, one accepting isp and the other pac. Both must be
  // occupied simultaneously; defeat then latches so both can reach the exits.
  readonly targetPadIds: readonly [string, string];
  // Continuous simultaneous occupancy in seconds; omitted means immediate defeat.
  readonly chargeSeconds?: number;
  readonly rect: Readonly<Rect>;
};

export type LevelDefinition = {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly hint: string;
  readonly stage: OrganStage;
  readonly villain?: "gem" | "cana" | "both";
  readonly villainScene?: VillainScene;
  readonly interference?: readonly InterferenceAttackDefinition[];
  readonly world: Readonly<{ width: number; height: number }>;
  readonly spawns: Readonly<Record<PlayerId, Readonly<Vec2>>>;
  readonly platforms: readonly PlatformDefinition[];
  readonly counterweights?: readonly CounterweightDefinition[];
  readonly pads: readonly PadDefinition[];
  readonly barriers: readonly BarrierDefinition[];
  readonly hazards: readonly HazardDefinition[];
  readonly crates: readonly CrateDefinition[];
  readonly collectibles: readonly CollectibleDefinition[];
  readonly exits: readonly ExitDefinition[];
  readonly boss?: BossDefinition;
};
