import {UiContainer} from "../../../_Engine/_View/UiContainer";
import $ from 'jquery';

export class MainScreen extends UiContainer{
    constructor(toCreate, toLogin) {
        super($('<div id="MainScreen" class="StartScreen"></div>'));

        this.toCreate = toCreate;
        this.toLogin = toLogin;
    }

    Load() {
        this.createButton = $('<div id="CreateButton" class="StartButton">Create Account</div>');
        this.loginButton = $('<div id="LoginButton" class="StartButton">Login</div>');

        this.createButton.click(function (){
            $('#MainScreen').hide();
            $('#CreateAccountScreen').show();
            $('#StartTitle').innerHTML = "Create Account";
            document.getElementById('StartTitle').innerText = "Create Account";
        });
        this.loginButton.click(function () {
            $('#MainScreen').hide();
            $('#LoginAccountScreen').show();
            $('#StartTitle').innerHTML = "Login";
            document.getElementById('StartTitle').innerText = "Login";
        })

        this.containerElement.append(this.createButton);
        this.containerElement.append(this.loginButton);
    }
}