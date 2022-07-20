const mongoose = require('mongoose')

const krystoColorShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Vous devez entrez un nom de couleur'],
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrez une déscription a cette couleur'],
    },
   
  },
  { timestamps: true }
)

module.exports = mongoose.model('KrystoColor', krystoColorShema)
