
import {
    ArcFollowCamera,
    ArcRotateCamera,
    Camera, Mesh,
    MeshBuilder,
    StandardMaterial,
    Texture,
    Vector3
} from "@babylonjs/core";
import {Game} from "../../../_Game/Game";
import {Part} from "../../../_Engine/_Gameplay/_Characters/_Body/Part";
import {Realm} from "../../../_Engine/_Gameplay/_Anava/_Realm/Realm";

export class TopDownCamera extends Part {
    constructor(body) {
        super(body);

        this.Camera = null;
    }

    Begin() {
        //let cube = MeshBuilder.CreateBox('TestBox', {size: 1});
        let cube = new Mesh('CameraTarget', Game.Scene);
        cube.position = new Vector3(10, 0, 10);

        let camera = new ArcFollowCamera('Camera', 0,0.5 * Math.PI,10, cube, Game.Scene);

        this.CameraBase = camera;
        this.TargetBase = cube;

        let material = new StandardMaterial('GroundMaterial', Game.Scene);
        material.diffuseTexture = new Texture('images/PolarHamletGem.png', Game.Scene);
        this.TargetBase.material = material;
        Realm.AddToUpdate(this);

        /*let camera = new ArcRotateCamera('Camera', 0, 0.5 * Math.PI, 10, new Vector3(0,0,0), Game.Scene);

        camera.mode = Camera.ORTHOGRAPHIC_CAMERA;
        camera.orthoLeft = 5;
        camera.orthoRight = 5;
        camera.orthoBottom = 5;
        camera.orthoTop = 5;

        camera.attachControl(Game.Canvas, true, 0);

        camera.panningAxis = new Vector3(1,1,0);
        camera.upperBetaLimit = 0;
        camera.wheelPrecision = 0.1;
        camera.panningSensibility = 1;
        camera.inertia = 0.1;
        camera.panningInertia = 0.2;
        camera._panningMouseButton = 0;
        camera.angularSensibilityX = 500;
        camera.angularSensibilityY = 500;

        this.CameraBase = camera;

        console.log(this.CameraBase);*/
    }

    Update(){
        if (this.Target !== null && this.Target !== undefined){
            this.TargetBase.position = this.Target.Mesh.position;
        }

        this.CameraBase.target = this.TargetBase.position;
    }

    End() {
        Realm.RemoveFromUpdate(this);
    }
}