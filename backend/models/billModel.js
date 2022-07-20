const mongoose = require('mongoose')

const billShema = mongoose.Schema(
  {

    quotation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quotation',
    },

    type: {
      type: String,
      enum: [
        'Loyer',
        'Assurance',
        'Taxe',
        'Eau',
        'Electricité',
        'Fournisseur',
        'Autres',
      ],
      default: 'Fournisseur',
    },

    amount: {
      type: Number,
      required: [true, 'Vous devez entrez le montant de la facture'],
    },

    deadline: {
      type: Date,
      required: [
        true,
        'Vous devez entrez une date limite pour le réglement de cette factures',
      ],
    },
    payment: {
      type: Date,
    },

    note: {
      type: String,
      default: 'Aucune note pour cette facture.',
    },
    archived: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Bill', billShema)
