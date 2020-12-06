const indexRouter = require('../api-router');

exports.load = function load(app){
    console.log(' - Loading APIs...');

    app.use('/', indexRouter);

    console.log('    - APIs On!');
}
