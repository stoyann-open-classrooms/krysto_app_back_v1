const mongoose = require('mongoose')

const krystoShema = mongoose.Schema(
  {
    color: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'Color',
    },
    quantity: {
      type: Number,
      required: [true, 'Vous devez entrez une quantité en stock'],
    },

  },
  { timestamps: true }
)

module.exports = mongoose.model('Krysto', krystoShema)
