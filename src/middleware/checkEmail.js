import bcrypt from 'bcrypt'
import { User } from "../../database/model/user.model.js"

export const checkEmail = async(req,res,next)=>{
     //checkEmail:

     let isFound = await User.findOne({email:req.body.email})
     if(isFound){
        return res.status(409).json({message:'Email Already Exist ', succuss:false})
     }
     //Hash Password:
     req.body.password = bcrypt.hashSync(req.body.password, 8)
     next()
}