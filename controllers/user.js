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
    } else {
      res.redirect(`/`)
    }
  },
  edit: (req, res) => {
    if (req.isAuthenticated()) { 
      Interest.find().then((interest) => {
        User.findById(req.params.id).populate('interests').then(userFromDb => {
          res.render('user/edit', { 
            user: userFromDb,
            interest: interest
          })
        })
      })
    } else {
      res.redirect(`/`)
    }
  },
}

module.exports = userController