var express = require('express');
var router = express.Router();

var url = require('url');
var num = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/vote', function (req,res,next) {
  num++;
  console.log("투표"+num+"번-------"+req.body.vote);
  res.end("투표완료");
});
module.exports = router;
