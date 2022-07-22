const asyncHandler = require('express-async-handler')
// image Upload dependence
const multer = require("multer");
const path = require("path");

//models
const User = require('../models/userModel')
const TrocCategory = require('../models/TrocCategoryModel')




// @desc Get Troc Categories
// @route GET /api/trocCategories
// @ access Public
const getAllTrocCategories = asyncHandler(async (req, res) => {

  const categories = await TrocCategory.find()
  res.status(200).json(categories)

})


// @desc Create troc category
// @route  POST /api/trocCategories
// @ access Private
const createTrocCategory = asyncHandler(async (req, res) => {
    const { title,  description, image } = req.body
  
    if (!title || !description) {
      res.status(400)
      throw new Error("Merci d'entrez un titre et une déscription")
    }

    // get user using the id and JWT
    const user = await User.findById(req.user.id)
    if (!user) {
      res.status(401)
      throw new Error('Uttilisateur non trouvé')
    }
    const category = await TrocCategory.create({
      title,
      image: req.file.path,
      description,
    })
    res.status(201).json(category)
  })


  const im = "troc_category_pic";
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/upload/troc_categories_pics");
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
  }).single("image");
  

module.exports = {

upload,
getAllTrocCategories,
 createTrocCategory,
}
