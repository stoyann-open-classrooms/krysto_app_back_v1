// ==== Dependances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()
const {getReselerOrders, createReselerOrder} = require('../controllers/reselerOrderController')

// ==== Middlewares
const {protect} = require('../middleware/authMiddleware')


router.route('/').get( protect, getReselerOrders).post(protect, createReselerOrder)









module.exports = router