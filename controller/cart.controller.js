const { default: mongoose } = require('mongoose');
const Cart = require('../model/cart.model');

exports.addToCart = async ( req , res )=> {
    try {
        const {cartItem , quantity}= req.body
        let isCart = await Cart.findOne({cartItem : cartItem,user: req.user._id});
        if(isCart)
        {
            return res.json({Message : 'cart item is alredy exit.....'});
        }
    isCart = await Cart.create({
            user : req.user._id,
            cartItem , quantity
        });
        isCart.save();
        res.status(202).json({cart: isCart, message:'cart added sucess'});
    }catch (error) {
        console.log(error);
        res.json({message : 'Internal server eroor'});
    }
};

exports.getAllCarts = async (req , res) => {
    try{
        let allcarts = await Cart.find({user : req.user._id, isDelete: false});
        res.status(200).json(allcarts);
    }catch (error){
        console.log(error);
        res.json({message : 'Internal server error'});
    }
};


exports.getCarts = async(req,res)=>{
  try{
    let id = new mongoose.Types.ObjectId(req.query.cartId);
    let cartItem = await Cart.findById(id);
    if(!cartItem){
        return res.json({messge:'cart not found'});
    }
    res.status(200).json(cartItem);

  } catch(error){
    console.log(error);
    res.josn({message:'internal server eroor'});
  }   
};

exports.updateCart = async (req, res) => {
    try {
        const { cartId, quantity } = req.body;
        let cartItem = await Cart.findById(cartId);

        if (!cartItem) {
            return res.json({ message: 'Cart not found' });
        }

        cartItem.quantity = quantity;
        await cartItem.save();

        res.status(200).json({ cart: cartItem, message: 'Cart item updated successfully' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'Internal server error' });
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        let cartItem = await Cart.findById(cartId);

        if (!cartItem) {
            return res.json({ message: 'Cart not found' });
        }

        // Soft delete by setting isDelete to true
        cartItem.isDelete = true;
        await cartItem.save();

        res.status(200).json({ message: 'Cart item deleted successfully' });
    } catch (error) {
        console.log(error);
        res.json({ message: 'Internal server error' });
    }
};













