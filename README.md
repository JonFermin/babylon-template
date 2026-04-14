# Babylon.js 3D Game Template

A minimal starter template for 3D game development with [Babylon.js](https://www.babylonjs.com/), [Vite](https://vitejs.dev/), and TypeScript.

This template is designed to be used with [Dyad](https://dyad.sh) as a starting point for AI-assisted 3D game projects.

## Tech Stack

- **Babylon.js 8** — WebGL/WebGPU 3D engine (auto-selects WebGPU when available)
- **Vite 6** — fast dev server and bundler
- **TypeScript 5.7**

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal.

You should see a rotating shaded cube casting a shadow on a ground plane.

- **Mouse drag** — orbit the camera
- **Mouse wheel** — zoom
- **Spacebar** — pause / resume cube rotation
- **I** — toggle the Babylon Inspector (requires `@babylonjs/inspector`, see Next steps)

## Scripts

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check and build for production
- `npm run build:dev` — build without type-checking (faster iteration)
- `npm run preview` — preview the production build locally

## Project Structure

```
src/
  main.ts        # entry point, engine bootstrap, error overlay, inspector toggle, HMR cleanup
  scenes/        # Babylon scenes (camera, lighting, environment setup)
  entities/      # game objects/classes (RotatingBox example)
  input/         # Input helper (held + edge-triggered keyboard state)
  ui/            # in-canvas HUD overlays via @babylonjs/gui (stub)
  utils/         # helpers (time/delta-seconds, etc.)
```

## AI Agent Rules

This repo includes [`AI_RULES.md`](./AI_RULES.md) — the canonical conventions for any AI assistant editing the project (side-effect imports, black-screen checklist, banned imports, etc.). `CLAUDE.md` and `AGENTS.md` re-export it so Claude Code, Codex, Cursor, and Aider all pick it up automatically.

## Next Steps

This starter is intentionally lean. Install only what you need:

```bash
# Load glTF / OBJ / STL models
npm i @babylonjs/loaders

# In-canvas 2D UI (HUD, menus)
npm i @babylonjs/gui

# Havok physics
npm i @babylonjs/havok

# Babylon Inspector (enables the I-key toggle in main.ts)
npm i -D @babylonjs/inspector
```

See `AI_RULES.md` for the conventions this template follows (ES module imports with `.js` extensions, scene/entity layout, etc.).

## Built With Dyad

This template is part of the official Dyad template collection. Fork it, remix it, or use it as a base for your own 3D games.
