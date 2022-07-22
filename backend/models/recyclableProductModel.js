const mongoose = require('mongoose')

const recyclableProductTypeShema = mongoose.Schema(
  {
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'Brand',
    },
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    product: {
      type: String,
      required: [true, 'Vous devez entrer un nom pour cette categorie'],
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrer une descrition pour votre troc'],
    },
 
  },
  { timestamps: true }
)

module.exports = mongoose.model('RecyclableProduct', recyclableProductTypeShema)
