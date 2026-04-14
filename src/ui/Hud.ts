// 2D HUD overlay stub. To enable, install @babylonjs/gui:
//
//   npm i @babylonjs/gui
//
// Then uncomment the imports/body below and call `createHud(scene)` from
// your scene setup. Do NOT use HTML/CSS overlays — keep UI on the canvas
// so it scales with the renderer and works in fullscreen/WebXR.

// import type { Scene } from "@babylonjs/core/scene.js";
// import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture.js";
// import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock.js";
//
// export function createHud(scene: Scene) {
//   const ui = AdvancedDynamicTexture.CreateFullscreenUI("hud", true, scene);
//
//   const label = new TextBlock("score", "Score: 0");
//   label.color = "white";
//   label.fontSize = 24;
//   label.top = "16px";
//   label.left = "16px";
//   label.textHorizontalAlignment = 0; // LEFT
//   label.textVerticalAlignment = 0; // TOP
//   ui.addControl(label);
//
//   return { ui, label };
// }

export {};
