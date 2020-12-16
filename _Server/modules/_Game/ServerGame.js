

const {Player} = require("./Player");
const {World} = require("./World");

class ServerGame {
    constructor() {
        this.LastUpdates = [];
    }

    Begin(app){
        this.World = new World();
        this.Actions = [];
        ServerGame.Players = [];
        ServerGame.PlayersNamed = [];
        this.Ai = [];
        this.turn = 0;

        console.log(this.turn);

        ServerGame.World = this.World;
        this.updateLoop = setInterval(() => {this.Update(app);}, 3000);
    }

    Join(player, app){

        if (!ServerGame.PlayersNamed.hasOwnProperty(player.Name)){
            console.log(player.Name + " joined game!")
            ServerGame.Players.push(player);
            ServerGame.PlayersNamed[player.Name] = player;
        } else {
            ServerGame.PlayersNamed[player.Name].SocketId = player.SocketId;
            console.log("Welcoming back " + player.Name + "!");
            console.log(ServerGame.PlayersNamed[player.Name]);
        }

        app.get("sockets").InitPlayer({world: this.World});
    }

    Load(){

    }

    ReceiveMoves(player, moves){
        console.log(player + ": " + JSON.stringify(moves));
    }

    NewEntity(user, entity, app){
        console.log("ReceivedEntity");

        if (ServerGame.PlayersNamed[user] !== undefined){
            let actualEntity = {name: 'house', x: entity.bounds.Center.X, y: entity.bounds.Center.Y, width: 0.2, height: 0.2, color: 'green', owner: user};//new Entity('house', new Rectangle(entity.bounds.center, new Position(0.2, 0.2)), new ColorDrawer('green'));

            ServerGame.PlayersNamed[user].Buildings++;

            ServerGame.World.Entities.push(actualEntity);
            app.get("sockets").ServeNewEntity(actualEntity);
        }
    }

    Update(app){
        this.turn = this.turn + 1;
        //console.log('Emit');

        app.get("sockets").Update({turn: this.turn});

        for (const player in ServerGame.PlayersNamed){
            if (ServerGame.PlayersNamed.hasOwnProperty(player)){
                app.get('sockets').SendOne(ServerGame.PlayersNamed[player].data(), ServerGame.PlayersNamed[player].SocketId);
            }
        }

        /*ServerGame.Players.forEach((player) => {
            //player.update(app.get("sockets").io);
            app.get('sockets').SendOne(player.data(), player.SocketId);
        })*/

        //this.SendUpdate({turn: this.turn});
    }

    End(){
        clearInterval(this.updateLoop);
    }
}

module.exports = {ServerGame};