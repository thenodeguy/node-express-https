'use strict';

var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
var routes = require('./routes/index');
app.use('/', routes);

module.exports = app;
