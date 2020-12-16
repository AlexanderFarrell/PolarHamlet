export class DrawingObject {
    constructor() {
    }

    Draw(rectangle, order = 0){
        throw new Error('Baseclass Draw function called');
    }
}