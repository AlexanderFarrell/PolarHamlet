import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {GameBuilder} from "../../_Game/GameBuilder";

import {io} from 'socket.io-client';
import {ClientWorld} from "../../_Engine/_Gameplay/ClientWorld";

import $ from 'jquery';
import {Game} from "../../_Game/Game";
import {Entity} from "../../_Engine/_Gameplay/Entity";
import {Rectangle} from "../../_Engine/_Gameplay/Rectangle";
import {Position} from "../../_Engine/_Gameplay/Position";
import {ColorDrawer} from "../../_Engine/_Gameplay/ColorDrawer";

export class PlayModel extends AppStateModel {
    constructor() {
        super();
    }

    Load(error, callback) {
        //setInterval(() => {this.Update();}, 500);
        Game.PlayerData = "Fetching Statistics!";
        Game.CurrentAction = "";

        $.ajax('/world', {
            method: 'POST',
            data: {turn: this.turn},
            success: function (data){
                if (data.success){
                    console.log(data);

                    ClientWorld.data = data;

                    Game.socket = io();

                    Game.socket.on('connect', function (){
                        console.log("Connect")
                    })
                    Game.socket.on('world', (data) => {
                        console.log(data.turn);

                        //$('#BarDisplay').innerText = data.turn;

                        //document.getElementById('BarDisplay').innerText = data.turn;
                    })
                    Game.socket.on('player', (data) => {

                        //console.log("Received Player Data!");
                        //console.log(displayString);
                        Game.PlayerData = "Citizens: " + data.citizens + " - Ore: " + data.ore + " - Food: " + data.food + " - Buildings: " + data.buildings;

                        document.getElementById('BarDisplay').innerText = Game.PlayerData + "        " + Game.CurrentAction;
                    })
                    Game.socket.on('notify-new-entity', (entity) => {
                        ClientWorld.Entities.push(new Entity(entity.name, new Rectangle(new Position(entity.x, entity.y), new Position(entity.width, entity.height)), new ColorDrawer('green')));
                        console.log("New Entity " + JSON.stringify(entity));
                    })
                    /*Game.socket.on('init', (data) => {
                        console.log("init with " + JSON.stringify(data));
                        //ClientWorld.Begin();
                    })*/
                    Game.socket.on('disconnect', () => {
                        console.log("Disconnect");
                    })

                    Game.socket.emit("test");

                    callback();
                } else {
                    console.log(data.message);
                    error(data.message);
                }
            },
            error: function (data) {
                error("Error connecting to server");
            }
        })


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

        console.log(ClientWorld.data);
        ClientWorld.Begin(ClientWorld.data);

        callback();
    }

    Update() {
        //Game.socket.emit('moves', {moves: 'This worked!'});

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
        ClientWorld.End();


        delete Game.socket;

        callback();
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