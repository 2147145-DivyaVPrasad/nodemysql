var http=require('http');
const fs=require('fs')
const path = require('path')
const hostname='127.0.0.1';
const port=5000;
const server =http.createServer(function(request,response)
{
response.writeHead(200,{'Content-Type':'text/html'})
var url=request.url;
console.log(url);
fs.readFile(path.join(__dirname,'nodeindex.html'),'utf-8',(err,data)=>

{if(err)throw err;
response.end(data);
});



});


server.listen(port,hostname,()=>
{
    console.log('Node js hosting at %s on port %s',hostname,port);
});






