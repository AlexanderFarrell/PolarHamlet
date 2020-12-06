exports.load = function load(app){
    console.log(" - Loading Vital Processes...");

    const processEnv = require('dotenv');
    const cookieParser = require('cookie-parser');
    const logger = require('morgan');
    const express = require('express');
    const path = require('path');

    try {
        processEnv.config();
    } catch (error) {
        console.log("    - Notice: Did not find a .env file to set up environment variables");
    }

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '/../../_Client/_Public')));

    console.log("    - Vital Processes On!");
}