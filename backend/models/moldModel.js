const mongoose = require('mongoose')

const moldShema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    name: {
      type: String,
      required: [true, 'Vous devez entrez un nom pour ce moule'],
      unique: true
    },
    weight: {
      type: Number,
      required: [true, 'Vous devez un poid en KG pour ce moule'],
    },
    lenght: {
      type: Number,
      required: [true, 'Vous devez une longeur en CM pour ce moule'],
    },
    large: {
      type: Number,
      required: [true, 'Vous devez une largeur en CM pour ce moule'],
    },
    height: {
      type: Number,
      required: [true, 'Vous devez une hauteur en CM pour ce moule'],
    },
    
  },
  { timestamps: true },
)

module.exports = mongoose.model('MoldPark', moldShema)
