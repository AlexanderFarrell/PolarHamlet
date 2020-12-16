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


        this.cancel = $('<div id="CancelButton" class="EditorButton">Cancel</div>');

        this.cancel.click(function (){
            cancel.hide();
        });

        let cancel = this.cancel;

        this.logout.click(function (){
            GameStateFlow.ToLoginCreateAccountPage();
            GameBuilder.EndEngine();
            GameBuilder.DestroyGame();
        });

        this.house = $('<div id="BuildHouse" class="EditorButton">Build House</div>');

        this.house.click(function (){
            cancel.show();
        });

        this.display = $('<div id="BarDisplay">Things</div>');
        this.buttonHolder = $('<div id="PlayButtons"></div>')

        this.containerElement.append(this.buttonHolder);
        this.buttonHolder.append(this.logout);
        this.buttonHolder.append(this.house);
        this.buttonHolder.append(this.cancel);
        this.containerElement.append(this.display);

        this.cancel.hide();
    }
}