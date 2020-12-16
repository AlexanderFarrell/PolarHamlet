import {Position} from "../_Gameplay/Position";

export class Rectangle {
    constructor(center, size) {
        this.Center = center;
        this.Size = size;
    }

    IsInsidePosition(position){
        let topLeft = this.TopLeft();
        let bottomRight = this.BottomRight();

        return ((position.X > topLeft.X) && (position.Y > topLeft.Y) && (position.X < bottomRight.X) && (position.Y < bottomRight.Y));
    }

    IsRectangleInside(rectangle){
        let topLeft = this.TopLeft();
        let bottomRight = this.BottomRight();

        let otherTopLeft = rectangle.TopLeft();
        let otherBottomRight = rectangle.BottomRight();

        let left = Math.max(topLeft.X, otherTopLeft.X);
        let right = Math.min(bottomRight.X, otherBottomRight.X);
        let up = Math.max(topLeft.Y, otherTopLeft.Y);
        let down = Math.min(bottomRight.Y, otherBottomRight.Y);

        return ((left < right) && (up < down));
    }

    TopLeft(){
        return new Position(this.Center.X - this.Size.X/2, this.Center.Y - this.Size.Y/2);
    }

    BottomRight(){
        return new Position(this.Center.X + this.Size.X/2, this.Center.Y + this.Size.Y/2);
    }
}