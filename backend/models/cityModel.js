const mongoose = require('mongoose')

const cityShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Vous devez entrez un nom de ville'],
      unique: true,
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('City', cityShema)
