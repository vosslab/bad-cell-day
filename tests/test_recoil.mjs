import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import { step_game } from "../src/physics.ts";

const FIXED_STEP = 1 / 120;

function scene(platforms, spawns = { isp: { x: 60, y: 164 }, pac: { x: 140, y: 164 } }) {
  return create_game_state({
    ...DEMO_LEVEL,
    spawns,
    platforms,
    exits: [],
  });
}

function settle(state) {
  step_game(state, create_empty_input(), FIXED_STEP);
}

test("a shared recoil platform launches the remaining hero, then buffers a fresh jump", () => {
  const recoil = scene([
    { id: "spring", kind: "recoil", rect: { x: 40, y: 200, width: 140, height: 20 } },
  ]);
  settle(recoil);
  assert.equal(recoil.players.isp.supportId, "spring");
  assert.equal(recoil.players.pac.supportId, "spring");

  const walkOff = create_empty_input();
  walkOff.pac.right = true;
  for (let index = 0; index < 90 && recoil.players.pac.supportId === "spring"; index += 1) {
    step_game(recoil, walkOff, FIXED_STEP);
  }

  const launched = recoil.players.isp;
  assert.notEqual(recoil.players.pac.supportId, "spring");
  assert.equal(launched.grounded, false);
  assert.equal(launched.supportId, undefined);
  assert.equal(launched.coyoteTime, 0);
  assert.ok(launched.velocity.y < 0);

  const ordinary = scene([
    { id: "floor", kind: "static", rect: { x: 40, y: 200, width: 140, height: 20 } },
  ]);
  settle(ordinary);
  const freshJump = create_empty_input();
  freshJump.isp.jump = true;
  step_game(recoil, freshJump, FIXED_STEP);
  step_game(ordinary, freshJump, FIXED_STEP);
  assert.ok(launched.velocity.y < ordinary.players.isp.velocity.y);
  assert.ok(launched.jumpBufferTime > 0);
});

test("a hero leaving recoil gets no launch when the partner stands elsewhere", () => {
  const state = scene(
    [
      { id: "spring", kind: "recoil", rect: { x: 40, y: 200, width: 140, height: 20 } },
      { id: "floor", kind: "static", rect: { x: 200, y: 200, width: 100, height: 20 } },
    ],
    { isp: { x: 60, y: 164 }, pac: { x: 220, y: 164 } },
  );
  settle(state);
  assert.equal(state.players.isp.supportId, "spring");
  assert.equal(state.players.pac.supportId, "floor");

  const walkOff = create_empty_input();
  walkOff.isp.right = true;
  for (let index = 0; index < 90 && state.players.isp.supportId === "spring"; index += 1) {
    step_game(state, walkOff, FIXED_STEP);
  }

  assert.notEqual(state.players.isp.supportId, "spring");
  assert.ok(state.players.isp.velocity.y >= 0);
  assert.equal(state.players.pac.supportId, "floor");
});
