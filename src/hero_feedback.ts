import type { PlayerId } from "./types/player";
import type { HeroFeedback, HeroFeedbackByPlayer } from "./types/presentation";
import type { GameState } from "./types/simulation";

const ACKNOWLEDGE_SECONDS = 0.65;

// Runtime history is separate from both mutable simulation and render snapshots.
export type HeroFeedbackHistory = Readonly<{
  latchedPadIds: ReadonlySet<string>;
  heroes: HeroFeedbackByPlayer;
}>;

function observe_hero(
  previous: HeroFeedbackHistory,
  state: GameState,
  id: PlayerId,
  dt: number,
): HeroFeedback {
  let holding = false;
  let acknowledgeRemaining = Math.max(0, previous.heroes[id].acknowledgeRemaining - dt);
  const interrupted = (state.interference?.players[id].effect.kind ?? "none") !== "none";
  if (state.status !== "playing" || interrupted) {
    return { holding, acknowledgeRemaining: 0 };
  }
  for (const definition of state.level.pads) {
    // Joint/any controls never imply that one hero earned the result alone.
    if (definition.accepts !== id || definition.minWeight > 1) continue;
    const pad = state.pads.find((candidate) => candidate.id === definition.id);
    if (!pad?.active || !pad.occupiedBy.includes(id) || pad.weight < definition.minWeight) continue;
    if (definition.activation === "hold") holding = true;
    else if (pad.latched && !previous.latchedPadIds.has(pad.id)) {
      acknowledgeRemaining = ACKNOWLEDGE_SECONDS;
    }
  }
  return { holding, acknowledgeRemaining };
}

export function create_hero_feedback(state: GameState): HeroFeedbackHistory {
  const history: HeroFeedbackHistory = {
    latchedPadIds: new Set(state.pads.filter((pad) => pad.latched).map((pad) => pad.id)),
    heroes: {
      isp: { holding: false, acknowledgeRemaining: 0 },
      pac: { holding: false, acknowledgeRemaining: 0 },
    },
  };
  return update_hero_feedback(history, state, 0);
}

// Call immediately after each fixed step, including a lethal/completing step.
// Skipping updates while paused freezes age; observing suppressed latches consumes them.
export function update_hero_feedback(
  previous: HeroFeedbackHistory,
  state: GameState,
  dt: number,
): HeroFeedbackHistory {
  const history: HeroFeedbackHistory = {
    latchedPadIds: new Set(state.pads.filter((pad) => pad.latched).map((pad) => pad.id)),
    heroes: {
      isp: observe_hero(previous, state, "isp", dt),
      pac: observe_hero(previous, state, "pac", dt),
    },
  };
  return history;
}

export function snapshot_hero_feedback(history: HeroFeedbackHistory): HeroFeedbackByPlayer {
  return history.heroes;
}
