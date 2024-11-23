const { MongoClient } = require("mongodb");

const databaseName='stu';
const url = "mongodb://localhost:27017";
const client=new MongoClient(url);

async function dbConnect(){
    let result= await client. connect();
    db=result.db(databaseName)
    return db.collection('detail')
}
module.exports=dbConnect;