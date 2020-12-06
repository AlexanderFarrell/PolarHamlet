import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";

export class CreateLoginModel extends AppStateModel{
    constructor() {
        super();
    }

    Login(account, password, error, callback) {
        $.ajax({
            url: '/login',
            type: 'POST',
            dataType: 'json',
            data: {username: account, password: password},
            success: function (response) {
                console.log("Successfully logged in");
                callback(response);
            },
            error: function (status, errorThrown) {
                console.log("Error logging in");
                error();
            }
        });
    }

    Create(account, password, passwordAgain, error, callback) {
        if (password === passwordAgain){
            $.ajax({
                url: '/create',
                type: 'POST',
                dataType: 'json',
                data: {username: account, password: password},
                success: function (response) {
                    console.log("Successfully created account.");
                    callback(response);
                },
                error: function (status, errorThrown) {
                    console.log("Error creating account.");
                    error();
                }
            });
        } else {
            error("Passwords must match");
        }
    }
}