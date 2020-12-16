import {Camera} from "../_Graphics/Camera";
import {Graphics} from "../_Graphics/Graphics";
import {Entity} from "./Entity";
import {Rectangle} from "./Rectangle";
import {Position} from "./Position";
import {ColorDrawer} from "./ColorDrawer";
import {MouseMover} from "./MouseMover";

class TileMap {
    constructor() {
        this.Width = 100;
        this.Height = 100;
        this.Rectangle = new Rectangle(new Position(0,0), new Position(this.Width, this.Height));
        this.BaseRectangle = new Rectangle(new Position(0,0), new Position(this.Width, this.Height));
    }

    Draw(){
        let rect = ClientWorld.Camera.TransformRect(this.Rectangle);
        let topLeft = rect.TopLeft();
        let oneTileWidth = rect.Size.X/this.Width;
        let oneTileHeight = rect.Size.Y/this.Height;
        for (let x = 0; x < this.Width; x++){
            for (let y = 0; y < this.Height; y++){
                Graphics.Context.fillStyle = `rgb(
                    ${255 - 2 * x},
                    ${255 - 2 * y},
                    0)`;
                Graphics.Context.fillRect(topLeft.X + (oneTileWidth * x), topLeft.Y + (oneTileHeight * y),
                    oneTileWidth, oneTileHeight);
            }
        }
    }
}

export class ClientWorld {

    static Begin(){
        ClientWorld.Camera = new Camera();
        ClientWorld.Entities = [];
        ClientWorld.Tilemap = new TileMap();
        ClientWorld.MouseMover = new MouseMover();

        ClientWorld.Entities.push(new Entity('Test', new Rectangle(new Position(0.0,0.0), new Position(1.0,1.0)), new ColorDrawer('red')));

        setInterval(() => {
            ClientWorld.ClientUpdate();
            ClientWorld.Draw();
        }, 17);
    }

    static ClientUpdate(){
        ClientWorld.MouseMover.Update();
    }

    static End(){
        delete ClientWorld.Camera;
        delete ClientWorld.Entities;
        delete ClientWorld.Tilemap;
        delete ClientWorld.MouseMover;
    }

    static Draw(){
        Graphics.StartRender();

        ClientWorld.Tilemap.Draw();

        ClientWorld.Entities.forEach((entity) => {
            entity.Draw();
        })
    }
}