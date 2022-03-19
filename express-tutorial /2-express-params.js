const express= require('express');
const res = require('express/lib/response');


const app = express();
const {products} = require("./data")
   

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')

    
})
app.get('/api/products',(req,res)=>{
  const newProducts = products.map((product) =>{
    const {id,name,image} = product;
    return {id,name,image};
  })
  res.json(newProducts);
})
app.get('/api/products/:productId',(req,res)=>{
  // console.log(req);
  // console.log(req.params);
   const {productId} = req.params;  

  const singleProduct1 = products.find((product) =>product.id === Number(productId))
  if (!singleProduct1){
    return res.status(404).send("product does not exist");
  }
  res.json(singleProduct1);
})
app.get('/api/products/:productId/reviews/:reviewId',(req,res)=>{
  const { reviewId } = req.params;
  console.log(reviewId);
  res.send("hello world");
})
app.get('/api/v1/query',(req,res) =>{
  console.log(req.query);

  let {search,limit} = req.query
  let sortedProduct = [...products]
   
  if(search){
    sortedProduct =sortedProduct.filter((product)=>{
          return product.name.startsWith(search)
    })
  }
  if(limit){
    sortedProduct = sortedProduct.slice(0,Number(limit))
  }
  if(sortedProduct.length<1){
    return res.status(200).json({success:true,data:[]}) 
  }
  return res.status(200).json(sortedProduct)
 
  

})
app.listen(5000,()=>{
    console.log("server is listening on port 5000...");
})