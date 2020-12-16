const {ClientUpdater} = require("../modules/_Connect/ClientUpdater");
const {ServerGame} = require("../modules/_Game/ServerGame");

function SetupGame(app){
    const game = new ServerGame();
    game.Begin(app);
    app.set("Game", game);

    //const connections = new ClientUpdater();
    //app.set('ClientUpdater', connections);
}

exports.load = SetupGame;