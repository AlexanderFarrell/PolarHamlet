import {Game} from "../../_Game/Game";

export class Mesh {
    constructor() {
        this.VerticesCpu = [];
        this.IndicesCpu = [];
    }

    Buffer() {
        this.VertexBuffer = Game.WebGL.createBuffer();
        Game.WebGL.bindBuffer(Game.WebGL.ARRAY_BUFFER, this.VertexBuffer);
        Game.WebGL.bufferData(Game.WebGL.ARRAY_BUFFER, new Float32Array(this.VerticesCpu), Game.WebGL.STATIC_DRAW);
    }
}