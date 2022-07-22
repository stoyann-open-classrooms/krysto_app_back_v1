// ==== Dependances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()

// ==== Middlewares
const { protect } = require('../middleware/authMiddleware')




module.exports = router
