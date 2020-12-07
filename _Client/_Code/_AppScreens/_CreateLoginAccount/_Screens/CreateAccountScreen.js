import {UiContainer} from "../../../_Engine/_View/UiContainer";
import {Game} from "../../../_Game/Game";
import {doc} from "prettier";

export class CreateAccountScreen extends UiContainer{
    constructor(ToMenu, ToGameMethod) {
        super($('<div id="CreateAccountScreen" class="StartScreen"></div>'));

        this.toMenuMethod = ToMenu;
        this.toGameMethod = ToGameMethod;
    }

    Load() {
        this.accountNameInput = $('<input id="AccountNameInput" class="StartInput" placeholder="Username">');
        this.accountPasswordInput = $('<input id="AccountPasswordInput" class="StartInput" placeholder="Password" type="password">');
        this.accountPasswordCheckInput = $('<input id="AccountPasswordInputTwice" class="StartInput" placeholder="Confirm Password" type="password">');
        this.resultLabel = $('<div id="CreateLabel" class="StartLabel"></div>');
        this.createAccountButton = $('<div id="CreateAccountButton" class="StartButton">Create Account</div>')
        this.backButtonCreate = $('<div id="BackButtonCreateAccountScreen" class="StartButton">Back</div>')

        this.createAccountButton.click(function (){
            document.getElementById('CreateLabel').innerHTML = "Creating Account...";
            Game.AppController.Active.Model.Create(
                $('#AccountNameInput').val(),
                $('#AccountPasswordInput').val(),
                $('#AccountPasswordInputTwice').val(),
                (error) => {
                    console.log("Error: " + error);
                    $('#CreateLabel').innerHTML = error;
                    document.getElementById('CreateLabel').innerHTML = error;
            }, (data) => {
                $('#CreateAccountScreen').hide();
                $('#LoadGameScreen').show();
                $('#StartTitle').innerHTML = "Starting Game";
            });
        });
        this.backButtonCreate.click(function () {
            $('#CreateAccountScreen').hide();
            $('#MainScreen').show();
            $('#StartTitle').innerHTML = "Polar Hamlet";
        })

        this.containerElement.append(this.accountNameInput);
        this.containerElement.append(this.accountPasswordInput);
        this.containerElement.append(this.accountPasswordCheckInput);
        this.containerElement.append(this.resultLabel);
        this.containerElement.append(this.createAccountButton);
        this.containerElement.append(this.backButtonCreate);
    }
}