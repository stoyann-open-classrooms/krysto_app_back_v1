const mongoose = require('mongoose')

const krystoShema = mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: [true, 'Vous devez entrez une quantité en stock'],
    },

  },
  { timestamps: true }
)

module.exports = mongoose.model('Krysto', krystoShema)
