// ==== Dependances
const asyncHandler = require('express-async-handler')
// image Upload dependence
const multer = require("multer");
const path = require("path");
// ==== Models
const PlasticType = require('../models/plasticTypeModel')

// @desc Get reseler Orders
// @route /api/reselerOrders
// @ access Public 

const getAllTypes = asyncHandler(async (req, res) => {
     const types = await PlasticType.find()
     res.status(200).json(types)
  })




// =========================== UPLOAD IMAGE CONTROLLER ========================================

const im = "plastic_symbol";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/");
  },
  filename: (req, file, cb) => {
    cb(null, im + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("symbol");


module.exports = {upload, getAllTypes}
