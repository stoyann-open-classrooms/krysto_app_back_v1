const mongoose = require('mongoose')

const plasticTypeShema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    title: {
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

module.exports = mongoose.model('PlasticType', plasticTypeShema)
