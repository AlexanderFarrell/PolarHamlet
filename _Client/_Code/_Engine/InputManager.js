export class InputManager {
    constructor() {
        this.keyListeners = [];
        this.keys = [];
    }

    AddListener(keycode, listener) {
        if (this.keys[keycode] === null || this.keys[keycode] === undefined){
            this.keys[keycode]
        }
    }
}