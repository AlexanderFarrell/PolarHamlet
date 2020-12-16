const socketIoSession = require('express-socket.io-session');
const {Player} = require("../_Game/Player");

class GameConnectionHandler {

    Start(app, server){
        const io = require('socket.io')(server);
        const ioSession = require('express-socket.io-session');

        let handler = this;

        io.use(ioSession(app.get('SessionHandler'), {
            autoSave: true
        }));
        io.on('connection', (socket) => {
            console.log(socket.handshake.session.username + ' connected');
            if (socket.handshake.session.username !== undefined){
                app.get("Game").Join(new Player(socket.handshake.session.username, socket.id), app);
            }

            socket.on('disconnect', () => {
                console.log(socket.handshake.session.username + ' disconnected');
            })

            socket.on('moves', (moves) => {
                this.ReceiveMoves(socket.handshake.session.username, moves);
                //console.log(socket.handshake.session.username + ': ' + JSON.stringify(moves))
            })

            handler.Update = function UpdateWorld(worldUpdates){
                console.log("Emit");
                socket.emit('world', worldUpdates);
            }
        });

        this.io = io;

        //app.get('Game').SendUpdate = this.Update;
        this.ReceiveMoves = app.get('Game').ReceiveMoves;
    }

    Update(worldUpdates){
        this.io.emit('world', worldUpdates);
    }

    InitPlayer(world){
        this.io.emit('init', JSON.stringify(world));
    }
}

module.exports = {ConnectionService: GameConnectionHandler};