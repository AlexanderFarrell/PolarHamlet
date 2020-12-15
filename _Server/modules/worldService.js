const database = require('database-manager');

function LoadWorldInfo(req, res, next){
    let name = req.bodyString('WorldName');

    database.singleQuery('Select WorldName, created_by from worlds')

    function OnError(error){
        console.log("Error loading world: " + name + ". Message: " +  error.message);
        res.json({success: false, errorMessage: "Error loading world."})
    }

    function OnLoad(data){
        if (data.rows.length > 0){
            let world = data.rows['data'];
        } else {
            res.json({success: false, errorMessage: "World does not exist."})
        }
    }

    res.json({success: false, errorMessage: "Not logged in. Cannot save map!"})
}

function LoadWorld(req, res, next){
    let name = req.bodyString('WorldName');

    database.singleQuery('Select data from worlds')

    function OnError(error){
        console.log("Error loading world: " + name + ". Message: " +  error.message);
        res.json({success: false, errorMessage: "Error loading world."})
    }

    function OnLoad(data){
        if (data.rows.length > 0){
            let world = data.rows['data'];
        } else {
            res.json({success: false, errorMessage: "World does not exist."})
        }
    }

    res.json({success: false, errorMessage: "Not logged in. Cannot save map!"})
}

module.exports = {SaveWorld, LoadWorld, WorldExists};