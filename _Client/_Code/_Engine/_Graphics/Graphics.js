import {Game} from "../../_Game/Game";

export class Graphics {
    static Start(){
        Graphics.Canvas = document.createElement('canvas');
        Graphics.Canvas.id = 'GameCanvas';

        Graphics.Context = Graphics.Canvas.getContext('2d');
    }

    static End(){
        Graphics.Canvas.remove();
        delete Graphics.Canvas;
        delete Graphics.Context;
    }
}