const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/passport').then(() => {
  console.log(`🤖  MongoDB is alive and ready to serve.`)
})

module.exports = mongoose
