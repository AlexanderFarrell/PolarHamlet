import {ClayMesh} from "./_DataStructures/ClayMesh";
import {StandardMaterial, Vector2, Vector3} from "@babylonjs/core";
import {Game} from "../_Game/Game";
import {Part} from "./_Gameplay/_Characters/_Body/Part";

export class TileMap extends Part {
    constructor(width, height) {
        super();
    }

    Generate(){
        let options = {
            width: 64,
            height: 64
        }

        this.ClayMesh = new ClayMesh(['Normals', 'UV']);

        let vertexOffset = 0;

        for (let x = 0; x < options.width; x++){
            for (let y = 0; y < options.height; y++){
                this.ClayMesh.Vertices.push(x);
                this.ClayMesh.Vertices.push(0);
                this.ClayMesh.Vertices.push(y);

                this.ClayMesh.Vertices.push(x + 1);
                this.ClayMesh.Vertices.push(0);
                this.ClayMesh.Vertices.push(y);

                this.ClayMesh.Vertices.push(x);
                this.ClayMesh.Vertices.push(0);
                this.ClayMesh.Vertices.push(y + 1);

                this.ClayMesh.Vertices.push(x + 1);
                this.ClayMesh.Vertices.push(0);
                this.ClayMesh.Vertices.push(y + 1);

                /*this.ClayMesh.Vertices.push(new Vector3(x, 0, y));
                this.ClayMesh.Vertices.push(new Vector3(x + 1, 0, y));
                this.ClayMesh.Vertices.push(new Vector3(x, 0, y + 1));
                this.ClayMesh.Vertices.push(new Vector3(x + 1, 0, y + 1));

                this.ClayMesh.UV.push(new Vector2(0,0));
                this.ClayMesh.UV.push(new Vector2(1,0));
                this.ClayMesh.UV.push(new Vector2(0,1));
                this.ClayMesh.UV.push(new Vector2(1,1));

                this.ClayMesh.Normals.push(new Vector3(0,1,0));
                this.ClayMesh.Normals.push(new Vector3(0,1,0));
                this.ClayMesh.Normals.push(new Vector3(0,1,0));
                this.ClayMesh.Normals.push(new Vector3(0,1,0));*/

                this.ClayMesh.Indices.push(vertexOffset);
                this.ClayMesh.Indices.push(vertexOffset + 1);
                this.ClayMesh.Indices.push(vertexOffset + 2);
                this.ClayMesh.Indices.push(vertexOffset + 1);
                this.ClayMesh.Indices.push(vertexOffset + 2);
                this.ClayMesh.Indices.push(vertexOffset + 3);

                vertexOffset += 4;
            }
        }

        this.Body.Mesh = this.ClayMesh.GetMesh('TileMap', true);
        let material = new StandardMaterial('tiles', Game.Scene);
        material.wireframe = true;
        this.Body.Mesh.material = material;
    }
}