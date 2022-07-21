const mongoose = require('mongoose')

const moldParkShema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('MoldPark', moldParkShema)
