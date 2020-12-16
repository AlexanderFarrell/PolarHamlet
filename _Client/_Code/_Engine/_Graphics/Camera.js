import {Position} from "../_Gameplay/Position";
import {Rectangle} from "../_Gameplay/Rectangle";
import {Game} from "../../_Game/Game";
import {Graphics} from "./Graphics";

export class Camera {
    constructor() {
        this.Rectangle = new Rectangle(new Position(0,0), new Position(20, 10));
        this.BaseRectangle = new Rectangle(new Position(0,0), new Position(20, 10));
        this.Scale = new Position(0,0); //Not to access, stored here just for performance.
    }

    TransformRect(rect){
        this.GetViewScale();

        let transformOutRect = new Rectangle(new Position(0,0), new Position(0,0));

        transformOutRect.Center.X = (rect.Center.X - this.Rectangle.Center.X + this.Rectangle.Size.X/2) * this.Scale.X;
        transformOutRect.Center.Y = (rect.Center.Y - this.Rectangle.Center.Y + this.Rectangle.Size.Y/2) * this.Scale.Y;

        transformOutRect.Size.X = rect.Size.X * this.Scale.X;
        transformOutRect.Size.Y = rect.Size.Y * this.Scale.Y;

        return transformOutRect;
    }

    TransformPos(position){
        this.GetViewScale();

        let transformOutPosition = new Position(0,0)

        transformOutPosition.X = (position.X - this.Rectangle.Center.X) * this.Scale.X;
        transformOutPosition.Y = (position.Y - this.Rectangle.Center.Y) * this.Scale.Y;

        return transformOutPosition;
    }

    InverseTransformPos(position){
        this.GetViewScale();

        let transformOutPosition = new Position(0,0)

        transformOutPosition.X = (position.X - this.Rectangle.Center.X) / this.Scale.X;
        transformOutPosition.Y = (position.Y - this.Rectangle.Center.Y) / this.Scale.Y;

        return transformOutPosition;
    }

    GetViewScale(){
        this.Scale.X = Graphics.Canvas.width / this.Rectangle.Size.X;
        this.Scale.Y = Graphics.Canvas.height / this.Rectangle.Size.Y;

        return this.Scale;
    }
}