const mongoose = require('mongoose')

const contactShema = mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [false],
        ref: 'User',
      },
    adresse: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'Adresse',
    },
    name: {
      type: String,
      required: [true, 'Vous devez entrez votre prénom'],
    },
    lastname: {
      type: String,
      required: [true, 'Vous devez entrez votre nom de famille'],
      
    },
   
    genre: {
        type: String,
        enum : ['Masculin','Feminin', 'Autres', 'Aucun'],
        default: 'Aucun'
    },
    birthDate: {
      type: Date,
      required: [true, 'Vous devez entrez une date de naissance'],
    },
    phone: {
      type: Number,
      required: [true, 'Vous devez entrez un numéro de télèphone'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Contact', contactShema)
