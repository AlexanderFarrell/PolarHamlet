
class ClientUpdater {
    constructor() {
        this.UpdateCache = 3;
        this.Connections = {};
    }

    Connect(user, game){
        console.log(user + " joined game!")
        this.Connections[user] = game;
        game.Join(user);
    }

    Disconnect(user){
        delete this.Connections[user];
    }

    Update() {

    }
}

module.exports = {ClientUpdater};