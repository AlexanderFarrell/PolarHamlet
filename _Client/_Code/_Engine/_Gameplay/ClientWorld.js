import {Camera} from "../_Graphics/Camera";
import {Graphics} from "../_Graphics/Graphics";
import {Entity} from "./Entity";
import {Rectangle} from "./Rectangle";
import {Position} from "./Position";
import {ColorDrawer} from "./ColorDrawer";
import {MouseMover} from "./MouseMover";
import {Game} from "../../_Game/Game";
import {MouseClicker} from "./MouseClicker";

class TileMap {
    constructor(data) {
        /*this.Width = 100;
        this.Height = 100;*/

        console.log(data.world.Width);
        console.log(data.world.Height);
        this.Width = data.world.Width;
        this.Height = data.world.Height;

        this.Tiles = data.world.Tiles;

        this.Rectangle = new Rectangle(new Position(0,0), new Position(this.Width, this.Height));

        this.Types = data;
    }

    Draw(){
        let rect = ClientWorld.Camera.TransformRect(this.Rectangle);
        let topLeft = rect.TopLeft();
        let oneTileWidth = rect.Size.X/this.Width;
        let oneTileHeight = rect.Size.Y/this.Height;

        let xStart = Math.floor(Math.max(0, ClientWorld.Camera.Rectangle.TopLeft().X));
        let yStart = Math.floor(Math.max(0, ClientWorld.Camera.Rectangle.TopLeft().Y));
        let xEnd = Math.ceil(Math.min(this.Width-1, ClientWorld.Camera.Rectangle.BottomRight().X));
        let yEnd = Math.ceil(Math.min(this.Height-1, ClientWorld.Camera.Rectangle.BottomRight().Y));

        for (let x = xStart; x < xEnd; x++){
            for (let y = yStart; y < yEnd; y++){
                Graphics.Context.fillStyle = `rgb(
                    ${this.Tiles[x][y].Red},
                    ${this.Tiles[x][y].Green},
                    ${this.Tiles[x][y].Blue}
                )`/*'red';/*`rgb(
                    ${255 - 2 * x},
                    ${255 - 2 * y},
                    0)`;*/
                Graphics.Context.fillRect(rect.Center.X + (oneTileWidth * x), rect.Center.Y + (oneTileHeight * y),
                    oneTileWidth, oneTileHeight);
            }
        }

        /*for (let x = 0; x < this.Width; x++){
            for (let y = 0; y < this.Height; y++){
                Graphics.Context.fillStyle = `rgb(
                    ${255 - 2 * x},
                    ${255 - 2 * y},
                    0)`;
                Graphics.Context.fillRect(topLeft.X + (oneTileWidth * x), topLeft.Y + (oneTileHeight * y),
                    oneTileWidth, oneTileHeight);
            }
        }*/
    }
}

export class ClientWorld {

    static Begin(data){
        ClientWorld.Camera = new Camera();
        ClientWorld.Entities = [];
        ClientWorld.Tilemap = new TileMap(data);
        ClientWorld.MouseMover = new MouseMover();
        ClientWorld.MouseClicker = new MouseClicker();

        ClientWorld.Entities.push(new Entity('Test', new Rectangle(new Position(3.0,3.0), new Position(1.0,1.0)), new ColorDrawer('red')));

        ClientWorld.Loop = setInterval(() => {
            ClientWorld.ClientUpdate();
            ClientWorld.Draw();
        }, 17);
    }

    static ClientUpdate(){
        ClientWorld.MouseMover.Update();
        ClientWorld.MouseClicker.Update();
    }

    static Create(entity){
        Game.socket.emit('new-entity', {name: entity.Name, bounds: {Center: {x: entity.Bounds.Size.X, y: entity.Bounds.Size.Y}}, color: 'red'});
    }

    static End(){
        delete ClientWorld.Camera;
        delete ClientWorld.Entities;
        delete ClientWorld.Tilemap;
        delete ClientWorld.MouseMover;

        clearInterval(ClientWorld.Loop);
    }

    static Draw(){
        Graphics.StartRender();

        ClientWorld.Tilemap.Draw();

        ClientWorld.Entities.forEach((entity) => {
            entity.Draw();
        })
    }
}