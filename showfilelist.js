const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'files')
//console.log(dirpath)
//for(i=0;i<5;i++){
    //fs.writeFileSync(dirpath+"/hello"+i+".txt","Hello everyone")
    //fs.writeFileSync(`hello${i}.txt`,"Hello everyone")
//}
fs.readdir(dirpath,(err,files)=>{
   // console.log(files[2])
   files.forEach((iteam)=>{
    console.log("Files name is:",iteam)
   })
})
