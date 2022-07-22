const asyncHandler = require('express-async-handler')
// image Upload dependence
const multer = require('multer')
const path = require('path')

//models

const User = require('../models/userModel')
const PlasticType = require('../models/plasticTypeModel')

// @desc Get All plastic types
// @route GET /api/plasticTypes
// @ access Public
const getAllPlasticTypes = asyncHandler(async (req, res) => {
  const plasticTypes = await PlasticType.find()
  res.status(200).json(plasticTypes)
})

// @desc Create plastic type
// @route  POST /api/plasticTypes
// @ access Private
const createPlasticType = asyncHandler(async (req, res) => {
  const { title, description, image } = req.body

  if (!title || !description) {
    res.status(400)
    throw new Error("Merci d'entrez un titre et une déscription")
  }

  // get user using the id and JWT
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }
  const plasticType = await PlasticType.create({
    title,
    image: req.file.path,
    description,
  })
  res.status(201).json(plasticType)
})

const im = 'plastic_type_symbol'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload/plastic_types')
  },
  filename: (req, file, cb) => {
    cb(null, im + Date.now() + path.extname(file.originalname))
  },
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return cb(null, true)
    }
    cb('Give proper files formate to upload')
  },
}).single('image')

module.exports = {
  upload,
  getAllPlasticTypes,
  createPlasticType,
}
