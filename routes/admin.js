var express = require('express');
var router = express.Router();

var url = require('url');

router.get('/', function(req, res, next) {
    res.render('admin', { title: 'Express' });
});

router.post('/login', function (req,res){
    res.status(200).end('hello');
});
module.exports = router;
