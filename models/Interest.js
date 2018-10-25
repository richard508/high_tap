const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Interest = mongoose.Schema({
  list: String,
  userIds: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('Interest', Interest)
