import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {Game} from "../../_Game/Game";
import {TileMap} from "../../_Engine/TileMap";
import {GameBuilder} from "../../_Game/GameBuilder";
import {ArcRotateCamera, Color4, Vector3, Engine, Scene, StandardMaterial, Texture, MeshBuilder} from "@babylonjs/core";

export class PlayModel extends AppStateModel {
    constructor() {
        super();
    }

    Begin(error, callback) {
        /*try {
            GameBuilder.StartEngine();
        } catch (e) {
            error(e);
            return;
        }*/

        Game.Canvas = document.getElementById('GameCanvas');
        Game.Engine = new Engine(Game.Canvas, false);
        Game.Scene = new Scene(Game.Engine);

        let camera = new ArcRotateCamera('Camera', 1, 1, 10, new Vector3(0,0,0), Game.Scene);
        camera.attachControl(Game.Canvas, true);

        let material = new StandardMaterial('GroundMaterial', Game.Scene);
        material.diffuseTexture = new Texture('images/PolarHamletGem.png', Game.Scene);

        let cube = MeshBuilder.CreateBox('TestBox', {size: 1});

        this.Map = new TileMap(64, 64);
        console.log(Game.Canvas);
        console.log(Game.Engine);
        console.log(Game.Scene);

        Game.Engine.runRenderLoop(() => {
            Game.Scene.render();
        })

        callback();
    }
}