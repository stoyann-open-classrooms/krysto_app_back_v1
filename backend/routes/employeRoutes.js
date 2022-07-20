// ==== Dépendances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()
const {
  registerEmploye,
  loginEmploye,
  getMe,
} = require('../controllers/employeController')

// ==== Middlewares
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerEmploye)
router.post('/login', loginEmploye)
router.get('/me', protect, getMe)


module.exports = router
