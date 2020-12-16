const http = require('http');
const {ConnectionService} = require("../modules/_Connect/GameConnectionHandler");
const debug = require('debug')('polarhamlet:server');

exports.load = function load(app){
    console.log(' - Loading Server...');

    //Port
    const port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);

    //Server
    const server = http.createServer(app);

    let connectionIo = new ConnectionService();
    connectionIo.Start(app, server);
    app.set('sockets', connectionIo);

    /*const connectionService = new ConnectionService();
    app.set('sockets', connectionService);
    connectionService.Start(server);*/

    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

    console.log('    - Server On!');

    /**
     * Event listener for HTTP server "error" event.
     */

    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }



    /**
     * Event listener for HTTP server "listening" event.
     */

    function onListening() {
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        debug('Listening on ' + bind);
        debug('Visit: http://localhost:' + port + ' if local.');
    }
}


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}