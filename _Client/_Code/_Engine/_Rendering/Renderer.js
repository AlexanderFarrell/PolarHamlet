import {Color} from "../_DataStructures/Color";

const {Game} = require("../../_Game/Game");

export class Renderer {
    constructor() {
        this.ClearColor = Color.RGB(0,0.2,0.1);
        this.DrawCommands = [];
    }

    Start(){
        this.Render();
    }

    Render(){
        Game.WebGL.clearColor(this.ClearColor.Red, this.ClearColor.Green, this.ClearColor.Blue, 1.0);
        Game.WebGL.clearDepth(1.0);
        Game.WebGL.enable(Game.WebGL.DEPTH_TEST);
        Game.WebGL.depthFunc(Game.WebGL.LEQUAL);
        Game.WebGL.clear(Game.WebGL.COLOR_BUFFER_BIT | Game.WebGL.DEPTH_BUFFER_BIT);
    }

    AddVisualObject(visualMatter){
        if (this.DrawCommands.indexOf(visualMatter.material) !== -1){
            this.DrawCommands[visualMatter.material] = this.GetNewDrawCommand(visualMatter.material);
            this.DrawCommands[visualMatter.material].objects.push(visualMatter);
        }
    }

    RemoveVisualObject(visualMatter){
        //Will throw if this command doesn't exist?
        let index = this.DrawCommands[visualMatter.material].objects.indexOf(visualMatter);
        if (index !== -1){
            this.DrawCommands[visualMatter.material].objects.splice(index, 1);

            if (this.DrawCommands[visualMatter.material].objects.length < 0){
                this.DrawCommands.splice(visualMatter.material, 1);
            }
        }
    }

    GetNewDrawCommand(material){
        return {material: material, objects: []};
    }

    DrawMesh() {

    }
}