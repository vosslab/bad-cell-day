import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { pad_zone, sample_input } from "../src/touch_input.ts";

test("the six pad zones combine direction with held jump and accept captured moves outside", () => {
  for (let row = 0; row < 2; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      assert.deepEqual(pad_zone(column * 44 + 22, row * 44 + 22, 132, 88), {
        left: column === 0,
        right: column === 2,
        jump: row === 0,
      });
    }
  }
  assert.deepEqual(pad_zone(-20, 120, 132, 88), { left: true, right: false, jump: false });
});

test("releasing either input source retains the other and each hero stays independent", () => {
  const keyboard = create_empty_input();
  const touch = create_empty_input();
  keyboard.isp.right = true;
  touch.isp.right = true;
  touch.pac.jump = true;
  touch.isp.right = false;
  assert.equal(sample_input(keyboard, touch).isp.right, true);
  touch.isp.right = true;
  keyboard.isp.right = false;
  assert.equal(sample_input(keyboard, touch).isp.right, true);
  assert.equal(sample_input(keyboard, touch).pac.jump, true);
  assert.equal(keyboard.pac.jump, false);
});
