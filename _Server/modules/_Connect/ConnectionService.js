const socketIoSession = require('express-socket.io-session');

class ConnectionService {

    Start(app, server){
        const io = require('socket.io')(server);
        const ioSession = require('express-socket.io-session');
        io.use(ioSession(app.get('SessionHandler'), {
            autoSave: true
        }));
        /*require('socketio-auth')(io, {
            authenticate: function (socket, data, callback) {
                console.log('Authenticating- Login Code: ' + socket.handshake.session.loggedInCode)
                console.log('Authenticating - Result: ' + (socket.handshake.session.loggedInCode === 5))

                if (socket.handshake.session.loggedInCode === 5){
                    console.log("Successful connection");
                    return callback(null, true);
                } else {
                    console.log("Unsuccessful connection");
                    return callback(new Error("Not logged in."));
                }
            },
            disconnect: function (socket){
                console.log(socket.id + ' disconnected.');
            },
            timeout: 2000
        });*/
        io.on('connection', (socket) => {
            console.log(socket.handshake.session.username + ' connected');

            socket.on('disconnect', () => {
                console.log(socket.handshake.session.username + ' disconnected');
            })
        });

        /*this.io = require('socket.io')(server);

        this.io.on('connection', (socket) => {
            console.log(socket.handshake.session.username + " connected.");

            socket.on('disconnect', () => {
                console.log(socket.handshake.session.username + " disconnected.");
            })
        })*/
    }

    End(req, res, next){

    }

    Connect(req, res, next){

    }

    Disconnect(req, res, next){

    }

    Update(){

    }

    Send(){

    }

    Receive(){

    }
}

module.exports = {ConnectionService};