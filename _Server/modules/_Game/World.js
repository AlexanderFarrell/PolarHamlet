class TileType {

}

class Tile {
    constructor() {
        this.Resources = [];
    }
}

class World {
    constructor() {
        this.Entities = [];
        this.Tiles = [];
    }

    Generate(){
        for (let x = 0; x < 300; x++){
            this.Tiles[x].push([])

            for (let y = 0; y < 300; y++){
                this.Tiles[x][y] = new Tile();
            }
        }
    }

    Load(){

    }
}

module.exports = {World, Tile};