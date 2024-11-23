const dbConnect=require('./mongodb')

const deleteData= async()=>{
    console.log("Deletee data")
    let data= await dbConnect()
    let result= await data.deleteOne({name:"Aditya yadav"})
    console.warn(result)
if(result.acknowledged){
    console.log("Record data")
}
}
deleteData();