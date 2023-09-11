const Product = require("../models/product");
const {verifyUser,verifyAdmin} = require("../utils/verifyToken")
const express = require("express");
const router = express.Router();
const { updateProduct, deleteProduct, getProduct, getProducts, createProduct } = require("../controller/product");

router.post("/addproduct", verifyAdmin,createProduct)
//update product
router.put("/:id", verifyAdmin, updateProduct);

//Delete product
router.delete("/:id", verifyAdmin,deleteProduct);

//get product
router.get("/get/:id", verifyAdmin, getProduct);

//get all products
router.get("/", verifyAdmin, getProducts)

module.exports = router;