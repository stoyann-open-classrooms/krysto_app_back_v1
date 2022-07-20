const mongoose = require('mongoose')

const rowMaterialShema = mongoose.Schema(
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
    type: {
        type: String,
        required: [true, 'Merci de selectioner un type de matiére'],
        enum: ['plastique', 'Electronique', 'Consomable', "Outillage", 'Autres'],
      },
    notes: {
        type: String,
        required: [true, 'Merci de selectioner un type de matiére'],
        enum: ['plastique', 'Electronique', 'Consomable', "Outillage", 'Autres'],
      },
    
  },
  { timestamps: true }
) 

module.exports = mongoose.model('RowMaterial', rowMaterialShema)
