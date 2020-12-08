import {Game} from "../../_Game/Game";

export class ShaderFactory {
    static LoadVertexShader(path){
        return this.LoadShader(path, Game.WebGL.VERTEX_SHADER);
    }

    static LoadFragmentShader(path) {
        return this.LoadShader(path, Game.WebGL.FRAGMENT_SHADER);
    }

    static LoadShader(path, type){
        const shader = Game.WebGL.createShader(type);
        Game.WebGL.shaderSource(shader, path);
        Game.WebGL.compileShader(shader);

        if (!Game.WebGL.getShaderParameter(shader, Game.WebGL.COMPILE_STATUS)) {
            Game.WebGL.deleteShader(shader);

            throw new GraphicsError("Error compiling shader: " + path);
        }

        return shader;
    }
}