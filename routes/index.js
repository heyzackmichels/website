var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NSF_app' });
});

/* GET TEST. copy these guys for root redirection to directories */
router.get('/TEST', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/TEST/index.html'));
});

module.exports = router;
