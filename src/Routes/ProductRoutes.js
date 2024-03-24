const express = require('express');
const productController = require("../Controllers/ProductController");
const { storage } = require("../dbConfig/cloudinary-config");
const multer = require("multer");
const upload = multer({ storage });

const model = require("../Models/ProductModel");

const router = express.Router();

router
    .post("/",upload.single("image"), productController.createProduct)
    .put("/",upload.single("image"), productController.updateProduct);

module.exports = router;