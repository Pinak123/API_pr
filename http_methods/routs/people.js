const express = require('express');
const router = express.Router();
const {people} = require('../data');
const {getUsers, replaceUsers ,createUsers, deleteUsers} = require('../controllers/people');

// router.get('/people' , getUsers);

// router.post('/people', createUsers);
////****Alternate way */
router.route('/people').get(getUsers).post(createUsers);

//// Setting up put request
router.put('/postman/:id', replaceUsers);


/////Delete method
router.delete('/people/:id', deleteUsers);


module.exports = router;