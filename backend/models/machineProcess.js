const mongoose = require('mongoose')

const machineProcessShema = mongoose.Schema(
  {
   machines: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'MachinePark',
    },
    nom: {
      type: String,
      required: [true, 'Vous devez entrez un nom pour ce process'],
    },
    description: {
      type: String,
      required: [true, 'Vous devez entrez une déscription pour ce process'],
    },
   
  },
  { timestamps: true }
)

module.exports = mongoose.model('MachineProcess', machineProcessShema)
