const express=require('express')
const EventEmitter=require("events")
const event=new  EventEmitter()

const app =express()
let count =0
event.on("countApi",()=>{
    count++
    console.log("Event called",count)
})
//create api
app.get("/",(req,resp)=>{
    resp.send("called Api")
    event.emit("countApi")//generate emitter
})

app.get("/search",(req,resp)=>{
    resp.send("search Api")
    event.emit("countApi")
})

app.get("/update",(req,resp)=>{
    resp.send("update Api")
    event.emit("countApi")
})
app.listen(5000);