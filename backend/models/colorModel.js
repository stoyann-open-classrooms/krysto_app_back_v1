const mongoose = require('mongoose')

const colorShema = mongoose.Schema(
  {
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
