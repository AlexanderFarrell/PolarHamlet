const data = require('./dataLoader');
const other = require('./otherLoader');
const security = require('./securityLoader');
const router = require('./routerLoader');
const server = require('./serverLoader');
const game = require('./gameLoader');

exports.load = function loadApp(app){
    console.log('*Loading Server Application*');

    other.load(app);
    security.load(app);
    data.load(app);
    game.load(app);
    router.load(app);
    server.load(app);

    console.log('*App On*');
}