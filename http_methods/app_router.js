const express = require('express');
const app = express();

const people= require('./routs/people');
const auth = require('./routs/auth');
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended: false}));
//parse incomming data
app.use(express.json());

app.use('/api' , people)
app.use('/login', auth) 






app.listen(3000 , ()=>{
    console.log('listening on port 3000');
})