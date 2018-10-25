const mongoose = require('../db/connection')
const bcrypt = require('bcrypt-nodejs')
require('enum').register()

const User = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  active: Boolean,
  enum: [{1: 'Influencer', 2:'Advertiser'}],
  connections: Array,
  cRequest: Array
})

  User.methods.encrypt = function(password) {
    if (req.body.password !== req.body.confirmPassword) {
      var err = new Error('Passwords do not match.');
      err.status = 400;
      return next(err);
    }else {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    }
  }

  User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }

module.exports = mongoose.model('User', User)
