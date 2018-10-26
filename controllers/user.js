const User = require('../models/User')
const Interest = require('../models/Interest')

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
  update: (req, res) => {
    console.log(req.body)
    User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
      res.redirect(`/user/${updatedUser._id}/profile`)
    })
  }
  // delete: (req, res) => {}
}

module.exports = userController