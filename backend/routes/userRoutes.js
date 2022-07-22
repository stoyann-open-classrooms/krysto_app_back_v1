// ==== Dépendances
const express = require('express')

// ==== Variables & initialisation
const router = express.Router()


// ==== Controllers
const {
  registerUser,
  upload,
  loginUser,
  getMe,
} = require('../controllers/userController')

// ==== Middlewares
const { protect } = require('../middleware/authMiddleware')



// ==== Public Routes
router.post('/', upload, registerUser)
router.post('/login', loginUser)


// ==== Private Routes
router.get('/me', protect, getMe)

module.exports = router
