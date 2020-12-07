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
        this.form = $('<form name="CreateForm"></form>')
        this.accountNameInput = $('<input id="AccountNameInput" class="StartInput" placeholder="Username">');
        this.accountPasswordInput = $('<input id="AccountPasswordInput" class="StartInput" placeholder="Password" type="password" autocomplete="new-password">');
        this.accountPasswordCheckInput = $('<input id="AccountPasswordInputTwice" class="StartInput" placeholder="Confirm Password" type="password" autocomplete="new-password">');
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
                document.getElementById('StartTitle').innerText = "Starting Game";
                document.getElementById('LoadLabel').innerHTML = "Your account has been created!";
                    Game.AppController.Active.Model.LoadGame();

            });
        });
        this.backButtonCreate.click(function () {
            $('#CreateAccountScreen').hide();
            $('#MainScreen').show();
            //$('#StartTitle').innerHTML = "Polar Hamlet";
            document.getElementById('StartTitle').innerText = "Polar Hamlet";
            Game.AppController.Active.Model.LoadGame();
        })

        this.containerElement.append(this.form);
        this.form.append(this.accountNameInput);
        this.form.append(this.accountPasswordInput);
        this.form.append(this.accountPasswordCheckInput);
        this.containerElement.append(this.resultLabel);
        this.containerElement.append(this.createAccountButton);
        this.containerElement.append(this.backButtonCreate);
    }
}