const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url ==="/sa"){
        res.end("this they the home page")
    }
    if(req.url ==="/about"){
        res.end("this the the about page")
    } 
    res.end(`
     <h1>Oops!<h1>
     <p>We don't have such pages in the website </p>
     <a href = "/sa">back to home page </a>
    `)
   

})

server.listen(5000);