var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // index controller
  res.render('index', { title: 'brza hrana backend is working :) - Express (index route "/")' });
});

module.exports = router;
