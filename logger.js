const logger = (req,res,next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log("the method ",method,"the url: ",url,"the time:",time);
    next();
  }

  module.exports = logger;