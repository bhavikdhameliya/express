const express = require('express');
const app = express();
const port = 5678;
const path = require('path');

//middleware---------------

//Application-level middleware

// app.use((req,res,next)=>{
//     console.log(req.query);
//     if(req.query.password == '123'){
//         next();
//     }
//     else{
//         res.sendStatus(401);
//     }
// })



//Router-level middleware


const auth = ((req,res,next)=>{
    console.log(req.query);
    if(req.query.password == '123'){
        next();
    }
    else{
        res.sendStatus(401);
    }
})

//Built-in middleware



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