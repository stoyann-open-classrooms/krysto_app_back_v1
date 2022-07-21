const mongoose = require('mongoose')

const recyclableProductTypeShema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Vous devez charger une image pour ce produit'],
    },
    name: {
      type: String,
      required: [true, 'Vous devez entrez un nom pour le type de plastique'],
      unique: true,
    },
    difficulty: {
        type: String,
        enum: [1, 2, 3, 4, 5],
        default: 1,
      },
    description: {
      type: String,
      required: [true, 'Vous devez entrez une description pour le type de plastique'], 
    },
    
  },
  { timestamps: true }
) 

module.exports = mongoose.model('RecyclableProduct', recyclableProductTypeShema)
