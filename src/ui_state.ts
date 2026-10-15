import { batch, createSignal } from "solid-js";
import { LEVELS } from "./levels";
import { create_progress } from "./save_load";
import type { LevelDefinition } from "./types/level";
import type { GameState } from "./types/simulation";
import type { UiSignals } from "./types/ui";

// Canvas state remains mutable; only scalar projections notify the DOM.
export function create_ui_state(): UiSignals {
  const initial = LEVELS[0];
  if (!initial) throw new Error("At least one level is required");
  const [started, setStarted] = createSignal(false);
  const [paused, setPaused] = createSignal(false);
  const [complete, setComplete] = createSignal(false);
  const [hintVisible, setHintVisible] = createSignal(false);
  const [status, setStatus] = createSignal("Ready to meet Isp and Pac.");
  const [storageNotice, setStorageNotice] = createSignal("");
  const [progress, setProgress] = createSignal(create_progress());
  const [elapsedSeconds, setElapsedSeconds] = createSignal(0);
  const [retries, setRetries] = createSignal(0);
  const [collected, setCollected] = createSignal(0);
  const [level, setLevel] = createSignal<LevelDefinition>(initial);
  const [levels, setLevels] = createSignal(LEVELS);

  function update_hud(game: GameState, retryCount: number, elapsed = game.time): void {
    batch(() => {
      setElapsedSeconds(Math.floor(elapsed));
      setRetries(retryCount);
      setCollected(game.collectibles.filter((item) => item.collected).length);
    });
  }
  return {
    started,
    setStarted,
    paused,
    setPaused,
    complete,
    setComplete,
    hintVisible,
    setHintVisible,
    status,
    setStatus,
    storageNotice,
    setStorageNotice,
    progress,
    setProgress,
    elapsedSeconds,
    retries,
    collected,
    level,
    setLevel,
    levels,
    setLevels,
    update_hud,
  };
}

export function format_elapsed(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds) % 60).padStart(2, "0")}`;
}
