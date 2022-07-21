const mongoose = require('mongoose')

const machineParkShema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, 'Vous devez charger une photo de profil'],
    },
    nom: {
        type: String,
        required: [true, 'Vous devez entrez un numéro de rue'],
      },
      note: {
        type: String,
        required: [true, 'Vous devez entrez une déscription pour ce type de machines'],
      },

  },
  { timestamps: true }
)

module.exports = mongoose.model('MachinePark', machineParkShema)
