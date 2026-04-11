import { EngineFactory } from "@babylonjs/core/Engines/engineFactory.js";
import "@babylonjs/core/Engines/webgpuEngine.js";
import { createMainScene } from "./scenes/MainScene";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = await EngineFactory.CreateAsync(canvas, {});

const scene = createMainScene(engine, canvas);

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});
