const passport = require('passport')
const User = require('../models/User')
const authController = {
  signUp: (req, res) => {
    if (req.isAuthenticated()) { 
      res.redirect('/')
    }
    else {
      res.render('signup', { message: req.flash('signupMessage') })
    }
  },
  createUser: (req, res) => {
    const signupStrategy = passport.authenticate('local-signup', {
      successRedirect: `/`,
      failureRedirect: 'signup',
      failureFlash: true
    })
    return signupStrategy(req, res)
  },
  logIn: (req, res) => {
    if (req.isAuthenticated()) { 
      res.redirect('/')
    }
    else {
      res.render('login', { message: req.flash('loginMessage') })
    }
  },
  checkUser: (req, res) => {
    User.find({email: req.body.email}).then((user) => {
      const loginStrategy = passport.authenticate('local-login', {
        successRedirect: `/user/${user[0]._id}/profile`,
        failureRedirect: 'login',
        failureFlash: true
      })
      return loginStrategy(req, res)
    })
  },
  logOut: (req, res) => {
    req.logOut()
    res.redirect('/')
  }
}

module.exports = authController
