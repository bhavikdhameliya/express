// const product = require('../public/product.json');
const Product = require("../model/product.model");

exports.addNewProduct = async (req, res) => {
  try {
    let { title, discription, price, category, brand } = req.body;
    let product = await Product.findOne({ title: title, isDelete : false });
    if (product) {
      return res.json({ messge: "Poduct is alredy exist..." });
    }
    product = await Product.create({
      title,
      discription,
      price,
      category,
      brand,
    });

    product.save();
    res.json({ message: "Product is Added.", product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

exports.getAllproducts = async (req, res) => {
  try {
    let products = await Product.find({ isDelete: false });
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};

exports.getproduct = async (req, res) => {
  try {
    let id = req.params.id;
    let products = await Product.findById(id);
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};

exports.updateproduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findById(id, { isDelete: false });
    if (!product) {
      return res.json({ Message: "product is not found...." });
    }
    product = await Product.findByIdAndUpdate(
      { _id: id },
      {
        $set: { ...req.body },
      },
      {
        new: true,
      }
    );
    product.save();
    res.json({ Message: "product is update....", product });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Product.findById(id);
    if (!product) {
      return res.json({ Message: "product is not found...." });
    }
    
    product = await Product.findByIdAndDelete({ _id: id }); // deleteproduct
    res.json({ Message: "product is delete....", product });
    res.json({ Message: "product is delete...." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};
