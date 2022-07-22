const mongoose = require('mongoose')

const messageShema = mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true],
      ref: 'User',
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true],
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Vous devez entrer une descrition pour votre troc'],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Message', messageShema)
