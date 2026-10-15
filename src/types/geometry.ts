// World geometry uses pixels, with positive y downward. Time uses seconds.
export type Vec2 = { x: number; y: number };

export type Rect = Vec2 & { width: number; height: number };

// A deterministic ping-pong path relative to an entity's authored position.
export type Motion = {
  readonly offset: Readonly<Vec2>;
  readonly period: number;
  readonly phase?: number;
};
