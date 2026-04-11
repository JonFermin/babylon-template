import { Scene } from "@babylonjs/core/scene.js";
import { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine.js";
import { Vector3 } from "@babylonjs/core/Maths/math.vector.js";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color.js";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera.js";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight.js";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder.js";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial.js";

export function createMainScene(engine: AbstractEngine, canvas: HTMLCanvasElement) {
  const scene = new Scene(engine);
  scene.clearColor = new Color4(0.1, 0.1, 0.18, 1);

  // Camera
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 4,
    Math.PI / 3,
    8,
    Vector3.Zero(),
    scene,
  );
  camera.attachControl(canvas, true);

  // Light
  new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Ground
  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 6, height: 6 },
    scene,
  );
  const groundMat = new StandardMaterial("groundMat", scene);
  groundMat.diffuseColor = new Color3(0.2, 0.2, 0.3);
  ground.material = groundMat;

  // Rotating box
  const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
  box.position.y = 1;
  const boxMat = new StandardMaterial("boxMat", scene);
  boxMat.diffuseColor = new Color3(0.42, 0.39, 1);
  box.material = boxMat;

  scene.onBeforeRenderObservable.add(() => {
    box.rotation.y += 0.01;
    box.rotation.x += 0.005;
  });

  return scene;
}
