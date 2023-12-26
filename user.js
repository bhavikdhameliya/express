require("dotenv").config()
const express = require('express');
const user = express();  // creat server
const mongoose = require('mongoose');
const port = process.env.PORT;
const morgan = require('morgan');
const fs = require('fs');

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoute = require('./routes/order.routes');

// db connection
async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main().then(()=>{
    console.log('DB is connected...'); 
}).catch((err)=>{
    console.log(err);
});

// //middlware 
user.use(morgan('dev'))
user.use(express.json());

user.use('/api/user',userRoutes);
user.use('/api/product',productRoutes)
user.use('/api/cart',cartRoutes)
user.use('/api/order',orderRoute);

user.listen(port,()=>{
    console.log(`server start at ${port}.`)
})



// const orderRoute = require('./routes/order.routes');
// const authRouthes = require('./routes/auth.routes');
// const path = require('path');
// const imagepath = path.join(__dirname,'public','images');u


// server.use('/public/images',express.static(imagepath));


// server.use('/api/order',orderRoute);
// server.use('/api/auth',authRouthes);












