const Product = require("../models/product");
const {verifyUser,verifyAdmin} = require("../utils/verifyToken")
const multer = require('multer');
const express = require("express");
const router = express.Router();
const { updateProduct, deleteProduct, getProduct, getProducts, createProduct } = require("../controller/product");
  
var upload = multer({ dest: 'uploads/' });

router.post("/addproduct", upload.single('img'),createProduct)
//update product
router.put("/:id", verifyAdmin, updateProduct);

//Delete product
router.delete("/:id", verifyAdmin,deleteProduct);

//get product
router.get("/get/:id", getProduct);

//get all products
router.get("/", getProducts)

module.exports = router;