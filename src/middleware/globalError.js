export const globalError  = (err,req,res,next)=>{
    let code= err.statusCode || 500
    res.status(code).json({message:err.message,error:"error",code, stack:err.stack})
    
}