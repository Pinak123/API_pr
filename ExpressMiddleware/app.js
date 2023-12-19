const express = require('express');
const app = express();
const logger = require('./logger');
const auth1 = require('./auth');
// request ==> middleware ==> response
//................->logger function moved to logger.js<-...........
// app.use(logger);// --> instead of putting logger in app.get of all routs
// app.use('/about',logger);//-->The middleware will be invoked only on /about route,in this case /about and /about/profile

//Multiple middleware functions


// app.use([logger, auth1]) /// the middlewares will be executed in order ie;1st logger then auth1

//////// You may also use the morgan middleware,,, you just have to import it throug npm


app.get('/' , (req, res) => {
    res.send("Home page");

})


app.get('/about', (req, res) => {
    res.send("about");
});
app.get('/about/profile',[logger, auth1], (req, res) => {//auth added here
    res.send("profile");
});

app.get('/contents', (req, res) => {
    res.send("contents");
});

// console.log(logger,"hello");

app.listen(3000, ()=>console.log('listening on port 3000'));