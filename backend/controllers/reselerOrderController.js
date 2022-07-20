// ==== Dependances
const asyncHandler = require('express-async-handler')

// ==== Models
const Reseler = require('../models/reselerModel')
const ReselerOrder = require('../models/reselerOrderModel')

// @desc Get reseler Orders
// @route /api/reselerOrder
// @ access Private

const getReselerOrders = asyncHandler(async (req, res) => {
  if (!req.reseler) {
    res.status(401)
    throw new Error(
      "Vous n'êtes pas autorisé a acceder a ces données. Merci de vous connecter",
    )
  } else {
    const reseler = await Reseler.findById(req.reseler.id)
    if (!reseler) {
      res.status(401)
      throw new Error('user non trouvé')
    }

    const orders = await ReselerOrder.find({ reselers: req.reseler.id })
    res.status(200).json(orders)
  }
})

// @desc Create new order
// @route  POST /api/orders
// @ access Private
const createReselerOrder = asyncHandler(async (req, res) => {


    if (!req.reseler) {
        res.status(401)
        throw new Error(
          "Vous n'êtes pas autorisé a acceder a ces données. Merci de vous connecter",
        )
      } else {
       const {orderNum, note  } = req.body
        if (!orderNum) {
          res.status(400)
          throw new Error('Vous devez entrez un numero de commande')
        } 
        else {
            const reseler = await Reseler.findById(req.reseler.id)
            if (!reseler) {
              res.status(401)
              throw new Error('user non trouvé')
            }
           const order = await ReselerOrder.create({
            reseler: req.reseler.id,
            orderNum,
            note,
            archived: false,
            status: "Traitement"
           })
           res.status(201).json({ order })
        }
    
       
      }
})

module.exports = {
  getReselerOrders,
  createReselerOrder,
}
