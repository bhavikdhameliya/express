const express = require('express');
const productRoutes = express.Router();
const {
    addNewProduct,
    getAllproducts,
    getproduct,
    updateproduct,
    deleteproduct
} = require('../controller/product.controller');

    
productRoutes.post('/', addNewProduct);

productRoutes.get('/',getAllproducts);

productRoutes.get('/:id',getproduct);

productRoutes.patch('/:id',updateproduct);

productRoutes.delete('/:id',deleteproduct);


module.exports = productRoutes;