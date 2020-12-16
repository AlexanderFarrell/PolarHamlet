const {ServerGame} = require('./modules/_Game/ServerGame')
const express = require('express');
const loaders = require('./loaders/loaders')
const {ClientUpdater} = require("./modules/_Connect/ClientUpdater")

const app = express();

//const ServerGameSource = require('./modules/_Game/ServerGame');

loaders.load(app);

//const game = new ServerGame();
//game.Begin();
/*const gameHandler = new GameHandler();
gameHandler.Add(new ServerGame());
app.set('GameHandler', gameHandler);*/

module.exports = app;
