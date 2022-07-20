const mongoose = require('mongoose')

const moldParkShema = mongoose.Schema(
  {
    notes: {
      type: String,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('MoldPark', moldParkShema)
