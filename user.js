const express = require('express');
require("dotenv").config()
const user = express();  // creat server
const mongoose = require('mongoose');
const port = process.env.PORT;
const morgan = require('morgan');

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes')

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


user.listen(port,()=>{
    console.log(`server start at ${port}.`)
})