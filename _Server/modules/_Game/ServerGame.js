

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
        this.Players.push(player);
        app.get("sockets").InitPlayer({world: this.World});

        console.log(this.Players);
    }

    Load(){

    }

    ReceiveMoves(player, moves){
        console.log(player + ": " + JSON.stringify(moves));
    }

    NewEntity(entity){
        console.log(entity);

        let actualEntity = {name: 'house', x: entity.bounds.Center.X, y: entity.bounds.Center.Y, width: 0.2, height: 0.2, color: 'green'};//new Entity('house', new Rectangle(entity.bounds.center, new Position(0.2, 0.2)), new ColorDrawer('green'));

        this.World.Entities.append(actualEntity);
        app.get("sockets").ServeNewEntity(actualEntity);
    }

    Update(app){
        this.turn = this.turn + 1;
        //console.log('Emit');

        app.get("sockets").Update({turn: this.turn});

        this.Players.forEach((player) => {
            //player.update(app.get("sockets").io);
            app.get('sockets').SendOne(player.data(), player.SocketId);
        })

        //this.SendUpdate({turn: this.turn});
    }

    End(){
        clearInterval(this.updateLoop);
    }
}

module.exports = {ServerGame};