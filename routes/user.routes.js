const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser,
    getAlluser,
    getuser,
    updateuser,
    deleteuser
} = require('../controller/user.controller');
    
userRoutes.post('/', addNewUser);

userRoutes.get('/',getAlluser);

userRoutes.get('/:id',getuser);

userRoutes.patch('/:id',updateuser);

userRoutes.delete('/:id',deleteuser);


module.exports = userRoutes;