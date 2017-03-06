var express = require('express');
var router = express.Router();
var passport = require("passport");
var User = require('../models/user');


router.get('/landing/login', function (req, res) {
  res.render('auth/login');
});

router.get('/landing/register', function (req, res) {
  res.render('auth/register')
});

router.post("/landing/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/landing/login"
}), function (req, res) {
  req.flash("success", 'Welcome');
  res.redirect("/");
});

router.post('/landing/register', function (req, res) {
  if(req.body.password === req.body.pass2) {
    User.register(req.body.user, req.body.password, function (err, user) {
      if(err){
        res.send(err)
      }else{
        passport.authenticate("local")(req, res, function () {
          req.flash("success", "User Created");
          res.redirect("back");
        });
      }
    })
  }else{
    res.send('Password Typo')
  }
});


module.exports = router;