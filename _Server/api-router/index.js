const express = require('express');
const router = express.Router();
const login = require('../modules/loginHandler');

/* GET home page. */
router.get('/', function(req, res, next) {

  //res.render('index', { title: 'Express' });
    res.render('index', {root: __dirname + '/../../_Client/_Public'});
});

router.get('/game', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.sendFile('javascripts/main.js', {root: __dirname + '/../../_Client/_Public'});
});

/* GET home page. */
router.get('/play', function(req, res, next) {

    //res.render('index', { title: 'Express' });
    //res.sendFile('game.ejs', {root: __dirname + '/../../'});
    //res.sendFile('game.ejs', {root: __dirname + '/../../_Client/_Public'});
    res.render('game', {root: __dirname + '/../../_Client/_Public'});
});

/* GET home page. */
router.post('/create', function(req, res, next) {

  let username = req.body.username;
  let password = req.body.password;

  res.setHeader('Content-Type', 'application/json');
  //res.render('index', { title: 'Express' });
  //res.sendFile('_Client/index.ejs', {root: __dirname + '/../../'});
  login.create(
      req,
      res,
      () => {
        res.json({success: true});
      },
      (error) => {
        res.json({success: false, errorMessage: error});
      });
});

/* GET home page. */
router.post('/login', function(req, res, next) {

  let username = req.body.username;
  let password = req.body.password;

  res.setHeader('Content-Type', 'application/json');
  //res.render('index', { title: 'Express' });
  //res.sendFile('_Client/index.ejs', {root: __dirname + '/../../'});
  login.login(
      req,
      res,
      () => {
          console.log(req.session.id);
        res.json({success: true});
        },
      (error) => {
        res.json({success: false, errorMessage: error});
      });
});

module.exports = router;
