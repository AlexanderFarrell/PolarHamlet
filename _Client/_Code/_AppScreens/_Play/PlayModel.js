import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {Game} from "../../_Game/Game";
import {TileMap} from "../../_Engine/TileMap";
import {GameBuilder} from "../../_Game/GameBuilder";

export class PlayModel extends AppStateModel {
    constructor() {
        super();
    }

    Begin(error, callback) {
        try {
            GameBuilder.StartEngine();
        } catch (e) {
            error(e);
            return;
        }

        //Game.Scene = new Scene(Game.Engine);



        //let camera = new ArcRotateCamera('Camera', 1, 1, 10, new Vector3(0,0,0), Game.Scene);
        //camera.attachControl(Game.Canvas, true);
        //let camera = new ArcFollowCamera('Camera', 0, 0, 5, new Vector3(50,0,50), Game.Scene);
        //camera.

        //let material = new StandardMaterial('GroundMaterial', Game.Scene);
        //material.diffuseTexture = new Texture('images/PolarHamletGem.png', Game.Scene);

        //let cube = MeshBuilder.CreateBox('TestBox', {size: 1});

        this.Map = new TileMap(64, 64);

        Game.Engine.runRenderLoop(() => {
            Game.Scene.render();
        })

        callback();
    }
}