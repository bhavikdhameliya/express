
// const express = require('express');
// const server = express();  // creat server
// const port = 3333;
// // const fs = require('fs');
// const product = require('./product.json');
// const morgan = require('morgan');

// //middlware
// server.use(morgan('dev'))
// server.use(express.json());

// // c r u d 
 
// // ---------------------------------rest api -------------------------

// //all product -> /products
// server.get('/products',(req,res)=>{
//     res.status(201).json(product);
// })

// //specific product -> /product/:id
// server.get('/product/:year',(req,res)=>{
//     const year = +req.params.year;
//     console.log(year);
//     const item = product.find((p)=>p.year === year)
//     console.log(item);
//     res.status(200).json(item);
// })

// // create product ->/products
// server.post('/product',(req,res)=>{
//     product.push(req.body);
//     res.json({massage: 'product is added.',product:req.body})
// });

// //replece products ->/products/:year
// server.put('/product/:year',(req,res)=>{
//     const year = +req.params.year;
//     // console.log(year);
//     const itemIndex = product.findIndex((p)=>p.year === year)
//     // console.log(item);
//     product.splice(itemIndex,1,{...req.body,year:year})
//     res.status(200).json({message : "products is rplece"});
// });

// //update products ->/products
// server.patch('/product/:year',(req,res)=>{
//     const year = +req.params.year;
//     // console.log(year);
//     const itemIndex = product.findIndex((p)=>p.year === year)
//     let item = product[itemIndex];
//     // console.log(item);
//     product.splice(itemIndex,1,{...item,...req.body})
//     res.status(200).json({message : "products is rplece",product:item});
// });

// //delet products ->/products
// server.delete('/product/:year',(req,res)=>{
//     const year = +req.params.year;
//     // console.log(year);
//     const itemIndex = product.findIndex((p)=>p.year === year)
//     let item = product[itemIndex];
//     // console.log(item);
//     item = product.splice(itemIndex,1)
//     res.status(200).json({message : "products is delete",product:item});
// });



// // //end point
// // server.get('/',(req,res)=>{
// //     res.send(product);
// // })
// // server.get('/demo',(req,res)=>{
// //     res.send('demo content');
// // })

// server.listen(port,()=>{
//     console.log(`server start at ${port}.`)
// })