import {AppStateView} from "../../_Engine/_Screen/AppStateView";
import {MainScreen} from "./_Screens/MainScreen";
import {CreateAccountScreen} from "./_Screens/CreateAccountScreen";
import {LoginScreen} from "./_Screens/LoginScreen";
import {LoadGameScreen} from "./_Screens/LoadGameScreen";

export class CreateLoginView extends AppStateView{
    constructor() {
        super();
    }

    Load(error, callback) {
        let root = $('#root');

        this.background = $('<div id="StartBackground"></div>');
        root.append(this.background);

        this.title = $('<div id="StartTitle">Polar Hamlet</div>');
        this.screenHolder = $('<div id="StartScreens"></div>');
        root.append(this.screenHolder);
        this.screenHolder.append(this.title);

        this.mainScreen = new MainScreen(this.ToCreateAccountScreen, this.ToLoginScreen);
        this.mainScreen.Load();
        this.screenHolder.append(this.mainScreen.containerElement);

        this.createAccountScreen = new CreateAccountScreen(this.ToMainMenu, this.ToLoadGameScreen);
        this.createAccountScreen.Load();
        this.screenHolder.append(this.createAccountScreen.containerElement);
        this.createAccountScreen.containerElement.hide();

        this.loginScreen = new LoginScreen(this.ToMainMenu, this.ToLoadGameScreen);
        this.loginScreen.Load();
        this.screenHolder.append(this.loginScreen.containerElement);
        this.loginScreen.containerElement.hide();

        this.loadGameScreen = new LoadGameScreen();
        this.loadGameScreen.Load();
        this.screenHolder.append(this.loadGameScreen.containerElement);
        this.loadGameScreen.containerElement.hide();

        console.log(this.mainScreen);
        console.log(this.createAccountScreen);
        console.log(this.loginScreen);
        console.log(this.loadGameScreen);


        callback();
    }

    Begin(error, callback) {
        $('#loadStart').hide();
        super.Begin(error, callback);
    }

    ToMainMenu(){
        this.mainScreen.Show();
        this.createAccountScreen.Hide();
        this.loginScreen.Hide();
        this.loadGameScreen.Hide();

        this.title.innerText = "Polar Hamlet";
    }

    ToCreateAccountScreen(){
        this.mainScreen.Hide();
        this.createAccountScreen.Show();
        this.loginScreen.Hide();
        this.loadGameScreen.Hide();

        this.title.innerText = "Create Account";
    }

    ToLoginScreen(){
        this.mainScreen.Hide();
        this.createAccountScreen.Hide();
        this.loginScreen.Show();
        this.loadGameScreen.Hide();

        this.title.innerText = "Login to Account";
    }

    ToLoadGameScreen(){
        this.mainScreen.Hide();
        this.createAccountScreen.Hide();
        this.loginScreen.Hide();
        this.loadGameScreen.Show();

        this.title.innerText = "Loading Game";
    }
}