// ==== Dependances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()
const {getReselerOrders, createReselerOrder, getReselerOrder, updateReselerOrder, deleteReselerOrder} = require('../controllers/reselerOrderController')

// ==== Middlewares
const {protect} = require('../middleware/authMiddleware')


router.route('/').get( protect, getReselerOrders).post(protect, createReselerOrder)

router.route('/:id').get(protect, getReselerOrder).delete(protect, deleteReselerOrder).put(protect, updateReselerOrder)







module.exports = router