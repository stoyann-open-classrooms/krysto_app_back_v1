const mongoose = require('mongoose')

const moldProcessShema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    nom: {
      type: String,
      required: [true, 'Vous devez entrez un nom de process'],
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrez une déscription pour ce process'],
    },
   
  },
  { timestamps: true }
)

module.exports = mongoose.model('MoldProcess', moldProcessShema)
