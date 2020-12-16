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
                console.log("New Player " + socket.handshake.session.username + " with ID " + socket.id);
                app.get("Game").Join(new Player(socket.handshake.session.username, socket.id), app);
            }

            socket.on('disconnect', () => {
                console.log(socket.handshake.session.username + ' disconnected');
            })

            socket.on('moves', (moves) => {
                this.ReceiveMoves(socket.handshake.session.username, moves);
                //console.log(socket.handshake.session.username + ': ' + JSON.stringify(moves))
            })

            socket.on('new-entity', (entity) => {
                this.NewEntity(socket.handshake.session.username, entity);
                //console.log(socket.handshake.session.username + ': ' + JSON.stringify(moves))
            })

            handler.Update = function UpdateWorld(worldUpdates){
                console.log("Emit");
                socket.emit('world', worldUpdates);
            }
        });

        handler.SendOne = function UpdateOne(player, socketId){
            console.log("Sending PLayer " + JSON.stringify(player));
            console.log("Socket ID " + socketId);
            io.to(socketId).emit('player', player);
        }

        this.io = io;

        //app.get('Game').SendUpdate = this.Update;
        this.ReceiveMoves = app.get('Game').ReceiveMoves;
        this.NewEntity = app.get('Game').NewEntity;
    }

    Update(worldUpdates){
        this.io.emit('world', worldUpdates);
    }

    InitPlayer(world){
        this.io.emit('init', JSON.stringify(world));
    }

    ServeNewEntity(entity){
        this.io.emit('notify-new-entity', entity);
    }
}

module.exports = {ConnectionService: GameConnectionHandler};