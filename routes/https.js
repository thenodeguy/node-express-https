'use strict';

var express = require('express');
var router = express.Router();

// Add middleware to force all requests over https.
router.use('/', function requireHTTPS(req, res, next) {
  if(!req.secure){
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
});

module.exports = router;
