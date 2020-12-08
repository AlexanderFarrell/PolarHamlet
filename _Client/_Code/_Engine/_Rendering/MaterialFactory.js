import {Material} from "./Material";
import {ShaderFactory} from "./ShaderFactory";

export class MaterialFactory {
    static CreateMaterialFromPaths(vertexShaderPath, fragmentShaderPath){
        let vertexShader = ShaderFactory.LoadVertexShader(vertexShaderPath);
        let fragmentShader = ShaderFactory.LoadFragmentShader(fragmentShaderPath);
        return new Material(vertexShader, fragmentShader);
    }
}