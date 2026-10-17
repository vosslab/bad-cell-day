import assert from "node:assert/strict";
import test from "node:test";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import { step_interference } from "../src/interference.ts";

test("Cana gives pushable Gem one shove per boomerang flight, then can shove on a new flight", () => {
  const level = {
    ...DEMO_LEVEL,
    villainScene: {
      pushable: true,
      gem: { position: { x: 400, y: 350 }, opening: "", ending: "" },
      cana: { position: { x: 100, y: 350 }, opening: "", ending: "" },
      schemes: [],
    },
    interference: [
      {
        id: "test_boomerang",
        kind: "boomerang",
        target: { x: 400, y: 328 },
        windup: 0.1,
        cooldown: 0.1,
        speed: 400,
        radius: 12,
      },
    ],
  };
  const state = create_game_state(level);
  const gem = state.villainBodies.find((body) => body.villain === "gem");
  assert.ok(gem);
  gem.rect = { x: 300, y: 300, width: 48, height: 56 };
  const [attack] = level.interference;

  const addFlight = (phase, origin, target, position) => {
    state.interference.projectiles.push({
      attackId: attack.id,
      kind: "boomerang",
      origin,
      target,
      position,
      phase,
      hitPlayers: [],
      hitPushableGem: false,
    });
    return state.interference.projectiles.at(-1);
  };

  const touchesGem = (position) => {
    const nearestX = Math.max(gem.rect.x, Math.min(gem.rect.x + gem.rect.width, position.x));
    const nearestY = Math.max(gem.rect.y, Math.min(gem.rect.y + gem.rect.height, position.y));
    return Math.hypot(nearestX - position.x, nearestY - position.y) <= attack.radius;
  };

  const flight = addFlight("outgoing", { x: 250, y: 328 }, { x: 400, y: 328 }, { x: 250, y: 328 });
  let contactedOutbound = false;
  let contactedReturning = false;
  let firstResponse = 0;
  let steps = 0;
  while (state.interference.projectiles.includes(flight) && steps < 1000) {
    step_interference(state, 1 / 120);
    steps += 1;
    if (firstResponse === 0 && gem.velocity.x !== 0) firstResponse = gem.velocity.x;
    if (touchesGem(flight.position)) {
      if (flight.phase === "outgoing") contactedOutbound = true;
      else contactedReturning = true;
    }
  }

  assert.equal(state.interference.projectiles.includes(flight), false);
  assert.ok(firstResponse > 0);
  assert.equal(contactedOutbound, true);
  assert.equal(contactedReturning, true);
  assert.equal(gem.velocity.x, firstResponse);

  state.interference.projectiles = [];
  gem.velocity.x = 0;
  addFlight("outgoing", { x: 400, y: 328 }, { x: 250, y: 328 }, { x: 400, y: 328 });
  for (let i = 0; i < 30 && gem.velocity.x === 0; i += 1) step_interference(state, 1 / 120);
  assert.ok(gem.velocity.x < 0);
});
