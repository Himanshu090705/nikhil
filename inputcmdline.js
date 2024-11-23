//console.log(process.argv[3]);//inputcmd line

/*const fs=require('fs');//create file with input
const input=process.argv;
fs.writeFileSync(input[2],input[3]);*/

const fs=require('fs');
const input=process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}
 else if(input[2]=='remove'){
        fs.unlinkSync(input[3])
}
else{
    
    console.log("invalid input")
}