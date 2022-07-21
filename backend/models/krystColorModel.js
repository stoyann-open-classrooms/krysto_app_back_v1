const mongoose = require('mongoose')

const krystoColorShema = mongoose.Schema(
  {


    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'ColorRecipe',
    },
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
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
