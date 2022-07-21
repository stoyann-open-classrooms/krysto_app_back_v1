const mongoose = require('mongoose')

const brandShema = mongoose.Schema(
  {
    logo: {
        type: String,
        required: [true, 'Vous devez charger une image pour ce produit'],
      },
   
      name: {
      type: String,
      required: [true, 'Vous devez entrez un nom de ville'],
      unique: true,
    },
    description: {
      type: String,
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Brand', brandShema)
