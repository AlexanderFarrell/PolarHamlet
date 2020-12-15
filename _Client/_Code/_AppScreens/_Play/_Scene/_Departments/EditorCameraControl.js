import {Department} from "../../../../_Engine/_Gameplay/_Characters/_Mind/Department";
import {Realm} from "../../../../_Engine/_Gameplay/_Anava/_Realm/Realm";
import {Game} from "../../../../_Game/Game";
import {KeyboardEventTypes} from "@babylonjs/core";

export class EditorCameraControl extends Department {
    constructor() {
        super();

        Realm.Updatables.push(this);
    }

    Begin() {
        Game.Scene.onKeyboardObservable.add((keyboardInfo) => {
            switch (keyboardInfo.type) {
                case KeyboardEventTypes.KEYDOWN: {
                    switch (keyboardInfo.event.key) {
                        case "a":
                        case "A":
                            this.Mind.Body.Mesh.position.x += 0.1;
                            break
                        case "d":
                        case "D":
                            this.Mind.Body.Mesh.position.x -= 0.1;
                            break
                        case "w":
                        case "W":
                            this.Mind.Body.Mesh.position.z -= 0.1;
                            break
                        case "s":
                        case "S":
                            this.Mind.Body.Mesh.position.z += 0.1;
                            break
                    }
                    break;
                }
            }
        })
    }

    End() {
        super.End();
    }

    Update() {

    }
}