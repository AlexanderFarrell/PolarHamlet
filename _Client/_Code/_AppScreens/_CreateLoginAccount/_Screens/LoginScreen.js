import {UiContainer} from "../../../_Engine/_View/UiContainer";

export class LoginScreen extends UiContainer{
    constructor(toMainMenu, toLoadGame) {
        super($('<div id="LoginAccountScreen" class="StartScreen"></div>'));

        this.toMainMenu = toMainMenu;
        this.toLoadGame = toLoadGame;
    }

    Load() {
        this.accountNameInputLogin = $('<input id="AccountNameInputLogin" class="StartInput">');
        this.accountPasswordInputLogin = $('<input id="AccountPasswordInputLogin" class="StartInput">');
        this.resultLabel = $('<div id="LoginLabel" class="StartLabel"></div>');
        this.loginAccountButton = $('<div id="LoginAccountButton" class="StartButton">Login</div>')
        this.backButtonLogin = $('<div id="BackButtonLoginScreen" class="StartButton">Back</div>')

        const self = this;
        this.loginAccountButton.click(function (){
            $('#LoginAccountScreen').hide();
            $('#LoadGameScreen').show();
            $('#StartTitle').innerHTML = "Starting Game";
        });
        this.backButtonLogin.click(function () {
            $('#MainScreen').show();
            $('#LoginAccountScreen').hide();
            $('#StartTitle').innerHTML = "Polar Hamlet";
        })

        this.containerElement.append(this.accountNameInputLogin);
        this.containerElement.append(this.accountPasswordInputLogin);
        this.containerElement.append(this.resultLabel);
        this.containerElement.append(this.loginAccountButton);
        this.containerElement.append(this.backButtonLogin);
    }
}