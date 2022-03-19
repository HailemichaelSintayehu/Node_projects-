let http = require('http')

let fs = require('fs');
const { error } = require('console');

http.createServer((req,res) =>{
    // const text = fs.readFileSync('./content/big.txt','utf-8')
    // res.end(text);

    const fileSystem = fs.createReadStream('./content/big.txt','utf-8');
    fileSystem.on('open',()=>{
        fileStream.pipe(res)

    })
    fileSystem.on('error',()=>{
        res.end(error)
    })

    })
.listen(5000)