const express = require('express');
const userRoutes = express.Router();
const{ verifyToken } = require('../helpers/tokenverfiy');
const{
    Signup,
    login,
    getuser,
    updateuser,
    deleteuser,
    chagePassword
}= require('../controller/user.controller');

// create Signup -> /Signup
userRoutes.post('/Signup',Signup);

// login -> /login
userRoutes.post('/login',login);

// // specific user => /profile
userRoutes.get('/profile',verifyToken,getuser);

// update user => /update-profile
userRoutes.put('/update-profile',verifyToken,updateuser);

// delete user => /delete
userRoutes.delete('/delete',deleteuser);

userRoutes.put('/update',verifyToken,chagePassword);

module.exports = userRoutes;