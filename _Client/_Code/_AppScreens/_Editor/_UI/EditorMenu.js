import {UiContainer} from "../../../_Engine/_View/UiContainer";
import $ from "jquery";
import {GameStateFlow} from "../../../_Game/GameStateFlow";
import {GameBuilder} from "../../../_Game/GameBuilder";
import {PolarHamletWorld} from "../../_Play/_GameSession/PolarHamletWorld";
import {Realm} from "../../../_Engine/_Gameplay/_Anava/_Realm/Realm";

export class EditorMenu extends UiContainer {
    constructor() {
        super($('<div id="EditorMenu"></div>'));
    }

    Load() {
        let newButton = $('<div id="NewButton" class="StartButton">New</div>');
        let loadButton = $('<div id="LoadButton" class="StartButton">Load</div>');
        let saveButton = $('<div id="SaveButton" class="StartButton">Save</div>');
        let exitButton = $('<div id="ExitButton" class="StartButton">Exit</div>');
        this.MapDisplay = $('<div id="MapDisplay"></div>');

        newButton.click(NewButtonPress);
        loadButton.click(LoadButtonPress);
        saveButton.click(SaveButtonPress);
        exitButton.click(ExitButtonPress);

        this.containerElement.append(newButton);
        this.containerElement.append(loadButton);
        this.containerElement.append(saveButton);
        this.containerElement.append(exitButton);
        this.containerElement.append(this.MapDisplay);

        function NewButtonPress(){
            console.log(this.name);
        }

        function LoadButtonPress(){
            console.log(this.name);
        }

        function SaveButtonPress(){
            console.log(this.name);
            PolarHamletWorld.SaveWorld(
                Realm.World.name,
                Realm.World,
                (error) => {OnErrorMessage(error)},
                (data) => {OnSuccessMessage("Saved world!")});
        }

        function ExitButtonPress(){
            console.log(this.name);
            GameBuilder.DestroyGame();
            GameStateFlow.ToMenu();
        }

        function OnErrorMessage(message){
            console.log(message);
        }

        function OnSuccessMessage(message){
            console.log(message);
        }
    }
}