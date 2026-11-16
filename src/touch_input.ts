import { create_empty_input } from "./characters";
import type { GameInput, PlayerInput } from "./types/player";

export function sample_input(keyboard: GameInput, touch: GameInput): GameInput {
  const result = create_empty_input();
  for (const hero of ["isp", "pac"] as const) {
    for (const action of ["left", "right", "jump"] as const) {
      result[hero][action] = keyboard[hero][action] || touch[hero][action];
    }
  }
  return result;
}

export function pad_zone(x: number, y: number, width: number, height: number): PlayerInput {
  // ASVS 2.2.1: bound pointer coordinates to the six defined control zones.
  return { left: x < width / 3, right: x >= (width * 2) / 3, jump: y < height / 2 };
}

export function create_touch_input(
  active: () => boolean,
  unlock: () => void,
): { input: GameInput; clear: () => void; dispose: () => void } {
  const input = create_empty_input();
  const disposers: (() => void)[] = [];
  const clearers: (() => void)[] = [];
  for (const hero of ["isp", "pac"] as const) {
    const pad = document.getElementById(`${hero}_touch_pad`);
    if (!pad) throw new Error(`${hero} touch pad is required`);
    let pointer: number | undefined;
    function feedback(): void {
      const value = input[hero];
      pad!.dataset.zone =
        pointer === undefined
          ? ""
          : String((value.jump ? 0 : 3) + (value.left ? 0 : value.right ? 2 : 1));
    }
    function clear(): void {
      const previous = pointer;
      pointer = undefined;
      input[hero] = { left: false, right: false, jump: false };
      feedback();
      if (previous !== undefined && pad!.hasPointerCapture(previous))
        pad!.releasePointerCapture(previous);
    }
    function move(event: PointerEvent): void {
      if (event.pointerId !== pointer) return;
      event.preventDefault();
      const bounds = pad!.getBoundingClientRect();
      input[hero] = pad_zone(
        event.clientX - bounds.left,
        event.clientY - bounds.top,
        bounds.width,
        bounds.height,
      );
      feedback();
    }
    function down(event: PointerEvent): void {
      event.preventDefault(); // Keep canvas focus and the other thumb's held input.
      if (!active() || pointer !== undefined || event.button !== 0) return;
      pointer = event.pointerId;
      pad!.setPointerCapture(pointer);
      unlock();
      move(event);
    }
    function up(event: PointerEvent): void {
      if (event.pointerId === pointer) clear();
    }
    pad.addEventListener("pointerdown", down);
    pad.addEventListener("pointermove", move);
    for (const name of ["pointerup", "pointercancel", "lostpointercapture"] as const)
      pad.addEventListener(name, up);
    clearers.push(clear);
    disposers.push(() => {
      clear();
      pad.removeEventListener("pointerdown", down);
      pad.removeEventListener("pointermove", move);
      for (const name of ["pointerup", "pointercancel", "lostpointercapture"] as const)
        pad.removeEventListener(name, up);
    });
  }
  return {
    input,
    clear: (): void => clearers.forEach((clear) => clear()),
    dispose: (): void => disposers.forEach((dispose) => dispose()),
  };
}
