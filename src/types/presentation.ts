import type { LevelDefinition } from "./level";
import type { SavedProgress } from "./persistence";
import type { PlayerId } from "./player";
import type { GameState } from "./simulation";

export type AppScreen = "title" | "levels" | "playing" | "paused" | "complete";

export type UiState = {
  screen: AppScreen;
  selectedLevel: number;
  hintVisible: boolean;
  progress: SavedProgress;
};

export type HeroFeedback = Readonly<{
  holding: boolean;
  // Seconds remaining, advanced only by simulation steps.
  acknowledgeRemaining: number;
}>;

export type HeroFeedbackByPlayer = Readonly<Record<PlayerId, HeroFeedback>>;

export type RenderOptions = {
  reducedMotion: boolean;
  // Browser animation time is presentation-only, in seconds.
  animationTime: number;
  // Direct render previews may omit runtime-owned response history.
  heroFeedback?: HeroFeedbackByPlayer;
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
