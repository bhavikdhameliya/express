const { json } = require('express');
const cart = require('../model/cart.model');

exports.addToCart = async (res,req)=> {
    try {
        const {cartItem , quantity}= re.body
        let iscart = await cart.findone({cartItem : cartItem,user : req.user._id});
        if(isCart)
        {
            return res.json({Message : 'cart item is alredy exit.....'});
        }
    isCart = await cart.create({
            user : req.user._id,
            cartItem , quantity
        });
        isCart.save();
        res,json(202).json({cart: isCart, message:'cart added sucess'});
    }catch (eroor) {
        console.log(error);
        res.json({message : ' Internal server eroor'});
    }
};