import {AppController} from "../_Engine/_Screen/AppController";
import {GameAccount} from "./GameAccount";
import {Graphics} from "../_Engine/_Graphics/Graphics";
const {Game} = require("./Game");

export class GameBuilder {
    static CreateGame(){
        Game.AppController = new AppController();
        Game.GameAccount = new GameAccount();
        //Game.Canvas = $('<canvas id="GameCanvas"></canvas>');
    }

    static StartEngine(){
        Graphics.Start();
    }

    static EndEngine(){
        Graphics.End();
    }

    static DestroyGame(){
        delete Game.AppController;
        delete Game.GameAccount;
    }
}