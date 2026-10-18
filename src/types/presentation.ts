import type { CollectibleDefinition, LevelDefinition } from "./level";
import type { SavedProgress } from "./persistence";
import type { PlayerId } from "./player";
import type { GameState } from "./simulation";

export type AppScreen = "title" | "levels" | "playing" | "paused" | "complete";

export type HeroSupportPose = "solo" | "supporting" | "riding";

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

export const COLLECTIBLE_FEEDBACK_SECONDS = 0.45;

export type CollectibleFeedback = Readonly<{
  x: number;
  y: number;
  owner: CollectibleDefinition["owner"];
  remaining: number;
}>;

export type RenderOptions = {
  reducedMotion: boolean;
  // Browser animation time is presentation-only, in seconds.
  animationTime: number;
  // Direct render previews may omit runtime-owned response history.
  heroFeedback?: HeroFeedbackByPlayer;
  collectibleFeedback?: readonly CollectibleFeedback[];
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
