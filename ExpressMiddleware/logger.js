const logger=(req,res,next)=>{
    const methode = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(methode, url, time);
    // res.send() ==>> this terminates the whole cycle
    next(); // --> passes on to the app.get middleware
};
module.exports =logger;
// console.log(module.exports)