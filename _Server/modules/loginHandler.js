const database = require('./database-manager');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function create(req, res, success, error, shouldLoginOnCreate=true) {
    let username = req.bodyString('username');
    let password = req.bodyString('password');

    console.log("Request came in to create account. User " + username + ", Pass: " + password);

    console.log("Checking Username");

    CheckUser(() => {
        console.log("Creating Hash");
        CreateHashPassword((hash) => {
            console.log("Creating Account");
            Create(hash, () => {
                console.log("Returning success!");
                success();
            })
        })
    });

    function CheckUser(callback){
        database.dataQuery("SELECT username from users where users.username = '" + username + "';", OnError, OnSuccess);

        function OnError(error){
            console.log(error);
            Error("Error connecting to server.")
        }

        function OnSuccess(data){
            console.log("Username is free.");

            if (data.rows[0]) {
                Error("Username already exists.")
            } else {
                callback();
            }
        }
    }

    function CreateHashPassword(callback){
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err){
                console.log("Could not hash password");
                error("Error creating account.")
            } else {
                console.log("Hash Created: " + hash);
                callback(hash);
            }
        })
    }

    function Create(hash, callback){
         database.dataQuery("INSERT INTO users(username, pass) values ('" + username + "', '" + hash +"');", OnError, OnSuccess);

         function OnError(e){
             console.log(e);
             error("Error creating account.")
         }

         function OnSuccess(data){
             if (shouldLoginOnCreate){
                 req.session.username = username;
             }

             callback();
         }
    }

    function Error(message){
        console.log("Error: " + message);
        error(message)
    }
}

function logout(req, res, success, error) {
    try {
        req.session.username = null;
        success();
    } catch (e) {
        error("Error logging out.")
    }
}

function login(req, res, success, error) {
    let username = req.bodyString('username');
    let password = req.bodyString('password');

    console.log(req.body.username);

    database.dataQuery("SELECT username, pass from users where users.username = '" + username + "';", onErrorDatabaseGet, onSuccessDatabaseGet);

    function onErrorDatabaseGet(data){
        console.error("Error getting data from database");
        error("Error getting data from database");
    }

    function onSuccessDatabaseGet(data){
        console.log(data);

        if (data.rows[0]){
            let usernameRetrieved = data.rows[0]['username'];
            console.log(usernameRetrieved);
            let passwordRetrieved = data.rows[0]['pass'];
            console.log(passwordRetrieved);

            bcrypt.compare(password, passwordRetrieved, (err, res) => {
                if (res){
                    onSuccessLogin();
                } else {
                    onErrorLogin();
                }
            })

            function onSuccessLogin(){
                console.log("Password is good");
                req.session.username = username;
                success();
            }

            function onErrorLogin(){
                console.log("Wrong")
                error("Invalid username or password");
            }
        }
        else {
            console.log("no data?")
            error("Invalid username or password");
        }
    }
}

module.exports = {create, login};