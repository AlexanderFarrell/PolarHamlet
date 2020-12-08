import {Game} from "../../_Game/Game";

export class Engine {
    static Start(){
        Game.WebGL = Game.Canvas.getContext('webgl');

        if (Game.WebGL === null){
            throw new GraphicsError("We're sorry, your browser does not appear to support WebGL.");
            return;
        }
    }
}