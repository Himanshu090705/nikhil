let a=45;
let b=9;
setTimeout(() => {
    b=57;
}, 3000);

let waitingdata=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(450);
    }, 3000);
})

waitingdata.then((data)=>{
    b=data;
    console.log(a+b)
})
console.log("Second exe....")