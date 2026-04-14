import type { Scene } from "@babylonjs/core/scene.js";
import { KeyboardEventTypes } from "@babylonjs/core/Events/keyboardEvents.js";

// Held-key input helper. Use this instead of subscribing to keyboard
// observables per entity. `isDown` checks `event.code` values like
// "KeyW", "Space", "ArrowLeft" — NOT printable characters.
export class Input {
  private readonly held = new Set<string>();
  private readonly pressedThisFrame = new Set<string>();
  private readonly observer;

  constructor(private readonly scene: Scene) {
    this.observer = scene.onKeyboardObservable.add((info) => {
      const code = info.event.code;
      if (info.type === KeyboardEventTypes.KEYDOWN) {
        if (!this.held.has(code)) this.pressedThisFrame.add(code);
        this.held.add(code);
      } else if (info.type === KeyboardEventTypes.KEYUP) {
        this.held.delete(code);
      }
    });

    // pressedThisFrame is cleared after each frame so `wasPressed` is
    // edge-triggered.
    scene.onAfterRenderObservable.add(() => this.pressedThisFrame.clear());
  }

  isDown(code: string): boolean {
    return this.held.has(code);
  }

  wasPressed(code: string): boolean {
    return this.pressedThisFrame.has(code);
  }

  dispose() {
    this.scene.onKeyboardObservable.remove(this.observer);
    this.held.clear();
    this.pressedThisFrame.clear();
  }
}
