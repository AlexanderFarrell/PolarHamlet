import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {Game} from "../../_Game/Game";
import {TileMap} from "../../_Engine/TileMap";
import {GameBuilder} from "../../_Game/GameBuilder";
import {ArcFollowCamera, ArcRotateCamera, MeshBuilder, Scene, StandardMaterial, Texture, Vector3} from '@babylonjs/core'
import {PolarHamletWorld} from "./_GameSession/PolarHamletWorld";
import {Realm} from "../../_Engine/_Gameplay/_Anava/_Realm/Realm";

export class PlayModel extends AppStateModel {
    constructor() {
        super();
    }

    Load(error, callback) {
        try {
            GameBuilder.StartEngine();
        } catch (e) {
            error(e);
            return;
        }

        Game.Scene = new Scene(Game.Engine);

        Realm.SetWorld(new PolarHamletWorld('Debug'));
        Realm.World.Create((error) => {
            throw error;
        }, () => {
            callback();
        });
        //let camera = new ArcRotateCamera('Camera', 1, 1, 10, new Vector3(0,0,0), Game.Scene);
        //camera.attachControl(Game.Canvas, true);*/

        /*let cube = MeshBuilder.CreateBox('TestBox', {size: 1});
        cube.position = new Vector3(10, 0, 10);

        let camera = new ArcFollowCamera('Camera', 0,0.5 * Math.PI,10, cube, Game.Scene);

        let material = new StandardMaterial('GroundMaterial', Game.Scene);
        material.diffuseTexture = new Texture('images/PolarHamletGem.png', Game.Scene);

        this.Map = new TileMap(64, 64);*/



        //super.Load(error, callback);
    }

    Begin(error, callback) {
        Game.Engine.runRenderLoop(this.Update)

        callback();
    }

    Update() {
        Realm.Update();

        Game.Scene.render();
    }

    RenderLoop() {
    }
}