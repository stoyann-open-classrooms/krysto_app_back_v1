const mongoose = require('mongoose')

const countryShema = mongoose.Schema(
  {
    city: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true],
      ref: 'City',
  },
    name: {
      type: String,
      required: [true, 'Vous devez entrez un nom de pays'],
      unique: true,
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Country', countryShema)
