import {AppController} from "../_Engine/_Screen/AppController";
import {Renderer} from "../_Engine/_Rendering/Renderer";

const {Game} = require("./Game");

export class GameBuilder {
    static CreateGame(){
        Game.AppController = new AppController();
        //Game.Canvas = $('<canvas id="GameCanvas"></canvas>');
    }

    static StartEngine(){
        Game.Canvas = document.createElement('canvas');
        Game.Canvas.id = 'GameCanvas';
        document.body.append(Game.Canvas);
        Game.Renderer = new Renderer();
        Game.Renderer.Start();
    }

    static DestroyGame(){
        Game.AppController = null;
        Game.Canvas = null;
    }
}