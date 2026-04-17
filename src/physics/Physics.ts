// Havok v2 physics stub. To enable:
//
//   npm i @babylonjs/havok
//
// Havok's wasm binary needs special handling under Vite. Add this to
// vite.config.ts:
//
//   export default defineConfig({
//     optimizeDeps: { exclude: ["@babylonjs/havok"] },
//     // ...existing config
//   });
//
// Without optimizeDeps.exclude, Vite tries to pre-bundle the wasm and the
// dev server fails with an MIME-type error. The `?url` import below gets
// the emitted asset path so Havok finds its wasm in both dev and prod.
//
// Then uncomment and call `enablePhysics(scene)` from your scene setup.
// `physicsEngineComponent.js` is mandatory — without it scene.enablePhysics
// silently no-ops and bodies never move.

// import type { Scene } from "@babylonjs/core/scene.js";
// import { Vector3 } from "@babylonjs/core/Maths/math.vector.js";
// import { HavokPlugin } from "@babylonjs/core/Physics/v2/Plugins/havokPlugin.js";
// import "@babylonjs/core/Physics/physicsEngineComponent.js";
// import HavokPhysics from "@babylonjs/havok";
// import havokWasmUrl from "@babylonjs/havok/lib/esm/HavokPhysics.wasm?url";
//
// export async function enablePhysics(scene: Scene) {
//   const havok = await HavokPhysics({
//     locateFile: () => havokWasmUrl,
//   });
//   const plugin = new HavokPlugin(true, havok);
//   scene.enablePhysics(new Vector3(0, -9.81, 0), plugin);
//   return plugin;
// }
//
// // Attach a PhysicsAggregate to a mesh to make it dynamic:
// //
// //   import { PhysicsAggregate } from "@babylonjs/core/Physics/v2/physicsAggregate.js";
// //   import { PhysicsShapeType } from "@babylonjs/core/Physics/v2/IPhysicsEnginePlugin.js";
// //   new PhysicsAggregate(box.mesh, PhysicsShapeType.BOX, { mass: 1 }, scene);

export {};
