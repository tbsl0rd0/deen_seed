var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    js: process.env.node_env != 'production' ? '/js.min.js' : '',
    fonts: process.env.node_env != 'production' ? '/fonts.css' : ''
  });
});

module.exports = router;
