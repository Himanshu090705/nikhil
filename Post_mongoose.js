const express=require('express');
require('./config2');
const Fin = require('./fin.js');


const app=express();

app.post('/create',(req,resp)=>{
    resp.send("done")
})
app.listen(1800);

