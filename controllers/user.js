const User = require('../models/User')
const Interst = require('../models/Interest')

const userController = {
  profile: (req, res) => {
    User.findById(req.params.id).populate('interests').then(userFromDb => {
      res.render('user/profile', { 
        user: userFromDb
      })
    })
  },
  edit: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {}
}

module.exports = userController