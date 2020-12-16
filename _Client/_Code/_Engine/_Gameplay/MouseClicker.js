import {InputManager} from "../_Input/InputManager";
import {ClientWorld} from "./ClientWorld";
import {Entity} from "./Entity";
import {Rectangle} from "./Rectangle";
import {Position} from "./Position";
import {ColorDrawer} from "./ColorDrawer";

export class MouseClicker {
    constructor() {
        this.LastState = InputManager.Mousedown;
        MouseClicker.Build = false;
    }

    Update(){
        if (InputManager.Mousedown !== this.LastState){
            if (MouseClicker.Build && InputManager.Mousedown){
                let mouseWorldPos = ClientWorld.Camera.InverseTransformPos(InputManager.MousePosition);
                mouseWorldPos.X += ClientWorld.Camera.Rectangle.TopLeft().X;
                mouseWorldPos.Y += ClientWorld.Camera.Rectangle.TopLeft().Y;
                ClientWorld.Create(new Entity('House', new Rectangle(mouseWorldPos, new Position(0.3, 0.3)), new ColorDrawer('green')));
            }
        }

        this.LastState = InputManager.Mousedown;
    }
}