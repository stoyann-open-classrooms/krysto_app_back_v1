const express = require('express')
const router = express.Router()


//controllers
const {getAllTrocCategories, upload, createTrocCategory} = require('../controllers/trocCategoryController')


//middlewares
const {protect} = require('../middleware/authMiddleware')



// public Routes
router.route('/getAll').get(getAllTrocCategories)

// Private routes
router.route('/').post(protect, upload, createTrocCategory)

module.exports = router