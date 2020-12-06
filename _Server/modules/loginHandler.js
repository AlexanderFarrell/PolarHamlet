const database = require('./database-manager');
const bcrypt = require('bcrypt');
const saltRounds = 12;

function login(req, res, success, error) {
    let username = req.body.username;
    let password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
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
                console.log(hash);
                console.log(passwordRetrieved);

                bcrypt.compare(password, passwordRetrieved, (err, res) => {
                    res ? onSuccessLogin() : onErrorLogin();
                })

                bcrypt.compare(password, passwordRetrieved).then()

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
    })


}

module.exports = {login};