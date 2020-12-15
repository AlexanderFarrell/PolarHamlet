import {Part} from "../../../_Engine/_Gameplay/_Characters/_Body/Part";
import {MeshBuilder, StandardMaterial} from "@babylonjs/core";
import {Game} from "../../../_Game/Game";
import {Realm} from "../../../_Engine/_Gameplay/_Anava/_Realm/Realm";

export class Sprite extends Part {
    constructor() {
        super();
    }

    Begin() {
        this.Body.Mesh = MeshBuilder.CreatePlane('Sprite', {size: 1, instance: this.Body.Mesh}, Game.Scene);
        let material = new StandardMaterial('SpriteMaterial', Game.Scene);
        this.Body.Mesh.material = material;

        Realm.AddToUpdate(this);
    }

    Update(){

    }

    End() {
        Realm.RemoveFromUpdate(this);
    }
}