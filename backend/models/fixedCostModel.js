const mongoose = require('mongoose')

const investmentCostShema = mongoose.Schema(
  {
    quotation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quotation',
    },
    
    type: {
      type: String,
      enum: [
        'Loyer',
        'Eau',
        'Electricité',
        'Publicité',
        'Asssurance',
        'Hebergement Web',
        'Consommable',
        'Comptabilité',
        'Salaire',
        'Autres',
      ],
      default: 'Loyer',
    },

    budget: {
      type: Number,
      required: [true, 'Vous devez entrez un budget pour cette investissement.'],
    },

    note: {
      type: String,
      default: 'Aucune note pour cette investissement.',
    },
    archived: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('InvestmentCost', investmentCostShema)
