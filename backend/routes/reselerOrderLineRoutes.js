// ==== Dependances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router({mergeParams : true})
const {getOrderLines, addOrderLines} = require('../controllers/reselerOrderLinesController')

// ==== Middlewares
const {protect} = require('../middleware/authMiddleware')




module.exports = router