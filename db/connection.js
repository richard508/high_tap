const mongoose = require('mongoose')
require('dotenv').config()


if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
} else {
  mongoose.connect('mongodb://localhost/trendsters', { useNewUrlParser: true }).then(() => {
    console.log(`🤖  MongoDB is alive and ready to serve.`)
  })
}

module.exports = mongoose
