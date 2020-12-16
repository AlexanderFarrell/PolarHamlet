const indexRouter = require('../api-router/index');
const worldRouter = require('../api-router/world');
const {ConnectionService} = require("../modules/_Connect/GameConnectionHandler");

exports.load = function load(app){
    console.log(' - Loading APIs...');

    app.use('/', indexRouter);
    app.use('/world', worldRouter);

    console.log('    - APIs On!');
}
