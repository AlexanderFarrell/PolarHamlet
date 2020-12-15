const express = require('express');
const router = express.Router();
const database = require('../modules/database-manager');
const worldEditor = require('../modules/worldEditor');

/* GET home page. */
router.get('/load', function(req, res, next) {

    worldEditor.Save
    //res.render('index', { title: 'Express' });
    //res.render('index', {root: __dirname + '/../../_Client/_Public'});
});