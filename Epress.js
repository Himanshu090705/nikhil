const express=require('express')
const app=express();
app.get("",(req,res)=>{
    console.log("This set of browser->>",req.query.name)
    res.send(`<h1>Welconeb to frist home page</h1><a href= "/about" > Go to about page</a>`);
})

app.get("/about",(req,res)=>{
    res.send(`
        <input type='text' placeholder='username' value=${req.query.name}/><br><br>
        <button>Submit</button>
        <a href= "/" > Go to Home  page</a>
        `);
})

app.get("/contact",(req,res)=>{
    res.send(`[{
        name:"Prince vidyarthi",
        email:"vidyarthiprince@gmail.com"
    },
    {
        name:"Ashish pandit",
        email:"vidyarthiprince@gmail.com"
        
    }
    ]`);
})

app.listen(5600)