import {UiContainer} from "../../../_Engine/_View/UiContainer";
import $ from "jquery";
import {GameStateFlow} from "../../../_Game/GameStateFlow";

export class MainMenu extends UiContainer {
    constructor() {
        super($('<div id="MainMenu" class="MenuScreen"></div>'));
    }

    Load() {
        this.newGameButton = $('<div id="NewGameButton" class="MenuButton">New Game</div>');

        this.newGameButton.click(function (){
            $('#MainMenu').hide();
            $('#NewGameMenu').show();
            GameStateFlow.ToGame();
        })

        this.loadGameButton = $('<div id="LoadGameButton" class="MenuButton">Load Game</div>');

        this.loadGameButton.click(function (){
            $('#MainMenu').hide();
            $('#LoadGameMenu').show();
            GameStateFlow.ToGame();
        })

        this.settingsButton = $('<div id="SettingsButton" class="MenuButton">Settings</div>');

        this.settingsButton.click(function (){
            $('#MainMenu').hide();
            $('#SettingsMenu').show();
        })

        this.editorButton = $('<div id="EditorButton" class="MenuButton">_Editor</div>');

        this.editorButton.click(function (){
            $('#MainMenu').hide();
            GameStateFlow.ToEditor();
        })

        this.containerElement.append(this.newGameButton);
        this.containerElement.append(this.loadGameButton);
        this.containerElement.append(this.settingsButton);
        this.containerElement.append(this.editorButton);
    }
}