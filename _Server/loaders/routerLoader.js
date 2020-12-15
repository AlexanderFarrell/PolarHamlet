const indexRouter = require('../api-router/index');
const gameRouter = require('../api-router/game');

exports.load = function load(app){
    console.log(' - Loading APIs...');

    app.use('/', indexRouter);
    app.use('/game', gameRouter);

    console.log('    - APIs On!');
}
