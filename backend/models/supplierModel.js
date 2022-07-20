const mongoose = require('mongoose')

const supplierShema = mongoose.Schema(
  {
    adresse: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'Adresse',
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
    phone: {
      type: Number,
      required: [true, 'Vous devez entrez un numéro de télèphone'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Supplier', supplierShema)
