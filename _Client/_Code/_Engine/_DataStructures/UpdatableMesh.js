import {VertexBuffer} from "@babylonjs/core";


export class UpdatableMesh {
    constructor(clayMesh, name, meshOptions = null) {
        this.ClayMesh = clayMesh;
        this.Mesh = clayMesh.GetMesh(name, true);
    }

    Apply(){
        this.Mesh.updateVerticesData(VertexBuffer.PositionKind, this.ClayMesh.Vertices);
        this.Mesh.updateIndices(this.ClayMesh.Indices);

        if (this.ClayMesh.hasOwnProperty('Normals')){
            this.Mesh.updateVerticesData(VertexBuffer.NormalKind, this.ClayMesh.Normals);
        }

        if (this.ClayMesh.hasOwnProperty('Colors')){
            this.Mesh.updateVerticesData(VertexBuffer.ColorKind, this.ClayMesh.Colors);
        }

        if (this.ClayMesh.hasOwnProperty('UV')){
            this.Mesh.updateVerticesData(VertexBuffer.UVKind, this.ClayMesh.UV);
        }
    }
}