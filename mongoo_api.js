const mongoose=require('mongoose');
const finSchema= new mongoose.Schema({
    name:String,
    sem:String,
    div:String,
    email:String,
    password:Number
});
module.exports=mongoose.model('fin',finSchema);