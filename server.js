"use strict";
var config = require("./config.json");
var http = require('http');
var https = require('https');

var port = 5000
//setup
var httpServer = null;
var httpsServer = null;
    httpServer = http.createServer();
    httpServer.listen(port, function () { console.log('Listening on ' + httpServer.address().port); });

