import {UiContainer} from "../../../_Engine/_View/UiContainer";
import $ from "jquery";

export class SettingsMenu extends UiContainer{

    constructor() {
        super($('<div id="SettingsMenu" class="MenuScreen"></div>'));
    }

    Load() {
        this.backButton = $('<div id="BackButtonSettings" class="MenuButton">Login</div>');

        this.backButton.click(function (){
            $('#Settings').hide();
            $('#MainMenu').show();
        })

        this.containerElement.append(this.backButton);
    }
}