const {contentSecurityPolicy} = require("helmet");
exports.load = function load(app){
    console.log(" - Loading Security...");
    const helmet = require('helmet');
    const compression = require('compression');
    const rateLimit = require('express-rate-limit');
    //const {body, check} = require('express-validator');
    const sanitizer = require('sanitize').middleware;

    app.use(compression());
    app.use(helmet());
    const limiter = rateLimit({
        windowMs: 60 * 1000, //1 Minute
        max: 150
    })
    app.use(limiter);
    app.use(sanitizer);
    console.log("    - Security On!");
}