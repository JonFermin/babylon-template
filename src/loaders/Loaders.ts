// glTF / GLB / OBJ loader stub. To enable, install @babylonjs/loaders:
//
//   npm i @babylonjs/loaders
//
// Then uncomment the imports/body below. The side-effect import is
// mandatory — without it SceneLoader silently falls back to a built-in
// stub and LoadAssetContainerAsync returns an empty container with no
// error. This is the #1 cause of "model won't load" black screens.
//
// For KTX2/Basis-compressed textures and Draco-compressed meshes, point
// Babylon at transcoders hosted on unpkg/cdn. The transcoders are small
// wasm modules and are only fetched when a compressed asset is loaded.

// import type { Scene } from "@babylonjs/core/scene.js";
// import { LoadAssetContainerAsync } from "@babylonjs/core/Loading/sceneLoader.js";
// import { KhronosTextureContainer2 } from "@babylonjs/core/Misc/khronosTextureContainer2.js";
// import { DracoCompression } from "@babylonjs/core/Meshes/Compression/dracoCompression.js";
// import "@babylonjs/loaders/glTF/index.js";
// // Uncomment the next line if you load .obj files:
// // import "@babylonjs/loaders/OBJ/index.js";
//
// // Optional: transcoder URLs for compressed assets. Set once at boot.
// // Babylon defaults work for most cases — override only if you self-host.
// // KhronosTextureContainer2.URLConfig.jsDecoderModule = "https://unpkg.com/@babylonjs/core@8/Misc/KhronosTextureContainer2/babylon.ktx2Decoder.js";
// // DracoCompression.Configuration.decoder.wasmUrl = "https://unpkg.com/@babylonjs/core@8/Meshes/Compression/draco_wasm_wrapper_gltf.js";
// // DracoCompression.Configuration.decoder.wasmBinaryUrl = "https://unpkg.com/@babylonjs/core@8/Meshes/Compression/draco_decoder_gltf.wasm";
//
// export async function loadGlb(scene: Scene, url: string) {
//   const container = await LoadAssetContainerAsync(url, scene);
//   // addAllToScene = add meshes, lights, skeletons, etc. to the scene.
//   // Use instantiateModelsToScene() instead if you want to spawn many copies.
//   container.addAllToScene();
//   return container;
// }

export {};
