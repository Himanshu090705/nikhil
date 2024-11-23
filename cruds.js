const fs=require('fs');
const path=require('path')
const dirpath=path.join(__dirname,'crud')
const filepath=`${dirpath}/utu.txt`;
//fs.writeFileSync(filepath,"This  is a simple  text file")
//fs.readFile(filepath,'utf8',(err,item)=>{
    //console.log(item)
//})
//fs.appendFile(filepath,"and file name is utu.txt",(err)=>{
    //if(!err)
       /// console.log("file is updated")
//})
//fs.rename(filepath,`${dirpath}/fruite.txt`,(err)=>{
    //if(!err)
       // console.log("file name change")
//})
fs.unlinkSync(`${dirpath}/fruite.txt`);