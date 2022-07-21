const mongoose = require('mongoose')

const userShema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Vous devez entrez votre nom'],
    },
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    email: {
      type: String,
      required: [true, 'Vous devez entrez un email valide'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Vous devez entrez un mot de passe'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userShema)
