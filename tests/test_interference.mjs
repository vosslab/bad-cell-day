import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import {
  EFFECT_DURATION,
  interference_attack_enabled,
  interference_muzzle,
  step_interference,
} from "../src/interference.ts";
import { TRIAL_LEVEL } from "../src/interference_trial.ts";
import { step_game } from "../src/physics.ts";
import { overlaps } from "../src/collisions.ts";

function scene(kind, player = "isp", extra = {}) {
  const attack = TRIAL_LEVEL.interference.find((entry) => entry.kind === kind);
  return create_game_state({
    ...DEMO_LEVEL,
    exits: [],
    villainScene: TRIAL_LEVEL.villainScene,
    interference: [{ ...attack, cooldown: 0.1, windup: 0.2 }],
    spawns: {
      isp: { x: player === "isp" ? (kind === "bubble" ? 300 : 750) : 50, y: 514 },
      pac: { x: player === "pac" ? (kind === "bubble" ? 300 : 750) : 50, y: 514 },
    },
    ...extra,
  });
}

function until(state, predicate, seconds = 8, input = create_empty_input()) {
  for (let tick = 0; tick < seconds * 120; tick += 1) {
    step_game(state, input, 1 / 120);
    if (predicate()) return;
  }
  assert.fail("Expected simulation condition was not reached");
}

function controlled_scene(kind, player = "isp") {
  const state = scene(kind, player);
  state.level = {
    ...state.level,
    interference: state.level.interference.map((attack) => ({
      ...attack,
      enabledByPadId: "power",
      disabledByPadIds: ["steady", "rescue"],
    })),
  };
  state.pads = ["power", "steady", "rescue"].map((id) => ({
    id,
    rect: { x: 0, y: 0, width: 20, height: 10 },
    occupiedBy: [],
    weight: 0,
    active: id === "power",
    latched: false,
  }));
  return state;
}

test("pad attack eligibility honors power, either suppressor, and boss defeat", () => {
  const state = controlled_scene("bubble");
  const attack = state.level.interference[0];
  const [power, steady, rescue] = state.pads;
  assert.equal(interference_attack_enabled(state, attack), true);
  power.active = false;
  assert.equal(interference_attack_enabled(state, attack), false);
  power.active = true;
  for (const pad of [steady, rescue]) {
    pad.active = true;
    assert.equal(interference_attack_enabled(state, attack), false);
    pad.active = false;
  }
  state.bossDefeated = true;
  assert.equal(interference_attack_enabled(state, attack), false);
  const trial = scene("bubble");
  assert.equal(interference_attack_enabled(trial, trial.level.interference[0]), true);
  trial.bossDefeated = true;
  assert.equal(interference_attack_enabled(trial, trial.level.interference[0]), false);
});

test("cutting power cancels windup and flight; restoring it gives a full cooldown and warning", () => {
  for (const kind of ["bubble", "boomerang"]) {
    const state = controlled_scene(kind);
    const attack = state.level.interference[0];
    const attacker = state.interference.attackers[0];
    const power = state.pads[0];
    step_interference(state, attack.cooldown);
    assert.equal(attacker.phase, "windup");
    step_interference(state, attack.windup / 2);
    power.active = false;
    step_interference(state, 0.01);
    assert.equal(attacker.phase, "cooldown");
    assert.equal(attacker.remaining, attack.cooldown);
    step_interference(state, 1);
    assert.equal(attacker.remaining, attack.cooldown);
    assert.equal(state.interference.projectiles.length, 0);
    power.active = true;
    step_interference(state, attack.cooldown - 0.01);
    assert.equal(attacker.phase, "cooldown");
    step_interference(state, 0.02);
    assert.equal(attacker.phase, "windup");
    assert.equal(attacker.remaining, attack.windup);
    step_interference(state, attack.windup - 0.01);
    assert.equal(state.interference.projectiles.length, 0);
    step_interference(state, 0.02);
    assert.equal(state.interference.projectiles.length, 1);
    power.active = false;
    step_interference(state, 0.01);
    assert.equal(state.interference.projectiles.length, 0);
    assert.equal(attacker.remaining, attack.cooldown);
  }
});

test("suppressing an attack preserves a hit and immunity while both recover normally", () => {
  for (const [kind, id, expected] of [
    ["bubble", "isp", "float"],
    ["bubble", "pac", "sticky"],
    ["boomerang", "isp", "dizzy"],
    ["boomerang", "pac", "shove"],
  ]) {
    const state = controlled_scene(kind, id);
    const affected = state.interference.players[id];
    for (let tick = 0; tick < 8 * 120 && affected.effect.kind === "none"; tick += 1)
      step_interference(state, 1 / 120);
    assert.equal(affected.effect.kind, expected);
    const remaining = affected.effect.remaining;
    const immunity = affected.immunityRemaining;
    state.pads[2].active = true;
    step_interference(state, 0.01);
    assert.equal(state.interference.projectiles.length, 0);
    assert.equal(affected.effect.kind, expected);
    assert.ok(Math.abs(affected.effect.remaining - (remaining - 0.01)) < 1e-9);
    assert.ok(Math.abs(affected.immunityRemaining - (immunity - 0.01)) < 1e-9);
    step_interference(state, remaining);
    assert.equal(affected.effect.kind, "none");
    assert.ok(affected.immunityRemaining > 0);
    step_interference(state, immunity);
    assert.equal(affected.immunityRemaining, 0);
  }
});

test("warning precedes a deterministic fixed-path shot and recreation clears transient state", () => {
  const a = scene("bubble");
  const b = scene("bubble");
  for (const state of [a, b]) step_game(state, create_empty_input(), 0.15);
  assert.deepEqual(a, b);
  assert.equal(a.interference.attackers[0].phase, "windup");
  assert.equal(a.interference.projectiles.length, 0);
  for (const state of [a, b]) step_game(state, create_empty_input(), 0.2);
  assert.deepEqual(a, b);
  const projectile = a.interference.projectiles[0];
  assert.deepEqual(projectile.origin, interference_muzzle(a.level, a.level.interference[0]));
  const target = structuredClone(projectile.target);
  a.players.isp.rect.x += 50;
  step_game(a, create_empty_input(), 0.1);
  assert.deepEqual(projectile.target, target);
  assert.deepEqual(create_game_state(a.level), scene("bubble"));
  assert.equal(create_game_state(DEMO_LEVEL).interference, undefined);
});

test("both villains produce distinct short reactions on both heroes and restore control", () => {
  for (const [kind, id, expected] of [
    ["bubble", "isp", "float"],
    ["bubble", "pac", "sticky"],
    ["boomerang", "isp", "dizzy"],
    ["boomerang", "pac", "shove"],
  ]) {
    const state = scene(kind, id);
    until(state, () => state.interference.players[id].effect.kind === expected);
    const affected = state.interference.players[id];
    const remaining = affected.effect.remaining;
    assert.ok(remaining <= EFFECT_DURATION[expected]);
    assert.ok(affected.immunityRemaining > remaining);
    const x = state.players[id].rect.x;
    const y = state.players[id].rect.y;
    const input = create_empty_input();
    input[id].right = true;
    input[id].jump = true;
    step_game(state, input, 0.1);
    if (expected === "float") assert.ok(state.players[id].rect.y < y);
    if (expected === "sticky") {
      assert.equal(state.players[id].rect.x, x);
      assert.equal(state.players[id].rect.y, y);
    }
    if (expected === "dizzy")
      assert.ok(state.players[id].rect.x > x && state.players[id].rect.x - x < 21);
    if (expected === "shove") assert.ok(state.players[id].rect.x - x > 21);
    // Freeze new launches so this assertion measures recovery from this hit.
    state.interference.attackers[0].remaining = 100;
    step_game(state, create_empty_input(), EFFECT_DURATION[expected] + 0.1);
    assert.equal(affected.effect.kind, "none");
  }
});

test("recovery immunity prevents bubble refresh and a boomerang hits each hero only once per flight", () => {
  const bubble = scene("bubble");
  until(bubble, () => bubble.interference.players.isp.effect.kind === "float");
  const affected = bubble.interference.players.isp;
  const before = affected.effect.remaining;
  const player = bubble.players.isp;
  const point = { x: player.rect.x + 15, y: player.rect.y + 18 };
  bubble.interference.projectiles.push({
    attackId: bubble.level.interference[0].id,
    kind: "bubble",
    origin: point,
    target: { ...point },
    position: { ...point },
    phase: "outgoing",
    hitPlayers: [],
  });
  step_game(bubble, create_empty_input(), 0.01);
  assert.ok(affected.effect.remaining < before);
  assert.equal(bubble.interference.projectiles.length, 0);
  const boom = scene("boomerang");
  until(boom, () => boom.interference.players.isp.effect.kind === "dizzy");
  const flight = boom.interference.projectiles[0];
  until(boom, () => flight.phase === "returning");
  assert.equal(boom.interference.players.isp.effect.kind, "none");
  until(boom, () => !boom.interference.projectiles.includes(flight));
  assert.deepEqual(flight.hitPlayers, ["isp"]);
  assert.equal(boom.interference.players.isp.effect.kind, "none");
});

test("sticky input cannot jump or push a crate but gravity and later control still work", () => {
  const state = scene("bubble", "pac", {
    crates: [{ id: "box", heavy: false, rect: { x: 330, y: 514, width: 30, height: 36 } }],
  });
  state.interference.players.pac.effect = { kind: "sticky", remaining: 0.6 };
  const input = create_empty_input();
  input.pac.right = true;
  input.pac.jump = true;
  step_game(state, input, 0.3);
  assert.equal(state.crates[0].rect.x, 330);
  assert.equal(state.players.pac.rect.x, 300);
  assert.equal(state.players.pac.rect.y, 514);
  state.players.pac.rect.y = 450;
  step_game(state, input, 0.1);
  assert.ok(state.players.pac.rect.y > 450);
  step_game(state, input, 0.4);
  assert.ok(state.crates[0].rect.x > 330);
});

test("shove is clipped by a wall and a blocked partner, while float respects ceilings", () => {
  const state = scene("boomerang", "pac", {
    barriers: [{ id: "wall", blocks: "both", rect: { x: 820, y: 300, width: 20, height: 250 } }],
  });
  state.players.isp.rect.x = 790;
  state.interference.players.pac.effect = {
    kind: "shove",
    remaining: 0.4,
    velocity: { x: 260, y: 0 },
  };
  const input = create_empty_input();
  input.pac.right = true;
  step_game(state, input, 0.3);
  assert.ok(state.players.isp.rect.x + 30 <= 820);
  assert.ok(state.players.pac.rect.x + 30 <= state.players.isp.rect.x);
  assert.equal(overlaps(state.players.isp.rect, state.players.pac.rect), false);
  const floating = scene("bubble");
  floating.players.isp.rect.y = 5;
  floating.interference.players.isp.effect = { kind: "float", remaining: 1.4 };
  step_game(floating, create_empty_input(), 0.2);
  assert.equal(floating.players.isp.rect.y, 0);
});
