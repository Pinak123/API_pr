const express= require('express');
const app = express();

const {products} = require('./data');

app.get('/',(req , res) => {
    res.write("<h1>Home Page</h1>");
    res.write("<a href='./products/'>Products</a>");
    res.end();

})
app.get('/products',(req , res) => {
    res.write("<h1>Products</h1>");
    res.write("<a href='/products/api/'>Product api</a>")
    res.end();
});
app.get('/products/api/',(req , res) => {
    const newP=products.map(product =>{
        const {id,name,image} = product;
        return {id,name,image};
    });
    res.json(newP);
});

//Getting a particular product
app.get('/products/api/:productID',(req , res) => {
    const {productID} = req.params;
    const secPr=products.find(product=>product.id==productID);
    if (!secPr) {
       return res.status(404).send("Product not found;");
    };
    res.json(secPr);
});


//////////////////  String Parameters //////////////////

app.get('/products/v1/query',(req, res) => {
    const {search , limit} = req.query;
    let sortedProduct = [...products]
    if (search){
        sortedProduct =sortedProduct.filter(product=>{
            return product.name.startswith(search)
        })
    }
    if(limit){
        sortedProduct=sortedProduct.slice(0,Number(limit))
    };
    res.status(200).json(sortedProduct);

})









app.listen(3000, ()=>console.log('listening on port 3000'));