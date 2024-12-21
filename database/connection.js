import mongoose from "mongoose";

export const dbconnection= mongoose.connect('mongodb://127.0.0.1:27018/mongoose1').then(()=>{
    console.log('database connected successfully');
    
}).catch(()=>{
    console.log('Database Error');
})