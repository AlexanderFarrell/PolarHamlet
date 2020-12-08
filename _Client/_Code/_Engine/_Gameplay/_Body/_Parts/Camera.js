import {Part} from "../Part";
import {Game} from "../../../../_Game/Game";
import {mat4, vec3} from "gl-matrix";

export class Camera extends Part {
    constructor(body) {
        super(body);

        //Projection Matrix
        this.FieldOfView = 45 * Math.PI / 180;
        this.NearPlane = 0.1;
        this.FarPlane = 100;

        //View Matrix
        this.LocalTarget = vec3.fromValues(0,0,1);
        this.WorldTarget = vec3.create();
        this.UpVector = vec3.fromValues(0,1,0);

        //Matrix Data Allocation
        this.ViewMatrix = mat4.create();
        this.ProjectionMatrix = mat4.create();
        this.CameraMatrix = mat4.create();

        //Projection matrix only needs to be adjusted when the window is resized.
        window.onresize = this.OnResize;

        this.CalculateViewMatrix();
        this.CalculateProjectionMatrix();
    }

    OnResize(){
        this.CalculateAspectRatio();
        this.CalculateViewMatrix();
        this.CalculateProjectionMatrix();
    }

    CalculateAspectRatio(){
        this.AspectRatio = Game.Canvas.clientWidth / Game.Canvas.clientHeight;
    }

    CalculateProjectionMatrix(){
        this.CalculateAspectRatio();
        mat4.perspective(
            this.ProjectionMatrix,
            this.FieldOfView,
            this.AspectRatio,
            this.NearPlane,
            this.FarPlane);
    }

    CalculateViewMatrix(){
        mat4.lookAt(
            this.ViewMatrix,
            this.Body.Orientation.Position,
            vec3.transformMat4(this.WorldTarget, this.LocalTarget, this.Body.Orientation.GetRotationMatrix()),
            this.UpVector);
    }

    CalculateCameraMatrix(){
        mat4.multiply(this.CameraMatrix, this.ViewMatrix, this.ProjectionMatrix);
    }

    Update(){
        this.CalculateViewMatrix();
        this.CalculateCameraMatrix();
    }
}

