# Tech Stack

- You are building a 3D application/game with Babylon.js 7 and TypeScript.
- Use the @babylonjs/core package (ES module imports), NOT the monolithic babylonjs package.
- Use Vite as the build tool.
- Always put source code in the src/ folder.
- Put scenes into src/scenes/
- Put game objects/entities into src/entities/ (create when needed)
- Put utility functions into src/utils/ (create when needed)
- The entry point is src/main.ts which creates the Engine and starts the render loop.

# Architecture

- Use a <canvas id="renderCanvas"> element in index.html. The Engine attaches to this canvas.
- Create the Engine with new Engine(canvas, true) for anti-aliasing.
- The render loop is engine.runRenderLoop(() => scene.render()).
- Handle window resize with window.addEventListener("resize", () => engine.resize()).
- Use ArcRotateCamera for orbital controls, FreeCamera for first-person, or FollowCamera for third-person.
- Use HemisphericLight for ambient lighting, DirectionalLight for sun-like lighting, PointLight for local sources.

# Code Style

- Do NOT use React, HTML DOM elements, or CSS for 3D rendering. Everything renders on the Babylon.js canvas.
- Do NOT install or use shadcn/ui, Tailwind CSS, or any UI component library.
- Import only what you need from @babylonjs/core for tree-shaking:
  - import { Engine } from "@babylonjs/core/Engines/engine";
  - import { Scene } from "@babylonjs/core/scene";
  - import { Vector3 } from "@babylonjs/core/Maths/math.vector";
  - import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
- Use TypeScript interfaces for game data structures.
- For 2D UI overlays (HUD, menus), install @babylonjs/gui and use AdvancedDynamicTexture, NOT HTML elements.

# Common Patterns

- Create meshes with MeshBuilder (CreateBox, CreateSphere, CreateGround, CreateCylinder, etc.).
- Apply materials with StandardMaterial or PBRMaterial.
- Load 3D models: install @babylonjs/loaders and use SceneLoader.ImportMeshAsync().
- Use scene.onBeforeRenderObservable for per-frame updates.
- Physics: install @babylonjs/havok for Havok physics if physics are needed.
- Shadows: create a ShadowGenerator attached to a DirectionalLight.
- Particle effects: use ParticleSystem from @babylonjs/core.
- Animations: use Animation class or scene.beginAnimation() for keyframe animations.
