const express = require('express');
const app = express();

const reqFilter=require('/middleware2')

const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age");
    }
    else if(!req.query.age<12){
        res.send("Not valid age")
    }
    else{

        next();
    }
}
//app.use(reqFilter)


app.get('/', (req, res) => {
    res.send("Welcome to home page");
});

app.get('/users',reqFilter, (req, res) => {
    res.send("Welcome to the users page");
});

app.get('/about', (req, res) => {
    res.send("Welcome to about page");
});

app.listen(2400);

