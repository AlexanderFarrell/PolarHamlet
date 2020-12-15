import {Game} from "./Game";
import {AppState} from "../_Engine/_Screen/AppState";
import {CreateLoginModel} from "../_AppScreens/_CreateLoginAccount/CreateLoginModel";
import {CreateLoginView} from "../_AppScreens/_CreateLoginAccount/CreateLoginView";
import {PlayModel} from "../_AppScreens/_Play/PlayModel";
import {PlayView} from "../_AppScreens/_Play/PlayView";

export class GameStateFlow {
    static ToLoginCreateAccountPage(){
        let model = new CreateLoginModel();
        let view = new CreateLoginView();
        Game.AppController.SwitchToState(new AppState(model, view));
    }

    /*static ToMenu(){
        let model = new MenuModel();
        let view = new MenuView();
        Game.AppController.SwitchToState(new AppState(model, view))
    }

    static LoadState(AppState){
        let model = new LoadModel();
        let view = new LoadView();
        Game.AppController.SwitchToState(new AppState(model, view));
    }*/

    static ToGame(){
        let model = new PlayModel();
        let view = new PlayView();
        Game.AppController.SwitchToState(new AppState(model, view));
        //let appState = new AppState(model, view);
        //this.LoadState(appState);
    }
}