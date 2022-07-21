// ==== Dependances
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// image Upload dependence
const multer = require("multer");
const path = require("path");
// ==== Models
const Reseler = require('../models/reselerModel')

// @desc :  Register a new reseler
// @route :  /api/reselers
// @ access Public
const registerReseler = asyncHandler(async (req, res) => {
  const { name, email, password, phone} = req.body
  // validation
   if (!name) {
    res.status(400)
    throw new Error("Vous devez entrer un nom de revendeur.")
  }
   if (!password) {
    res.status(400)
    throw new Error("Vous devez choisir un mot de passe.")
  }
   if (!email) {
    res.status(400)
    throw new Error("Vous devez entrer votre e-mail.")
  }
   if (!phone) {
    res.status(400)
    throw new Error("Vous devez entrer un numéro de télèphone.")
  }
  // Find if reseler already exist
  const reselerExists = await Reseler.findOne({ email })
  if (reselerExists) {
    res.status(400)
    throw new Error("Ce revendeur existe déjà ! Essayer de vous connecter.")
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const reseler = await Reseler.create({
    name,
    logo:  req.file.path,
    email,
    phone,
    password: hashedPassword,
  })
  if (reseler) {
    res.status(201).json({
      _id: reseler._id,
      name: reseler.name,
      email: reseler.email,
      phone: reseler.phone,
      token: generateToken(reseler._id),
    })
  } else {
    res.status(400)
    throw new Error('Donnés utilisateur non valide, merci de réessayer.')
  }
})

// @desc Login a reseler
// @route /api/users/login
// @ access Public

const loginReseler = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const reseler = await Reseler.findOne({ email })

  // check user and password match
  if (reseler && (await bcrypt.compare(password, reseler.password))) {
    res.status(200).json({
      _id: reseler._id,
      name: reseler.name,
      email: reseler.email,
      token: generateToken(reseler._id),
    })
  } else {
    res.status(401)
    throw new Error('Impossible de se connecter mot de passe ou e-mail incorrect !')
  }


})



// @desc Get current Reseler
// @route /api/reselers/me
// @ access Private

const getMe = asyncHandler(async (req, res) => {
 
    if(!req.reseler) {
  
      res.status(401)
      throw new Error(
        "Vous n'êtes pas autorisé a acceder a ces données. Merci de vous connecter",
      )
    } else {
      const reseler = {
        id: req.reseler._id,
        email: req.reseler.email,
        name: req.reseler.name,
     
      }
  
      res.status(200).json(reseler)
    }
  })
// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}
// =========================== UPLOAD IMAGE CONTROLLER ========================================

const im = "profil_pic";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/");
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
}).single("logo");





module.exports = {
  registerReseler,
  loginReseler,
  getMe,
  upload,
}
