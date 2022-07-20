const mongoose = require('mongoose')

const mailShema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Vous devez entrez un e-mail'],
      unique: true,
    },
    
  },
  { timestamps: true }
)

module.exports = mongoose.model('Mail', mailShema)
