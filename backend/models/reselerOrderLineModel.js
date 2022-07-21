const mongoose = require('mongoose')

const reselerOrderLineShema = mongoose.Schema(
  {
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ReselerOrder',
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
