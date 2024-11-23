const express=require('express')
const path=require('path')

const app=express();

const publicpath=path.join(__dirname,'public');

//app.use(express.static(publicpath))
app.set('view engine','ejs')

app.get('/about ',(_,resp)=>{
    resp.sendFile(`${publicpath}/about.html`) 
})

app.get('/profile',(_,resp)=>{
    const user={
        name:"Prince kumar vidyarthi",
        email:"vidyarthiprince@gmail.com",
        sem:3,
        Div:"3B",
        skills:['Html','CSS','js','C','C++','Python','Java','PHP']
    
    }
    resp.render('profile',{user})
})
app.get('/header',(_,resp)=>{
    resp.render('header')
})
app.get('/login',(_,resp)=>{
    resp.render('login')
})

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicpath}/help.htm`)
})

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicpath}/pagenotfound.html`)
})
app.listen(2600);