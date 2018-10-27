const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')


const User = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  familyStatus: String,
  location: String,
  active: {
    type: Boolean,
    default: false
  },
  ina: ['Influencer', 'Advertiser'],
  iFollower: Number,
  tier: String,
  companyName: String,
  category: String,
  size: Number,
  connections: Array,
  interests: [{
    type: Schema.Types.ObjectId,
    ref: 'Interest'
  }],
  cRequest: Array
})

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}


User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', User)
