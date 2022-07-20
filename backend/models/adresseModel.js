const mongoose = require('mongoose')

const adresseShema = mongoose.Schema(
  {
    numero: {
      type: String,
      required: [true, 'Vous devez entrez un numéro de rue'],

    },
    rue: {
      type: String,
      required: [true, 'Vous devez entrez un nom de rue'],
    },
    bp: {
      type: String,
      required: false,
    },
    zipCode: {
      type: Number,
      required: [true, 'Vous devez entrez votre code postal'],
      unique: true,
    },
    extra: {
      type: String,
      required: false,
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Adresse', adresseShema)
