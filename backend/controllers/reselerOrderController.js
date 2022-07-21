// ==== Dependances
const asyncHandler = require('express-async-handler')

// ==== Models
const Reseler = require('../models/reselerModel')
const ReselerOrder = require('../models/reselerOrderModel')

// @desc Get reseler Orders
// @route /api/reselerOrders
// @ access Private (reseler)

const getReselerOrders = asyncHandler(async (req, res) => {
  if (!req.reseler ) {
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
// @desc Get reseler Order
// @route GET /api/reselerOrders/:id
// @ access Private (reseler)

const getReselerOrder = asyncHandler(async (req, res) => {
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

    const order = await ReselerOrder.findById(req.params.id)

    if (!order) {
      res.status(404)
      throw new Error('Commande non trouvé')
    }
    if (order.reseler.toString() != req.reseler.id) {
      res.status(401)
      throw new Error('requete non authorize')
    }
    res.status(200).json(order)
  }
})

// @desc Create new order
// @route  POST /api/orders
// @ access Private (reseler)
const createReselerOrder = asyncHandler(async (req, res) => {
  if (!req.reseler) {
    res.status(401)
    throw new Error(
      "Vous n'êtes pas autorisé a acceder a ces données. Merci de vous connecter",
    )
  } else {
    const { orderNum, note } = req.body
    if (!orderNum) {
      res.status(400)
      throw new Error('Vous devez entrez un numero de commande')
    } else {
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
        status: 'Traitement',
      })
      res.status(201).json({ order })
    }
  }
})



// @desc  update reseler Order
// @route PUT /api/reselerOrders/:id
// @ access Private (reseler)

const updateReselerOrder = asyncHandler(async (req, res) => {
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
  
      const order = await ReselerOrder.findById(req.params.id)
  
      if(!order) {
          res.status(404)
          throw new Error('Commande non trouvé')
      }
      if(order.reseler.toString() != req.reseler.id) {
          res.status(401)
          throw new Error("requete non authorize")
      }
     const updatedOrder = await ReselerOrder.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json(updatedOrder)
    }
  })
// @desc DEL reseler Order
// @route /api/reselerOrders/:id
// @ access Private (reseler)

const deleteReselerOrder = asyncHandler(async (req, res) => {
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
  
      const order = await ReselerOrder.findById(req.params.id)
  
      if(!order) {
          res.status(404)
          throw new Error('Commande non trouvé')
      }
      if(order.reseler.toString() != req.reseler.id) {
          res.status(401)
          throw new Error("requete non authorize")
      }
      await order.remove()
      res.status(200).json({success: true , message: 'La commande a étè supprimer avec succée'})
    }
  })
  


module.exports = {
  getReselerOrders,
  updateReselerOrder,
  getReselerOrder,
  deleteReselerOrder,
  createReselerOrder,
}
