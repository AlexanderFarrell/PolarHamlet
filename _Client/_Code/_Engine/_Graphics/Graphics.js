import {Game} from "../../_Game/Game";
import {Camera} from "./Camera";

import $ from 'jquery';
import {Context} from "express-validator/src/context";

export class Graphics {
    static Start(){
        Graphics.Canvas = document.createElement('canvas');
        Graphics.Canvas.id = 'GameCanvas';
        Graphics.Context = Graphics.Canvas.getContext('2d');
        $('#root').append(Graphics.Canvas);
    }

    static End(){
        Graphics.Canvas.remove();
        delete Graphics.Canvas;
        delete Graphics.Context;
    }

    static StartRender(){
        Graphics.Canvas.width = window.innerWidth;
        Graphics.Canvas.height = window.innerHeight;
        Graphics.Context.clearRect(0,0,this.Canvas.width, this.Canvas.height);
    }
}