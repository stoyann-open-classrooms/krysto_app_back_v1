const mongoose = require('mongoose')

const colorRecipeShema = mongoose.Schema(
  {
    order: {
      type: Number,
      required: [true, "Vous devez rentrez le numéro de l'étape"],
    },
    text: {
      type: String,
      required: [true, 'Vous devez entrez du texte pour cette étape'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('ColorRecipe', colorRecipeShema)
