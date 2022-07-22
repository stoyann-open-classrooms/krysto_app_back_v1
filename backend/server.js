// ==== dependances
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()

// ==== Variables & initialisation
const PORT = process.env.PORT || 5000
const app = express()
const connectDB = require('./config/db')
// ==== Middlewares
const { errorHandler } = require('./middleware/errorMiddleware')

//connect to database
connectDB()

// ===============================================static Images Folder
app.use("/public/upload", express.static("./public/upload"));

// ==== Routes
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)
//Root URL
app.get('/', (req, res) => {
  res.status(200).send({ message: `Bienvenue sur l'api de krysto` })
})

//User routes
app.use('/api/users', require('./routes/userRoutes'))


// ==== Start server
app.listen(PORT, () =>
  console.log(
    `========= Server started on port  http://localhost:${PORT} ========`.white
      .underline.bold.bgRed,
  ),
)
