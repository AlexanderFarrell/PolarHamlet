import {DrawingObject} from "./DrawingObject";
import {Graphics} from "../_Graphics/Graphics";
import {ClientWorld} from "./ClientWorld";

export class ColorDrawer extends DrawingObject{
    constructor(color) {
        super();

        this.Color = color;
    }

    Draw(rectangle, order = 0) {
        Graphics.Context.fillStyle = this.Color;
        let rect = ClientWorld.Camera.TransformRect(rectangle);
        let topLeft = rect.TopLeft();
        Graphics.Context.fillRect(topLeft.X, topLeft.Y, rect.Size.X, rect.Size.Y);
    }
}

module.exports = {ColorDrawer}