let express = require('express')
let router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')
const userController = require('../controllers/user')
const axios = require('axios')

// GET /
router.get('/', applicationController.index)

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
router.get('/user/:id/search', userController.search)
router.get('/user/:id/chat', userController.chat)
router.get('/user/:id/profile/edit', userController.edit)
router.put('/user/:id', userController.update)
router.patch('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

module.exports = router
