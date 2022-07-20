// ==== Dépendances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()
const {
  registerReseler,
  loginReseler,
} = require('../controllers/reselerController')

// ==== Middlewares
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerReseler)
router.post('/login', loginReseler)


module.exports = router
