import {AppController} from "../_Engine/_Screen/AppController";
import {Engine} from '@babylonjs/core';
import {GameAccount} from "./GameAccount";
const {Game} = require("./Game");

export class GameBuilder {
    static CreateGame(){
        Game.AppController = new AppController();
        Game.GameAccount = new GameAccount();
        //Game.Canvas = $('<canvas id="GameCanvas"></canvas>');
    }

    static StartEngine(){
        //Game.Canvas = document.getElementById('GameCanvas');
        Game.Canvas = document.createElement('canvas');
        Game.Canvas.id = 'GameCanvas';
        document.body.append(Game.Canvas);
        Game.Engine = new Engine(Game.Canvas, false);
        //Game.Renderer = new Renderer();
        //Game.Renderer.Start();
    }

    static DestroyGame(){
        Game.AppController = null;
        Game.Canvas.remove();
        Game.Canvas = null;
        Game.Engine.stopRenderLoop();
        Game.Engine = null;
    }
}