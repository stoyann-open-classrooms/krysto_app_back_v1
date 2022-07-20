const mongoose = require('mongoose')

const supplierShema = mongoose.Schema(
  {
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'Contact',
    },
    nom: {
      type: String,
      required: [true, 'Vous devez entrez un nom pour ce fournisseur'],
    },
    email: {
        type: String,
        required: [true, 'Vous devez entrez un email valide'],
        unique: true,
      },
    description: {
      type: String,
      required: [true, 'Vous devez entrez une déscription a cette couleur'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('SupplierRecipe', supplierShema)
