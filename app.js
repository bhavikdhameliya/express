                        const express = require('express');
                        const app = express();
                        const port = 5678;
                        const path = require('path');
                        const morgan = require('morgan');

//middleware---------------

//Application-level middleware-------------------------------------------

// Bind application-level middleware to an instance of the
//  app object by using the app.use() and app.METHOD() functions, 
//  where METHOD is the HTTP method of the request that the middleware
//   function handles (such as GET, PUT, or POST) in lowercase.

// This example shows a middleware function with no mount path. 
// The function is executed every time the app receives a request.

                            // app.use((req,res,next)=>{
                            //     console.log(req.query);
                            //     if(req.query.password == '123'){
                            //         next();
                            //     }
                            //     else{
                            //         res.sendStatus(401);
                            //     }
                            // })

//Built-in middleware----------------------------------------------------

// express.static serves static assets such as HTML files, images, and so on.
// express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
// express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+

// app.use(express.static('product'));
app.use(morgan('dev'))
app.use(express.json());
// app.use(express.urlencoded({extended : true}))

const auth = ((req,res,next)=>{
    console.log(req.body);
    if(req.body.password == '123'){
        next();
    }
    else{
        res.sendStatus(401);
    }
})


//Router-level middleware-----------------------------------------------

// Router-level middleware works in the same way as application-level middleware, 
// except it is bound to an instance of express.Router().


                                // const auth = ((req,res,next)=>{
                                //     console.log(req.query);
                                //     if(req.query.password == '123'){
                                //         next();
                                //     }
                                //     else{
                                //         res.sendStatus(401);
                                //     }
                                // })


                         app.get('/',auth,(req,res)=>{
                            res.json({type: 'get 1 method'});
                        })
                        app.post('/',(req,res)=>{
                            res.json({type: 'post method'});
                        })
                        app.put('/',(req,res)=>{
                            res.json({type: 'put method'});
                        })
                        app.patch('/',(req,res)=>{
                            res.json({type: 'patch method'});
                        })
                        app.delete('/',(req,res)=>{
                            res.json({type: 'delete method'});
                        })


                // app.get('/demo',(req,res)=>{

                // res.send('hello world')
                // res.json({type:"Get Method"});
                // res.sendStatus(401);
                // res.sendFile(path.join(__dirname,'product.json'))
                // })

            app.listen(port,()=>{
                console.log(`server start at ${port}.`)
            });