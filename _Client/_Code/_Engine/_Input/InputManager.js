import {Graphics} from "../_Graphics/Graphics";
import {Position} from "../_Gameplay/Position";

export class InputManager {
    static Begin(){
        InputManager.Mousedown = false;
        InputManager.MousePressLast = null;
        InputManager.MousePosition = new Position(0.0, 0.0);
        InputManager.Scroll = 1.0;
        InputManager.ScrollMin = 0.5;
        InputManager.ScrollMax = 3.0;

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

            InputManager.Scroll *= (e.deltaY > 0) ? 1.09 : 0.91;

            if (InputManager.Scroll < InputManager.ScrollMin) InputManager.Scroll = InputManager.ScrollMin;
            if (InputManager.Scroll > InputManager.ScrollMax) InputManager.Scroll = InputManager.ScrollMax;

            /*console.log("e.delta" + e.deltaY);
            let delta = e.deltaY * 0.001;
            console.log("delta" + delta);;
            console.log("Input Scroll" + InputManager.Scroll);
            InputManager.Scroll += delta;
            console.log("Input Scroll" + InputManager.Scroll);
            InputManager.Scroll = Math.min(InputManager.Scroll, InputManager.ScrollMin);
            InputManager.Scroll = Math.max(InputManager.Scroll, InputManager.ScrollMax);*/
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