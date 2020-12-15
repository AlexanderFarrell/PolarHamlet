import $ from "jquery";
import {UiContainer} from "../../../_Engine/_View/UiContainer";

export class NewGameMenu extends UiContainer{
    constructor() {
        super($('<div id="NewGameMenu" class="MenuScreen"></div>'));
    }

    Load() {
        this.backButton = $('<div id="BackButtonNewGame" class="MenuButton">Login</div>');

        this.backButton.click(function (){
            $('#NewGameMenu').hide();
            $('#MainMenu').show();
        })

        this.containerElement.append(this.backButton);
    }
}