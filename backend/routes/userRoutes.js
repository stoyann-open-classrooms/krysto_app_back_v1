// ==== Dépendances
const express = require('express')

// ==== Variables & initialisation

const router = express.Router()
const {registerUser, loginUser, getMe} =  require('../controllers/userController')

// ==== Middlewares
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser )
router.get('/me', protect, getMe )

module.exports = router