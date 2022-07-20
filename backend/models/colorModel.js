const mongoose = require('mongoose')

const colorShema = mongoose.Schema(
  {
    colorRecipes: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'ColorsRecipe',
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
