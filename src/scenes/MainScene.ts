import { Scene } from "@babylonjs/core/scene.js";
import { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine.js";
import { Vector3 } from "@babylonjs/core/Maths/math.vector.js";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color.js";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera.js";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight.js";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight.js";
import { ShadowGenerator } from "@babylonjs/core/Lights/Shadows/shadowGenerator.js";
import { Mesh } from "@babylonjs/core/Meshes/mesh.js";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder.js";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial.js";
import {
  KeyboardEventTypes,
  KeyboardInfo,
} from "@babylonjs/core/Events/keyboardEvents.js";
import { RotatingBox } from "../entities/RotatingBox.js";

export function createMainScene(
  engine: AbstractEngine,
  canvas: HTMLCanvasElement,
) {
  const scene = new Scene(engine);
  scene.clearColor = new Color4(0.1, 0.1, 0.18, 1);

  setupCamera(scene, canvas);
  const directional = setupLighting(scene);
  const ground = setupEnvironment(scene);

  const box = new RotatingBox(scene, new Vector3(0, 1, 0));
  setupShadows(directional, [box.mesh], ground);
  setupInput(scene, box);

  scene.onBeforeRenderObservable.add(() => box.update());

  return scene;
}

function setupCamera(scene: Scene, canvas: HTMLCanvasElement) {
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 4,
    Math.PI / 3,
    8,
    Vector3.Zero(),
    scene,
  );
  camera.attachControl(canvas, true);
  return camera;
}

function setupLighting(scene: Scene) {
  const ambient = new HemisphericLight("ambient", new Vector3(0, 1, 0), scene);
  ambient.intensity = 0.6;

  const directional = new DirectionalLight(
    "sun",
    new Vector3(-0.5, -1, -0.5),
    scene,
  );
  directional.position = new Vector3(5, 10, 5);
  directional.intensity = 0.8;

  return directional;
}

function setupEnvironment(scene: Scene) {
  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 6, height: 6 },
    scene,
  );
  const groundMat = new StandardMaterial("groundMat", scene);
  groundMat.diffuseColor = new Color3(0.2, 0.2, 0.3);
  ground.material = groundMat;
  ground.receiveShadows = true;
  return ground;
}

function setupShadows(light: DirectionalLight, casters: Mesh[], _ground: Mesh) {
  const shadowGenerator = new ShadowGenerator(1024, light);
  shadowGenerator.useBlurExponentialShadowMap = true;
  shadowGenerator.blurKernel = 32;
  for (const mesh of casters) {
    shadowGenerator.addShadowCaster(mesh);
  }
  return shadowGenerator;
}

function setupInput(scene: Scene, box: RotatingBox) {
  scene.onKeyboardObservable.add((info: KeyboardInfo) => {
    if (info.type !== KeyboardEventTypes.KEYDOWN) return;
    if (info.event.code === "Space") {
      box.paused = !box.paused;
    }
  });
}
