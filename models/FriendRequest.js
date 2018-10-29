const mongoose = require('../db/connection')
const Schema = mongoose.Schema

var FriendRequestSchema = new Schema({
  requester: {
      type: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      required: true
  },
  recipient: {
    type: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    required: true
  },
  status: {
      type: Number,
      required: true 
  }
})

module.exports = mongoose.model('FriendRequestSchema', FriendRequestSchema)
