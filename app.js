var express = require("express");
var app = express();

var mongoose       = require("mongoose"),
    bodyParser     = require("body-parser"),
    flash          = require("connect-flash"),
    session        = require("express-session");

var landingRoutes = require('./routes/landing.js')

app.use(landingRoutes);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(flash());

app.use(function (req, res, next) {
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});


mongoose.Promise = global.Promise;

mongoose.connect("mongodb://sandrinio:kukuruku321@ds157839.mlab.com:57839/gsm-guru");
// mongoose.connect("mongodb://localhost/gsm_guru");





/* ============================            ============================ */
//ეს ყოველთვის უცვლელია და არის ბოლოში


app.listen(process.env.PORT || 3000, process.env.IP,function () {  //if server is on
  console.log("======STARTED======");
});