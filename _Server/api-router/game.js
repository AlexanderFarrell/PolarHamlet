const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.app.get('ClientUpdater').Update(req, res, next);

    //res.render('index', { title: 'Express' });
    //res.render('index', {root: __dirname + '/../../_Client/_Public'});
});

router.post('/move', function(req, res, next){

})

router.post('/join', function(req, res, next){
    let game = parseInt(req.body.game, 10);

    if ((req.app.get('Games').Games.length > game) && (game >= 0)){
        let updater = req.app.get('ClientUpdater');
        updater.Connect(req.session.username, req.app.get('Games').Games[game]);
        req.session.currentGame = game;
        res.json({success: true, game: game, turn: updater.Connections[req.session.username].turn});
    } else {
        req.session.currentGame = game;
        res.json({success: false, message: "Could not connect to server"});
    }
})

router.post('/leave', function(req, res, next){
    req.app.get('ClientUpdater').Disconnect(req.session.username);
    delete req.session.game;
    res.json({success: true, message: "Handled request"});
})

module.exports = router;