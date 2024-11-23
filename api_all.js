const express=require('express')
const dbConnect =require('./mongodb')
const mongodb=require('mongodb')

const app=express();
app.use(express.json())
//get Api
app.get('/',async (req,resp)=>{
 
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data)
    resp.send(data)

 })
 //post API
 app.post('/', async(req,resp)=>{
    //console.log(req.body)
    let data =await dbConnect();
    let result =await data.insert(req.body)
    resp.send(result)
 })

 // put Api
 app.put('/',async(req,resp)=>{
   let data=await dbConnect()
   let result=data.updateOne(
      {name:"Atherav shelar"},
     {$set:req.body}
   )
    resp.send({result:"update"})
 })
 //delete Apl 
 app.delete('/',async(req,resp)=>{
   //console.log(req.params.name)
   let data = await dbConnect();
   let result=await data.deleteOne({name:"Atherav shelar"});
   resp.send(result)  
 })
 app.listen(4000)  