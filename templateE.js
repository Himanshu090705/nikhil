/*const express=require('express')
const path=require('path')

const app=express();

const publicpath=path.join(__dirname,'public');

app.set('view engine','ejs')

//app.use(express.static(publicpath))
app.get('/home',(_,resp)=>{
    resp.sendFile(`${publicpath}/home.htm`)
})

app.get('/profile ',(_,resp)=>{
    resp.render('profile') 
})

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicpath}/help.htm`)
})
//app.get('*',(_,resp)=>{
   // resp.sendFile(`${publicpath}/pagenotfound.html`)
//})
    
app.listen(2900);
*/