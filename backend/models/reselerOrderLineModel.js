const mongoose = require('mongoose')

const reselerOrderLineShema = mongoose.Schema(
  {
    article: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'Article',
    },
  
    quantity: {
      type: Number,
      required: [true, "Vous devez entrez un nombre d'articles"],
      default: false,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('ReselerOrderLine', reselerOrderLineShema)
