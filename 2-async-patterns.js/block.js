const http = require("http");

const server = http.createServer((req,res) =>{
   if(req.url ==="/"){
       res.end('Home page')
   }
   if(req.url ==="about"){
       for(i=0;i<1000;i++){
           for(j=0;j<1000;j++){
               console.log(`${i} ${j}`)
           }
       }
       res.end('About page')
   }
   res.end("Error pages")
})
server.listen(5000,() =>{
    console.log("server listening the port: 5000");
})