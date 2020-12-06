var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile('_Client/index.html', {root: __dirname + '/../../'});
});

/* GET home page. */
router.post('/create', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.sendFile('_Client/index.html', {root: __dirname + '/../../'});
  res.json({success: true});
});

/* GET home page. */
router.post('/login', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.sendFile('_Client/index.html', {root: __dirname + '/../../'});
  res.json({success: true});
});

module.exports = router;
