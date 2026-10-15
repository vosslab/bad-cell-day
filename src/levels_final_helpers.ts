import type { Rect } from "./types/geometry";
import type {
  BarrierDefinition,
  ExitDefinition,
  HazardDefinition,
  PadDefinition,
  PadEffect,
  PlatformDefinition,
} from "./types/level";
import type { PlayerId } from "./types/player";

export function rect(x: number, y: number, width: number, height: number): Rect {
  return { x, y, width, height };
}

export function solid(id: string, x: number, y: number, width: number): PlatformDefinition {
  return { id, kind: "static", rect: rect(x, y, width, 620 - y) };
}

export function ledge(id: string, x: number, y: number, width: number): PlatformDefinition {
  return { id, kind: "static", rect: rect(x, y, width, 22) };
}

export function mover(
  id: string,
  x: number,
  y: number,
  width: number,
  dx: number,
  dy: number,
  period = 8,
  powerCycle?: { readonly period: number; readonly activeFor: number },
  requiresPower = false,
): PlatformDefinition {
  return {
    id,
    kind: "moving",
    rect: rect(x, y, width, 24),
    motion: { offset: { x: dx, y: dy }, period },
    motorized: true,
    powerCycle,
    requiresPower,
  };
}

export function bridge(id: string, x: number, y: number, width: number): PlatformDefinition {
  return {
    id,
    kind: "unstable",
    rect: rect(x, y, width, 22),
    collapseAfter: 0.8,
    resetAfter: 2,
  };
}

export function gate(id: string, blocks: PlayerId | "both", x: number): BarrierDefinition {
  return { id, blocks, rect: rect(x, 0, 20, 620) };
}

export function pad(
  id: string,
  accepts: PlayerId | "any",
  x: number,
  floor: number,
  label: string,
  activation: "hold" | "latch",
  effects: readonly PadEffect[],
  minWeight = 1,
): PadDefinition {
  return {
    id,
    accepts,
    rect: rect(x, floor - 8, 75, 8),
    label,
    activation,
    effects,
    minWeight,
  };
}

export function door(barrierId: string): PadEffect {
  return { kind: "door", barrierId };
}

export function motor(platformId: string): PadEffect {
  return { kind: "motor", platformId };
}

export function power(platformId: string): PadEffect {
  return { kind: "power", platformId };
}

export function steady(platformId: string): PadEffect {
  return { kind: "stabilize", platformId };
}

export function slime(id: string, x: number, width: number): HazardDefinition {
  return { id, kind: "slime", harms: "both", rect: rect(x, 585, width, 35) };
}

export function exit(player: PlayerId, x: number, floor: number): ExitDefinition {
  return { player, rect: rect(x, floor - 60, 42, 60) };
}
