const mongoose = require('mongoose')

const brandShema = mongoose.Schema(
  {
    logo: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    name: {
      type: String,
      required: [true, 'Vous devez entrer un nom pour cette categorie'],
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrer une descrition pour votre troc'],
    },
    difficulty: {
        type: String,
        enum: [1, 2, 3,4 ,5 ],
        default: "1",
      },
 
  },
  { timestamps: true }
)

module.exports = mongoose.model('Brand', brandShema)
