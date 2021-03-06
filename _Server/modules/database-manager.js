const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

function connect(){
    if (process.env.DATABASE_URL){
        let client = new Client({
            //Production
            connectionString: process.env.DATABASE_URL,
            ssl: {rejectUnauthorized: false}
        });
        client.connect();
        return client;
    } else {
        //var login = JSON.parse(fs.readFileSync(path.resolve(__dirname) + '\\log.json'));
        var cs = "postgres://" +  process.env.database_username + ":" + process.env.database_password +"@localhost:" + process.env.database_port + "/" + process.env.database_database;
        console.log(cs);
        let client = new Client({
            //Development
            connectionString: cs
        });
        client.connect();
        return client;
    }
}

function disconnect(client){
    client.end();
}

function connectExecuteAndDisconnect(error, operation, callback, sql, parameters = null){
    try {
        let client = connect();

        operation(client, sql, (localError, responseData) => {
            client.end();
            if (localError) {
                error(localError.message);
            } else {
                callback(responseData);
            }
        });
    } catch (localError) {
        error(localError);
    }
}

function runQuery(client, sql, callback, parameters = null){
    if (parameters){
        console.log(sql);

        //client.query(sql, callback, parameters);
        client.query(sql, parameters, (err, res) => {
            if (err){
                console.log(err);
                callback(err);
            }

            if (res){
                callback(res);
            }
        })
    } else {
        client.query(sql, callback);
    }
}

exports.singleQuery = function query(sql, error, callback, parameters = null){
    connectExecuteAndDisconnect(error, runQuery, callback, sql, parameters);
}

exports.runQuery = runQuery;
exports.connect = connect;
exports.disconnect = disconnect;
/*exports.formatRowToStrings = function (data){
    var retVal = [];
    data.rows.forEach(function (item){
        retVal.push(JSON.stringify(item));
    })
    return retVal;
}*/