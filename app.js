'use strict';

const restify = require('restify');
const config = require('./src/config/config');

// let me use _ anywhere, without import
global._ = require('lodash');

// server's hostname and port to listen on
const serverHost = config.restService.hostname;
const serverPort = config.restService.port;

// create the server
const server = restify.createServer({name: 'captain-node'});

// add middleware to help with parsing
server.use(restify.plugins.jsonBodyParser);
server.use(restify.plugins.queryParser());

// error handler in case server cannot start
server.on('error', function (error) {
    if (['EADDRINUSE', 'EADDRNOTAVAIL'].indexOf(error.code) !== -1) {
        throw new Error(`Failed to start server on configured hostname/port: ${error.message}`);
    } else {
        throw new Error(error.message);
    }
});

// start listening
server.listen(serverPort, serverHost, function () {
    console.log(`${server.name} listening at ${server.url}`);
});