
const {readFile,writeFile} = require("fs");

readFile('./content/first.txt','utf-8',(error,result) =>{
    if(error){
        console.log("the error value is:",error);
        return
    }
    const first = result;
   readFile('./content/second.txt','utf-8'
   ,(error,result)=>{
       if(error){
           console.log(error);
           return;
       }
      const second = result;
      writeFile('./content/result-sync.txt',
      `Here is the resul,${first},${second}`,
      (error,result)=>{
          if(error){
              console.log(error);
              return;
          }
          console.log(result);
      }
  
      )
   })
})
