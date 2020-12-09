export class SceneEnv {
    constructor() {
        SceneEnv.Bodies = [];
    }

    End(){
        SceneEnv.Bodies.forEach((body) => {
            body.End();
        })
    }
}