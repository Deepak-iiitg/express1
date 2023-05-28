const express = require('express');
const app = express();
app.use((req,res,next)=>{
    console.log('middleware 1');
    next();
})
app.use((req,res,next)=>{
    console.log('middleware2');
    res.send('<h1>welcome to express</h1>');
})
app.listen(4000);