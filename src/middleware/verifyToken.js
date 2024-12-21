import jwt from 'jsonwebtoken'

export const verifyToken = async(req,res,next)=>{
    let {token}= req.headers
    jwt.verify(token , 'hello',async(err,decoded)=>{
        
        

     if(err){
         return res.status(401).json({message:'Invalid token',err})
     }
     req.createdBy=decoded
     next()
    })

}