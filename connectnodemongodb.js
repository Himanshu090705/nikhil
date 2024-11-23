const dbConnect=require('/mongodbc')
const { response } = require('express');
const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'stu';

//async function getData()
async function dbConnect()  {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(database);
  //const collection = db.collection('detail');
  return db.collection('detail') // Corrected this line
  //const response = await collection.find({name:"sonu"}).toArray();
  //console.log(response);
  await client.close(); // Close the client after use
}
//getData();
//dbconnect();
/*dbConnect().then((resp)=>{
   resp.find({name:"Ashwani pandit"}).toArray().then((data)=>{
    console.log(data)
   })
})
   */
//console.log(dbconnect())
//2nd  tarika
const main= async()=>{
   let data=await dbConnect()
   data= await data.find().toArray();
   console.log(data)
}
main();
module.exports=dbConnect();