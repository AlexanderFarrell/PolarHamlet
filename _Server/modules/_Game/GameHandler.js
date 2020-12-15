class GameHandler {
    constructor() {
        this.Games = [];
    }

    Add(game){
        this.Games.push(game);
        game.Begin();
    }

    Remove(game){
        let gameIndex = this.Games.indexOf(game);

        if (gameIndex !== -1){
            this.Games.splice(game);
        }
    }
}

module.exports = {GameHandler};