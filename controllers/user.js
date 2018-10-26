const User = require('../models/User')
const Interst = require('../models/Interest')

const userController = {
  profile: (req, res) => {
    if (req.isAuthenticated()) { 
      Interest.find().then((interest) => {
        User.findById(req.params.id).populate('interests').then(userFromDb => {
          res.render('user/profile', { 
            user: userFromDb,
            interest: interest
          })
        })
      })
    })
  },
  edit: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {}
}

module.exports = userController