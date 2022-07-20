// ==== Dependances
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// ==== Models
const Employe = require('../models/employeModel')

// @desc :  Register a new Employe
// @route :  /api/users
// @ access Public
const registerEmploye = asyncHandler(async (req, res) => {
  const { name, email, password} = req.body
  // validation
   if (!name) {
    res.status(400)
    throw new Error("Vous devez entrer un nom.")
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
  const employeExists = await Employe.findOne({ email })
  if (employeExists) {
    res.status(400)
    throw new Error("Cet employé existe déjà !")
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create employe
  const employe = await Employe.create({
    name,
    email,
    password: hashedPassword,
  })
  if (employe) {
    res.status(201).json({
      _id: employe._id,
      name: employe.name,
      email: employe.email,
      token: generateToken(employe._id),
    })
  } else {
    res.status(400)
    throw new Error('Donnés utilisateur non valide, merci de réessayer.')
  }
})

// @desc Login a employe
// @route /api/employes/login
// @ access Public

const loginEmploye = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const employe = await Employe.findOne({ email })

  // check employe and password match
  if (employe && (await bcrypt.compare(password, employe.password))) {
    res.status(200).json({
      _id: employe._id,
      username: employe.username,
      email: employe.email,
      token: generateToken(employe._id),
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
  registerEmploye,
  loginEmploye,
}
