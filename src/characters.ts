import { PLAYER_HEIGHT, PLAYER_WIDTH } from "./constants";
import type { Vec2 } from "./types/geometry";
import type { GameInput, PlayerId, PlayerState } from "./types/player";

export function create_player(id: PlayerId, position: Readonly<Vec2>): PlayerState {
  const player: PlayerState = {
    id,
    rect: { x: position.x, y: position.y, width: PLAYER_WIDTH, height: PLAYER_HEIGHT },
    velocity: { x: 0, y: 0 },
    grounded: false,
    supportId: undefined,
    jumpHeld: false,
    coyoteTime: 0,
    jumpBufferTime: 0,
    facing: 1,
    atExit: false,
  };
  return player;
}

export function create_empty_input(): GameInput {
  const input: GameInput = {
    isp: { left: false, right: false, jump: false },
    pac: { left: false, right: false, jump: false },
  };
  return input;
}
