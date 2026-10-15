import type { LevelDefinition } from "./level";
import type { SavedProgress } from "./persistence";
import type { GameState } from "./simulation";

export type AppScreen = "title" | "levels" | "playing" | "paused" | "complete";

export type UiState = {
  screen: AppScreen;
  selectedLevel: number;
  hintVisible: boolean;
  progress: SavedProgress;
};

export type RenderOptions = {
  reducedMotion: boolean;
  // Browser animation time is presentation-only, in seconds.
  animationTime: number;
};

// Renderers read game state without changing it.
export type RenderGame = (
  context: CanvasRenderingContext2D,
  state: GameState,
  options: RenderOptions,
) => void;

export type GameRuntime = {
  levels: readonly LevelDefinition[];
  game: GameState;
  ui: UiState;
};
