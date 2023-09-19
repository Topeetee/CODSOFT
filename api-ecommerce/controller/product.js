const Product = require("../models/product");
const multer = require('multer');

const createProduct = async (req, res, next) => {
  if (!req.files || !req.files.img) {
    return res.status(400).json({ error: 'No image file uploaded' });
  }

  const newProduct = new Product({
    name: req.body.name,
    desc: req.body.desc,
    img: req.files.img[0].path, // Assuming you're storing the file path in the 'img' field
    price: req.body.price,
  });

  try {
    console.log('Request Body:', req.body);
console.log('Request File:', req.file);

    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    // Check if files were uploaded
    if (!req.files || !req.files.img) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    const updatedFields = {
      title: req.body.title,
      desc: req.body.desc,
      img: req.files.img[0].path, 
      price: req.body.price,
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    next(res.status(500).json(err));
  }
};

const deleteProduct = async(req,res,next)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
            res.status(200).json("product has been deleted")
    }catch (err) {
        next(res.status(500).json(err));
      }
}
const getProduct = async(req,res,next)=>{
    try{
        const getpro = await Product.findById(req.params.id);
        res.status(200).json(getpro)
    }catch (err) {
        next(res.status(500).json(err));
      }
}
const getProducts = async(req,res,next)=>{
    try {
        const qNew= req.query.new;
        let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } 
     else {
      products = await Product.find();
    }
    res.status(200).json(products);
    } catch (err) {
        next(res.status(500).json(err)) ;  
    }
}
module.exports = {createProduct,updateProduct,deleteProduct,getProduct,getProducts}