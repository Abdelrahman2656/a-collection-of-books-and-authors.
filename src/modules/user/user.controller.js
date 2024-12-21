
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../../../database/model/user.model.js'

import { AppError } from '../../utils/appError.js'

const signUp=async(req,res)=>{

    //Insert :
    let user = await User.insertMany(req.body)
    // sendEmail( req.body.email  )
    user[0].password= undefined
    res.status(201).json({message:"User Added Successfully",succuss:true ,user})
}
const signIn = async (req,res,next)=>{
    let user = await User.findOne({email:req.body.email})
    if(user && bcrypt.compareSync(req.body.password, user.password)){
        
        jwt.sign({userId : user._id , name : user.name , role : user.role},'hello',(err,token)=>{
            res.json({message:'success',token})
        })
    }else{
        // res.status(401).json({message:'Incorrect Email or Password'})
        next(new AppError('Incorrect Email or Password',401))
    }
    
   
}

export {
    signIn, signUp
}
