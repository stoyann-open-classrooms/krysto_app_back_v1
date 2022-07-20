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
     
     orderNum: {
        type: String,
        required: [true, 'Vous devez entrer un numéro de commande'],
      },
    
      status: {
        type: String,
        enum: ['Traitement', 'En cours', 'Livrée'],
        default: 'Traitement',
      },
    
      note: {
        type: String,
      },
      
      archived: {
        type: Boolean,
        required: true,
        default: false,
      },
    
  },
  { timestamps: true }
) 

module.exports = mongoose.model('ReselerOrder', reselerOrderShema)
