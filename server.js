const express = require('express');
const server = express();  // creat server
const mongoose = require('mongoose');
const port = 3333;
const morgan = require('morgan');
const productRoutes = require('./routes/product.routes');

// db connection
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/node');
}
main().then(()=>{
    console.log('DB is connected...');
}).catch((err)=>{
    console.log(err);
});

// //middlware
server.use(morgan('dev'))
server.use(express.json());

server.use('/product',productRoutes);

server.listen(port,()=>{
    console.log(`server start at ${port}.`)
})