const express = require('express')
const router = express.Router()
const { mainPage } = require('../controllers/main')


router.get('/:id', mainPage)
module.exports = router