var express = require('express');
var router = express.Router();
var News = require("../models/news");

router.get('/', function (req, res) {
  var data = {};
  News.find({}).sort('-date').exec(function (err, newsPosts){
    if(err){
      console.log(err)
    }else{
      //hot news data
      data.hot = newsPosts;
    }
    res.render('landing', {data: data})
  });
});



module.exports = router;
