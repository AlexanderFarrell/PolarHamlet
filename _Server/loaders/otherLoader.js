exports.load = function load(app){
    console.log(" - Loading Vital Processes...");

    //const processEnv = require('dotenv');
    const cookieParser = require('cookie-parser');
    const logger = require('morgan');
    const express = require('express');
    const path = require('path');
    require('dotenv').config({path: path.resolve(__dirname, './../../local.env')});

    console.log(path.resolve(__dirname, './../../local.env'));
    /*try {
        processEnv.config();
    } catch (error) {
        console.log("    - Notice: Did not find a .env file to set up environment variables");
    }*/

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '/../../_Client/_Public')));
    app.set('views', path.join(__dirname, '/../../_Client/_Public/views'))
    app.set('view engine', 'ejs');
    /*app.use(function (req, res, next){
        res.setHeader('Content-Security-Policy',
            "default-src 'self'; font-src https://fonts.googleapis.com 'self'; img-src 'self'; " +
            "script-src ''strict-dynamic' 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' 'self'; style-src https://fonts.googleapis.com 'self'; frame-src 'self';")
        next();
    })*/

    console.log("    - Vital Processes On!");
}