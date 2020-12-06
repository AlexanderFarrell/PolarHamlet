import {AppController} from "../_Engine/_Screen/AppController";

const {Game} = require("./Game");

export class GameBuilder {
    static CreateGame(){
        Game.AppController = new AppController();
    }

    static DestroyGame(){
        Game.AppController = null;
    }
}