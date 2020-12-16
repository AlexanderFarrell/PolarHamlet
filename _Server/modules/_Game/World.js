const database = require('./../database-manager');

/*class TileType {
    constructor(name, canBuild, description, redMin, redMax, greenMin, greenMax, blueMin, blueMax, image) {
        this.Name = name;
        this.Description = description;
        this.CanBuild = canBuild;
        this.redMin = redMin;
        this.redMax = redMax;
        this.greenMin = greenMin;
        this.greenMax = greenMax;
        this.blueMin = blueMin;
        this.blueMax = blueMax;
        this.image = image;
    }
}*/

class Tile {
    constructor(typeId, type) {
        this.Gen(typeId, type);
    }

    Gen(typeId, type){
        this.TileType = typeId;
        this.Red = type.redmin + Math.floor(Math.random() * (type.redmax - type.redmin));
        this.Green = type.greenmin + Math.floor(Math.random() * (type.greenmax - type.greenmin));
        this.Blue = type.bluemin + Math.floor(Math.random() * (type.bluemax - type.bluemin));
    }
}

class World {
    constructor() {
        this.Entities = [];
        this.Tiles = [];
        this.Width = 200;
        this.Height = 200;

        database.singleQuery('Select * from tiletype', (error) => {
            throw new Error("Unsuccessful in loading tile types from database");
        }, (data) => {
            this.TileTypes = data.rows
            console.log("Generating world!");
            this.Generate();
            console.log("    - Done!");
        })
    }

    Generate(){


        for (let x = 0; x < 300; x++){
            this.Tiles[x] = [];

            for (let y = 0; y < 300; y++){
                let index = Math.floor((this.TileTypes.length-1) * Math.random());
                this.Tiles[x][y] = new Tile(index, this.TileTypes[index]);
            }
        }

        for (let i = 0; i < this.Width * this.Height * 8; i++){
            let xRand = Math.floor(Math.random() * this.Width-4) + 2;
            let yRand = Math.floor(Math.random() * this.Height-4) + 2;

            let neighbor = undefined;

            switch (Math.floor(Math.random() * 4)){
                case 0:
                    if (this.Tiles[xRand + 1] !== undefined)
                    neighbor = this.Tiles[xRand + 1][yRand];
                    break;
                case 1:
                    if (this.Tiles[xRand - 1] !== undefined)
                    neighbor = this.Tiles[xRand - 1][yRand];
                    break;
                case 2:
                    if (this.Tiles[xRand] !== undefined)
                    neighbor = this.Tiles[xRand][yRand + 1];
                    break;
                case 3:
                    if (this.Tiles[xRand] !== undefined)
                    neighbor = this.Tiles[xRand][yRand - 1];
                    break;
            }

            if (neighbor !== undefined && this.Tiles[xRand] !== undefined && this.Tiles[xRand][yRand] !== undefined){
                this.Tiles[xRand][yRand]?.Gen(neighbor.TileType, this.TileTypes[neighbor.TileType]);
            }
        }
    }

    Load(){

    }
}

module.exports = {World, Tile};