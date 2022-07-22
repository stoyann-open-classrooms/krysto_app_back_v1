// ==== dependances
const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const nodemailer = require('nodemailer')


// ==== Variables & initialisation
const PORT = process.env.PORT || 5000
const app = express()
const connectDB = require('./config/db')
// ==== Middlewares
const { errorHandler } = require('./middleware/errorMiddleware')

//connect to database
connectDB()
app.use(cors(
  {
    origin:"*",
  }
))
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
app.use('/api/trocs', require('./routes/trocRoutes'))
app.use('/api/trocCategories', require('./routes/trocCategoryRoutes'))
app.use('/api/plasticTypes', require('./routes/plasticTypeRoute'))
app.use('/api/brands', require('./routes/brandRoute'))



// ==== Start server
app.listen(PORT, () =>
  console.log(
    `========= Server started on port  http://localhost:${PORT} ========`.white
      .underline.bold.bgRed,
  ),
)
