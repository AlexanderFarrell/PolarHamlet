class Player {
    constructor(name, socketId) {
        this.Name = name;
        this.SocketId = socketId;
        this.Citizens = 1;
        this.Ore = 10;
        this.Food = 0;
        this.Buildings = 0;
    }

    update(io){
        console.log("Emit to " + this.Name + " - Args: " + {citizens: this.Citizens, ore: this.Ore, food: this.Food, buildings: this.Buildings});
        io.to(this.SocketId).emit('player', {citizens: this.Citizens, ore: this.Ore, food: this.Food, buildings: this.Buildings});
    }

    data(){
        return {citizens: this.Citizens, ore: this.Ore, food: this.Food, buildings: this.Buildings};
    }
}

module.exports = {Player};