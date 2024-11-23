const { connect } = require('mongoose');
const dbConnect=require('./mongodb');

const updateData=async()=>{

    let data= await dbConnect()
    let result= await   data.update(
        {name:"Atherav shelar"},{
            $set:{Branch:"BBA",Div:"5A",sem:3}
        }
    );

    console.warn(result)
}
updateData();  