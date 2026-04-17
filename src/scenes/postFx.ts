// Post-processing stub (default pipeline bloom). No package install
// required — the default pipeline ships in @babylonjs/core.
//
// The side-effect import is mandatory. Without it the pipeline manager
// never registers its scene component, the pipeline attaches but nothing
// renders, and the bug is silent.
//
// To enable, uncomment and call `enableBloom(scene, camera)` after the
// camera is created.

// import type { Scene } from "@babylonjs/core/scene.js";
// import type { Camera } from "@babylonjs/core/Cameras/camera.js";
// import { DefaultRenderingPipeline } from "@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/defaultRenderingPipeline.js";
// import "@babylonjs/core/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.js";
//
// export function enableBloom(scene: Scene, camera: Camera) {
//   const pipeline = new DefaultRenderingPipeline("default", true, scene, [camera]);
//   pipeline.bloomEnabled = true;
//   pipeline.bloomThreshold = 0.8;
//   pipeline.bloomWeight = 0.3;
//   pipeline.bloomKernel = 64;
//   pipeline.bloomScale = 0.5;
//   pipeline.fxaaEnabled = true;
//   return pipeline;
// }
//
// // Cheaper alternative for glowing emissive materials (no pipeline overhead):
// //
// //   import { GlowLayer } from "@babylonjs/core/Layers/glowLayer.js";
// //   const glow = new GlowLayer("glow", scene);
// //   glow.intensity = 0.6;

export {};
