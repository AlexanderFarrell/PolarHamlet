var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile('_Client/index.html', {root: __dirname + '/../../'});
});

module.exports = router;
