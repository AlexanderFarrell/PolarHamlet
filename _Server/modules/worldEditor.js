function SaveWorld(req, res, next){
    if (!(req.bodyString('username') === null || req.bodyString('username') === undefined)){

    } else {
        res.json({success: false, errorMessage: "Not logged in. Cannot save map!"})
    }
}

module.exports = {SaveWorld, LoadWorld};