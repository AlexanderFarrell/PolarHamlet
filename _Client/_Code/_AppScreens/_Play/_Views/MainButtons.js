import {UiContainer} from "../../../_Engine/_View/UiContainer";
import $ from "jquery";
import {GameBuilder} from "../../../_Game/GameBuilder";
import {GameStateFlow} from "../../../_Game/GameStateFlow";

export class MainButtons extends UiContainer {
    constructor() {
        super($('<div id="MainButtons"></div>'));
    }

    Load() {
        super.Load();

        this.logout = $('<div id="LogoutButton" class="EditorButton">Logout</div>');
        //this.loginButton = $('<div id="LoginButton" class="StartButton">Login</div>');


        this.logout.click(function (){
            GameStateFlow.ToLoginCreateAccountPage();
            GameBuilder.EndEngine();
            GameBuilder.DestroyGame();
        });

        this.containerElement.append(this.logout);
    }
}