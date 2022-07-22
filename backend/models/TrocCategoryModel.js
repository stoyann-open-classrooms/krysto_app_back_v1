const mongoose = require('mongoose')

const trocCategoryShema = mongoose.Schema(
  {
    trocs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Troc',
      },
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

module.exports = mongoose.model('TrocCategory', trocCategoryShema)
