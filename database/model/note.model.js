import mongoose, { model, Schema } from "mongoose";

const schema = new Schema({
    title:String,
    body:String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})
export const Note = model('Note',schema)