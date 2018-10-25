let express = require('express')
let router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')
const userController = require('../controllers/user')

// GET /
router.get('/', applicationController.index)

// Restricted (cool people only!)
router.get('/secret', applicationController.secret)

// GET /signup
router.get('/signup', authController.signUp)

// POST /signup
router.post('/signup', authController.createUser)

// GET /login
router.get('/login', authController.logIn)

// POST /login
router.post('/login', authController.checkUser)

// GET /logout
router.get('/logout', authController.logOut)

router.get('/user/:id/profile', userController.profile)
// router.get('/user/:id/edit', userController.edit)
// router.get('/user/:id', userController.update)

module.exports = router
