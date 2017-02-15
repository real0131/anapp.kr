var express = require('express');
var router = express.Router();

var url = require('url');
var num = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

module.exports = router;
