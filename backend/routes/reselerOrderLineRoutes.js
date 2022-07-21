// ==== Dependances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router({mergeParams : true})
const {getOrderLines, addOrderLines} = require('../controllers/reselerOrderLinesController')

// ==== Middlewares
const {protect} = require('../middleware/authMiddleware')

// ==== Routes

router.route('/').get(protect, getOrderLines).post(protect, addOrderLines)


module.exports = router