import $ from "jquery";
import {UiContainer} from "../../../_Engine/_View/UiContainer";

export class LoadGameMenu extends UiContainer{
    constructor() {
        super($('<div id="LoadGameMenu" class="MenuScreen"></div>'));
    }

    Load() {
        this.backButton = $('<div id="BackButtonLoadGame" class="MenuButton">Login</div>');

        this.backButton.click(function (){
            $('#LoadGameMenu').hide();
            $('#MainMenu').show();
        })

        this.containerElement.append(this.backButton);
    }

}