'use strict';

var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var httpsRoute = require('./routes/https');
var routes = require('./routes/index');

app.use('/', httpsRoute);
app.use('/', routes);
app.use(express.static(__dirname + '/public'));

module.exports = app;
