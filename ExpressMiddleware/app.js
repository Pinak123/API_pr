const express = require('express');
const app = express();
const logger = require('./logger');

// request ==> middleware ==> response
//................->logger function moved to logger.js<-...........


app.get('/',logger , (req, res) => {
    res.send("Home page");

})


app.get('/about',logger, (req, res) => {
    res.send("about");
});
// console.log(logger,"hello");

app.listen(3000, ()=>console.log('listening on port 3000'));