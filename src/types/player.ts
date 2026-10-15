import type { Rect, Vec2 } from "./geometry";

export type PlayerId = "isp" | "pac";

export type PlayerInput = {
  left: boolean;
  right: boolean;
  // A held button; simulation detects its rising edge through jumpHeld.
  jump: boolean;
};

export type GameInput = Record<PlayerId, PlayerInput>;

export type PlayerState = {
  id: PlayerId;
  rect: Rect;
  velocity: Vec2;
  grounded: boolean;
  supportId: string | undefined;
  jumpHeld: boolean;
  coyoteTime: number;
  jumpBufferTime: number;
  facing: -1 | 1;
  atExit: boolean;
};
