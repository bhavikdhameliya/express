const express = require('express');
const loginRoutes = express.Router();
const Login = require('../model/login.model');

loginRoutes.get('/register',(req, res)=>{
    res.render('register');
});

loginRoutes.post('/add',async(req, res)=>
{
    let login = await Login.create({...req.body});
    // res.render('register');
    login.save();
    res.redirect('/api/login/register');
});

module.exports = loginRoutes