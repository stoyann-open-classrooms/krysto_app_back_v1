const mongoose = require('mongoose')

const colorShema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    nom: {
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

module.exports = mongoose.model('Color', colorShema)
