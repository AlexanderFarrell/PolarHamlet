import {UiContainer} from "../../../_Engine/_View/UiContainer";
import {Game} from "../../../_Game/Game";
import $ from 'jquery';

export class LoginScreen extends UiContainer{
    constructor(toMainMenu, toLoadGame) {
        super($('<div id="LoginAccountScreen" class="StartScreen"></div>'));

        this.toMainMenu = toMainMenu;
        this.toLoadGame = toLoadGame;
    }

    Load() {
        this.form = $('<form name="LoginForm"></form>')
        this.accountNameInputLogin = $('<input id="AccountNameInputLogin" class="StartInput" placeholder="Username" autocomplete="username">');
        this.accountPasswordInputLogin = $('<input id="AccountPasswordInputLogin" class="StartInput" placeholder="Password" type="password" autocomplete="current-password">');
        this.resultLabel = $('<div id="LoginLabel" class="StartLabel"></div>');
        this.loginAccountButton = $('<div id="LoginAccountButton" class="StartButton">Login</div>')
        this.backButtonLogin = $('<div id="BackButtonLoginScreen" class="StartButton">Back</div>')

        const self = this;
        this.loginAccountButton.click(function (){
            //$('#LoginLabel').innerHTML = "Logging in...";
            document.getElementById('LoginLabel').innerText = "Logging in...";
            let username = $('#AccountNameInputLogin').val();
            Game.AppController.Active.Model.Login(
                username,
                $('#AccountPasswordInputLogin').val(),
                (error) => {
                    //$('#LoginLabel').innerText = error;
                    document.getElementById('LoginLabel').innerText = error;
            }, (data) => {
                $('#LoginAccountScreen').hide();
                $('#LoadGameScreen').show();
                $('#StartTitle').innerHTML = "Starting Game";
                Game.GameAccount.Username = username;
                    document.getElementById('StartTitle').innerText = "Starting Game";
                    document.getElementById('LoadLabel').innerHTML = "Successfully logged in!";
                    Game.AppController.Active.Model.ToMenu();
            });
        });
        this.backButtonLogin.click(function () {
            $('#MainScreen').show();
            $('#LoginAccountScreen').hide();
            $('#StartTitle').innerHTML = "Polar Hamlet";
            document.getElementById('StartTitle').innerText = "Polar Hamlet";
        })

        this.containerElement.append(this.form);
        this.form.append(this.accountNameInputLogin);
        this.form.append(this.accountPasswordInputLogin);
        this.containerElement.append(this.resultLabel);
        this.containerElement.append(this.loginAccountButton);
        this.containerElement.append(this.backButtonLogin);
    }

    Login(){

    }
}