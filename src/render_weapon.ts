import { BUBBLE_BARREL_LENGTH } from "./weapon_pose";
import type { WeaponPose } from "./types/interference";

export function weapon_body_lean(pose: WeaponPose): number {
  if (pose.action === "windup") return -pose.facing * 0.055 * pose.progress;
  if (pose.action === "release" || pose.action === "outgoing") return pose.facing * 0.045;
  if (pose.action === "recoil") return -pose.facing * 0.055;
  if (pose.action === "catch") return -pose.facing * 0.04;
  if (pose.action === "interrupted" || pose.action === "defeated") return -pose.facing * 0.025;
  return 0;
}

export function draw_boomerang(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
): void {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.lineJoin = "round";
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(-11, -7);
  context.lineTo(0, 5);
  context.lineTo(11, -7);
  context.strokeStyle = "#142b42";
  context.lineWidth = 9;
  context.stroke();
  context.strokeStyle = "#ffe697";
  context.lineWidth = 5;
  context.stroke();
  context.beginPath();
  context.moveTo(-7, -3);
  context.lineTo(-3, 1);
  context.moveTo(3, 1);
  context.lineTo(7, -3);
  context.strokeStyle = "#b46643";
  context.lineWidth = 2;
  context.stroke();
  context.restore();
}

// The only moving limb replaces the extracted molecular branch. All transforms
// are derived from simulation action; the release/catch hand stays authoritative.
export function draw_weapon(context: CanvasRenderingContext2D, pose: WeaponPose): void {
  const gem = pose.kind === "bubble";
  const inactive = pose.action === "waiting" || pose.action === "defeated";
  const lean = weapon_body_lean(pose);
  const shoulder = {
    x: pose.shoulder.x + (pose.shoulder.y - pose.actorPosition.y) * lean,
    y: pose.shoulder.y,
  };
  let handX = pose.grip.x;
  let handY = pose.grip.y;
  let angle = pose.aimAngle;
  if (pose.action === "windup") {
    // A short gun raise and broad throwing windup both finish at the launch grip.
    const retreat = 1 - pose.progress;
    handX -= pose.facing * retreat * (gem ? 8 : 23);
    handY -= retreat * (gem ? -9 : 22);
    angle += pose.facing * retreat * (gem ? 0.65 : -1.5);
  } else if (
    pose.action === "ready" ||
    pose.action === "interrupted" ||
    inactive ||
    pose.action === "reload"
  ) {
    const lowered = pose.action === "reload" ? 1 - pose.progress : 1;
    handY += lowered * 12;
    angle += pose.facing * lowered * 0.65;
  } else if (pose.action === "recoil") {
    handX -= Math.cos(angle) * 5;
    handY -= Math.sin(angle) * 5;
  } else if (pose.action === "outgoing" && !gem) {
    handX += pose.facing * 5;
    handY += 5;
  }
  const bend = gem ? 7 : 11;
  const elbowX = (shoulder.x + handX) / 2 - pose.facing * bend;
  const elbowY = (shoulder.y + handY) / 2 + bend;
  context.save();
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();
  context.moveTo(shoulder.x, shoulder.y);
  context.lineTo(elbowX, elbowY);
  context.lineTo(handX, handY);
  context.strokeStyle = "#142b42";
  context.lineWidth = 8;
  context.stroke();
  context.strokeStyle = gem ? "#ad7ef1" : "#82cb60";
  context.lineWidth = 4;
  context.stroke();
  if (gem) {
    context.save();
    context.translate(handX, handY);
    context.rotate(angle);
    const barrel = Math.hypot(
      pose.releaseAnchor.x - pose.grip.x,
      pose.releaseAnchor.y - pose.grip.y,
    );
    context.scale(barrel / BUBBLE_BARREL_LENGTH, 1);
    // The barrel tip at x=20 is the shared release anchor in the firing pose.
    context.fillStyle = inactive ? "#696080" : "#8056a3";
    context.strokeStyle = "#ecd4ff";
    context.lineWidth = 2;
    context.beginPath();
    context.roundRect(-7, -7, 26, 14, 4);
    context.fill();
    context.stroke();
    context.fillStyle = "#d5b9ff";
    context.fillRect(-3, 4, 7, 12);
    context.beginPath();
    context.ellipse(20, 0, 3, 7, 0, 0, Math.PI * 2);
    context.strokeStyle = "#d9f6ff";
    context.stroke();
    context.beginPath();
    context.arc(1, -10, 5, 0, Math.PI * 2);
    context.fillStyle = "#b9eaff";
    context.fill();
    if (pose.action === "release") {
      context.beginPath();
      context.arc(25, 0, 9, 0, Math.PI * 2);
      context.strokeStyle = "#e1f9ff";
      context.stroke();
    }
    context.restore();
  } else if (pose.holdingWeapon) {
    draw_boomerang(context, handX, handY, angle - Math.PI / 2);
  }
  context.beginPath();
  context.arc(handX, handY, 4.5, 0, Math.PI * 2);
  context.fillStyle = gem ? "#b8e7ce" : "#b9e69b";
  context.fill();
  context.strokeStyle = "#142b42";
  context.lineWidth = 2;
  context.stroke();
  context.restore();
}
