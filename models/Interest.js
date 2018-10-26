const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Interest = mongoose.Schema({
  interestList: String
})

module.exports = mongoose.model('Interest', Interest)
