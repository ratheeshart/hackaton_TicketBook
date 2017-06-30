const path = require('path');
var ticketApp = require(path.join(__dirname,'/src/app.js'));
var config = require(path.join(__dirname,'/src/config.js'));

ticketApp.start(config);
