import {Setting} from "../../../_Engine/_Gameplay/_Anava/Setting";
import {BodyFactory} from "../_Scene/BodyFactory";
import {TopDownCamera} from "../_Scene/TopDownCamera";

export class PolarHamletSetting extends Setting {
    constructor(name) {
        super();

        this.Name = name;
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