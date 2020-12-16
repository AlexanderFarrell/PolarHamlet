import {Rectangle} from "./Rectangle";
import {Graphics} from "../_Graphics/Graphics";
import {ColorDrawer} from "./ColorDrawer";

export class Entity {
    constructor(name, bounds, drawingObject) {
        this.Name = name;
        this.Bounds = bounds;
        this.DrawingObject = drawingObject;
    }

    Draw(){
        this.DrawingObject.Draw(this.Bounds);
    }
}

module.exports = {Entity}