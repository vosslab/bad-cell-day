import { JUMP_SPEED } from "./constants";
import type { GameAudio } from "./types/audio";
import type { InterferenceAttackState, PlayerInterferenceEffect } from "./types/interference";
import type { PlayerId } from "./types/player";
import type { GameState, PadState } from "./types/simulation";

type HeroSoundHistory = {
  grounded: boolean;
  velocityY: number;
  effect: PlayerInterferenceEffect["kind"];
  airborneSince: number | undefined;
};

type AudioHistory = {
  time: number;
  status: GameState["status"];
  heroes: Record<PlayerId, HeroSoundHistory>;
  pads: Map<string, Pick<PadState, "active" | "latched">>;
  collected: Set<string>;
  attackers: Map<string, Pick<InterferenceAttackState, "phase" | "actionMarker">>;
  bossCharge: number;
  bossDefeated: boolean;
};

type Voice = { oscillator: OscillatorNode; envelope: GainNode };

function snapshot(state: GameState): AudioHistory {
  function hero(id: PlayerId): HeroSoundHistory {
    return {
      grounded: state.players[id].grounded,
      velocityY: state.players[id].velocity.y,
      effect: state.interference?.players[id].effect.kind ?? "none",
      airborneSince: undefined,
    };
  }
  return {
    time: state.time,
    status: state.status,
    heroes: { isp: hero("isp"), pac: hero("pac") },
    pads: new Map(state.pads.map((pad) => [pad.id, { active: pad.active, latched: pad.latched }])),
    collected: new Set(
      state.collectibles.filter((spark) => spark.collected).map((spark) => spark.id),
    ),
    attackers: new Map(
      (state.interference?.attackers ?? []).map((attack) => [
        attack.id,
        {
          phase: attack.phase,
          actionMarker: attack.actionMarker ? { ...attack.actionMarker } : undefined,
        },
      ]),
    ),
    bossCharge: state.bossCharge,
    bossDefeated: state.bossDefeated,
  };
}

// This module observes copied transitions; it never writes simulation or retains mutable state.
export function create_game_audio(initiallyEnabled: boolean): GameAudio {
  let enabled = initiallyEnabled;
  let disposed = false;
  let context: AudioContext | undefined;
  let master: GainNode | undefined;
  let previous: AudioHistory | undefined;
  const voices = new Set<Voice>();
  const chargeVoices = new Set<Voice>();

  function cancel(active: Set<Voice>): void {
    for (const voice of active) {
      voice.oscillator.stop();
      voice.oscillator.disconnect();
      voice.envelope.disconnect();
      voices.delete(voice);
      chargeVoices.delete(voice);
    }
    active.clear();
  }

  function set_enabled(value: boolean): void {
    enabled = value;
    if (master) master.gain.value = value ? 0.075 : 0;
    if (!value) cancel(voices);
  }

  function unlock(): void {
    if (!enabled || disposed) return;
    if (!context) {
      if (typeof AudioContext === "undefined") return;
      // Context construction/resume may be denied by the browser's audio policy.
      try {
        context = new AudioContext();
      } catch {
        return;
      }
      master = context.createGain();
      master.gain.value = 0.075;
      master.connect(context.destination);
    }
    // Completion only resumes the device; it never restores gain or queues old cues.
    if (context.state === "suspended") void context.resume().catch(() => undefined);
  }

  function note(
    frequency: number,
    endFrequency: number,
    duration: number,
    shape: "sine" | "triangle" = "sine",
    delay = 0,
    charge = false,
  ): void {
    if (!enabled || disposed || !context || !master || context.state !== "running") return;
    const start = context.currentTime + delay;
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = shape;
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency, start + duration);
    envelope.gain.setValueAtTime(0, start);
    envelope.gain.linearRampToValueAtTime(0.32, start + 0.012);
    envelope.gain.exponentialRampToValueAtTime(0.001, start + duration);
    oscillator.connect(envelope);
    envelope.connect(master);
    const voice = { oscillator, envelope };
    voices.add(voice);
    if (charge) chargeVoices.add(voice);
    oscillator.onended = (): void => {
      voices.delete(voice);
      chargeVoices.delete(voice);
      oscillator.disconnect();
      envelope.disconnect();
    };
    oscillator.start(start);
    oscillator.stop(start + duration);
  }

  function reset(state: GameState): void {
    cancel(voices);
    previous = snapshot(state);
  }

  function hero_cues(before: AudioHistory, current: AudioHistory, id: PlayerId): void {
    const old = before.heroes[id];
    const hero = current.heroes[id];
    const pitch = id === "isp" ? 440 : 294;
    const jumped =
      hero.effect !== "float" &&
      hero.velocityY < -JUMP_SPEED * 0.8 &&
      old.velocityY - hero.velocityY > JUMP_SPEED * 0.5;
    hero.airborneSince = hero.grounded
      ? undefined
      : jumped || old.grounded
        ? current.time
        : old.airborneSince;
    if (jumped) note(pitch, pitch * 1.65, 0.17, id === "isp" ? "sine" : "triangle");
    if (
      !old.grounded &&
      hero.grounded &&
      old.airborneSince !== undefined &&
      current.time - old.airborneSince > 0.09 &&
      old.velocityY > 45
    )
      note(pitch * 0.65, pitch * 0.42, 0.1);
    if (hero.effect !== old.effect) {
      switch (hero.effect) {
        case "float":
          note(330, 880, 0.32);
          break;
        case "sticky":
          note(210, 85, 0.2, "triangle");
          break;
        case "dizzy":
          note(510, 320, 0.12);
          note(320, 560, 0.17, "sine", 0.1);
          break;
        case "shove":
          note(150, 400, 0.16, "triangle");
          break;
        case "none":
          break;
      }
    }
  }

  function mechanism_cues(before: AudioHistory, current: AudioHistory, state: GameState): void {
    for (const pad of state.pads) {
      const old = before.pads.get(pad.id);
      if (!old) continue;
      const definition = state.level.pads.find((candidate) => candidate.id === pad.id);
      const pitch = definition?.accepts === "isp" ? 392 : 262;
      if (pad.latched && !old.latched) {
        note(pitch, pitch * 1.25, 0.16, "triangle");
        note(pitch * 1.5, pitch * 1.5, 0.18, "sine", 0.1);
      } else if (pad.active !== old.active) {
        note(pad.active ? pitch : pitch * 1.2, pad.active ? pitch * 1.5 : pitch * 0.8, 0.15);
      }
    }
    for (const id of current.collected) {
      if (!before.collected.has(id)) {
        note(880, 1320, 0.13);
        note(1320, 1760, 0.16, "sine", 0.08);
      }
    }
    for (const [id, attack] of current.attackers) {
      const old = before.attackers.get(id);
      const definition = state.level.interference?.find((candidate) => candidate.id === id);
      if (!old || !definition) continue;
      const bubble = definition.kind === "bubble";
      if (attack.phase === "windup" && old.phase !== "windup")
        note(bubble ? 280 : 200, bubble ? 420 : 300, 0.23, "triangle");
      const marker = attack.actionMarker;
      if (!marker || (marker.kind === old.actionMarker?.kind && marker.at === old.actionMarker.at))
        continue;
      if (marker.kind === "release") note(bubble ? 620 : 360, bubble ? 1050 : 170, 0.22);
      else if (marker.kind === "catch") note(280, 420, 0.12, "triangle");
      else {
        note(440, 220, 0.1, "triangle");
        note(220, 330, 0.12, "sine", 0.07);
      }
    }
  }

  function boss_cues(before: AudioHistory, current: AudioHistory, state: GameState): void {
    if (current.bossDefeated && !before.bossDefeated) {
      cancel(chargeVoices);
      note(262, 523, 0.24, "triangle");
      note(392, 784, 0.32, "sine", 0.12);
      note(523, 1046, 0.38, "sine", 0.24);
      return;
    }
    if (current.bossCharge === 0 && before.bossCharge > 0 && !current.bossDefeated) {
      cancel(chargeVoices);
      note(330, 165, 0.16);
    }
    const duration = state.level.boss?.chargeSeconds;
    if (!duration || current.bossDefeated || current.bossCharge <= 0) return;
    // Four short milestones gather pitch; interruption cancels their remaining tails.
    const milestone = Math.min(3, Math.floor((current.bossCharge / duration) * 4));
    const oldMilestone =
      before.bossCharge > 0 ? Math.floor((before.bossCharge / duration) * 4) : -1;
    if (milestone > oldMilestone) {
      const pitch = 220 * 2 ** (milestone / 4);
      note(pitch, pitch * 1.5, 0.4, "triangle", 0, true);
      note(pitch * 1.5, pitch * 2, 0.3, "sine", 0.09, true);
    }
  }

  function update(state: GameState): void {
    const current = snapshot(state);
    const before = previous;
    // Muted/unavailable updates still consume transitions, so unlock has no backlog.
    previous = current;
    if (!before || before.status !== "playing") return;
    if (current.status === "dead") {
      cancel(voices);
      note(294, 147, 0.22, "triangle");
      note(220, 110, 0.22, "sine", 0.12);
      return;
    }
    hero_cues(before, current, "isp");
    hero_cues(before, current, "pac");
    mechanism_cues(before, current, state);
    boss_cues(before, current, state);
    if (current.status === "complete") {
      // Isp's high reply and Pac's lower reply meet in one shared final chord.
      note(440, 523, 0.22);
      note(294, 392, 0.22, "triangle", 0.16);
      note(523, 523, 0.45, "sine", 0.34);
      note(392, 392, 0.45, "triangle", 0.34);
    }
  }

  function dispose(): void {
    disposed = true;
    cancel(voices);
    if (context && context.state !== "closed") void context.close().catch(() => undefined);
  }

  return { set_enabled, unlock, reset, update, dispose };
}
