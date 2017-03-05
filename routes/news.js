var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/blogUploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + "-" + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });

router.get('/news/new', function (req, res) {
  res.render('news/new');
});

router.get('/news/:id', function (req, res) {
  res.render('news/show')
});

router.post('/news/uploadBanner', function (req, res){
  res.send('blablalba');
});


router.post("/news/uploads/blogUploads", upload.single('upload'), function (req, res){
  var domein = 'https://gsm-guru-sandrinio.c9users.io'
  var fileLink = req.file.path;
  var slisedLink = fileLink.slice(6)
  console.log(domein + slisedLink)
  res.send(domein + slisedLink)
});

router.post('/news/new/blogPost', function(req, res){
  console.log(req.query.blogPost);
  console.log(req.params.blogPost);
  console.log(req.body.blogPost);
});



module.exports = router;