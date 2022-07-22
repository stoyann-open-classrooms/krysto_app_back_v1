const asyncHandler = require('express-async-handler')
// image Upload dependence
const multer = require('multer')
const path = require('path')

//models

const User = require('../models/userModel')
const Brand = require('../models/brandModel')

// @desc Get All Brand
// @route GET /api/brands
// @ access Public
const getAllBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find()
  res.status(200).json(brands)
})

// @desc Create plastic type
// @route  POST /api/plasticTypes
// @ access Private
const createBrand = asyncHandler(async (req, res) => {
  const { name, description, logo } = req.body

  if (!name || !description) {
    res.status(400)
    throw new Error("Merci d'entrez un titre et une déscription")
  }

  // get user using the id and JWT
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }
  const brand = await Brand.create({
    name,
    logo: req.file.path,
    description,
  })
  res.status(201).json(brand)
})

const im = 'brand_logo'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload/brand_logos')
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
}).single('logo')

module.exports = {
  upload,
  getAllBrands,
  createBrand,
}
