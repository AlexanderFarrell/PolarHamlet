import {Part} from "../Part";

export class SceneObject extends Part {
    constructor(mesh) {
        super();
        this.Mesh = mesh;
    }

    Begin() {
        this.Body.Mesh = this.Mesh;
    }
}