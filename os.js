const os=require('os')
//console.log(os.arch())// how may seen inside the  os artitecture
console.log(os.freemem()/(1024*1024*1024))//how may seen inside the  os ram(byte)
console.log(os.totalmem()/(1024*1024*1024))
console.log(os.hostname())
console.log(os.platform())
console.log(os.userInfo())