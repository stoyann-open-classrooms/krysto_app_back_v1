// dependences
const express = require('express')
// variables et initialisation
const router = express.Router()

// controllers
const {getAllTrocs , upload, getUserTrocs, getUserTroc, createTroc, deleteTroc, updateTroc} = require('../controllers/trocController')

// middlewares
const {protect} = require('../middleware/authMiddleware')

// public Routes
router.route('/getAll').get(getAllTrocs)

// Private routes
router.route('/').get(protect, getUserTrocs).post(protect, upload, createTroc)
router.route('/:id').get(protect, getUserTroc).delete(protect, deleteTroc).put(protect, updateTroc)
module.exports = router