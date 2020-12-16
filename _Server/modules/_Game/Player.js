class Player {
    constructor(name, socketId) {
        this.Name = name;
        this.SocketId = socketId;
        this.Citizens = 1;
        this.Ore = 10;
        this.Food = 10;
        this.Buildings = 0;
    }

    update(io){
        console.log("Emit to " + this.Name + " - Args: " + {citizens: this.Citizens, ore: this.Ore, food: this.Food, buildings: this.Buildings});
        io.to(this.SocketId).emit('player', {citizens: this.Citizens, ore: this.Ore, food: this.Food, buildings: this.Buildings});
    }

    updateGame(){
        /*if (Math.random() < (this.Citizens / (this.Buildings/3))){
            this.Food--;
        }*/

        this.Citizens += Math.round(this.Buildings * Math.random() * 0.1);

        this.Food += Math.round((this.Buildings - this.Citizens) * Math.random());

        if (Math.random() < (this.Citizens / 10)){
            this.Ore += Math.ceil(this.Citizens * Math.random() * 0.1);
        }

        if (this.Citizens < this.Buildings){
            if (Math.random() < (this.Buildings / 10)){
                this.Food += Math.floor(Math.random() * 2);
            }
        }

        /*if (this.Food < this.Citizens){
            if (Math.random() > (0.5)){
                this.Citizens--;
            }
        }*/

        if (this.Food < 0){
            this.Citizens += this.Food;
            this.Food = 0;
        }
    }

    data(){
        return {citizens: this.Citizens, ore: this.Ore, food: this.Food, buildings: this.Buildings};
    }
}

module.exports = {Player};