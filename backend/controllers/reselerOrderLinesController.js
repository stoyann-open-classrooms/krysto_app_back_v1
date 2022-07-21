// ==== Dependances
const asyncHandler = require('express-async-handler')

// ==== Models
const Reseler = require('../models/reselerModel')
const OrderLine = require('../models/reselerOrderLineModel')
const ReselerOrder = require('../models/reselerOrderModel')

// @desc Get Note for a tickets
// @route GET /api/tickets/:ticketId/notes
// @ access Private
const getOrderLines = asyncHandler(async (req, res) => {
  // get user using the id and JWT
  const reseler = await Reseler.findById(req.reseler.id)

  if (!reseler) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }

  const order = await ReselerOrder.findById(req.params.orderId)

  if (order.reseler.toString() !== req.reseler.id) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }

  const orderLines = await OrderLine.find({ ReselerOrder: req.params.orderId })
  res.status(200).json(orderLines)
})

// @desc create line for a order
// @route POST /api/tickets/:ticketId/notes
// @ access Private
const addOrderLines = asyncHandler(async (req, res) => {
  // get user using the id and JWT
  const reseler = await Reseler.findById(req.reseler.id)

  if (!reseler) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }

  const order = await ReselerOrder.findById(req.params.orderId)

  if (order.reseler.toString() !== req.reseler.id) {
    res.status(401)
    throw new Error('Uttilisateur non trouvé')
  }

  const orderLine = await OrderLine.create({
    quantity: req.body.quantity,
    order: req.params.OrderId
  })
  res.status(200).json(orderLine)
})

module.exports = {
  getOrderLines,
  addOrderLines,
}
