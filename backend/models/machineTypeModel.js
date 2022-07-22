const mongoose = require('mongoose')

const machineShema = mongoose.Schema(
  {

    nom: {
      type: String,
      required: [true, 'Vous devez entrez un numéro de rue'],
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrez une déscription pour ce type de machines'],
    },
    ceCertified: {
      type: Boolean,
      required: [true, 'Vous devez spécifier si cette machine a la certification CE'],
    },
    price: {
      type: Number,
      required: [true, 'Vous devez spécifier Le tarif fournisseur pour cette machines'],
    },
   
  },
  { timestamps: true }
)

module.exports = mongoose.model('Machine', machineShema)
