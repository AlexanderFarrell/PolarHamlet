const {ParameterError} = require("../_Exceptions/ParameterError");
import $ from 'jquery';

export class AppStateView {
    constructor() {
        this._gameViews = [];
        this.isActiveScreen = false;
    }

    Load(error, callback){
        callback();
    }

    Render(){
        this._gameViews.forEach((view) => {
            $('#root').append(view);
        })
    }

    HandleTransitionError(error){

    }

    RemoveUi(){
        this._gameViews.forEach((view) => {
            console.log(view);
            view.removeFromHtml();
        })
        $('#root').empty();
    }

    Begin(error, callback){
        this.Render();
        if (callback)
        callback();
    }

    End(error, callback){
        this.RemoveUi()
        if (callback)
        callback();
    }

    /*addGameView(gameView){
        if (gameView instanceof GameView){
            this._gameViews.push(gameView);
            if ((!gameView.isAdded) && (this.isActiveScreen)){
                //gameView.addToHtml();
            }


        } else {
            throw new ParameterError(this.addGameView.name, 'gameView', GameView.name, gameView);
        }
    }

    removeGameView(gameView){
        const i = this.elements.indexOf(gameView);
        if (gameView.isAdded){
            gameView.removeFromHtml();
        }
        if (i > -1){
            this.elements.splice(i, 1);
        }
    }

    Load(error, callback){
        callback();
    }*/

    onActivate(){
        this._gameViews.forEach((gameView) => {

            //gameView.addToHtml();
        })
    }

    onDeactivate(){
        this._gameViews.forEach((gameView) => {
            //gameView.removeFromHtml();
        })
    }
}