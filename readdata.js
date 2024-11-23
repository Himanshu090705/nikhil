//const { MongoClient } = require("mongodb");
//const { connect } = require("mongoose");
//const url = 'mongodb://localhost:27017';
  const database="stu"
  const client =new MongoClient(url)
  const dbConnect=require('./mongodb')

//async function getData(){

//let result=await client.connect();
dbConnect().then((resp)=>{
 //db = result.db(database);
 resp.find({name:"Deer"}).toArray().then((data)=>{
    console.log(data)
 })
// return db.collection('detail');
})
//getData();

const main=async()=>{
   let data=await connect();
    data =  await data.find({}).toArray()
    console.log(data)


}
main();
