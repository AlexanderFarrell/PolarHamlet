
import {mat4, quat, vec3} from "gl-matrix";

export class Orientation {
    constructor() {
        this.Position = new vec3();
        this.Rotation = new quat();
        this.Scale = new vec3();
        this._rawRotTranslateOut = mat4.create;
    }

    GetRotationMatrix() {
        return mat4.fromRotationTranslationScale(this._rawRotTranslateOut, this.Rotation, this.Position, this.Scale);
    }
}
