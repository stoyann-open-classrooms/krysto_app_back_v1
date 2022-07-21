// ==== Dépendances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()
const {
  registerReseler,
  loginReseler,
  getMe,
  upload,
} = require('../controllers/reselerController')

// ==== Middlewares
const { protect } = require('../middleware/authMiddleware')

router.post('/', upload, registerReseler)
router.post('/login', loginReseler)
router.get('/me', protect, getMe)

module.exports = router
