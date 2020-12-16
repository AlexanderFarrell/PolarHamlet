import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {GameBuilder} from "../../_Game/GameBuilder";

import {io} from 'socket.io-client';
import {ClientWorld} from "../../_Engine/_Gameplay/ClientWorld";

export class PlayModel extends AppStateModel {
    constructor() {
        super();
    }

    Load(error, callback) {
        this.socket = io();

        this.socket.on('connect', function (){
            console.log("Connect")
        })
        this.socket.on('world', (data) => {
            console.log(data.turn);
        })
        this.socket.on('init', (data) => {
            console.log("init with " + JSON.stringify(data));
        })
        this.socket.on('disconnect', () => {
            console.log("Disconnect");
        })

        this.socket.emit("test");

        //setInterval(() => {this.Update();}, 500);

        callback();

        /*this.io.on('connect', (socket) => {
            socket.on('authenticated', function (){
                setInterval(() => {update(socket);}, 1000)
            });
            socket.emit('authenticate', {});
            socket.on('disconnect', () => {
                console.log("Disconnected from server");
            })
        })*/


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
        GameBuilder.StartEngine();
        this.UpdateLoop = setInterval(() => {this.Update();}, 500);

        ClientWorld.Begin();


        callback();
    }

    Update() {
        this.socket.emit('moves', {moves: 'This worked!'});

        //this.socket.emit("test");
        //this.socket.emit('Player sending moves to server');
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
}