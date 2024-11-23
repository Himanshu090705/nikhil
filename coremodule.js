//const fs=require('fs');//The module we have to  import are global module(non-globalmodule)
console.log("Hello every onee")//The module we have to don't import are global module(globalmodule)
//fs.writeFileSync("prince2.txt","code step by step")(1st method)

console.log("->>>",__dirname);//__dirnmae find directory  name
const px=require('fs').writeFileSync;//(2nd method)
px("utu2.txt","Good morning")//second method
