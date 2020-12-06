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
                if (response && response.success){
                    console.log("Successfully logged in.");
                    callback(response);
                } else {
                    if (response.errorMessage){
                        error(response.errorMessage);
                    } else {
                        error("Error logging in.")
                    }
                }
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
                    if (response && response.success){
                        console.log("Successfully created account.");
                        callback(response);
                    } else {
                        if (response.errorMessage){
                            error(response.errorMessage);
                        } else {
                            error("Error creating account.")
                        }
                    }
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