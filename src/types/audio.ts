import type { GameState } from "./simulation";

export type GameAudio = {
  set_enabled(enabled: boolean): void;
  unlock(): void;
  reset(state: GameState): void;
  update(state: GameState): void;
  dispose(): void;
};
