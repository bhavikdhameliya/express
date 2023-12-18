const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser,
    getAlluser,
    getuser,
    updateuser,
    deleteuser,
    signUp,
    login
} = require('../controller/user.controller');

userRoutes.post('/signup',signUp);

userRoutes.post('/login',login);

userRoutes.post('/addnewuser', addNewUser);

userRoutes.get('/',getAlluser);

userRoutes.get('/:id',getuser);

userRoutes.patch('/:id',updateuser);

userRoutes.delete('/:id',deleteuser);


module.exports = userRoutes;