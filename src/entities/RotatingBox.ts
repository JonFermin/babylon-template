import { Scene } from "@babylonjs/core/scene.js";
import { Vector3 } from "@babylonjs/core/Maths/math.vector.js";
import { Color3 } from "@babylonjs/core/Maths/math.color.js";
import { Mesh } from "@babylonjs/core/Meshes/mesh.js";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder.js";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial.js";
import { getDeltaSeconds } from "../utils/time.js";

export class RotatingBox {
  readonly mesh: Mesh;
  paused = false;
  // Radians per second.
  spinSpeed = 0.6;

  constructor(
    private readonly scene: Scene,
    position: Vector3,
  ) {
    this.mesh = MeshBuilder.CreateBox("box", { size: 1 }, scene);
    this.mesh.position.copyFrom(position);

    const material = new StandardMaterial("boxMat", scene);
    material.diffuseColor = new Color3(0.42, 0.39, 1);
    this.mesh.material = material;
  }

  update() {
    if (this.paused) return;
    const dt = getDeltaSeconds(this.scene);
    this.mesh.rotation.y += this.spinSpeed * dt;
    this.mesh.rotation.x += this.spinSpeed * 0.5 * dt;
  }
}
