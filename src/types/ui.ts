import type { Accessor, Setter } from "solid-js";
import type { LevelDefinition } from "./level";
import type { SavedProgress } from "./persistence";
import type { GameState } from "./simulation";

export type UiSignals = {
  started: Accessor<boolean>;
  setStarted: Setter<boolean>;
  paused: Accessor<boolean>;
  setPaused: Setter<boolean>;
  complete: Accessor<boolean>;
  setComplete: Setter<boolean>;
  hintVisible: Accessor<boolean>;
  setHintVisible: Setter<boolean>;
  status: Accessor<string>;
  setStatus: Setter<string>;
  storageNotice: Accessor<string>;
  setStorageNotice: Setter<string>;
  progress: Accessor<SavedProgress>;
  setProgress: Setter<SavedProgress>;
  elapsedSeconds: Accessor<number>;
  retries: Accessor<number>;
  collected: Accessor<number>;
  level: Accessor<LevelDefinition>;
  setLevel: Setter<LevelDefinition>;
  levels: Accessor<readonly LevelDefinition[]>;
  setLevels: Setter<readonly LevelDefinition[]>;
  update_hud(game: GameState, retryCount: number, elapsed?: number): void;
};

export type RuntimeControls = {
  start_level(level: LevelDefinition): void;
  set_paused(value: boolean): void;
  retry(): void;
  next_level(): void;
  clear_input(): void;
  dispose(): void;
};
