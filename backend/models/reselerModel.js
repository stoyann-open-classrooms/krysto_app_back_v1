const mongoose = require('mongoose')

const reselerShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Vous devez entrez votre nom'],
 
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
    phone: {
        type: Number,
        required: [true, 'Vous devez entrez un numéro de télèphone'],
      },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Reseler', reselerShema)
