const express = require('express');
const server = express();  // creat server

const port = 3333;
const fs = require('fs');
const product = require('./product.json');


//end point
server.get('/',(req,res)=>{
    res.send(product);
})
server.get('/demo',(req,res)=>{
    res.send('demo content');
})

server.listen(port,()=>{
    console.log(`server start at ${port}.`)
})