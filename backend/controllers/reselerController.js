// ==== Dependances
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// ==== Models
const Reseler = require('../models/reselerModel')

// @desc :  Register a new user
// @route :  /api/users
// @ access Public
const registerReseler = asyncHandler(async (req, res) => {
  const { name, email, password} = req.body
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
    email,
    password: hashedPassword,
  })
  if (reseler) {
    res.status(201).json({
      _id: reseler._id,
      username: reseler.username,
      email: reseler.email,
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
      username: reseler.username,
      email: reseler.email,
      token: generateToken(reseler._id),
    })
  } else {
    res.status(401)
    throw new Error('Impossible de se connecter mot de passe ou e-mail incorrect !')
  }


})


// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}



module.exports = {
  registerReseler,
  loginReseler,
}
