const express = require('express')
const app = express()
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const methodOverride = require('method-override')
const routes = require('./routes/index')
const passport = require('passport')

// extra data in out server logs
app.use(morgan('dev'))
// help mangage the sessions
app.use(cookieParser())

// read the values req.body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// allow to delete and update in a form
app.use(methodOverride('_method'))

// use handlebars
app.set('view engine', 'hbs')

// use front end css, js, img
app.use(express.static(__dirname + '/public'))

// Used by passport to handle seesions
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }))
app.use(flash())
// Creates an instance of passport to be used in Express
app.use(passport.initialize())
// Sets up sessions to remember a user.
app.use(passport.session())

// This is where we will build out our custom passport configurations
require('./config/passport')(passport)

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/', routes)

// app.use('/', usersController)

const PORT = process.env.PORT || 7777

app.listen(PORT, () => {
  console.log(`🔥  🔥  🕺  🔥  🔥 Disco Inferno on ${PORT}`)
})