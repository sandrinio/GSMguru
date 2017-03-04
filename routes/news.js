var express = require('express');
var router = express.Router();

router.get('/news/new', function (req, res) {
  res.render('news/new');
});

router.get('/news/:id', function (req, res) {
  res.render('news/show')
});

module.exports = router;