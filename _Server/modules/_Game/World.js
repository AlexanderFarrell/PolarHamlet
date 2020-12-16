class TileType {

}

class Tile {
    constructor() {
        this.Water = (Math.random());
        this.Red = Math.random() * 10;
        this.Green = 125 + Math.random() * 10;
        this.Blue = 125 + Math.random() * 10;
    }
}

class World {
    constructor() {
        this.Entities = [];
        this.Tiles = [];
        this.Width = 200;
        this.Height = 200;

        console.log("Generated World!");
        this.Generate();
        console.log("    - Done!");
    }

    Generate(){
        for (let x = 0; x < 300; x++){
            this.Tiles.push([])

            for (let y = 0; y < 300; y++){
                this.Tiles[x].push(new Tile());
            }
        }
    }

    Load(){

    }
}

module.exports = {World, Tile};