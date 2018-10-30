const localStrategy = require('passport-local').Strategy
const User = require('../models/User')

const passportConfig = (passport) => {
  // Names of important fields for login
  const strategyFields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }

  const localSignupCallback = (req, email, password, callback) => {
    // Find a single user by email address
    User.findOne({$or: [{'email': email}, {'username': req.body.username}]}).then((user) => {
      
      // If the user exists
      if (user) {
        // Throw an error the the email is in use
        return callback(null, false, req.flash('signupMessage', 'this email is already in use'))
      } else {
        // Else create a user.
        const newUser = new User()
        newUser.email = email
        newUser.username = req.body.username
        newUser.ina = req.body.ina
        newUser.iFollower = req.body.iFollower
        if (newUser.iFollower < 5000) {
          newUser.tier = "Low"  
        } else if (newUser.iFollower < 50000){
          newUser.tier = "Mid"
        } else{
          newUser.tier = "Top"
        }
        newUser.companyName = req.body.companyName
        newUser.category = req.body.category
        newUser.size = req.body.size

        // Encrypt the users password for security.
        if(req.body.password === req.body.confirmPassword){
          newUser.password = newUser.encrypt(password)
        } else return callback(null, false, req.flash('signupMessage', "Password doesn't match"))

        // Save the user, and return the saved user. 
        newUser.save().then((saved) => {
          return callback(null, saved)
        })
      }
    })
  }

  const localLoginCallback = (req, email, password, callback) => {
    User.findOne({ 'email': email }).then((user) => {
      if(!user || !user.validPassword(password)){
        return callback(null, false, req.flash('loginMessage', 'EMail/password is incorrect'))
      }

      return callback(null, user)
    })
  }

  passport.use('local-signup', new localStrategy(strategyFields, localSignupCallback))
  passport.use('local-login', new localStrategy(strategyFields, localLoginCallback))
  
  passport.serializeUser(function(user, callback) {
    callback(null, user.id)
  })
  
  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
        callback(err, user)
    })
  })
}

module.exports = passportConfig