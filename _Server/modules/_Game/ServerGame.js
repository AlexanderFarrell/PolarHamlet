const {Player} = require("./Player");
const {World} = require("./World");

class ServerGame {
    constructor() {
        this.LastUpdates = [];
    }

    Begin(app){
        this.World = new World();
        this.Actions = [];
        this.Players = [];
        this.Ai = [];
        this.turn = 0;

        this.updateLoop = setInterval(() => {this.Update(app);}, 3000);
        console.log(this.turn);
        console.log(this.Players);
    }

    Join(player, app){
        console.log(player + " joined game!")
        this.Players.push(new Player(player));
        app.get("sockets").InitPlayer({world: this.World});
    }

    Load(){

    }

    ReceiveMoves(player, moves){
        console.log(player + ": " + JSON.stringify(moves));
    }

    Update(app){
        this.turn = this.turn + 1;
        console.log('Emit');

        app.get("sockets").Update({turn: this.turn});
        //this.SendUpdate({turn: this.turn});
    }

    End(){
        clearInterval(this.updateLoop);
    }
}

module.exports = {ServerGame};