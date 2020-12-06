const session = require('express-session');
const MemcachedStore = require('connect-memjs')(session);

function setupSessionsMemcache(app){
    if (process.env.MEMCACHIER_SERVERS){
        app.use(session({
            secret: process.env.sessionSecret,
            resave: false,
            saveUninitialized: false,
            store: new MemcachedStore({
                servers: [process.env.MEMCACHIER_SERVERS],
                prefix: '_session_'
            }),
            cookie: {
                maxAge: 60 * 60 * 24 * 31 * 1000
            }
        }));
    } else {
        app.use(session({
            secret: 'HeyWhatIsC',
            resave: true,
            saveUninitialized: true,
            cookie: {
                maxAge: 60 * 60 * 24 * 31 * 1000
            }
        }));
    }
}

exports.load = function load(app){
    console.log(" - Loading Data...")

    setupSessionsMemcache(app);

    console.log("    - Data On!")
}