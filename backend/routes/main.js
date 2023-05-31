const express = require('express')
const router = express.Router()
const { register } = require('../controllers/auth')
const { login } = require('../controllers/login')
const { mainPage } = require('../controllers/main')
const errorHandlerMiddleware = require('../middleware/uniquemail')


router.post('/register', register)
router.post('/login', login)
module.exports = router