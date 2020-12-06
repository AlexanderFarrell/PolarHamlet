import {UiContainer} from "../../../_Engine/_View/UiContainer";

export class CreateAccountScreen extends UiContainer{
    constructor(ToMenu, ToGameMethod) {
        super($('<div id="CreateAccountScreen" class="StartScreen"></div>'));

        this.toMenuMethod = ToMenu;
        this.toGameMethod = ToGameMethod;
    }

    Load() {
        this.accountNameInput = $('<input id="AccountNameInput" class="StartInput">');
        this.accountPasswordInput = $('<input id="AccountPasswordInput" class="StartInput">');
        this.accountPasswordCheckInput = $('<input id="AccountPasswordInputTwice" class="StartInput">');
        this.resultLabel = $('<div id="CreateLabel" class="StartLabel"></div>');
        this.createAccountButton = $('<button id="CreateAccountButton" class="StartButton">Create Account</button>')
        this.backButtonCreate = $('<button id="BackButtonCreateAccountScreen" class="StartButton">Back</button>')

        this.createAccountButton.click(function (){
            $('#CreateAccountScreen').hide();
            $('#LoadGameScreen').show();
            $('#StartTitle').innerHTML = "Starting Game";
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