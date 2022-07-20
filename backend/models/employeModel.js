const mongoose = require('mongoose')

const employeShema = mongoose.Schema(
  {
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
      enum: ['Masculin', 'Feminin', 'Autres', 'Aucun'],
      default: 'Aucun',
    },
    birthDate: {
      type: Date,
      required: [true, 'Vous devez entrez une date de naissance'],
    },

    email: {
      type: String,
      required: [true, 'Vous devez entrez un email valide'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Vous devez entrez un mot de passe'],
    },
    phone: {
      type: Number,
      required: [true, 'Vous devez entrez un numéro de télèphone'],
    },
    cafatId: {
      type: String,
      required: [true, "Vous devez entrez l'identifiant cafat de l'employé"],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Employe', employeShema)
