import {Graphics} from "../_Graphics/Graphics";
import {Position} from "../_Gameplay/Position";

export class InputManager {
    static Begin(){
        InputManager.Mousedown = false;
        InputManager.MousePressLast = null;
        InputManager.MousePosition = new Position(0.0, 0.0);
        InputManager.Scroll = 1;

        Graphics.Canvas.addEventListener('mousedown', e => {
            console.log('down');
            InputManager.Mousedown = true;
            InputManager.MousePressLast = Date.now();
        })

        Graphics.Canvas.addEventListener('mousemove', e => {
            InputManager.MousePosition.X = e.offsetX;
            InputManager.MousePosition.Y = e.offsetY;
        })

        Graphics.Canvas.addEventListener('wheel', e => {
            e.preventDefault();

            InputManager.Scroll += e.deltaY * -0.1;
        })

        window.addEventListener('mouseup', e => {
            InputManager.Mousedown = false;
        })
    }

    static MousePressTime(){
        return (InputManager.Mousedown) ? Date.now() - InputManager.MousePressLast : 0;
    }

    static End(){

    }
}