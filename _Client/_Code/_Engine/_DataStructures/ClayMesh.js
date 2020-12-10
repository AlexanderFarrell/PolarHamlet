
import {Game} from "../../_Game/Game";
import {Mesh, VertexData} from "@babylonjs/core";

export class ClayMesh {
    constructor(attributes = []) {
        this.Vertices = [];
        this.Indices = [];

        if (attributes.includes('UV')){
            this.UV = [];
        }

        if (attributes.includes('Normals')){
            this.Normals = [];
        }

        if (attributes.includes('Colors')){
            this.Colors = [];
        }

        this.AdditionalAttributes = attributes;
    }

    GetMesh(name = 'New Mesh', updatable = false, options = {}){
        let mesh = new Mesh(name, Game.Scene);

        if (options.hasOwnProperty('ComputeNormals') && (options.ComputeNormals)){
            if (this.hasOwnProperty('Normals')){
                VertexData.ComputeNormals(this.Vertices, this.Indices, this.Normals);
            } else {
                throw new GraphicsError("Tried to compute normals, but mesh does not have normals. On " + name);
            }
        }

        let vertexData = new VertexData();
        vertexData.positions = this.Vertices;
        vertexData.indices = this.Indices;

        if (this.hasOwnProperty('Normals')){
            vertexData.normals = this.Normals;
        }

        if (this.hasOwnProperty('UV')){
            vertexData.uvs = this.UV;
        }

        if (this.hasOwnProperty('Colors')){
            vertexData.colors = this.Colors;
        }

        console.log(this);
        console.log(vertexData);

        vertexData.applyToMesh(mesh);
        mesh.isPickable = false;

        console.log(mesh);

        return mesh;
    }
}