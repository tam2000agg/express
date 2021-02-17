const express=require('express');
const http=require('http');
const hostname='localhost';
const port=3000;
const morgan=require('morgan');
const app=express();
app.use(morgan('dev')); //dev=development and morgan is used to print the additional info. to screen
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
  // console.log(req.headers); u dont need this if u have morgan
   res.statusCode=200;
   res.setHeader('Content-Type','text/html');
   res.end('<html><body><h1>this is an express server</h1></body></html>') ;

});

const server=http.createServer(app);
server.listen(port,hostname,()=>
{
    console.log(`server runnning at http://${hostname}:${port}`);
})

