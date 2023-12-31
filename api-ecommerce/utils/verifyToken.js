const jwt = require("jsonwebtoken");
const {Error} =  require("../utils/error")


const verifyToken =  (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(Error(401,"you are not authenticated!"));
    }

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(Error(403,"token is not valid"));
        req.user = user;
        next() 
    })
}

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            if(err)return next(Error(403,"you are not authorised"));
        }
    })
}
const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res, next,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            if(err)return next(Error(403,"you are not authorised"));
        }
    })
}
module.exports = {verifyToken,verifyUser,verifyAdmin};