import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {GameBuilder} from "../../_Game/GameBuilder";
import $ from 'jquery';
import {Game} from "../../_Game/Game";

export class PlayModel extends AppStateModel {
    constructor() {
        super();
    }

    Load(error, callback) {
        GameBuilder.StartEngine();
        $.ajax('/game/join', {
            method: 'POST',
            data: {game: 0},
            success: function (data){
                if (data.success){
                    console.log(data);
                    this.turn = data.turn;
                    callback();
                } else {
                    error(data.message);
                }
            },
            error: function (data) {
                error("Error connecting to server");
            }
        })
    }

    Begin(error, callback) {
        this.UpdateLoop = setInterval(this.Update, 1000);

        callback();
    }

    async Update() {
        if (!this.IsUpdating){
            this.IsUpdating = true;
            $.ajax('/game', {
                method: 'GET',
                data: {turn: this.turn},
                success: function (data){
                    if (data.success){
                        console.log(data);
                        this.turn = data.turn;
                        this.IsUpdating = false;
                    } else {
                        GameBuilder.;
                    }
                },
                error: function (data) {
                    error("Error connecting to server");
                }
            })
        }
    }

    End(error, callback) {
        clearInterval(this.UpdateLoop);

        $.ajax('/game/leave', {
            method: 'POST',
            data: {game: 0},
            success: function (data){
                if (data.success){
                    console.log(data);
                    this.turn = data.turn;
                    callback();
                } else {
                    error(data.message);
                }
            },
            error: function (data) {
                error("Error connecting to server");
            }
        })

        super.End(error, callback);
    }

    RenderLoop() {

    }
}