import { overlaps, stands_on, clip_axis, world_solids } from "./collisions";
import type { Motion, Rect } from "./types/geometry";
import type { GameState } from "./types/simulation";

export function motion_rect(rect: Readonly<Rect>, motion: Motion | undefined, time: number): Rect {
  if (!motion || motion.period <= 0) return { ...rect };
  const phase = (((time / motion.period + (motion.phase ?? 0)) % 1) + 1) % 1;
  const fraction = 1 - Math.abs(phase * 2 - 1);
  return {
    ...rect,
    x: rect.x + motion.offset.x * fraction,
    y: rect.y + motion.offset.y * fraction,
  };
}

export function update_pads(state: GameState): void {
  for (const pad of state.pads) {
    const definition = state.level.pads.find((entry) => entry.id === pad.id);
    if (!definition) continue;
    const attachment = state.platforms.find((entry) => entry.id === definition.platformId);
    pad.rect.x = definition.rect.x + (attachment?.rect.x ?? 0);
    pad.rect.y = definition.rect.y + (attachment?.rect.y ?? 0);
    pad.occupiedBy = [];
    pad.weight = 0;
    if (!attachment || attachment.active) {
      for (const player of Object.values(state.players)) {
        if (
          (definition.accepts === "any" || definition.accepts === player.id) &&
          (overlaps(player.rect, pad.rect) || stands_on(player.rect, pad.rect))
        ) {
          pad.occupiedBy.push(player.id);
          pad.weight += 1;
        }
      }
      if (definition.accepts === "any") {
        for (const crate of state.crates) {
          if (overlaps(crate.rect, pad.rect) || stands_on(crate.rect, pad.rect)) {
            pad.weight += state.level.crates.find((entry) => entry.id === crate.id)?.heavy ? 2 : 1;
          }
        }
      }
    }
    const occupied = pad.weight >= definition.minWeight;
    pad.latched ||= definition.activation === "latch" && occupied;
    pad.active = occupied || pad.latched;
  }
  for (const barrier of state.barriers) barrier.open = false;
  for (const platform of state.platforms) {
    const definition = state.level.platforms.find((entry) => entry.id === platform.id);
    platform.motorOn = definition?.kind === "moving";
    platform.stabilized = false;
  }
  for (const pad of state.pads) {
    if (!pad.active) continue;
    const definition = state.level.pads.find((entry) => entry.id === pad.id);
    for (const effect of definition?.effects ?? []) {
      if (effect.kind === "door") {
        const barrier = state.barriers.find((entry) => entry.id === effect.barrierId);
        if (barrier) barrier.open = true;
      } else {
        const platform = state.platforms.find((entry) => entry.id === effect.platformId);
        if (!platform) continue;
        if (effect.kind === "motor") platform.motorOn = false;
        else {
          platform.stabilized = true;
          platform.active = true;
          platform.occupiedTime = 0;
          platform.respawnTime = 0;
        }
      }
    }
  }
  const boss = state.level.boss;
  if (boss) {
    const targets = boss.targetPadIds.map((id) => state.pads.find((pad) => pad.id === id));
    const owners = boss.targetPadIds.map(
      (id) => state.level.pads.find((pad) => pad.id === id)?.accepts,
    );
    state.bossDefeated ||=
      owners.includes("isp") &&
      owners.includes("pac") &&
      targets.every((pad) => {
        const definition = state.level.pads.find((entry) => entry.id === pad?.id);
        return (
          pad !== undefined &&
          pad.active &&
          definition !== undefined &&
          definition.accepts !== "any" &&
          pad.occupiedBy.includes(definition.accepts)
        );
      });
  }
}

export function move_platforms(state: GameState, dt: number): void {
  const bodies = [...Object.values(state.players), ...state.crates];
  for (const platform of state.platforms) {
    const definition = state.level.platforms.find((entry) => entry.id === platform.id);
    platform.previousRect = { ...platform.rect };
    platform.displacement = { x: 0, y: 0 };
    if (definition?.kind === "unstable" && !platform.stabilized) {
      if (platform.active) {
        const occupied = bodies.some((body) => stands_on(body.rect, platform.rect));
        platform.occupiedTime = occupied ? platform.occupiedTime + dt : 0;
        if (platform.occupiedTime >= definition.collapseAfter) {
          platform.active = false;
          platform.respawnTime = definition.resetAfter;
        }
      } else {
        platform.respawnTime -= dt;
        if (platform.respawnTime <= 0) {
          platform.active = true;
          platform.occupiedTime = 0;
        }
      }
    }
    if (definition?.kind !== "moving" || !platform.active || !platform.motorOn) continue;
    const target = motion_rect(definition.rect, definition.motion, platform.motionTime + dt);
    const riders = bodies.filter((body) => stands_on(body.rect, platform.rect));
    const obstacles = bodies.filter((body) => !riders.includes(body)).map((body) => body.rect);
    let dx = clip_axis(platform.rect, target.x - platform.rect.x, "x", obstacles);
    let dy = clip_axis(platform.rect, target.y - platform.rect.y, "y", obstacles);
    // A rider against a ceiling or wall stops its carrier rather than being crushed.
    for (const rider of riders) {
      const playerId =
        rider === state.players.isp ? "isp" : rider === state.players.pac ? "pac" : undefined;
      const solids = world_solids(state, playerId).filter((rect) => rect !== platform.rect);
      solids.push(
        ...bodies
          .filter((body) => body !== rider && !riders.includes(body))
          .map((body) => body.rect),
      );
      dx = clip_axis(rider.rect, dx, "x", solids);
      dy = clip_axis(rider.rect, dy, "y", solids);
    }
    if (
      Math.abs(dx - (target.x - platform.rect.x)) < 0.001 &&
      Math.abs(dy - (target.y - platform.rect.y)) < 0.001
    )
      platform.motionTime += dt;
    platform.rect.x += dx;
    platform.rect.y += dy;
    platform.displacement = { x: dx, y: dy };
    for (const rider of riders) {
      rider.rect.x += dx;
      rider.rect.y += dy;
    }
  }
}

export function update_outcome(state: GameState): void {
  for (const hazard of state.hazards) {
    const definition = state.level.hazards.find((entry) => entry.id === hazard.id);
    if (!definition) continue;
    hazard.rect = motion_rect(definition.rect, definition.motion, state.time);
    const pulse = definition.pulse;
    hazard.active = !pulse || (state.time + (pulse.phase ?? 0)) % pulse.period < pulse.activeFor;
    if (definition.kind === "villain" && state.bossDefeated) hazard.active = false;
    for (const player of Object.values(state.players)) {
      if (
        hazard.active &&
        (definition.harms === "both" || definition.harms === player.id) &&
        overlaps(player.rect, hazard.rect)
      ) {
        state.status = "dead";
        state.deathReason = `${player.id === "isp" ? "Isp" : "Pac"} became a very surprised cell. Try teamwork!`;
      }
    }
  }
  for (const player of Object.values(state.players)) {
    if (player.rect.y > state.level.world.height + 80) {
      state.status = "dead";
      state.deathReason = "Gravity has filed a complaint. Both cells get another try!";
    }
    player.atExit = state.level.exits.some(
      (exit) => exit.player === player.id && overlaps(player.rect, exit.rect),
    );
    for (const collectible of state.collectibles) {
      const definition = state.level.collectibles.find((entry) => entry.id === collectible.id);
      if (
        definition &&
        (definition.owner === "any" || definition.owner === player.id) &&
        overlaps(player.rect, {
          x: definition.position.x - 9,
          y: definition.position.y - 9,
          width: 18,
          height: 18,
        })
      )
        collectible.collected = true;
    }
  }
  if (
    state.status === "playing" &&
    state.players.isp.atExit &&
    state.players.pac.atExit &&
    (!state.level.boss || state.bossDefeated)
  )
    state.status = "complete";
}
