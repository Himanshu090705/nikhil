const http = require('http')
//(1st method)
/*http.createServer((res,resp)=>{
    resp.write("<h1>Hello every one good morning</h1> ");
    resp.end();
}).listen(4600);*/
//(2ns method)
function dataControl(res,resp){
    resp.write("<h1>PRINCE KUMAR VIDYARTHI</h1> ")
    resp.end();
}

http.createServer(dataControl).listen(4400);