const express  = require('express');
const cartRoutes = express.Router();
const { verifyToken } = require('../helpers/tokenverfiy');
const { addToCart } = require('../controller/cart.controller');

cartRoutes.post('/add-cart',verifyToken,addToCart);

module.exports = cartRoutes