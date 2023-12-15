const express = require('express');
const user = express();  // creat server
const mongoose = require('mongoose');
const port = 4444;
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes');

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
user.use(morgan('dev'))
user.use(express.json());

user.use('/user',userRoutes);

user.listen(port,()=>{
    console.log(`server start at ${port}.`)
})