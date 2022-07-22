const express = require('express')
const router = express.Router()


//controllers
const { upload, getAllBrands, createBrand, } = require('../controllers/brandController')


//middlewares
const {protect} = require('../middleware/authMiddleware')



// public Routes
router.route('/getAll').get(getAllBrands)

// Private routes
router.route('/').post(protect, upload, createBrand)

module.exports = router