import {InputManager} from "../_Input/InputManager";
import {ClientWorld} from "./ClientWorld";
import {Position} from "./Position";
import {doc} from "prettier";
import {Game} from "../../_Game/Game";

export class MouseMover {
    constructor() {
        this.LastPosition = new Position(0.0,0.0);
        this.Delta = new Position(0,0);
    }

    Update() {
        //console.log(ClientWorld.Camera.Rectangle.Center);
        //console.log(this.LastPosition);

        if (InputManager.Mousedown){
            let mouseWorldPos = ClientWorld.Camera.InverseTransformPos(InputManager.MousePosition);


            if (InputManager.MousePressTime() > 50){
                this.Delta.X = -(mouseWorldPos.X - this.LastPosition.X);
                this.Delta.Y = -(mouseWorldPos.Y - this.LastPosition.Y);
                //ClientWorld.Camera.Rectangle.Center.X -= (mouseWorldPos.X - this.LastPosition.X);
                //ClientWorld.Camera.Rectangle.Center.Y -= (mouseWorldPos.Y - this.LastPosition.Y);
                this.LastPosition.X = mouseWorldPos.X;
                this.LastPosition.Y = mouseWorldPos.Y;
            } else {
                this.LastPosition.X = mouseWorldPos.X;
                this.LastPosition.Y = mouseWorldPos.Y;
            }
        } else {
            this.Delta.X *= 0.9;
            this.Delta.Y *= 0.9;
        }

        if (InputManager.Scroll !== ClientWorld.Camera.Scroll){
            console.log(InputManager.Scroll);
            console.log(ClientWorld.Camera.Scroll);

            ClientWorld.Camera.Scroll = InputManager.Scroll;
            ClientWorld.Camera.Rectangle.Size.X = ClientWorld.Camera.BaseRectangle.Size.X * InputManager.Scroll;
            ClientWorld.Camera.Rectangle.Size.Y = ClientWorld.Camera.BaseRectangle.Size.Y * InputManager.Scroll;
        }

        ClientWorld.Camera.Rectangle.Center.X += this.Delta.X;
        ClientWorld.Camera.Rectangle.Center.Y += this.Delta.Y;

        /*if (InputManager.Mouseover){
            let mouseWorldPos = ClientWorld.Camera.InverseTransformPos(InputManager.MousePosition);

            if (ClientWorld.Tilemap.Rectangle.IsInsidePosition(mouseWorldPos)){
                let x = Math.floor(mouseWorldPos.X);
                let y = Math.floor(mouseWorldPos.Y);

                try {
                    Game.CurrentAction = ClientWorld.Tilemap.Types[ClientWorld.Tilemap.Tiles[x][y].TileType].Name + " X: " + x + " Y: " + y;
                } catch (e) {
                    console.log(e);
                }
            }
        }*/
    }
}