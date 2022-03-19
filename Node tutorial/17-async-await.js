const { error } = require('console');
const {readFile,writeFile} = require('fs').promises;

// const util = require('util');
// const readFilepromise = util.promisify(readFile);
// const writeFilepromise = util.promisify(writeFile);

const start = async() =>{
    try {
        const first = await readFile  ('./content/first.txt','utf-8') 
        const second = await readFile  ('./content/second.txt','utf-8') 
        await writeFilepromise('./content/result-mind-grenade.txt',
        `This is awesome: ${first} ${second}`)
        console.log(first," ", second );
    } catch (error) {
        console.log(error); 
    }
}

start();

// getText('./content/first.txt')
//   .then(result =>console.log(result))
//   .catch(error =>console.log(error));

// function getText(path){
//     return new Promise((resolve,reject) =>{
//         readFile(path,'utf-8',(error,data) =>{
//             if(error){
//                 reject(error);
//             }
//             else{
//                 resolve(data);
//             }
            
//         })
//     })
// }
