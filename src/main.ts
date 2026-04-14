import { EngineFactory } from "@babylonjs/core/Engines/engineFactory.js";
import "@babylonjs/core/Engines/webgpuEngine.js";
import type { Scene } from "@babylonjs/core/scene.js";
import { createMainScene } from "./scenes/MainScene.js";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

try {
  const engine = await EngineFactory.CreateAsync(canvas, {});
  const scene = createMainScene(engine, canvas);

  engine.runRenderLoop(() => scene.render());

  window.addEventListener("resize", () => engine.resize());

  setupInspectorToggle(scene);
} catch (err) {
  showFatalError(err);
}

function setupInspectorToggle(scene: Scene) {
  window.addEventListener("keydown", async (e) => {
    if (e.key !== "i" && e.key !== "I") return;
    try {
      await import("@babylonjs/core/Debug/debugLayer.js");
      // Build a non-literal specifier so Vite's import-analysis skips it.
      // Inspector is an optional dev dependency that may not be installed.
      const inspectorPkg = ["@babylonjs", "inspector"].join("/");
      await import(/* @vite-ignore */ inspectorPkg);
      if (scene.debugLayer.isVisible()) {
        scene.debugLayer.hide();
      } else {
        await scene.debugLayer.show({ overlay: true });
      }
    } catch {
      console.warn(
        "Babylon Inspector not installed. Run: npm i -D @babylonjs/inspector",
      );
    }
  });
}

function showFatalError(err: unknown) {
  console.error(err);
  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#1a1a2e;color:#fff;font-family:system-ui,sans-serif;padding:2rem;text-align:center;";
  overlay.innerHTML = `<div><h1 style="margin-bottom:1rem;">Failed to start Babylon engine</h1><pre style="white-space:pre-wrap;color:#ff8a8a;">${String(
    err,
  )}</pre></div>`;
  document.body.appendChild(overlay);
}
