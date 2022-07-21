// ==== Dépendances
const express = require('express')

// ==== Variables & initialisation

const router = express.Router()
const {
  upload,
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

// ==== Middlewares
const { protect } = require('../middleware/authMiddleware')

router.post('/', upload, registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router
