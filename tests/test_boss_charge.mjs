import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import { update_outcome, update_pads } from "../src/mechanisms.ts";
import { step_game } from "../src/physics.ts";

function arena(chargeSeconds = 0.5, extra = {}) {
  return create_game_state({
    ...DEMO_LEVEL,
    spawns: { isp: { x: 60, y: 164 }, pac: { x: 180, y: 164 } },
    platforms: [{ id: "floor", kind: "static", rect: { x: 0, y: 200, width: 1100, height: 50 } }],
    pads: [
      { id: "isp_target", accepts: "isp", rect: { x: 50, y: 194, width: 50, height: 6 } },
      { id: "pac_target", accepts: "pac", rect: { x: 170, y: 194, width: 50, height: 6 } },
    ].map((pad) => ({ ...pad, activation: "hold", label: pad.id, minWeight: 1, effects: [] })),
    boss: {
      name: "Synthetic boss",
      targetPadIds: ["isp_target", "pac_target"],
      rect: { x: 800, y: 100, width: 20, height: 20 },
      ...(chargeSeconds === null ? {} : { chargeSeconds }),
    },
    exits: [],
    ...extra,
  });
}

const input = create_empty_input();

test("both assigned players must continuously hold targets; interruption resets charge", () => {
  const state = arena();
  state.players.pac.rect.x = 300;
  step_game(state, input, 0.2);
  assert.equal(state.bossCharge, 0);
  state.players.pac.rect.x = 180;
  step_game(state, input, 0.2);
  assert.ok(Math.abs(state.bossCharge - 0.2) < 1e-12);
  assert.equal(state.bossDefeated, false);
  state.players.isp.rect.x = 300;
  step_game(state, input, 1 / 120);
  assert.equal(state.bossCharge, 0);
  state.players.isp.rect.x = 60;
  step_game(state, input, 0.3);
  assert.equal(state.bossDefeated, false);
  step_game(state, input, 0.2);
  assert.equal(state.bossDefeated, true);
  assert.equal(state.bossCharge, 0.5);
  state.players.isp.rect.x = 300;
  step_game(state, input, 0.2);
  assert.equal(state.bossDefeated, true);
  assert.equal(state.bossCharge, 0.5);
});

test("charge counts elapsed physics seconds once regardless of caller timestep", () => {
  const a = arena();
  const b = arena();
  step_game(a, input, 0.25);
  for (let index = 0; index < 25; index += 1) step_game(b, input, 0.01);
  assert.ok(Math.abs(a.bossCharge - 0.25) < 1e-12);
  assert.ok(Math.abs(a.bossCharge - b.bossCharge) < 1e-12);
  assert.equal(a.bossDefeated, false);
  assert.equal(b.bossDefeated, false);
  step_game(a, input, 0.25);
  step_game(b, input, 0.25);
  assert.equal(a.bossDefeated, true);
  assert.equal(b.bossDefeated, true);
});

test("pad samples and zero-time outcome checks never add charge", () => {
  const state = arena();
  update_pads(state);
  update_pads(state);
  update_outcome(state);
  assert.equal(state.bossCharge, 0);
  assert.equal(state.bossDefeated, false);
  step_game(state, input, 0.2);
  state.players.pac.rect.x = 300;
  update_pads(state);
  update_outcome(state);
  assert.equal(state.bossCharge, 0);
});

test("a lethal threshold step cannot defeat the boss or complete the room", () => {
  const state = arena(1 / 120, {
    hazards: [
      { id: "fatal", kind: "spikes", harms: "isp", rect: { x: 60, y: 164, width: 20, height: 30 } },
    ],
    exits: [
      { player: "isp", rect: { x: 50, y: 150, width: 50, height: 50 } },
      { player: "pac", rect: { x: 170, y: 150, width: 50, height: 50 } },
    ],
  });
  step_game(state, input, 1 / 120);
  assert.equal(state.status, "dead");
  assert.equal(state.bossCharge, 0);
  assert.equal(state.bossDefeated, false);
  step_game(state, input, 1);
  update_outcome(state, 1);
  assert.equal(state.bossCharge, 0);
  assert.equal(state.bossDefeated, false);
});

test("retry starts with no charge or defeat", () => {
  const state = arena();
  step_game(state, input, 0.5);
  assert.equal(state.bossDefeated, true);
  const retry = create_game_state(state.level);
  assert.equal(retry.bossCharge, 0);
  assert.equal(retry.bossDefeated, false);
  assert.equal(retry.status, "playing");
});

test("shutdown unlocks simultaneous exits on the threshold step", () => {
  const state = arena(0.5, {
    exits: [
      { player: "isp", rect: { x: 50, y: 150, width: 50, height: 50 } },
      { player: "pac", rect: { x: 170, y: 150, width: 50, height: 50 } },
    ],
  });
  step_game(state, input, 0.25);
  assert.equal(state.status, "playing");
  step_game(state, input, 0.25);
  assert.equal(state.bossDefeated, true);
  assert.equal(state.status, "complete");
});

test("bosses without an authored duration retain immediate latched defeat", () => {
  const state = arena(null);
  update_pads(state);
  assert.equal(state.bossDefeated, true);
  state.players.pac.rect.x = 300;
  update_pads(state);
  assert.equal(state.bossDefeated, true);
});
