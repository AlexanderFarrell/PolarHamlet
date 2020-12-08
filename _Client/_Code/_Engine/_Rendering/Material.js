import {Game} from "../../_Game/Game";

export class Material {
    constructor(vertexShader, fragmentShader) {
        this.VertexShader = vertexShader;
        this.FragmentShader = fragmentShader;

        this.Program = Game.WebGL.createProgram();
        Game.WebGL.attachShader(this.Program, this.VertexShader);
        Game.WebGL.attachShader(this.Program, this.FragmentShader);
        Game.WebGL.linkProgram(this.Program);

        if (Game.WebGL.getProgramParameter(this.Program, Game.WebGL.LINK_STATUS)) {
            throw new GraphicsError('Cannot create GPU program for given shaders');
        }
    }

    getUniformVariableLocation(uniformName){
        return Game.WebGL.getUniformLocation(this.Program, uniformName);
    }
}