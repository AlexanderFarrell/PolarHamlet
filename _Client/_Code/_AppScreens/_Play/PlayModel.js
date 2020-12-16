import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {GameBuilder} from "../../_Game/GameBuilder";
import $ from 'jquery';
import {Game} from "../../_Game/Game";

import {io} from 'socket.io-client';

export class PlayModel extends AppStateModel {
    constructor() {
        super();
    }

    Load(error, callback) {
        GameBuilder.StartEngine();
        let socket = io();

        let update = this.UpdateNetwork;

        /*this.io.on('connect', (socket) => {
            socket.on('authenticated', function (){
                setInterval(() => {update(socket);}, 1000)
            });
            socket.emit('authenticate', {});
            socket.on('disconnect', () => {
                console.log("Disconnected from server");
            })
        })*/

        setInterval(() => {update(socket);}, 500);

        /*$.ajax('/game/join', {
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
        })*/
    }

    Begin(error, callback) {
        this.UpdateLoop = setInterval(this.Update, 500);

        callback();
    }

    UpdateNetwork(socket){
        socket.emit('Player sending moves to server');
    }

    Update() {
        this.socket.emit('Player sending moves to server');
        /*if (!this.IsUpdating){
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
        }*/
    }

    End(error, callback) {
        clearInterval(this.UpdateLoop);

        //Not needed to disconnect. This is actually beneficial only to the player.

        /*$.ajax('/game/leave', {
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
        })*/

        super.End(error, callback);
    }

    RenderLoop() {

    }
}