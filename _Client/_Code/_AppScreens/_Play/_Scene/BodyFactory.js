

import {Game} from "../../../_Game/Game";
import {SceneObject} from "../../../_Engine/_Gameplay/_Characters/_Body/_Parts/SceneObject";
import {ArcRotateCamera, Mesh, MeshBuilder} from "@babylonjs/core";
import {Body} from "../../../_Engine/_Gameplay/_Characters/_Body/Body";

export class BodyFactory {
    static CreateGeneric(name, mesh = null){
        let body = new Body();
        let visualMatter = new SceneObject((mesh instanceof Mesh) ? mesh : new Mesh(name, Game.Scene));
        body.AddPart(visualMatter);
    }

    static CreateLand(){
        let options = {
            xmin: -100,
            zmin: -100,
            xmax: 100,
            zmax: 100,
            subdivisions: {w: 4, h: 4},
            updatable: true
        }

        let landMesh = MeshBuilder.CreateTiledGround('Tiled Ground', options, Game.Scene);
    }

    static CreateCamera() {
        //let camera = new ArcRotateCamera();
    }

    static CreateWithParts(name, parts){
        let body = this.CreateGeneric(name);
        parts.forEach((part) => {
            body.AddPart(part);
        })
    }
}