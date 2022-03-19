const http = require('http');
const {readFileSync} = require('fs');

//get all files 
const homPage = readFileSync('./nav-app/index.html')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    const url = req.url;

    if(url ==="/"){

        res.writeHead(200,{ 
            "content-type":"text/html"
        })
        res.write(homPage) 
        res.end();
    }
    else if (url === "/contact"){
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.write(`<h1>contact page</h1>`) 
        res.end();

    }
    else{
        res.writeHead(404,{
            "content-type":"text/html"
        })
        res.write(`<p>page not found</p>`) 
        res.end();

    }


})
server.listen(5000)