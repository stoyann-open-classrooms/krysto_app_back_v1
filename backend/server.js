// ==== dependances
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
// image upload dependances
const multer = require('multer')
const path = require('path')

// ==== Variables & initialisation
const PORT = process.env.PORT || 5000
const app = express()
const connectDB = require('./config/db')
// ==== Middlewares
const { errorHandler } = require('./middleware/errorMiddleware')

//connect to database
connectDB()



// ==== Routes
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)
//Root URL
app.get('/', (req, res) => {
  res.status(200).send({ message: `Bienvenue sur l'api de krysto` })
})

//User routes
app.use('/api/users', require('./routes/userRoutes'))
//Reseler routes
app.use('/api/reselers', require('./routes/reselerRoutes'))
//Order Reseler routes
app.use('/api/reselerOrders', require('./routes/reselerOrderRoutes'))
//Employe routes
app.use('/api/employes', require('./routes/employeRoutes'))


// ==== Start server
app.listen(PORT, () =>
  console.log(
    `========= Server started on port  http://localhost:${PORT} ========`.white
      .underline.bold.bgRed,
  ),
)
