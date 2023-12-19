const express = require('express');
const app = express();
const logger = require('./logger');

// request ==> middleware ==> response
//................->logger function moved to logger.js<-...........
app.use(logger);// --> instead of putting logger in app.get of all routs

app.get('/' , (req, res) => {
    res.send("Home page");

})


app.get('/about', (req, res) => {
    res.send("about");
});

app.get('/contents', (req, res) => {
    res.send("contents");
});

// console.log(logger,"hello");

app.listen(3000, ()=>console.log('listening on port 3000'));