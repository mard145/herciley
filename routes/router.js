const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')

router.get('/', controllers.homePage)
router.post('/sendEmail', express.urlencoded({extended:true}),express.json(), controllers.sendEmail)

module.exports = router