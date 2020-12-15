import {AppStateView} from "../../_Engine/_Screen/AppStateView";
import $ from "jquery";
import {MainMenu} from "./_Screens/MainMenu";
import {NewGameMenu} from "./_Screens/NewGameMenu";
import {LoadGameMenu} from "./_Screens/LoadGameMenu";
import {SettingsMenu} from "./_Screens/SettingsMenu";

export class MenuView extends AppStateView{
    constructor() {
        super();
    }

    Load(error, callback) {

        console.log("calling");

        this.background = $('<div id="MenuBackground"></div>');

        this.screenHolder = $('<div id="MenuScreenHolder"></div>');
        this.screenHolder.append(this.title);

        this.mainMenu = new MainMenu();
        this.LoadMenu(this.mainMenu, true);

        this.newGameMenu = new NewGameMenu();
        this.LoadMenu(this.newGameMenu, false);

        this.loadGameMenu = new LoadGameMenu();
        this.LoadMenu(this.loadGameMenu, false);

        this.settingsMenu = new SettingsMenu();
        this.LoadMenu(this.settingsMenu, false);

        callback();
    }

    Begin(error, callback) {
        let root = $('#root');
        root.append(this.background);
        root.append(this.screenHolder);
        callback();
    }

    LoadMenu(menu, isShown) {
        menu.Load();
        //this.screenHolder.append(menu.containerElement);
        this.screenHolder.append(menu.containerElement);
        if (!isShown) menu.containerElement.hide();
    }
}