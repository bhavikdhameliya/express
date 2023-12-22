const express  = require('express');
const cartRoutes = express.Router();
const { verifyToken } = require('../helpers/tokenverfiy');
const { addToCart ,getAllCarts ,getCarts, updateCart , deleteCart } = require('../controller/cart.controller');

cartRoutes.post('/add-cart',verifyToken,addToCart);
cartRoutes.get('/all-carts',verifyToken,getAllCarts);
cartRoutes.get('/get-cart',verifyToken,getCarts);
cartRoutes.put('/update-cart',verifyToken,updateCart);
cartRoutes.delete('/delete-cart',verifyToken,deleteCart);

module.exports = cartRoutes;