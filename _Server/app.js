const express = require('express');
const loaders = require('./loaders/loaders')

const app = express();

loaders.load(app);

module.exports = app;
