// ==== Dependances
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// image Upload dependence
const multer = require("multer");
const path = require("path");

// ==== Models
const User = require('../models/userModel')

// @desc :  Register a new user
// @route :  /api/users
// @ access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, isAdmin , image} = req.body
  // validation
  if (!username) {
    res.status(400)
    throw new Error('Vous devez entrer un nom d’utilisateur.')
  }
  if (!password) {
    res.status(400)
    throw new Error('Vous devez choisir un mot de passe.')
  }
  if (!email) {
    res.status(400)
    throw new Error('Vous devez entrer votre e-mail.')
  }
  // Find if user already exist
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('Cet utilisateur existe déjà ! Essayer de vous connecter.')
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    username,
    image: req.file.path,
    email,
    isAdmin,
    password: hashedPassword,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      image: user.image,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Donnés utilisateur non valide, merci de réessayer.')
  }
})

// @desc Login a user
// @route /api/users/login
// @ access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  // check user and password match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error(
      'Impossible de se connecter mot de passe ou e-mail incorrect !',
    )
  }
})

// @desc Get current User
// @route /api/users/me
// @ access Private

const getMe = asyncHandler(async (req, res) => {
 
  if(!req.user) {

    res.status(401)
    throw new Error(
      "Vous n'êtes pas autorisé a acceder a ces données.",
    )
  } else {
    const user = {
      id: req.user._id,
      email: req.user.email,
      username: req.user.username,
      isAdmin: req.user.isAdmin,
    }

    res.status(200).json(user)
  }
})

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}




// =========================== UPLOAD IMAGE CONTROLLER ========================================

const im = "user_pic";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/user_pics");
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
  registerUser,
  loginUser,
  getMe,
  upload,
}
