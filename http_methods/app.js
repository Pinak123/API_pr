const express = require('express');
const app = express();

const {people} = require('./data');


app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));



app.get('/api/people' , (req, res) => {
    res.status(200).json({succes:true , data:people});
});

app.post('/login', (req, res) => {
    const {name}=req.body;
    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide valid credentials.');
});



app.listen(3000 , ()=>{
    console.log('listening on port 3000');
})