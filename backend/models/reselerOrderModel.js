const mongoose = require('mongoose')

const reselerOrderShema = mongoose.Schema(
  {
    reseler: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'Reseler',
    },
    
    orderLines: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'ReselerOrderLine',
    },
  
    notes: {
        type: String,
      },
    
  },
  { timestamps: true }
) 

module.exports = mongoose.model('ReselerOrder', reselerShema)
