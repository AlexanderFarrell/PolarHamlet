

const {ServerGame} = require('./modules/_Game/ServerGame')

const express = require('express');
const loaders = require('./loaders/loaders')
const {GameHandler} = require("./modules/_Game/GameHandler");
const {ClientUpdater} = require("./modules/_Connect/ClientUpdater")

const app = express();

//const ServerGameSource = require('./modules/_Game/ServerGame');

loaders.load(app);

//const game = new ServerGame();
//game.Begin();
const gameHandler = new GameHandler();
gameHandler.Add(new ServerGame());
app.set('Games', gameHandler);

const connections = new ClientUpdater();
app.set('ClientUpdater', connections);

module.exports = app;
