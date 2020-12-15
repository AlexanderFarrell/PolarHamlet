import {World} from "../../../_Engine/_Gameplay/_Anava/_Realm/World";
import {Game} from "../../../_Game/Game";
import {Realm} from "../../../_Engine/_Gameplay/_Anava/_Realm/Realm";
import {BodyFactory} from "../../../_Engine/_Gameplay/_Characters/_Body/BodyFactory";
import {TopDownCamera} from "../_Scene/TopDownCamera";
import {PolarHamletSetting} from "./PolarHamletSetting";
import {Scene} from "@babylonjs/core";
import $ from 'jquery';

export class PolarHamletWorld extends World {
    constructor(name) {
        super([], null);
        this.Name = name;
    }

    MakeNewEditor(error, callback){
        let setting = new PolarHamletSetting('New Setting');
        setting.CreateEditor();
        callback();
    }

    Create(error, callback) {
        Game.Scene = new Scene(Game.Engine);
        let settingData = new PolarHamletSetting('Frozen Tundra');
        settingData.CreateTest();
        callback();
    }

    Load(error, callback) {
        Game.Scene = new Scene(Game.Engine);

        PolarHamletWorld.LoadAttributes(this.Name, OnError, OnLoad);

        function OnLoad(worldData){
            this.Camera = BodyFactory.CreateWithParts('camera', [new TopDownCamera()]);

            let settingData = new PolarHamletSetting(worldData.StartSetting);

            settingData.AddNoun(this.Camera);
        }

        function OnError(message){
            throw new Error(message);
        }
    }

    static LoadAttributes(name, error, callback){
        $.ajax({
            url: '/worlds',
            type: 'GET',
            dataType: 'json',
            data: {name: name},
            success: function (response) {
                if (response && response.success){
                    callback(response);
                } else {
                    if (response.errorMessage){
                        error(response.errorMessage);
                    } else {
                        error("Server Error: Could not get world named " + name + ". Issue loading file.")
                    }
                }
            },
            error: function (status, errorThrown) {
                error("Server Error: Could not get world named " + name + ". Could not connect.");
            }
        });
    }

    static LoadData(name, error, callback){
        $.ajax({
            url: '/worlds/load',
            type: 'GET',
            dataType: 'json',
            data: {name: name},
            success: function (response) {
                if (response && response.success){
                    callback(response);
                } else {
                    if (response.errorMessage){
                        error(response.errorMessage);
                    } else {
                        error("Server Error: Could not get world data named " + name + ". Issue loading file.")
                    }
                }
            },
            error: function (status, errorThrown) {
                error("Server Error: Could not get world data named " + name + ". Could not connect.");
            }
        });
    }

    static SaveWorld(name, data, error, callback){
        $.ajax({
            url: '/worlds/save',
            type: 'POST',
            dataType: 'json',
            data: {name: name, data: JSON.stringify(data)},
            success: function (response) {
                if (response && response.success){
                    callback(response);
                } else {
                    if (response.errorMessage){
                        error(response.errorMessage);
                    } else {
                        error("Server Error: Could not get world data named " + name + ". Issue loading file.")
                    }
                }
            },
            error: function (status, errorThrown) {
                error("Server Error: Could not get world data named " + name + ". Could not connect.");
            }
        });
    }

    Start() {
        Realm.SetWorld(this);
    }

    End() {
        Realm.CleanupWorld();
    }
}