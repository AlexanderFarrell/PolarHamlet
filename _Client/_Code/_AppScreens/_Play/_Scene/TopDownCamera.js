import {Part} from "../../../_Engine/_Gameplay/_Body/Part";
import {ArcRotateCamera, Camera, Vector3} from "@babylonjs/core";
import {Game} from "../../../_Game/Game";

export class TopDownCamera extends Part {
    constructor(body) {
        super(body);

        this.Camera = null;
    }

    Begin() {
        let camera = new ArcRotateCamera('Camera', 0, 0, 10, new Vector3(0,0,0), Game.Scene);

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
    }

    Update(){
        if (this.Target !== null){
            this.CameraBase.target = this.Target.Position;
        }
    }
}