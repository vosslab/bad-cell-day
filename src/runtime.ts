import { create_empty_input } from "./characters";
import {
  create_collectible_feedback,
  snapshot_collectible_feedback,
  update_collectible_feedback,
} from "./collectible_feedback";
import { create_game_audio } from "./game_audio";
import { create_game_state } from "./game_state";
import {
  create_hero_feedback,
  snapshot_hero_feedback,
  update_hero_feedback,
} from "./hero_feedback";
import { TRIAL_LEVEL } from "./interference_trial";
import { step_game } from "./physics";
import { render_game } from "./render_game";
import { is_level_unlocked, load_progress, record_completion, save_progress } from "./save_load";
import type { LevelDefinition } from "./types/level";
import type { GameStatus } from "./types/simulation";
import type { RuntimeControls, UiSignals } from "./types/ui";

const STEP = 1 / 120;

// The runtime owns mutable simulation, input, and browser lifecycle listeners.
export function create_runtime(canvas: HTMLCanvasElement, ui: UiSignals): RuntimeControls {
  const candidate = canvas.getContext("2d");
  if (!candidate) throw new Error("A 2D canvas context is required");
  const context = candidate;
  let state = create_game_state(ui.level());
  let collectibleFeedback = create_collectible_feedback(state);
  let heroFeedback = create_hero_feedback(state);
  let input = create_empty_input();
  let elapsed = 0;
  let retries = 0;
  let deathWait = 0;
  let previousTime = 0;
  let accumulator = 0;
  let frame = 0;
  let disposed = false;
  let storage: Storage | undefined;
  try {
    storage = window.localStorage;
  } catch {
    storage = undefined;
  }
  ui.setProgress(load_progress(storage, ui.levels()));
  if (!save_progress(storage, ui.progress())) storage_unavailable();
  const audio = create_game_audio(ui.progress().soundEnabled);
  audio.reset(state);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function storage_unavailable(): void {
    ui.setStorageNotice("Saving is unavailable. Your progress lasts until this page closes.");
  }
  function clear_input(): void {
    input = create_empty_input();
    accumulator = 0;
  }
  function set_paused(value: boolean): void {
    clear_input();
    audio.reset(state);
    if (!ui.started() || ui.complete()) return;
    ui.setPaused(value);
    ui.setStatus(value ? "Adventure paused. Your team can take a breather." : "Team ready.");
    if (value) document.getElementById("resume")?.focus();
    else canvas.focus();
  }
  function start_level(level: LevelDefinition): void {
    const index = ui.levels().indexOf(level);
    if (level !== TRIAL_LEVEL && !is_level_unlocked(index, ui.levels(), ui.progress())) return;
    state = create_game_state(level);
    audio.reset(state);
    collectibleFeedback = create_collectible_feedback(state);
    heroFeedback = create_hero_feedback(state);
    clear_input();
    elapsed = 0;
    retries = 0;
    deathWait = 0;
    ui.setLevel(level);
    ui.setStarted(true);
    ui.setPaused(false);
    ui.setComplete(false);
    ui.update_hud(state, retries, elapsed);
    const opening = level.villainScene
      ? ` Gem: ${level.villainScene.gem.opening} Cana: ${level.villainScene.cana.opening}`
      : " Isp and Pac are at the starting line.";
    ui.setStatus(level.title + " ready." + opening);
    canvas.focus();
  }
  function retry(): void {
    if (!ui.started() || ui.complete()) return;
    retries += 1;
    state = create_game_state(ui.level());
    audio.reset(state);
    collectibleFeedback = create_collectible_feedback(state);
    heroFeedback = create_hero_feedback(state);
    deathWait = 0;
    clear_input();
    ui.update_hud(state, retries, elapsed);
    ui.setStatus("Fresh cells, same team. Ready to try again!");
    canvas.focus();
  }
  function next_level(): void {
    if (ui.level() === TRIAL_LEVEL) return;
    const next = ui.levels()[ui.levels().indexOf(ui.level()) + 1];
    if (next) start_level(next);
  }
  function finish(): void {
    clear_input();
    if (ui.level() !== TRIAL_LEVEL) {
      // Saved times include every attempt, while simulation time stays local to an attempt.
      const progress = record_completion(ui.progress(), { ...state, time: elapsed });
      ui.setProgress(progress);
      if (!save_progress(storage, progress)) storage_unavailable();
    }
    ui.setComplete(true);
    ui.setStatus(
      ui.level() === TRIAL_LEVEL
        ? "Trial complete! Both heroes outwitted Gem and Cana."
        : "Both heroes made it! Teamwork saves the cell day.",
    );
    document.getElementById("next_level")?.focus();
    if (document.activeElement === canvas) document.getElementById("replay")?.focus();
  }
  function read_status(): GameStatus {
    return state.status;
  }
  function simulate(): void {
    elapsed += STEP;
    if (state.status === "dead") {
      deathWait += STEP;
      if (deathWait >= 0.6) {
        state = create_game_state(ui.level());
        audio.reset(state);
        collectibleFeedback = create_collectible_feedback(state);
        heroFeedback = create_hero_feedback(state);
        deathWait = 0;
        clear_input();
        ui.setStatus("Back together. Ready for another try!");
      }
      return;
    }
    step_game(state, input, STEP);
    audio.update(state);
    collectibleFeedback = update_collectible_feedback(collectibleFeedback, state, STEP);
    heroFeedback = update_hero_feedback(heroFeedback, state, STEP);
    if (read_status() === "dead") {
      retries += 1;
      clear_input();
      ui.setStatus("Cell-ebration postponed! " + (state.deathReason ?? "Try again together."));
    } else if (state.status === "complete") finish();
  }
  function animate(time: number): void {
    if (disposed) return;
    const dt = previousTime === 0 ? 0 : Math.min((time - previousTime) / 1000, 0.1);
    previousTime = time;
    if (ui.started()) {
      if (!ui.paused() && !ui.complete()) {
        accumulator += dt;
        let steps = 0;
        while (accumulator >= STEP && steps < 12 && !ui.complete()) {
          accumulator -= STEP;
          simulate();
          steps += 1;
        }
      }
      ui.update_hud(state, retries, elapsed);
      render_game(context, state, {
        animationTime: time / 1000,
        reducedMotion,
        heroFeedback: snapshot_hero_feedback(heroFeedback),
        collectibleFeedback: snapshot_collectible_feedback(collectibleFeedback),
      });
    }
    canvas.dataset.ispX = state.players.isp.rect.x.toFixed(2);
    canvas.dataset.ispY = state.players.isp.rect.y.toFixed(2);
    canvas.dataset.pacX = state.players.pac.rect.x.toFixed(2);
    canvas.dataset.pacY = state.players.pac.rect.y.toFixed(2);
    canvas.dataset.ispEffect = state.interference?.players.isp.effect.kind ?? "none";
    canvas.dataset.pacEffect = state.interference?.players.pac.effect.kind ?? "none";
    canvas.dataset.levelId = state.level.id;
    canvas.dataset.phase = ui.complete() ? "complete" : ui.paused() ? "paused" : state.status;
    frame = requestAnimationFrame(animate);
  }
  function movement(code: string, down: boolean): void {
    if (code === "KeyA") input.isp.left = down;
    if (code === "KeyD") input.isp.right = down;
    if (code === "KeyW") input.isp.jump = down;
    if (code === "ArrowLeft") input.pac.left = down;
    if (code === "ArrowRight") input.pac.right = down;
    if (code === "ArrowUp") input.pac.jump = down;
  }
  function key(event: KeyboardEvent, down: boolean): void {
    // Releases must reach input even when focus or shortcut modifiers changed while held.
    if (!down) {
      movement(event.code, false);
      return;
    }
    const target = event.target;
    if (
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      document.querySelector("dialog[open]") ||
      (target instanceof HTMLElement &&
        (target.isContentEditable || target.closest("input, textarea, select")))
    )
      return;
    if (event.code === "Escape") {
      if (!event.repeat) {
        if (event.isTrusted && ui.progress().soundEnabled) audio.unlock();
        set_paused(!ui.paused());
      }
      return;
    }
    if (!ui.started() || ui.paused() || ui.complete()) return;
    // Active play owns movement keys after page clicks; menus retain Tab and Enter.
    if (event.code.startsWith("Arrow")) event.preventDefault();
    if (["KeyA", "KeyD", "KeyW", "ArrowLeft", "ArrowRight", "ArrowUp"].includes(event.code)) {
      if (event.isTrusted && ui.progress().soundEnabled) audio.unlock();
      canvas.focus({ preventScroll: true });
      movement(event.code, true);
    }
    if (event.code === "KeyR" && !event.repeat) {
      if (event.isTrusted && ui.progress().soundEnabled) audio.unlock();
      retry();
    }
  }
  function keydown(event: KeyboardEvent): void {
    key(event, true);
  }
  function keyup(event: KeyboardEvent): void {
    key(event, false);
  }
  function blur(): void {
    set_paused(true);
  }
  function visibility(): void {
    if (document.hidden) set_paused(true);
  }
  function canvas_blur(): void {
    clear_input();
  }
  function click(event: MouseEvent): void {
    if (event.isTrusted && ui.progress().soundEnabled) audio.unlock();
  }
  function toggle_sound(): void {
    const progress = { ...ui.progress(), soundEnabled: !ui.progress().soundEnabled };
    ui.setProgress(progress);
    audio.set_enabled(progress.soundEnabled);
    audio.reset(state);
    if (!save_progress(storage, progress)) storage_unavailable();
  }
  document.addEventListener("click", click);
  document.addEventListener("keydown", keydown);
  document.addEventListener("keyup", keyup);
  window.addEventListener("blur", blur);
  document.addEventListener("visibilitychange", visibility);
  canvas.addEventListener("blur", canvas_blur);
  frame = requestAnimationFrame(animate);

  function dispose(): void {
    disposed = true;
    cancelAnimationFrame(frame);
    audio.dispose();
    document.removeEventListener("click", click);
    document.removeEventListener("keydown", keydown);
    document.removeEventListener("keyup", keyup);
    window.removeEventListener("blur", blur);
    document.removeEventListener("visibilitychange", visibility);
    canvas.removeEventListener("blur", canvas_blur);
  }
  return { start_level, set_paused, retry, next_level, clear_input, toggle_sound, dispose };
}
