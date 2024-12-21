
import { Note } from "../../../database/model/note.model.js"
import { AppError } from "../../utils/appError.js"


const addNote = async (req ,res,next)=>{
    let note = await Note.insertMany(req.body)
    res.status(201).json({message:'Note Added Successfully',success:true, note})
 
}
const getNote = async(req,res)=>{
 
    
    let notes =await Note.find({createdBy:req.createdBy.userId})
    res.status(200).json({message:"Success", success:true , notes})
}
const updateNote =async (req , res)=>{
    let note = await Note.findByIdAndUpdate(req.params.id , req.body , {new : true})
    res.status(200).json({message:"Updated", success:true , note})
}
const deleteNote =async (req , res,next)=>{
    let note = await Note.findByIdAndDelete(req.params.id)
    // if(!note) res.status(404).json({message:"Not Found"})
    if(!note) return next(new AppError('Not Found',404))
    res.status(200).json({message:"deleted", success:true , note})
}


export{
    addNote,
    getNote,
    updateNote,
    deleteNote
}