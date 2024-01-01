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

//// Setting up put request
app.put('/api/postman/:id', (req, res) => {
    const {name} = req.body;
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id))
    if (!person) return res.status(404).json({succes:false , msg: 'No such person'});
    const newPeople=people.map((person) =>{
        if (person.id === Number(id)) {
            person.name = name;
            
        };
        return person
    })
    res.status(200).json({succes:true , people: people});
});


/////Delete method
app.delete('/api/delete/:id', (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) return res.status(404).json({succes:false , msg:  `No person found with id ${id}`});
    const newPeople = people.filter((person)=> person.id !== Number(id));
    return res.status(200).json({succes:true , data:newPeople});
} );




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