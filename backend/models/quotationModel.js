const mongoose = require('mongoose')

const quotationShema = mongoose.Schema(
  {
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
    },
    amount: {
      type: Number,
      required: [true, 'Vous devez entrez le montant de ce devis'],
    },

    deadline: {
      type: Date,
      required: [true, 'Vous devez entrez une date limite pour ce devis'],
    },

    note: {
      type: String,
      default: 'Aucune note pour ce devis.',
    },

    isAccept: {
      type: Boolean,
      required: true,
      default: false,
    },

    archived: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Quotation', quotationShema)
