const mongoose = require('mongoose')

const plasticTypeShema = mongoose.Schema(
  {
    symbol: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    name: {
      type: String,
      required: [true, 'Vous devez entrez un nom pour le type de plastique'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrez une description pour le type de plastique'], 
    },
    
  },
  { timestamps: true }
) 

module.exports = mongoose.model('PlasticType', plasticTypeShema)
