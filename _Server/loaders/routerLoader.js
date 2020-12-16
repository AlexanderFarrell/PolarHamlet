const indexRouter = require('../api-router/index');
const gameRouter = require('../api-router/game');
const {ConnectionService} = require("../modules/_Connect/ConnectionService");

exports.load = function load(app){
    console.log(' - Loading APIs...');

    app.use('/', indexRouter);
    app.use('/game', gameRouter);

    console.log('    - APIs On!');
}
