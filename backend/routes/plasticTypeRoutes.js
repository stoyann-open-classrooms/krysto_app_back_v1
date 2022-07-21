// ==== Dependances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()
const { getAllTypes } = require('../controllers/plasticTypeController')

// ==== Middlewares
const {protect} = require('../middleware/authMiddleware')


router
  .route('/')
  .get( getAllTypes)
  


module.exports = router