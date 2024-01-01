const express = require('express');
const app = express();

const {people} = require('./data');


app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended: false}));
//parse incomming data
app.use(express.json());


app.get('/api/people' , (req, res) => {
    res.status(200).json({succes:true , data:people});
});

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if (!name) return res.status(400).json({succes:false , msg: 'Invalid name'});
    return res.status(201).json({succes:true , person:name});
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