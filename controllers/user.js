const User = require('../models/User')
const Interest = require('../models/Interest')

const userController = {
  search: (req, res) => {
    if (req.isAuthenticated()) { 
      console.log(req.query)
      User.find(req.query).populate('interests').then(userFromDb => {
        res.render('user/search', { 
          user: userFromDb,
        })
      })
    } else {
      res.redirect(`/`)
    }
  },
  profile: (req, res) => {
    if (req.isAuthenticated()) { 
      User.findById(req.params.id).populate('interests').then(userFromDb => {
        res.render('user/profile', { 
          user: userFromDb,
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
    User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
      res.redirect(`/user/${updatedUser._id}/profile`)
    })
  },
  delete: (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/')
    })
  }
}

module.exports = userController