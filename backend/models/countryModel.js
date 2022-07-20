const mongoose = require('mongoose')

const countryShema = mongoose.Schema(
  {

    name: {
      type: String,
      required: [true, 'Vous devez entrez un nom de pays'],
      unique: true,
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Country', countryShema)
