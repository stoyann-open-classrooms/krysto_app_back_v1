const express = require('express')
const router = express.Router()


//controllers
const { upload, getAllPlasticTypes, createPlasticType, } = require('../controllers/plasticTypeController')


//middlewares
const {protect} = require('../middleware/authMiddleware')



// public Routes
router.route('/getAll').get(getAllPlasticTypes)

// Private routes
router.route('/').post(protect, upload, createPlasticType)

module.exports = router