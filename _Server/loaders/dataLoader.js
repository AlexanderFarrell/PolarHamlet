const redis = require('redis');
const session = require('express-session');
//const MemcachedStore = require('connect-memjs')(session);
//const redis = require('socket.io-redis')
const RedisStore = require('connect-redis')(session);

function setupSessionsMemcache(app){
    if (process.env.REDIS_URL){
        let session = require('express-session')({
            secret: process.env.sessionSecret,
            resave: false,
            saveUninitialized: false,
            store: new RedisStore({
                url: process.env.REDIS_URL
            }),
            cookie: {
                maxAge: 60 * 60 * 24 * 31 * 1000
            }
        })

        app.use(session);
        app.set('SessionHandler', session);
    } else {
        let session = require('express-session')({
            secret: 'HeyWhatIsC',
            resave: true,
            saveUninitialized: true,
            cookie: {
                maxAge: 60 * 60 * 24 * 31 * 1000
            }
        });

        app.use(session);
        app.set('SessionHandler', session);
    }

    /*if (process.env.MEMCACHIER_SERVERS){
        let session = require('express-session')({
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
        })

        app.use(session);
        app.set('SessionHandler', session);
    } else {
        let session = require('express-session')({
            secret: 'HeyWhatIsC',
            resave: true,
            saveUninitialized: true,
            cookie: {
                maxAge: 60 * 60 * 24 * 31 * 1000
            }
        });

        app.use(session);
        app.set('SessionHandler', session);
    }*/
}

exports.load = function load(app){
    console.log(" - Loading Data...")

    setupSessionsMemcache(app);

    console.log("    - Data On!")
}