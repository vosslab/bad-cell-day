import { draw_interference, draw_interference_effects } from "./render_interference";
import { hero_support_pose } from "./hero_support_pose";
import { draw_boss, draw_player, draw_player_overlay, label, rounded } from "./render_characters";
import { draw_villain_connections, draw_villain_scene } from "./render_villains";
import {
  draw_cana_signal_knot,
  draw_gem_pump,
  draw_tumor_core,
  draw_tumor_organs,
} from "./render_tumor_organs";
import { draw_boss_charge } from "./render_boss_charge";
import { draw_boarding_cues } from "./render_boarding_cues";
import { draw_counterweights } from "./render_counterweights";
import { draw_cargo_feedback } from "./render_cargo_feedback";
import { draw_environment } from "./render_environment";
import { draw_tissue_surface } from "./render_tissue";
import {
  draw_cellular_exit,
  draw_membrane_valve,
  draw_nutrient_sac,
  draw_receptor_patch,
  draw_tissue_hazard,
} from "./render_tissue_objects";
import type { RenderGame, RenderOptions } from "./types/presentation";
import type { GameState } from "./types/simulation";

function circle(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
): void {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

function draw_platforms(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  for (const platform of state.platforms) {
    const definition = state.level.platforms.find((item) => item.id === platform.id);
    if (!definition) continue;
    if (definition.kind === "counterweight") continue;
    if (definition.kind === "moving") {
      context.save();
      context.setLineDash([1, 8]);
      context.strokeStyle = "#e5a4b759";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(definition.rect.x + definition.rect.width / 2, definition.rect.y + 8);
      context.lineTo(
        definition.rect.x + definition.motion.offset.x + definition.rect.width / 2,
        definition.rect.y + definition.motion.offset.y + 8,
      );
      context.stroke();
      context.restore();
    }
    draw_tissue_surface(
      context,
      platform.rect,
      state.level.stage,
      {
        kind:
          definition.kind === "moving"
            ? "carrier"
            : definition.kind === "unstable"
              ? "fragile"
              : "solid",
        active: platform.active,
        powered: platform.powered,
        stabilized: platform.stabilized,
      },
      time,
    );
    if (!platform.active) continue;
    if (definition.kind === "moving") {
      const override = state.level.pads.some(
        (pad) =>
          state.pads.some((item) => item.id === pad.id && item.active) &&
          pad.effects.some(
            (effect) => effect.kind === "power" && effect.platformId === platform.id,
          ),
      );
      const cycle = definition.powerCycle;
      const phase = cycle
        ? (((state.time + (cycle.phase ?? 0)) % cycle.period) + cycle.period) % cycle.period
        : 0;
      const warning =
        cycle !== undefined &&
        !override &&
        platform.powered &&
        phase < cycle.activeFor &&
        cycle.activeFor - phase <= 1;
      circle(
        context,
        platform.rect.x + 8,
        platform.rect.y + platform.rect.height / 2,
        3,
        warning ? "#ffe081" : platform.powered ? "#b7f9b3" : "#263b42",
      );
      if (warning)
        label(
          context,
          "POWER OFF SOON",
          platform.rect.x + platform.rect.width / 2,
          platform.rect.y + platform.rect.height + 11,
          "#ffe081",
          9,
        );
    }
    if (definition.kind === "moving" && platform.rect.width > 45) {
      label(
        context,
        !platform.powered ? "NO POWER" : platform.motorOn ? "< >" : "STOP",
        platform.rect.x + platform.rect.width / 2,
        platform.rect.y + platform.rect.height / 2 + 3,
        "#e9f8ff",
        9,
      );
    }
  }
}

function draw_mechanisms(context: CanvasRenderingContext2D, state: GameState): void {
  for (const pad of state.pads) {
    const definition = state.level.pads.find((item) => item.id === pad.id);
    if (!definition) continue;
    const color =
      definition.accepts === "isp"
        ? "#6cd4ff"
        : definition.accepts === "pac"
          ? "#ffc06c"
          : "#d6a0ff";
    context.save();
    const finaleSupport = state.level.id === "level_20" && pad.active;
    context.lineWidth = finaleSupport ? 2 : 1;
    context.strokeStyle = finaleSupport ? `${color}b0` : pad.active ? "#c4f6a066" : "#bbd7e42b";
    context.setLineDash([1, 7]);
    context.lineCap = "round";
    for (const effect of definition.effects) {
      const target =
        effect.kind === "door"
          ? state.level.barriers.find((item) => item.id === effect.barrierId)?.rect
          : state.platforms.find((item) => item.id === effect.platformId)?.rect;
      if (target) {
        context.beginPath();
        context.moveTo(pad.rect.x + pad.rect.width / 2, pad.rect.y);
        context.bezierCurveTo(
          pad.rect.x + pad.rect.width / 2,
          pad.rect.y - 25,
          target.x + target.width / 2 - 18,
          target.y + target.height / 2 + 25,
          target.x + target.width / 2,
          target.y + target.height / 2,
        );
        context.stroke();
      }
    }
    context.restore();
    draw_receptor_patch(context, pad.rect, color, pad.active, definition.activation === "latch");
    const owner =
      definition.accepts === "any" ? "ANY" : definition.accepts === "isp" ? "ISP" : "PAC";
    const latch = definition.activation === "latch" ? " STAYS ON" : "";
    const weight = definition.minWeight > 1 ? " x2" : "";
    const text = `${owner} ${definition.label}${latch}${weight}`;
    const plateLabel = `${pad.active ? "+ " : ""}${text}`;
    context.save();
    context.font = "800 9px system-ui, sans-serif";
    const plateWidth = Math.max(pad.rect.width, context.measureText(plateLabel).width + 12);
    context.restore();
    const plateX = Math.max(
      0,
      Math.min(
        state.level.world.width - plateWidth,
        pad.rect.x + pad.rect.width / 2 - plateWidth / 2,
      ),
    );
    rounded(
      context,
      {
        x: plateX,
        y: pad.rect.y - 17,
        width: plateWidth,
        height: 15,
      },
      "#142b3be8",
      4,
      "",
    );
    label(
      context,
      plateLabel,
      plateX + plateWidth / 2,
      pad.rect.y - 9,
      pad.active ? "#b9ffc7" : color,
      9,
    );
  }
  for (const barrier of state.barriers) {
    const definition = state.level.barriers.find((item) => item.id === barrier.id);
    if (!definition) continue;
    const color =
      definition.blocks === "pac" ? "#53caff" : definition.blocks === "isp" ? "#ffad56" : "#bd86f2";
    draw_membrane_valve(context, definition.rect, color, barrier.open, state.level.stage);
  }
}

function draw_hazards(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  for (const hazard of state.hazards) {
    const definition = state.level.hazards.find((item) => item.id === hazard.id);
    if (!definition) continue;
    draw_tissue_hazard(context, hazard.rect, definition.kind, hazard.active, time);
    if (definition.harms !== "both") {
      const vulnerablePlayer = definition.harms;
      const playerLabel = vulnerablePlayer === "isp" ? "ISP" : "PAC";
      const playerColor = vulnerablePlayer === "isp" ? "#68d2ff" : "#ffb568";
      const cueWidth = 84;
      const cueHeight = 15;
      const cueX = hazard.rect.x + hazard.rect.width / 2 - cueWidth / 2;
      const cueY = hazard.rect.y + hazard.rect.height + 3;
      rounded(
        context,
        { x: cueX, y: cueY, width: cueWidth, height: cueHeight },
        "#142b3be8",
        4,
        playerColor,
      );
      label(
        context,
        `TOXIC TO ${playerLabel}`,
        cueX + cueWidth / 2,
        cueY + cueHeight / 2,
        playerColor,
        9,
      );
    }
  }
}

function draw_objects(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  for (const exit of state.level.exits) {
    const color = exit.player === "isp" ? "#68d2ff" : "#ffb568";
    draw_cellular_exit(context, exit.rect, color);
    label(
      context,
      exit.player === "isp" ? "ISP" : "PAC",
      exit.rect.x + exit.rect.width / 2,
      exit.rect.y + 17,
      color,
      11,
    );
    label(context, "EXIT", exit.rect.x + exit.rect.width / 2, exit.rect.y + 33, "#f2fbff", 9);
  }
  for (const item of state.collectibles) {
    if (item.collected) continue;
    const definition = state.level.collectibles.find((entry) => entry.id === item.id);
    if (!definition) continue;
    const { x, y } = definition.position;
    context.save();
    context.translate(x, y + Math.sin(time * 3 + x) * 3);
    context.rotate(Math.PI / 4);
    rounded(
      context,
      { x: -6, y: -6, width: 12, height: 12 },
      definition.owner === "isp" ? "#80ddff" : definition.owner === "pac" ? "#ffc477" : "#e2b4ff",
      3,
    );
    context.restore();
    circle(context, x - 2, y - 3 + Math.sin(time * 3 + x) * 3, 1.5, "#ffffff");
  }
  for (const crate of state.crates) {
    const heavy = state.level.crates.find((item) => item.id === crate.id)?.heavy ?? false;
    draw_nutrient_sac(context, crate.rect, heavy);
  }
}

export const render_game: RenderGame = function render_game(
  context: CanvasRenderingContext2D,
  state: GameState,
  options: RenderOptions,
): void {
  const time = options.reducedMotion ? 0 : options.animationTime;
  context.save();
  // Rendering follows authored world coordinates; CSS may scale the complete canvas.
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.scale(
    context.canvas.width / state.level.world.width,
    context.canvas.height / state.level.world.height,
  );
  draw_environment(context, state, time);
  draw_tumor_organs(context, state, time);
  draw_villain_connections(context, state, time);
  draw_platforms(context, state, time);
  draw_counterweights(context, state, time);
  draw_mechanisms(context, state);
  draw_hazards(context, state, time);
  draw_objects(context, state, time);
  if (state.level.id === "level_20") {
    draw_tumor_core(context, state, time);
  } else if (state.level.boss) {
    if (state.level.boss.name === "Gem") {
      draw_gem_pump(context, state, time);
    } else if (state.level.boss.name === "Cana") {
      draw_cana_signal_knot(context, state, time);
    } else {
      draw_boss(
        context,
        state.level.boss.rect,
        state.level.boss.name,
        state.bossDefeated,
        state.level.stage === "tumor",
        time,
      );
    }
  }
  draw_villain_scene(context, state, time);
  draw_interference(context, state, options.reducedMotion);
  draw_boarding_cues(context, state, options);
  // The upper player's face stays in front when one partner stands on the other.
  const players = [state.players.isp, state.players.pac].sort(
    (first, second) => second.rect.y + second.rect.height - first.rect.y - first.rect.height,
  );
  for (const player of players) {
    const interrupted = (state.interference?.players[player.id].effect.kind ?? "none") !== "none";
    draw_player(
      context,
      player,
      time,
      state.status === "dead",
      state.level.world.width,
      state.status === "playing" && !interrupted ? options.heroFeedback?.[player.id] : undefined,
      options.reducedMotion,
      state.interference?.players[player.id].effect,
      hero_support_pose(state, player.id),
    );
  }
  for (const player of players) draw_player_overlay(context, player, state.level.world.width);
  draw_cargo_feedback(context, state);
  draw_interference_effects(context, state, options.reducedMotion);
  draw_boss_charge(context, state);
  if (state.status === "dead") {
    rounded(
      context,
      { x: state.level.world.width / 2 - 123, y: 60, width: 246, height: 34 },
      "#233144ed",
      10,
      "#ffa6b0",
    );
    label(context, "OOPS! A SMALL CELL-TASTROPHE.", state.level.world.width / 2, 77, "#ffe3c7", 12);
  }
  context.restore();
};
