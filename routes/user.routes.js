const express = require('express');
const userRoutes = express.Router();
const { verifyToken } = require('../helpers/tokenverfiy');
const {
    updateuser,
    deleteuser,
    signUp,
    login,
    getuser,
    updatepassword
} = require('../controller/user.controller');

userRoutes.post('/signup',signUp);

userRoutes.post('/login',login);

userRoutes.get('/profile',verifyToken,getuser);

userRoutes.put('/Update-profile' , verifyToken,updateuser)

userRoutes.put('/updatepassword' , verifyToken,updatepassword)

userRoutes.delete('/:id',deleteuser);


module.exports = userRoutes;