const mongoose = require('mongoose')

const colorRecipeShema = mongoose.Schema(
  {
  
    nom: {
      type: String,
      required: [true, 'Vous devez entrez un nom de couleur'],
    },
    text: {
      type: String,
      required: [true, 'Vous devez entrez une déscription a cette couleur'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('ColorRecipe', colorRecipeShema)
