const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Troc = require('../models/trocModel')
// image Upload dependence
const multer = require("multer");
const path = require("path");

// @desc Get User trocs
// @route GET /api/trocs/all
// @ access Public
const getAllTrocs = asyncHandler(async (req, res) => {

  const trocs = await Troc.find()
  res.status(200).json(trocs)

})



// @desc Get User trocs
// @route GET /api/trocs
// @ access Private
const getUserTrocs = asyncHandler(async (req, res) => {
  // get user using the id and JWT

  
  if (!req.user) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }
  
  const user = await User.findById(req.user.id)
  const trocs = await Troc.find({ user: req.user.id })
  res.status(200).json(trocs)
})

// @desc Get User troc
// @route GET /api/troc/:id
// @ access Private
const getUserTroc = asyncHandler(async (req, res) => {
  // get user using the id and JWT

  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }
  const troc = await Troc.findById(req.params.id)

  if (troc.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Vous n'avez pas accées a ce troc")
  }

  if (!troc) {
    res.status(404)
    throw new Error("Le troc demandée n'a pas étè trouver")
  }
  res.status(200).json(troc)
})

// @desc Create new troc
// @route  POST /api/trocs
// @ access Private
const createTroc = asyncHandler(async (req, res) => {
  const { title, type, description, status, image } = req.body

  if (!title || !description) {
    res.status(400)
    throw new Error("Merci d'entrez un titre et une déscription")
  }

  if (!type) {
    res.status(400)
    throw new Error("Merci d'entrez un type de troc")
  }
  // get user using the id and JWT
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }
  const troc = await Troc.create({
    title,
    image: req.file.path,
    description,
    type,
    user: req.user.id,
    status: 'publiée',
  })
  res.status(201).json(troc)
})

// @desc  Delete troc
// @route DELETE /api/trocs/:id
// @ access Private
const deleteTroc = asyncHandler(async (req, res) => {
  // get user using the id and JWT

  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }

  const troc = await Troc.findById(req.params.id)

  if (troc.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Vous n'avez pas accées a ce troc")
  }

  if (!troc) {
    res.status(404)
    throw new Error("Le troc demandée n'a pas étè trouver")
  }
  await troc.remove()
  res.status(200).json({ success: true })
})

// @desc Update User troc
// @route PUT /api/trocs/:id
// @ access Private
const updateTroc = asyncHandler(async (req, res) => {
  // get user using the id and JWT

  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }

  const troc = await Troc.findById(req.params.id)

  if (troc.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Vous n'avez pas accées a ce troc")
  }

  if (!troc) {
    res.status(404)
    throw new Error("Le troc demandée n'a pas étè trouver")
  }

  const updatedTroc = await Troc.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json(updatedTroc)
})


// =========================== UPLOAD IMAGE CONTROLLER ========================================

const im = "troc_pic";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/troc_pics");
  },
  filename: (req, file, cb) => {
    cb(null, im + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");




module.exports = {
  getUserTrocs,
  getAllTrocs,
  createTroc,
upload,
  getUserTroc,
  updateTroc,
  deleteTroc,
}
