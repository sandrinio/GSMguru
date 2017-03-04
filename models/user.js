var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  fullname: {type: String, required: true},
  bday: {type: String, required: true},
  password: {type: String, required: true},
  permission: {type: String, required: true},
  pic: String

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);