
const express= require('express');
const req = require('express/lib/request');

const app = express();
const morgan = require('morgan')

const logger = require('./logger');
const authorize = require('./authorize');

app.use(morgan('tiny'));
// app.use([logger,authorize]);

app.get('/',(req,res)=>{

  res.send("Home");
})

app.get('/about',(req,res) =>{
  res.send("About");
})
app.get('/api/products',(req,res)=>{

  res.send("products");
})
app.get('/api/items',(req,res) =>{
  console.log(req.user);
  res.send("items");
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000...");
})