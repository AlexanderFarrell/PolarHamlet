import {AppStateModel} from "../../_Engine/_Screen/AppStateModel";
import {GameStateFlow} from "../../_Game/GameStateFlow";
import $ from 'jquery';

export class CreateLoginModel extends AppStateModel{
    constructor() {
        super();
    }

    ToMenu(){
        //GameStateFlow.ToMenu();
        GameStateFlow.ToGame();
    }

    Login(account, password, error, callback) {
        $.ajax({
            url: '/login',
            type: 'POST',
            dataType: 'json',
            data: {username: account, password: password},
            success: function (response) {
                if (response && response.success){
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
                    error();
                }
            });
        } else {
            error("Passwords must match");
        }
    }
}