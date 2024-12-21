export function catchError (callback){
    return(req , res ,next)=>{
        callback(req,res,next).catch(error=>{
            // return res.status(500).json({message:error.message , success : false , error})
            next(error)
        })
    }

}