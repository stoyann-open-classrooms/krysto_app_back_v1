const mongoose = require('mongoose')

const trocShema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true],
      ref: 'User',
    },
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    type: {
      type: String,
      required: [true, 'Merci de selectionner un type de troc'],
      enum: ['recherche', 'proposition'],
    },
    title: {
      type: String,
      required: [true, 'Vous devez entrer un titre pour votre troc'],
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrer une descrition pour votre troc'],
    },
    status: {
      type: String,
      required: true,
      enum: ['publiée', 'brouillon', 'archivé'],
      default: 'publiée',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Troc', trocShema)
