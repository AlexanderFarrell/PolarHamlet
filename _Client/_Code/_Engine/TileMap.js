import {ClayMesh} from "./_DataStructures/ClayMesh";
import {Vector3} from "@babylonjs/core";

export class TileMap {
    constructor(width, height) {
        let options = {
            width: width,
            height: height
        }

        this.Generate(options);
    }

    Generate(options){
        this.ClayMesh = new ClayMesh(['Normals', 'UV']);

        let vertexOffset = 0;

        for (let x = 0; x < options.width; x++){
            for (let y = 0; y < options.height; y++){
                this.ClayMesh.Vertices.push(new Vector3(x, 0, y));
                this.ClayMesh.Vertices.push(new Vector3(x + 1, 0, y));
                this.ClayMesh.Vertices.push(new Vector3(x, 0, y + 1));
                this.ClayMesh.Vertices.push(new Vector3(x + 1, 0, y + 1));

                this.ClayMesh.Indices.push(vertexOffset);
                this.ClayMesh.Indices.push(vertexOffset + 1);
                this.ClayMesh.Indices.push(vertexOffset + 2);
                this.ClayMesh.Indices.push(vertexOffset + 1);
                this.ClayMesh.Indices.push(vertexOffset + 2);
                this.ClayMesh.Indices.push(vertexOffset + 3);

                vertexOffset += 4;
            }
        }
    }
}