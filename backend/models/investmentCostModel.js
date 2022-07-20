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
        'Outillage',
        'Agencement',
        'Machine',
        'Plastique',
        'Sécurite',
        'Consommable',
        'Autres',
      ],
      default: 'Outillage',
    },

    budget: {
      type: Number,
      required: [true, 'Vous devez entrez un budget pour cette investissement.'],
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

module.exports = mongoose.model('InvestmentCost', investmentCostShema)
