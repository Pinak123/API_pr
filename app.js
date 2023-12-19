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
    res.json(secPr);
});






app.listen(3000, ()=>console.log('listening on port 3000'));