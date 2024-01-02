const {people} = require('../data');

const getUsers = (req, res) => {
    res.status(200).json({succes:true , data:people});
};
const createUsers = (req, res) => {
    const {name} = req.body;
    if (!name) return res.status(400).json({succes:false , msg: 'Invalid name'});
    return res.status(201).json({succes:true , person:name});
};
const replaceUsers = (req, res) => {
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
};
const deleteUsers = (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) return res.status(404).json({succes:false , msg:  `No person found with id ${id}`});
    const newPeople = people.filter((person)=> person.id !== Number(id));
    return res.status(200).json({succes:true , data:newPeople});
} 

module.exports ={getUsers, replaceUsers ,createUsers, deleteUsers};