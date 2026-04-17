import type { Scene } from "@babylonjs/core/scene.js";
import { KeyboardEventTypes } from "@babylonjs/core/Events/keyboardEvents.js";
import { PointerEventTypes } from "@babylonjs/core/Events/pointerEvents.js";
// scene.onPointerObservable triggers picking internally; without this
// side-effect import Babylon logs "Ray needs to be imported before…".
import "@babylonjs/core/Culling/ray.js";

// Held-key + pointer input helper. Use this instead of subscribing to
// keyboard/pointer observables per entity. `isDown` checks `event.code`
// values like "KeyW", "Space", "ArrowLeft" — NOT printable characters.
export class Input {
  private readonly held = new Set<string>();
  private readonly pressedThisFrame = new Set<string>();
  private readonly keyboardObserver;
  private readonly pointerObserver;
  private readonly afterRenderObserver;

  pointerDown = false;
  pointerX = 0;
  pointerY = 0;
  private clickedThisFrame = false;

  constructor(private readonly scene: Scene) {
    this.keyboardObserver = scene.onKeyboardObservable.add((info) => {
      const code = info.event.code;
      if (info.type === KeyboardEventTypes.KEYDOWN) {
        if (!this.held.has(code)) this.pressedThisFrame.add(code);
        this.held.add(code);
      } else if (info.type === KeyboardEventTypes.KEYUP) {
        this.held.delete(code);
      }
    });

    this.pointerObserver = scene.onPointerObservable.add((info) => {
      this.pointerX = scene.pointerX;
      this.pointerY = scene.pointerY;
      if (info.type === PointerEventTypes.POINTERDOWN) {
        this.pointerDown = true;
        this.clickedThisFrame = true;
      } else if (info.type === PointerEventTypes.POINTERUP) {
        this.pointerDown = false;
      }
    });

    // edge-triggered: cleared after each frame so wasPressed/wasClicked
    // fire exactly once per input event.
    this.afterRenderObserver = scene.onAfterRenderObservable.add(() => {
      this.pressedThisFrame.clear();
      this.clickedThisFrame = false;
    });
  }

  isDown(code: string): boolean {
    return this.held.has(code);
  }

  wasPressed(code: string): boolean {
    return this.pressedThisFrame.has(code);
  }

  wasClicked(): boolean {
    return this.clickedThisFrame;
  }

  dispose() {
    this.scene.onKeyboardObservable.remove(this.keyboardObserver);
    this.scene.onPointerObservable.remove(this.pointerObserver);
    this.scene.onAfterRenderObservable.remove(this.afterRenderObserver);
    this.held.clear();
    this.pressedThisFrame.clear();
  }
}
