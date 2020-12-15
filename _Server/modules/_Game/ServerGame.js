const {Player} = require("./Player");
const {World} = require("./World");

class ServerGame {
    constructor() {
        this.LastUpdates = [];
    }

    Begin(){
        this.World = new World();
        this.Actions = [];
        this.Players = [];
        this.Ai = [];
        this.turn = 0;

        this.updateLoop = setInterval(() => {this.Update();}, 3000);
        console.log(this.turn);
        console.log(this.Players);
    }

    Join(player){
        console.log(player + " joined game!")
        this.Players.push(new Player(player));
    }

    Load(){

    }

    Update(){
        this.turn = this.turn + 1;
        console.log(this.turn);
    }

    End(){
        clearInterval(this.updateLoop);
    }
}

module.exports = {ServerGame};