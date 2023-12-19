const auth1=(req,res,next) => {
    const {user} = req.query;
    if (user==='Pinak') {
        console.log('user authorizes') ;
        next();
    }else{
        res.status(401).send("Unauthorized");
    }



    
};
module.exports =auth1;