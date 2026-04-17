// Babylon 8 Audio Engine v2 stub. No package install required — v2 ships
// in @babylonjs/core. Ignore old tutorials referencing `new Sound()` or
// Engine.audioEngine; those are v1 and still present but deprecated.
//
// Key caveat: browsers block audio until a user gesture (click/tap/key).
// Call `engine.unlockAsync()` from inside a gesture handler, NOT at boot,
// otherwise playback silently does nothing.
//
// The side-effect import (webAudioEngine.js) registers the WebAudio
// backend. Without it CreateAudioEngineAsync throws or returns a stub.

// import type { Scene } from "@babylonjs/core/scene.js";
// import {
//   CreateAudioEngineAsync,
// } from "@babylonjs/core/AudioV2/webAudio/webAudioEngine.js";
// import { CreateSoundAsync } from "@babylonjs/core/AudioV2/abstractAudio/audioEngineV2.js";
//
// export async function initAudio(_scene: Scene) {
//   const audio = await CreateAudioEngineAsync();
//
//   // Load one sound up front; use audio.createSoundAsync or CreateSoundAsync
//   // for additional sources. Pass an ArrayBuffer to avoid HTTP on replay.
//   const blip = await CreateSoundAsync("blip", "/assets/blip.ogg", undefined, audio);
//
//   // Unlock on first user interaction. Pointerdown covers mouse + touch.
//   const unlock = async () => {
//     window.removeEventListener("pointerdown", unlock);
//     window.removeEventListener("keydown", unlock);
//     await audio.unlockAsync();
//   };
//   window.addEventListener("pointerdown", unlock, { once: true });
//   window.addEventListener("keydown", unlock, { once: true });
//
//   return { audio, blip };
// }

export {};
