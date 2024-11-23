const mysql=require('mysql')

const con=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"prince434",
    database:"test"
})
con.connect((err)=>{
    if(err){
        console.log("Worng!")
    }
    else{
        console.log("connection successfully!")
    }
})