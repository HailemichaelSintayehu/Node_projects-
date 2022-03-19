const { error } = require('console');
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',{highWaterMark:30000,encoding:"utf-8"})

stream.on('data',(result) =>{
    console.log((result));
})
stream.on('error',(error)=>{
    console.log(error);
})
