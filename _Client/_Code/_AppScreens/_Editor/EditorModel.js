import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {GameBuilder} from "../../_Game/GameBuilder";
import {Game} from "../../_Game/Game";
import {Realm} from "../../_Engine/_Gameplay/_Anava/_Realm/Realm";
import {PolarHamletWorld} from "../_Play/_GameSession/PolarHamletWorld";
import {Scene} from '@babylonjs/core'

export class EditorModel extends AppStateModel {
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

        this.NewWorld(error, callback);
    }

    Begin(error, callback) {
        Game.Engine.runRenderLoop(this.Update)

        callback();
    }

    Update() {
        Realm.Update();

        Game.Scene.render();
    }

    NewWorld(error, callback){
        Realm.SetWorld(new PolarHamletWorld("Editor World"));
        Realm.World.MakeNewEditor((err) => {
            error(err);
        }, () => {
            callback();
        });
    }

    SaveWorld(){
        PolarHamletWorld.lo
    }

    LoadWorld(){

    }
}