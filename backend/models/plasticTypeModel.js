const mongoose = require('mongoose')

const plasticTypeShema = mongoose.Schema(
  {
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
