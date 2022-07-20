// ==== Dependances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()
const {getOrders, createOrder} = require('../controllers/reselerOrderController')

// ==== Middlewares
const {protect} = require('../middleware/authMiddleware')


router.route('/').get(getOrders).post(protect, createOrder)









module.exports = router