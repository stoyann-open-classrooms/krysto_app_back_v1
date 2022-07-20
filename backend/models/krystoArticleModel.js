const mongoose = require('mongoose')

const krystoColorShema = mongoose.Schema(
  {
    plasticType: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'PlasticType',
    },
    molds: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'MoldPark',
    },
    machines: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'MachinePark',
    },
    name: {
      type: String,
      required: [true, 'Vous devez entrez un nom de couleur'],
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrez une déscription a cette couleur'],
    },
    weight: {
      type: Number,
      required: [true, 'Vous devez entrez un poid pour cette article'],
    },
    stock: {
      type: Number,
      required: [true, 'Vous devez entrez un stock pour cette article'],
      default: 0
    },
    productCoast: {
      type: Number,
      required: [true, 'Vous devez entrez un cout de production pour cette article'],
      default: 0
    },
    productSale: {
      type: Number,
      required: [true, 'Vous devez entrez un prix de vente pour ce produit'],
      default: 0
    },
   
  },
  { timestamps: true }
)

module.exports = mongoose.model('KrystoColor', krystoColorShema)
