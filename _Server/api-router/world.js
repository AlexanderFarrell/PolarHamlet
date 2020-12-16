const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    //req.app.get('ClientUpdater').Update(req, res, next);

    console.log("Got it!");
    res.json({success: true, world: req.app.get('Game').World});

    /*if (req.session.username !== undefined){
        res.json({world: req.app.get('Game').World});
    } else {
        res.error();
    }*/

    //res.render('index', { title: 'Express' });
    //res.render('index', {root: __dirname + '/../../_Client/_Public'});
});

module.exports = router;