import {Body} from "../../../_Engine/_Gameplay/_Body/Body";
import {ArcRotateCamera, Mesh} from 'babylonjs';
import {Game} from "../../../_Game/Game";
import {VisualMatter} from "../../../_Engine/_Gameplay/_Body/_Parts/VisualMatter";
import {MeshBuilder} from "babylonjs";

export class BodyFactory {
    static CreateGeneric(name, mesh = null){
        let body = new Body();
        let visualMatter = new VisualMatter((mesh instanceof Mesh) ? mesh : new Mesh(name, Game.Scene));
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
        let camera = new ArcRotateCamera()
    }
}