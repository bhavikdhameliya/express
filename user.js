require("dotenv").config()
const express = require('express');
const user = express();  // creat server
const mongoose = require('mongoose');
const port = process.env.PORT;
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoute = require('./routes/order.routes');
const authRouthes = require('./routes/auth.routes');
const loginRoutes = require("./routes/login.routes");
const imagepath = path.join(__dirname,'public','images');
user.use(express.urlencoded({ extended: true}));
user.set("view engine", 'ejs');

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
user.use('/public/images',express.static(imagepath));

user.use('/api/user',userRoutes);
user.use('/api/product',productRoutes)
user.use('/api/cart',cartRoutes)
user.use('/api/order',orderRoute);
user.use('/api/auth',authRouthes);
user.use('/api/login',loginRoutes);

user.listen(port,()=>{
    console.log(`server start at ${port}.`)
})























