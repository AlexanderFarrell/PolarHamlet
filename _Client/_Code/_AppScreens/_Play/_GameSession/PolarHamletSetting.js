import {Setting} from "../../../_Engine/_Gameplay/_Anava/Setting";
import {BodyFactory} from "../../../_Engine/_Gameplay/_Characters/_Body/BodyFactory";
import {TopDownCamera} from "../_Scene/TopDownCamera";
import {TileMap} from "../../../_Engine/TileMap";
import {Sprite} from "../_Scene/Sprite";
import {Player} from "../_Scene/_Departments/Player";
import {SpiritFactory} from "../../../_Engine/_Gameplay/_Characters/_Spirit/SpiritFactory";
import {MindFactory} from "../../../_Engine/_Gameplay/_Characters/_Mind/MindFactory";
import {EditorCameraControl} from "../_Scene/_Departments/EditorCameraControl";

export class PolarHamletSetting extends Setting {
    constructor(name) {
        super();

        this.Name = name;
    }

    CreateEditor(){
        let targetBody = BodyFactory.CreateGeneric();
        let targetMind = MindFactory.CreateWithDepartments([new EditorCameraControl()]);
        this.CameraControl = SpiritFactory.InitWithBodyAndMind('CameraControl', targetBody, targetMind);
        this.AddNoun(targetBody);
        this.AddNoun(this.CameraControl);

        let camera = BodyFactory.CreateWithParts('Camera', [new TopDownCamera()]);
        camera.TopDownCamera.Target = targetBody.SceneObject;
        this.AddNoun(camera);

        let tileMap = BodyFactory.CreateWithParts('Tilemap', [new TileMap()]);
        tileMap.TileMap.Generate();
        this.AddNoun(tileMap);
    }

    CreateTest(){

        let playerBody = BodyFactory.CreateWithParts('Player', [new Sprite()]);
        let playerMind = MindFactory.CreateWithDepartments([new Player()]);
        this.Player = SpiritFactory.InitWithBodyAndMind('Player', playerBody, playerMind);
        console.log(playerBody);
        this.AddNoun(playerBody)

        this.Map = BodyFactory.CreateWithParts('map', [new TileMap(64, 64)])
        console.log(this.Map);
        this.Map["TileMap"].Generate();

        this.Camera = BodyFactory.CreateWithParts('camera', [new TopDownCamera()]);
        this.Camera.TopDownCamera.Target = playerBody;
        this.AddNoun(this.Camera);
    }

    Load(worldName){
        PolarHamletSetting.LoadAttributes(this.Name, worldName,OnError, OnLoad);

        function OnLoad(worldData){
            this.Camera = BodyFactory.CreateWithParts('camera', [new TopDownCamera()]);

            this.ActiveSetting = new PolarHamletSetting(worldData.StartSetting);
            this.ActiveSetting.Load();
        }

        function OnError(message){
            throw new Error(message);
        }
    }

    static LoadAttributes(name, worldName, error, callback){
        $.ajax({
            url: '/worlds/regions/data',
            type: 'GET',
            dataType: 'json',
            data: {name: name, world: worldName},
            success: function (response) {
                if (response && response.success){
                    callback(response);
                } else {
                    if (response.errorMessage){
                        error(response.errorMessage);
                    } else {
                        error("Server Error: Could not get region named " + name + ". Issue loading file.")
                    }
                }
            },
            error: function (status, errorThrown) {
                error("Server Error: Could not get region named " + name + ". Could not connect.");
            }
        });
    }
}