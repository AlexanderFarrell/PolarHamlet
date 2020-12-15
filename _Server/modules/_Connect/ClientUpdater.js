
class ClientUpdater {
    constructor() {
        this.UpdateCache = 3;
        this.Connections = {};
    }

    Connect(user, game){
        console.log(user + " connected!")
        this.Connections[user] = game;
        game.Join(user);
    }

    Disconnect(user){
        delete this.Connections[user];
    }

    Update(req, res) {
        let currentTurn = parseInt(req.body.turn, 10);

        if ((req.session.username === undefined) || (this.Connections[req.session.username] === undefined)){
            res.json({success: false, message: "Not logged in."});
            return;
        }

        if (currentTurn === undefined){
            res.json({success: false, message: "Please send current turn."});
            return;
        }

        let neededTurns = this.Connections[req.session.username].turn - currentTurn;

        if (neededTurns > this.UpdateCache){
            res.json({success: false, message: "Please re-login. Slow connection."});
            return;
        }

        let turnData = [];
        for (let i = 0; i < neededTurns; i++){
            turnData.push(this.Connections[req.session.username].LastUpdates[i]);
        }
        res.json({success: true, turnData: JSON.stringify(turnData)});
    }
}

module.exports = {ClientUpdater};