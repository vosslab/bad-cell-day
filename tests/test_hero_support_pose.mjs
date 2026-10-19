import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { stands_on } from "../src/collisions.ts";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import { hero_support_pose } from "../src/hero_support_pose.ts";
import { step_game } from "../src/physics.ts";

function stacked(riderId = "pac", extra = {}) {
  const state = create_game_state({ ...DEMO_LEVEL, exits: [], ...extra });
  const rider = state.players[riderId];
  const supporter = state.players[riderId === "isp" ? "pac" : "isp"];
  rider.rect.x = supporter.rect.x;
  rider.rect.y = supporter.rect.y - rider.rect.height;
  step_game(state, create_empty_input(), 1 / 120);
  return state;
}

function poses(state) {
  return [hero_support_pose(state, "isp"), hero_support_pose(state, "pac")];
}

test("either hero can ride the partner without relying on supportId", () => {
  for (const riderId of ["isp", "pac"]) {
    const state = stacked(riderId);
    const expected = riderId === "isp" ? ["riding", "supporting"] : ["supporting", "riding"];
    assert.deepEqual(poses(state), expected);
    for (const supportId of [undefined, "unrelated_platform"]) {
      state.players.isp.supportId = supportId;
      state.players.pac.supportId = supportId;
      assert.deepEqual(poses(state), expected);
    }
    state.players.isp.supportId = "pac";
    state.players.pac.supportId = "isp";
    state.players[riderId].rect.x += state.players[riderId].rect.width * 2;
    assert.deepEqual(poses(state), ["solo", "solo"]);
  }
});

test("an actual tiny jump clears both poses while geometry still reports contact", () => {
  for (const riderId of ["isp", "pac"]) {
    const state = stacked(riderId);
    const rider = state.players[riderId];
    const supporter = state.players[riderId === "isp" ? "pac" : "isp"];
    const input = create_empty_input();
    input[riderId].jump = true;
    step_game(state, input, 0.0001);
    assert.equal(stands_on(rider.rect, supporter.rect), true);
    assert.equal(rider.grounded, false);
    assert.deepEqual(poses(state), ["solo", "solo"]);
  }
});

test("an airborne supporter retains the role while carrying a grounded rider", () => {
  const state = stacked();
  const input = create_empty_input();
  input.isp.jump = true;
  step_game(state, input, 1 / 120);
  assert.equal(state.players.isp.grounded, false);
  assert.equal(state.players.pac.grounded, true);
  assert.deepEqual(poses(state), ["supporting", "riding"]);
});

test("FLOAT support stays visible during ascent and a passenger ceiling stop", () => {
  const state = stacked("pac", { interference: [] });
  state.interference.players.isp.effect = { kind: "float", remaining: 4 };
  const startY = state.players.pac.rect.y;
  step_game(state, create_empty_input(), 0.1);
  assert.ok(state.players.pac.rect.y < startY);
  assert.equal(state.players.isp.grounded, false);
  assert.deepEqual(poses(state), ["supporting", "riding"]);

  const ceiling = { x: 0, y: state.players.pac.rect.y - 10, width: 400, height: 10 };
  state.level = {
    ...state.level,
    barriers: [{ id: "ceiling", blocks: "pac", rect: ceiling }],
  };
  state.barriers = [{ id: "ceiling", open: false }];
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.players.pac.rect.y, ceiling.y + ceiling.height);
  assert.equal(state.players.isp.grounded, false);
  assert.deepEqual(poses(state), ["supporting", "riding"]);
});

test("death, completion, or either hero reaching an exit clears both roles", () => {
  const state = stacked();
  for (const status of ["dead", "complete"]) {
    state.status = status;
    assert.deepEqual(poses(state), ["solo", "solo"]);
  }
  state.status = "playing";
  for (const id of ["isp", "pac"]) {
    state.players[id].atExit = true;
    assert.deepEqual(poses(state), ["solo", "solo"]);
    state.players[id].atExit = false;
  }
  assert.deepEqual(poses(state), ["supporting", "riding"]);
});

